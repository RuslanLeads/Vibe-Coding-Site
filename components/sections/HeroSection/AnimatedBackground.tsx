"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobTransition = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-mesh-gradient absolute inset-0" />

      <div className="absolute inset-0 bg-bg-primary/40" />

      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[min(500px,80vw)] w-[min(500px,80vw)] rounded-full bg-accent-primary/35 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 90, 0], y: [0, 50, 0], scale: [1, 1.08, 1] }
        }
        transition={{ ...blobTransition, duration: 14 }}
      />
      <motion.div
        className="absolute top-1/4 -right-1/4 h-[min(420px,70vw)] w-[min(420px,70vw)] rounded-full bg-accent-secondary/30 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -70, 0], y: [0, 70, 0], scale: [1, 1.05, 1] }
        }
        transition={{ ...blobTransition, duration: 11 }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/4 h-[min(460px,75vw)] w-[min(460px,75vw)] rounded-full bg-accent-glow/25 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 60, 0], y: [0, -55, 0], scale: [1, 1.1, 1] }
        }
        transition={{ ...blobTransition, duration: 16 }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
