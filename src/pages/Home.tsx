import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import CTASection from "@/components/theme/CTASection";
import MetricGrid from "@/components/theme/MetricGrid";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  capabilityPillars,
  caseStudies,
  heroGallery,
  homeMetrics,
  partnerLogos,
  processSteps,
  services,
  teamMembers,
  testimonials,
  trustMetrics,
} from "@/content/site";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Transform Education"
        title="Unlock Your School's Digital Future"
        description="Streamline operations, engage students, and scale with confidence using our comprehensive software solutions designed for African institutions."
        aside={
          <div className="space-y-6 lg:max-w-md">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
              <img
                src={heroGallery[3]?.src}
                alt={heroGallery[3]?.alt ?? "Hero image"}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-600/20 to-transparent" />
            </div>
          </div>
        }
      >
        <div className="mt-6 flex flex-col gap-3 pt-2 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="flex-1 bg-gradient-to-r from-primary to-accent font-semibold text-primary-foreground shadow-glow hover:shadow-glow"
          >
            <Link to="/demo">Book a Demo</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="flex-1 border-white/50 bg-white/5 font-semibold text-white backdrop-blur-sm hover:bg-white/10"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </PageHero>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <MetricGrid items={homeMetrics} animated />
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-soft md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading
              eyebrow="Trusted by partners"
              title="A modern digital presence backed by real work on the ground."
              description="We kept Afrigotech's proof points front and center so the redesign feels sharper without losing credibility."
            />

            <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-24 items-center justify-center rounded-[1.5rem] border border-border/70 bg-white px-5 shadow-soft"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Theme-driven sections that present services like a premium digital partner."
            description="The refactor introduces stronger card hierarchy, cleaner copy blocks, and reusable section patterns so the whole site feels intentionally designed."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilityPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card key={pillar.title} className="surface-card border-none">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{pillar.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className="group border-none bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--surface-soft)))]"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>

                    {!!service.features?.length && (
                      <div className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 text-sm text-foreground/84"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link to="/services">
                Explore all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="surface-dark px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="A more editorial way to showcase delivery impact."
            description="The new layout borrows the reference site's stronger portfolio storytelling while keeping your existing products and outcomes."
            align="center"
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <Card
                key={study.title}
                className="border-white/10 bg-white/6 text-white backdrop-blur"
              >
                <CardContent className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {study.category}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold">{study.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{study.description}</p>
                  <p className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/6 p-4 text-sm leading-7 text-white/76">
                    {study.impact}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.25rem] border border-white/10 bg-black/10 p-4"
                      >
                        <div className="text-2xl font-semibold">{metric.value}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-white/14 bg-white/5 text-white hover:bg-white/10"
                  >
                    <a href={study.link} target="_blank" rel="noreferrer">
                      Preview project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Proof and process"
              title="More trust, less noise."
              description="This mirrors the reference site's rhythm: evidence first, then a clear explanation of how the team works."
            />

            <div className="mt-8">
              <MetricGrid items={trustMetrics} compact />
            </div>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step) => (
              <Card key={step.number} className="surface-card border-none">
                <CardContent className="flex gap-5 p-6 md:p-7">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-background">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client voices"
            title="Testimonials now feel part of the brand system instead of separate widgets."
            description="Rounded portrait cards and restrained copy blocks make the social proof section feel much more premium."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="surface-card border-none">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground">
                    &quot;{testimonial.feedback}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-card/75 p-8 shadow-soft md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <SectionHeading
              eyebrow="People behind the work"
              title="The team section now supports a stronger agency-style identity."
              description="Instead of an isolated carousel treatment, the team is presented as a unified editorial block with clearer role and focus information."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden border-none bg-background">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-56 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {member.focus}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Ready to carry this new theme system across the full Afrigotech website?"
        description="The shared components are now set up to support service pages, portfolio storytelling, contact flows, and career content in one consistent visual language."
        primaryLabel="Book a demo"
        primaryTo="/demo"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />
    </div>
  );
}