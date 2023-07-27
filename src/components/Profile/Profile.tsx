import {  Col, Container, Row } from "react-bootstrap";
import Praveen3 from "../../assets/Praveen3.jpg";
import gmail from "../../assets/gmail.jpg";
import phone from "../../assets/mobile.jpg";
import linkedin from "../../assets/linked.jpg";
import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          className="d-flex justify-content-center justify-content-lg-start"
        >
          <div className="profile-column">
            <img
              src={Praveen3}
              alt="Profile Photo"
              className="profile-photo"
              style={{ width: "194px", marginLeft: "204px" }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="details-column">
            <h3 className="name">Praveen Rajkumar</h3>
            <span
              className="typing"
              style={{ fontWeight: "bold", color: "blue" }}
            >
              <Typewriter
                options={{
                  strings: ["FRONTEND DEVELOPER", "React JS & Angular"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <p>
              I am a front-end developer with over 2.5 years of hands-on
              experience in designing, developing, and implementing applications
              and solutions using various technologies and programming
              languages. I am currently seeking a challenging role where I can
              leverage my broad development experience and technical expertise.
            </p>
           
            <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={gmail}
          alt="gmail"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <p style={{fontWeight:"bold"}}>praveenraja60@gmail.com</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={phone}
          alt="phone"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <p style={{fontWeight:"bold"}}>9566502092</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={linkedin}
          alt="linkedin"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <a style={{fontWeight:"bold"}} href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/">Praveen Rajkumar</a>
      </div>
    </div>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
