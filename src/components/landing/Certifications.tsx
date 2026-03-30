"use client";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  badgeUrl: string;
  verificationUrl: string;
  description?: string;
};

const certifications: Certification[] = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    badgeUrl: "/badges/ccna-introduction-to-networks.png",
    verificationUrl: "https://www.credly.com/badges/206b15ee-497f-4ac9-a637-6c504f7e2f57/public_url",
    description: "Knowledge of networking including IP addressing, Ethernet protocols, and configuring connectivity between switches and routers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-20 bg-slate-950 flex flex-col items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-1.5 mb-4">
          <ShieldCheck className="text-sky-400" size={16} />
          <span className="text-sm text-sky-400 font-medium tracking-wide uppercase">Credentials</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Certifications & Badges
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Verified professional certifications and technical achievements from industry leaders.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title + index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-sky-500/50 transition-all duration-300 shadow-xl hover:shadow-sky-500/10"
          >
            {/* Badge Image */}
            <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={cert.badgeUrl}
                alt={`${cert.title} Badge`}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="space-y-2 mb-6 flex-grow">
              <div className="flex items-center justify-center gap-2 text-sky-400 text-sm font-semibold uppercase tracking-widest">
                <Award size={14} />
                {cert.issuer}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                {cert.description}
              </p>
              <div className="text-slate-500 text-xs font-medium">
                Issued {cert.date}
              </div>
            </div>

            {/* Action */}
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm group/link"
            >
              Verify Credential
              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
