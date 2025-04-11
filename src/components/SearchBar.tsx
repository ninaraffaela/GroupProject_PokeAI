import React from "react";

type Props = {
  onSearch: (term: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="flex gap-2 mb-4 w-full">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="border rounded p-2 w-full bg-white dark:bg-stone-700 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-200"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
