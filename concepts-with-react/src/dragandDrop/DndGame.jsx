import { useState, useEffect } from "react";
import gameover_sound from "../assets/gameover.wav";
const DndGame = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, title: "The Enigmatic Odyssey" },
    { id: 2, title: "Whispers of the Forgotten" },
    { id: 3, title: "Eternal Flames: A Love Story" },
    { id: 4, title: "Echoes of the Lost Kingdom" },
    { id: 5, title: "Shadows in the Mist" },
    { id: 6, title: "Chronicles of the Starlight Kingdom" },
    { id: 7, title: "The Secret Garden of Dreams" },
    { id: 8, title: "Legends of the Moonlit Forest" },
  ]);

  const [timer, setTimer] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [coundDownTimer, setCoundDownTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverAudio, setGameOverAudio] = useState(false);
  useEffect(() => {
    const timerVal = setTimeout(() => setTimer((t) => t - 1), 1000);
    if (timer == 0) {
      setGameStarted(true);
    }

    let coundDownTimerVal;

    if (gameStarted) {
      coundDownTimerVal = setTimeout(
        () => setCoundDownTimer((t) => t - 1),
        1000
      );
    }

    if (coundDownTimer < 1) {
      setGameOver(true);
    }
    return () => {
      clearTimeout(timerVal);
      clearTimeout(coundDownTimerVal);
    };
  }, [timer]);

  // restart game

  function restartGame() {
    //  update gameover to false
    // update coundtdown time
    setGameOver(false);
    setCoundDownTimer(30);
    setGameStarted(false);
    setTimer(3);
  }

  //  play game over sound

  

  return (
    <>
      <main
        style={{
          background: "linear-gradient(270deg, #078cdf 0%, #9f7ff5 100%)",
        }}
        className="container overflow-hidden p-4 text-white h-[100vh]"
      >
        {gameStarted === false && <TimerComponent time={timer} />}
        {gameStarted && !gameOver && (
          <DisplayCountDown coundDownTimer={coundDownTimer} />
        )}

        {gameOver && (
          <div className="flex mt-10 justify-center items-center flex-col">
            <h1 className="text-[10rem]">Game Over!</h1>
            <button
              onClick={restartGame}
              className="bg-white border-none outline-none cursor-pointer rounded-md font-semibold text-blue-700 px-3 py-2 "
            >
              Tap to Restart
            </button>
          </div>
        )}

        {!gameOver && gameStarted && (
          <section className="flex justify-center items-center flex-col space-y-4">
            {boxes.map((b) => {
              return (
                <div
                  draggable
                  style={{ border: "1px solid white" }}
                  className="flex w-[20vw] cursor-pointer rounded-md p-4 flex-col"
                  key={b.id}
                >
                  <span className="text-xl">{b.title}</span>

                  <b>ID : {b.id}</b>
                </div>
              );
            })}
          </section>
        )}
        {}
        <audio src={gameover_sound}></audio>
      </main>
    </>
  );
};

export default DndGame;

const TimerComponent = ({ time }) => {
  return (
    <>
      <div className="flex mt-20 justify-center items-center">
        <h1 className="text-[10rem]">{time}</h1>
      </div>
    </>
  );
};

const DisplayCountDown = ({ coundDownTimer }) => {
  // display a timer of 30 seconds for game

  return (
    <>
      {" "}
      <div className="flex justify-end ">
        <h2 className="font-semibold text-2xl">Timer : {coundDownTimer}</h2>
      </div>
    </>
  );
};
