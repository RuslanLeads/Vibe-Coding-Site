"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-glass-bg text-text-primary",
        "transition-colors hover:bg-bg-elevated focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none",
        className,
      )}
    >
      <motion.span
        key={theme}
        initial={
          prefersReducedMotion ? false : { rotate: -180, opacity: 0, scale: 0.6 }
        }
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={
          prefersReducedMotion ? undefined : { rotate: 180, opacity: 0, scale: 0.6 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
