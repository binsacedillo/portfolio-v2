"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ClimbIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17l7.5-2.3L20 4.8l-2.1 9.6L8.4 17 6 20l-1-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 7h5M17 4v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReEngaging, setIsReEngaging] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    setIsReEngaging(true);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(18);
    }

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsReEngaging(false);
    }, 120);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          whileTap={{ x: [-1.5, 1.5, -1, 1], y: [1, -1, 1, 0] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 rounded-full border border-sky-400/45 bg-slate-900/90 px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-sky-200 shadow-lg shadow-sky-900/40 transition-all hover:scale-105 hover:border-sky-300 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-sky-500/40"
          aria-label="Re-engage altitude and return to top"
          style={{ willChange: "transform, opacity" }}
        >
          <ClimbIcon />
          {isReEngaging ? "Re-Engaging" : "TOA"}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
