import { useState, useEffect } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import placeholder from "./assets/placeholder.png";

const App = () => {
  // Load the theme preference from localStorage, defaulting to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeLink, setActiveLink] = useState(null);

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
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-sky-200 dark:bg-neutral-800 font-Dosis text-lg">
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-10">
        {/* cloud-top */}
        <div className="flex justify-center items-end" data-aos="fade-down">
          <div className="h-[2rem] w-[4rem] bg-white dark:bg-neutral-600 rounded-t-full"></div>
          <div className="h-[3.5rem] w-[7rem] bg-white dark:bg-neutral-600 rounded-t-full -ml-4"></div>
          <div className="h-[2.5rem] w-[5rem] bg-white dark:bg-neutral-600 rounded-t-full -ml-6"></div>
          <div className="h-[1rem] w-[2rem] bg-white dark:bg-neutral-600 rounded-t-full -ml-2"></div>
        </div>

        {/* cloud-menu */}
        <div
          className="p-4 flex justify-between bg-white dark:bg-neutral-600 w-[310px] rounded-full shadow-lg shadow-sky-300 dark:shadow-neutral-500"
          data-aos="fade-down"
        >
          <a
            href="#home"
            className={`font-medium ${
              activeLink === "home"
                ? "text-sky-500 dark:text-yellow-200"
                : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
            }  `}
            onClick={() => setActiveLink("home")}
          >
            Home
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a
            href="#about"
            className={`font-medium ${
              activeLink === "about"
                ? "text-sky-500 dark:text-yellow-200"
                : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
            }  `}
            onClick={() => setActiveLink("about")}
          >
            About
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a
            href="#project"
            className={`font-medium ${
              activeLink === "project"
                ? "text-sky-500 dark:text-yellow-200"
                : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
            }  `}
            onClick={() => setActiveLink("project")}
          >
            Project
          </a>
          <div className="text-sky-500 dark:text-sky-200">|</div>
          <a
            href="#contact"
            className={`font-medium ${
              activeLink === "contact"
                ? "text-sky-500 dark:text-yellow-200"
                : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
            }  `}
            onClick={() => setActiveLink("contact")}
          >
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

      {/* Home Section */}
      <section
        id="home"
        className="pt-44 p-7 flex flex-col md:items-center lg:flex-row lg:justify-center"
      >
        {/* Content */}
        <div className="dark:text-white mb-5 lg:mr-10" data-aos="fade-right">
          <h1 className="font-bold text-2xl mb-5">
            Hello, I'm Napatsawan <br />
            <span className="text-5xl text-red-400 dark:text-yellow-200">
              Software Developer
            </span>
          </h1>
          <p>
            Passionate about crafting beautiful Full-Stack web experiences under
            the Sky.
          </p>
        </div>

        {/* Picture */}
        <div data-aos="fade-left" className="flex max-w-[500px] max-h-[500px]">
          <img
            src={placeholder}
            alt="Drawing in Progress"
            className="relative rounded-3xl object-contain"
          />
          <p className="absolute top-1/2 w-full text-center text-gray-500">
            I'm currently working on a drawing. Please wait!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <p>I'm About</p>
      </section>

      {/* Project Section */}
      <section id="project">
        <p>I'm Project</p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <p>I'm Contact</p>
      </section>
    </div>
  );
};

export default App;
