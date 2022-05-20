import { useEffect, useState } from "react";
import masterList from "./masterList";


function GameContainer() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordStatus, setWordStatus] = useState([]);
  const [isGuessed, setGuessed] = useState(false);

  function generateWordAndHint() {
    return masterList[Math.floor(Math.random() * masterList.length + 1)];
  }

  function guess(char) {
    const positions = [];
    for (let i = 0; i < word.length; i++) {
      if (char == word.charAt(i)) {
        positions.push(i);
      }
    }

    const newStatus = wordStatus.slice();
    for (i in positions) {
      newStatus[i] = char + " ";
    }
    
    setWordStatus(newStatus);
    setGuessed(false);
  }

  useEffect(() => {
    const wordHintPair = generateWordAndHint();
    const word = wordHintPair[0];
    setWord(word);
    setHint(wordHintPair[1]);

    const blanks = [];
    for (let i = 0; i < word.length; i++) {
      blanks.push("_ ");
    }
    setWordStatus(blanks);
  }, []);

  console.log(word, hint, wordStatus);

  return (
    <div>
      <div>Word: {wordStatus}</div>
      <div>Hint: {hint}</div>
    </div>
  );
}

export default GameContainer;
