"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import JapaneseMorphingTitle from "./JapaneseMorphingTitle";

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
                    {["Next.js", "React", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Prisma"].map((skill) => (
                        <span
                            key={skill}
                            className="bg-slate-800/70 border border-slate-700 text-slate-200 text-sm px-4 py-2 rounded-lg font-medium"
                        >
                            {skill}
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
