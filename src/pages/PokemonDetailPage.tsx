// src/pages/PokemonDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import Navbar from "../components/Navbar";

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [evolutionName, setEvolutionName] = useState<string>("");
  const [evolutionImage, setEvolutionImage] = useState<string>("");

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);

      // Fetch species data
      const speciesRes = await axios.get(response.data.species.url);
      const evolutionUrl = speciesRes.data.evolution_chain.url;

      // Fetch evolution chain
      const evolutionRes = await axios.get(evolutionUrl);
      const chain = evolutionRes.data.chain;

      let evoName = "";
      if (
        chain.species.name === response.data.name &&
        chain.evolves_to.length > 0
      ) {
        evoName = chain.evolves_to[0].species.name;
      } else if (
        chain.evolves_to[0]?.species.name === response.data.name &&
        chain.evolves_to[0].evolves_to.length > 0
      ) {
        evoName = chain.evolves_to[0].evolves_to[0].species.name;
      }

      if (evoName) {
        setEvolutionName(evoName);
        const evoData = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${evoName}`
        );
        setEvolutionImage(evoData.data.sprites.front_default);
      }
    }
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ← Back
        </button>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto w-32 h-32"
          />
          <h1 className="text-3xl capitalize mt-4 font-bold text-gray-800 dark:text-white">
            {pokemon.name}
          </h1>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-1 rounded-full text-sm text-white capitalize shadow"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        {evolutionName && (
          <div className="mt-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
              Evolution
            </h2>
            <img
              src={evolutionImage}
              alt={evolutionName}
              className="mx-auto w-24 h-24"
            />
            <p className="capitalize mt-2 text-gray-800 dark:text-white font-medium">
              {evolutionName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailPage;
