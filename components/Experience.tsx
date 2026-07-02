import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="pt-[35px]">
      <h2 className="text-white font-semibold text-center text-6xl">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto max-w-[900px] px-4 ">
        {/* Experience 1: JasiQ Labs */}
        <div className="border-b border-[#2E2E2E] pb-10 mb-10 pt-5">
          <div className="md:flex md:flex-row md:justify-between items-start">
            <div className="flex items-center gap-3">
              <Image
                src={"/Logo.svg"}
                height={30}
                width={30}
                alt={"Nakul Kumar - JasiQ Labs"}
              />
              <div>
                <p className="text-white text-xl font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-purple-400 font-medium">
                  JasiQ Labs
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:pt-0 pt-3 font-medium">
              Dec 2025 - Present (1.5+ Years Exp)
            </p>
          </div>

          <ul className="text-gray-300 pt-5 list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Developed Talent Board Hiring Platform using React.js, Node.js, Express.js, MongoDB for complete hiring workflows.</li>
            <li>Built secure JWT Authentication system with admin and user dashboards for role-based access management.</li>
            <li>Implemented job posting, hiring workflow, candidate management features and AI-based resume scoring functionality.</li>
            <li>Integrated frontend with backend REST APIs for dashboard management, application tracking and real-time data handling.</li>
            <li>Managed deployment using Docker, AWS EC2, Nginx, Linux Server and automated CI/CD Pipelines.</li>
            <li>Worked on GitHub and Bitbucket workflows including pull requests, branching strategies and production code reviews.</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "AWS EC2", "Nginx", "CI/CD"].map((tech) => (
              <span key={tech} className="bg-[#222]/80 border border-[#2E2E2E] rounded-full text-white text-xs py-1.5 px-4 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience 2: Aiprus Software */}
        <div className="border-b border-[#2E2E2E] pb-10 mb-10">
          <div className="md:flex md:flex-row md:justify-between items-start">
            <div className="flex items-center gap-3">
              <Image
                src={"/Logo.svg"}
                height={30}
                width={30}
                alt={"Nakul Kumar - Aiprus Software"}
              />
              <div>
                <p className="text-white text-xl font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-purple-400 font-medium">
                  Aiprus Software Pvt. Ltd
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:pt-0 pt-3 font-medium">
              Jun 2025 - Nov 2025
            </p>
          </div>

          <ul className="text-gray-300 pt-5 list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Developed Skills Assessment Platform using React.js, Node.js, Express.js, MongoDB for online recruitment processes.</li>
            <li>Built assessment workflows with MCQ, descriptive and coding-based modules for candidate evaluation and performance analysis.</li>
            <li>Developed backend REST APIs with secure validation, database integration and optimized server-side application handling.</li>
            <li>Worked on deployment using Docker, AWS EC2, Nginx and Linux Server for production environments.</li>
            <li>Managed workflows using Bitbucket, automated CI/CD Pipelines and collaborative version control development practices.</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Docker", "AWS EC2", "Nginx", "Bitbucket", "CI/CD"].map((tech) => (
              <span key={tech} className="bg-[#222]/80 border border-[#2E2E2E] rounded-full text-white text-xs py-1.5 px-4 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience 3: Maestros Infotech */}
        <div className="pb-5">
          <div className="md:flex md:flex-row md:justify-between items-start">
            <div className="flex items-center gap-3">
              <Image
                src={"/Logo.svg"}
                height={30}
                width={30}
                alt={"Nakul Kumar - Maestros Infotech"}
              />
              <div>
                <p className="text-white text-xl font-semibold">
                  Frontend Developer Intern
                </p>
                <p className="text-purple-400 font-medium">
                  Maestros Infotech
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:pt-0 pt-3 font-medium">
              Dec 2024 - May 2025
            </p>
          </div>

          <ul className="text-gray-300 pt-5 list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Developed responsive frontend applications using React.js and modern JavaScript component-based architecture.</li>
            <li>Worked on reusable UI components, frontend API integration and responsive layouts for web application development.</li>
            <li>Improved debugging, frontend performance optimization and overall user experience across multiple responsive application modules.</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {["React.js", "JavaScript", "UI Components", "API Integration", "Performance Optimization"].map((tech) => (
              <span key={tech} className="bg-[#222]/80 border border-[#2E2E2E] rounded-full text-white text-xs py-1.5 px-4 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
