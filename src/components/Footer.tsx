import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { navLinks, services, socialLinks } from "@/content/site";
import logoWhite from "@/assets/afrigotech-logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-12 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(135deg,hsl(var(--surface-strong)),hsl(214_29%_14%))]">
        <div className="grid gap-10 px-8 py-10 md:px-10 lg:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.7fr))] lg:py-14">
          <div>
            <img src={logoWhite} alt="Afrigotech" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white">
              Afrigotech builds digital systems that help schools and organisations operate with more clarity,
              trust, and momentum.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 bg-white/8 px-4 py-2 text-sm text-white hover:border-white/50 hover:bg-white/14"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigate</h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-white hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Capabilities</h3>
            <div className="mt-5 grid gap-3">
              {services.slice(0, 5).map((service) => (
                <p key={service.title} className="text-sm text-white">
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-white">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Area C, Dodoma, Tanzania
              </p>
              <a href="tel:+255743871360" className="flex items-center gap-3 text-white hover:text-primary">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                +255 743 871 360
              </a>
              <a href="mailto:info@afrigotech.com" className="flex items-center gap-3 text-white hover:text-primary">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                info@afrigotech.com
              </a>
              <Button asChild variant="outline" className="mt-3 justify-start border-white/30 bg-white/10 text-white hover:bg-white/16">
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="section-divider h-px" />
        <div className="flex flex-col gap-3 px-8 py-5 text-sm text-white/88 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {currentYear} Afrigotech. All rights reserved.</p>
          <p>Built to feel strategic, modern, and conversion-focused.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
