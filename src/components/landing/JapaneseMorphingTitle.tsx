"use client";

import { motion } from "framer-motion";

export default function JapaneseMorphingTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.7 }}
      className="max-w-3xl text-balance text-3xl font-black leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-6xl"
    >
      Vince Gio N. Acedillo
    </motion.h1>
  );
}