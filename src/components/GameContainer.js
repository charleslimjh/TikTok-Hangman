import { useEffect, useState } from "react";
import LivesCounter from "./LivesCounter";
import masterList from "./masterList";

function GameContainer() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordStatus, setWordStatus] = useState("");
  const [livesLeft, setLivesLeft] = useState(6);

  function generateWordAndHint() {
    return masterList[Math.floor(Math.random() * masterList.length + 1)];
  }

  // guess function
  function guess(char) {
    // generate index of characters that match input char
    let positions = [];
    let correctGuess = false;

    for (let i = 0; i < word.length; i++) {
      if (char === word.charAt(i)) {
        positions.push(i);
        correctGuess = true;
      }
    }

    // update wordStatus (blanks)
    let newStatus = wordStatus.split(" ");
    for (let i of positions) {
      newStatus[i] = char;
    }
    let blanks = "";
    for (let i = 0; i < word.length; i++) {
      if (newStatus[i] === " ") {
        blanks += "    ";
      } else {
        blanks += (newStatus[i] + " ");
      }
    }
    setWordStatus(blanks);

    // update LivesLeft
    if (!correctGuess) {
      setLivesLeft(livesLeft - 1);
    }
  }

  // Initialize variables
  useEffect(() => {
    const wordHintPair = generateWordAndHint();
    const word = wordHintPair[0];
    setWord(word);
    setHint(wordHintPair[1]);

    let blanks = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        blanks += "    ";
      } else {
        blanks += "_ ";
      }
    }
    setWordStatus(blanks);
  }, []);

  console.log(word, hint, livesLeft);
  console.log(wordStatus);

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
        <button onClick={() => guess("A")}>Click me!</button>
      </div>
    </div>
  );
}

export default GameContainer;
