import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const useSequence = (sequenceNumber: number, duration: number = 0.5, infinite: boolean = false) => {
  const [sequence, setSequence] = useState(0);
  const sequenceProgress = useMotionValue(sequence);

  useEffect(() => {
    const animation = animate(sequenceProgress, sequence, {
      duration,
      ease: "easeInOut",
      type: "spring",
      onComplete: () => {
        if (sequence < sequenceNumber) {
          setSequence(sequence + 1);
        } else {
          if (infinite) {
            setSequence(0);
            sequenceProgress.set(0);
          }
        }
      },
    });
    return () => animation.stop();
  }, [sequence]);

  return { sequenceProgress };
};
const getSequenceInput = (sequences: { sequence: number; value: string | number }[]) =>
  sequences.map(({ sequence }) => sequence);
const getSequenceOutput = <V extends string | number>(sequences: { sequence: number; value: V }[]) =>
  sequences.map(({ value }) => value);

const transformSequences = [
  { sequence: 3, value: "rotate(0deg)" },
  { sequence: 4, value: "rotate(360deg)" },
];
const transformSequenceInput = getSequenceInput(transformSequences);
const transformSequenceOutput = getSequenceOutput(transformSequences);

const pathLengthSequences = [
  { sequence: 0, value: 0 },
  { sequence: 2, value: 1 },
];
const pathLengthSequenceInput = getSequenceInput(pathLengthSequences);
const pathLengthSequenceOutput = getSequenceOutput(pathLengthSequences);

const sequenceNumber = Math.max(...transformSequenceInput, ...pathLengthSequenceInput);

interface TriangleProps {
  isOn?: boolean;
}
const Triangle: React.FC<TriangleProps> = ({ isOn = false }) => {
  const { sequenceProgress } = useSequence(sequenceNumber, 0.7);

  const transformMotion = useTransform(sequenceProgress, transformSequenceInput, transformSequenceOutput);
  const pathLengthMotion = useTransform(sequenceProgress, pathLengthSequenceInput, pathLengthSequenceOutput);

  return (
    <motion.div style={{ width: "fit-content", transform: transformMotion }}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M50 140.5L100 64L150 140.5"
          stroke="#007AFF"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: pathLengthMotion }}
        />
      </svg>
    </motion.div>
  );
};

export default Triangle;
