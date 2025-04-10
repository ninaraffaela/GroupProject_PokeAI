import React from "react";
import { Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PokeLogo from "../assets/img/PokemonLogo.png";

type Props = {
  onToggleTheme?: () => void;
};

const Navbar: React.FC<Props> = ({ onToggleTheme }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Pokedex
      </h1>
      <img
        className="cursor-pointer"
        onClick={() => navigate("/")}
        src={PokeLogo}
        alt="Pokelogo"
      />
      <button
        onClick={onToggleTheme}
        className="p-2 rounded-full hover:bg-red-400"
        aria-label="Toggle Dark Mode"
      >
        <Moon size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
