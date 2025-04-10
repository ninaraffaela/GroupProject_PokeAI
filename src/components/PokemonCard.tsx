import { Link } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="border rounded p-4 shadow hover:shadow-lg"
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto"
      />
      <h2 className="text-center capitalize mt-2 font-semibold">
        {pokemon.name}
      </h2>
    </Link>
  );
};

export default PokemonCard;
