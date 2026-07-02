import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education: React.FC<{}> = () => {
  return (
    <section id="education" className="pt-[35px]">
      <h2 className="text-white font-semibold text-center text-6xl">
        EDUCATION
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto max-w-[900px] px-4 pt-5">
        <div className="bg-[#111]/80 backdrop-blur-md border border-[#2E2E2E] rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
          <div className="flex gap-4 items-start">
            <div className="p-4 bg-gradient-to-r from-purple-700 to-orange-500 rounded-2xl text-white">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-2xl">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-gray-300 text-lg mt-1">
                Sagar Institute of Research and Technology, Bhopal
              </p>
              <div className="flex items-center gap-2 mt-3 text-gray-400">
                <Award size={18} className="text-orange-400" />
                <span>CGPA: 8.01</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium bg-[#222]/80 px-4 py-2 border border-[#2E2E2E] rounded-full">
            <Calendar size={16} className="text-purple-400" />
            <span>2020 – 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
