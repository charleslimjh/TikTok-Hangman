import Button from "react-bootstrap/Button";
import { useState } from "react";

function Key(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <Button
      disabled={props.gameWon || clicked}
      onClick={() => {
        props.onClick(props.keyVal);
        setClicked(true);
      }}
    >
      <div className="key"> {props.keyVal}</div>
    </Button>
  );
}

export default Key;
