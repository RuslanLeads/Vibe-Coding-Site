"use client";

import confetti from "canvas-confetti";
import { useCallback } from "react";

export function useConfetti() {
  const fire = useCallback((origin?: { x: number; y: number }) => {
    const defaults = {
      spread: 70,
      ticks: 100,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 80,
    };

    if (origin) {
      void confetti({
        ...defaults,
        origin,
      });
      return;
    }

    void confetti({
      ...defaults,
      origin: { x: 0.5, y: 0.5 },
    });
  }, []);

  return { fire };
}
