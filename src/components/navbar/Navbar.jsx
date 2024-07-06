import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBlur = document.querySelector("#cursor-blur");
    document.addEventListener("mousemove", function (event) {
      cursor.style.left = event.x + "px";
      cursor.style.top = event.y + "px";
      cursorBlur.style.left = event.x - 150 + "px";
      cursorBlur.style.top = event.y - 150 + "px";
    });
  }, []);

  return (
    <>
      <div id="nav">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <img src={"./LOGO.jpg"} alt="" />
        </Link>
        <h4>
          <Link style={{ textDecoration: "none" }} to={"/toptracer"}>
            Toptracer Range
          </Link>
        </h4>
        <h4>
          <Link style={{ textDecoration: "none" }} to={"/lessons"}>
            Golf Lessons
          </Link>
        </h4>
        <h4>
          <Link style={{ textDecoration: "none" }} to={"/adventure"}>
            Adventure Golf
          </Link>
        </h4>
        <h4>
          <Link style={{ textDecoration: "none" }} to={"/coffee"}>
            Coffee Shop
          </Link>
        </h4>
        <h4>
          <Link style={{ textDecoration: "none" }} to={"/leagues"}>
            Leagues
          </Link>
        </h4>
      </div>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
      <video loop autoPlay muted={true}>
        <source src={"../video main.mp4"} type="video/mp4" />
      </video>
    </>
  );
}

export default Navbar;
