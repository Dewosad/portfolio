"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const nav = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  const [active, setActive] = useState("Home");
  return (
    <nav className="bg-[#efe5f6] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          My Website
        </Link>
        <ul className="flex space-x-10">
          {nav.map((item) => (
            <li key={item.name}>
              <div
                className={`capitalize transition-colors duration-200 hover:text-purple-600 cursor-pointer ${
                  active === item.name
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
