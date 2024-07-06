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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            impedit voluptatum delectus mollitia asperiores corporis ab
            repellendus dicta, amet aperiam?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            impedit voluptatum delectus mollitia asperiores corporis ab
            repellendus dicta, amet aperiam?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            impedit voluptatum delectus mollitia asperiores corporis ab
            repellendus dicta, amet aperiam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
