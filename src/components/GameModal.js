import Modal from "react-bootstrap/Modal";

function GameModal(props) {
  return (
    <Modal backdrop="static" keyboard={false} show={true}>
      <Modal.Header>
        <Modal.Title>{props.win}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.loseMessage}
        Refresh this page to try again!
      </Modal.Body>
    </Modal>
  );
}

export default GameModal;
