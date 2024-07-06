import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./golflessons.css";

const Golflessons = () => {
  return (
    <>
      <Navbar />
      <div className="golfLessonsContainer">
        <div
          style={{
            width: "80vw",
            backgroundColor: "white",
            marginTop: "150px",
            marginBottom:"50px"
          }}    
        >
          <h1
            style={{ color: "black", marginTop: "10px", textAlign: "center" }}
          >
            Golf Lessons
          </h1>
          <p style={{ color: "black", padding: "30px" }}>
            Elevate your golf game with personalized golf lessons tailored to
            your skill level and goals. Our expert instructors provide
            comprehensive coaching to improve your swing mechanics, refine your
            short game, and enhance your overall performance on the course.
          </p>{" "}
          <br />{" "}
          <p style={{ color: "black", padding: "30px" }}>
            Whether you're a beginner learning the basics or an experienced
            golfer looking to fine-tune specific aspects of your game, our
            flexible lesson plans cater to your individual needs. Through
            hands-on instruction and constructive feedback, we help you develop
            a solid foundation and advance your skills with confidence.
          </p>{" "}
          <br />{" "}
          <p style={{ color: "black", padding: "30px" }}>
            Our golf lessons focus on technique, strategy, and course
            management, empowering you to play smarter and achieve consistent
            results. Experience personalized attention in a supportive
            environment that encourages growth and improvement, ensuring you
            reach your full potential as a golfer.
          </p>{" "}
          <br />{" "}
          <p style={{ color: "black", padding: "30px" }}>
            Join us for an enriching golf instruction journey that combines
            expertise with passion for the game. Whether you're preparing for
            tournaments or simply aiming to enjoy golf more, our golf lessons
            offer valuable insights and skills that stay with you for a lifetime
            of memorable rounds on the course.
          </p>{" "}
          <br />{" "}
          <p style={{ color: "black", padding: "30px" }}>
            Embrace the opportunity to refine your technique, elevate your
            performance, and enjoy the game of golf like never before. Enroll in
            our golf lessons today and embark on a path to mastery with
            dedicated guidance and support from our skilled instructors.
          </p>
        </div>
      </div>
    </>
  );
};

export default Golflessons;
