"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, delay = 0, y = 40, x = 0, className = "" }: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
