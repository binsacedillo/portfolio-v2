"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import JapaneseMorphingTitle from "./JapaneseMorphingTitle";

const TECH_STACK = [
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 180 180" className="w-4 h-4" aria-hidden="true">
                <mask id="mask0_next" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_next)">
                    <circle cx="90" cy="90" r="90" fill="white" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="black" />
                    <path d="M115 54H127V125.97H115V54Z" fill="black" />
                </g>
            </svg>
        )
    },
    {
        name: "React",
        icon: (
            <svg viewBox="-10.5 -9.45 21 18.9" className="w-4 h-4 text-[#61DAFB] fill-current">
                <circle cx="0" cy="0" r="2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5" />
                    <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                    <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 128 128" className="w-4 h-4">
                <path fill="#3178C6" d="M0 0h128v128H0z" />
                <path fill="#FFF" d="M71.4 78.3h14.5c1.6 0 2.6.9 2.6 2.4v1.8c0 1.2-.8 2.1-2.2 2.1h-7.6v23.8h-9.8V84.6h-7.6c-1.4 0-2.2-.9-2.2-2.1v-1.8c0-1.5 1-2.4 2.6-2.4h9.7V78.3zM103.6 96.6c0 5.4-2.8 8.6-8.2 9.5-1.5.3-3.1.4-4.7.4-3.5 0-6.6-.8-9.2-2.3-1.2-.7-1.7-1.7-1.5-3l.8-5.6c.2-1.3 1.1-1.9 2.4-1.3 2.1 1 4.3 1.6 6.6 1.6 2.4 0 3.6-.8 3.6-2.3 0-1.3-.8-2-3.1-2.8-4.8-1.6-8.2-3.5-8.2-8.6 0-5.1 3.6-8.6 9.5-9.3 1.6-.2 3.2-.3 4.8-.3 3.1 0 6 .7 8.6 2 1.2.6 1.6 1.6 1.5 2.9l-.8 5.6c-.2 1.2-1.1 1.8-2.3 1.2-2-.9-4-1.4-6.1-1.4-2.2 0-3.3.8-3.3 2.1 0 1.1.8 1.8 3.1 2.6 4.9 1.7 8.3 3.6 8.3 8.7z" />
            </svg>
        )
    },
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 256 256" className="w-4 h-4">
                <path fill="#3776AB" d="M126.9 25.5c-24.8 0-23.4 10.9-23.4 10.9l.1 11.3h23.8v3.4H79.2c-31.4 0-31.9 26.6-31.9 26.6v19.4H73v-6.6c0-8.5 7.3-15.4 15.4-15.4h33.2c8.5 0 15.4 7.3 15.4 15.4v21.8H88.7c-30.8 0-28.5 24.8-28.5 24.8v20.8c0 28.5 25.5 27.6 25.5 27.6h15.6v-11.3c0-15.4 12.8-27.6 28.5-27.6h18.5c15.4 0 27.6-12.8 27.6-28.5v-22.1h25.5c29.4 0 28.5-25.5 28.5-25.5V53.1c0-28.5-26.1-27.6-26.1-27.6h-16.8z" />
                <path fill="#FFD43B" d="M129.1 229.6c24.8 0 23.4-10.9 23.4-10.9l-.1-11.3h-23.8v-3.4h48.2c31.4 0 31.9-26.6 31.9-26.6v-19.4h-25.7v6.6c0 8.5-7.3 15.4-15.4 15.4h-33.2c-8.5 0-15.4-7.3-15.4-15.4v-21.8h48.3c30.8 0 28.5-24.8 28.5-24.8V97.2c0-28.5-25.5-27.6-25.5-27.6h-15.6v11.3c0 15.4-12.8 27.6-28.5 27.6h-18.5c-15.4 0-27.6 12.8-27.6 28.5v22.1H99.9c-29.4 0-28.5 25.5-28.5 25.5v39.4c0 28.5 26.1 27.6 26.1 27.6h16.8z" />
            </svg>
        )
    },
    {
        name: "FastAPI",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#009688">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.18c5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82-5.42 0-9.82-4.4-9.82-9.82 0-5.42 4.4-9.82 9.82-9.82zM12 5.45c-3.6 0-6.55 2.95-6.55 6.55 0 3.6 2.95 6.55 6.55 6.55 3.6 0 6.55-2.95 6.55-6.55 0-3.6-2.95-6.55-6.55-6.55zm-1.09 2.18h2.18v3.27h3.27v2.18h-3.27v3.27h-2.18v-3.27H7.64v-2.18h3.27V7.63z" />
            </svg>
        )
    },
    {
        name: "Tailwind CSS",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#06B6D4">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
        )
    },
    {
        name: "Prisma",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                <path d="M2.316 18.797l8.65-15.22a1.157 1.157 0 0 1 2.068 0l8.65 15.22a1.157 1.157 0 0 1-1.034 1.703H3.35a1.157 1.157 0 0 1-1.034-1.703z" />
            </svg>
        )
    },
];

