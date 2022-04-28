import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi my Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ernesto Ramirez
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a currently student of a full-stack developer program, where I am
          learning everything that is required to be one, using different
          technologies. I will specialize in back end technologies. My favorite
          part of being a developer it is that the learning never ends.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400">
            View Work
            <span className="grou-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
