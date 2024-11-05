"use client";
import { useState } from "react";
import { IoSunny } from "react-icons/io5";

const DarkToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      onClick={handleDarkMode}
      className={`dark-toggler ${darkMode || "dark"}`}
    >
      <IoSunny />
    </button>
  );
};

export default DarkToggleButton;
