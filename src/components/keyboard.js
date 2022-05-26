import Key from "./key";

function Keyboard(props) {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="row1">
        {keys1.map((key) => {
          return (
            <Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            />
          );
        })}
      </div>
      <div className="row2">
        {keys2.map((key) => {
          return (
            <Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            />
          );
        })}
      </div>
      <div className="row3">
        {keys3.map((key) => {
          return (
            <Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
