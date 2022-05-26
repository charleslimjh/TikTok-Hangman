import Key from "./key";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";

function Keyboard(props) {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <Container fluid="true">
      <Row>
        {keys1.map((key) => {
          return (
            <Col xs={1}><Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            /></Col>
          );
        })}
      </Row>
      <Row>
        {keys2.map((key) => {
          return (
            <Col xs={1}><Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            /></Col>
          );
        })}
      </Row>
      <Row>
        {keys3.map((key) => {
          return (
            <Col xs={1}><Key
              key={key}
              keyVal={key}
              onClick={props.onClick}
              gameWon={props.gameWon}
            /></Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Keyboard;
