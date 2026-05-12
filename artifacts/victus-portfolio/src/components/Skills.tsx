import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    color: "#00F0FF",
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
    color: "#8B5CF6",
    skills: [
      { name: "UI/UX Design", level: 95 },
      { name: "Graphic Design", level: 88 },
      { name: "Branding", level: 85 },
      { name: "Visual Design", level: 90 },
    ],
  },
  {
    category: "Tools",
    color: "#FF6B00",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Canva", level: 88 },
      { name: "Wix Studio", level: 80 },
      { name: "Lightroom", level: 76 },
    ],
  },
  {
    category: "Soft Skills",
    color: "#22c55e",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Creativity", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Team Collaboration", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, inView, delay }: { name: string; level: number; color: string; inView: boolean; delay: number }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 8px ${color}66`,
          }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${level}%` } : { width: "0%" }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">// SECTION_03</div>
          <h2 className="section-title">CORE TECHNOLOGIES</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              data-testid={`skill-group-${gi}`}
              className="glass-card rounded-lg p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
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
                    inView={inView}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
