import React, { useEffect } from "react";
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
        <img src={"./LOGO.jpg"} alt="" />
        <h4>Toptracer Range</h4>
        <h4>Golf Lessons</h4>
        <h4>Adventure Golf</h4>
        <h4>Coffee Shop</h4>
        <h4>Leagues</h4>
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
