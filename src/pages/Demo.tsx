import SectionHeading from "@/components/theme/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { demoHighlights, homeMetrics } from "@/content/site";

const Demo = () => {
  return (
    <div className="min-h-screen px-4 pb-20 pt-32 md:px-6 md:pt-36">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Book a demo"
          title="See how Afrigotech can support your team."
          description="Tell us a little about your organisation and what you want to explore. We’ll prepare a focused walkthrough around the workflows and products most relevant to you."
        />
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[minmax(300px,0.42fr)_minmax(0,0.58fr)]">
        <Card className="surface-card border-none">
          <CardContent className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">Why book a demo</h2>

            <div className="mt-8 grid gap-5">
              {demoHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-border/70 bg-background/70 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">Proof points</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {homeMetrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="rounded-[1.25rem] border border-border/70 bg-background/70 p-5">
                    <div className="text-3xl font-semibold text-foreground">{metric.value}</div>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
                      {metric.label}
                    </p>
                    {metric.detail ? (
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-card">
          <CardContent className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">Request a demo</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-foreground/68">
              Use the Book a Demo button in the navigation to open the request form from anywhere on the site.
            </p>

            <div className="mt-8 rounded-[1.25rem] border border-border/70 bg-background/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">What happens next</p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-[1rem] border border-border/70 bg-background px-4 py-3">
                  <p className="text-sm font-medium text-foreground">You share your context</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">Tell us what you want to explore and which workflows matter most.</p>
                </div>
                <div className="rounded-[1rem] border border-border/70 bg-background px-4 py-3">
                  <p className="text-sm font-medium text-foreground">We prepare the walkthrough</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">The demo is shaped around relevant products, questions, and next steps.</p>
                </div>
                <div className="rounded-[1rem] border border-border/70 bg-background px-4 py-3">
                  <p className="text-sm font-medium text-foreground">You get a focused session</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">We keep the conversation practical, clear, and useful for decision-making.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Demo;
