import { useDispatch } from "react-redux";
import { Modal } from "../ui/Modal";
import { setStartGame } from "../../store/reducers/game";
import { START_GAME_TEXT } from "../../constants/strings";

export const GameStartModal = () => {
  const dispatch = useDispatch();

  const StartGameHandler = () => {
    dispatch(setStartGame());
  };

  return (
    <Modal>
      <h1 className="modal-header">Welcome!!!</h1>
      <p className="modal-description">{START_GAME_TEXT}</p>
      <button className="modal-btn" onClick={StartGameHandler}>
        Start
      </button>
    </Modal>
  );
};
