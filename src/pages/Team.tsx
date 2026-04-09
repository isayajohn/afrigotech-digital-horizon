import { Linkedin, Mail } from "lucide-react";

import CTASection from "@/components/theme/CTASection";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cultureValues, teamMembers } from "@/content/site";

const Team = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Team"
        title="A more cohesive team page that feels intentional instead of decorative."
        description="The carousel has been replaced with a cleaner editorial roster so the people behind Afrigotech feel grounded, credible, and easier to scan."
        aside={
          <Card className="border-white/10 bg-white/6 text-white">
            <CardContent className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What the redesign changes</p>
              <p className="mt-4 text-base leading-7 text-white/76">
                Clearer role framing, stronger card treatment, and better content structure that aligns with the new
                site-wide brand system.
              </p>
            </CardContent>
          </Card>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core team"
            title="Presented like a modern agency team block."
            description="Each profile now carries role, focus, and quick contact links in the same visual language as the rest of the site."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-none bg-card">
                <img src={member.photo} alt={member.name} className="h-80 w-full object-cover" />
                <CardContent className="p-7">
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold">{member.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
                  <p className="mt-5 rounded-[1.25rem] bg-secondary/70 px-4 py-4 text-sm leading-7 text-foreground/82">
                    {member.focus}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href={member.links.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <a href={`mailto:${member.links.email}`}>
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
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
            eyebrow="Culture"
            title="Why the team section matters to the overall theme."
            description="On the reference site, trust comes from seeing both the work and the people behind it. This treatment gives Afrigotech the same advantage."
            className="text-white [&_h2]:text-white [&_p]:text-white/72"
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cultureValues.map((value) => (
              <Card key={value.title} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join us"
        title="Want to work with a team that cares about thoughtful products and real outcomes?"
        description="The careers flow now inherits the same visual system, so the site feels continuous from team story to hiring pages."
        primaryLabel="See open roles"
        primaryTo="/career"
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />
    </div>
  );
};

export default Team;
