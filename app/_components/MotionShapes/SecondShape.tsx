import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { beforeStart, shape2, shape1Duration } from "./constants";

interface SecondShapeProps {}

const SecondShape: React.FC<SecondShapeProps> = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [".path1", { pathLength: 0 }, { duration: beforeStart }],
      [".path1", { y: 0 }, { duration: shape2.moveY1, delay: shape1Duration, ease: "easeOut", type: "spring" }],
      [".path1", { pathLength: 1 }, { duration: shape2.pathLength1, ease: "easeInOut", type: "spring" }],
    ]);
    animate([
      [".path2", { pathLength: 0 }, { duration: beforeStart }],
      [
        ".path2",
        { pathLength: 1 },
        {
          duration: shape2.pathLength1,
          delay: shape1Duration + shape2.moveY1,
          ease: "easeInOut",
          type: "spring",
        },
      ],
    ]);
  }, []);

  return (
    <motion.div ref={scope} style={{ width: "fit-content" }}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <motion.path
          className="path1"
          d="M50 57H150"
          stroke="#00C676"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={0}
          style={{ y: 86 }}
        />
        <path
          className="path2"
          d="M50 143L100 93L150 143"
          stroke="#00C676"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={0}
        />
      </svg>
    </motion.div>
  );
};

export default SecondShape;
