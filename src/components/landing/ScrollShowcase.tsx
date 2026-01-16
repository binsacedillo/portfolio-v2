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
    category?: string;
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
        category: "Full-Stack",
        isFeatured: true,
        image: "/pilothandbook.jpg",
        metrics: [
            { label: "Performance", value: "98/100" },
            { label: "Tech Stack", value: "Full-Stack" },
        ],
        liveUrl: "https://pilot-handbook.vercel.app/",
        repoUrl: "https://github.com/binsacedillo/pilot-handbook",
        tags: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS", "Supabase"],
    },
    {
        title: "Japanese Language Learning Website",
        description: "A responsive Japanese Language Learning website with bilingual navigation, translation features, and React Router for seamless page transitions.",
        icon: <Languages size={32} />,
        category: "Frontend",
        tags: ["React", "React Router", "i18n", "Responsive Design"],
        image: "/japaneselangwebsite.jpg",
        repoUrl: "https://github.com/binsacedillo/JapLanguageLearningWebsite",
    },
    {
        title: "News Website",
        description: "A responsive news platform featuring breaking news carousel, dynamic content loading, search functionality, and an intuitive footer design.",
        icon: <Newspaper size={32} />,
        category: "Frontend",
        tags: ["React", "Carousel", "Search", "Responsive"],
        image: "/newswebsite.png",
        repoUrl: "https://github.com/binsacedillo/newsWebsite",
    },
    {
        title: "Idol Group Website",
        description: "A multi-page responsive website showcasing styled-components architecture and React Router for seamless navigation across pages.",
        icon: <Users size={32} />,
        category: "Frontend",
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
            style={{ colorScheme: 'dark' }}
        >
            {/* Section Divider - Before Portfolio */}
            <motion.div
                className="w-full max-w-5xl h-px mb-10 bg-linear-to-r from-transparent via-sky-500/30 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            />

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
                    className="w-full max-w-6xl mb-12"
                    variants={featuredCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="relative bg-linear-to-br from-sky-900/40 via-slate-900/50 to-purple-900/40 backdrop-blur-sm border-2 border-sky-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-400/50 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-500/10">
                        {/* Star Badge */}
                        <div className="absolute top-4 right-4 z-10 bg-amber-500/20 border border-amber-500/50 rounded-full p-2">
                            <Star className="text-amber-400 fill-amber-400" size={20} />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
                            {/* Featured Image - Left Side */}
                            <motion.div
                                className="relative w-full lg:w-5/12 aspect-video lg:aspect-auto bg-slate-800 overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {featuredProject.image ? (
                                    <Image
                                        src={featuredProject.image}
                                        alt={featuredProject.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-sky-400">
                                        {featuredProject.icon}
                                    </div>
                                )}
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-r from-slate-900/30 to-transparent" />
                            </motion.div>

                            {/* Content - Right Side */}
                            <div className="flex-1 p-6 lg:p-7 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">
                                        {featuredProject.title}
                                    </h2>
                                    <p className="text-sky-400 text-sm lg:text-base font-medium mb-2">
                                        {featuredProject.valueProposition}
                                    </p>
                                    <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-3">
                                        {featuredProject.description}
                                    </p>
                                </div>

                                {/* Metrics */}
                                {featuredProject.metrics && (
                                    <div className="flex flex-wrap gap-3 my-3">
                                        {featuredProject.metrics.map((metric, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-slate-800/70 border border-slate-700 rounded-lg px-3 py-1.5"
                                            >
                                                <div className="text-slate-400 text-xs uppercase tracking-wider">
                                                    {metric.label}
                                                </div>
                                                <div className="text-white text-lg font-bold">
                                                    {metric.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tags */}
                                {featuredProject.tags && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {featuredProject.tags.slice(0, 5).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-sky-500/15 border border-sky-500/40 text-sky-300 text-xs px-2.5 py-1 rounded-full font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {featuredProject.liveUrl && (
                                        <motion.a
                                            href={featuredProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                                            aria-label="Open Pilot Handbook live demo in new window"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ExternalLink size={16} aria-hidden="true" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                    {featuredProject.repoUrl && (
                                        <motion.a
                                            href={featuredProject.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-slate-50 font-semibold px-5 py-2.5 rounded-lg transition-all border border-slate-600 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                                            aria-label="View Pilot Handbook source code on GitHub in new window"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Github size={16} aria-hidden="true" />
                                            View Code
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Section Divider */}
            <motion.div
                className="w-full max-w-5xl h-px my-8 bg-linear-to-r from-transparent via-sky-500/30 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            />


            {/* Regular Projects Grid */}
            <motion.div
                className="w-full mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">Other Projects</h2>
                    <p className="text-slate-400 text-center mb-10">Explore more of my work across different technologies and domains</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {regularProjects.map((project, idx) => (
                            <motion.div
                                key={project.title + idx}
                                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-sky-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-sky-500/10 hover:scale-105 focus-within:ring-2 focus-within:ring-sky-400/50"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: (i) => ({
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 25,
                                            delay: i * 0.08
                                        }
                                    })
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={idx}
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
                                    {/* Category Badge */}
                                    {project.category && (
                                        <div className="mb-3">
                                            <span className="inline-block bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                    )}

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
                                                    className="bg-slate-800 text-slate-200 text-xs px-2 py-1 rounded-md border border-slate-700 transition-colors duration-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                                                aria-label={`Open ${project.title} live demo in new window`}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <ExternalLink size={16} aria-hidden="true" />
                                                View
                                            </motion.a>
                                        )}
                                        {project.repoUrl && (
                                            <motion.a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-slate-50 font-semibold px-3 py-2 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                                                aria-label={`View ${project.title} source code on GitHub in new window`}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                            >
                                                <Github size={16} aria-hidden="true" />
                                                Code
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default ScrollShowcase;