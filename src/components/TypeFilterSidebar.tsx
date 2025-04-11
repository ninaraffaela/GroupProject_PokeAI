// src/components/TypeFilterSidebar.tsx
import React from "react";
import NormalIcon from "../assets/img/normal.png";
import FirelIcon from "../assets/img/fire.png";
import WaterIcon from "../assets/img/water.png";
import GrassIcon from "../assets/img/grass.png";
import ElectricIcon from "../assets/img/electric.png";
import IceIcon from "../assets/img/ice.png";
import FightingIcon from "../assets/img/fighting.png";
import PoisonIcon from "../assets/img/poison.png";
import GroundIcon from "../assets/img/ground.png";
import FlyingIcon from "../assets/img/flying.png";
import PsychicIcon from "../assets/img/psychic.png";
import BugIcon from "../assets/img/bug.png";
import RockIcon from "../assets/img/rock.png";
import GhostIcon from "../assets/img/ghost.png";
import DragonIcon from "../assets/img/dragon.png";
import DarkIcon from "../assets/img/dark.png";
import SteelIcon from "../assets/img/steel.png";
import FairyIcon from "../assets/img/fairy.png";

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

const typeIcons: Record<string, string> = {
  normal: NormalIcon,
  fire: FirelIcon,
  water: WaterIcon,
  grass: GrassIcon,
  electric: ElectricIcon,
  ice: IceIcon,
  fighting: FightingIcon,
  poison: PoisonIcon,
  ground: GroundIcon,
  flying: FlyingIcon,
  psychic: PsychicIcon,
  bug: BugIcon,
  rock: RockIcon,
  ghost: GhostIcon,
  dragon: DragonIcon,
  dark: DarkIcon,
  steel: SteelIcon,
  fairy: FairyIcon,
};

const TypeFilterSidebar: React.FC<Props> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="grid grid-cols-2 h-20 gap-2 mt-10 ">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`px-3 py-2 flex flex-col justify-center items-center rounded-[20px] text-white capitalize shadow ${
            selectedType === type ? "ring-2 ring-white" : ""
          } ${typeColors[type]}`}
        >
          {/* {typeIcons[type]}  */}
          <div className="bg-stone-50 rounded-full w-10 h-10">
            <img className="object-contain w-full h-full p-2" src={typeIcons[type]} alt="" />
          </div>
          {type}
        </button>
      ))}
    </div>
  );
};

export default TypeFilterSidebar;
