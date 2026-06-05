import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <nav className="nav-container">
      <div className="nav-glass-wrap glass-panel">
        <div className="nav-logo">
          LOGESHWARI<span>A</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#summary">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
        </div>
        <button className="theme-toggle-btn" onClick={onToggleTheme}>
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;