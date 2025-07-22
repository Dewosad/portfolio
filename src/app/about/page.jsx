import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 2 years of
              experience creating digital solutions that make a difference. I
              specialize in modern web technologies and have a keen eye for
              design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <p className="text-gray-600">
                  React, TypeScript, Tailwind CSS, Next JS
                </p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <p className="text-gray-600">
                  Node.js, Python, PostgreSQL, MongoDB
                </p>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
            <div className="absolute inset-4 bg-white rounded-xl shadow-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
