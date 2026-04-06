"use client";

import { motion } from "framer-motion";
import { Code, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

type TimelineEvent = {
  year: string;
  flightLevel: string;
  waypoint: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  logo?: string;
  logoAlt?: string;
};

const timeline: TimelineEvent[] = [
  {
    year: "2024-2028",
    flightLevel: "FL390",
    waypoint: "CRUIS",
    title: "BSIT at FEU Tech",
    description:
      "Currently pursuing BS Information Technology (Web and Mobile Applications), focused on full-stack and product engineering.",
    icon: <GraduationCap size={24} />,
    logo: "/feu-tech-logo.png",
    logoAlt: "FEU Institute of Technology logo",
  },
  {
    year: "2024",
    flightLevel: "FL180",
    waypoint: "GRADU",
    title: "ICT-TVL Computer Programming Graduate",
    description:
      "Graduated with ICT-TVL CompProg specialization, sharpening practical development and problem-solving skills.",
    icon: <Rocket size={24} />,
  },
  {
    year: "2022",
    flightLevel: "FL090",
    waypoint: "FOUND",
    title: "Junior High School Graduate",
    description:
      "Finished junior high with a stronger technical foundation and clear direction toward IT.",
    icon: <GraduationCap size={24} />,
  },
  {
    year: "2021",
    flightLevel: "FL010",
    waypoint: "DISCO",
    title: "Discovery of Web Development",
    description:
      "Completed TESDA HTML/CSS training during the pandemic and committed to a long-term software path.",
    icon: <Code size={24} />,
  },
];

function WaypointTriangle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1L15 14H1L8 1Z" fill="currentColor" />
    </svg>
  );
}

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full px-4 py-20 relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Flight Path
          </h2>
        </div>

        <div ref={trackRef} className="relative mx-auto max-w-4xl">
          {/* Central Flight Path Track */}
          <div className="pointer-events-none absolute left-[125px] -translate-x-1/2 top-0 h-full w-px bg-slate-800/50" aria-hidden="true" />
          <div className="pointer-events-none absolute left-[125px] -translate-x-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-sky-500/30 to-transparent" aria-hidden="true" />

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {timeline.map((event) => (
              <motion.article
                key={event.year + event.waypoint}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="grid grid-cols-[96px_58px_1fr] items-start gap-0 transform-gpu group"
              >
                {/* Telemetry (Left) */}
                <div className="pt-6 text-right pr-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400/80 mb-1">{event.flightLevel}</p>
                  <p className="font-mono text-[11px] font-bold text-slate-300">[{event.year}]</p>
                </div>

                {/* Waypoint Marker (Center) */}
                <div className="relative h-full flex justify-center pt-6">
                  <div className="relative z-10 text-sky-400/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-300">
                    <WaypointTriangle />
                  </div>
                </div>

                {/* Mission Card (Right) */}
                <div className="pl-6 pb-4">
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-md p-6 transition-all duration-500 hover:border-sky-500/30 hover:bg-slate-900/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] group-hover:translate-x-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] bg-amber-500/10 text-amber-500/90 border border-amber-500/20">
                        {event.waypoint}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">{event.title}</h3>
                      {event.logo && (
                        <Image
                          src={event.logo}
                          alt={event.logoAlt ?? ""}
                          width={24}
                          height={24}
                          className="object-contain opacity-90 transition-all duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      )}
                    </div>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
