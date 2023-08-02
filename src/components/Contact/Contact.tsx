import React, { useRef, useState } from "react";
import "./ContactCopy.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com"; // Importing the correct package
import { themeContext } from "../../Context"; // Fixed the import
import { useContext } from "react";
import contact from "../../assets/skill-icons/services5.jpg";

const Contact: React.FC = () => {
  // Added the React.FC type for functional components

  const theme = useContext(themeContext); // Corrected the context name
  const darkMode = theme.state.darkMode;

  const form = useRef<HTMLFormElement>(null);
  const [done, setdone] = useState<boolean>(false);

  console.log("done", done);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_66g6847",
          "template_2x7favu",
          form.current,
          "LFqOnmUjXf21CaeaC"
        )
        .then(
          (result: { text: any }) => {
            console.log(result.text);
            setdone(true);
          },
          (error: { text: any }) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      className="contact-comp"
      style={{ background: darkMode ? "rgb(36,36,36)" : "" }}
    >
      <h2 style={{ color: darkMode ? "white" : "" }}>
        Contact <span>De</span>tails
      </h2>
      <div className="contact" id="contact">
        <div className="contact-content">
          <div className="mini-icons">
            <div style={{ backgroundColor: "blue" }} title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="side-btn" />
              </a>
            </div>
            <div style={{ backgroundColor: "crimson" }} title="G-mail">
              <a
                href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/overlay/contact-info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="side-btn" />
              </a>
            </div>
          </div>
          <div className="contact-buttons">
            <a href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/">
              <button className="linkedin-btn">
                <span>
                  <AiFillLinkedin className="bbb" />
                </span>
                Linked In
              </button>
            </a>
            <a href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/overlay/contact-info/">
              <button className="gmail-btn">
                <span>
                  <AiOutlineMail className="bbb" />
                </span>
                Gmail
              </button>
            </a>
          </div>
          <div className="contact-left">
            <form ref={form} onSubmit={sendEmail} className="form" action="">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Name"
              />
              <input
                className="input"
                type="email"
                name="useremail"
                placeholder="Email Address"
              />
              <textarea
                className="input"
                name="message"
                id=""
                cols={20}
                rows={7}
                placeholder="Message . . ."
              ></textarea>
              <input
                type="submit"
                className="button submitbutton"
                value="Send Message"
              />
              {done && (
                <div
                  className="thank-msg"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  Thanks for contacting me!{" "}
                  <button onClick={() => setdone(false)} className="thank-btn">
                    x
                  </button>
                </div>
              )}
            </form>
          </div>
          <div className="contact-right">
            <img
              src={contact}
              alt=""
              style={{ borderRadius: darkMode ? "7px" : "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
