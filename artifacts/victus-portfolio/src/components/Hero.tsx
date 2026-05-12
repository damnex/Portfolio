import { ChevronDown, Download } from "lucide-react";

export default function Hero() {
  const profileImage = `${import.meta.env.BASE_URL}dheena-profile.jpeg`;
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="hero-copy flex flex-col gap-6">
          {/* Init label */}
          <div
            className="hero-status font-mono text-sm h-6 flex items-center gap-2"
            style={{ color: "rgba(47,128,255,0.7)" }}
          >
            <span className="status-dot w-2 h-2 rounded-full bg-primary" style={{ background: "#2F80FF" }} />
            BUILDING DIGITAL EXPERIENCES
          </div>

          {/* Main heading */}
          <div>
            <h1
              className="hero-title font-display font-black leading-none tracking-wide"
              style={{
                fontSize: "clamp(2.35rem, 6.6vw, 4.75rem)",
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
            className="hero-badge inline-flex w-fit max-w-full items-center gap-3 rounded-full border px-4 py-2"
            style={{
              borderColor: "rgba(47,128,255,0.35)",
              background: "rgba(47,128,255,0.06)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <span className="damnex-mark" aria-hidden="true">
              <img src={damnexLogo} alt="" decoding="async" />
            </span>
            <span className="font-display text-xs md:text-base font-semibold tracking-wide leading-relaxed">
              Designer &amp; Developer | Founder &amp; CEO of Damnex
            </span>
          </div>

          {/* Buttons */}
          <div className="hero-actions flex flex-wrap gap-4">
            <button
              data-testid="hero-btn-enter"
              className="btn-primary"
              onClick={scrollToAbout}
            >
              Enter Portfolio
            </button>
            <button
              data-testid="hero-btn-projects"
              className="btn-secondary"
              onClick={scrollToProjects}
            >
              Explore Projects
            </button>
            <a
              data-testid="hero-btn-resume"
              href={resumeUrl}
              download="Dheenadhayalan Resume.pdf"
              className="btn-primary inline-flex items-center gap-2 no-underline"
              aria-label="Download resume"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </div>

        </div>

        {/* Right — HUD Profile */}
        <div className="hero-visual flex items-center justify-center relative">
          <div className="relative w-[23rem] h-[23rem] md:w-[31rem] md:h-[31rem] flex items-center justify-center">
            {/* Outer ring */}
            <div
              className="hero-ring hero-ring-outer absolute inset-0 rounded-full"
              style={{
                border: "1px solid rgba(47,128,255,0.25)",
                boxShadow: "0 0 20px rgba(47,128,255,0.1)",
              }}
            />

            {/* Middle ring */}
            <div
              className="hero-ring hero-ring-inner absolute rounded-full"
              style={{
                inset: "45px",
                border: "1px solid rgba(245,158,11,0.3)",
              }}
            />

            {/* Core — hexagonal profile frame */}
            <div
              className="profile-frame relative z-10 flex items-center justify-center overflow-hidden rounded-full"
              style={{
                width: "330px",
                height: "330px",
                background:
                  "linear-gradient(135deg, rgba(47,128,255,0.08) 0%, rgba(245,158,11,0.08) 100%)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
              }}
            >
              <img
                src={profileImage}
                alt="Dheena Dhayalan"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
                style={{
                  objectPosition: "center",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.24) 100%)",
                }}
              />
            </div>

            {/* Floating HUD chips */}
            <div
              className="hero-chip hero-chip-blue absolute top-4 -right-2 glass-card px-2 py-1 rounded"
              style={{ fontSize: "0.6rem", fontFamily: "Poppins, sans-serif", color: "rgba(47,128,255,0.7)" }}
            >
              SYS: ONLINE
            </div>

            <div
              className="hero-chip hero-chip-gold absolute bottom-8 -left-4 glass-card px-2 py-1 rounded"
              style={{ fontSize: "0.6rem", fontFamily: "Poppins, sans-serif", color: "rgba(245,158,11,0.8)" }}
            >
              UI/UX v2.0
            </div>

            <div
              className="hero-chip hero-chip-red absolute top-1/2 -right-8 transform -translate-y-1/2 glass-card px-2 py-1 rounded"
              style={{
                fontSize: "0.55rem",
                fontFamily: "Poppins, sans-serif",
                color: "rgba(244,63,94,0.7)",
              }}
            >
              LOC: IND
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        data-testid="hero-scroll-down"
        className="scroll-cue absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(47,128,255,0.4)" }}
        onClick={scrollToAbout}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
