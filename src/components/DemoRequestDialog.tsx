import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestDialogProps {
  trigger: ReactNode;
}

const DemoRequestDialog = ({ trigger }: DemoRequestDialogProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    country: "",
    phone: "",
    company: "",
    teamSize: "",
    message: "",
    subscribed: true,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request submitted",
      description: "Thanks for reaching out. The Afrigotech team will confirm your demo shortly.",
    });
    setIsOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      country: "",
      phone: "",
      company: "",
      teamSize: "",
      message: "",
      subscribed: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-[1.5rem] border-none bg-card p-0">
        <div className="p-8 md:p-10">
          <DialogHeader className="text-left">
            <DialogTitle className="font-display text-2xl text-foreground">Request a demo</DialogTitle>
            <DialogDescription className="mt-2 max-w-2xl text-base leading-7 text-foreground/68">
              Share a little about your team and we’ll tailor the session to the right use cases.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="mb-2 block text-foreground/72">
                  First name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="lastName" className="mb-2 block text-foreground/72">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="email" className="mb-2 block text-foreground/72">
                  Work email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="jobTitle" className="mb-2 block text-foreground/72">
                  Job title
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="Ex: School director"
                  value={formData.jobTitle}
                  onChange={(e) => handleChange("jobTitle", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="country" className="mb-2 block text-foreground/72">
                  Country
                </Label>
                <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tanzania">Tanzania</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="uganda">Uganda</SelectItem>
                    <SelectItem value="rwanda">Rwanda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2 block text-foreground/72">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  placeholder="+255 700 123456"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="company" className="mb-2 block text-foreground/72">
                  Organisation
                </Label>
                <Input
                  id="company"
                  placeholder="Your organisation"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="teamSize" className="mb-2 block text-foreground/72">
                  Number of employees
                </Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger id="teamSize">
                    <SelectValue placeholder="Choose from the list" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 - 10</SelectItem>
                    <SelectItem value="11-50">11 - 50</SelectItem>
                    <SelectItem value="51-200">51 - 200</SelectItem>
                    <SelectItem value="200+">200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="mb-2 block text-foreground/72">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us what you want to see in the demo."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-foreground/70">
              <Checkbox
                checked={formData.subscribed}
                onCheckedChange={(checked) => handleChange("subscribed", checked === true)}
                className="mt-0.5"
              />
              <span>Keep me updated with Afrigotech product news and insights</span>
            </label>

            <Button type="submit" size="lg">
              Submit demo request
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
