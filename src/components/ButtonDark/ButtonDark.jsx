"use client";
import { useEffect, useState } from "react"; // Import useState hook
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import styles from "./buttondark.module.scss"

const ButtonDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.ctrlKey && event.key === "m") {
        document.getElementById("butt").click();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const darkModeToggler = () => {
    document.body.classList.toggle("dark-mode-variables");
    setIsDarkMode((prevState) => !prevState); // Toggle dark mode state
  };

  return (
    <button
      id="butt"
      onClick={darkModeToggler}
      className={`clr_border p-2 rounded-xl border shadow grid place-items-center ${styles.butt}`}
    >
      {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
};

export default ButtonDark;
