import Key from "./Key";
import Container from "react-bootstrap/Container";

function Keyboard(props) {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <Container fluid="true">
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
    </Container>
  );
}

export default Keyboard;
