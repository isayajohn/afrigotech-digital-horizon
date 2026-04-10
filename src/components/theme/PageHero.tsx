import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  aside,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-32 md:px-6 md:pb-20 md:pt-36">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_minmax(380px,1fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-5">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white md:text-6xl lg:text-7xl tracking-tight">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/86 md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:max-w-md">
          {aside}
          {children}
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-0 mx-auto h-px max-w-7xl bg-white/12 md:inset-x-6" />
    </section>
  );
}
