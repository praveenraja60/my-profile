import React from "react";
import "./header.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import {resumePDF} from "../../assets/resume.pdf"; // Import the PDF file

const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleDownloadResume = () => {
    // window.open(resumePDF); // Open the PDF file in a new tab for download
  };

  return (
    <div className="header" style={{ background: darkMode ? "black" : "" }}>
      <div className="header-left">
        <div className="header-name" style={{ color: darkMode ? "white" : "" }}>
          Praveen Rajkumar
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="button header-resume-btn"
            onClick={handleDownloadResume}
          >
            Resume
          </button>
        </div>
      </div>

      <div className="header-right">
        <ul>
          <li>
            <a href="#home" style={{ color: darkMode ? "white" : "" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#proj" style={{ color: darkMode ? "white" : "" }}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" style={{ color: darkMode ? "white" : "" }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: darkMode ? "white" : "" }}>
              Contact
            </a>
          </li>
        </ul>
        <a href="#proj">
          <button className="button header-portfolio-btn">Portfolio</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
