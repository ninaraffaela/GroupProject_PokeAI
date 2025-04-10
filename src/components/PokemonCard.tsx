import { Pokemon } from "../types/Pokemon";
import { Link } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="border rounded p-4 shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto transition-transform duration-300 hover:scale-125"
      />
      <h2 className="text-center capitalize mt-2 font-semibold">
        {pokemon.name}
      </h2>
    </Link>
  );
};

export default PokemonCard;
