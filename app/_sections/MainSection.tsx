import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("Main");

  return (
    <div
      id="main"
      className="relative w-full flex flex-col items-center justify-center py-16 md:py-24"
      style={{ minHeight: "clamp(600px, 80vh, 1080px)" }}
    >
      {/* Full-bleed ambient color blobs (CSS drift — see globals.css) */}
      <div aria-hidden className="absolute -top-16 bottom-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden z-0">
        <div
          className="hero-blob w-[460px] h-[460px] md:w-[620px] md:h-[620px] top-[-12%] left-[6%] bg-blue/20 dark:bg-blue/30"
          style={{ animation: "hero-drift-a 22s ease-in-out infinite alternate" }}
        />
        <div
          className="hero-blob w-[440px] h-[440px] md:w-[600px] md:h-[600px] top-[8%] right-[4%] bg-green/20 dark:bg-green/30"
          style={{ animation: "hero-drift-b 26s ease-in-out infinite alternate" }}
        />
        <div
          className="hero-blob w-[380px] h-[380px] md:w-[520px] md:h-[520px] bottom-[-16%] left-[32%] bg-lime/15 dark:bg-lime/25"
          style={{ animation: "hero-drift-c 30s ease-in-out infinite alternate" }}
        />
      </div>

      <h1 className="hero-rise relative z-10 w-full p-6 md:p-8">
        {t.rich("heading", { em: chunks => <em>{chunks}</em>, br: () => <br /> })}
      </h1>

      <p
        className="hero-rise relative z-10 text-center text-base md:text-lg font-normal text-gray-400 break-keep"
        style={{ animationDelay: "0.12s" }}
      >
        {t.rich("subtitle", { br: () => <br /> })}
      </p>
    </div>
  );
};

export default MainSection;
