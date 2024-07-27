import { motion, spring, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { beforeStart, shape1 } from "./constants";

const FirstShape = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [".path1", { pathLength: 0 }, { duration: beforeStart }],
      [".path1", { pathLength: 1 }, { duration: shape1.pathLength1, ease: "easeOut", type: "spring" }],
    ]);
  }, []);

  return (
    <div ref={scope} style={{ width: "fit-content" }}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          className="path1"
          d={originalPath}
          stroke="#007AFF"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={0}
          visibility="visible"
        />
      </svg>
    </div>
  );
};

export default FirstShape;

const originalPath = "M 50 140.5 L 100 64 L 150 140.5";
const rotateHorizontalPath = "M 150 140.5 L 100 64 L 50 140.5";
const rotateVerticalPath = "M 50 64 L 100 140.5 L 150 64";
