import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    { title: "Frontend Development", provider: "Coursera" },
    { title: "Developing in AI Applications with Python and Flask", provider: "IBM" },
    { title: "Introduction to Cloud Computing", provider: "IBM" },
    { title: "Git and GitHub Professional Certificate", provider: "IBM" },
    { title: "Introduction to DevOps", provider: "Coursera" },
    { title: "Introduction to Agile Development and Scrum", provider: "IBM" }
  ];

  return (
    <section id="certifications" className="lazy-reveal">
      <div className="certs-container">
        <h2 className="section-title">Credentials & Verification</h2>
        <div className="certs-grid">
          {certs.map((c, idx) => (
            <div key={idx} className="certs-card glass-panel">
              <h3 className="cert-title">{c.title}</h3>
              <span className="cert-provider">{c.provider}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;