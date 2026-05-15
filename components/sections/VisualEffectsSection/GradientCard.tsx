"use client";

import { cn } from "@/lib/utils";

interface GradientCardProps {
  title: string;
  description: string;
}

export function GradientCard({ title, description }: GradientCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border p-6",
        "bg-linear-to-br from-accent-primary/20 via-bg-elevated to-accent-secondary/20",
        "transition-all duration-500 hover:from-accent-secondary/30 hover:to-accent-primary/30",
      )}
    >
      <h3
        className={cn(
          "mb-2 bg-linear-to-r from-accent-primary to-accent-secondary bg-clip-text text-xl font-bold text-transparent",
        )}
      >
        {title}
      </h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </article>
  );
}
