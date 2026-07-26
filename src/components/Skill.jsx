import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: "95%" },
        { name: "CSS", level: "90%" },
        { name: "JavaScript", level: "90%" },
        { name: "React", level: "85%" },
        { name: "Tailwind CSS", level: "90%" },
        { name: "Bootstrap", level: "30%" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "85%" },
        { name: "Express.js", level: "85%" },
        { name: "MongoDB", level: "50%" },
        { name: "MySQL", level: "40%" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: "25%" },
        { name: "GitHub", level: "70%" },
        { name: "VS Code", level: "95%" },
        { name: "Postman", level: "20%" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20  border-b-2 border-gray-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I Use
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            I specialize in building modern full stack applications using the
            MERN Stack along with responsive frontend technologies and powerful
            backend tools.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}</span>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-2">

                      <div
                        className="bg-cyan-400 h-2 rounded-full"
                        style={{ width: skill.level }}
                      ></div>

                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Technology Cards */}

        <div className="mt-20">

          <h3 className="text-center text-3xl font-bold mb-10">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Git",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <h4 className="text-lg font-semibold">{item}</h4>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}