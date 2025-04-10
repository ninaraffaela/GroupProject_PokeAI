import { Moon } from "lucide-react";

type Props = {
  onToggleTheme?: () => void;
};

const Navbar: React.FC<Props> = ({ onToggleTheme }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">Pokedex</h1>
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
