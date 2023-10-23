import { useState, useEffect } from "react";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  BsFillPersonFill,
  BsFillSunFill,
  BsMoonStarsFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

const Navbar = ({ theme, setTheme }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

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

  useEffect(() => {
    // Initialize scrollSpy and set the active link
    scrollSpy.update();
    handleSetActive("home");

    // Event listener for scroll
    Events.scrollEvent.register("begin", (to, element) => {
      handleSetActive(to);
    });

    // Event listener for scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // Determine the currently active section based on scroll position
      const homeElement = document.getElementById("home");
      const aboutElement = document.getElementById("about");
      const projectElement = document.getElementById("project");
      const contactElement = document.getElementById("contact");

      if (homeElement && aboutElement && projectElement && contactElement) {
        if (
          scrollY >= homeElement.offsetTop &&
          scrollY < aboutElement.offsetTop
        ) {
          handleSetActive("home");
        } else if (
          scrollY >= aboutElement.offsetTop &&
          scrollY < projectElement.offsetTop
        ) {
          handleSetActive("about");
        } else if (
          scrollY >= projectElement.offsetTop &&
          scrollY < contactElement.offsetTop
        ) {
          handleSetActive("project");
        } else if (scrollY >= contactElement.offsetTop) {
          handleSetActive("contact");
        }
      }
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative w-full flex justify-center z-50">
      <nav className="fixed top-5">
        <div data-aos="fade-down">
          {/* cloud-top */}
          <div className="flex justify-center items-end">
            <div className="h-[4rem] w-[4rem] -mb-[2rem] bg-white dark:bg-neutral-600 rounded-full"></div>
            <div className="h-[7rem] w-[7rem] -mb-[3.5rem] bg-white dark:bg-neutral-600 rounded-full -ml-4"></div>
            <div className="h-[5rem] w-[5rem] -mb-[2.5rem] bg-white dark:bg-neutral-600 rounded-full -ml-6"></div>
            <div className="h-[2rem] w-[2rem] -mb-[1rem] bg-white dark:bg-neutral-600 rounded-full -ml-2"></div>
          </div>

          {/* cloud-menu */}
          <div className="p-4 flex justify-around bg-white dark:bg-neutral-600 w-[310px] border-none rounded-full shadow-lg shadow-sky-300 dark:shadow-neutral-500">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`mt-1 font-medium ${
                activeLink === "home"
                  ? "text-sky-500 dark:text-yellow-200"
                  : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
              }  `}
            >
              <AiFillHome />
            </ScrollLink>
            <div className="text-sky-500 dark:text-sky-200">|</div>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`mt-1 font-medium ${
                activeLink === "about"
                  ? "text-sky-500 dark:text-yellow-200"
                  : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
              }  `}
            >
              <BsFillPersonFill />
            </ScrollLink>
            <div className="text-sky-500 dark:text-sky-200">|</div>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`mt-1 font-medium ${
                activeLink === "project"
                  ? "text-sky-500 dark:text-yellow-200"
                  : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
              }  `}
            >
              <HiMiniPresentationChartLine />
            </ScrollLink>
            <div className="text-sky-500 dark:text-sky-200">|</div>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className={`mt-1 font-medium ${
                activeLink === "contact"
                  ? "text-sky-500 dark:text-yellow-200"
                  : "text-black hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
              }  `}
            >
              <BiSolidContact />
            </ScrollLink>
            <div className="text-sky-500 dark:text-sky-200">|</div>
            <button onClick={handleThemeSwitch}>
              {theme === "light" ? (
                <BsFillSunFill className="font-medium text-red-300" />
              ) : (
                <BsMoonStarsFill className="font-medium text-yellow-200" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
