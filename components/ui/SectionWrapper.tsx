"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Чуть другой цвет фона для чередования секций */
  alternate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  alternate = false,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={cn(
        "scroll-mt-24 py-24 lg:py-32",
        alternate && "bg-bg-secondary/50",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </motion.section>
  );
}
