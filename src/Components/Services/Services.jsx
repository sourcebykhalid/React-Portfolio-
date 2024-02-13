import React from "react";
import "./Services.css";
import Resume from "../../img/resume.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Services() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* Left Side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
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
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={{ transition }}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </motion.div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"ReactJS, Javascript, HTML5, CSS3"}
          />
        </div>
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "11rem" }}
          transition={{ transition }}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={" Bootstrap, Tailwind CSS, Framer,etc"}
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
