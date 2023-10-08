import { useState, useEffect } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

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
    <div className="h-screen max-w-screen-2xl bg-sky-200 dark:bg-neutral-800 font-Dosis">
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2">
        {/* cloud-top */}
        <div className="flex justify-center items-end" data-aos="fade-down">
          <div className="h-[2rem] w-[4rem] bg-white dark:bg-neutral-500 rounded-t-full"></div>
          <div className="h-[3.5rem] w-[7rem] bg-white dark:bg-neutral-500 rounded-t-full -ml-4"></div>
          <div className="h-[2.5rem] w-[5rem] bg-white dark:bg-neutral-500 rounded-t-full -ml-6"></div>
          <div className="h-[1rem] w-[2rem] bg-white dark:bg-neutral-500 rounded-t-full -ml-2"></div>
        </div>

        {/* cloud-menu */}
        <div className="p-4 flex justify-between bg-white dark:bg-neutral-500 w-[310px] rounded-full shadow-lg shadow-sky-300 dark:shadow-gray-500"  data-aos="fade-down">
          <a href="#home" className="hover:text-sky-700 font-medium dark:text-white">
            Home
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a href="#about" className="hover:text-sky-700 font-medium dark:text-white">
            About
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a href="#project" className="hover:text-sky-700 font-medium dark:text-white">
            Project
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a href="#contact" className="hover:text-sky-700 font-medium dark:text-white">
            Contact
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <button onClick={handleThemeSwitch}>
            {theme === "light" ? (
              <BsFillSunFill className="text-[22px] text-red-300" />
            ) : (
              <BsMoonStarsFill className="text-[18px] text-yellow-200" />
            )}
          </button>
        </div>
      </nav>

      <section className="pt-44">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          earum veritatis adipisci ex iure dolore aliquam architecto rem
          temporibus non? Mollitia laudantium ullam eius tempora, eaque
          voluptatum in nisi quis.
        </p>
      </section>
    </div>
  );
};

export default App;
