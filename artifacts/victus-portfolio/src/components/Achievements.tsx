import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, GraduationCap, Briefcase, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Winner",
    subtitle: "CII Emergence Hackathon",
    color: "#FF6B00",
    value: "1st",
    label: "Place",
  },
  {
    icon: GraduationCap,
    title: "Academic Topper",
    subtitle: "BCA Program",
    color: "#00F0FF",
    value: "8.85",
    label: "CGPA",
  },
  {
    icon: Briefcase,
    title: "Freelance Projects",
    subtitle: "Logo Design",
    color: "#8B5CF6",
    value: 5,
    label: "Projects+",
  },
  {
    icon: Users,
    title: "Remote Leadership",
    subtitle: "Teams Across India",
    color: "#22c55e",
    value: 3,
    label: "States+",
  },
];

function CountUp({ target, inView }: { target: number | string; inView: boolean }) {
  const [display, setDisplay] = useState<string | number>(typeof target === "string" ? target : 0);

  useEffect(() => {
    if (!inView || typeof target !== "number") {
      setDisplay(target);
      return;
    }
    let start = 0;
    const duration = 1200;
    const step = duration / target;
    const interval = setInterval(() => {
      start += 1;
      setDisplay(start);
      if (start >= target) {
        clearInterval(interval);
        setDisplay(target);
      }
    }, step);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <>{display}</>;
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(255,107,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">// SECTION_06</div>
          <h2 className="section-title">SYSTEM ACHIEVEMENTS</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                data-testid={`achievement-card-${i}`}
                className="glass-card rounded-lg p-6 relative overflow-hidden group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    boxShadow: `0 0 6px ${item.color}`,
                  }}
                />

                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${item.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 relative"
                  style={{
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 15px ${item.color}50` }}
                  />
                </div>

                {/* Counter */}
                <div
                  className="font-display text-4xl font-black mb-1"
                  style={{ color: item.color, textShadow: `0 0 20px ${item.color}60` }}
                >
                  <CountUp target={item.value} inView={inView} />
                </div>
                <div
                  className="font-mono text-xs tracking-widest mb-3"
                  style={{ color: `${item.color}80` }}
                >
                  {item.label}
                </div>

                <div className="font-sans text-sm font-medium" style={{ color: "#fff" }}>
                  {item.title}
                </div>
                <div
                  className="font-mono text-xs mt-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {item.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
