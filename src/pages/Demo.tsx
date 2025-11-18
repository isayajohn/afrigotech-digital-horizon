import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Building2, Users, CheckCircle } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Demo request submitted:", formData);
    
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you shortly to schedule your personalized demo.",
    });

    // Reset form
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Request a Demo</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            See how Afrigotech's solutions can transform your organization
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Schedule Flexibility</h3>
                <p className="text-sm text-muted-foreground">Choose a time that works for you</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personalized Tour</h3>
                <p className="text-sm text-muted-foreground">Tailored to your needs</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">We'll contact you within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-none shadow-soft text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">No Commitment</h3>
                <p className="text-sm text-muted-foreground">Free consultation, no strings attached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-card border-none shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display">Schedule Your Demo</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and our team will get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+255 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      placeholder="School/Company Name"
                      value={formData.organization}
                      onChange={(e) => handleChange("organization", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smart-card">Smart Card System</SelectItem>
                        <SelectItem value="shule-kiganjani">Shule Kiganjani</SelectItem>
                        <SelectItem value="app-development">App Development</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="it-training">IT Training</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your needs and what you'd like to see in the demo..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Demo Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">What to Expect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            During your personalized demo, our team will showcase how our solutions can address your specific needs. 
            You'll see real-world examples and have the opportunity to ask questions about implementation, pricing, 
            and support.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">30-45</div>
              <div className="text-muted-foreground">Minutes Duration</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Personalized</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Cost to You</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
