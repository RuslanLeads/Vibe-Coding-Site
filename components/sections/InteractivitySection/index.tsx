"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { ConfettiButton } from "@/components/sections/InteractivitySection/ConfettiButton";
import { MorphButton } from "@/components/sections/InteractivitySection/MorphButton";
import { ToggleSwitch } from "@/components/sections/InteractivitySection/ToggleSwitch";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function InteractivitySection() {
  const [counter, setCounter] = useState(0);
  const [slider, setSlider] = useState(50);

  return (
    <SectionWrapper id="interactivity" alternate>
      <SectionHeader
        badge="Interactivity"
        title="Живой интерфейс"
        subtitle="Кнопки, переключатели и элементы, которые реагируют на каждое действие."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-8">
          <h3 className="font-medium text-text-primary">Конфетти</h3>
          <ConfettiButton />
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-8">
          <h3 className="font-medium text-text-primary">Морфинг кнопки</h3>
          <MorphButton />
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-8">
          <h3 className="font-medium text-text-primary">Toggle</h3>
          <ToggleSwitch />
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-8">
          <h3 className="font-medium text-text-primary">Счётчик</h3>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCounter((c) => c - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated"
              aria-label="Уменьшить"
            >
              <Minus className="h-4 w-4" />
            </button>
            <motion.span
              key={counter}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-w-[3ch] text-center text-3xl font-bold tabular-nums"
            >
              {counter}
            </motion.span>
            <button
              type="button"
              onClick={() => setCounter((c) => c + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated"
              aria-label="Увеличить"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-8 md:col-span-2">
          <h3 className="font-medium text-text-primary">Слайдер</h3>
          <input
            type="range"
            min={0}
            max={100}
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="w-full max-w-md accent-accent-primary"
          />
          <motion.span
            key={slider}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-accent-primary"
          >
            {slider}%
          </motion.span>
        </div>
      </div>
    </SectionWrapper>
  );
}
