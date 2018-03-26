import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";

export default class PokemonBall extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleGo = this.handleGo.bind(this);

    this.state = {
      show: false,

      letgo: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }
  handleGo() {
    this.setState({
      show: false,
      letgo: true
    });
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Button className="ball ball-count" onClick={this.handleShow}>
          <strong>{this.state.letgo ? 0 : this.props.itemsCount}</strong>
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          container={this}
        >
          <Modal.Header className="modal-header-border" closeButton />
          <Modal.Body>
            <center>
              <div className="ball" />
              <h3 classname="text-color">Catched</h3>
              <br />
              <p>
                {!this.state.letgo
                  ? this.props.items.map((item, i) => (
                      <img
                        key={i}
                        src={item.sprites ? item.sprites.front_default : ""}
                        className="img-responsive"
                        style={{ width: "60%" }}
                        alt="Image"
                      />
                    ))
                  : ""}
              </p>
              <br />
            </center>
          </Modal.Body>
          <Modal.Footer className="modal-header-border">
            <Button onClick={this.handleGo}>Let Go</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
