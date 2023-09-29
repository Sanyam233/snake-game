import { createSlice } from "@reduxjs/toolkit";
import { ICanvasBoardState } from "../types/canvas-board";
import { DIRECTION, CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants";
import { randomNumber } from "../../helpers/random-number";
import { getNewCoordinates } from "../../helpers/get-new-coordinates";

const initialState: ICanvasBoardState = {
  snake: [[CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2]],
  fruit: [randomNumber(CANVAS_WIDTH), randomNumber(CANVAS_HEIGHT)],
  direction: DIRECTION.RIGHT,
  disallowedDirection: DIRECTION.LEFT,
};

const canvasBoardSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeDirection: (state, action) => {
      if (action.payload === state.disallowedDirection) {
        return;
      }

      switch (action.payload) {
        case DIRECTION.LEFT:
          state.direction = DIRECTION.LEFT;
          state.disallowedDirection = DIRECTION.RIGHT;
          break;
        case DIRECTION.RIGHT:
          state.direction = DIRECTION.RIGHT;
          state.disallowedDirection = DIRECTION.LEFT;
          break;
        case DIRECTION.UP:
          state.direction = DIRECTION.UP;
          state.disallowedDirection = DIRECTION.DOWN;
          break;
        case DIRECTION.DOWN:
          state.direction = DIRECTION.DOWN;
          state.disallowedDirection = DIRECTION.UP;
          break;
      }
    },
    moveSnake: (state) => {
      const snakeHead = state.snake[0];
      const [x, y] = getNewCoordinates(snakeHead, state.direction);
      state.snake.unshift([x, y]);
      state.snake.pop();
    },
    increaseSnakeSize: (state, action) => {
      state.snake.unshift(action.payload);
    },
    changeFruitPosition: (state) => {
      state.fruit = [randomNumber(CANVAS_WIDTH), randomNumber(CANVAS_HEIGHT)];
    },
    resetCanvasBoard: (state) => {
      state.snake = [[CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2]];
      state.fruit = [randomNumber(CANVAS_WIDTH), randomNumber(CANVAS_HEIGHT)];
      state.direction = DIRECTION.RIGHT;
      state.disallowedDirection = DIRECTION.LEFT;
    },
  },
});

export const {
  changeDirection,
  moveSnake,
  increaseSnakeSize,
  changeFruitPosition,
  resetCanvasBoard,
} = canvasBoardSlice.actions;
export default canvasBoardSlice.reducer;
