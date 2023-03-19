import { Controller, Pomodoro } from "../types";

export const initialPomodoro: Pomodoro = {
  pomodoroTime: 25 * 60,
  shortBreakTime: 5 * 60,
  longBreakTime: 15 * 60,
  isPaused: true,
  period: 1,
};

export const controllers: Controller[] = [
  { label: "pomodoro", value: "pomodoroTime" },
  { label: "short break", value: "shortBreakTime" },
  { label: "long break", value: "longBreakTime" },
];
