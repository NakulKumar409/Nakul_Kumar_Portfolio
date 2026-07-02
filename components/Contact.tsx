"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact: React.FC<{}> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending email (construct mailto link for direct sending as backup or display success message)
    setTimeout(() => {
      setStatus("success");
      const mailtoUrl = `mailto:nakulkumar7319@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="pt-[35px] pb-16">
      <h2 className="text-white font-semibold text-center text-6xl">
        CONTACT ME
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        GET IN TOUCH
      </p>

      <div className="container mx-auto max-w-[1000px] px-4 pt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Side */}
        <div className="flex flex-col gap-6 justify-center">
          <h3 className="text-white font-semibold text-3xl mb-2">Let&#39;s build something great!</h3>
          <p className="text-gray-300 text-base leading-relaxed">
            I am available for full-time roles, freelance opportunities, or collaboration on projects. Reach out via the form or through the details below.
          </p>

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-[#222] border border-[#2E2E2E] rounded-xl text-purple-400">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Email</p>
                <a href="mailto:nakulkumar7319@gmail.com" className="hover:text-purple-400 transition">
                  nakulkumar7319@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-[#222] border border-[#2E2E2E] rounded-xl text-orange-400">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Phone</p>
                <a href="tel:+919065015409" className="hover:text-orange-400 transition">
                  +91 90650 15409
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-[#222] border border-[#2E2E2E] rounded-xl text-purple-400">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Location</p>
                <span>Bhopal, India</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/NakulKumar409"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl text-white transition-all flex items-center justify-center"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nakul-kumar-727b65233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black hover:bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl text-white transition-all flex items-center justify-center"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-[#111]/80 backdrop-blur-md border border-[#2E2E2E] rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-300 text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Nakul Kumar"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-gray-300 text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration Inquiry"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white rounded-xl py-3 px-4 focus:outline-none focus:border-purple-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="z-[1] mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-orange-500 hover:opacity-90 active:scale-95 transition-all text-white font-semibold py-3.5 rounded-xl border-none cursor-pointer"
            >
              <Send size={18} />
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
            </button>
            
            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-2 font-medium">
                Message draft opened in your mail app successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
