import { useState } from "react";
import Button from "react-bootstrap/Button";

function Key(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <Button
      disabled={props.gameWon || clicked}
      onClick={() => {
        props.onClick(props.keyVal);
        setClicked(true);
      }}
      className="border m-0"
    >
      <div className="key"> {props.keyVal}</div>
    </Button>
  );
}

export default Key;
