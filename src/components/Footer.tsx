import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/afrigotech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Afrigotech" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-4">
              Empowering schools and communities through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/afrigotech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/afrigotech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/afrigotech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Smart Card System</li>
              <li>School Management</li>
              <li>App Development</li>
              <li>Web Development</li>
              <li>IT Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Area C, Dodoma, Tanzania</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+255743871360" className="text-muted-foreground hover:text-primary transition-colors">
                  +255 743 871 360
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@afrigotech.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@afrigotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Afrigotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
