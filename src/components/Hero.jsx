import React from "react";
import Tech from "../assets/tech.jpg";

const Hero = () => {
  return (
    <div>
        <img src={Tech} alt="image" />
      <h1 className="font-semibold text-3xl">My Practice Projects</h1>
      <h2 className="font-medium">
        A showcase of the innovative tools, systems, and experiments I am currently building.
      </h2>

      <button>View Projects</button>
      <h1>Current Projects</h1>
    </div>
  );
};

export default Hero;