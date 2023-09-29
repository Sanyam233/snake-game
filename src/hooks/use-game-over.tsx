import { useDispatch } from "react-redux";
import { resetCanvasBoard } from "../store/reducers/canvas-board";
import { setGameOver } from "../store/reducers/game";

export const useGameOver = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(resetCanvasBoard());
    dispatch(setGameOver());
  };
};
