import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "spectra",
    name: "Spectra 3D Hub",
    label: "IMMERSIVE EXPERIENCE PLATFORM",
    description:
      "Designed and developed a modern web experience focused on creativity and digital interaction.",
    gradient: "linear-gradient(135deg, #00F0FF22, #8B5CF622)",
    accent: "#00F0FF",
    tech: ["React", "Three.js", "GSAP"],
  },
  {
    id: "purepath",
    name: "PurePath",
    label: "AI ACCESSIBILITY EXTENSION",
    description:
      "An AI-powered accessibility solution focused on improving digital usability and user interaction.",
    gradient: "linear-gradient(135deg, #8B5CF622, #FF6B0022)",
    accent: "#8B5CF6",
    tech: ["Python", "AI/ML", "Chrome API"],
  },
  {
    id: "namma",
    name: "Namma Ooru Vandi",
    label: "SMART TRACKING APPLICATION",
    description:
      "A tracking application concept designed for intuitive interaction and smart monitoring systems.",
    gradient: "linear-gradient(135deg, #FF6B0022, #00F0FF22)",
    accent: "#FF6B00",
    tech: ["React Native", "Maps API", "Node.js"],
  },
  {
    id: "spica",
    name: "Spica Lighting",
    label: "MODERN BUSINESS WEBSITE",
    description:
      "Developed a professional branding-focused website for a lighting business.",
    gradient: "linear-gradient(135deg, #22c55e22, #00F0FF22)",
    accent: "#22c55e",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "meenu",
    name: "Meenu's Beauty Parlour",
    label: "BRAND EXPERIENCE WEBSITE",
    description:
      "Created an elegant website interface focused on beauty branding and customer engagement.",
    gradient: "linear-gradient(135deg, #f472b622, #8B5CF622)",
    accent: "#f472b6",
    tech: ["Wix Studio", "Figma", "Branding"],
  },
];

function ProjectCard({
  project,
  index,
  inView,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  onOpen: (p: (typeof projects)[0]) => void;
}) {
  return (
    <motion.div
      data-testid={`project-card-${project.id}`}
      className="glass-card rounded-lg overflow-hidden group cursor-none relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div
        className="h-40 relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${project.accent}20 0%, transparent 70%)`,
          }}
        />
        {/* HUD overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div
            className="font-mono text-xs tracking-widest px-3 py-1 rounded"
            style={{
              background: `${project.accent}18`,
              border: `1px solid ${project.accent}60`,
              color: project.accent,
            }}
          >
            VIEW MODULE
          </div>
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.accent}15 1px, transparent 1px), linear-gradient(90deg, ${project.accent}15 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Label badge */}
        <div className="absolute top-3 left-3">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{
              background: `${project.accent}18`,
              border: `1px solid ${project.accent}40`,
              color: project.accent,
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
            }}
          >
            {project.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-display text-sm font-bold mb-2 tracking-wide"
          style={{ color: "#fff" }}
        >
          {project.name}
        </h3>
        <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          boxShadow: `0 0 8px ${project.accent}`,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(0,240,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">// SECTION_05</div>
          <h2 className="section-title">ACTIVE PROJECT MODULES</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              className="glass-card rounded-lg max-w-lg w-full p-8 relative"
              style={{ borderColor: `${selected.accent}40` }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="project-modal-close"
                className="absolute top-4 right-4"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onClick={() => setSelected(null)}
              >
                <X size={18} />
              </button>

              <span
                className="font-mono text-xs tracking-widest mb-4 block"
                style={{ color: selected.accent, fontSize: "0.6rem" }}
              >
                {selected.label}
              </span>

              <h3
                className="font-display text-xl font-bold mb-4"
                style={{ color: "#fff" }}
              >
                {selected.name}
              </h3>

              <div
                className="h-32 rounded-lg mb-6 relative overflow-hidden"
                style={{ background: selected.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${selected.accent}15 1px, transparent 1px), linear-gradient(90deg, ${selected.accent}15 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded"
                    style={{
                      background: `${selected.accent}12`,
                      border: `1px solid ${selected.accent}30`,
                      color: selected.accent,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                data-testid="project-modal-view"
                className="flex items-center gap-2 font-mono text-xs"
                style={{ color: selected.accent }}
              >
                <ExternalLink size={14} />
                View Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
