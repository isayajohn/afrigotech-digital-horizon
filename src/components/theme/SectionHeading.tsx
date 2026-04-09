import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <div className={cn("max-w-3xl", isCentered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 inline-flex items-center rounded-full border border-border/70 bg-background/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-foreground/72 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
