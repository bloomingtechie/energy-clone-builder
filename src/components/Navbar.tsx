import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Team", path: "/our-team" },
  { label: "Investors Relations", path: "/investors-relation" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur shadow-sm">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Clean Energy Local Currency Fund"
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/clean-energy-lc-fund"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:info@cleanenergyfund.ng"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t">
          <nav className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
