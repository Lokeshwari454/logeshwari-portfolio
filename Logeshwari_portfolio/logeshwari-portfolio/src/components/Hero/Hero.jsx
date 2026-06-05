import React from 'react';
import darkProfile from '../../assets/dark-profile.png';
import lightProfile from '../../assets/light-profile.png';
import './Hero.css';

const Hero = ({ theme }) => {
  return (
    <section id="home" className={`hero-section hero-${theme}`}>
      {theme === 'dark' ? (
        /* Dark Mode: Replicating top section layout of WhatsApp Image 2026-06-04 at 4.11.05 PM.jpeg */
        <div className="hero-dark-wrapper">
          {/* Decorative digital node overlay built purely in CSS */}
          <div className="css-wireframe-grid"></div>
          
          <div className="hero-dark-content">
            <span className="hero-greeting">HELLO!</span>
            <h1 className="hero-heading-name">I Am <span>Logeshwari A</span></h1>
            <p className="hero-pitch">
              A Computer Applications undergraduate specializing in DevOps, Automation, and Modern Web technologies. 
              Eager to leverage robust programming skills and automated workflows to deliver high-performance applications.
            </p>
            <div className="hero-buttons">
              <a href="#experience" className="btn-primary">View Work</a>
              <a href="#contact" className="btn-secondary">Hire Me</a>
            </div>
          </div>
          
          <div className="hero-dark-media">
            <div className="image-frame-dark">
              <img src={darkProfile} alt="Logeshwari Ashok Kumar Profile Dark" />
            </div>
          </div>
        </div>
      ) : (
        /* Light Mode: Replicating bottom layout section of WhatsApp Image 2026-06-04 at 4.11.05 PM.jpeg */
        <div className="hero-light-wrapper">
          <div className="hero-light-media">
            <div className="image-frame-light">
              <img src={lightProfile} alt="Logeshwari Ashok Kumar Profile Light" />
            </div>
          </div>

          <div className="hero-light-content">
            <h2 className="light-sub-header">I Am Modern <span>Web Designer & Dev</span></h2>
            <p className="light-bio-text">
              Detail-oriented and analytical undergraduate. Demonstrates a strong theoretical and practical foundation in full-stack development, structured version control, and cloud computing principles.
            </p>
            
            <div className="light-profile-table">
              <div className="table-row"><span className="label">Name</span><span className="val">Logeshwari A</span></div>
              <div className="table-row"><span className="label">Location</span><span className="val">Coimbatore, Tamil Nadu, India</span></div>
              <div className="table-row"><span className="label">Email</span><span className="val">maixlogu@gmail.com</span></div>
              <div className="table-row"><span className="label">Phone Number</span><span className="val">+91 77086 81534</span></div>
            </div>

            <a href="#experience" className="btn-primary light-btn">Download CV</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;