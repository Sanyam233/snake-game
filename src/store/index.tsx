import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game";
import canvasBoardReducer from "./reducers/canvas-board";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    canvasBoard: canvasBoardReducer,
  },
});
