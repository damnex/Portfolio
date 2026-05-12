import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Damnex",
    role: "Software Developer & Designer",
    period: "2023 — Present",
    color: "#00F0FF",
    points: [
      "Developing modern digital products focused on UI/UX and functionality.",
      "Working on branding systems, software solutions, and web applications.",
    ],
  },
  {
    company: "LandMarket",
    role: "Freelance Graphic Designer",
    period: "2022 — 2023",
    color: "#8B5CF6",
    points: [
      "Designed marketing creatives for real estate campaigns.",
      "Created social media branding visuals.",
    ],
  },
  {
    company: "Space Science Learning Club",
    role: "Project & Content Coordinator",
    period: "2021 — 2022",
    color: "#FF6B00",
    points: [
      "Managed remote teams across India.",
      "Designed astronomy posters and educational infographics.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">// SECTION_04</div>
          <h2 className="section-title">SYSTEM EXPERIENCE</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              data-testid={`experience-item-${i}`}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-6 w-3 h-3 rounded-full border-2 transform -translate-x-1/2"
                style={{
                  borderColor: exp.color,
                  background: "#050505",
                  boxShadow: `0 0 10px ${exp.color}`,
                }}
              />

              {/* Card */}
              <div
                className="glass-card rounded-lg p-6 relative overflow-hidden group"
                style={{ borderColor: `${exp.color}25` }}
              >
                {/* Top bar */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-lg"
                  style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}
                />

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderTop: `1px solid ${exp.color}50`,
                    borderRight: `1px solid ${exp.color}50`,
                  }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
