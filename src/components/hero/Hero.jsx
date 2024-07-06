import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div id="page1">
      <h1>EAT. DRINK. PLAY.</h1>
      <h2>WELCOME TO THE GROUND CHAMPIONS!</h2>
      <p>
        Unleash your potential at Golf, where precision meets passion on every
        fairway and swing into perfection where every stroke becomes a
        masterpiece.
      </p>
      <div className="scroller">
        <div className="scroller-in">
          <h4>Toptracer Range</h4>
          <h4>Golf Lessons</h4>
          <h4>Adventure Golf</h4>
          <h4>Coffee Shop</h4>
          <h4>Leagues</h4>
        </div>
        <div className="scroller-in">
          <h4>Toptracer Range </h4>
          <h4>Golf Lessons </h4>
          <h4>Adventure Golf </h4>
          <h4>Coffee Shop </h4>
          <h4>Leagues </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
