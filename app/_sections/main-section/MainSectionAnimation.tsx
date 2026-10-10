"use client";

import { motion, useAnimationControls } from "framer-motion";

//
//
//

// 진입 연출 — 화면 밖 오른쪽에서 중앙으로
const ENTRANCE = {
  from: "100vw",
  duration: 1.2,
  delay: 0.3,
  ease: [0.16, 1, 0.3, 1],
} as const;

// 클릭 연출 — 제자리(0,0) 기준 오프셋으로 튀었다가 복귀
const NUDGE = {
  x: 9,
  y: -20,
  duration: 0.6,
  times: [0, 0.35, 1], // 나갈 때 35%, 돌아올 때 65%
  ease: [0.34, 1.56, 0.64, 1],
} as const;

// 텍스트 연출 — 아래에서 한 줄씩 순차로 올라옴
const TEXT = {
  from: 24, // 아래쪽 시작 거리(px)
  duration: 1,
  stagger: 0.1, // 줄 사이 간격
  delay: 1.3, // 카드가 안착한 뒤 시작 (ENTRANCE.delay + duration)
  ease: [0.16, 1, 0.3, 1],
} as const;

const linesVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: TEXT.delay, staggerChildren: TEXT.stagger },
  },
};

const lineVariants = {
  hidden: { y: TEXT.from, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: TEXT.duration, ease: TEXT.ease },
  },
};

//
//
//

const MainSectionAnimation: React.FC = () => {
  const nudgeControls = useAnimationControls();

  //
  //
  //

  const handleNudge = () => {
    nudgeControls.start({
      x: [null, NUDGE.x, 0],
      y: [null, NUDGE.y, 0],
      transition: {
        duration: NUDGE.duration,
        times: NUDGE.times,
        ease: NUDGE.ease,
      },
    });
  };

  //
  //
  //

  return (
    // Container, rotated
    <div className="absolute top-0 bottom-0 left-0 right-0 -rotate-[30deg]">
      {/* Placement layer — 중앙 정렬 + 진입 애니메이션 전담 */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1/2 max-w-96 min-w-72 aspect-video"
        initial={{ x: ENTRANCE.from, y: "-50%", opacity: 0.5 }}
        animate={{ x: "-50%", y: "-50%", opacity: 1 }}
        transition={{ duration: ENTRANCE.duration, delay: ENTRANCE.delay, ease: ENTRANCE.ease }}
      >
        {/* Main Object — 클릭 오프셋 전담 */}
        <motion.div
          className="
            w-full h-full p-5 overflow-hidden
            rounded-lg bg-white shadow-[5px_1px_2px_0_rgba(0,0,0,0.2)]
            flex flex-col justify-between
          "
          initial={{ x: 0, y: 0 }}
          animate={nudgeControls}
          onClick={handleNudge}
        >
          {/* Lines — stagger 오케스트레이션 전담 */}
          <motion.div variants={linesVariants} initial="hidden" animate="visible">
            <motion.p variants={lineVariants} className="text-xl font-bold text-foreground/90">
              안녕하세요
            </motion.p>
            <motion.p variants={lineVariants} className="text-xl font-bold text-foreground/90">
              프론트엔드 개발자
            </motion.p>
            <motion.p variants={lineVariants} className="text-xl font-bold text-foreground/90">
              <span className="text-primary">송진경</span>입니다.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainSectionAnimation;
