import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import { CustomCursor, BackgroundParticles } from './components/LayoutEffects';
import { Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.DARK;
    }
    return Theme.LIGHT;
  });

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className="min-h-screen transition-colors duration-500 relative">
      <CustomCursor />
      <BackgroundParticles />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;