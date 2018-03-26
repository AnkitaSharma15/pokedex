import React, { Component } from "react";
import PokemonCardList from "../PokemonCardList/index";
import axios from "axios";

export default class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }
  componentWillMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res => {
      const pokemons = res.data;
      this.setState(
        { pokemons },
        localStorage.setItem("data", JSON.stringify(pokemons))
      );
    });
  }

  render() {
    let pokemonData = JSON.parse(localStorage.getItem("data"));
    return (
      <div className="container-fluid">
        <div className="row">
          <PokemonCardList
            pokemon={pokemonData.results}
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}
