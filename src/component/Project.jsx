import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiBootstrap, SiTailwindcss } from "react-icons/si";
import colmar from "../assets/project-colmar.svg";
import sushi from "../assets/project-sushi.png";
import rocketfit from "../assets/project-rocketfit.png";
import book from "../assets/project-book.svg";

const Project = () => {
  return (
    <div
      id="project"
      className="pt-52 px-7 pb-10 md:px-10 min-h-screen flex flex-col items-center"
    >
      <h2
        className="font-bold text-4xl mb-7 dark:text-yellow-200"
        data-aos="flip-up"
      >
        - Project -
      </h2>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:max-w-[80%] lg:max-w-[90%] xl:max-w-[75%]">
        {/* Rocket Fit */}
        <article className="mb-8 dark:text-white" data-aos="zoom-in">
          <div className="relative flex justify-center items-center pb-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
            <img
              src={rocketfit}
              alt="project colmar"
              className="w-[150px] h-[150px] p-2 object-contain"
            />
            <p className="absolute top-3 right-3 text-sm p-1 bg-white bg-opacity-70 rounded-lg dark:bg-opacity-10">
              2023
            </p>
          </div>
          <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
            <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
              Rocket Fit
            </h4>
            <p className="mb-5 text-xl md:h-40">
              A collaborative MERN stack project for exercise tracking with CRUD
              operations.
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

        {/* Bookstore */}
        <article className="mb-8 dark:text-white" data-aos="zoom-in">
          <div className="relative flex justify-center items-center pt-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
            <img
              src={book}
              alt="project bookstore"
              className="w-[150px] h-[150px] p-4 object-contain"
            />
            <p className="absolute top-3 right-3 text-sm p-1 bg-white bg-opacity-70 rounded-lg dark:bg-opacity-10">
              2023
            </p>
          </div>
          <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
            <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
              Bookstore CRUD
            </h4>
            <p className="mb-5 text-xl md:h-40">
            I created a full-featured web app for managing a bookstore, using the MERN stack with CRUD operations.
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

        {/* Sushiman */}
        <article className="mb-8 dark:text-white" data-aos="zoom-in">
          <div className="relative flex justify-center items-center pt-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
            <img
              src={sushi}
              alt="project colmar"
              className="w-[150px] h-[150px] object-contain"
            />
            <p className="absolute top-3 right-3 text-sm p-1 bg-white bg-opacity-70 rounded-lg dark:bg-opacity-10">
              2023
            </p>
          </div>
          <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
            <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
              Sushiman
            </h4>
            <p className="mb-5 text-xl md:h-40">
              I created a modern, responsive website using HTML and CSS. It
              features animations, CSS variables, organized files, and clean
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

        {/* Colmar Academy */}
        <article className="mb-8 dark:text-white" data-aos="zoom-in">
          <div className="relative flex justify-center items-center pt-3 bg-red-300 bg-opacity-30 dark:bg-yellow-300 dark:bg-opacity-10 rounded-t-3xl border-red-300 dark:border-yellow-200 border-t-[1px] border-x-[1px]">
            <img
              src={colmar}
              alt="project colmar"
              className="w-[150px] h-[150px] object-contain"
            />
            <p className="absolute top-3 right-3 text-sm p-1 bg-white bg-opacity-70 rounded-lg dark:bg-opacity-10">
              2023
            </p>
          </div>
          <div className="p-6 border-b-[1px] border-x-[1px] border-red-300 dark:border-yellow-200 rounded-b-3xl bg-white bg-opacity-30 dark:bg-opacity-10">
            <h4 className="font-bold mb-2 text-red-400 dark:text-yellow-200">
              Colmar Academy
            </h4>
            <p className="mb-5 text-xl md:h-40">
              I built a responsive landing page, focusing on informed design
              choices in color and typography while learning HTML and CSS.
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
      </div>
    </div>
  );
};

export default Project;
