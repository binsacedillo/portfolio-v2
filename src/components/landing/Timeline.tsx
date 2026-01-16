"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  logo?: string;
  logoAlt?: string;
};

const timeline: TimelineEvent[] = [
  {
    year: "2021",
    title: "Discovered Web Development",
    description: "Completed TESDA courses in HTML & CSS during the pandemic. Found my passion for coding and committed to a tech career.",
    icon: <Code size={28} />,
  },
  {
    year: "2022",
    title: "Junior High School Graduate",
    description: "Graduated from North Fairview High School, solidifying my foundation for further IT education.",
    icon: <GraduationCap size={28} />,
  },
  {
    year: "2024",
    title: "ICT-TVL Computer Programming Graduate",
    description: "Graduated with ICT-TVL CompProg specialization from North Fairview High School, building advanced programming skills.",
    icon: <Rocket size={28} />,
  },
  {
    year: "2024-2028",
    title: "FEU Tech - BS in Information Technology",
    description: "Currently pursuing Bachelor of Science in Information Technology with Web and Mobile Applications specialization at FEU Institute of Technology.",
    icon: <GraduationCap size={28} />,
    // Uncomment and add your logo file to /public folder:
    logo: "/feu-tech-logo.png",
    logoAlt: "FEU Institute of Technology logo",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const eventVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
      mass: 0.8,
    },
  },
};

export default function Timeline() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Journey</h2>
      <motion.div
        className="relative w-full max-w-3xl flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {timeline.map((event) => (
          <motion.div
            key={event.year + event.title}
            className="flex items-center gap-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 shadow-lg"
            variants={eventVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-sky-400 mb-2">{event.icon}</div>
              <span className="text-slate-400 text-xs font-semibold">{event.year}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                {event.logo && (
                  <Image
                    src={event.logo}
                    alt={event.logoAlt ?? ""}
                    width={24}
                    height={24}
                    className="object-contain opacity-80"
                    onError={(e) => {
                      // Hide logo if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
              <p className="text-slate-300 text-base">{event.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-800" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
