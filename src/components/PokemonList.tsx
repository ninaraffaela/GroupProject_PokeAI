import React from "react";
import { Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
  pokemons: Pokemon[];
};

const PokemonList: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
