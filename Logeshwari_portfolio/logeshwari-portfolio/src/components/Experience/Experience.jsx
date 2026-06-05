import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Data Analytics Virtual Experience",
      company: "Deloitte (Via Forage) virtual simulation",
      date: "May 2025",
      bullets: [
        "Engineered an interactive data dashboard using Tableau to visualize crucial corporate metrics and optimize forensic technology asset tracking.",
        "Utilized advanced Excel data models to clean, transform, and classify large datasets, deriving objective business conclusions.",
        "Authored precise analysis documentation to effectively report actionable, data-driven technical insights to corporate stakeholders."
      ]
    },
    {
      role: "Cybersecurity Analyst Virtual Experience",
      company: "Tata Consultancy Services (Via Forage) virtual simulation",
      date: "Dec 2024",
      bullets: [
        "Collaborated within a simulated Cybersecurity Consulting ecosystem to evaluate enterprise-wide identity boundaries.",
        "Acquired hands-on expertise mapping Identity and Access Management (IAM) principles to complex enterprise structures, aligning security blueprints with core business objectives.",
        "Delivered comprehensive risk documentation and technical presentations to cleanly convey security compliance states to leadership."
      ]
    }
  ];

  return (
    <section id="experience" className="lazy-reveal">
      <div className="exp-container">
        <h2 className="section-title">Operational History</h2>
        <div className="exp-timeline-wrapper">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-milestone-block glass-panel">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
                <span className="exp-date-badge">{exp.date}</span>
              </div>
              <ul className="exp-bullet-list">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;