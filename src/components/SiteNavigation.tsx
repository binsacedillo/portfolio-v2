"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function SectionLinks({ className, active, onNavigate }: { className: string; active: string | null; onNavigate: (id: string) => void }) {
  return (
    <nav className={className} aria-label="Page sections">
      {links.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => onNavigate(id)}>
          {label}
        </a>
      ))}
    </nav>
  );
}

export default function SiteNavigation() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateNavigation = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${value})`;

      const threshold = Math.min(180, window.innerHeight * 0.35);
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let current: string | null = atPageEnd ? "contact" : null;
      if (!atPageEnd) {
        for (const { id } of links) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= threshold) current = id;
        }
      }
      setActive((previous) => previous === current ? previous : current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="page-progress" aria-hidden="true">
        <div className="page-progress-fill" ref={progressRef} />
      </div>
      <header className="journal-header">
        <div className="journal-container flex items-center justify-between gap-4 py-4">
          <a className="journal-wordmark" href="#top" aria-label="Vince Acedillo, back to top">
            VA<span className="text-[var(--accent)]">.</span>
          </a>
          <SectionLinks className="desktop-section-nav" active={active} onNavigate={setActive} />
        </div>
      </header>
      <SectionLinks className="mobile-section-dock" active={active} onNavigate={setActive} />
    </>
  );
}
