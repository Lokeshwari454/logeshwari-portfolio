import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="lazy-reveal">
      <div className="edu-layout-container">
        <h2 className="section-title">Education</h2>
        <div className="edu-dual-grid">
          
          <div className="edu-card glass-panel">
            <span className="edu-duration">2024 - 2027</span>
            <h3 className="edu-degree">Bachelor of Computer Applications (BCA)</h3>
            <h4 className="edu-institute">Rathinam College of Arts and Science</h4>
            <p className="edu-spec">Specialization in DevOps and Automation</p>
          </div>

          <div className="edu-card glass-panel">
            <span className="edu-duration">2022 & 2024</span>
            <h3 className="edu-degree">HSC & SSLC Certification</h3>
            <h4 className="edu-institute">St. Joseph's Matriculation Higher Secondary School</h4>
            <div className="edu-score-badge"> Score: 70% Matrix Standardized</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;