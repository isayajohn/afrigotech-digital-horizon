import { Link } from "react-router-dom";
import { CreditCard, School, Smartphone, Globe, Users, TrendingUp, CheckCircle, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import logoWhite from "@/assets/afrigotech-logo-white.png";
import heroTeam from "@/assets/hero-team.jpg";
import heroStudent from "@/assets/hero-student.jpg";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import aminaPhoto from "@/assets/testimonials/amina-hassan.jpg";
import johnPhoto from "@/assets/testimonials/john-mwakasege.jpg";
import gracePhoto from "@/assets/testimonials/grace-kimaro.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { src: heroTeam, alt: "Afrigotech team working together" },
    { src: heroStudent, alt: "Students using technology" },
    { src: heroCollaboration, alt: "Technology collaboration" },
    { src: heroWorkspace, alt: "Modern workspace" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Smart Card System",
      description: "Financial tools for schools powered by Azam Pay",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Shule Kiganjani",
      description: "Complete SaaS for school administration",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Custom mobile applications for Android & iOS",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, scalable web systems",
    },
  ];

  const values = [
    { icon: <TrendingUp />, title: "Innovation", description: "Cutting-edge solutions" },
    { icon: <CheckCircle />, title: "Integrity", description: "Trust and transparency" },
    { icon: <Users />, title: "Impact", description: "Real-world results" },
  ];

  const testimonials = [
    {
      name: "Dr. Amina Hassan",
      role: "Principal, St. Mary's Secondary School",
      company: "Dar es Salaam",
      feedback: "Afrigotech's Smart Card System has revolutionized how we manage student payments. The integration with Azam Pay made everything seamless, and parents love the convenience.",
      photo: aminaPhoto,
    },
    {
      name: "John Mwakasege",
      role: "ICT Coordinator",
      company: "Dodoma International School",
      feedback: "The Shule Kiganjani platform transformed our school administration. We've saved countless hours on manual processes and can now focus more on student success.",
      photo: johnPhoto,
    },
    {
      name: "Grace Kimaro",
      role: "Director",
      company: "Mwanza Education Foundation",
      feedback: "Working with Afrigotech has been exceptional. Their team understood our needs and delivered a custom solution that exceeded our expectations. Highly professional!",
      photo: gracePhoto,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <img src={logoWhite} alt="Afrigotech" className="h-32 w-auto mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              We Empowering Possibilities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Empowering schools and communities in Tanzania through innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="text-lg px-8 group bg-white text-foreground hover:bg-white/90">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold mb-2">Trusted Partners</h2>
            <p className="text-muted-foreground">Working with leading organizations across Tanzania</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Neema", "Gospel", "Azam Pesa", "Zeno Pay", "Next SMS"].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 py-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">About Afrigotech</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2022 in Dodoma, Tanzania, Afrigotech is dedicated to empowering education and communities through digital innovation. We deliver impactful technology solutions that transform how schools operate and how students learn.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technology solutions for modern challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-none">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Why Choose Afrigotech</h2>
            <p className="text-lg text-muted-foreground">Our core values drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Schools Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Students Impacted</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by schools and organizations across Tanzania</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-hover transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-white text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="w-10 h-10 text-primary/20 mb-3" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-none shadow-soft">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Transform Your School?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of schools already benefiting from our innovative solutions
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Contact Us Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
