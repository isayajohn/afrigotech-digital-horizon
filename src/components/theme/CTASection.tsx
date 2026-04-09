import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

const CTASection = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) => {
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/12 bg-[linear-gradient(135deg,hsl(var(--surface-strong)),hsl(214_28%_14%))] p-8 shadow-soft md:p-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            {eyebrow ? (
              <p className="mb-4 inline-flex items-center rounded-full border border-white/16 bg-white/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/86">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="max-w-2xl font-display text-3xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 md:text-lg">{description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild size="lg" className="min-w-[190px]">
              <Link to={primaryTo}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryLabel && secondaryTo ? (
              <Button asChild size="lg" variant="outline" className="min-w-[190px] border-white/18 bg-white/5 text-white hover:bg-white/10">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
