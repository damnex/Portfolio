const skillGroups = [
  {
    category: "Development",
    color: "#2F80FF",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "Python", level: 75 },
      { name: "Java", level: 68 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    category: "Design",
    color: "#F59E0B",
    skills: [
      { name: "Graphic Design", level: 95 },
      { name: "UI/UX Design", level: 88 },
      { name: "Branding", level: 85 },
      { name: "Visual Design", level: 90 },
    ],
  },
  {
    category: "Tools",
    color: "#F43F5E",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Canva", level: 88 },
      { name: "Wix Studio", level: 80 },
      { name: "Lightroom", level: 76 },
    ],
  },
  {
    category: "Soft Skills",
    color: "#84CC16",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Creativity", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Team Collaboration", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="section-label">// SECTION_03</div>
          <h2 className="section-title">CORE TECHNOLOGIES</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              data-testid={`skill-group-${gi}`}
              className="glass-card rounded-lg p-6 relative overflow-hidden group"
            >
              {/* Top color accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                  boxShadow: `0 0 8px ${group.color}`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-lg"
                style={{
                  background: `radial-gradient(circle at top right, ${group.color}18 0%, transparent 70%)`,
                }}
              />

              <div className="mb-5">
                <div
                  className="font-mono text-xs tracking-widest mb-1"
                  style={{ color: `${group.color}99` }}
                >
                  MODULE_{(gi + 1).toString().padStart(2, "0")}
                </div>
                <h3
                  className="font-display text-sm font-bold tracking-wider"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              <div>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
