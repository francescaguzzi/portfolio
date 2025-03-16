import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGithub, FaItchIo, FaGlobe } from 'react-icons/fa';

// Import immagini
import blinkeye from '../images/blinkeye.gif';

import trashbits3 from '../images/trashbits3.png';
import trashbits4 from '../images/trashbits4.png';
import trashbits2 from '../images/trashbits2.gif';

import handmancers1 from '../images/handmancers1.png';
import handmancers2 from '../images/handmancers2.gif';
import handmancers4 from '../images/handmancers4.png';
import handmancers3 from '../images/handmancers3.gif';
import handmancers5 from '../images/handmancers5.png';

import pond1 from '../images/pond1.png';
import pond2 from '../images/pond2.gif';

const projects = [
  {
    title: "In the blink of an eye",
    year: "2025",
    company: "University Project demo",
    description: "This prototype was developed for an university exam...",
    images: [blinkeye],
    github: "https://github.com/francescaguzzi/progettosistemidigitali"
  },
  {
    title: "Trashbits",
    year: "2024",
    company: "Solo Project",
    description: "A small multiplayer browser game where robots try to defeat a trash monster...",
    images: [trashbits3, trashbits4, trashbits2],
    github: "https://github.com/francescaguzzi/trashbits"
  },
  {
    title: "Handmancers",
    year: "2023",
    company: "Indici Opponibili Soc. Coop.",
    description: "During my university internship I contributed...",
    images: [handmancers1, handmancers2, handmancers4, handmancers3, handmancers5],
    website: "https://www.handmancers.com/"
  },
  {
    title: "Pond",
    year: "2023",
    company: "Solo Project",
    description: "This game was developed as a first approach to Unity...",
    images: [pond1, pond2],
    github: "https://github.com/francescaguzzi/pond",
    itch: "https://hydrangeax.itch.io/pond"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="mb-16 fade-in">
        <h2 className="text-4xl font-semibold mb-4">Projects</h2>

        <br/> 

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index}>


              <div className="mb-4">
                {project.images.length === 1 && (
                  <img src={project.images[0]} alt={`Project ${index + 1}`} className="rounded shadow w-full" />
                )}

                {project.images.length === 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.map((src, i) => (
                      <img key={i} src={src} alt={`Project ${index + 1} Screenshot ${i + 1}`} className="rounded shadow w-full" />
                    ))}
                  </div>
                )}

                {project.images.length === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <img src={project.images[0]} alt="Top left" className="rounded shadow w-full" />
                      <img src={project.images[1]} alt="Top right" className="rounded shadow w-full" />
                    </div>
                    <img src={project.images[2]} alt="Bottom" className="rounded shadow w-full md:col-span-2" />
                  </div>
                )}

                {project.images.length > 3 && (
                  
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    emulateTouch
                    transitionTime={600}
                    useKeyboardArrows
                    swipeable
                    dynamicHeight
                  >
                    {project.images.map((src, i) => (
                      <div key={i}>
                        <img
                          src={src}
                          alt={`Project ${index + 1} Screenshot ${i + 1}`}
                          className="rounded shadow w-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>

              <h3 className="text-2xl font-bold mt-4">{project.title} <span className="text-neutral-500 font-medium">({project.year})</span></h3>
              <p className="italic text-neutral-600">{project.company}</p>
              <p className="mt-2 text-neutral-700">{project.description}</p>
              <div className="flex gap-4 mt-2 flex-wrap text-neutral-700">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition">
                    <FaGithub size={18} /> GitHub
                  </a>
                )}
                {project.itch && (
                  <a href={project.itch} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition">
                    <FaItchIo size={18} /> Itch.io
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition">
                    <FaGlobe size={18} /> Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-12 border-t border-neutral-300" />
      </section>
  );
}