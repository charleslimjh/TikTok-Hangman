import { useEffect, useState } from "react";
import LivesCounter from "./LivesCounter";
import masterList from "./masterList";
import Keyboard from "./keyboard";
import Modal from "./Modal";

function GameContainer() {
  const [word, setWord] = useState("");
  const [wordLength, setWordLength] = useState(0);
  const [hint, setHint] = useState("");
  const [wordStatus, setWordStatus] = useState("");
  const [livesLeft, setLivesLeft] = useState(6);
  const [lettersGuessed, setLettersGuessed] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateWordAndHint() {
    return masterList[Math.floor(Math.random() * masterList.length + 1)];
  }

  // guess function
  function guess(char) {
    // generate index of characters that match input char
    let positions = [];
    let tmp = 0;

    for (let i = 0; i < word.length; i++) {
      if (char === word.charAt(i)) {
        positions.push(i);
        tmp += 1;
      }
    }
    setLettersGuessed(lettersGuessed + tmp);

    // update wordStatus (blanks)
    let newStatus = " ";
    for (let i of wordStatus.split("    ")) {
      for (let c = 0; c < i.length; c++) {
        if (i[c] !== " ") newStatus += i[c];
      }
      newStatus += " ";
    }
    newStatus = Array.from(newStatus.trim());

    for (let i of positions) {
      newStatus[i] = char;
    }
    let blanks = "";
    for (let i = 0; i < word.length; i++) {
      if (newStatus[i] === " ") {
        blanks += "    ";
      } else {
        blanks += newStatus[i] + " ";
      }
    }
    setWordStatus(blanks.trim());

    // update LivesLeft
    if (tmp === 0) {
      setLivesLeft(livesLeft - 1);
      if (livesLeft === 1) {
        console.log("GAME LOST");
        setGameOver(true);
      }
    }

    if (lettersGuessed + tmp === wordLength) {
      console.log("GAME WON!");
      setGameOver(true);
    }
  }

  // Initialize variables
  useEffect(() => {
    const wordHintPair = generateWordAndHint();
    const word = wordHintPair[0];
    let len = 0;

    setLettersGuessed(0);
    setWord(word);
    setHint(wordHintPair[1]);

    let blanks = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        blanks += "    ";
      } else {
        blanks += "_ ";
        len += 1;
      }
    }
    setWordStatus(blanks.trim());
    setWordLength(len);
  }, []);

  return (
    <div>
      <div className="word">
        <pre>Word: {wordStatus}</pre>
      </div>
      <div>Hint: {hint}</div>
      <div>
        <LivesCounter livesLeft={livesLeft} />
      </div>
      <div>
        <Keyboard onClick={guess} gameWon={gameOver} />
      </div>
      {(gameOver && wordLength === lettersGuessed) && <Modal message={"You won!"}/>}
      {(gameOver && wordLength !== lettersGuessed) && <Modal message={"You lost! The answer was: " + word}/>}
    </div>
  );
}

export default GameContainer;
