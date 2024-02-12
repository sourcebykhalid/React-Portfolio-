import React from "react";
import "./Projects.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="projects"
      id="Projects"
      style={{ color: darkMode ? "orange" : "" }}
    >
      <div className="circle">20+</div>
      <span>Completed</span>
      <span>Projects</span>
    </div>
  );
}

export default Projects;
