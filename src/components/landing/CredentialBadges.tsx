"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ExternalLink, Award } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { certifications } from "~/data/certifications";

export default function CredentialBadges() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {certifications.map((cert, index) => (
                <div
                    key={cert.title + index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Minimalist Chip */}
                    <div className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-3 py-1 hover:bg-sky-500/20 transition-all cursor-pointer">
                        <ShieldCheck className="text-sky-400" size={14} />
                        <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
                            Verified {cert.issuer}
                        </span>
                    </div>

                    {/* Popover */}
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 5, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-64 p-4 mt-2 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="relative w-16 h-16 bg-white/5 rounded-lg p-2">
                                        <Image
                                            src={cert.badgeUrl}
                                            alt={cert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center gap-2 text-sky-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                                            <Award size={10} />
                                            {cert.issuer}
                                        </div>
                                        <h4 className="text-sm font-bold text-white mb-1">
                                            {cert.title}
                                        </h4>
                                        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    </div>
                                    <a
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-xs border border-sky-500/30 hover:border-sky-500/50 rounded-lg px-3 py-1.5 transition-all w-full justify-center"
                                    >
                                        Verify Credential
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-slate-900 rotate-45 border-t border-l border-slate-700/50" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
