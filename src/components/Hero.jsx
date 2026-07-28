import React from "react";
import { FiDownload } from "react-icons/fi";


function Hero() {
  return (
    <section id="home" className="bg-slate-950 min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 border-b-2 border-gray-500">

      {/* Information Section */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left">

        <h4 className="text-xl sm:text-2xl mb-2">
          Hello, I'm <span className="text-cyan-400">Sajjad</span>
        </h4>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          MERN Stack <br />
          Developer
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
          Passionate MERN Stack Developer creating responsive and modern web
          applications using React, Tailwind CSS, Node.js, Express and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

          <button className="px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300">
            <a href="#projects">View My Work</a>
          </button>

          <a
            href="Sajjad_MERN_Resume_Editable.docx" // public folder me resume rakhein download
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400 bg-transparent px-7 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            <FiDownload className="text-lg transition-transform duration-300 group-hover:translate-y-1" />
            <span>Download Resume</span>
          </a>


        </div>

      </div>

      {/*Image Section*/}
      <div className="w-full lg:w-1/2 flex justify-center">

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

          {/* Gradient Ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>

          {/* Image */}
          <img
            src="portfolio-image.jpeg"
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;