"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((prev) => !prev)}
      className={cn(
        "relative h-8 w-14 rounded-full transition-colors",
        on ? "bg-accent-primary" : "bg-bg-elevated",
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow"
        animate={{ x: on ? 24 : 0 }}
      />
    </button>
  );
}
