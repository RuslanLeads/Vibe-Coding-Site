"use client";

import { useState } from "react";
import {
  DevicePreview,
  type DeviceType,
} from "@/components/sections/ResponsiveSection/DevicePreview";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const devices: { id: DeviceType; label: string }[] = [
  { id: "desktop", label: "Desktop" },
  { id: "tablet", label: "Tablet" },
  { id: "mobile", label: "Mobile" },
];

export function ResponsiveSection() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop");

  return (
    <SectionWrapper id="responsive" alternate>
      <SectionHeader
        badge="Responsive"
        title="Адаптивный дизайн"
        subtitle="Переключайте устройство и смотрите, как меняется раскладка контента."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {devices.map((device) => (
          <button
            key={device.id}
            type="button"
            onClick={() => setActiveDevice(device.id)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              activeDevice === device.id
                ? "bg-accent-primary text-white"
                : "border border-border bg-bg-secondary text-text-secondary hover:text-text-primary",
            )}
          >
            {device.label}
          </button>
        ))}
      </div>

      <DevicePreview device={activeDevice} />

      <p className="mt-8 text-center text-sm text-text-muted">
        Breakpoints: mobile &lt; 640px · tablet 640–1024px · desktop &gt; 1024px
      </p>
    </SectionWrapper>
  );
}
