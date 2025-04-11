export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  species: {
    url: string;
  };
};
