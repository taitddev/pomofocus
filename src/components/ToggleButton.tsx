import { Dispatch, SetStateAction } from "react";
import useSound from "../hooks/useSound";
import { Pomodoro } from "../types";

interface ToggleButtonProps {
  pomodoro: Pomodoro;
  setPomodoro: Dispatch<SetStateAction<Pomodoro>>;
}

const ToggleButton = ({ pomodoro, setPomodoro }: ToggleButtonProps) => {
  const { playStart } = useSound();
  function togglePausePlay() {
    playStart();
    setPomodoro((prev) => {
      return {
        ...prev,
        isPaused: !prev.isPaused,
      };
    });
  }

  return (
    <button className="text-base uppercase" onClick={togglePausePlay}>
      {pomodoro.isPaused ? "Start" : "Pause"}
    </button>
  );
};

export default ToggleButton;
