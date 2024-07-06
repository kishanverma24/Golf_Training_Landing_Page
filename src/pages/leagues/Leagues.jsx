import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./leagues.css";

const Leagues = () => {
  return (
    <>
      <Navbar />
      <div className="coffeeContainer">
        <div
          style={{
            width: "80vw",
            backgroundColor: "white",
            marginTop: "150px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{ color: "black", marginTop: "10px", textAlign: "center" }}
          >
            {" "}
            Leagues
          </h1>

          <p style={{ color: "black", padding: "30px" }}>
            Welcome to{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>
              Golf Leagues
            </span>
            , where every tournament tees off a season of friendly competition
            and skillful play. Join our community of golf enthusiasts and
            experience the thrill of league play in picturesque settings.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              League Structure:{" "}
            </span>{" "}
            Explore our diverse league structure designed for golfers of all
            skill levels. Whether you're a seasoned player or new to the game,
            there's a league format that suits your game and schedule.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Team Dynamics:{" "}
            </span>{" "}
            Embrace the camaraderie and team spirit in our Golf Leagues. Teams
            compete together, strategize on the greens, and celebrate victories
            both on and off the course, fostering lasting friendships.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Competitive Edge:{" "}
            </span>{" "}
            Test your skills and sportsmanship in competitive matches that
            challenge and inspire. Golf Leagues provide a platform to hone your
            game, improve under pressure, and achieve personal milestones.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              League Events and Awards:{" "}
            </span>{" "}
            Enjoy league-exclusive events and award ceremonies that elevate your
            golfing experience. From season kick-offs to championship rounds,
            each event is designed to celebrate achievements and camaraderie
            among our golfing community.
          </p>

          <p style={{ color: "black", padding: "30px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Joining Golf Leagues:{" "}
            </span>{" "}
            Ready to tee up for an exciting season of golf? Join us at our Golf
            Leagues and immerse yourself in the joy of competitive play,
            community bonding, and the beauty of the game.
          </p>
        </div>
      </div>
    </>
  );
};

export default Leagues;
