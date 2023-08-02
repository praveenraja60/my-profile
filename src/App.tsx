import React, { useContext } from "react";
import "./App.css";

import { themeContext } from "./Context";
import Header from "./components/Header/header";
import Homepage from "./components/homepage/Homepage";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footerr from "./footer/Footerr";
import Experience from "./components/Experience/Experience";

function App(): JSX.Element {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="app"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Header />
      <div className="sections">
        <Homepage />
        <Experience />
        <Skills />
        <Contact />
        <Footerr />
      </div>
    </div>
  );
}

export default App;
