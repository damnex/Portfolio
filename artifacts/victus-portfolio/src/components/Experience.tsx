const experiences = [
  {
    company: "Damnex",
    role: "Software Developer & Designer",
    period: "2026 - Present",
    color: "#2F80FF",
    points: [
      "Developing modern digital products focused on UI/UX and functionality.",
      "Working on branding portfolios, software solutions, and web applications.",
    ],
  },
  {
    company: "Indian Awaz Foundation",
    role: "Graphic Designer Internship",
    period: "May 2026 - Present · 1 Month",
    color: "#14B8A6",
    points: [
      "Designing social media creatives, promotional materials, and branding visuals.",
      "Supporting digital campaigns through creative visual communication.",
    ],
  },
  {
    company: "LandMarket",
    role: "Freelance Graphic Designer",
    period: "1 Month",
    color: "#F59E0B",
    points: [
      "Designed marketing creatives for real estate campaigns.",
      "Created social media branding visuals.",
    ],
  },
  {
    company: "Space Science Learning Club",
    role: "Project & Content Coordinator",
    period: "6 Months",
    color: "#F43F5E",
    points: [
      "Managed remote teams across India.",
      "Designed astronomy posters and educational infographics.",
    ],
  },
];

export default function Experience() {
  const damnexLogo = `${import.meta.env.BASE_URL}damnex-logo.png`;
  const companyLogos: Record<string, string> = {
    Damnex: damnexLogo,
    "Indian Awaz Foundation": `${import.meta.env.BASE_URL}indian-awaz-logo.jpeg`,
    LandMarket: `${import.meta.env.BASE_URL}landmarket-logo.png`,
    "Space Science Learning Club": `${import.meta.env.BASE_URL}sslc-logo.png`,
  };

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="section-label">// SECTION_04</div>
          <h2 className="section-title">PORTFOLIO EXPERIENCE</h2>
          <div className="section-divider" />
        </div>

        <div className="relative pl-8">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              data-testid={`experience-item-${i}`}
              className="relative mb-12 last:mb-0"
            >
              <div
                className="absolute -left-8 top-6 w-3 h-3 rounded-full border-2 transform -translate-x-1/2"
                style={{
                  borderColor: exp.color,
                  background: "#050505",
                  boxShadow: `0 0 10px ${exp.color}`,
                }}
              />

              <div
                className="glass-card rounded-lg p-6 relative overflow-hidden group"
                style={{ borderColor: `${exp.color}25` }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-lg"
                  style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}
                />

                <div
                  className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderTop: `1px solid ${exp.color}50`,
                    borderRight: `1px solid ${exp.color}50`,
                  }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    {companyLogos[exp.company] && (
                      <span className="company-card-logo" aria-hidden="true">
                        <img src={companyLogos[exp.company]} alt="" decoding="async" loading="lazy" />
                      </span>
                    )}
                    <div>
                      <h3
                        className="font-display text-base font-bold tracking-wide mb-1"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      color: `${exp.color}cc`,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exp.color, boxShadow: `0 0 4px ${exp.color}` }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
