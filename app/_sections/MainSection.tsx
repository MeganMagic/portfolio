import { useTranslations } from "next-intl";

import HeroWaves from "@/_components/HeroWaves";

const MainSection = () => {
  const t = useTranslations("Main");

  return (
    <div
      id="main"
      className="relative w-full flex flex-col items-center justify-center pt-16 md:pt-24 pb-32"
      style={{ minHeight: "clamp(600px, 80vh, 1080px)" }}
    >
      <HeroWaves />

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
