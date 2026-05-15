"use client";

import { ChevronDown, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AnimatedBackground } from "@/components/sections/HeroSection/AnimatedBackground";
import { Badge } from "@/components/ui/Badge";
import {
  heroCta,
  heroFadeUp,
  heroScrollHint,
  heroStagger,
  heroWord,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const titleWords = [
  { text: "Vibe", gradient: false },
  { text: "Coding", gradient: true },
  { text: "Showcase", gradient: false },
] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6"
    >
      <AnimatedBackground />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl text-center"
        variants={heroStagger}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
      >
        <motion.div variants={heroFadeUp} className="mb-5 flex justify-center">
          <Badge variant="accent">Создано за 1 день с помощью AI</Badge>
        </motion.div>

        <motion.h1
          className="mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-bold tracking-tight sm:gap-x-4 sm:text-6xl lg:text-7xl"
          variants={heroStagger}
          aria-label="Vibe Coding Showcase"
        >
          {titleWords.map(({ text, gradient }) => (
            <motion.span
              key={text}
              variants={heroWord}
              className={cn(
                "inline-block",
                gradient &&
                  "bg-linear-to-r from-accent-primary via-accent-glow to-accent-secondary bg-clip-text text-transparent",
              )}
            >
              {text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={heroFadeUp}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-xl"
        >
          Интерактивный showcase современной веб-разработки: анимации, визуальные
          эффекты и живой UI — всё в одном экране.
        </motion.p>

        <motion.div
          variants={heroCta}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#animations"
              className={cn(
                "inline-flex w-full items-center justify-center rounded-full bg-accent-primary px-8 py-3.5",
                "text-sm font-semibold text-white shadow-lg shadow-accent-primary/25 sm:w-auto",
              )}
            >
              Смотреть демо
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border",
                "bg-glass-bg px-8 py-3.5 text-sm font-semibold backdrop-blur-sm sm:w-auto",
                "transition-colors hover:border-glass-border hover:bg-bg-elevated",
              )}
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#animations"
        variants={heroScrollHint}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="show"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-text-muted sm:bottom-8"
        aria-label="Прокрутить к демо"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
        </motion.span>
      </motion.a>
    </section>
  );
}
