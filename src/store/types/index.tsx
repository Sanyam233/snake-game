import { ICanvasBoardState } from "./canvas-board";
import { IGameState } from "./game";

export interface IGlobalState {
  game: IGameState;
  canvasBoard: ICanvasBoardState;
}
