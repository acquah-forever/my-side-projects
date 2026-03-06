import React from "react";
import Tech from "../assets/tech.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="absolute z-0 object-center">
        <img className="w-full h-full" src={Tech} alt="image" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="font-semibold text-3xl text-center">My Practice Projects</h1>
        <h2 className="font-medium">
          A showcase of the innovative tools, systems, and experiments I am currently building.
        </h2>
        <button className='cursor-pointer bg-sky-400 p-3 rounded'>View Projects</button>
      </div>

    </div>
  );
};

export default Hero;