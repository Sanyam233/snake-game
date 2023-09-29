import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";

export const checkCollision = (snake: number[][]): boolean => {
  const x = snake[0][0],
    y = snake[0][1];

  if (x < 0 || y < 0 || x >= CANVAS_WIDTH || y >= CANVAS_HEIGHT) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i][0] === x && snake[i][1] === y) {
      return true;
    }
  }

  return false;
};
