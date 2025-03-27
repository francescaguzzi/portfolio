import React, { useState, useEffect } from 'react';

import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experiences from './sections/Experiences.jsx';
import Contact from './sections/Contact.jsx';

import profileImg from "./images/profile.jpg"


const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 bg-white text-black font-sans text-xl">
      
      <nav className="fixed top-0 left-0 right-0 backdrop-blur bg-white/80 z-50 border-b border-neutral-300 py-4 px-4 flex justify-center gap-6 text-lg">
        <a href="#about" className={`transition ${activeSection === 'about' ? 'text-black font-semibold border-b-2 border-black pb-1' : 'text-neutral-500 hover:text-black'}`}>About</a>
        <a href="#contact" className={`transition ${activeSection === 'contact' ? 'text-black font-semibold border-b-2 border-black pb-1' : 'text-neutral-500 hover:text-black'}`}>Contact</a>
        <a href="#projects" className={`transition ${activeSection === 'projects' ? 'text-black font-semibold border-b-2 border-black pb-1' : 'text-neutral-500 hover:text-black'}`}>Projects</a>
        <a href="#experience" className={`transition ${activeSection === 'experience' ? 'text-black font-semibold border-b-2 border-black pb-1' : 'text-neutral-500 hover:text-black'}`}>Experience</a>
      </nav>

      <header className="mb-16 text-center fade-in">
        <img src={profileImg} alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 object-cover" />
        <h1 className="text-4xl font-bold mb-4">Francesca Guzzi</h1>
        <p className="text-2xl text-neutral-600">Game developer & Computer Engineering student</p>
      </header>

      <About />

      <Contact />

      <Projects />

      <Experiences />


      <footer className="text-center text-sm text-neutral-500 py-8 fade-in">
      © {new Date().getFullYear()} Francesca Guzzi
      </footer>


    </div>

  );
};

export default App;