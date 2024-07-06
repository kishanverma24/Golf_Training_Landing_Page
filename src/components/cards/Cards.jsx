import React from "react";
import "./cards.css";
function Cards() {
  return (
    <div id="cards-container">
      <div
        className="cards"
        id="card1"
        style={{ backgroundImage: "url(./home/toptracer.webp)" }}
      >
        <div className="overlay">
          <h4>Toptracer Range </h4>
          <p>
            Toptracer Range revolutionizes golf practice with advanced ball
            tracking technology, providing instant shot feedback and interactive
            game modes. It enhances driving ranges by attracting golfers of all
            skill levels with a modern, engaging experience that improves
            performance and enjoyment.
          </p>
        </div>
      </div>
      <div
        className="cards"
        id="card2"
        style={{ backgroundImage: "url(./home/adventure.jpg)" }}
      >
        <div className="overlay">
          <h4>Adventure Golf</h4>
          <p>
            Golf Adventures: Discover New Courses, Unforgettable Challenges, and
            Spectacular Destinations with Golf. Elevate Your Game and Explore
            the World of Golf in Style.
          </p>
        </div>
      </div>
      <div
        className="cards"
        id="card3"
        style={{ backgroundImage: "url(./home/golflessons.webp)" }}
      >
        <div className="overlay">
          <h4>Golf Lessons</h4>
          <p>
            Explore New Courses, Master Unforgettable Challenges, and Learn with
            Expert Lessons from Golf. Elevate Your Game and Discover the Joy of
            Golfing in Exciting Destinations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
