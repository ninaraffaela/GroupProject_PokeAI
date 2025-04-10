import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import TypeFilterSidebar from "../components/TypeFilterSidebar";

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filtered, setFiltered] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    async function fetchPokemons() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const results = await Promise.all(
        response.data.results.map(async (p: any) => {
          const res = await axios.get(p.url);
          return res.data;
        })
      );
      setPokemons(results);
      setFiltered(results);
    }
    fetchPokemons();
  }, []);

  useEffect(() => {
    let filteredList = pokemons;
    if (searchTerm) {
      filteredList = filteredList.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (typeFilter) {
      filteredList = filteredList.filter((p) =>
        p.types.some((t) => t.type.name === typeFilter)
      );
    }
    setFiltered(filteredList);
  }, [searchTerm, typeFilter, pokemons]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SearchBar onSearch={setSearchTerm} />
        <TypeFilterSidebar
          selectedType={typeFilter}
          onTypeChange={setTypeFilter}
        />
        <PokemonList pokemons={filtered} />
      </div>
    </div>
  );
};

export default HomePage;
