import { ExternalLink } from "lucide-react";

import CTASection from "@/components/theme/CTASection";
import MetricGrid from "@/components/theme/MetricGrid";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies, homeMetrics } from "@/content/site";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        className="[&_.page-hero-eyebrow]:border-border/70 [&_.page-hero-eyebrow]:bg-background/90 [&_.page-hero-eyebrow]:text-foreground/72 [&_.page-hero-title]:text-foreground [&_.page-hero-description]:text-foreground/82"
        eyebrow="Portfolio"
        title="Project storytelling that feels closer to a modern digital agency case-study flow."
        description="This refactor gives Afrigotech’s work more room to breathe with stronger narrative framing, clearer metrics, and a more polished portfolio rhythm."
        aside={<MetricGrid items={homeMetrics.slice(1)} compact />}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Sharper layouts for outcomes, not just features."
            description="Each case study now reads like a focused business story with enough structure to build credibility quickly."
          />

          <div className="mt-12 grid gap-6">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className={`overflow-hidden border-none ${
                  index % 2 === 0 ? "surface-card" : "surface-dark text-white"
                }`}
              >
                <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${index % 2 === 0 ? "text-primary" : "text-primary"}`}>
                      {study.category}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{study.title}</h2>
                    <p className={`mt-5 text-sm leading-7 ${index % 2 === 0 ? "text-muted-foreground" : "text-white/74"}`}>
                      {study.description}
                    </p>
                    <p
                      className={`mt-6 rounded-[1.5rem] border p-5 text-sm leading-7 ${
                        index % 2 === 0
                          ? "border-border/70 bg-background/75 text-foreground/80"
                          : "border-white/10 bg-white/6 text-white/78"
                      }`}
                    >
                      {study.impact}
                    </p>
                    <Button
                      asChild
                      variant={index % 2 === 0 ? "default" : "outline"}
                      className={index % 2 === 0 ? "mt-6" : "mt-6 border-white/14 bg-white/5 text-white hover:bg-white/10"}
                    >
                      <a href={study.link} target="_blank" rel="noreferrer">
                        Preview project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className={`rounded-[1.5rem] border p-5 ${
                          index % 2 === 0
                            ? "border-border/70 bg-card"
                            : "border-white/10 bg-white/6"
                        }`}
                      >
                        <div className="text-3xl font-semibold">{metric.value}</div>
                        <div className={`mt-2 text-xs uppercase tracking-[0.18em] ${index % 2 === 0 ? "text-muted-foreground" : "text-white/55"}`}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Build the next case study"
        title="Have a project that needs product design, software delivery, or a better digital customer experience?"
        description="The refreshed portfolio now points naturally into the contact and demo journeys, just like the reference site’s stronger conversion flow."
        primaryLabel="Talk to the team"
        primaryTo="/contact"
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default Portfolio;
