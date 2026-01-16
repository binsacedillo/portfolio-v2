"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between px-6 mt-12">
      <span className="text-slate-400 text-sm">© {new Date().getFullYear()} Vince Gio Acedillo. All rights reserved.</span>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="mailto:beansgioacedillo@gmail.com" aria-label="Email" className="hover:text-sky-400 text-slate-400 transition-colors">
          <Mail size={20} />
        </a>
        <a href="https://github.com/binsacedillo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-sky-400 text-slate-400 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/vince-gio-acedillo-449688318/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-sky-400 text-slate-400 transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
