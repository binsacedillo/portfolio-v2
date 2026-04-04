"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import JapaneseMorphingTitle from "./JapaneseMorphingTitle";
import CredentialBadges from "./CredentialBadges";

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
        name: "tRPC",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#398ccb">
                <path d="M1.328 17.514v-9.61h2.203v1.89h1.797v1.86h-1.797v5.86H1.328zm5.719 0v-6.328H8.86v1.078c.453-.875 1.25-1.328 2.39-1.328.25 0 .438.016.61.047v2.125c-.219-.047-.484-.078-.719-.078-1.281 0-2.078.687-2.281 2.015v2.469H7.047zm8.016 0v-9.61h4.64v3.125h-2.437v6.485h-2.203z" />
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
        name: "Prisma",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                <path d="M2.316 18.797l8.65-15.22a1.157 1.157 0 0 1 2.068 0l8.65 15.22a1.157 1.157 0 0 1-1.034 1.703H3.35a1.157 1.157 0 0 1-1.034-1.703z" />
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
        name: "Serwist (PWA)",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FFC107">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
        )
    },
    {
        name: "Framer Motion",
        icon: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                <path d="M0 0l12 12L24 0H0zm0 12l12 12V12H0z" />
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
            className="relative min-h-screen w-full flex flex-col items-center justify-around bg-slate-950 px-6 py-8"
            aria-label="Hero section"
        >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
                <Image
                    src="/faithfeed.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-15 blur-2xl scale-110"
                    priority
                />
                {/* Dark overlay for text clarity */}
                <div className="absolute inset-0 bg-slate-950/40" />
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-transparent to-slate-950" />
            </div>

            {/* Background gradient effects (Blobs) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-4 backdrop-blur-[2px] py-10 rounded-3xl">
                {/* Professional Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" as const, stiffness: 200 }}
                    className="relative"
                >
                    <div className="relative w-28 h-28 md:w-36 md:h-36">
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
                    <span className="text-sm text-sky-400 font-bold tracking-wide">Available for opportunities</span>
                </motion.div>

                {/* Name title with morphing animation */}
                <JapaneseMorphingTitle />

                {/* Role/Title with high contrast (WCAG AAA compliant) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center space-y-2"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        Full-Stack Developer | Sophomore IT Undergraduate
                    </h2>
                    <CredentialBadges />
                </motion.div>

                {/* Value proposition - clear and concise (ISO 9241-110) */}
                <motion.p
                    className="text-base md:text-xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Building modern, high-performance web applications with a focus on <span className="text-sky-400 font-bold">Offline-First PWAs</span> and the <span className="text-sky-400 font-bold">T3 Stack</span>. Specialized in scalable full-stack architectures using React, Next.js, tRPC, and Python.
                </motion.p>

                {/* Key skills/badges */}
                <motion.div
                    className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 sm:gap-3 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {TECH_STACK.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center justify-center gap-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700 text-white text-[10px] sm:text-sm px-2 sm:px-4 py-2 rounded-lg font-bold hover:bg-slate-800 transition-colors cursor-default whitespace-nowrap shadow-lg"
                        >
                            {tech.icon}
                            <span className="hidden xs:inline">{tech.name}</span>
                        </span>
                    ))}
                </motion.div>

                {/* Primary and Secondary CTAs (ISO 9241-143: User guidance) */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {/* Primary CTA - High contrast */}
                    <button
                        onClick={scrollToProjects}
                        className="group inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-xl hover:shadow-sky-500/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500/50 cursor-pointer"
                        aria-label="View my projects"
                    >
                        View My Work
                        <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
                    </button>

                    {/* Secondary CTA */}
                    <a
                        href="mailto:beansgioacedillo@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg transition-all border border-slate-700 hover:border-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-600/50 shadow-lg"
                        aria-label="Contact me via email"
                    >
                        <Mail size={18} />
                        Get In Touch
                    </a>
                </motion.div>

                {/* Social links with proper labels (Accessibility) */}
                <motion.div
                    className="flex gap-6 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a
                        href="https://github.com/binsacedillo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                        className="text-white bg-slate-900/50 hover:text-sky-400 transition-colors p-3 hover:bg-slate-800 rounded-xl shadow-lg border border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vince-gio-acedillo-449688318"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className="text-white bg-slate-900/50 hover:text-sky-400 transition-colors p-3 hover:bg-slate-800 rounded-xl shadow-lg border border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/binsAced"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my Facebook profile"
                        className="text-white bg-slate-900/50 hover:text-sky-400 transition-colors p-3 hover:bg-slate-800 rounded-xl shadow-lg border border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                        {/* Facebook icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z"/></svg>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator - hidden on mobile if too crowded, or just positioned naturally */}
            <motion.div
                className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                aria-hidden="true"
            >
                <ArrowDown className="text-sky-400" size={28} />
            </motion.div>
        </section>
    );
}
