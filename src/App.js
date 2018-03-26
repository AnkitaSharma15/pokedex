import React, { Component } from "react";
import PokemonModal from "./components/PokemonModal/index";
import Header from "./components/Header/index";
import PokemonBall from "./components/PokemonBall/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <PokemonBall />
        </Header>
        <PokemonModal />
      </div>
    );
  }
}

export default App;
