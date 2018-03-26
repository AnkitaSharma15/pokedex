import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

class PokemonCardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }
  componentWillMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.item.name}`)
      .then(res => {
        const pokemon = res.data;
        this.setState(
          { pokemon },
          localStorage.setItem("pokemonData", JSON.stringify(pokemon))
        );
      });
  }

  render() {
    let dataPokemon = JSON.parse(localStorage.getItem("pokemonData"));
    return (
      <div className="col-lg-3 col-md-4 col-sm-5 col-xs-6 pokemon-border">
        <div className="pokemon-block embed-responsive embed-responsive-1by1">
          <a
            href="#"
            className="embed-responsive-item "
            onClick={() => this.props.onClick(this.props.item.name)}
          >
            <p className="text-center pokemon-name">
              <img
                src={
                  this.state.pokemon.sprites
                    ? this.state.pokemon.sprites.front_default
                    : ""
                }
                style={{ width: "75%" }}
                alt={this.props.item.name}
              />
              <br />
              {this.props.item.name}
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default PokemonCardItem;
