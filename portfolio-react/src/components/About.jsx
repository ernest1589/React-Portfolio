import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hey! This is Ernest, Please take a look around</p>
          </div>
          <div>
            <p>
              I am great at knowing what customers want, due to the different
              skills I have developed since I started working. My biggest focus
              it's on back end technologies to improve every single pert of the
              business information and make sure it is reliable and easy to work
              with. Want someone who can trust that will always have the
              greatest attitude?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