export default function Hero() {
    const [imageError, setImageError] = useState(false);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-6 py-20"
            aria-label="Hero section"
        >
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-8">

                {/* Professional Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" as const, stiffness: 200 }}
                    className="relative"
                >
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-sky-500 to-purple-500 opacity-75 blur-md animate-pulse" />
                        {/* Photo container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                            {!imageError ? (
                                <Image
                                    src="/profile-photo.jpg"
                                    alt="Vince Gio N. Acedillo - Full-Stack Developer"
                                    width={192}
                                    height={192}
                                    className="w-full h-full object-cover"
                                    priority
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-linear-to-br from-emerald-400 to-sky-500 flex items-center justify-center">
                                    <span className="text-6xl font-bold text-white">VG</span>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Greeting badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <span className="text-sm text-sky-400 font-medium">Available for opportunities</span>
                </motion.div>

                {/* Name title with morphing animation */}
                <JapaneseMorphingTitle />

                {/* Role/Title with high contrast (WCAG AAA compliant) */}
                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Information Technology Student | Full-Stack Developer
                </motion.h2>

                {/* Value proposition - clear and concise (ISO 9241-110) */}
                <motion.p
                    className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Building modern, scalable web applications with clean code and exceptional user experiences. Specialized in full-stack development with React, Next.js, TypeScript, and Python.
                </motion.p>

                {/* Key skills/badges */}
                <motion.div
                    className="flex flex-wrap gap-3 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {TECH_STACK.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center gap-2 bg-slate-800/70 border border-slate-700 text-slate-200 text-sm px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors cursor-default"
                        >
                            {tech.icon}
                            {tech.name}
                        </span>
                    ))}
                </motion.div>

                {/* Primary and Secondary CTAs (ISO 9241-143: User guidance) */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {/* Primary CTA - High contrast */}
                    <button
                        onClick={scrollToProjects}
                        className="group inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-sky-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500/50 cursor-pointer"
                        aria-label="View my projects"
                    >
                        View My Work
                        <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
                    </button>

                    {/* Secondary CTA */}
                    <a
                        href="mailto:beansgioacedillo@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-slate-700 hover:border-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600/50"
                        aria-label="Contact me via email"
                    >
                        <Mail size={18} />
                        Get In Touch
                    </a>
                </motion.div>

                {/* Social links with proper labels (Accessibility) */}
                <motion.div
                    className="flex gap-6 pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a
                        href="https://github.com/binsacedillo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        <GithubIcon size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vince-gio-acedillo-449688318"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        <LinkedinIcon size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/binsAced"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my Facebook profile"
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        {/* Facebook icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z"/></svg>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator - subtle visual guidance (ISO 9241-110) */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                aria-hidden="true"
            >
                <ArrowDown className="text-slate-500" size={28} />
            </motion.div>
        </section>
    );
}
