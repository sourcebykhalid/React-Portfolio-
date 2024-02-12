import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Khalid</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              smooth={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li>Home</li>{" "}
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Services"
              activeClass="activeClass"
            >
              <li>Services</li>{" "}
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Projects"
              activeClass="activeClass"
            >
              <li>Projects</li>{" "}
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Portfolio"
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Testimonials"
              activeClass="activeClass"
            >
              <li>Testimonials</li>{" "}
            </Link>
          </ul>
        </div>
        <Link spy={true} smooth={true} to="Contact" activeClass="activeClass">
          <button className="button n-button">Contact </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
