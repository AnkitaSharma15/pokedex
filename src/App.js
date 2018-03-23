import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal/index";

class App extends Component {
  render() {
    return (
      <div>
        {/* <PokemonCard /> */}
        <PokemonModal />
      </div>
    );
  }
}

export default App;
