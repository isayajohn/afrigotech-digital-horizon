import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
import logoBlue from "@/assets/afrigotech-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? "border-border/85 bg-background/96 shadow-soft backdrop-blur-xl"
            : "border-border/75 bg-background/92 shadow-soft backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoBlue} alt="Afrigotech" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-foreground text-background"
                    : "text-foreground/90 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="button-glow">
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-soft lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-border/70 px-4 pb-4 pt-2 lg:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive(link.path) ? "bg-foreground text-background" : "bg-background/72 text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
