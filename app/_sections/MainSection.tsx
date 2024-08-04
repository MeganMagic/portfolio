"use client";

import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";

const MainSection = () => {
  return (
    <div id="main" className="w-full pt-6 sm:pt-10 md:pt-12 pb-24 flex flex-col">
      <div className="w-full relative flex justify-center scale-[43%] sm:scale-50 origin-bottom">
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

      <p className="text-center text-sm md:text-base font-normal text-gray-500 break-keep dark:text-gray-400">
        React, Typescript, Next.js 기반의 웹 프론트엔드를 개발합니다.
        <br />
        2년 이상의 업무 경험이 있으며, 다양한 직군과 <br className="sm:hidden" />
        원활한 커뮤니케이션이 가능합니다.
        <br />
        좋은 제품을 만들고 성장시키는 일에 함께하고 싶습니다.
      </p>
    </div>
  );
};

export default MainSection;
