import { Briefcase, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import CTASection from "@/components/theme/CTASection";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cultureValues, jobListings } from "@/content/site";

const Career = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Careers"
        title="A hiring page that now matches the rest of the brand instead of feeling like a separate template."
        description="The goal here is consistency: strong hero, stronger roles list, and a CTA system that keeps momentum through the entire site."
        aside={
          <Card className="border-white/10 bg-white/6 text-white">
            <CardContent className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why join Afrigotech</p>
              <p className="mt-4 text-base leading-7 text-white/76">
                Work on useful digital products, learn in a collaborative environment, and help build technology that
                supports meaningful change.
              </p>
            </CardContent>
          </Card>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What it feels like"
            title="The culture section now supports the same premium theme system."
            description="This gives the careers page more personality and makes it feel connected to the rest of the website."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cultureValues.map((value) => (
              <Card key={value.title} className="surface-card border-none">
                <CardContent className="p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Open roles"
            title="Listings that feel more deliberate and easier to compare."
            description="We kept the practical job details, but the cards now carry the visual confidence of the new site direction."
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
          />

          <div className="mt-12 grid gap-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-7 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{job.department}</p>
                      <h2 className="mt-3 font-display text-3xl font-semibold">{job.title}</h2>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/74">{job.description}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit rounded-full bg-white/10 px-4 py-2 text-white">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {job.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {job.type}
                    </p>
                    <p className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {job.department}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {job.requirements.map((requirement) => (
                      <div key={requirement} className="rounded-[1.25rem] border border-white/10 bg-black/10 px-4 py-4 text-sm text-white/74">
                        {requirement}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="mt-6">
                    <Link to="/contact">Apply for this role</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Not seeing the perfect fit?"
        title="Strong candidates don’t always map neatly to a listed role."
        description="The refreshed CTA makes room for general outreach without making the page feel like an afterthought."
        primaryLabel="Send an introduction"
        primaryTo="/contact"
        secondaryLabel="Meet the team"
        secondaryTo="/team"
      />
    </div>
  );
};

export default Career;
