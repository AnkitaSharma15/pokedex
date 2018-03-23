import React, { Component } from "react";
import "./styles.css";
import { Button } from "react-bootstrap";

class PokemonCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
        </header>
        <br />
        <div className="container-fluid bg-3 text-center">
          <div className="row">
            <div className="col-sm-3">
              <Button onClick={this.props.onClick}>
                <img
                  src="https://static.gamespot.com/uploads/original/1179/11799911/2309167-pikachu.jpg"
                  className="img-responsive"
                  style={{ width: "100%" }}
                  alt="Image"
                />
              </Button>
            </div>
            <div className="col-sm-3">
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
            <div className="col-sm-3">
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
            <div className="col-sm-3">
              <img
                src="https://placehold.it/150x80?text=IMAGE"
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
