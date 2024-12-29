import React from "react";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button onClick={toggleTheme} className="btn btn-toggle-theme">
    Switch to {isDarkMode ? "Light" : "Dark"} Mode
  </button>
);

export default ThemeToggle;
