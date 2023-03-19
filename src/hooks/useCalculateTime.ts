import { controllers } from "../constants";
import { Pomodoro } from "../types";

const useCalculateTime = (pomodoro: Pomodoro, selectedControl: number) => {
  // @ts-ignore
  const minutes = Math.floor(pomodoro[controllers[selectedControl].value] / 60);
  // @ts-ignore
  const seconds = Math.floor(pomodoro[controllers[selectedControl].value] % 60);
  return { minutes, seconds };
};

export default useCalculateTime;
