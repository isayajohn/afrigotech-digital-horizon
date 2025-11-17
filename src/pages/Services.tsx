import { CreditCard, School, Smartphone, Globe, GraduationCap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Smart Card Services",
      description: "Powered by Azam Pay integration, our smart card system revolutionizes school financial management.",
      features: [
        "Digital payment solutions for schools",
        "Secure student identification cards",
        "Cashless transactions on campus",
        "Real-time financial tracking",
        "Parent-friendly payment options",
      ],
    },
    {
      icon: <School className="w-12 h-12" />,
      title: "School Management System",
      description: "Shule Kiganjani is a comprehensive SaaS platform that transforms school administration.",
      features: [
        "Student information management",
        "Teacher and staff management",
        "Automated attendance tracking",
        "Grade and report card generation",
        "Parent-teacher communication portal",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Custom mobile applications tailored to your specific needs and goals.",
      features: [
        "Native Android & iOS development",
        "Cross-platform solutions",
        "User-centric design",
        "Cloud integration",
        "Ongoing maintenance and support",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Scalable, modern web systems built with cutting-edge technologies.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "Content management systems",
        "Custom web applications",
        "API development and integration",
      ],
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "IT Consultation & Training",
      description: "Empower your team with technical knowledge and strategic IT guidance.",
      features: [
        "Technology strategy consultation",
        "Youth IT training programs",
        "Business digital transformation",
        "Cybersecurity awareness",
        "Software training and support",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower schools and communities
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-none shadow-soft hover:shadow-hover transition-all group"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <h3 className="text-sm font-semibold text-primary">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="mt-auto">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-none shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your school or business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg">Contact Us</Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline">View Our Work</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
