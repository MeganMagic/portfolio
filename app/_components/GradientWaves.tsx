"use client";

import { useEffect, useRef } from "react";

import { Mesh, Program, Renderer, Triangle } from "ogl";

/**
 * WebGL2 gradient-wave field, ported from React Bits
 * (https://reactbits.dev/backgrounds/gradient-waves) with three changes:
 *
 * - honours `prefers-reduced-motion` by drawing a single static frame instead of animating
 * - bails out when WebGL2 is unavailable, leaving the caller's CSS fallback visible
 * - re-applies every uniform on prop change, so the theme toggle can retint it live
 *
 * The shader raymarches a plasma height field, so cost is dominated by fragment
 * count rather than by `detail`; the march converges long before the step cap.
 */

const VERTEX = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;

const DETAIL_STEPS = { low: 40, medium: 70, high: 110 } as const;

/** Frozen timestamp used for the single frame drawn under `prefers-reduced-motion`. */
const STATIC_FRAME_TIME = 8;

export type GradientWavesProps = {
  horizonColor?: string;
  waveColor?: string;
  crestColor?: string;
  speed?: number;
  amplitude?: number;
  waveScale?: number;
  waveRatio?: number;
  swell?: number;
  turbulence?: number;
  tilt?: number;
  zoom?: number;
  height?: number;
  fogDepth?: number;
  detail?: keyof typeof DETAIL_STEPS;
  brightness?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  parallaxStrength?: number;
  grain?: boolean;
  grainIntensity?: number;
  className?: string;
  /** Fired once the first frame has been rendered, so a CSS fallback can step aside. */
  onFirstPaint?: () => void;
};

type WaveParams = Required<Omit<GradientWavesProps, "className" | "onFirstPaint">>;

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const applyParams = (program: Program, params: WaveParams) => {
  const { uniforms } = program;

  uniforms.uSpeed.value = params.speed;
  uniforms.uAmplitude.value = params.amplitude;
  uniforms.uWaveScale.value = params.waveScale;
  uniforms.uWaveRatio.value = params.waveRatio;
  uniforms.uSwell.value = params.swell;
  uniforms.uTurbulence.value = params.turbulence;
  uniforms.uTilt.value = params.tilt;
  uniforms.uZoom.value = params.zoom;
  uniforms.uHeight.value = params.height;
  uniforms.uFogDepth.value = params.fogDepth;
  uniforms.uSteps.value = DETAIL_STEPS[params.detail];
  uniforms.uBrightness.value = params.brightness;
  uniforms.uOpacity.value = params.opacity;
  uniforms.uGrain.value = params.grain ? 1 : 0;
  uniforms.uGrainIntensity.value = params.grainIntensity;
  uniforms.uParallax.value = params.parallaxStrength;
  uniforms.uEnableMouse.value = params.mouseInteraction;

  uniforms.uHorizonColor.value.set(hexToRgb(params.horizonColor));
  uniforms.uWaveColor.value.set(hexToRgb(params.waveColor));
  uniforms.uCrestColor.value.set(hexToRgb(params.crestColor));
};

