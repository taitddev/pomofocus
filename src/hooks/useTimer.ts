import { useContext, useEffect, useRef, useState } from "react";
import { controllers, initialPomodoro } from "../constants";
import { FormDataContext } from "../context/FormData";
import useSound from "./useSound";

const useTimer = () => {
  const { formData } = useContext(FormDataContext);
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(initialPomodoro);
  const periodId = useRef<number>(initialPomodoro.period);

  const resetTimerValues = () => {
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoroTime * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
  };

  const getRemainingTimePercentage = () => {
    const totalTime = formData[controllers[selectedControl].value] * 60;
    const remainingTime = pomodoro[controllers[selectedControl].value];
    return (remainingTime / totalTime) * 100;
  };

  const { playBell } = useSound();

  useEffect(() => {
    let timer: number | undefined = undefined;
    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[controllers[selectedControl].value] === 0) {
            setSelectedControl((prevState) => {
              if (periodId.current % 8 === 0) {
                return 2;
              } else {
                return prevState >= controllers.length - 1
                  ? 0
                  : prevState === 0
                  ? prevState + 1
                  : prevState === 1
                  ? prevState - 1
                  : 0;
              }
            });
            resetTimerValues();
            clearInterval(timer);
            playBell();
            periodId.current += 1;

            return prevPomodoro;
          }

          return {
            ...prevPomodoro,
            [controllers[selectedControl].value]:
              prevPomodoro[controllers[selectedControl].value] - 1,
          };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [
    pomodoro.isPaused,
    selectedControl,
    setPomodoro,
    setSelectedControl,
    pomodoro.period,
  ]);

  return {
    selectedControl,
    setSelectedControl,
    pomodoro,
    setPomodoro,
    resetTimerValues,
    getRemainingTimePercentage,
  };
};

export default useTimer;
