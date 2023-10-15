import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";

const App = () => {
  // Load the theme preference from localStorage, defaulting to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="bg-sky-200 bg-opacity-70 dark:bg-neutral-900 font-Dosis text-2xl">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar theme={theme} setTheme={setTheme} />
        <Home theme={theme} />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
