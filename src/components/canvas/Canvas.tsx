import { useCallback, useEffect, useRef, useState } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants";
import { ateFruit } from "./helpers";
import { drawOnCanvas, clearCanvas } from "../../helpers/canvas-helpers";

import { useDispatch, useSelector } from "react-redux";
import { IGlobalState } from "../../store/types";
import {
  moveSnake,
  increaseSnakeSize,
  changeFruitPosition,
  changeDirection,
} from "../../store/reducers/canvas-board";
import { useInterval } from "../../hooks/use-interval";
import { getNewCoordinates } from "../../helpers/get-new-coordinates";
import { checkCollision } from "../../helpers/check-collision";
import {
  incrementScore,
  setGameOver,
  checkAndUpdateHighestScore,
} from "../../store/reducers/game";

export const Canvas: React.FC = () => {
  const { snake, fruit, direction } = useSelector(
    (state: IGlobalState) => state.canvasBoard
  );
  const gameState = useSelector((state: IGlobalState) => state.game.gameState);

  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasContext, setCanvasContext] =
    useState<CanvasRenderingContext2D | null>();

  const changeDirectionHandler = useCallback(
    (e: any) => {
      dispatch(changeDirection(e.key));
    },
    [dispatch]
  );

  useInterval(() => {
    if (gameState !== 1) {
      return;
    }

    if (checkCollision(snake)) {
      dispatch(checkAndUpdateHighestScore());
      dispatch(setGameOver());
    }

    const newCorr = getNewCoordinates(snake[0], direction);

    if (ateFruit(newCorr, fruit)) {
      dispatch(changeFruitPosition());
      dispatch(incrementScore());
      dispatch(increaseSnakeSize(newCorr));
    }

    dispatch(moveSnake());
  }, 70);

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasContext(canvasRef.current.getContext("2d"));
    }

    if (canvasContext) {
      clearCanvas(canvasContext);
      drawOnCanvas(canvasContext, snake, "#008066");
      drawOnCanvas(canvasContext, [fruit], "#b3001b");
    }
  }, [canvasContext, snake, fruit]);

  useEffect(() => {
    window.addEventListener("keydown", changeDirectionHandler);
    return () => {
      window.removeEventListener("keydown", changeDirectionHandler);
    };
  }, [direction, changeDirectionHandler]);

  return (
    <canvas
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      ref={canvasRef}
    ></canvas>
  );
};
