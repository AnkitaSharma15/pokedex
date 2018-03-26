import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PokemonCardItem from "../PokemonCardItem/index";

const PokemonCardList = ({ pokemon, onClick }) => {
  return pokemon.map((r, i) => (
    <PokemonCardItem key={i} item={r} onClick={onClick} />
  ));
};
export default PokemonCardList;
