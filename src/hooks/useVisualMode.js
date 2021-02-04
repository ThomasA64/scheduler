import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  // This function transitions between modes in the interview scheduler app. For example from the Create mode to the Show mode.
  function transition(newMode, replace = false) {
    setHistory((prev) =>
      replace
        ? [...prev.slice(0, prev.length - 1), newMode]
        : [...prev, newMode]
    );
  }

  // This function allows the transition to a previous mode. For example to return to the previous mode if there was an error and then dismissing the error by pressing the x and then returning. 
  function back() {
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
  }

  return { mode: history[history.length - 1], transition, back };
}
