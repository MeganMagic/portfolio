"use client";

import { motion } from "framer-motion";

import { OVERLAY } from "./constants";

//
//
//

const overlayTransition = {
  duration: OVERLAY.duration,
  delay: OVERLAY.delay,
  ease: OVERLAY.ease,
};

const MainSectionOverlay: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-full top-0 h-[calc((100%_-_var(--main-primary-height))_/_2_-_var(--main-gap))]
          from-primary/70 bg-gradient-to-b to-primary/0
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={overlayTransition}
      />
      <motion.div
        className="
          absolute w-full bottom-0 h-[calc((100%_-_var(--main-primary-height))_/_2_-_var(--main-gap))]
          from-primary/70 bg-gradient-to-t to-primary/0
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={overlayTransition}
      />
    </>
  );
};

export default MainSectionOverlay;
