import { GlassCard } from "@/components/sections/VisualEffectsSection/GlassCard";
import { GlowCard } from "@/components/sections/VisualEffectsSection/GlowCard";
import { GradientCard } from "@/components/sections/VisualEffectsSection/GradientCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function VisualEffectsSection() {
  return (
    <SectionWrapper id="visual-effects">
      <SectionHeader
        badge="Visual Effects"
        title="Визуальные эффекты 2025–2026"
        subtitle="Glassmorphism, neon glow и градиенты — чистый CSS и Tailwind."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <GlassCard
          title="Glassmorphism"
          description="Полупрозрачный фон с backdrop-blur и тонкой границей."
        />
        <GlowCard
          title="Neon Glow"
          description="Свечение акцентного цвета с пульсацией при hover."
        />
        <GradientCard
          title="Mesh Gradient"
          description="Многослойный градиент с clip-text заголовком."
        />
      </div>
    </SectionWrapper>
  );
}
