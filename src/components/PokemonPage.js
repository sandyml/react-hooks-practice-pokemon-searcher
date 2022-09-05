import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const pokemonURL = "http://localhost:3001/pokemon";

// check if children need key

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(pokemonURL)
      .then((resp) => resp.json())
      // .then(pokeData => setPokemon(pokeData))
      .then(setPokemon);
  }, []); // one dependency

  // const handleAddPokemon = (newPokemon) => {
  //   setPokemon([newPokemon, ...pokemon]); // card will show up top rather than bottom (easier to see!!!!)
  // }

  const handleAddPokemon = (newPokemon) => {
    let newPokemonArr = [newPokemon, ...pokemon] // render and show new card on top instead of bottom
    // newPokemonArr.unshift(pokeObj)
    setPokemon(newPokemonArr)
  
  }
 

  

  const pokemonsToShowCard = pokemon.filter((poke) =>
  // console.log("PokemonPage", poke)
    poke.name.toLowerCase().includes(searchTerm.toLowerCase()) // case sensitive 
    // poke.name.toUpperCase().includes(searchTerm.toLowerCase())
  )

  // );

 
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={pokemonsToShowCard} />
    </Container>
  );
}

export default PokemonPage;
