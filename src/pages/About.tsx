import CTASection from "@/components/theme/CTASection";
import MetricGrid from "@/components/theme/MetricGrid";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMilestones, capabilityPillars, homeMetrics, processSteps } from "@/content/site";

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        className="[&_.page-hero-eyebrow]:border-border/70 [&_.page-hero-eyebrow]:bg-background/90 [&_.page-hero-eyebrow]:text-foreground/72 [&_.page-hero-title]:text-foreground [&_.page-hero-description]:text-foreground/82"
        eyebrow="About Afrigotech"
        title="A digital team focused on useful systems, trusted relationships, and measurable progress."
        description="The redesign keeps your story intact while presenting it with stronger pacing, better hierarchy, and a more confident agency feel."
        aside={<MetricGrid items={homeMetrics.slice(0, 2)} compact />}
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <Card className="surface-card border-none">
            <CardContent className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Our story"
                title="Built in Dodoma to close digital gaps with practical product thinking."
                description="Afrigotech started with a simple observation: schools and community-focused organisations were carrying operational complexity that better systems could reduce. Since 2022, the team has focused on software, payments, and delivery support that help people work more clearly every day."
              />
              <p className="mt-6 text-sm leading-8 text-muted-foreground">
                This refactor leans into that positioning. Rather than looking like a generic software brochure, the site
                now tells a more mature story about strategy, execution, and trust.
              </p>
            </CardContent>
          </Card>

          <Card className="surface-dark border-none">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">What guides the work</p>
              <div className="mt-8 grid gap-6">
                {capabilityPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <h3 className="font-display text-2xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Journey"
            title="Milestones presented in a clearer, more editorial timeline."
            description="The new timeline treatment is easier to scan and feels more aligned with the overall premium direction."
            align="center"
          />
          <div className="mt-12 grid gap-5">
            {aboutMilestones.map((milestone) => (
              <Card key={`${milestone.year}-${milestone.event}`} className="surface-card border-none">
                <CardContent className="grid gap-6 p-6 md:grid-cols-[120px_minmax(0,1fr)] md:items-center md:p-8">
                  <div className="rounded-[1.25rem] bg-foreground px-5 py-5 text-center font-display text-3xl font-semibold text-background">
                    {milestone.year}
                  </div>
                  <p className="text-base leading-7 text-foreground/84">{milestone.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="A process designed to stay close to outcomes."
            description="This section now reinforces confidence in the team’s operating model, not just the product list."
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{step.number}</div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Looking for a partner that can shape, build, and support your next digital initiative?"
        description="Afrigotech’s story is strongest when it connects directly to a clear next step. The new theme system keeps that invitation consistent."
        primaryLabel="Contact Afrigotech"
        primaryTo="/contact"
        secondaryLabel="See services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default About;
