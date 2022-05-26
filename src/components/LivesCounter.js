import Canvas from "./Canvas";

function LivesCounter(props) {
  //TODO LIFE COUNTER ANIMATION

  return (
    <div>
      <div>You have {props.livesLeft} lives left.</div>
      <Canvas livesLeft={props.livesLeft} />
    </div>
  );
}

export default LivesCounter;