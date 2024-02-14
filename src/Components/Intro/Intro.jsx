/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/removed.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Intro" className="intro shadow-xl shadow-slate-900 text-slate-800">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "black" : "" }}>Hi, I Am </span>
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
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={{ transition }}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={{ transition }}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Software" txt2="Developer" />
        </motion.div>
        <motion.div
          className="floating-div"
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={{ transition }}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={Thumbup} txt1={"Best Design"} txt2={"Award"} />
        </motion.div>
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
