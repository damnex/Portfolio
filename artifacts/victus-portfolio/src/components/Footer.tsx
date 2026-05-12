import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/damnex", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dheenadhayalan-muruganantham/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/dhee._.capturez/?hl=en", label: "Instagram" },
  { icon: Mail, href: "mailto:dheena20022007@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/919042492190", label: "WhatsApp" },
];

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 px-6">
      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(47,128,255,0.3), rgba(245,158,11,0.3), transparent)",
          boxShadow: "0 0 10px rgba(47,128,255,0.1)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-display text-2xl font-black mb-2 neon-text-cyan"
              style={{ color: "#2F80FF" }}
            >
              DHEENA
            </div>
            <p
              className="font-mono text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)", maxWidth: "220px" }}
            >
              Crafting futuristic digital experiences through design and technology.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              className="font-mono text-xs tracking-widest mb-4"
              style={{ color: "rgba(47,128,255,0.5)" }}
            >
              NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                  onClick={() => scrollTo(link)}
                  className="text-left font-mono text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div
              className="font-mono text-xs tracking-widest mb-4"
              style={{ color: "rgba(47,128,255,0.5)" }}
            >
              CONNECT
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-9 h-9 rounded flex items-center justify-center transition-all duration-300 group"
                  style={{
                    background: "rgba(47,128,255,0.04)",
                    border: "1px solid rgba(47,128,255,0.12)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            DHEENA PORTFOLIO &copy; 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
