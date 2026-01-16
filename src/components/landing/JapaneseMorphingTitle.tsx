"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン・";

// English and Japanese (Katakana) versions

const ENGLISH = "Vince Gio N. Acedillo";
const JAPANESE = "ヴィンス・ジオ・N・アセディロ";
const MAX_LEN = Math.max(JAPANESE.length, ENGLISH.length);


function useScrambler(isTriggered: boolean) {
  const [displayTitle, setDisplayTitle] = useState(JAPANESE.padEnd(MAX_LEN, " "));

  useEffect(() => {
    if (!isTriggered) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayTitle(
        Array.from({ length: MAX_LEN }).map((_, index) => {
          if (index < iteration) {
            return ENGLISH[index] ?? " ";
          }
          return KATAKANA[Math.floor(Math.random() * KATAKANA.length)];
        }).join("")
      );
      if (iteration >= MAX_LEN) clearInterval(interval);
      iteration += 1 / 2.5;
    }, 30);
    return () => clearInterval(interval);
  }, [isTriggered]);

  return displayTitle;
}


export default function JapaneseMorphingTitle() {
  const [triggered, setTriggered] = useState(false);
  // Framer Motion: trigger when in view
  return (
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] mb-4 text-center font-mono"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }}
      onViewportEnter={() => setTriggered(true)}
    >
      {useScrambler(triggered)}
    </motion.h1>
  );
}
