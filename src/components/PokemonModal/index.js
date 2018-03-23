import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";
import PokemonCard from "../PokemonCard/index";

class PokemonModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      show: false
    };
  }
  handleOnClick() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div style={{ height: 200 }}>
        <PokemonCard onClick={this.handleOnClick} />

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <center>Pikachu</center>
            <br />
            <center>
              <img
                src="https://static.gamespot.com/uploads/original/1179/11799911/2309167-pikachu.jpg"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </center>
            <br />
            <center>Speed: 45 </center>
            <center>Endurance: 45 </center>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PokemonModal;
