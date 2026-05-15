"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

type MorphState = "idle" | "loading" | "success";

export function MorphButton() {
  const [state, setState] = useState<MorphState>("idle");

  const handleClick = () => {
    if (state !== "idle") return;

    setState("loading");
    setTimeout(() => {
      setState("success");
      setTimeout(() => setState("idle"), 1500);
    }, 1200);
  };

  const labels: Record<MorphState, string> = {
    idle: "Отправить",
    loading: "Загрузка...",
    success: "Готово!",
  };

  return (
    <motion.button
      type="button"
      layout
      onClick={handleClick}
      disabled={state !== "idle"}
      className="flex min-w-[140px] items-center justify-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-semibold text-bg-primary disabled:opacity-80"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="flex items-center gap-2"
        >
          {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {state === "success" && <Check className="h-4 w-4" />}
          {labels[state]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
