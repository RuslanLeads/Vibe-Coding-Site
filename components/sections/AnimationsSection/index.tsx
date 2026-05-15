"use client";

import { motion } from "framer-motion";
import { AnimationCard } from "@/components/sections/AnimationsSection/AnimationCard";
import { animationCards } from "@/components/sections/AnimationsSection/cards";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/animations";

export function AnimationsSection() {
  return (
    <SectionWrapper id="animations">
      <SectionHeader
        badge="Animations"
        title="Framer Motion в действии"
        subtitle="Каждая карточка — живое демо. Кликните, чтобы перезапустить анимацию."
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {animationCards.map((card) => (
          <motion.div key={card.id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
            <AnimationCard card={card} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
