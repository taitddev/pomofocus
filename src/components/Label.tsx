import { Dispatch, SetStateAction } from "react";
import { controllers } from "../constants";
import { Pomodoro } from "../types";

interface LabelProps {
  selectedControl: number;
  setSelectedControl: (index: number) => void;
  resetTimerValues: () => void;
  setPomodoro: Dispatch<SetStateAction<Pomodoro>>;
}

const Label = ({
  selectedControl,
  setSelectedControl,
  resetTimerValues,
  setPomodoro,
}: LabelProps) => {
  function handleSelectedControl(index: number) {
    setSelectedControl(index);
    resetTimerValues();
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      isPaused: true,
    }));
  }

  return (
    <ul className="infoContainer">
      {controllers.map((controller, index) => (
        <li
          key={index}
          className={`infoItem ${selectedControl === index && "active"}`}
          onClick={() => handleSelectedControl(index)}
        >
          {controller.label}
        </li>
      ))}
    </ul>
  );
};

export default Label;
