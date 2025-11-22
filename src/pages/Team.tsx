import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import isayaPhoto from "@/assets/team/isaya-kapama.jpg";
import benjaminPhoto from "@/assets/team/benjamin-athanas.jpg";
import mosesPhoto from "@/assets/team/moses-nyatega.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Isaya Kapama",
      role: "Co-Founder & CTO",
      bio: "Visionary technologist with a passion for creating impactful solutions in education. Leads Afrigotech's technical strategy and product development.",
      linkedin: "https://linkedin.com/in/isaya-kapama",
      email: "isaya@afrigotech.com",
      photo: isayaPhoto,
    },
    {
      name: "Benjamin Athanas",
      role: "Head of Tech",
      bio: "Experienced software engineer specializing in full-stack development. Drives the technical execution of Afrigotech's innovative solutions.",
      linkedin: "https://linkedin.com/in/benjamin-athanas",
      email: "benjamin@afrigotech.com",
      photo: benjaminPhoto,
    },
    {
      name: "Moses Nyatega",
      role: "Head of Marketing",
      bio: "Strategic marketing leader with expertise in digital growth and brand development. Expands Afrigotech's reach and impact across Tanzania.",
      linkedin: "https://linkedin.com/in/moses-nyatega",
      email: "moses@afrigotech.com",
      photo: mosesPhoto,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Team Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">
              THE GENIUSES BEHIND OUR WORK
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-[#FDB515]">OUR TEAM</span>
            </h1>
            <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className="h-px bg-border flex-1" />
              <div className="w-2 h-2 bg-[#FDB515] rotate-45" />
              <div className="h-px bg-border flex-1" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-[#FDB515] hover:bg-[#FDB515]/10 rounded-full transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-[#FDB515] hover:bg-[#FDB515]/10 rounded-full transition-all"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Photo Section */}
                      <div className="relative">
                        <div className="absolute inset-0 border-4 border-[#FDB515] rounded-lg translate-x-4 translate-y-4" />
                        <div className="relative bg-white border-4 border-[#FDB515] rounded-lg overflow-hidden aspect-[3/4]">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="relative pl-8">
                        {/* Vertical Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FDB515]" />
                        
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h2>
                            <div className="h-px bg-[#FDB515] w-16 mb-4" />
                            <p className="text-muted-foreground text-lg">{member.role}</p>
                          </div>

                          {/* Social Icons */}
                          <div className="flex gap-3">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#FDB515] hover:text-[#FDB515] transition-all"
                              aria-label="LinkedIn"
                            >
                              <Linkedin size={18} />
                            </a>
                            <a
                              href={`mailto:${member.email}`}
                              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[#FDB515] hover:text-[#FDB515] transition-all"
                              aria-label="Email"
                            >
                              <Mail size={18} />
                            </a>
                          </div>

                          {/* Bio */}
                          <p className="text-muted-foreground leading-relaxed">{member.bio}</p>

                          {/* View Profile Button */}
                          <Button
                            variant="outline"
                            className="border-[#FDB515] text-[#FDB515] hover:bg-[#FDB515] hover:text-white"
                          >
                            VIEW PROFILE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-[#FDB515] w-8"
                      : "bg-border hover:bg-[#FDB515]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-none shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and social impact. If you're interested in joining Afrigotech, we'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground">What makes Afrigotech a great place to grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">Work on cutting-edge projects that make real impact</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Growth Mindset</h3>
                <p className="text-muted-foreground">Continuous learning and professional development</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">Work with passionate, talented team members</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
