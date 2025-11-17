import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Career = () => {
  const jobListings = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Dar es Salaam, Tanzania",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.",
      requirements: [
        "3+ years of experience with React and Node.js",
        "Strong understanding of database design and SQL",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Dar es Salaam, Tanzania",
      type: "Full-time",
      description: "Join our design team to create beautiful and intuitive user experiences for web and mobile applications.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio demonstrating design skills",
        "Understanding of user-centered design principles"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Dar es Salaam, Tanzania",
      type: "Full-time",
      description: "Help us grow our brand presence and reach more clients through effective digital marketing strategies.",
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Strong analytical and communication skills",
        "Knowledge of marketing automation tools"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Operations",
      location: "Dar es Salaam, Tanzania",
      type: "Full-time",
      description: "Lead software development projects from conception to delivery, ensuring timely and successful completion.",
      requirements: [
        "3+ years of project management experience",
        "PMP or Agile certification preferred",
        "Strong leadership and communication skills",
        "Experience with project management tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Build the future of technology with us. We're always looking for talented individuals who are passionate about innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work at Afrigotech?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous learning and development programs to help you advance your career.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Innovative Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work on cutting-edge technology projects that make a real impact.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Great Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join a diverse, collaborative team that values creativity and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base">
                          {job.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {job.department}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact">
                      <Button className="w-full md:w-auto">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always interested in meeting talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
