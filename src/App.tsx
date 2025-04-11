import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetailPage toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
