import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/dheenadhayalan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dheenadhayalan", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/dheenadhayalan", label: "Instagram" },
  { icon: Mail, href: "mailto:dheenadhayalan@example.com", label: "Email" },
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
          background: "linear-gradient(90deg, transparent, rgba(0,240,255,0.3), rgba(139,92,246,0.3), transparent)",
          boxShadow: "0 0 10px rgba(0,240,255,0.1)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-display text-2xl font-black mb-2 neon-text-cyan"
              style={{ color: "#00F0FF" }}
            >
              VICTUS
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
              style={{ color: "rgba(0,240,255,0.5)" }}
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
              style={{ color: "rgba(0,240,255,0.5)" }}
            >
              CONNECT
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-9 h-9 rounded flex items-center justify-center transition-all duration-300 group"
                  style={{
                    background: "rgba(0,240,255,0.04)",
                    border: "1px solid rgba(0,240,255,0.12)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(0,240,255,0.5)",
                    color: "#00F0FF",
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            VICTUS SYSTEM &copy; 2026
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
            />
            <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
