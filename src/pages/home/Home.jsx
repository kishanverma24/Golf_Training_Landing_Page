import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About.jsx";
import Cards from "../../components/cards/Cards.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./home.css";
function Home() {
  return (
    <>
      <div className="homeContainer">
        <Navbar />
        <div id="main">
          <Hero />
          <div id="page2">
            <About />
            <Cards />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
