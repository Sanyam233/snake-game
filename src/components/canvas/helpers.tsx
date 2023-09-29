export const ateFruit = (snakeHead: number[], fruit: number[]) => {
  return snakeHead[0] === fruit[0] && snakeHead[1] === fruit[1];
};
