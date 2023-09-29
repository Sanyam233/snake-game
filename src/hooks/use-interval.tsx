import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { IGlobalState } from "../store/types";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  const gameState = useSelector((state: IGlobalState) => state.game.gameState);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if ((!delay && delay !== 0) || gameState === -1) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}
