import { useState } from "react";
import { Github, Linkedin, Instagram, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dheena20022007@gmail.com",
    href: "mailto:dheena20022007@gmail.com",
    color: "#2F80FF",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dheenadhayalan-muruganantham",
    href: "https://www.linkedin.com/in/dheenadhayalan-muruganantham/",
    color: "#F59E0B",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dhee._.capturez",
    href: "https://www.instagram.com/dhee._.capturez/?hl=en",
    color: "#F43F5E",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/damnex",
    href: "https://github.com/damnex",
    color: "#84CC16",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9042492190",
    href: "https://wa.me/919042492190",
    color: "#22C55E",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const whatsappMessage = [
      "New portfolio enquiry",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.open(
      `https://wa.me/919042492190?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 70%, rgba(245,158,11,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 sm:mb-16">
          <div className="section-label">// SECTION_07</div>
          <h2 className="section-title">INITIATE CONNECTION</h2>
          <div className="section-divider" />
          <p
            className="mt-6 text-sm max-w-lg"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8" }}
          >
            Interested in collaborating, building innovative products, or creating futuristic digital
            experiences? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 min-w-0">
          {/* Contact Links */}
          <div className="flex min-w-0 flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-link-${link.label.toLowerCase()}`}
                  className="glass-card min-w-0 rounded-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group transition-all duration-300"
                  style={{ borderColor: `${link.color}20` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className="font-mono text-[0.65rem] sm:text-xs tracking-widest mb-0.5"
                      style={{ color: `${link.color}80` }}
                    >
                      {link.label}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed break-words" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {link.value}
                    </div>
                  </div>
                  <div
                    className="ml-auto hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: link.color }}
                  >
                    <Send size={14} />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div
            className="glass-card min-w-0 rounded-lg p-5 sm:p-8 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, #2F80FF, transparent)",
                boxShadow: "0 0 8px rgba(47,128,255,0.4)",
              }}
            />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-8 gap-4">
                <CheckCircle size={48} style={{ color: "#84CC16" }} />
                <div className="font-display text-lg" style={{ color: "#84CC16" }}>
                  MESSAGE SENT
                </div>
                <p className="font-mono text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                  WhatsApp opened with your message ready to send.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-5">
                <div
                  className="font-mono text-xs tracking-widest mb-1"
                  style={{ color: "rgba(47,128,255,0.5)" }}
                >
                  &gt; COMPOSE_MESSAGE
                </div>

                <div>
                  <label
                    className="block font-mono text-xs mb-2 tracking-wide"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    NAME
                  </label>
                  <input
                    data-testid="contact-input-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="input-glow w-full min-w-0 px-4 py-3 rounded font-sans text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block font-mono text-xs mb-2 tracking-wide"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    EMAIL
                  </label>
                  <input
                    data-testid="contact-input-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="input-glow w-full min-w-0 px-4 py-3 rounded font-sans text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block font-mono text-xs mb-2 tracking-wide"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    data-testid="contact-input-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter your message"
                    rows={4}
                    className="input-glow w-full min-w-0 px-4 py-3 rounded font-sans text-sm resize-none"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  />
                </div>

                <button
                  data-testid="contact-btn-send"
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={14} />
                  SEND ON WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
