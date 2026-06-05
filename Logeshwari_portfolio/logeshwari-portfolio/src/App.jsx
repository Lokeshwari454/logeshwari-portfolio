import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Summary from './components/Summary/Summary';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Leadership from './components/Leadership/Leadership';
import Certifications from './components/Certifications/Certifications';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [theme, setTheme] = useState('dark');

  useScrollReveal(theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      <Navbar theme={theme} onToggleTheme={handleThemeToggle} />
      <Hero theme={theme} />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Leadership />
      <Certifications />
    </div>
  );
}

export default App;