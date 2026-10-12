// import { useTranslations } from "next-intl";

import MainSectionAnimation from "./MainSectionAnimation";
import MainSectionContainer from "./MainSectionContainer";
import MainSectionOverlay from "./MainSectionOverlay";

//
//
//

const MainSection = () => {
  return (
    <MainSectionContainer>
      <MainSectionAnimation />
      <MainSectionOverlay />
    </MainSectionContainer>
  );
};

export default MainSection;
