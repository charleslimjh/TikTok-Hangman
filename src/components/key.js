import Button from "react-bootstrap/button";
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
      className="m-1"
    >
      <div className="key"> {props.keyVal}</div>
    </Button>
  );
}

export default Key;
