import React from 'react';
import "./Education.css";
const Education = () => {
  return (
    <div className="container">
         <h2>Education</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Master of Computer Applications (MCA)</h3>
          <p>Jul 2017 - May 2019</p>
          <p className="college">PSG College of Arts and Science • Coimbatore, India</p>
        </div>
        <div className="col-md-6">
          <h3>Bachelor of Computer Science (B.Sc.)</h3>
          <p>Aug 2014 - Apr 2017</p>
          <p className="college">Kamaraj College • Thoothukudi, India</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
