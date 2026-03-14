import React from "react";
import nodejs from "../assets/node-js.png";
import css from "../assets/css-3.png";
import html from "../assets/html.png";
import JavaScript from "../assets/java-script.png";
import mongodb from "../assets/mongodb-icon-1.svg";
import react from "../assets/react.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-600" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-600" },
    { id: 3, src: JavaScript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-cyan-400" },
    { id: 5, src: nodejs, title: "Node JS", style: "shadow-green-500" },
    { id: 6, src: mongodb, title: "MongoDB", style: "shadow-green-700" },
  ];

  return (
    <div
      name="experience"
      className="bg-linear-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;