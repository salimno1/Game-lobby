import useSound from "use-sound";
import boopSfx from "../../public/mp3/sound1.mp3";
const BoopButton = () => {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>Boop!</button>;
};

export default BoopButton;
