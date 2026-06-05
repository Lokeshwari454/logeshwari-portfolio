import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leadershipActivities = [
    "Appointed by the head tutor to manage, monitor, and report daily student attendance metrics across a 2-month cycle.",
    "Designed and maintained a localized tracking database in Excel, optimizing administrative audit times and eliminating data gaps.",
    "Demonstrated proactive communication and organizational skills while interfacing seamlessly between college faculty and student groups."
  ];

  return (
    <section id="leadership" className="lazy-reveal">
      <div className="lead-container">
        <h2 className="section-title">Leadership Activities</h2>
        <div className="lead-panel glass-panel">
          <h3 className="lead-role-title">Student Administrator / Faculty Liaison</h3>
          <ul className="lead-list">
            {leadershipActivities.map((act, idx) => (
              <li key={idx} className="lead-item">{act}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;