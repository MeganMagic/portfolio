"use client";

import { motion } from "framer-motion";

import Logo from "@/assets/main-primary-logo.svg";

import { TEXT } from "../constants";

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

const MainSectionPrimaryCard = () => {
  return (
    <div
      className="
          w-main-primary h-main-primary
          p-5 overflow-hidden rounded-lg bg-white shadow-[5px_1px_2px_0_rgba(0,0,0,0.2)]
          flex flex-col justify-between
        "
    >
      {/* Lines — stagger 오케스트레이션 전담 */}
      <motion.div variants={linesVariants} initial="hidden" animate="visible">
        <motion.p variants={lineVariants} className="text-xl font-bold text-black">
          안녕하세요
        </motion.p>
        <motion.p variants={lineVariants} className="text-xl font-bold text-black">
          프론트엔드 개발자
        </motion.p>
        <motion.p variants={lineVariants} className="text-xl font-bold text-black">
          <span className="text-primary">송진경</span>입니다.
        </motion.p>
      </motion.div>

      {/* Logo */}
      <Logo className="text-primary" />
    </div>
  );
};

export default MainSectionPrimaryCard;
