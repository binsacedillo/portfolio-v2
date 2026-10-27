"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
];

function SectionLinks({ className, active, onNavigate, id, hidden }: { className: string; active: string | null; onNavigate: (id: string) => void; id?: string; hidden?: boolean }) {
  return (
    <nav id={id} className={className} aria-label="Page sections" hidden={hidden}>
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

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
          <button
            ref={menuButtonRef}
            className={`mobile-menu-trigger${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-section-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-line hamburger-line-top" aria-hidden="true" />
            <span className="hamburger-line hamburger-line-middle" aria-hidden="true" />
            <span className="hamburger-line hamburger-line-bottom" aria-hidden="true" />
          </button>
        </div>
        <SectionLinks
          className="mobile-section-menu"
          active={active}
          onNavigate={(id) => {
            setActive(id);
            setMenuOpen(false);
          }}
          id="mobile-section-menu"
          hidden={!menuOpen}
        />
      </header>
    </>
  );
}
