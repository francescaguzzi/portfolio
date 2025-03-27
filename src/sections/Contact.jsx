import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="mb-16 fade-in">
      
      <p className="text-neutral-700 text-xl mb-4">
        Feel free to reach out or connect with me through any of the platforms below:
      </p>
      <div className="flex gap-6 flex-wrap text-neutral-700 text-lg">
        <a
          href="mailto:francescaguzzi9@gmail.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <FaEnvelope size={20} /> francescaguzzi9@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/francesca-guzzi-774776254/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://github.com/francescaguzzi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a
          href="https://hydrangeax.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <FaItchIo size={20} /> Itch.io
        </a>
      </div>

      <hr className="mt-8 border-t border-neutral-300" />
    </section>
  );
}
