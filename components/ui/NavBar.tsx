"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Hero" },
  { href: "#animations", label: "Animations" },
  { href: "#interactivity", label: "Interactivity" },
  { href: "#visual-effects", label: "Effects" },
  { href: "#responsive", label: "Responsive" },
  { href: "#footer", label: "Footer" },
] as const;

const menuItemVariant = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  const linkClassName = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeId === id;

    return cn(
      "text-sm transition-colors",
      isActive
        ? "font-medium text-accent-primary"
        : "text-text-secondary hover:text-text-primary",
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg-primary/75 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-primary/60">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Основная навигация"
      >
        <Link
          href="#hero"
          className="shrink-0 text-lg font-semibold tracking-tight text-text-primary"
          onClick={closeMenu}
        >
          Vibe Coding
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={cn("rounded-lg px-3 py-2", linkClassName(link.href))}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-glass-bg text-text-primary md:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/80 md:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 px-4 py-4"
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? undefined : "show"}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={menuItemVariant}>
                  <Link
                    href={link.href}
                    className={cn("block rounded-lg px-3 py-2.5", linkClassName(link.href))}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
