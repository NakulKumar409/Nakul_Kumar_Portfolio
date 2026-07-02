import React from "react";
import { ExternalLink, Briefcase } from "lucide-react";

const Projects: React.FC<{}> = () => {
  const projectList = [
    {
      title: "Talent Board Hiring Platform",
      status: "Client Delivered",
      description: "A complete recruitment and hiring management platform with separate admin and user dashboards for managing hiring workflows and candidate applications.",
      points: [
        "Built secure JWT Authentication system including login, signup, protected routes, and role-based authorization.",
        "Implemented job posting, resume submission, candidate application tracking, shortlisting, and hiring status management.",
        "Integrated frontend and backend using secure REST APIs for real-time dashboard management and application handling.",
        "Developed responsive and user-friendly UI using React.js with optimized component structure and API integration."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      link: "https://github.com/NakulKumar409"
    },
    {
      title: "Skills Assessment Platform",
      status: "Client Delivered",
      description: "An online assessment and hiring evaluation platform for managing candidate tests, coding assessments, and automated performance reporting.",
      points: [
        "Implemented MCQ, descriptive, and coding-based assessment workflows with dynamic question management and result processing.",
        "Built secure backend REST APIs for candidate assessments, performance tracking, and report management using Node.js and Express.js.",
        "Integrated frontend dashboards with backend services for real-time assessment handling and performance visualization.",
        "Worked on deployment workflows using Docker, Linux Server, AWS EC2, Nginx, and CI/CD Pipelines."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "AWS EC2", "Nginx", "CI/CD"],
      link: "https://github.com/NakulKumar409"
    },
    {
      title: "Music Streaming Platform",
      status: "Client Delivered",
      description: "A React Native music streaming mobile app with Artist & User modules and web-based management portals.",
      points: [
        "Developed mobile app with audio streaming, playlists, authentication, and profile management using React Native (Expo).",
        "Built Artist Web Portal for onboarding, song upload, album management, digital agreement signing, and revenue sharing.",
        "Developed Admin Portal for artist approval, commission management, revenue sharing, agreements, and song moderation.",
        "Designed secure REST APIs using Node.js, Express.js, Prisma ORM, and PostgreSQL with Cloudinary integration."
      ],
      techStack: ["React Native", "React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Cloudinary"],
      link: "https://github.com/NakulKumar409"
    }
  ];

  return (
    <section id="projects" className="pt-[35px]">
      <h2 className="text-white font-semibold text-center text-6xl">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>

      <div className="container mx-auto max-w-[1200px] px-4 pt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div key={project.title} className="bg-[#111]/80 backdrop-blur-md border border-[#2E2E2E] rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between h-full shadow-lg hover:shadow-purple-500/5">
            <div>
              <div className="flex justify-between items-start gap-2 mb-3">
                <div>
                  <span className="text-[10px] text-green-400 font-semibold tracking-wider uppercase border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                  <h3 className="text-white font-semibold text-2xl mt-2">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-orange-400 transition mt-1"
                  title="Live Demo / GitHub"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-purple-300 text-sm font-medium mb-4 flex items-center gap-1.5 mt-2">
                <Briefcase size={14} className="flex-shrink-0" />
                <span>{project.description}</span>
              </p>

              <ul className="text-gray-400 text-xs space-y-2 list-disc list-inside leading-relaxed mb-6">
                {project.points.map((point, idx) => (
                  <li key={idx} className="align-top">{point}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#2E2E2E]/50">
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-[#1F1F1F] text-gray-300 text-[10px] py-1 px-2.5 rounded-full border border-[#2E2E2E]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
