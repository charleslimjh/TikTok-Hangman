import { useEffect, useState } from "react";
import masterList from "./masterList";


function GameContainer() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordStatus, setWordStatus] = useState([]);

  function generateWordAndHint() {
    return masterList[Math.floor(Math.random() * masterList.length + 1)];
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
