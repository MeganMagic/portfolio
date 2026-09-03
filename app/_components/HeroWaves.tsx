"use client";

import { useState } from "react";

import useIsDarkTheme from "@/utils/useIsDarkTheme";

import GradientWaves, { GradientWavesProps } from "./GradientWaves";

/**
 * Full-bleed hero background: the WebGL wave field plus the CSS layers that keep
 * it legible — an understudy gradient (first paint, and whenever WebGL2 is
 * unavailable), a scrim behind the heading, and a fade into the next section.
 *
 * Palettes are the brand tokens from globals.css; `tilt` sits lower than the
 * upstream default so the crest glow clears the heading. Measured worst-case
 * contrast in the heading band: light 12.0 (h1) / 3.0 (em accent), dark 10.5 / 5.2.
 */
const WAVE_PRESETS = {
  light: { horizonColor: "#0087FF", waveColor: "#2BFFBA", crestColor: "#E5FF1E", fogDepth: 15 },
  dark: { horizonColor: "#0087FF", waveColor: "#2BFFBA", crestColor: "#CBE500", fogDepth: 24 },
} satisfies Record<"light" | "dark", GradientWavesProps>;

const HeroWaves = () => {
  const isDark = useIsDarkTheme();
  const [wavesPainted, setWavesPainted] = useState(false);

  return (
    <div aria-hidden className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden z-0">
      {!wavesPainted && <div className="hero-fallback" />}
      <GradientWaves
        {...WAVE_PRESETS[isDark ? "dark" : "light"]}
        tilt={1.28}
        brightness={1}
        speed={0.4}
        detail="medium"
        mouseInteraction={false}
        onFirstPaint={() => setWavesPainted(true)}
        className="absolute inset-0"
      />
      <div className="hero-scrim" />
      <div className="hero-foot" />
    </div>
  );
};

export default HeroWaves;
