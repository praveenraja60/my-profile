import React from "react";
import "./Footerr.css";
import { themeContext } from "../Context";
import { useContext } from "react";

const Footerr: React.FC = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="footer"
      style={{ background: darkMode ? "rgb(26,26,26)" : "" }}
    >
      <p style={{ color: darkMode ? "white" : "" }}>
        &#169; Designed & built by Praveen,2023{" "}
      </p>
    </div>
  );
};

export default Footerr;
