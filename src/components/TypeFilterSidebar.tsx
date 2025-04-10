// src/components/TypeFilterSidebar.tsx
import React from "react";

type Props = {
  selectedType: string;
  onTypeChange: (type: string) => void;
};

const types = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-700",
  dragon: "bg-indigo-900",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

const TypeFilterSidebar: React.FC<Props> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-3 py-1 rounded-full text-white capitalize shadow ${
            selectedType === type ? "ring-2 ring-white" : ""
          } ${typeColors[type]}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TypeFilterSidebar;
