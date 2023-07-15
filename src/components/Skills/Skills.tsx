import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="skills-list">
            <li>
              <span className="skill-name">HTML</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">CSS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Bootstrap</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">JavaScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Angular</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="skills-list">
            <li>
              <span className="skill-name">ReactJS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Node</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">NestJS</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">TypeScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">C#</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '20%' }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
