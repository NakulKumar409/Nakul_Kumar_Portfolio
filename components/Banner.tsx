"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Nakul Kumar"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Nakul Kumar!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            Full Stack &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              React Native
            </span>{" "}
            Developer
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px] mx-auto">
          Full Stack Developer & React Native Developer with 1.5+ years of experience building scalable Web and Mobile applications with secure backend architecture, clean UI, and optimized performance.
        </p>

        <div className="text-md flex flex-wrap gap-4 justify-center mt-5">
          <button
            onClick={() => window.open("mailto:nakulkumar7319@gmail.com")}
            className=" z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-6 border-[0.1px] border-white hover:border-transparent transition-all "
          >
            Contact Me
          </button>
          <button
            onClick={() => window.open("https://github.com/NakulKumar409", "_blank")}
            className=" z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-6 border-[0.1px] border-white hover:border-transparent transition-all "
          >
            GitHub
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/nakul-kumar-727b65233/", "_blank")}
            className=" z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-6 border-[0.1px] border-white hover:border-transparent transition-all "
          >
            LinkedIn
          </button>
          <button
            onClick={() => window.open("mailto:nakulkumar7319@gmail.com?subject=Resume Request")}
            className=" z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-6 border-[0.1px] border-white hover:border-transparent transition-all "
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
