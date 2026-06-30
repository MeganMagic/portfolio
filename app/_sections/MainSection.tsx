import { useTranslations } from "next-intl";

// 모자이크 프로스티드 그리드 — 셀마다 자기 영역만 backdrop-blur → 셀별 색 차이 + 경계(seam)
const GRID_COLS = 6;
const GRID_ROWS = 6;
const GRID_BLUR_PX = 32;

const MainSection = () => {
  const t = useTranslations("Main");

  return (
    <div
      id="main"
      className="relative w-full flex flex-col items-center justify-center pt-16 md:pt-24 pb-32"
      style={{ minHeight: "clamp(600px, 80vh, 1080px)" }}
    >
      {/* Full-bleed ambient color blobs (CSS drift + blur — see globals.css) */}
      <div aria-hidden className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden z-0">
        <div
          className="hero-blob w-[460px] h-[460px] md:w-[620px] md:h-[620px] top-[-12%] left-[6%] bg-blue/20 dark:bg-blue/30"
          style={{ animation: "hero-drift-a 22s ease-in-out infinite" }}
        />
        <div
          className="hero-blob w-[440px] h-[440px] md:w-[600px] md:h-[600px] top-[8%] right-[4%] bg-green/20 dark:bg-green/30"
          style={{ animation: "hero-drift-b 26s ease-in-out infinite" }}
        />
        <div
          className="hero-blob w-[380px] h-[380px] md:w-[520px] md:h-[520px] bottom-[-16%] left-[32%] bg-lime/15 dark:bg-lime/25"
          style={{ animation: "hero-drift-c 30s ease-in-out infinite" }}
        />
      </div>

      {/* 모자이크 프로스티드 그리드 — blob(z-0) 위, 텍스트(z-10) 아래.
          셀마다 자기 영역만 backdrop-blur → 셀별 색 차이 + 경계(seam) */}
      <div
        aria-hidden
        className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen grid z-[5]"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => (
          <div
            key={i}
            className="border border-white/10"
            style={{ backdropFilter: `blur(${GRID_BLUR_PX}px)`, WebkitBackdropFilter: `blur(${GRID_BLUR_PX}px)` }}
          />
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
