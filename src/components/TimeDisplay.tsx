import { Pomodoro } from "../types";
import useCalculateTime from "../hooks/useCalculateTime";

interface TimeDisplayProps {
  pomodoro: Pomodoro;
  selectedControl: number;
}

const TimeDisplay = ({ selectedControl, pomodoro }: TimeDisplayProps) => {
  const { minutes, seconds } = useCalculateTime(pomodoro, selectedControl);
  return (
    <>
      {minutes < 9 ? "0" : ""}
      {minutes}:{seconds < 9 ? "0" : ""}
      {seconds}
    </>
  );
};

export default TimeDisplay;
