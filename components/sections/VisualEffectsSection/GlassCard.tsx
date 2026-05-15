"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  title: string;
  description: string;
}

export function GlassCard({ title, description }: GlassCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-glass-border bg-glass-bg p-6 backdrop-blur-md",
        "transition-all duration-300 hover:border-glass-border/80 hover:bg-glass-bg/80 hover:backdrop-blur-xl",
      )}
    >
      <h3 className="mb-2 font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </article>
  );
}
