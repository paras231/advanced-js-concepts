import { useState, useEffect, useRef } from "react";
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
  const audioRef = useRef(null);

  // store refs in object as we have list of divs
  const draggableRefs = useRef({});
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
  //  modern web browsers do not allow auto play audio
  //  the audio is only played when there is some user interaction like a button click.
  //  so I will have to look for different solution
  function playAudio() {
    const promise = audioRef.current?.play();
    console.log(promise);
    if (promise !== "undefined") {
      promise
        .then(() => {})
        .catch((err) => {
          audioRef.current && (audioRef.current.muted = true);
          audioRef.current && audioRef.current.play();
        });
    }
  }

  // useEffect(() => {
  //   if (gameOver) {
  //     playAudio();
  //   }
  // }, [gameOver]);

  // handle drag and drop logic for game

  function onDragStart(e, id) {
    const dataIndex = e.target.getAttribute("data-index");

    if (id == dataIndex) {
      const draggableRef = draggableRefs[id];

      // we do not get draggablref.current as it is undefined
      //  so we cam directly update the style of the element
      if (draggableRef.style) {
        draggableRef.style.opacity = "0.6";
      }
    }
  }

  //  handle on drag enter

  function onDragEnter(e, id) {
    const dataIndex = e.target.getAttribute("data-index");

    if (id == dataIndex) {
      const draggableRef = draggableRefs[id];

      // we do not get draggablref.current as it is undefined
      //  so we cam directly update the style of the element
      if (draggableRef.style) {
        draggableRef.style.background = "pink";
        draggableRef.style.cursor = "";
      }
    }
  }

  // handle drag leave

  function onDragLeave(e, id) {
    const dataIndex = e.target.getAttribute("data-index");

    if (id == dataIndex) {
      const draggableRef = draggableRefs[id];

      // we do not get draggablref.current as it is undefined
      //  so we cam directly update the style of the element
      if (draggableRef.style) {
        draggableRef.style.background = "";
        draggableRef.style.opacity = "1";
      }
    }
  }

  // handle on drag over

  function onDragOver(e,obj) {
    e.stopPropagation();
    e.preventDefault();
    const text = e.target.textContent;
    console.log(text);
    e.dataTransfer.dropEffect = "copy";
    const items = e.dataTransfer.items;
    items.add(text, "text/plain");
  }

  // handle drop event

  function onDrop(e) {
    e.preventDefault();
    //  console.log(e);
    // on dropping the element we would need to shuffle the elements order
    //  we would need to update the array state
  }

  return (
    <>
      <main
        style={{
          background: "linear-gradient(270deg, #078cdf 0%, #9f7ff5 100%)",
        }}
        className="container overflow-hidden p-4 text-white"
      >
        {gameStarted === false && <TimerComponent time={timer} />}
        {gameStarted && !gameOver && (
          <DisplayCountDown coundDownTimer={coundDownTimer} />
        )}

        {gameOver && (
          <div className="flex h-[100vh] mt-10 justify-center items-center flex-col">
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
          <section className="flex  justify-center items-center flex-col space-y-4">
            {boxes.map((b) => {
              return (
                <div
                  onDragStart={(e) => onDragStart(e, b.id)}
                  onDragEnter={(e) => onDragEnter(e, b.id)}
                  onDragOver={(e) => onDragOver(e, b)}
                  onDrop={onDrop}
                  onDragLeave={(e) => onDragLeave(e, b.id)}
                  draggable
                  style={{ border: "1px solid white" }}
                  className="flex w-[20vw] cursor-move rounded-md p-4 flex-col"
                  key={b.id}
                  ref={(ref) => (draggableRefs[b.id] = ref)}
                  data-index={b.id}
                >
                  <span className="text-xl">{b.title}</span>

                  <b>ID : {b.id}</b>
                </div>
              );
            })}
          </section>
        )}

        <audio ref={audioRef} autoPlay={gameOver} src={gameover_sound}></audio>
      </main>
    </>
  );
};

export default DndGame;

const TimerComponent = ({ time }) => {
  return (
    <>
      <div className="flex h-[100vh] mt-20 justify-center items-center">
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
