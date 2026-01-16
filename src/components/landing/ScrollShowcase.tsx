"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Plane, Newspaper, Users, Languages } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Project = {
    title: string;
    description: string;
    icon: React.ReactNode;
    isFeatured?: boolean;
    valueProposition?: string;
    metrics?: { label: string; value: string }[];
    liveUrl?: string;
    repoUrl?: string;
    tags?: string[];
    image?: string;
};

const projects: Project[] = [
    {
        title: "Pilot Handbook - Aviation Management Platform",
        description: "A pilot logbook management application using Next.js with TypeScript, tRPC for API communication, Prisma with PostgreSQL for data persistence, Clerk authentication, and Tailwind CSS for responsive styling across all devices.",
        valueProposition: "Streamlining aviation management with modern technology for pilots worldwide.",
        icon: <Plane size={48} />,
        isFeatured: true,
        metrics: [
            { label: "Performance", value: "98/100" },
            { label: "Tech Stack", value: "Full-Stack" },
        ],
        liveUrl: "https://pilot-handbook.vercel.app/",
        repoUrl: "https://github.com/binsacedillo/pilot-handbook",
        tags: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS" , "Supabase", "Clerk"],
    },
    {
        title: "Japanese Language Learning Website",
        description: "A responsive Japanese Language Learning website with bilingual navigation, translation features, and React Router for seamless page transitions.",
        icon: <Languages size={32} />,
        tags: ["React", "React Router", "i18n", "Responsive Design"],
        image: "/japaneselangwebsite.jpg",
        repoUrl: "https://github.com/binsacedillo/JapLanguageLearningWebsite",
    },
    {
        title: "News Website",
        description: "A responsive news platform featuring breaking news carousel, dynamic content loading, search functionality, and an intuitive footer design.",
        icon: <Newspaper size={32} />,
        tags: ["React", "Carousel", "Search", "Responsive"],
        image: "/newswebsite.png",
        repoUrl: "https://github.com/binsacedillo/newsWebsite",
    },
    {
        title: "Idol Group Website",
        description: "A multi-page responsive website showcasing styled-components architecture and React Router for seamless navigation across pages.",
        icon: <Users size={32} />,
        tags: ["React", "Styled Components", "React Router"],
        image: "/idolwebsite.png",
        repoUrl: "https://github.com/binsacedillo/IdolWebsite",
    },
];

const featuredCardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 25,
            mass: 1
        },
    },
};

export function ScrollShowcase() {
    const featuredProject = projects.find(p => p.isFeatured);
    const regularProjects = projects.filter(p => !p.isFeatured);

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 py-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-label="Portfolio projects section"
        >
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Portfolio Projects
            </motion.h1>

            {/* Featured Project */}
            {featuredProject && (
                <motion.div
                    className="w-full max-w-5xl mb-16"
                    variants={featuredCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="relative bg-linear-to-br from-sky-900/40 via-slate-900/50 to-purple-900/40 backdrop-blur-sm border-2 border-sky-500/30 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                        {/* Star Badge */}
                        <div className="absolute top-6 right-6 bg-amber-500/20 border border-amber-500/50 rounded-full p-2">
                            <Star className="text-amber-400 fill-amber-400" size={24} />
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Icon & Title */}
                            <div className="shrink-0">
                                <div className="bg-sky-500/20 rounded-2xl p-6 text-sky-400 border border-sky-500/30">
                                    {featuredProject.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {featuredProject.title}
                                    </h2>
                                    <p className="text-sky-400 text-lg font-medium mb-3">
                                        {featuredProject.valueProposition}
                                    </p>
                                    <p className="text-slate-300 text-base leading-relaxed">
                                        {featuredProject.description}
                                    </p>
                                </div>

                                {/* Metrics */}
                                {featuredProject.metrics && (
                                    <div className="flex flex-wrap gap-4">
                                        {featuredProject.metrics.map((metric, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2"
                                            >
                                                <div className="text-slate-400 text-xs uppercase tracking-wider">
                                                    {metric.label}
                                                </div>
                                                <div className="text-white text-xl font-bold">
                                                    {metric.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tags */}
                                {featuredProject.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {featuredProject.liveUrl && (
                                        <a
                                            href={featuredProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-sky-500/50 hover:scale-105"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                    {featuredProject.repoUrl && (
                                        <a
                                            href={featuredProject.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-slate-700 hover:border-slate-600"
                                        >
                                            <Github size={18} />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Regular Projects Grid */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
            >
                {regularProjects.map((project, idx) => (
                    <div
                        key={project.title + idx}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-sky-500/50 transition-colors duration-300 flex flex-col h-full"
                    >
                        {/* Project Image */}
                        <div className="relative aspect-video w-full bg-slate-800 overflow-hidden shrink-0">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Hide image container on error
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-sky-400">
                                    {project.icon}
                                </div>
                            )}
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col grow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-sky-400 shrink-0">{project.icon}</div>
                                <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                            </div>
                            <p className="text-slate-300 text-sm mb-4 line-clamp-3 grow">{project.description}</p>

                            {/* Tags */}
                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-slate-800/70 text-slate-400 text-xs px-2 py-1 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-auto">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                                    >
                                        <ExternalLink size={16} />
                                        View
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default ScrollShowcase;
