
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/HeroImage.jpg";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen pt-20 w-full bg-linear-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h3>

          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            culpa est expedita rerum eaque deserunt voluptatum nulla dignissimos
            quae voluptas!
          </p>

          <div className="flex justify-center">
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-linear-to-b from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="ml-2 group-hover:rotate-90 duration-300">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/6 md:w-3/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
