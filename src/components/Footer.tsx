"use client";
import { Github, Linkedin, Mail } from "lucide-react";
// Facebook icon will use inline SVG

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
        <a href="https://www.facebook.com/binsAced" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-sky-400 text-slate-400 transition-colors">
          {/* Facebook icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z"/></svg>
        </a>
      </div>
    </footer>
  );
}
