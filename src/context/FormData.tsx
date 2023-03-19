import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { initialPomodoro } from "../constants";

interface FormData {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
}

interface FormDataContextType {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

export const FormDataContext = createContext<FormDataContextType>({
  formData: {
    pomodoroTime: 0,
    shortBreakTime: 0,
    longBreakTime: 0,
  },
  setFormData: () => {},
});

const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({
    pomodoroTime: initialPomodoro.pomodoroTime / 60,
    shortBreakTime: initialPomodoro.shortBreakTime / 60,
    longBreakTime: initialPomodoro.longBreakTime / 60,
  });

  const value: FormDataContextType = {
    formData,
    setFormData,
  };
  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