const GradientWaves = ({
  horizonColor = "#5227FF",
  waveColor = "#FF9FFC",
  crestColor = "#FFFFFF",
  speed = 0.4,
  amplitude = 2.5,
  waveScale = 0.6,
  waveRatio = 0.9,
  swell = 35,
  turbulence = 20,
  tilt = 1.11,
  zoom = 1,
  height = 5.5,
  fogDepth = 15,
  detail = "medium",
  brightness = 1,
  opacity = 1,
  mouseInteraction = false,
  parallaxStrength = 0.5,
  grain = true,
  grainIntensity = 0.05,
  className,
  onFirstPaint,
}: GradientWavesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{ program: Program; draw: (time: number) => void } | null>(null);

  const params: WaveParams = {
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    zoom,
    height,
    fogDepth,
    detail,
    brightness,
    opacity,
    mouseInteraction,
    parallaxStrength,
    grain,
    grainIntensity,
  };

  // Read by the setup effect (which runs once) and by the rAF loop, both of which
  // must see the latest props without re-creating the GL context.
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const onFirstPaintRef = useRef(onFirstPaint);
  onFirstPaintRef.current = onFirstPaint;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });

    // The shader is GLSL ES 3.00; without WebGL2 it cannot compile, so leave the
    // canvas out of the DOM entirely and let the caller's CSS fallback show through.
    if (!renderer.isWebgl2) {
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
      return;
    }

    const { gl } = renderer;
    gl.clearColor(0, 0, 0, 0);

    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const program = new Program(gl, {
      vertex: VERTEX,
      fragment: FRAGMENT,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uSpeed: { value: 0.4 },
        uAmplitude: { value: 2.5 },
        uWaveScale: { value: 0.6 },
        uWaveRatio: { value: 0.9 },
        uSwell: { value: 35 },
        uTurbulence: { value: 20 },
        uTilt: { value: 1.11 },
        uZoom: { value: 1 },
        uHeight: { value: 5.5 },
        uFogDepth: { value: 15 },
        uSteps: { value: 70 },
        uBrightness: { value: 1 },
        uOpacity: { value: 1 },
        uGrain: { value: 1 },
        uGrainIntensity: { value: 0.05 },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uParallax: { value: 0.5 },
        uEnableMouse: { value: false },
        uHorizonColor: { value: new Float32Array([1, 1, 1]) },
        uWaveColor: { value: new Float32Array([1, 1, 1]) },
        uCrestColor: { value: new Float32Array([1, 1, 1]) },
      },
    });

    // Seed the uniforms before the first draw, so the opening frame is already
    // themed instead of flashing the shader's neutral defaults.
    applyParams(program, paramsRef.current);

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const draw = (time: number) => {
      program.uniforms.iTime.value = time;
      renderer.render({ scene: mesh });
    };
    sceneRef.current = { program, draw };

    const setSize = () => {
      const { width, height: boxHeight } = container.getBoundingClientRect();
      renderer.setSize(Math.max(1, Math.floor(width)), Math.max(1, Math.floor(boxHeight)));
      const resolution = program.uniforms.iResolution.value;
      resolution[0] = gl.drawingBufferWidth;
      resolution[1] = gl.drawingBufferHeight;
      draw(program.uniforms.iTime.value);
    };

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);
    setSize();
    onFirstPaintRef.current?.();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pointer = { current: [0.5, 0.5], target: [0.5, 0.5] };
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.target[0] = (event.clientX - rect.left) / rect.width;
      pointer.target[1] = 1 - (event.clientY - rect.top) / rect.height;
    };
    const onPointerLeave = () => {
      pointer.target[0] = 0.5;
      pointer.target[1] = 0.5;
    };
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    let raf = 0;
    let inView = true;
    let pageVisible = !document.hidden;
    const startedAt = performance.now();

    const loop = (now: number) => {
      const [targetX, targetY] = paramsRef.current.mouseInteraction ? pointer.target : [0.5, 0.5];
      pointer.current[0] += 0.05 * (targetX - pointer.current[0]);
      pointer.current[1] += 0.05 * (targetY - pointer.current[1]);
      program.uniforms.uMouse.value[0] = pointer.current[0];
      program.uniforms.uMouse.value[1] = pointer.current[1];
      draw((now - startedAt) * 0.001);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (reducedMotion.matches || raf !== 0 || !inView || !pageVisible) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf === 0) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Idle whenever the hero is off-screen or the tab is backgrounded: the shader is
    // cheap per frame, but an always-on rAF keeps the GPU awake and drains battery.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onReducedMotionChange = () => {
      if (!reducedMotion.matches) {
        start();
        return;
      }
      stop();
      draw(STATIC_FRAME_TIME);
    };
    reducedMotion.addEventListener("change", onReducedMotionChange);

    if (reducedMotion.matches) draw(STATIC_FRAME_TIME);
    else start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      sceneRef.current = null;
      canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    applyParams(scene.program, paramsRef.current);

    // Repaint immediately so prop changes land even while the rAF loop is idle
    // (off-screen, backgrounded tab, or reduced motion).
    scene.draw(scene.program.uniforms.iTime.value);
  }, [
    horizonColor,
    waveColor,
    crestColor,
    speed,
    amplitude,
    waveScale,
    waveRatio,
    swell,
    turbulence,
    tilt,
    zoom,
    height,
    fogDepth,
    detail,
    brightness,
    opacity,
    mouseInteraction,
    parallaxStrength,
    grain,
    grainIntensity,
  ]);

  return <div ref={containerRef} aria-hidden className={className} />;
};

export default GradientWaves;
