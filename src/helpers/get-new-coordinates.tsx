import { DIRECTION, DIRECTION_CORR } from "../constants";

export const getNewCoordinates = (currPos: number[], direction: string) => {
  let x = currPos[0],
    y = currPos[1];

  switch (direction) {
    case DIRECTION.RIGHT:
      x += DIRECTION_CORR.RIGHT[0];
      y += DIRECTION_CORR.RIGHT[1];
      break;
    case DIRECTION.LEFT:
      x += DIRECTION_CORR.LEFT[0];
      y += DIRECTION_CORR.LEFT[1];
      break;
    case DIRECTION.UP:
      x += DIRECTION_CORR.UP[0];
      y += DIRECTION_CORR.UP[1];
      break;
    case DIRECTION.DOWN:
      x += DIRECTION_CORR.DOWN[0];
      y += DIRECTION_CORR.DOWN[1];
      break;
  }

  return [x, y];
};
