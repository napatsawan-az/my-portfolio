import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import {
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiSqlite,
} from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="pt-52 px-7 md:px-10">
      {/* About */}
      <div className="flex flex-col items-center">
        <h2
          className="font-bold text-4xl mb-7 dark:text-yellow-200"
          data-aos="flip-up"
        >
          - About -
        </h2>

        {/* Bio */}
        <div
          className="mb-28 p-8 md:max-w-[70%] bg-white bg-opacity-30 dark:bg-opacity-10 border-[1px] border-white dark:border-yellow-200 rounded-3xl dark:text-white"
          data-aos="fade-up"
        >
          <p className="mb-5">
            👋 <br /> Hi~ I'm Napatsawan, a former medical technology graduate
            turned web developer.
          </p>
          <p className="mb-5">
            💻 <br />I began my career as a proofreader, meticulously shaping
            written words. Now, I'm crafting web experiences as a frontend,
            backend, and full-stack developer.
          </p>
          <p className="mb-5">
            🎨 <br />
            Beyond code, I find joy in watercolor's fluid strokes, blending
            technology and creativity.
          </p>
        </div>
      </div>

      {/* Skill */}
      <div className="flex flex-col items-center">
        <h2
          className="font-bold text-4xl mb-7 dark:text-yellow-200"
          data-aos="flip-up"
        >
          - Skills -
        </h2>

        <div className="lg:flex">
          {/* Frontend */}
          <div className="mb-5 lg:mr-20 dark:text-white">
            <h3
              className="flex justify-center font-semibold mb-5 text-red-400 dark:text-white"
              data-aos="flip-up"
            >
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              <div
                className="flex flex-col items-center justify-center p-2 bg-yellow-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-yellow-500"
                data-aos="zoom-in"
              >
                <BiLogoJavascript className="text-7xl text-yellow-500" />
                <p className="text-xl">JavaScript</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg-cyan-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-cyan-500"
                data-aos="zoom-in"
              >
                <BiLogoReact className="text-7xl text-cyan-500" />
                <p>React</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg-orange-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-orange-500"
                data-aos="zoom-in"
              >
                <AiFillHtml5 className="text-7xl text-orange-500" />
                <p>HTML</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg-blue-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-blue-500"
                data-aos="zoom-in"
              >
                <BiLogoCss3 className="text-7xl text-blue-500" />
                <p>CSS</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg-purple-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-purple-500"
                data-aos="zoom-in"
              >
                <SiBootstrap className="text-7xl text-purple-500" />
                <p>Bootstrap</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg-sky-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-sky-500"
                data-aos="zoom-in"
              >
                <SiTailwindcss className="text-7xl text-sky-500" />
                <p>Tailwind</p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="mb-5 dark:text-white">
            <h3
              className="flex justify-center font-semibold mb-5 text-red-400 dark:text-white"
              data-aos="flip-up"
            >
              Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              <div
                className="flex flex-col items-center justify-center p-2  bg-lime-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-lime-600"
                data-aos="zoom-in"
              >
                <BiLogoNodejs className="text-7xl text-lime-600" />
                <p>Node.js</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2b bg-white bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-black dark:border-white"
                data-aos="zoom-in"
              >
                <SiExpress className="text-7xl" />
                <p>Express</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg bg-emerald-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-emerald-600"
                data-aos="zoom-in"
              >
                <BiLogoMongodb className="text-7xl text-emerald-600" />
                <p>MongoDB</p>
              </div>

              <div
                className="flex flex-col items-center justify-center p-2 bg bg-sky-300 bg-opacity-30 dark:bg-opacity-10 rounded-3xl border-[1px] border-sky-800 dark:border-sky-600"
                data-aos="zoom-in"
              >
                <SiSqlite className="text-7xl text-sky-800 dark:text-sky-600" />
                <p>SQLite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
