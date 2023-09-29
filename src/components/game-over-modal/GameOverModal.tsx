import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../ui/Modal";
import { resetCanvasBoard } from "../../store/reducers/canvas-board";
import { setStartGame } from "../../store/reducers/game";
import { IGlobalState } from "../../store/types";
import {
  NEW_HIGH_SCORE_TEXT,
  RESTART_GAME_TEXT,
} from "../../constants/strings";

export const GameOverModal = () => {
  const dispatch = useDispatch();
  const { currGameScore, isNewHighestScore } = useSelector(
    (state: IGlobalState) => state.game
  );

  const resetGameHandler = () => {
    dispatch(resetCanvasBoard());
    dispatch(setStartGame());
  };

  return (
    <Modal>
      <h1 className="modal-header">Game Over!!!</h1>
      <p className="modal-description">
        {isNewHighestScore
          ? NEW_HIGH_SCORE_TEXT.replace("$SCORE", currGameScore.toString())
          : RESTART_GAME_TEXT}
      </p>
      <button className="modal-btn" onClick={resetGameHandler}>
        Restart
      </button>
    </Modal>
  );
};
