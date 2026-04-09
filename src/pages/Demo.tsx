import { useState } from "react";

import CTASection from "@/components/theme/CTASection";
import PageHero from "@/components/theme/PageHero";
import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { demoHighlights } from "@/content/site";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request submitted",
      description: "Thanks. The team will reach out shortly to confirm a time that works for you.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      preferredDate: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Book a demo"
        title="A demo flow that feels more considered, premium, and easier to trust."
        description="This page now fits the broader refactor with stronger benefit framing, better form surfaces, and a more confident layout."
        aside={
          <div className="grid gap-4">
            {demoHighlights.slice(0, 2).map((highlight) => (
              <Card key={highlight.title} className="border-white/10 bg-white/6 text-white">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why book a demo"
            title="The lead-in now does more than repeat the form title."
            description="This section sets expectation and trust before the visitor commits to filling anything out."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {demoHighlights.map((highlight) => (
              <Card key={highlight.title} className="surface-card border-none">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-white/10 bg-white/6 text-white">
            <CardContent className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Demo request"
                title="Schedule a tailored walkthrough."
                description="Tell us who you are, what you’re interested in, and any context that helps us make the session useful."
                className="text-white [&_h2]:text-white [&_p]:text-white/72"
              />
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-2 block text-white/74">
                      Full name
                    </Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block text-white/74">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="mb-2 block text-white/74">
                      Phone number
                    </Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="mb-2 block text-white/74">
                      Organisation
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <Label htmlFor="service" className="mb-2 block text-white/74">
                      Service of interest
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smart-card">Smart card payments</SelectItem>
                        <SelectItem value="school-ops">School operations software</SelectItem>
                        <SelectItem value="mobile-apps">Mobile development</SelectItem>
                        <SelectItem value="web-platforms">Web platforms</SelectItem>
                        <SelectItem value="training">Training and enablement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredDate" className="mb-2 block text-white/74">
                      Preferred date
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block text-white/74">
                    What would you like us to cover?
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Share your goals, questions, or the workflows you want us to focus on."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit demo request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection
        eyebrow="Prefer to talk first?"
        title="You can still start with a simple enquiry if a demo feels too early."
        description="That keeps the funnel flexible while preserving the consistent visual direction of the redesign."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </div>
  );
};

export default Demo;
