import { useState } from "react";

function LivesCounter(props) {
  const [image, setImage] = useState(displayHangman(props.livesLeft));

  //TODO LIFE COUNTER ANIMATION

  return (
    <div>
      <div>You have {props.livesLeft} lives left.</div>
    </div>
  );
}

export default LivesCounter;