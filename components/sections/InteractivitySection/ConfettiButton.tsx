"use client";

import { motion } from "framer-motion";
import { useConfetti } from "@/hooks/useConfetti";

export function ConfettiButton() {
  const { fire } = useConfetti();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fire({ x, y });
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white"
    >
      Запустить конфетти
    </motion.button>
  );
}
