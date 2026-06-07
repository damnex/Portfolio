import { ChevronDown, Download } from "lucide-react";

export default function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}dheena-hero-cutout.png`;
  const damnexLogo = `${import.meta.env.BASE_URL}damnex-logo.png`;
  const resumeUrl = `${import.meta.env.BASE_URL}dheenadhayalan-resume.pdf`;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden px-6 pt-24 pb-12 lg:pt-20 lg:pb-0"
    >
      <div className="hero-layout max-w-7xl mx-auto w-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] gap-10 lg:gap-12 items-center relative z-10">
        <div className="hero-copy flex flex-col gap-5 sm:gap-6">
          <div
            className="hero-status font-mono text-xs sm:text-sm h-6 flex items-center gap-2"
            style={{ color: "rgba(47,128,255,0.7)" }}
          >
            <span
              className="status-dot w-2 h-2 rounded-full bg-primary"
              style={{ background: "#2F80FF" }}
            />
            BUILDING DIGITAL EXPERIENCES
          </div>

          <div>
            <h1
              className="hero-title font-display font-black leading-none tracking-wide"
              style={{
                color: "#fff",
              }}
            >
              DHEENA
              <br />
              <span className="neon-text-cyan" style={{ color: "#2F80FF" }}>
                DHAYALAN M
              </span>
            </h1>
          </div>

          <div
            className="hero-badge inline-flex w-full sm:w-fit max-w-full items-center gap-3 rounded-full border px-3 py-2 sm:px-4"
            style={{
              borderColor: "rgba(47,128,255,0.35)",
              background: "rgba(47,128,255,0.06)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <span className="damnex-mark" aria-hidden="true">
              <img src={damnexLogo} alt="" decoding="async" />
            </span>
            <span className="font-display text-[0.7rem] sm:text-xs md:text-base font-semibold tracking-wide leading-snug md:leading-relaxed">
              Designer &amp; Developer | Founder &amp; CEO of Damnex
            </span>
          </div>

          <div className="hero-actions grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:gap-4">
            <button
              data-testid="hero-btn-projects"
              className="btn-secondary flex items-center justify-center"
              onClick={scrollToProjects}
            >
              Explore Projects
            </button>
            <a
              data-testid="hero-btn-resume"
              href={resumeUrl}
              download="Dheenadhayalan Resume.pdf"
              className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
              aria-label="Download resume"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual hero-cutout-stage relative">
          <div className="hero-cutout-glow" aria-hidden="true" />
          <div className="hero-cutout-ring" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Dheena Dhayalan"
            fetchPriority="high"
            decoding="async"
            className="hero-cutout-image"
          />
        </div>
      </div>

      <button
        data-testid="hero-scroll-down"
        className="scroll-cue absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
        style={{ color: "rgba(47,128,255,0.4)" }}
        onClick={scrollToAbout}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
