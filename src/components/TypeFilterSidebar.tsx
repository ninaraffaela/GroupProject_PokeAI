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

const TypeFilterSidebar: React.FC<Props> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-3 py-1 rounded-full text-white ${
            selectedType === type ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TypeFilterSidebar;
