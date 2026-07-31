import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "NovaCart",
      image: "/NovaCart.jpeg",
      description:
        "A modern MERN Stack e-commerce website with authentication, cart, search and responsive UI.",
      tech: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/sajjad-dev22/NovaCart",
      live: "https://novacart-8ksd.onrender.com",
    },
    {
      title: "Portfolio Website",
      image: "/Portfolio.jpeg",
      description:
        "Personal portfolio showcasing my projects, skills and experience with modern responsive design.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/sajjad-dev22/Portfolio",
      live: "https://your-live-demo.com",
    },
    {
      title: "Snake Game",
      image: "/SnakeGame-image.jpeg",
      description: "Snake Game Using Html Css & JS..its a simple Game.",
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/yourusername/weather",
      live: "https://your-live-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20 border-b-2 border-gray-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Here are some of the projects I've built using modern web
            technologies. Every project focuses on performance, responsive
            design and clean user experience.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition duration-300 shadow-xl"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 text-sm rounded-full border border-cyan-500 text-cyan-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-cyan-500 px-5 py-3 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 px-5 py-3 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
