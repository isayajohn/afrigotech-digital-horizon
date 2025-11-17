import { ExternalLink, School, CreditCard, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      icon: <School className="w-12 h-12" />,
      title: "Shule Kiganjani",
      category: "School Management SaaS",
      description: "A comprehensive school management platform that streamlines administration, enhances communication, and improves educational outcomes.",
      outcomes: [
        "50+ schools using the platform",
        "10,000+ students managed",
        "95% user satisfaction rate",
        "40% reduction in admin time",
      ],
      link: "https://shulekiganjani.com",
      color: "primary",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Smart Student Card",
      category: "Digital Payment Solution",
      description: "An innovative smart card system powered by Azam Pay that enables cashless transactions and financial management in schools.",
      outcomes: [
        "Secure digital payments",
        "Real-time transaction tracking",
        "Parent-friendly payment system",
        "Reduced cash handling risks",
      ],
      link: "https://afrigotech.com",
      color: "accent",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Iarise AAC",
      category: "Assistive Communication Tool",
      description: "An augmentative and alternative communication application designed to help individuals with speech difficulties communicate effectively.",
      outcomes: [
        "Improved communication for users",
        "Customizable interface",
        "Multi-language support",
        "Accessible design",
      ],
      link: "https://iarise.app",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Transforming ideas into impactful digital solutions
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-hover transition-all max-w-6xl mx-auto">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-lg ${
                        project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                      } mb-6`}>
                        {project.icon}
                      </div>
                      <h2 className="text-3xl font-display font-bold mb-2">{project.title}</h2>
                      <p className="text-sm font-medium text-primary mb-4">{project.category}</p>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                          Preview Project
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-semibold mb-4">Key Outcomes:</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.outcomes.map((outcome, idx) => (
                          <div key={idx} className="bg-secondary/50 rounded-lg p-4">
                            <p className="font-medium">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">Making a difference across Tanzania</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Schools</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Major Products</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
