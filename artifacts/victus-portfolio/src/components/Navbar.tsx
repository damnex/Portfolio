import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        data-testid="navbar"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 5, 5, 0.92)"
            : "rgba(5, 5, 5, 0.5)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(0, 240, 255, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div
                className="w-8 h-8 rounded border flex items-center justify-center"
                style={{ borderColor: "rgba(0,240,255,0.4)", background: "rgba(0,240,255,0.05)" }}
              >
                <span
                  className="font-display text-sm font-bold neon-text-cyan"
                  style={{ color: "#00F0FF" }}
                >
                  V
                </span>
              </div>
              <div
                className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
              />
            </div>
            <span
              className="font-display text-lg font-bold tracking-widest neon-text-cyan"
              style={{ color: "#00F0FF" }}
            >
              VICTUS
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  data-testid={`nav-link-${id}`}
                  onClick={() => scrollTo(link.href)}
                  className="relative font-sans text-xs tracking-widest uppercase transition-all duration-300 group"
                  style={{
                    color: isActive ? "#00F0FF" : "rgba(255,255,255,0.6)",
                    textShadow: isActive
                      ? "0 0 8px rgba(0,240,255,0.7)"
                      : "none",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #00F0FF, transparent)",
                      width: isActive ? "100%" : "0%",
                      boxShadow: "0 0 6px rgba(0,240,255,0.5)",
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, rgba(0,240,255,0.5), transparent)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            data-testid="nav-menu-toggle"
            className="md:hidden p-2"
            style={{ color: "#00F0FF" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center md:hidden"
            style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  data-testid={`nav-mobile-${link.href.replace("#", "")}`}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-2xl tracking-widest uppercase"
                  style={{ color: active === link.href.replace("#", "") ? "#00F0FF" : "rgba(255,255,255,0.7)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
