import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Meet the passionate innovators behind Afrigotech
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-none shadow-soft hover:shadow-hover transition-all group">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={member.photo} alt={member.name} />
                    <AvatarFallback className="bg-gradient-hero text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-display font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
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
