import { useState } from "react";

import SectionHeading from "@/components/theme/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/content/site";
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
    <div className="min-h-screen px-4 pb-20 pt-32 md:px-6 md:pt-36">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your project."
          description="If you have a question, need a demo, or want to discuss a new idea, send us a message and we’ll respond as soon as we can."
        />
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[minmax(300px,0.42fr)_minmax(0,0.58fr)]">
        <Card className="surface-card border-none">
          <CardContent className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">Get in touch</h2>
            <div className="mt-8 grid gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-border/70 bg-background/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">{item.title}</p>
                  {item.link ? (
                    <a href={item.link} className="mt-2 block text-lg text-foreground hover:text-primary">
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg text-foreground">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/55">Follow us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-card">
          <CardContent className="p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">Send a message</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-foreground/68">
              Share a little about what you need and we’ll point you to the right next step.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/72">
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
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/72">
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
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/72">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, question, or the kind of support you need."
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>

              <Button type="submit" size="lg">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
