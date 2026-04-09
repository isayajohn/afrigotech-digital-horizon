import { useState } from "react";

import CTASection from "@/components/theme/CTASection";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks, trustMetrics } from "@/content/site";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. The Afrigotech team will get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Contact"
        title="A contact page that feels like part of the same strategic brand system."
        description="The layout now borrows the stronger lead-generation rhythm from the reference site: high trust, clear action, and less visual clutter."
        aside={
          <div className="grid gap-4">
            {trustMetrics.slice(0, 2).map((metric) => (
              <Card key={metric.label} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-semibold">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">{metric.label}</div>
                  {metric.detail ? <p className="mt-3 text-sm leading-7 text-white/72">{metric.detail}</p> : null}
                </CardContent>
              </Card>
            ))}
          </div>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <Card className="surface-dark border-none text-white">
            <CardContent className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Start the conversation"
                title="Tell us what you’re building or where your current experience is falling short."
                description="We’ll use that context to suggest the right next step, whether it’s a demo, a scoped engagement, or a clearer product direction."
                className="text-white [&_h2]:text-white [&_p]:text-white/72"
              />
              <div className="mt-10 grid gap-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="mt-2 block text-sm leading-7 text-white/78 hover:text-white">
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm leading-7 text-white/78">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/74 hover:border-white/24 hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-card">
            <CardContent className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Message us"
                title="A cleaner enquiry flow with stronger form styling."
                description="Inputs now inherit the same rounded, premium surface treatment as the rest of the redesign."
              />
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/78">
                    Your name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/78">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/78">
                    Tell us about your project
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What are you trying to improve, build, or launch?"
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        eyebrow="Prefer a walkthrough?"
        title="If you already know which product area you want to explore, book a live demo instead."
        description="That keeps the conversion path clear without forcing every visitor into the same contact format."
        primaryLabel="Book a demo"
        primaryTo="/demo"
        secondaryLabel="See services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default Contact;
