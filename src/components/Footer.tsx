"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-sky-400/25 bg-slate-950/95 px-6 py-6 shadow-[0_-1px_12px_rgba(56,189,248,0.12)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-300">
          © 2026 Vince Gio Acedillo. All Systems Nominal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] md:justify-end">
          <a
            href="https://www.linkedin.com/in/vince-gio-acedillo-449688318/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="COM 1 frequency for LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 font-mono text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            COM 1: 121.5
            <Linkedin size={14} aria-hidden="true" />
          </a>

          <a
            href="https://github.com/binsacedillo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="COM 2 frequency for GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-3 py-1.5 font-mono text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            COM 2: 122.8
            <Github size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
