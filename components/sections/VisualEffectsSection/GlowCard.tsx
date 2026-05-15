"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  title: string;
  description: string;
}

export function GlowCard({ title, description }: GlowCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-accent-primary/30 bg-bg-secondary p-6",
        "shadow-[0_0_30px_rgba(124,58,237,0.25)]",
        "transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]",
      )}
    >
      <h3 className="mb-2 font-semibold text-accent-glow">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </article>
  );
}
