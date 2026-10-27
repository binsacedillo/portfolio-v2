"use client";

import Image from "next/image";
import { useState } from "react";

const technologies = [
  { name: "TypeScript", logo: "/typescript-logo.svg" },
  { name: "React", logo: "/react-logo.svg" },
  { name: "Next.js", logo: "/nextdotjs-logo.svg" },
  { name: "Python", logo: "/python-logo.svg" },
  { name: "PostgreSQL", logo: "/postgresql-logo.svg" },
  { name: "Tailwind CSS", logo: "/tailwindcss-logo.svg" },
];

function TechnologyList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className={`technology-list${duplicate ? " technology-list-copy" : ""}`} aria-hidden={duplicate ? true : undefined}>
      {technologies.map(({ name, logo }) => (
        <li className="technology-item" key={name}>
          <Image src={logo} alt="" width={24} height={24} className="technology-logo" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TechnologyStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="technology-strip border-y border-[var(--line)]" aria-labelledby="technology-title">
      <div className="journal-container flex items-center justify-between gap-4 py-5">
        <h2 id="technology-title" className="journal-label">Tools I work with</h2>
        <button
          type="button"
          className="technology-toggle"
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>
      <div className="technology-viewport">
        <div className={`technology-track${paused ? " is-paused" : ""}`}>
          <TechnologyList />
          <TechnologyList duplicate />
          <TechnologyList duplicate />
          <TechnologyList duplicate />
        </div>
      </div>
    </section>
  );
}
