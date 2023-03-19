import { useRef } from "react";
import ring from "../assets/bell-ring.mp3";
import start from "../assets/start.mp3";

const useSound = () => {
  const bellAudio = useRef(new Audio(ring));
  const startAudio = useRef(new Audio(start));
  const playStart = () => startAudio.current.play();
  const playBell = () => bellAudio.current.play();
  return { playStart, playBell };
};

export default useSound;
