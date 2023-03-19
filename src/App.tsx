import { useEffect, useMemo } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useTimer from "./hooks/useTimer";
import useCalculateTime from "./hooks/useCalculateTime";
import Label from "./components/Label";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import { controllers } from "./constants";

function App() {
  const {
    pomodoro,
    selectedControl,
    setPomodoro,
    setSelectedControl,
    resetTimerValues,
    getRemainingTimePercentage,
  } = useTimer();
  const { minutes, seconds } = useCalculateTime(pomodoro, selectedControl);

  useEffect(() => {
    document.title = `${controllers[selectedControl].label} - ${
      minutes < 9 ? "0" : ""
    }${minutes}:${seconds < 9 ? "0" : ""}${seconds}`;
  }, [selectedControl, minutes, seconds]);

  const customStyles = useMemo(
    () =>
      buildStyles({
        trailColor: "transparent",
        pathColor: "#f87070",
      }),
    []
  );

  return (
    <main className="relative flex flex-col items-center justify-center">
      <Label
        selectedControl={selectedControl}
        setSelectedControl={setSelectedControl}
        resetTimerValues={resetTimerValues}
        setPomodoro={setPomodoro}
      />
      <div className="timer-container">
        <div className="timer">
          <div className="relative flex flex-col items-center justify-center font-semibold">
            <CircularProgressbarWithChildren
              strokeWidth={2}
              styles={customStyles}
              value={100}
            >
              <TimeDisplay
                selectedControl={selectedControl}
                pomodoro={pomodoro}
              />
              <ToggleButton pomodoro={pomodoro} setPomodoro={setPomodoro} />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
