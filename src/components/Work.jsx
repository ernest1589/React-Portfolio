import React from "react";
import PerfectMeal from "../assets/Login-Form.png";
import NxtMovie from "../assets/nxt-movie.png";
import ReadmeGenerator from "../assets/Readme-Generator.png";
import TeamProfileGenerator from "../assets/Team-Profile-Generator.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#D7F9F1] bg-[#618B4A]">
      <div className="max-w-[1000px] m-auto p-4 flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#D7F9F1] border-[#54c5e5]">
            Work
          </p>
          <p className="py-6">
            Here are some examples of the Projects I have worked
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${PerfectMeal})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project - Perfect Meal
              </span>
              <div className="pt-8 text-center">
                <a href="https://thawing-depths-19417.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Abimael1996/Perfect_Meal">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${NxtMovie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project - Nxt Movie
              </span>
              <div className="pt-8 text-center">
                <a href="https://isaacgalvan10.github.io/nxt-movie/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/isaacgalvan10/nxt-movie">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReadmeGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project - Readme Generator
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Download & Install
                  </button>
                </a>
                <a href="https://github.com/ernest1589/Readme-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TeamProfileGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project - Team Profile Generator
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Download & Install
                  </button>
                </a>
                <a href="https://github.com/ernest1589/Team-Profile-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
