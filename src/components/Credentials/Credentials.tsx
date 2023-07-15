import React from 'react';
import "./Credentials.css";

const Credentials = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Professional Credentials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Certified by DELL Technologies as an EMC Academic Associate under Cloud Infrastructure and Services</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Awarded by NPTEL Online Certification for completing the Mobile Computing Course and Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
