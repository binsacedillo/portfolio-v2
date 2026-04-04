"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
    year: "2021",
    flightLevel: "FL010",
    waypoint: "DISCO",
    title: "Discovery of Web Development",
    description:
      "Completed TESDA HTML/CSS training during the pandemic and committed to a long-term software path.",
    icon: <Code size={24} />,
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
    year: "2024",
    flightLevel: "FL180",
    waypoint: "GRADU",
    title: "ICT-TVL Computer Programming Graduate",
    description:
      "Graduated with ICT-TVL CompProg specialization, sharpening practical development and problem-solving skills.",
    icon: <Rocket size={24} />,
  },
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
];

function WaypointTriangle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1L15 14H1L8 1Z" fill="currentColor" />
    </svg>
  );
}

function PlaneMarker() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.5 12.4c.7-.4.7-1.4-.1-1.7l-6.5-2.5-2.6-5.7c-.3-.7-1.3-.7-1.6 0L8.1 8.2 1.6 10.7c-.8.3-.8 1.3-.1 1.7l6.3 2.9 2.7 5.9c.3.7 1.3.7 1.6 0l2.7-5.9 6.3-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 30%"],
  });

  const planeOffset = useTransform(scrollYProgress, [0, 1], [10, 620]);

  return (
    <section className="w-full px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Flight Log</h2>
        </div>

        <div ref={trackRef} className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute left-29 top-0 h-full w-0.5 bg-linear-to-b from-sky-300/30 via-cyan-300/65 to-sky-300/30" />

          <motion.div
            className="pointer-events-none absolute left-26 top-0 text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            style={{ y: planeOffset }}
            aria-hidden="true"
          >
            <PlaneMarker />
          </motion.div>

          <div className="space-y-8">
            {timeline.map((event) => (
              <motion.article
                key={event.year + event.waypoint}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid grid-cols-[96px_24px_1fr] items-start gap-4"
              >
                <div className="pt-1 text-right">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky-300">{event.flightLevel}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{event.year}</p>
                </div>

                <div className="pt-1 text-sky-300">
                  <WaypointTriangle />
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-sky-500/45 hover:shadow-sky-900/20">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-sky-500/45 bg-sky-500/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-sky-300">
                      [{event.waypoint}]
                    </span>
                    <span className="text-sky-400">{event.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    {event.logo && (
                      <Image
                        src={event.logo}
                        alt={event.logoAlt ?? ""}
                        width={22}
                        height={22}
                        className="object-contain opacity-85"
                        style={{ width: "auto", height: "auto" }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300 md:text-base">{event.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
