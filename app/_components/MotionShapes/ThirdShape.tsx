import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { beforeStart, shape1Duration, shape2Duration, shape3, startStagger } from "./constants";

const ThirdShape = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [".path1", { pathLength: 0 }, { duration: beforeStart }],
      [
        ".path1",
        { x: 0 },
        {
          duration: shape3.moveX1,
          delay: shape1Duration + shape2Duration,
          ease: "easeOut",
          type: "spring",
        },
      ],
      [".path1", { pathLength: 1 }, { duration: shape3.pathLength1, at: "-0.1", ease: "easeOut", type: "spring" }],
      [".path2", { scale: 1 }, { duration: shape3.scaleUp1, at: "-0.5", ease: "easeOut", type: "spring" }],
    ]);
  }, []);

  return (
    <div ref={scope}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <motion.path
          className="path1"
          d="M100 144C75.6995 144 56 124.301 56 100C56 75.6995 75.6995 56 100 56C124.301 56 144 75.6995 144 100C144 124.301 124.301 144 100 144Z"
          stroke="#E2FF00"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={0}
          x={-50}
        />
        <motion.path
          className="path2"
          d="M86 143C86 162.882 69.8823 179 50 179C30.1177 179 14 162.882 14 143C14 123.118 30.1177 107 50 107C69.8823 107 86 123.118 86 143Z"
          fill="white"
          scale={0}
        />
      </svg>
    </div>
  );
};

export default ThirdShape;
