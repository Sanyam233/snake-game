import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";

export const drawOnCanvas = (
  canvasContext: CanvasRenderingContext2D,
  pos: number[][],
  color: string
) => {
  pos.forEach(([x, y]) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, 20, 20);
    canvasContext.strokeRect(x, y, 20, 20);
  });
};

export const clearCanvas = (canvasContext: CanvasRenderingContext2D) => {
  if (canvasContext) {
    canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};
