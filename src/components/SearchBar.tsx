type Props = {
  onSearch: (term: string) => void;
};
const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search Pokemon"
        className="border rounded p-2 w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
