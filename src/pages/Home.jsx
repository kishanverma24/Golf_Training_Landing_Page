import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Hero />
        <div id="page2">
          <About />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Home;
