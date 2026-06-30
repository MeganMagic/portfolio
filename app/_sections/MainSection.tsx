import { useTranslations } from "next-intl";

// 세로 직사각형 패널 너비(%) — 비대칭 분할
const PANEL_WIDTHS = [50, 30, 15, 5];

// radial-gradient blob: blur 필터 없이 부드러운 글로우 (rgb, 중심 alpha)
const blobGradient = (rgb: string, alpha: number) =>
  `radial-gradient(circle, rgba(${rgb}, ${alpha}) 0%, rgba(${rgb}, 0) 70%)`;

const MainSection = () => {
  const t = useTranslations("Main");

  return (
    <div
      id="main"
      className="relative w-full flex flex-col items-center justify-center pt-16 md:pt-24 pb-32"
      style={{ minHeight: "clamp(600px, 80vh, 1080px)" }}
    >
      {/* Full-bleed ambient glow — radial-gradient (블러 필터 없음, drift만 GPU) */}
      <div aria-hidden className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden z-0">
        <div
          className="hero-blob w-[460px] h-[460px] md:w-[620px] md:h-[620px] top-[-12%] left-[6%]"
          style={{ background: blobGradient("0, 122, 255", 0.45), animation: "hero-drift-a 22s ease-in-out infinite" }}
        />
        <div
          className="hero-blob w-[440px] h-[440px] md:w-[600px] md:h-[600px] top-[8%] right-[4%]"
          style={{ background: blobGradient("0, 198, 118", 0.45), animation: "hero-drift-b 26s ease-in-out infinite" }}
        />
        <div
          className="hero-blob w-[380px] h-[380px] md:w-[520px] md:h-[520px] bottom-[-16%] left-[32%]"
          style={{ background: blobGradient("226, 255, 0", 0.35), animation: "hero-drift-c 30s ease-in-out infinite" }}
        />
      </div>

      {/* 세로 직사각형 패널 — blob(z-0) 위, 텍스트(z-10) 아래.
          backdrop-filter 없이 반투명 틴트 + border만 → 뒤 그라데이션이 비쳐 색이 흐르고 경계(seam) */}
      <div aria-hidden className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen flex z-[5]">
        {PANEL_WIDTHS.map((w, i) => (
          <div key={i} className="h-full bg-white/[0.04] border-r border-white/15" style={{ width: `${w}%` }} />
        ))}
      </div>

      <h1 className="hero-rise relative z-10 w-full p-6 md:p-8 leading-[1.15]" style={{ animationDelay: "0.5s" }}>
        {t.rich("heading", { em: chunks => <em>{chunks}</em>, br: () => <br /> })}
      </h1>

      <p
        className="hero-rise relative z-10 text-center text-base font-normal text-foreground/70 break-keep"
        style={{ animationDelay: "1.5s" }}
      >
        {t.rich("subtitle", { br: () => <br /> })}
      </p>
    </div>
  );
};

export default MainSection;
