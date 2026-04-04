"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import React, { useMemo } from "react";
import { projects } from "~/data/projects";
import {
    cardStaggerVariants,
    cardStaggerVariantsReduced,
    featuredCardVariants,
    featuredCardVariantsReduced,
    sectionFadeIn,
    sectionFadeInReduced,
} from "~/lib/motion";

const BLUR_DATA_URL =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdCMicgeD0nMCcgeT0nMCc+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nNCcgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9InVybCgjQjIpIiBvcGFjaXR5PScwLjInLz48L3N2Zz4=";

export function ScrollShowcase() {
    const featuredProjects = projects.filter(p => p.isFeatured);
    const regularProjects = projects.filter(p => !p.isFeatured);

    // Detect prefers-reduced-motion
    const prefersReducedMotion = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    const sectionVariants = prefersReducedMotion ? sectionFadeInReduced : sectionFadeIn;
    const featuredVariants = prefersReducedMotion ? featuredCardVariantsReduced : featuredCardVariants;
    const cardVariants = prefersReducedMotion ? cardStaggerVariantsReduced : cardStaggerVariants;

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4 py-16"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            aria-label="Portfolio projects section"
            style={{ colorScheme: 'dark' }}
        >
            {/* Section Divider - Before Portfolio */}
            <motion.div
                className="w-full max-w-5xl h-px mb-10"
                style={{ background: 'var(--gradient-divider)' }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            />

            <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Portfolio Projects
            </motion.h2>

            {/* Featured Projects */}
            {featuredProjects.map((featuredProject, index) => (
                <motion.div
                    key={featuredProject.title + index}
                    className="w-full max-w-6xl mb-12"
                    variants={featuredVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="relative backdrop-blur-sm border-2 border-sky-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-400/50 hover:border-sky-500/60" style={{ background: 'var(--gradient-card-bg)', boxShadow: 'var(--shadow-featured-hover)' }}>
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
                                        sizes="(min-width: 1024px) 40vw, 100vw"
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
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
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-white">
                                            {featuredProject.title}
                                        </h3>
                                        {featuredProject.status && (
                                            <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] lg:text-xs uppercase tracking-tighter px-2 py-0.5 rounded-md font-bold animate-pulse">
                                                {featuredProject.status}
                                            </span>
                                        )}
                                    </div>
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
            ))}

            {/* Section Divider */}
            <motion.div
                className="w-full max-w-5xl h-px my-8"
                style={{ background: 'var(--gradient-divider)' }}
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
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">Other Projects</h3>
                    <p className="text-slate-400 text-center mb-10">Explore more of my work across different technologies and domains</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {regularProjects.map((project, idx) => (
                            <motion.div
                                key={project.title + idx}
                                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-sky-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-sky-500/10 hover:scale-105 focus-within:ring-2 focus-within:ring-sky-400/50"
                                variants={cardVariants}
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
                                            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
                                            placeholder="blur"
                                            blurDataURL={BLUR_DATA_URL}
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
                                    {/* Category & Status Badges */}
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {project.category && (
                                            <span className="inline-block bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        )}
                                        {project.status && (
                                            <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tight animate-pulse">
                                                {project.status}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="text-sky-400 shrink-0" aria-hidden="true">{project.icon}</div>
                                        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
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