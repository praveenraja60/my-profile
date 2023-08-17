import React, { useState } from "react";
import "./Experience.css";
import rmaImage from "../../assets/skill-icons/RMa.jpg";
import bambeeqImage from "../../assets/skill-icons/bambeeq.jpg";
import srjinfognanaImage from "../../assets/skill-icons/infognana.jpg";
import aaludraImage from "../../assets/skill-icons/aaludra-logo-btext.png";

interface ExperienceData {
  id: number;
  position: string;
  date: string;
  companyName: string;
  description: string;
  image: string; // Add the image URL property
}

const experiences: ExperienceData[] = [
  {
    id: 1,
    position: "Web Application Developer",
    date: "Jan 2023 – May 2023",
    companyName: "INTUITIVE STACK SOLUTIONS PVT LTD • Hyderabad",
    description: `Resolving Problems that impact design of current or developing products.
    Create Controllers, Modules and Service as per customer requirements.
    Implemented new functionality for the frontend web-based applications.
    Meeting with the development team to define the scope and scale of software Projects.`,
    image: rmaImage,
  },
  {
    id: 2,
    position: "Associate Software Engineer",
    date: "Mar 2022 – Nov 2022",
    companyName: "BambeeQ Solutions Private Limited • Chennai",
    description: `Provide an end-to-end service, and can be involved in projects that involve databases and building user-facing websites.
    Resolving Problems that impact design of current or developing products.
    Create components and modules as per customer requirements.
    Implemented new functionality for the frontend web-based applications.
    Meeting with the development team to define the scope and scale of software Projects.
    Projects Handled: HMS (Hospital Management System), TMS (Task Management System), HRA`,
    image: bambeeqImage,
  },
  {
    id: 3,
    position: "Project Delegate",
    date: "May 2021 - Dec 2021",
    companyName: "SRJ Infognana Systems Private Limited • Coimbatore",
    description: `Work closely with design, product management, and development teams to create elegant, usable, responsive, and interactive client webpage.
    Collaborate with back-end developers and web designers to improve usability.
    Create components/modules as per customer requirements.
    Maintain, update, and improve existing company websites.
    Implemented modern functionalities for the frontend web-based applications.
    Support immensely on optimal flow for rapidly changing design and technology.
    Projects Handled: Tab Service, Eassy Cart`,
    image: srjinfognanaImage,
  },
  {
    id: 4,
    position: "Junior Developer",
    date: "Sep 2020 - Apr 2021",
    companyName: "Aaludra Technologies • Coimbatore",
    description: `Played a key role in the development, improvement, and operation of web-based software.
    Perform code review, bug fix, QA, and problem solve.
    Check/verify API functionality using POSTMAN, SWAGGER.
    Provide technical support to the client facing issues.
    Form alignment should get done as per user needs.
    Project Handled: SFC (Sakthi Fertilizers Corporations)`,
    image: aaludraImage,
  },
];

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceData | null>(null);

  const handleExperienceClick = (experience: ExperienceData) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="experience" id="proj">
      <h2>
        My <span>Work</span> Experience
      </h2>
      <div className="experience-cards">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="experience-card"
            onClick={() => handleExperienceClick(experience)}
          >
            <img src={experience.image} alt={experience.companyName} />
            <h3>{experience.companyName}</h3>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedExperience.image}
              alt={selectedExperience.companyName}
            />
            <h3>{selectedExperience.position}</h3>
            <p className="date">{selectedExperience.date}</p>
            <p style={{ fontWeight: "bold" }} className="companyname">
              {selectedExperience.companyName}
            </p>
            <div className="description-scroll">
              <ul className="description-list">
                {selectedExperience.description
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
