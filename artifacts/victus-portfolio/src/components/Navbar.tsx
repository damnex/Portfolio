import { useEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const activeRef = useRef("home");
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
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
        updateActive();
      });
    };

    updateActive();
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
      <button
        data-testid="nav-menu-toggle"
        className="side-nav-trigger"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="side-nav-trigger-line" aria-hidden="true" />
        <span className="side-nav-trigger-icon" aria-hidden="true">
          {menuOpen ? <X size={15} /> : <Menu size={15} />}
        </span>
        <span className="side-nav-trigger-text">NAVIGATION</span>
      </button>

      <div
        className={`side-nav-panel ${menuOpen ? "side-nav-panel-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-nav-shell">
          <div className="side-nav-kicker">SYSTEM ROUTES</div>
          <div className="side-nav-links">
            {navLinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  data-testid={`nav-link-${id}`}
                  type="button"
                  className={`side-nav-link ${isActive ? "side-nav-link-active" : ""}`}
                  onClick={() => scrollTo(link.href)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
