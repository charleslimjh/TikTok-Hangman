import { useEffect, useState } from "react";
import masterList from "./masterList";
import LivesCounter from "./LivesCounter";
import Keyboard from "./Keyboard";
import GameModal from "./GameModal";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import TikTokIcon from '../tiktok-icon.svg';

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
      if (newStatus[i] === "\n") {
        blanks += "\n";
      } else {
        blanks += newStatus[i] + " ";
      }
    }
    setWordStatus(blanks.trim());
    

    // update LivesLeft
    if (tmp === 0) {
      setLivesLeft(livesLeft - 1);
      if (livesLeft === 1) {
        setGameOver(true);
      }
    }

    if (lettersGuessed + tmp === wordLength) {
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

    console.log("breakpoint 1");

    let blanks = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        blanks += "\n";
      } else {
        blanks += "_ ";
        len += 1;
      }
    }
    setWordStatus(blanks.trim());
    setWordLength(len);
    console.log("breakpoint 2");
  }, []);

  return (
    <div>
      <Navbar bg="light" className="mb-3">
        <Navbar.Brand className="mx-2">
          <img alt="" src={TikTokIcon} width="50px" height="50px" className="img-responsive"></img>
          {' '}
          Tiktok Hangman!
          </Navbar.Brand>
      </Navbar>

      <Stack gap={2} className="mx-3">
        <div>
          Word:
          <pre>{wordStatus}</pre>
        </div>

        <div>Hint: {hint}</div>

        <div>
          <LivesCounter livesLeft={livesLeft} />
        </div>

        <div>
          <Keyboard onClick={guess} gameWon={gameOver} />
        </div>

        <div>
          {gameOver && wordLength === lettersGuessed && (
            <GameModal win={"You Win!"} loseMessage={""} />
          )}
          {gameOver && wordLength !== lettersGuessed && (
            <GameModal
              win={"You Lose!"}
              loseMessage={"The answer was: " + word + ". "}
            />
          )}
        </div>
      </Stack>
    </div>
  );
}

export default GameContainer;
