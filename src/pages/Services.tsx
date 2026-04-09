import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import CTASection from "@/components/theme/CTASection";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { capabilityPillars, services } from "@/content/site";

const Services = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Services"
        title="A clearer services architecture with stronger hierarchy and more confident presentation."
        description="The new system shifts these pages away from generic cards and toward a sharper agency-style offer structure."
        aside={
          <Card className="border-white/10 bg-white/6 text-white">
            <CardContent className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Service promise</p>
              <p className="mt-4 text-base leading-7 text-white/76">
                We combine product thinking, implementation quality, and ongoing support so your team gets more than
                a launch date.
              </p>
            </CardContent>
          </Card>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core offers"
            title="Every service now lives inside the same visual and content system."
            description="That makes the site easier to expand later without drifting away from the new theme."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="group surface-card border-none">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:-translate-y-1">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-6 space-y-3">
                    {service.features?.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-foreground/84">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why this format works"
            title="Service pages should explain value, not just list deliverables."
            description="These supporting blocks borrow the reference site’s confidence and pacing while staying true to Afrigotech’s positioning."
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityPillars.map((pillar) => (
              <Card key={pillar.title} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-card/75 p-8 shadow-soft md:p-10">
          <SectionHeading
            eyebrow="Need something specific?"
            title="The new CTA treatment makes service pages feel more deliberate."
            description="Instead of a generic closing box, this layout keeps momentum with stronger typography and clearer actions."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">See our work</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Want to carry this design language into lead generation and demo flows too?"
        description="The shared theme components now make that possible without rebuilding each page from scratch."
        primaryLabel="Request a demo"
        primaryTo="/demo"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />
    </div>
  );
};

export default Services;
