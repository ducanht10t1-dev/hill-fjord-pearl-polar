import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: ComponentProps<"span"> & { tone?: "muted" | "navy" | "ok" | "warn" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tone === "muted" && "bg-bg-elevated text-muted",
        tone === "navy" && "bg-navy text-navy-fg",
        tone === "ok" && "bg-ok-bg text-ok",
        tone === "warn" && "bg-warn-bg text-warn",
        className,
      )}
      {...props}
    />
  );
}
