import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGithub, FaItchIo, FaGlobe } from 'react-icons/fa';

const projects = [

  {
    title: "In the blink of an eye",
    year: "2025",
    company: "University Project demo",
    description: "This prototype was developed for an university exam, focusing on the development of an alternative and more inclusive input method for games using CLAHE (Contrast Limited Adaptive Histogram Equalization) and CUDA in order to make the tool functional even in poor lighting contexts. The prototype and the tool are written in Python, Pygame and CUDA.",
    images: ["src/images/blinkeye.gif"],
    github: "https://github.com/francescaguzzi/progettosistemidigitali"
  },

  {
    title: "Trashbits",
    year : "2024",
    company: "Solo Project",
    description: "A small multiplayer browser game where robots try to defeat a trash monster. Built in Javascript, Node.js and Socket.io, this prototype was necessary for my bachelor's thesis to observe and compare the performances of the new WebTransport protocol with the traditional WebSocket one.",
    images: ["src/images/trashbits3.png", "src/images/trashbits4.png", "src/images/trashbits2.gif"],
    github: "https://github.com/francescaguzzi/trashbits"
  },

  {
    title: "Handmancers",
    year: "2023",
    company: "Indici Opponibili Soc. Coop.",
    description: "During my university internship I contributed in the development of Handmancers on minor features, with a specific focus on analytics, privacy treatment and player's feedback. I contributed to the creation of a web-based community platform for game feedback, which involved developing the platform's architecture, designing its interface, and implementing user registration and feedback mechanisms.",
    images: ["src/images/handmancers1.png", "src/images/handmancers2.gif", "src/images/handmancers4.png", "src/images/handmancers3.gif", "src/images/handmancers5.png"],
    website: "https://www.handmancers.com/"
  },

  {
    title: "Pond",
    year: "2023",
    company: "Solo Project",
    description: "This game was developed as a first approach to Unity development during my university internship. I had to develop the classic Pong game, but I wanted to give some kind of personal touch to it so I took advantage of the similarity between the words 'pong' and 'pond', resulting in two koi carps playing with a pebble in a lily pond.",
    images: ["src/images/pond1.png", "src/images/pond2.gif"],
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