import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      title: "Mern Stack Intern",
      institute: "CodRexa",
      year: "29-05-2026 to 10-06-2026",
      score: ["React", "Node.Js", "Express.js", "MongoDB"],
      description:
        "Completed a MERN Stack internship where I gained hands-on experience in developing responsive web applications, working with modern technologies, and collaborating on real-world projects.",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Jagannath University Jaipur",
      year: "2024 - Present",
      score: "8.04 CGPA Current",
      description:
        "Learning MERN Stack, React, Node.js, Express, MongoDB and building real-world full stack projects.",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Higher Secondary (12th)",
      institute: "M.K College Bhutahi",
      year: "2021-23",
      score: "82.2%",
      description: "Completed Higher Secondary with Commerce(I.Com)",
      icon: <School size={24} />,
    },
    {
      title: "Secondary (10th)",
      institute: "Jageshwar High School Bhutahi",
      year: "2021",
      score: "79.8%",
      description:
        "Built a strong academic foundation and developed curiosity for computers.",
      icon: <School size={24} />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6 md:px-12 lg:px-20 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every step of my education has helped shape my journey toward
            becoming a Full Stack MERN Developer.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-cyan-500 rounded-full"
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Animated Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 250,
                }}
                className="absolute left-5 md:left-1/2 md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_25px_#06b6d4]"
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <div className="ml-20 md:ml-0 md:w-5/12">
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm mb-4">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-cyan-400 mt-2">{item.institute}</p>

                  <p className="mt-4 text-gray-300">{item.description}</p>

                  {Array.isArray(item.score) ? (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.score.map((value) => (
                        <span
                          key={value}
                          className="px-3 py-2 rounded-lg bg-slate-800 border border-cyan-500/30 text-cyan-300 text-sm"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 inline-block px-4 py-2 rounded-lg bg-slate-800 text-cyan-400 font-semibold">
                      {item.score}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
