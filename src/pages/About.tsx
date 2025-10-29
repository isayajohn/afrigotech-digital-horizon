import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions that address real-world challenges in education and community development.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Integrity",
      description: "Trust and transparency are the foundation of our relationships with clients, partners, and communities we serve.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Impact",
      description: "Every solution we create is designed to make a measurable difference in people's lives and communities.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Collaboration",
      description: "We believe in the power of partnerships and work closely with stakeholders to achieve shared goals.",
    },
  ];

  const milestones = [
    { year: "2022", event: "Afrigotech founded in Dodoma, Tanzania" },
    { year: "2023", event: "Launched Shule Kiganjani platform" },
    { year: "2023", event: "Introduced Smart Card System with Azam Pay integration" },
    { year: "2024", event: "Expanded services to 50+ schools across Tanzania" },
    { year: "2025", event: "Launched Iarise AAC assistive technology" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Afrigotech</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Transforming education and communities through innovative technology since 2022
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-none shadow-soft">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Founded in 2022 in the heart of Tanzania's capital, Dodoma, Afrigotech was born from a vision to bridge the digital divide in education and community services across Tanzania.
                  </p>
                  <p>
                    We recognized that many schools and communities struggled with outdated administrative processes, limited access to technology, and a lack of digital infrastructure. Our founders, driven by a passion for innovation and social impact, set out to create solutions that would empower these institutions.
                  </p>
                  <p>
                    Today, Afrigotech serves over 50 schools and thousands of students across Tanzania, providing comprehensive technology solutions that streamline operations, enhance learning experiences, and create new opportunities for growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To empower education and communities through digital innovation, creating accessible, impactful technology solutions that transform lives across Tanzania.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To become Tanzania's leading provider of impactful technology solutions, setting the standard for innovation in education and community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-none">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our growth</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-hover transition-all">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <p className="text-lg">{milestone.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
