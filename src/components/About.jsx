const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 leading-relaxed">
          Hello! My name is{" "}
          <span className="font-bold gradient-text">
            Kirtan Kumar
          </span>.
          I am currently pursuing my B.Tech from{" "}
          <span className="text-yellow-400 font-semibold">
            Techno Main Salt Lake
          </span>{" "}
          located in{" "}
          <span className="text-pink-400 font-semibold">
            Kolkata, West Bengal
          </span>.
          I am currently in my{" "}
          <span className="text-green-400 font-semibold">
            3rd Year (6th Semester)
          </span>{" "}
          with a CGPA of{" "}
          <span className="text-orange-400 font-semibold">
            7.54
          </span>.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          I am a{" "}
          <span className="font-bold gradient-text">
            Full Stack Developer
          </span>{" "}
          passionate about building modern and scalable web applications. I
          enjoy working with technologies like{" "}
          <span className="text-blue-400 font-semibold">
            HTML, CSS, JavaScript, and MERN Stack
          </span>.
        </p>
      </div>
    </div>
  );
};

export default About;