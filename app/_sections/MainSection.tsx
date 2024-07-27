"use client";

import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";

const MainSection = () => {
  return (
    <div id="main" className="w-full pt-16 pb-24 flex flex-col gap-10 md:gap-16">
      <h1 className="text-center">
        안녕하세요,
        <br />
        프론트엔드 개발자
        <br />
        <em>송진경</em>입니다.
      </h1>

      <div className="w-full h-32 md:h-48 relative flex justify-center">
        <FirstShape />
        <SecondShape />
        <ThirdShape />
      </div>
    </div>
  );
};

export default MainSection;
