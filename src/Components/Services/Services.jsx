import React from "react";
import "./Services.css";
import Resume from "../../img/resume.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
function Services() {
  return (
    <div className="services">
      {/* Left Side*/}
      <div className="awesome">
        <span>My Awesome </span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur libero cupiditate minima <br />
          architecto fugi <br />
        </span>
        <button className="button s-button">
          <a
            href={Resume}
            download
            target="blank"
            style={{ textDecoration: "none", color: "rgb(202, 201, 201)" }}
          >
            Download CV
          </a>
        </button>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div
          className="blur s-blur1"
          style={{ background: "rgb(193, 245, 255)" }}
        ></div>
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"ReactJS, Javascript, HTML5, CSS3"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Components UI, Bootstrap, Tailwind CSS"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
