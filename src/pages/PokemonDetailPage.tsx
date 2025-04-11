import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import Navbar from "../components/Navbar";
import HeightIcon from "../assets/img/height.png";
import WeightIcon from "../assets/img/weight.png";
import PokeballIcon from "../assets/img/iconoir_pokeball.png"

type Props = {
  toggleTheme: () => void;
};

const PokemonDetailPage: React.FC<Props> = ({ toggleTheme }) => {
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

      const speciesRes = await axios.get(response.data.species.url);
      const evolutionUrl = speciesRes.data.evolution_chain.url;
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
    <div className="relative">
      <Navbar onToggleTheme={toggleTheme} />
      <div className="p-6 max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:scale-105 transition"
        >
          ← Back
        </button>

        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto w-48 h-48 transition-transform duration-300 hover:scale-125 drop-shadow-lg"
          />
          <h1 className="text-4xl capitalize mt-6 font-extrabold tracking-wide text-gray-900 dark:text-white">
            {pokemon.name}
          </h1>
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-1 rounded-full text-sm text-white font-medium shadow"
              >
                {t.type.name}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="bg-gray-100 dark:bg-gray-700 flex gap-1 justify-between items-center p-3 rounded-lg shadow-inner">
              <img src={HeightIcon} alt="height" />
              <strong>Height:</strong>
              <p>{pokemon.height / 10} m</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 flex gap-1 justify-between items-center p-3 rounded-lg shadow-inner">
              <img src={WeightIcon} alt="weight" />
              <strong>Weight:</strong>
              <p>{pokemon.weight / 10} kg</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 flex gap-1 justify-between items-center p-3 rounded-lg shadow-inner col-span-2">
              <img src={PokeballIcon} alt="pokeball" />
              <strong>Base Experience:</strong>
              
              <p>{pokemon.base_experience}</p>
            </div>
          </div>
        </div>

{/* Oguz 
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
              <strong>Height:</strong>
              <p>{pokemon.height / 10} m</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
              <strong>Weight:</strong>
              <p>{pokemon.weight / 10} kg</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
              <strong>Base Exp:</strong> */}


        {evolutionName && (
          <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
              Evolution
            </h2>
            <img
              src={evolutionImage}
              alt={evolutionName}
              className="mx-auto w-28 h-28 transition-transform duration-300 hover:scale-125 drop-shadow"
            />
            <p className="capitalize mt-2 text-center text-gray-700 dark:text-gray-200 text-lg font-medium">
              {evolutionName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailPage;
