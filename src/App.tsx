import { MouseEventHandler, useEffect } from "react";
import "./App.css";
import ToggleButton from "./Components/Toogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import useSharedFormState from "./Hooks/Comhooks";
function App() {
  const { isToggled, setIsToggled } = useSharedFormState();
  const handleclick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (isToggled) {
      const target = event.currentTarget as HTMLElement;
      const audio = target.querySelector("audio");
      const audioELement = audio as HTMLAudioElement;
      audioELement?.play();
    }
  };

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (isToggled) {
        const key = event.key.toUpperCase();
        if ("QWEASDZXC".includes(key)) {
          const audio = document.getElementById(key) as HTMLAudioElement | null;
          if (audio) {
            audio.play();
          } else {
            console.warn(`No audio element found for key: ${key}`);
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isToggled]);

  return (
    <>
      <div id="drum-machine" className="dru-wrap flex min-w-min  ">
        <div id="display" className="display p-[2rem] max-w-max">
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            Q
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            W
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            E
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            A
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            S
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            D
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="Z"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            Z
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            X
          </div>
          <div className="drum-pad " onClick={handleclick}>
            <audio
              className="clip"
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            C
          </div>
        </div>
        <div className="logo">
          <div className="innerlogo flex gap-2 items-center justify-center  ">
            FCC
            <FontAwesomeIcon
              className="innnerlogo  inline-block"
              icon={faFreeCodeCamp}
            />
          </div>
        </div>
        <ToggleButton />
      </div>
    </>
  );
}

export default App;
