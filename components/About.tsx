import React from "react";
import { Monitor, Server, Database, Cloud, Wrench, Brain } from "lucide-react";

const About: React.FC<{}> = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="text-purple-400" size={20} />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="text-orange-400" size={20} />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" size={20} />,
      skills: ["MongoDB", "SQL", "PostgreSQL"],
    },
    {
      title: "Deployment",
      icon: <Cloud className="text-orange-400" size={20} />,
      skills: ["Docker", "CI/CD", "AWS EC2", "Nginx", "Linux Server"],
    },
    {
      title: "AI & GenAI",
      icon: <Brain className="text-purple-400" size={20} />,
      skills: ["Generative AI", "LLMs", "Agentic AI", "AI Tools"],
    },
    {
      title: "Tools",
      icon: <Wrench className="text-orange-400" size={20} />,
      skills: ["Git", "GitHub", "Bitbucket", "Postman", "FileZilla", "PuTTY"],
    },
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px] px-4">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center leading-relaxed">
          Hi, I&#39;m Nakul Kumar, a Full Stack Developer with 1.5+ years of experience building scalable Web and Mobile Applications.
          I specialize in building production-ready applications with secure backend architecture, scalable REST APIs, clean UI, and optimized performance.
        </p>

        {/* Skills Grid Anchor */}
        <div id="skills" className="w-full flex flex-col items-center mt-12 scroll-mt-20">
          <h3 className="text-white font-semibold text-3xl mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-left">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-[#111]/80 backdrop-blur-md border border-[#2E2E2E] rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 shadow-md flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 border-b border-[#2E2E2E]/60 pb-2">
                  {category.icon}
                  <h4 className="text-white font-semibold text-lg">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#1E1E1E] border border-[#2E2E2E] text-gray-300 text-xs py-1 px-2.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
