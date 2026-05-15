"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { sectionHeaderItem, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className={cn("mb-12 max-w-2xl", centered && "mx-auto text-center")}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
    >
      {badge && (
        <motion.div
          variants={sectionHeaderItem}
          className={cn("mb-4", centered && "flex justify-center")}
        >
          <Badge>{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={sectionHeaderItem}
        className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={sectionHeaderItem}
          className="mt-4 text-lg text-text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
