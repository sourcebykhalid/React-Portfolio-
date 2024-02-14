import React, { useRef } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import "../../index.css";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div
      id="Navbar"
      className="n-wrapper fixed top-0 z-10 bg-gray-200 p-5 w-full text-slate-800"
    >
      <div className="n-left">
        <div className="n-name">
          devFolio<span>●</span>
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <nav className="n-list" ref={navRef}>
          <ul>
            <Link spy={true} smooth={true} to="Intro" activeClass="activeClass">
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
            <Link
              spy={true}
              smooth={true}
              to="Contact"
              activeClass="activeClass"
            >
              <button className="button n-button">Contact </button>
            </Link>
          </ul>

          <button onClick={showNavbar} className="nav-btn nav-close ">
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn fixed top-10 left-4">
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
