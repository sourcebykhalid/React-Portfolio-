import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, I Am </span>
          <span>Khalid Shakeel</span>
          <span>
            Frontend Developer | Expertise in HTML, CSS, JS, React.js | Bridging
            Design and Functionality <br />
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
            {" "}
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">I am the right side</div>
    </div>
  );
}

export default Intro;
