import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "./components/canvas/Canvas";
import "./styles/index.scss";
import { IGlobalState } from "./store/types";
import { GameOverModal } from "./components/game-over-modal/GameOverModal";
import { GameStartModal } from "./components/game-start-modal/GameStartModal";
import { ScoreCard } from "./components/score-card/ScoreCard";
import { useEffect } from "react";
import { setHighestScore } from "./store/reducers/game";
import { getLocalStorageItem } from "./helpers/local-storage";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { gameState, currGameScore, highestScore } = useSelector(
    (state: IGlobalState) => state.game
  );

  useEffect(() => {
    const highestScore = getLocalStorageItem("highestScore");
    if (highestScore) {
      dispatch(setHighestScore(parseInt(highestScore)));
    }
  }, []);

  return (
    <div className="app">
      <div className="score-card-container">
        <ScoreCard header="Current Score" score={currGameScore} />
        <ScoreCard header="Highest Score" score={highestScore} />
      </div>
      {gameState === 0 && <GameStartModal />}
      {gameState === -1 && <GameOverModal />}
      <Canvas />
    </div>
  );
};

export default App;
