import React from 'react';
import "./Awards.css";

const Awards = () => {
  return (
    <div className="certificate-container">
      <div className="row">
        <div className="col-md-12">
       
          <h2>Awards and Honours</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="certificate">
            <div className="certificate-header">
              Certificate of Appreciation   <p className="date">2021</p>
            </div>
            <div className="certificate-content">
              Honoured by Aaludra Technologies for diligence
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="certificate">
            <div className="certificate-header">
              Service Certificate 2014 - 2016
            </div>
            <div className="certificate-content">
              Completed satisfactorily two years of service in the National Service Scheme (NSS)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
