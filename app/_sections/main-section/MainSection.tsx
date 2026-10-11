// import { useTranslations } from "next-intl";

import MainSectionAnimation from "./MainSectionAnimation";
import MainSectionContainer from "./MainSectionContainer";

//
//
//

const MainSection = () => {
  return (
    <MainSectionContainer>
      <MainSectionAnimation />

      <div
        className="
          absolute w-full top-0 h-[calc((100%_-_var(--main-primary-height))_/_2_-_var(--main-gap))]
          from-primary/70 bg-gradient-to-b to-primary/0
        "
      />
      <div
        className="
          absolute w-full bottom-0 h-[calc((100%_-_var(--main-primary-height))_/_2_-_var(--main-gap))]
          from-primary/70 bg-gradient-to-t to-primary/0
        "
      />
    </MainSectionContainer>
  );
};

export default MainSection;
