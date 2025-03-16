import React from 'react';

const Experience = ({ title, place, yearRange, description, bullets }) => (
  <div className="fade-in">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-neutral-600 italic">{place} — {yearRange}</p>
    {description && <p className="text-neutral-700 mb-2">{description}</p>}
    {bullets && (
      <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    <hr className="border-t border-neutral-300 mb-6" />
  </div>
);

export default function Experiences() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-4xl font-semibold mb-4 fade-in">Experience</h2>

      <Experience
        title="MSc in Computer Engineering"
        place="University of Bologna"
        yearRange="Sep 2024 – Present"
        description="Graduate program focusing on advanced topics in computer engineering, including embedded systems, computer vision, and real-time applications."
      />

      <Experience
        title="BSc in Computer Engineering"
        place="University of Bologna"
        yearRange="Sep 2020 – Oct 2024"
        description="Undergraduate studies with an emphasis on software development, computer architecture, and game-oriented applications. Final thesis on performance evaluation of real-time multiplayer games using WebTransport and WebSocket protocols."
      />

      <Experience
        title="Internship in Game Development"
        place="Indici Opponibili Soc. Coop."
        yearRange="Mar 2023 – Jun 2023"
        bullets={[
          "Collaborated with a team of developers to design and develop games using Unity.",
          "Contributed to the creation of game mechanics, user interfaces, and audiovisual elements.",
          "Gained experience in project management, software development, and team collaboration."
        ]}
      />
    </section>
  );
}
