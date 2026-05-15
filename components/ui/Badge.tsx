import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "accent" | "outline";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "border-glass-border bg-glass-bg text-accent-primary",
  accent:
    "border-accent-primary/30 bg-accent-primary/15 text-accent-primary",
  outline:
    "border-border bg-transparent text-text-secondary",
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
