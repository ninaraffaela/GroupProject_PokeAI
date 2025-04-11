import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const darkClasses = "bg-stone-800 text-stone-50 min-h-screen";
  const lightClasses = "bg-stone-50 text-stone-800 min-h-screen";

  return (
    <div className={isDarkMode ? darkClasses : lightClasses}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
          <Route
            path="/pokemon/:id"
            element={<PokemonDetailPage toggleTheme={toggleTheme} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
