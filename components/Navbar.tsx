"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full h-[65px] bg-[#111]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-[#2E2E2E]/30 px-6 md:px-12">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <a
          title="Nakul Kumar Logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="h-auto w-auto flex flex-row items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition"
        >
          <Code2 className="text-purple-500" size={24} />
          <span className="tracking-wider bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Nakul.Kumar</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-row items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white font-medium transition cursor-pointer text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="z-[1] bg-black border border-[#2E2E2E] hover:bg-[#2E2E2E] rounded-full text-white py-2 px-6 text-sm font-medium transition active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-[#111]/95 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white text-2xl font-semibold tracking-wider transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="bg-gradient-to-r from-purple-700 to-orange-500 rounded-full text-white text-lg font-semibold py-3 px-8 shadow-lg active:scale-95 transition mt-4"
          >
            Hire Me
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
