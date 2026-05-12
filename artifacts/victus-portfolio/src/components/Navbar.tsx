import { useState, useEffect, useRef } from "react";
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
  const scrolledRef = useRef(false);
  const activeRef = useRef("home");
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateNavState = () => {
      const nextScrolled = window.scrollY > 50;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          if (sections[i] !== activeRef.current) {
            activeRef.current = sections[i];
            setActive(sections[i]);
          }
          break;
        }
      }
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateNavState();
      });
    };

    updateNavState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 5, 5, 0.92)"
            : "rgba(5, 5, 5, 0.5)",
          borderBottom: scrolled
            ? "1px solid rgba(47, 128, 255, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 18px rgba(0, 0, 0, 0.35)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("#home")}
            className="group"
          >
            <span
              className="font-display text-base sm:text-lg font-bold tracking-widest neon-text-cyan transition-colors duration-300 group-hover:text-white"
              style={{ color: "#2F80FF" }}
            >
              DHEENADHAYALAN M
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
                    color: isActive ? "#2F80FF" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #2F80FF, transparent)",
                      width: isActive ? "100%" : "0%",
                      boxShadow: "0 0 6px rgba(47,128,255,0.5)",
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, rgba(47,128,255,0.5), transparent)",
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
            style={{ color: "#2F80FF" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col items-center justify-center md:hidden"
          style={{ background: "rgba(5,5,5,0.97)" }}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                data-testid={`nav-mobile-${link.href.replace("#", "")}`}
                onClick={() => scrollTo(link.href)}
                className="font-display text-2xl tracking-widest uppercase"
                style={{ color: active === link.href.replace("#", "") ? "#2F80FF" : "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
