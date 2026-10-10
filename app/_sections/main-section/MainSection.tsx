// import { useTranslations } from "next-intl";

import MainSectionAnimation from "./MainSectionAnimation";
import MainSectionContainer from "./MainSectionContainer";

//
//
//

const MainSection = () => {
  // const t = useTranslations("Main");

  // return (
  //   <SectionContainer>
  //     <Title />
  //     <CardAnimation />
  //     <CTAButton />
  //   </SectionContainer>
  // )

  return (
    <MainSectionContainer>
      {/* <h1 className="hero-rise relative z-10 w-full p-6 md:p-8 leading-[1.15]" style={{ animationDelay: "0.5s" }}>
        {t.rich("heading", { em: chunks => <em>{chunks}</em>, br: () => <br /> })}
      </h1>

      <p
        className="hero-rise relative z-10 text-center text-base font-normal text-foreground/70 break-keep"
        style={{ animationDelay: "1.5s" }}
      >
        {t.rich("subtitle", { br: () => <br /> })}
      </p> */}

      <MainSectionAnimation />
    </MainSectionContainer>
  );
};

export default MainSection;
