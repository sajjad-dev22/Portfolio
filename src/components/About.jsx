import React from "react";
import Reveal from "./Reveal";
export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20 border-b-2 border-gray-500"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}

          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[470px] lg:w-[420px] lg:h-[560px]">
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl border-4 border-slate-800 shadow-2xl">
                <img
                  src="/portfolio-image.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              MERN Stack <br />
              <span className="text-cyan-400">Developer</span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              I'm a passionate Full Stack Developer specializing in the MERN
              Stack. I love building modern, scalable and responsive web
              applications with clean UI and optimized backend architecture. My
              goal is to create fast, secure and user-friendly digital
              experiences that solve real-world problems.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-cyan-500 bg-slate-900 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10 md:mx-0 ">
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 ">
                <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
                <p className="text-gray-400 text-sm mt-1">Projects</p>
              </div>

              <div className="bg-slate-900 rounded-xl  p-4 border border-slate-800 ">
                <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
                <p className="text-gray-400 text-sm mt-1">Internship</p>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 ">
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400 text-sm mt-1">Dedication</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <button className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold shadow-lg">
                <a href="#projects"> View Projects</a>
              </button>

              <button className="px-7 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
