import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Satisfied Clients", value: "5+" },
  { label: "CGPA", value: "8.85" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">// SECTION_02</div>
          <h2 className="section-title">SYSTEM PROFILE</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <motion.div
            className="glass-card rounded-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
              style={{
                borderTop: "1px solid rgba(0,240,255,0.4)",
                borderRight: "1px solid rgba(0,240,255,0.4)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none"
              style={{
                borderBottom: "1px solid rgba(139,92,246,0.3)",
                borderLeft: "1px solid rgba(139,92,246,0.3)",
              }}
            />

            <div
              className="font-mono text-xs mb-4 tracking-widest"
              style={{ color: "rgba(0,240,255,0.5)" }}
            >
              &gt; PROFILE_DATA.BIO
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              I am a BCA student, designer, and developer passionate about building modern digital
              experiences and intelligent systems. My work combines UI/UX design, branding, web
              development, and AI-driven ideas to create impactful and user-focused solutions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Web Development", "Branding", "AI Systems"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded font-mono text-xs"
                  style={{
                    background: "rgba(0,240,255,0.06)",
                    border: "1px solid rgba(0,240,255,0.2)",
                    color: "rgba(0,240,255,0.8)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                data-testid={`about-stat-${i}`}
                className="glass-card rounded-lg p-6 relative group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"
                  style={{ background: "radial-gradient(circle at center, rgba(0,240,255,0.05) 0%, transparent 70%)" }}
                />
                <div
                  className="font-display text-3xl font-black mb-2 neon-text-cyan"
                  style={{ color: "#00F0FF" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
