"use client";

import { motion } from "framer-motion";

import { MainSectionPrimaryCard, MainSectionSecondaryCard1 } from "./cards";
import MainSectionSecondaryCard2 from "./cards/MainSectionSecondaryCard2";
import MainSectionSecondaryCard3 from "./cards/MainSectionSecondaryCard3";
import MainSectionSecondaryCard4 from "./cards/MainSectionSecondaryCard4";

//
//
//

// 진입 연출 — 화면 밖 오른쪽에서 중앙으로
const ENTRANCE = {
  from: "100vw",
  duration: 1.0,
  delay: 0.2,
  ease: [0.16, 1, 0.3, 1],
} as const;

//
//
//

const MainSectionAnimation: React.FC = () => {
  return (
    // Container
    <div
      className="
        absolute top-0 bottom-0 w-full max-w-screen-2xl left-1/2 -translate-x-1/2
        -rotate-[30deg]
      "
    >
      {/* Main Object — 중앙 정렬 + 진입 애니메이션 */}
      <motion.div
        className="absolute top-1/2 left-1/2"
        initial={{ x: ENTRANCE.from, y: "-50%", opacity: 0.5 }}
        animate={{ x: "-50%", y: "-50%", opacity: 1 }}
        transition={{
          duration: ENTRANCE.duration,
          delay: 0,
          ease: ENTRANCE.ease,
        }}
      >
        <MainSectionPrimaryCard />
      </motion.div>

      {/* Sub object - 좌측 위치 + 하단 진입 */}
      <motion.div
        className="
          absolute
          top-[45%]
          right-[calc(50%_+_var(--main-primary-width)_/_2_+_var(--main-gap))]
        "
        initial={{ x: 0, y: "100vh" }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: ENTRANCE.duration,
          delay: 0.3,
          ease: ENTRANCE.ease,
        }}
      >
        <MainSectionSecondaryCard1 />
      </motion.div>

      {/* Sub object - 상단 위치 + 좌측 진입 */}
      <motion.div
        className="
          absolute
          bottom-[calc(50%_+_var(--main-primary-height)_/_2_+_var(--main-gap))]
          right-[40%]
        "
        initial={{ x: "-100vw", y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: ENTRANCE.duration,
          delay: 0.5,
          ease: ENTRANCE.ease,
        }}
      >
        <MainSectionSecondaryCard2 />
      </motion.div>

      {/* Sub object 3 - 우측 하단 위치 + 하단 진입 */}
      <motion.div
        className="
          absolute flex flex-row gap-4
          top-[calc(50%_+_var(--main-primary-height)_/_2_+_var(--main-gap))]
          left-[40%]
        "
        initial={{ x: 0, y: "100vh" }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: ENTRANCE.duration,
          delay: 0.7,
          ease: ENTRANCE.ease,
        }}
      >
        <MainSectionSecondaryCard3 />
        <MainSectionSecondaryCard3 />
      </motion.div>

      {/* Sub Object 4 - 좌측 위치 + 상단 진입 */}
      <motion.div
        className="
          absolute
          bottom-[43%]
          left-[calc(50%_+_var(--main-primary-width)_/_2_+_var(--main-gap))]
        "
        initial={{ x: 0, y: "-100vh" }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: ENTRANCE.duration,
          delay: 0.9,
          ease: ENTRANCE.ease,
        }}
      >
        <MainSectionSecondaryCard4 />
      </motion.div>
    </div>
  );
};

export default MainSectionAnimation;
