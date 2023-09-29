import { createSlice } from "@reduxjs/toolkit";
import { IGameState } from "../types/game";
import { GAME_STATE } from "../../constants/store-state";
import { setLocalStorageItem } from "../../helpers/local-storage";
import { GAME_DIFFICULTY_MODE } from "../../constants/game";

const initialState: IGameState = {
  gameState: GAME_STATE.INITIAL,
  highestScore: 0,
  currGameScore: 0,
  isNewHighestScore: false,
  difficultyMode: GAME_DIFFICULTY_MODE.EASY,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStartGame: (state) => {
      state.gameState = GAME_STATE.ONGOING;
      state.currGameScore = 0;
      state.isNewHighestScore = false;
    },
    setGameOver: (state) => {
      state.gameState = GAME_STATE.OVER;
    },
    incrementScore: (state) => {
      state.currGameScore++;
    },
    setHighestScore: (state, action) => {
      state.highestScore = action.payload;
    },
    setDifficultyMode: (state, action) => {
      state.difficultyMode = action.payload;
    },
    checkAndUpdateHighestScore: (state) => {
      const prevHighestScore = state.highestScore;

      if (prevHighestScore < state.currGameScore) {
        state.isNewHighestScore = true;
        state.highestScore = state.currGameScore;
        setLocalStorageItem(
          "highestScore",
          JSON.stringify(state.currGameScore)
        );
      }
    },
  },
});

export const {
  setStartGame,
  setGameOver,
  incrementScore,
  setHighestScore,
  checkAndUpdateHighestScore,
} = gameSlice.actions;
export default gameSlice.reducer;
