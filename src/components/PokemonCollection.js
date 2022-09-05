import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
// const pokeCards = props.pokeList.map(pokemon =>
// <PokemonCard
//   name={pokemon.name}
//   hp={pokemon.hp}
//   sprites={pokemon.sprites}
// />
// )

  const pokemonCards = pokemon.map((poke) => (
    <PokemonCard key={poke.id} pokemon={poke} />
  ));
  // console.log(pokemonCards)

  return (
  <Card.Group 
  itemsPerRow={6}>{pokemonCards}
  </Card.Group>
  );
}

export default PokemonCollection;
