import { cn } from "@/lib/utils";
import type { Metric } from "@/content/site";

interface MetricGridProps {
  items: Metric[];
  className?: string;
  compact?: boolean;
}

const MetricGrid = ({ items, className, compact = false }: MetricGridProps) => {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        compact && "xl:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={`${item.value}-${item.label}`}
          className="rounded-[1.75rem] border border-border/70 bg-card/92 p-5 shadow-soft backdrop-blur"
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
