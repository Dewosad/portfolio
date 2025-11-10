import React from "react";
import About from "./about/page";
import Landing from "./home/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
