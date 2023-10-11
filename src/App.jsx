import { useState, useEffect } from "react";
import {
  BsFillSunFill,
  BsMoonStarsFill,
  BsFilePdfFill,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiBootstrap, SiTailwindcss } from "react-icons/si";
import placeholder from "./assets/placeholder.png";
import colmarBlack from "./assets/project-colmar-black.svg";
import colmarWhite from "./assets/project-colmar-white.svg";
import sushi from "./assets/project-sushi.png";
import rocketfit from "./assets/project-rocketfit.png";

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
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-sky-200 bg-opacity-70 dark:bg-neutral-900 font-Dosis text-2xl">
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-10">
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
            {/* <div className="text-sky-500 dark:text-sky-200">|</div>
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
          </a> */}
            <div className="text-sky-500 dark:text-sky-200">|</div>
            <button onClick={handleThemeSwitch}>
              {theme === "light" ? (
                <BsFillSunFill className="text-[22px] text-red-300" />
              ) : (
                <BsMoonStarsFill className="text-[18px] text-yellow-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-52 px-7 flex flex-col items-center md:px-10 lg:flex-row lg:justify-center lg:items-center"
      >
        {/* Content */}
        <div
          className="dark:text-white mb-10 md:max-w-[500px] lg:mr-10"
          data-aos="fade-right"
        >
          <h1 className="font-bold text-4xl mb-2">
            Hello, I'm Napatsawan <br />
            <span className="text-5xl leading-snug text-red-400 dark:text-yellow-200">
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
      <section
        id="about"
        className="pt-52 px-7 md:px-10 lg:flex lg:flex-row lg:justify-center"
      >
        {/* Bio */}
        <div className="flex flex-col items-center lg:mr-20">
          <h2
            className="font-bold text-4xl mb-7 dark:text-yellow-200"
            data-aos="flip-up"
          >
            About
          </h2>
          <div
            className="mb-10 p-8 md:max-w-[500px] bg-white bg-opacity-30 dark:bg-opacity-10 border-[1px] border-white dark:border-yellow-200 rounded-3xl dark:text-white"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-medium mb-2">👋 Hi~</h3>
            <p className="mb-5">
              I'm Napatsawan, a former medical technology graduate turned web
              developer.
            </p>
            <p className="mb-5">
              💻 <br />I began my career as a proofreader, meticulously shaping
              written words. Now, I'm crafting web experiences as a frontend,
              backend, and full-stack developer.
            </p>
            <p className="mb-10">
              🎨 <br />
              Beyond code, I'm an artist who finds joy in the fluid strokes of
              watercolor. Join me as I blend technology and creativity.
            </p>

            {/* Contact */}
            <div className="flex justify-around items-center pt-7 border-t-[1px] border-white dark:border-yellow-200">
              <BsLinkedin className="text-3xl text-blue-500 dark:text-blue-400" />
              <BsGithub className="text-4xl text-purple-500 dark:text-purple-400" />
              <HiMail className="text-4xl text-red-500 dark:text-red-400" />
            </div>
          </div>
        </div>

        {/* Skill */}
        <div className="flex flex-col items-center">
          <h2
            className="font-bold text-4xl mb-7 dark:text-yellow-200"
            data-aos="flip-up"
          >
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:w-[500px] lg:max-w-[500px] dark:text-white">
            <div
              className="flex flex-col items-center justify-center p-2 bg-orange-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-orange-500"
              data-aos="zoom-in"
            >
              <AiFillHtml5 className="text-8xl text-orange-500" />
              <p>HTML</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg-blue-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-blue-500"
              data-aos="zoom-in"
            >
              <BiLogoCss3 className="text-8xl text-blue-500" />
              <p>CSS</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg-purple-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-purple-500"
              data-aos="zoom-in"
            >
              <SiBootstrap className="text-8xl text-purple-500" />
              <p>Bootstrap</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg-sky-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-sky-500"
              data-aos="zoom-in"
            >
              <SiTailwindcss className="text-8xl text-sky-500" />
              <p>Tailwind</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg-yellow-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-yellow-500"
              data-aos="zoom-in"
            >
              <BiLogoJavascript className="text-8xl text-yellow-500" />
              <p>JavaScript</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg-cyan-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-sky-500"
              data-aos="zoom-in"
            >
              <BiLogoReact className="text-8xl text-cyan-500" />
              <p>React</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2  bg-lime-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-lime-600"
              data-aos="zoom-in"
            >
              <BiLogoNodejs className="text-8xl text-lime-600" />
              <p>Node.js</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2b bg-white bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-black dark:border-white"
              data-aos="zoom-in"
            >
              <SiExpress className="text-8xl" />
              <p>Express</p>
            </div>

            <div
              className="flex flex-col items-center justify-center p-2 bg bg-emerald-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-emerald-600"
              data-aos="zoom-in"
            >
              <BiLogoMongodb className="text-8xl text-emerald-600" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="project"
        className="pt-52 px-7 pb-10 md:px-10 min-h-screen flex flex-col items-center"
      >
        <h2
          className="font-bold text-4xl mb-7 dark:text-yellow-200"
          data-aos="flip-up"
        >
          Project
        </h2>

        <div className="lg:grid lg:grid-cols-3 gap-7">
          {/* Colmar Academy */}
          <article className="md:max-w-[500px] lg:max-w-[400px] mb-7 dark:text-white" data-aos="fade-right">
            <div className="flex justify-center items-center pt-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
              {theme === "light" ? (
                <img
                  src={colmarBlack}
                  alt="project colmar"
                  className="w-[150px] h-[150px] object-contain"
                />
              ) : (
                <img
                  src={colmarWhite}
                  alt="project colmar"
                  className="w-[150px] h-[150px] object-contain"
                />
              )}
            </div>
            <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
              <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
                Colmar Academy
              </h4>
              <p className="mb-5 text-xl lg:h-52">
                I created the landing page for "Colmar Academy" while learning
                HTML, vanilla CSS, and responsive design with media queries.
                This project aimed to make informed design decisions regarding
                color and typography.
              </p>
              <div className="pt-3 flex justify-between border-t-[1px] border-red-300 dark:border-yellow-200">
                <div className="flex items-center">
                  <AiFillHtml5 className="text-3xl text-orange-500" />
                  <BiLogoCss3 className="text-3xl text-blue-500" />
                </div>
                <div className="flex items-center">
                  <BsGithub className="text-2xl text-purple-500 mr-1" />
                  <HiExternalLink className="text-3xl" />
                </div>
              </div>
            </div>
          </article>

          {/* Sushiman */}
          <article className="md:max-w-[500px] lg:max-w-[400px] mb-7 dark:text-white" data-aos="fade-up">
            <div className="flex justify-center items-center pt-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
              <img
                src={sushi}
                alt="project colmar"
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
              <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
                Sushiman
              </h4>
              <p className="mb-5 text-xl lg:h-52">
                I built a modern, responsive HTML & CSS website with animations,
                covering CSS variables, file structuring, animations, and clean
                coding practices.
              </p>
              <div className="pt-3 flex justify-between border-t-[1px] border-red-300 dark:border-yellow-200">
                <div className="flex items-center">
                  <AiFillHtml5 className="text-3xl text-orange-500" />
                  <BiLogoCss3 className="text-3xl text-blue-500" />
                  <BiLogoJavascript className="text-3xl text-yellow-500" />
                </div>
                <div className="flex items-center">
                  <BsGithub className="text-2xl text-purple-500 mr-1" />
                  <HiExternalLink className="text-3xl" />
                </div>
              </div>
            </div>
          </article>

          {/* Rocket Fit */}
          <article className="md:max-w-[500px] lg:max-w-[400px] mb-7 dark:text-white" data-aos="fade-left">
            <div className="flex justify-center items-center pb-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
              <img
                src={rocketfit}
                alt="project colmar"
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
              <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
                Rocket Fit
              </h4>
              <p className="mb-5 text-xl lg:h-52">
                A collaborative MERN stack project for exercise tracking with
                CRUD operations.
              </p>
              <div className="pt-3 flex justify-between border-t-[1px] border-red-300 dark:border-yellow-200">
                <div className="flex items-center gap-1">
                  <BiLogoMongodb className="text-3xl text-emerald-600" />
                  <SiExpress className="text-3xl" />
                  <BiLogoReact className="text-3xl text-cyan-500" />
                  <BiLogoNodejs className="text-3xl text-lime-600" />
                  <SiTailwindcss className="text-2xl text-sky-500" />
                </div>
                <div className="flex items-center">
                  <BsGithub className="text-2xl text-purple-500 mr-1" />
                  <HiExternalLink className="text-3xl" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Section
      <section id="contact">
        <p>I'm Contact</p>
      </section> */}
    </div>
  );
};

export default App;
