import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Metric } from "@/content/site";

interface MetricGridProps {
  items: Metric[];
  className?: string;
  compact?: boolean;
  animated?: boolean;
}

const MetricGrid = ({ items, className, compact = false, animated = false }: MetricGridProps) => {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (!animated) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [animated]);

  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        compact && "xl:grid-cols-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={`${item.value}-${item.label}`}
          className={cn(
            "rounded-[1.75rem] border border-border/70 bg-card/92 p-5 shadow-soft backdrop-blur transition duration-700 ease-out will-change-transform",
            animated && (isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"),
          )}
          style={animated ? { transitionDelay: `${index * 110}ms` } : undefined}
        >
          <div className="text-3xl font-semibold text-foreground md:text-4xl">{item.value}</div>
          <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/68">
            {item.label}
          </div>
          {item.detail ? <p className="mt-4 text-sm leading-6 text-foreground/72">{item.detail}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default MetricGrid;
