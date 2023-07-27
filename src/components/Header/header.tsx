// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <h1>Praveen Rajkumar</h1>
//       <div>
//         <li>Phone: 956-650-2092</li>
//         <li>Email: praveenraja60@gmail.com</li>
//         <li>LinkedIn: <a href="https://www.linkedin.com/in/praveen-rajkumar-59163416b/">Praveen Rajkumar</a></li>
//         <li>Address: 57/6 Bryant Nagar, First Street, Thoothukudi, India</li>
//       </div>
//     </header>
//   );
// };

// export defadivt Header;

import React, { useState } from 'react';
import './header.css';
import Profile from '../Profile/Profile';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Credentials from '../Credentials/Credentials';
import Awards from '../Awards/Awards';

const Header = () => {

  const [activeComponent, setActiveComponent] = useState('profile');

  const handleNavClick = (componentName:any) => {
    setActiveComponent(componentName);
  }
  return (

    <><header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <a className="navbar-brand" href="/">
                Praveen Rajkumar
              </a>
            </div>
            <div className="col-lg-8" style={{ marginTop: "-16px" }}>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav">
                <a className="nav-link btn btn-light" onClick={() => handleNavClick('header')} href="#header">
  Home
</a>

<a className="nav-link btn btn-light" onClick={() => handleNavClick('skills')} href="#skills">
  Skills
</a>
<a className="nav-link btn btn-light" onClick={() => handleNavClick('education')} href="#education">
  Education
</a>
<a className="nav-link btn btn-light" onClick={() => handleNavClick('experience')} href="#experience">
  Experience
</a>

<a className="nav-link btn btn-light" onClick={() => handleNavClick('credentials')} href="#credentials">
  Credentials
</a>
<a className="nav-link btn btn-light" onClick={() => handleNavClick('awards')} href="#awards">
  Awards
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
      {/* Always display the Profile component */}
      <Profile />
 {/* Render the components conditionally based on activeComponent */}

      {activeComponent === 'skills' && <Skills />}
      {activeComponent === 'experience' && <Experience />}
      {activeComponent === 'education' && <Education />}
      {activeComponent === 'credentials' && <Credentials />}
      {activeComponent === 'awards' && <Awards />}
      </>
  );
};

export default Header;
