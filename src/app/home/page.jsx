import React from "react";
import {
  ChevronDown,
  Github,
  Globe,
  Linkedin,
  LinkedIn,
  Mail,
  Twitter,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="bg-[#efe5f6] flex flex-col items-center justify-center pt-20 ">
      <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"></div>
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Diwas{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Adhikari
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Frontend Developer
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg cursor-pointer"
          // onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>
        <button
          variant="outline"
          size="lg"
          className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg border-1 transition-colors duration-200 cursor-pointer"
          // onClick={() => scrollToSection("contact")}
        >
          Get In Touch
        </button>
      </div>
      <div className="flex justify-center space-x-6 pt-10">
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
        >
          <Mail size={24} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
        >
          <Globe size={24} />
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
};

export default Landing;
