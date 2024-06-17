import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "./Homepage.css";
import myPro from "../../assets/skill-icons/Praveen3-removebg-preview.png";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="homepage" id="home">
      <div className="homepage-content">
        <div className="homepage-content-left">
          <div style={{ color: darkMode ? "white" : "" }}>Hy! I Am</div>
          <div className="praveen">Praveen Rajkumar</div>
          <p>
            <b>3 Years Experience</b>
          </p>
          <div className="typewriter-container">
            <b>
              <Typewriter
                options={{
                  strings: ["FRONTEND DEVELOPER", "React JS Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </b>
          </div>
          <a href="#contact">
            <button className="button homepage-hireme-btn">Hire Me</button>
          </a>
        </div>

        <div className="homepage-content-right">
          <div className="background-circle">
            <img className="mypic" src={myPro} alt="Praveen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
