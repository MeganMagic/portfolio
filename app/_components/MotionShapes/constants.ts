export const beforeStart = 2;
export const startStagger = 0.5;

const durationOffset = 0.5;
const getTotalDuration = (obj: { [k in string]: number }) => {
  return Object.entries(obj).reduce((acc, cur) => acc + cur[1], 0) - durationOffset;
};

// first shape
export const shape1 = {
  pathLength1: 1,
};
export const shape1Duration = getTotalDuration(shape1);

// second shape
export const shape2 = {
  moveY1: 0.5,
  pathLength1: 1,
};
export const shape2Duration = getTotalDuration(shape2);

// third shape
export const shape3 = {
  moveX1: 0.5,
  pathLength1: 1,
  scaleUp1: 0.5,
};
