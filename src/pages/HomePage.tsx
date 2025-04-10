import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import TypeFilterSidebar from "../components/TypeFilterSidebar";
import { Menu } from "lucide-react";

const HomePage: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filtered, setFiltered] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

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
    <div className="relative">
      <Navbar onToggleTheme={toggleTheme} />
      <div className="p-4">
        <div className="flex flex-col items-center justify-center mb-4 gap-4">
          <SearchBar onSearch={setSearchTerm} />
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            aria-label="Toggle Filter"
          >
            <Menu size={20} />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out
            ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Filter by Type
          </h2>
          <TypeFilterSidebar
            selectedType={typeFilter}
            onTypeChange={(type) => {
              setTypeFilter(type);
              setShowSidebar(false);
            }}
          />
        </div>

        {showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
          ></div>
        )}

        <PokemonList pokemons={filtered} />
      </div>
    </div>
  );
};

export default HomePage;
