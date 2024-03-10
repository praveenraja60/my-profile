import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Praveen3 from "../../assets/Praveen3.jpg";
import gmail from "../../assets/gmail.jpg";
import phone from "../../assets/mobile.jpg";
import linkedin from "../../assets/linked.jpg";
import Typewriter from "typewriter-effect";
import "./Profile.css"; // Import the CSS file for custom styling

const Profile = () => {
  return (
    <Container fluid className="profile-container">
      <Row className="justify-content-center align-items-center">
        <Col lg={4} className="text-center">
          <img src={Praveen3} alt="Profile Photo" className="profile-photo" />
        </Col>
        <Col lg={8}>
          <div className="details-column">
            <h1 className="name">Praveen Rajkumar</h1>
            <p className="designation">
              <Typewriter
                options={{
                  strings: ["FRONTEND DEVELOPER", "React JS & Angular"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="bio">
              I am a front-end developer with over 3 years of hands-on
              experience in designing, developing, and implementing applications
              and solutions using various technologies and programming
              languages. I am currently seeking a challenging role where I can
              leverage my broad development experience and technical expertise.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <img src={gmail} alt="gmail" className="contact-icon" />
                <p className="contact-text">praveenraja60@gmail.com</p>
              </div>
              <div className="contact-item">
                <img src={phone} alt="phone" className="contact-icon" />
                <p className="contact-text">9566502092</p>
              </div>
              <div className="contact-item">
                <img src={linkedin} alt="linkedin" className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/"
                  className="contact-text"
                >
                  Praveen Rajkumar
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
