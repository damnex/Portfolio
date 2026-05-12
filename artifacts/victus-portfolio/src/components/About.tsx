const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Satisfied Clients", value: "5+" },
  { label: "CGPA", value: "8.85" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="section-label">// SECTION_02</div>
          <h2 className="section-title">PORTFOLIO PROFILE</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <div
            className="glass-card rounded-lg p-8 relative overflow-hidden"
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
              style={{
                borderTop: "1px solid rgba(47,128,255,0.4)",
                borderRight: "1px solid rgba(47,128,255,0.4)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none"
              style={{
                borderBottom: "1px solid rgba(245,158,11,0.3)",
                borderLeft: "1px solid rgba(245,158,11,0.3)",
              }}
            />

            <div
              className="font-mono text-xs mb-4 tracking-widest"
              style={{ color: "rgba(47,128,255,0.5)" }}
            >
              &gt; PROFILE_DATA.BIO
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              I am a BCA student, designer, and developer passionate about building modern digital
              experiences and intelligent portfolios. My work combines UI/UX design, branding, web
              development, and AI-driven ideas to create impactful and user-focused solutions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Web Development", "Branding", "AI Portfolio"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded font-mono text-xs"
                  style={{
                    background: "rgba(47,128,255,0.06)",
                    border: "1px solid rgba(47,128,255,0.2)",
                    color: "rgba(47,128,255,0.8)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-testid={`about-stat-${i}`}
                className="glass-card rounded-lg p-6 relative group overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"
                  style={{ background: "radial-gradient(circle at center, rgba(47,128,255,0.05) 0%, transparent 70%)" }}
                />
                <div
                  className="font-display text-3xl font-black mb-2 neon-text-cyan"
                  style={{ color: "#2F80FF" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
