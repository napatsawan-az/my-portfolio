import { useState, useEffect } from "react";

const App = () => {
  // Load the theme preference from localStorage, defaulting to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Add or remove the "dark" class based on the theme preference
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Store the theme preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen bg-sky-200 dark:bg-neutral-800 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline dark:text-white">Hello world!</h1>

      <button
        className=" bg-white p-4 rounded-full"
        onClick={handleThemeSwitch}
      >
        test dark
      </button>
    </div>
  );
};

export default App;
