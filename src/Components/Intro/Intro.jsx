/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatinfDiv from "../FloatingDiv/FloatinfDiv";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I Am </span>
          <span>Khalid Shakeel</span> <br />
          <span>
            Frontend Software Engineer | Expertise in HTML, CSS, JS, React.js |
            Bridging Design and Functionality. <br />
            Aspiring Frontend Engineer poised to make a positive impact in the
            digital realm. Eager to leverage technical expertise to drive
            innovation and enhance online experiences.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/sourcebykhalid" target="blank">
            {" "}
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/khalid-shakeel-15a35a153/"
            target="blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={Glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatinfDiv image={Crown} txt1="Software" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatinfDiv image={Thumbup} txt1={"Best Design"} txt2={"Award"} />
        </div>
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            backgroundColor: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
