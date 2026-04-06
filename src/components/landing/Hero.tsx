"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import JapaneseMorphingTitle from "./JapaneseMorphingTitle";

const TECH_STACK = [
  { name: "Next.js", icon: "N" },
  { name: "TypeScript", icon: "TS" },
  { name: "tRPC", icon: "RPC" },
  { name: "Prisma", icon: "P" },
  { name: "Python", icon: "Py" },
  { name: "PWA", icon: "WA" },
];

const DEFAULT_TICKER =
  "Current GitHub Commit: syncing latest improvements | Tech Health: T3 Stack Operational | Next.js Optimized.";

const CURSOR_NORMAL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='4' fill='none' stroke='%237dd3fc' stroke-width='1.2'/%3E%3Cpath d='M12 2v5M12 17v5M2 12h5M17 12h5' stroke='%237dd3fc' stroke-width='1.2'/%3E%3C/svg%3E\") 12 12, auto";

const CURSOR_LOCK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Ccircle cx='14' cy='14' r='6' fill='none' stroke='%23f59e0b' stroke-width='1.4'/%3E%3Ccircle cx='14' cy='14' r='2' fill='%23f59e0b'/%3E%3Cpath d='M14 2v6M14 20v6M2 14h6M20 14h6' stroke='%23f59e0b' stroke-width='1.4'/%3E%3C/svg%3E\") 14 14, auto";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [tickerText, setTickerText] = useState(DEFAULT_TICKER);
  const [cursorLocked, setCursorLocked] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const boundsRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Optimized high-performance parallax using direct DOM updates (bypassing React state)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springTilt = useSpring(tiltX, { damping: 20, stiffness: 80 });

  // Pre-calculated transforms for different parallax depths
  const blob1X = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const blob1Y = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const blob2X = useTransform(springX, [-0.5, 0.5], [-12.6, 12.6]);
  const blob2Y = useTransform(springY, [-0.5, 0.5], [-9, 9]);
  const tiltRotation = springTilt;

  const timeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    [],
  );

  useEffect(() => {
    const updateTime = () => setLocalTime(timeFormatter.format(new Date()));
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [timeFormatter]);

  useEffect(() => {
    let active = true;

    const loadTicker = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/binsacedillo/pilot-handbook/commits?per_page=1",
        );
        if (!response.ok) return;

        const data = (await response.json()) as Array<{
          commit?: { message?: string };
        }>;

        const message = data?.[0]?.commit?.message?.trim();
        if (!active || !message) return;

        const compact = message.replace(/\s+/g, " ").slice(0, 68);
        setTickerText(
          `Current GitHub Commit: ${compact} | Tech Health: T3 Stack Operational | Next.js Optimized.`,
        );
      } catch {
        // Keep fallback ticker text when request fails or is rate-limited.
      }
    };

    void loadTicker();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0;
      const clamped = Math.max(-12, Math.min(12, gamma));
      tiltX.set(clamped * 0.35);
    };

    window.addEventListener("deviceorientation", onOrientation, true);
    return () => window.removeEventListener("deviceorientation", onOrientation, true);
  }, [tiltX]);

  // Performance-optimized bounds caching to eliminate Forced Reflows
  const updateBounds = () => {
    if (containerRef.current) {
      boundsRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    // Use cached bounds to avoid a synchronous layout reflow on every mouse move
    const bounds = boundsRef.current ?? event.currentTarget.getBoundingClientRect();
    boundsRef.current ??= bounds;

    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const interactiveProps = {
    onMouseEnter: () => setCursorLocked(true),
    onMouseLeave: () => setCursorLocked(false),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950 px-3 py-6 text-white sm:px-5 sm:py-8 md:px-10"
      aria-label="Hero section"
      onMouseMove={onMouseMove}
      onMouseEnter={updateBounds}
      style={{ cursor: cursorLocked ? CURSOR_LOCK : CURSOR_NORMAL }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[#020617]" />
        <motion.div
          className="absolute -left-32 -top-20 h-96 w-96 transform-gpu rounded-full bg-indigo-500/18 blur-2xl"
          style={{ x: blob1X, y: blob1Y, willChange: 'transform' }}
        />
        <motion.div
          className="absolute -right-32 top-1/4 h-104 w-104 transform-gpu rounded-full bg-violet-500/14 blur-2xl"
          style={{ x: blob2X, y: blob2Y, willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-start justify-center pb-8 pt-10 sm:min-h-[calc(100vh-4rem)] sm:items-center sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/3 transform-gpu p-3.5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-6 md:p-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-sky-200/20" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            aria-hidden="true"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(186,230,253,0.22), inset 0 -1px 0 rgba(125,211,252,0.06)",
            }}
          />
          <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-sky-300/60" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-sky-300/60" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-sky-300/60" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-sky-300/60" aria-hidden="true" />
 
          <div className="relative overflow-hidden border-b border-white/10 pb-3">
            <motion.div
              className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em] text-slate-300 transform-gpu will-change-transform sm:text-[11px] sm:tracking-[0.18em]"
              animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
              style={{ willChange: 'transform' }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }
              }
            >
              <span>{tickerText}</span>
              <span className="mx-8">{tickerText}</span>
            </motion.div>
          </div>
 
          <div className="mt-8 grid grid-cols-1 gap-4 text-[9px] uppercase tracking-[0.05em] text-slate-300 sm:grid-cols-3 sm:mt-5 sm:gap-2.5 sm:text-xs sm:tracking-[0.22em]">
            <p className="font-mono text-center sm:text-left">Local Time: {localTime || "--:--:--"}</p>
            <p className="font-mono text-center text-sky-300">Status: Available for Work</p>
            <p className="font-mono text-center sm:text-right">Stack: Next.js / tRPC / Prisma</p>
          </div>

          <div className="mt-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {/* Primary Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/35 bg-sky-500/15 px-4 py-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">
                  Available for opportunities
                </span>
              </div>

              {/* Verified Authority Badge (ISO UX Standard Clickable Verification) */}
              <motion.a
                href="https://www.credly.com/badges/206b15ee-497f-4ac9-a637-6c504f7e2f57/public_url"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: "rgba(56,189,248,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-slate-900/60 shadow-lg px-3.5 py-2 transition-all cursor-pointer"
                aria-label="Verify Cisco CCNA Certification on Credly"
              >
                <div className="relative h-5 w-5 sm:h-6 sm:w-6 transform-gpu">
                  <Image
                    src="/badges/ccna-introduction-to-networks.png"
                    alt="Cisco CCNA Certificate"
                    fill
                    sizes="(min-width: 640px) 24px, 20px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400/90 sm:text-[11px]">
                    Cisco Verified
                  </span>
                  <span className="h-2 w-px bg-sky-500/30" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-tight text-white sm:text-[11px]">
                    CCNA
                  </span>
                </div>
                <div className="ml-0.5 text-sky-400 group-hover:text-white transition-colors">
                  <ExternalLink size={12} />
                </div>
                
                {/* ISO UX - Progressive Disclosure Tooltip */}
                <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-[10px] font-medium text-white opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-1 border border-slate-700 shadow-2xl pointer-events-none z-50">
                  CCNA: Introduction to Networks • Click to Verify
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative mt-4 h-24 w-24"
              aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-full bg-sky-500/15 blur-md" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-900 shadow-xl shadow-sky-950/30">
                {!imageError ? (
                  <Image
                    src="/profile-photo.jpg"
                    alt="Vince Gio Acedillo Profile"
                    fill
                    sizes="(min-width: 1024px) 96px, 80px"
                    className="object-cover object-top"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-slate-800 to-slate-900 text-xs font-bold text-slate-200">
                    VG
                  </div>
                )}
              </div>
            </motion.div>

            <div className="mt-6 transform-gpu">
              <JapaneseMorphingTitle />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-4 max-w-3xl space-y-4"
            >
              <p className="font-mono text-lg font-semibold uppercase tracking-[0.08em] text-sky-300 md:text-xl">
                Full-Stack Developer | Sophomore IT Undergraduate
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-xl">
                I build fast, accessible web apps that are clear to navigate and reliable to scale.
                <span className="mt-2 block text-slate-300">
                  My focus is polished UI, dependable engineering, and offline-first experiences that serve real users.
                </span>
              </p>
            </motion.div>

            <motion.div
              className="mt-5 w-full max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              aria-hidden="true"
            >
              <motion.div
                className="h-px w-full bg-linear-to-r from-transparent via-sky-300/70 to-transparent"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
                style={{ rotate: tiltRotation as any }}
              />
            </motion.div>

            <motion.div
              className="mt-6 flex w-full flex-wrap justify-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/65 px-3 py-2 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                  {...interactiveProps}
                >
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-800 px-1 font-mono text-[10px] font-bold text-sky-300">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-300/45 bg-amber-500 px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.08em] text-black shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-300/60 sm:w-auto sm:px-8 sm:py-4"
                aria-label="View my projects"
                {...interactiveProps}
              >
                View My Work
                <ArrowRight size={18} />
              </button>

              <a
                href="mailto:beansgioacedillo@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/85 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:border-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-600/50 sm:w-auto sm:px-8 sm:py-4"
                aria-label="Contact me via email"
                {...interactiveProps}
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              <a
                href="https://github.com/binsacedillo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-white shadow-lg transition-colors hover:bg-slate-800 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                {...interactiveProps}
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vince-gio-acedillo-449688318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-white shadow-lg transition-colors hover:bg-slate-800 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                {...interactiveProps}
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/binsAced"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Facebook profile"
                className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-white shadow-lg transition-colors hover:bg-slate-800 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                {...interactiveProps}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z"
                  />
                </svg>
              </a>
            </motion.div>

            <nav className="mt-12 w-full max-w-3xl" aria-label="Flight path navigation">
              <div className="mb-2 text-center">
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-sky-400/60">
                  Mission Manifest
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 rounded-2xl border border-white/15 bg-slate-900/65 px-3 py-3 font-mono text-[8px] uppercase tracking-[0.05em] text-slate-200 backdrop-blur-md sm:py-2.5 sm:text-xs sm:tracking-[0.2em]">
                <span className="shrink-0 text-white/90">Dep: MNL (About)</span>
                <span className="text-sky-300">-&gt;</span>
                <span className="shrink-0 text-white/90">Enr: Tech (Stack)</span>
                <span className="text-sky-300">-&gt;</span>
                <span className="shrink-0 text-white/90">Arr: KSFO (Contact)</span>
              </div>
            </nav>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorLocked ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(125,211,252,0.04), rgba(125,211,252,0.04) 1px, transparent 1px, transparent 6px)",
        }}
      />
    </section>
  );
}
