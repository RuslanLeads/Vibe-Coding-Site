"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type DeviceType = "desktop" | "tablet" | "mobile";

interface DevicePreviewProps {
  device: DeviceType;
}

const frameSizes: Record<DeviceType, string> = {
  desktop: "max-w-2xl",
  tablet: "max-w-md",
  mobile: "max-w-xs",
};

export function DevicePreview({ device }: DevicePreviewProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={device}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "mx-auto w-full rounded-2xl border-4 border-border bg-bg-secondary p-4 shadow-xl",
          frameSizes[device],
        )}
      >
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>

        <div
          className={cn(
            "rounded-lg bg-bg-elevated p-4",
            device === "mobile" && "space-y-2",
            device === "tablet" && "grid grid-cols-2 gap-2",
            device === "desktop" && "grid grid-cols-3 gap-3",
          )}
        >
          <div className="h-8 rounded bg-accent-primary/40" />
          <div
            className={cn(
              "space-y-2",
              device === "desktop" && "col-span-2",
              device === "tablet" && "col-span-1",
            )}
          >
            <div className="h-3 w-full rounded bg-text-muted/30" />
            <div className="h-3 w-4/5 rounded bg-text-muted/20" />
            {device !== "mobile" && (
              <div className="h-3 w-3/5 rounded bg-text-muted/20" />
            )}
          </div>
          <div className="h-16 rounded-lg bg-accent-secondary/20" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
