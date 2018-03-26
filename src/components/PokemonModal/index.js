import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import PokemonCard from "../PokemonCard/index";
import PokemonBall from "../PokemonBall/index";
import axios from "axios";
import "./style.css";

class PokemonModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCatch = this.handleCatch.bind(this);

    this.state = {
      show: false,
      itemName: "",
      searchResults: [],
      selectedPokemon: []
    };
  }

  handleOnClick(item) {
    this.setState({
      show: true,
      itemName: item
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then(res =>
        this.setState({ searchResults: res.data }, () =>
          console.log(this.state.searchResults)
        )
      );
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleHide() {
    this.setState({
      show: false
    });
  }
  handleCatch() {
    this.setState(
      {
        show: false,
        selectedPokemon: [
          ...this.state.selectedPokemon,
          this.state.searchResults
        ]
      },
      () => console.log(this.state.selectedPokemon)
    );
  }
  render() {
    return (
      <div>
        <PokemonCard onClick={item => this.handleOnClick(item)} />

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header className="modal-header-border" closeButton />
          <Modal.Body className="text-capital">
            <center>
              <h2>{this.state.itemName}</h2>
              <br />
              <p>
                <img
                  src={
                    this.state.searchResults.sprites
                      ? this.state.searchResults.sprites.front_default
                      : ""
                  }
                  className="img-responsive"
                  style={{ width: "60%" }}
                  alt="Image"
                />
              </p>
              <br />
              <ul class="list-group">
                {this.state.searchResults.stats
                  ? this.state.searchResults.stats.map((k, i) => (
                      <li class="list-group-item">
                        <h2>
                          {k.stat.name}: &nbsp;&nbsp;&nbsp;&nbsp;
                          {k.base_stat}
                        </h2>
                      </li>
                    ))
                  : ""}
              </ul>
            </center>
          </Modal.Body>
          <Modal.Footer className="modal-header-border">
            <Button onClick={this.handleCatch}>Catch</Button>
          </Modal.Footer>
        </Modal>
        <PokemonBall
          items={this.state.selectedPokemon}
          itemsCount={this.state.selectedPokemon.length}
        />
      </div>
    );
  }
}

export default PokemonModal;
