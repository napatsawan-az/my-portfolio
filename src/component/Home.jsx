import placeholderLight from "../assets/placeholder-light.png";
import placeholderDark from "../assets/placeholder-dark.png";

const Home = ({ theme }) => {
  const imageSrc = theme === "light" ? placeholderLight : placeholderDark;

  return (
    <div
      id="home"
      className="pt-52 px-7 md:px-16 flex flex-col items-center lg:flex-row lg:justify-center lg:items-center"
    >
      {/* Content */}
      <div className="dark:text-white mb-16 lg:mr-8 lg:mb-0" data-aos="fade-up">
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
        <button className="mt-6 px-5 py-1 text-xl font-semibold text-red-400 bg-white hover:text-white hover:bg-red-400 dark:text-yellow-200 dark:hover:text-neutral-800 dark:hover:bg-yellow-200  bg-opacity-30 rounded-full border-[1px] border-red-400 dark:border-yellow-200">
          Contact Me
        </button>
      </div>

      {/* Picture */}
      <div className="max-w-[500px] max-h-[500px]" data-aos="fade-up">
        <img
          src={imageSrc}
          alt="Image Home"
          className="rounded-3xl object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
