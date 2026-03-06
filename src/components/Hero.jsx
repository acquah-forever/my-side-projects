import React from "react";
import Tech from "../assets/tech.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full h-180">
        <div className="absolute z-10 bg-black/30 inset-0"></div>
        <img className="w-full h-full object-cover object-center" src={Tech} alt="image" />
      </div>
      <div className='text-white p-5 space-y-7 absolute z-20 flex flex-col justify-center items-center'>
        <h1 className="font-semibold text-5xl text-center">My Practice Projects</h1>
        <h2 className="font-medium text-2xl">
          A showcase of the innovative tools, systems, and experiments I am currently building.
        </h2>
        <button className='cursor-pointer bg-sky-400 p-3 rounded'>View Projects</button>
      </div>

    </div>
  );
};

export default Hero;