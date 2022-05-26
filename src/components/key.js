import { useState } from "react";

function Key(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      disabled={props.gameWon || clicked}
      onClick={() => {
        props.onClick(props.keyVal);
        setClicked(true);
      }}
    >
      <div className="key"> {props.keyVal}</div>
    </button>
  );
}

export default Key;
