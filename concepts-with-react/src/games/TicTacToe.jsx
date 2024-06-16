import { useState } from "react";
import styles from "./game.module.css";
// impelementation of tic tac toe game in react js -:

// 1. first we need to render game board that is , it will have 9 blocks. 3 rows and 3 columns.
//  2. to render game board we need to design the board with rows and columns having border using css and inputs tags.

const TicTacToe = () => {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(0);
  // current state of the board which is empty
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const handledraw = (event, index) => {
    //  draws only if position is not taken and winner is not decided
    if(data[index-1]==="" && winner===""){
      //  draws X if players' first turn is o else draws O
      const current = turn === 0 ? "X":"O"; 
    }
  };

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <>
      <h1>Tic tac toe</h1>
      <GameBoard turn={turn} setTurn={setTurn} data={data} setData={setData} />
      <Info/>
    </>
  );
};

export default TicTacToe;

const GameBoard = ({ turn, setTurn, handledraw, data, setData }) => {
  //  draw a square board with inputs containing borders
  return (
    <>
      <div className={styles.board}>
        <input onClick={(e)=>handledraw(e,1)} className={styles.input_1} type="text" />
        <input className={styles.input_2} type="text" />
        <input className={styles.input_3} type="text" />
        <input className={styles.input_4} type="text" />
        <input className={styles.input_5} type="text" />
        <input className={styles.input_6} type="text" />
        <input className={styles.input_7} type="text" />
        <input className={styles.input_8} type="text" />
        <input onClick={()=>handledraw(e,9)} className={styles.input_9} type="text" />
      </div>
    </>
  );
};

const Info = () => {
  return (
    <>
      <div className="mt-10 bg-purple-500 rounded-md p-3 text-white w-[30vw]">
        <span>Player 1 : X</span>
        <span>Player 2 : O</span>
      </div>
    </>
  );
};
