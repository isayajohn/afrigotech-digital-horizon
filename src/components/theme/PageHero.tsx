import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  aside?: ReactNode;
  className?: string;
}

const PageHero = ({ eyebrow, title, description, aside, className }: PageHeroProps) => {
  return (
    <section className={cn("relative overflow-hidden px-4 pb-12 pt-32 md:px-6 md:pb-20 md:pt-36", className)}>
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
        <div className="relative z-10">
          {eyebrow ? (
            <p className="page-hero-eyebrow mb-5 inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/86">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="page-hero-title max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="page-hero-description mt-6 max-w-2xl text-base leading-7 text-white/86 md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative z-10">{aside}</div>
      </div>
      <div className="absolute inset-x-4 bottom-0 mx-auto h-px max-w-7xl bg-white/12 md:inset-x-6" />
    </section>
  );
};

export default PageHero;
