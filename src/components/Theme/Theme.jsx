import "./Theme.css";

// FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// UseEffects & UseStates Import
import { useEffect, useState } from "react";

// Use Local Storage For Theme
const getLocalStorageTheme = () => {
  return localStorage.getItem("theme") || "light-theme";
};

export default function Theme() {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button className={`theme-toggler ${theme}`} onClick={toggleTheme} aria-label="Toggle Theme">
      <FontAwesomeIcon icon={faSun} className={`icon sun ${theme === "light-theme" ? "visible" : ""}`} />
      <FontAwesomeIcon icon={faMoon} className={`icon moon ${theme === "dark-theme" ? "visible" : ""}`} />
    </button>
  );
}
