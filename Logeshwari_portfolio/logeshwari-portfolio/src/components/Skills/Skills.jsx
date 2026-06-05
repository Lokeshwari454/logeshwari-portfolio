import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { category: "Programming Languages", items: ["Java", "Python", "C", "JavaScript (ES6+)"] },
    { category: "Web & Frontend", items: ["HTML5", "CSS3", "React JS", "Flask Framework"] },
    { category: "DevOps & Cloud", items: ["Linux Command Line", "Shell Scripting", "Git", "GitHub", "Cloud Computing Ecosystems"] },
    { category: "Methodologies & Tools", items: ["Agile Development", "Scrum Framework", "Software Engineering Principles", "Data Science"] }
  ];

  return (
    <section id="skills" className="lazy-reveal">
      <div className="skills-layout-container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skills-card glass-panel">
              <h3 className="skills-category-title">{group.category}</h3>
              <div className="skills-tag-cloud">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;