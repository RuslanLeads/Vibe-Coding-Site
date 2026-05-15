"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { AnimationCardData } from "@/components/sections/AnimationsSection/cards";
import { cn } from "@/lib/utils";

interface AnimationCardProps {
  card: AnimationCardData;
}

export function AnimationCard({ card }: AnimationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [replay, setReplay] = useState(0);

  const handleClick = () => {
    setReplay((n) => n + 1);
    if (card.type === "layout") {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={cn(
        "cursor-pointer rounded-2xl border border-border bg-bg-secondary p-6",
        "shadow-lg transition-shadow hover:shadow-xl hover:shadow-accent-primary/10",
      )}
      onClick={handleClick}
    >
      <h3 className="mb-2 font-semibold text-text-primary">{card.title}</h3>
      <p className="mb-4 text-sm text-text-secondary">{card.description}</p>

      <div className="flex h-32 items-center justify-center rounded-xl bg-bg-elevated">
        <CardDemo type={card.type} replay={replay} expanded={expanded} />
      </div>
    </motion.article>
  );
}

function CardDemo({
  type,
  replay,
  expanded,
}: {
  type: AnimationCardData["type"];
  replay: number;
  expanded: boolean;
}) {
  const key = `${type}-${replay}`;

  switch (type) {
    case "fade-slide":
      return (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-12 w-12 rounded-lg bg-accent-primary"
        />
      );
    case "spring":
      return (
        <motion.div
          key={key}
          initial={{ x: -40 }}
          animate={{ x: 40 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="h-12 w-12 rounded-full bg-accent-secondary"
        />
      );
    case "rotate":
      return (
        <motion.div
          whileHover={{ rotate: 180 }}
          className="h-12 w-12 rounded-lg bg-accent-glow"
        />
      );
    case "scale":
      return (
        <motion.div
          key={key}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: 2 }}
          className="h-12 w-12 rounded-full bg-[var(--neon-pink)]"
        />
      );
    case "path":
      return (
        <svg key={key} width="80" height="48" viewBox="0 0 80 48" className="text-accent-primary">
          <motion.path
            d="M8 40 Q40 4 72 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      );
    case "layout":
      return (
        <motion.div
          layout
          className="rounded-lg bg-accent-primary"
          animate={{ width: expanded ? 120 : 48, height: expanded ? 64 : 48 }}
        />
      );
    default:
      return null;
  }
}
