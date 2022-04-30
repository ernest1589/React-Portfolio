import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a4f2ba74-2ca9-4e4f-aef2-03f23acc2cfd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the Form below or send me an email -
            ernest.ramirez.1589@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-400 hover:border-red-400 px-4 py-3 my-8 mx-auto flex items-center">
          Let's do something Great!
        </button>
      </form>
    </div>
  );
};

export default Contact;
