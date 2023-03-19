export type Controller = {
  label: string;
  value: "pomodoroTime" | "shortBreakTime" | "longBreakTime";
};

export type Pomodoro = {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  isPaused: boolean;
  period: number;
};
