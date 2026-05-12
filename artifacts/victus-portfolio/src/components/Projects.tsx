import { useState } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "spectra",
    name: "Spectra 3D Hub",
    label: "IMMERSIVE EXPERIENCE PLATFORM",
    description:
      "Designed and developed a modern web experience focused on creativity and digital interaction.",
    gradient: "linear-gradient(135deg, #2F80FF22, #F59E0B22)",
    accent: "#2F80FF",
    url: "https://www.spectra-3d-hub.in/",
    image: `${import.meta.env.BASE_URL}project-spectra.png`,
  },
  {
    id: "spica",
    name: "Spica Lighting",
    label: "MODERN BUSINESS WEBSITE",
    description:
      "Developed a professional branding-focused website for a lighting business.",
    gradient: "linear-gradient(135deg, #84CC1622, #2F80FF22)",
    accent: "#84CC16",
    url: "https://spica-lighting.vercel.app/",
    image: `${import.meta.env.BASE_URL}project-spica.png`,
  },
  {
    id: "meenu",
    name: "Meenu's Beauty Parlour",
    label: "BRAND EXPERIENCE WEBSITE",
    description:
      "Created an elegant website interface focused on beauty branding and customer engagement.",
    gradient: "linear-gradient(135deg, #DB277722, #F59E0B22)",
    accent: "#DB2777",
    url: "https://www.meenusbeautyparlour.online/",
    image: `${import.meta.env.BASE_URL}project-meenu.png`,
  },
  {
    id: "purepath",
    name: "PurePath",
    label: "AI ACCESSIBILITY EXTENSION",
    description:
      "An AI-powered accessibility solution focused on improving digital usability and user interaction.",
    gradient: "linear-gradient(135deg, #06B6D422, #2F80FF22)",
    accent: "#06B6D4",
    url: "",
    image: `${import.meta.env.BASE_URL}project-purepath.png`,
  },
  {
    id: "namma",
    name: "Namma Ooru Vandi",
    label: "SMART TRACKING APPLICATION",
    description:
      "A tracking application concept designed for intuitive interaction and smart monitoring portfolios.",
    gradient: "linear-gradient(135deg, #2F80FF22, #22C55E22)",
    accent: "#22C55E",
    url: "",
    image: `${import.meta.env.BASE_URL}project-namma.png`,
  },
  {
    id: "logo-graphic",
    name: "Logo & Graphic Designing",
    label: "CREATIVE BRAND IDENTITY",
    description:
      "Designed logos, posters, and brand graphics for digital platforms and business identities.",
    gradient: "linear-gradient(135deg, #F59E0B22, #2F80FF22)",
    accent: "#F59E0B",
    url: "",
    image: `${import.meta.env.BASE_URL}project-logo-graphic.svg`,
  },
];

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[0];
  onOpen: (p: (typeof projects)[0]) => void;
}) {
  return (
    <div
      data-testid={`project-card-${project.id}`}
      className="glass-card rounded-lg overflow-hidden group cursor-pointer relative"
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div
        className="h-40 relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-500"
          style={{
            background: project.image
              ? "linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.72) 100%)"
              : `radial-gradient(circle at center, ${project.accent}20 0%, transparent 70%)`,
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
      </div>

      {/* Bottom border glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          boxShadow: `0 0 8px ${project.accent}`,
        }}
      />
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="projects" className="relative py-24 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(47,128,255,0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="section-label">// SECTION_05</div>
            <h2 className="section-title">ACTIVE PROJECT MODULES</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto px-4 py-24 sm:p-6"
          onClick={() => setSelected(null)}
          style={{ background: "rgba(5,5,5,0.88)" }}
        >
          <div
            className="glass-card rounded-lg max-w-lg w-full p-6 sm:p-8 relative"
            style={{ borderColor: `${selected.accent}40` }}
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
                {selected.image && (
                  <img
                    src={selected.image}
                    alt={`${selected.name} preview`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background: selected.image
                      ? "linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.55) 100%)"
                      : undefined,
                    backgroundImage: selected.image
                      ? undefined
                      : `linear-gradient(${selected.accent}15 1px, transparent 1px), linear-gradient(90deg, ${selected.accent}15 1px, transparent 1px)`,
                    backgroundSize: selected.image ? undefined : "20px 20px",
                  }}
                />
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                {selected.description}
              </p>

              {selected.url ? (
                <a
                  data-testid="project-modal-view"
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs"
                  style={{ color: selected.accent }}
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              ) : (
                <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Link coming soon
                </div>
              )}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
