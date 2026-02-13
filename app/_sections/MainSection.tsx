"use client";

import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";

const MainSection = () => {
  return (
    <div id="main" className="w-full pb-28 flex flex-col items-center">
      <div className="w-full relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom">
        <FirstShape />
        <SecondShape />
        <ThirdShape />
      </div>

      <h1 className="w-full p-6 md:p-8 bg-light z-40 dark: dark:bg-dark">
        안녕하세요,
        <br />
        프론트엔드 개발자
        <br />
        <em>송진경</em>입니다.
      </h1>

      <p className="text-center text-base md:text-lg font-normal text-gray-400 break-keep mb-6 md:mb-8">
        React를 중심으로 웹 프론트엔드를 개발합니다.
        <br />
        함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.
      </p>
    </div>
  );
};

export default MainSection;
