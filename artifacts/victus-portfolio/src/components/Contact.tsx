import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Instagram, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dheenadhayalan@example.com",
    href: "mailto:dheenadhayalan@example.com",
    color: "#00F0FF",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dheenadhayalan",
    href: "https://linkedin.com/in/dheenadhayalan",
    color: "#8B5CF6",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dheenadhayalan",
    href: "https://instagram.com/dheenadhayalan",
    color: "#FF6B00",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 70%, rgba(139,92,246,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-link-${link.label.toLowerCase()}`}
                  className="glass-card rounded-lg p-5 flex items-center gap-4 group transition-all duration-300"
                  style={{ borderColor: `${link.color}20` }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
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
                  <div>
                    <div
                      className="font-mono text-xs tracking-widest mb-0.5"
                      style={{ color: `${link.color}80` }}
                    >
                      {link.label}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {link.value}
                    </div>
                  </div>
                  <div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: link.color }}
                  >
                    <Send size={14} />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            className="glass-card rounded-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, #00F0FF, transparent)",
                boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              }}
            />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-8 gap-4">
                <CheckCircle size={48} style={{ color: "#22c55e" }} />
                <div className="font-display text-lg" style={{ color: "#22c55e" }}>
                  MESSAGE SENT
                </div>
                <p className="font-mono text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Connection initiated. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div
                  className="font-mono text-xs tracking-widest mb-1"
                  style={{ color: "rgba(0,240,255,0.5)" }}
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
                    className="input-glow w-full px-4 py-3 rounded font-sans text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
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
                    className="input-glow w-full px-4 py-3 rounded font-sans text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
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
                    className="input-glow w-full px-4 py-3 rounded font-sans text-sm resize-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>

                <button
                  data-testid="contact-btn-send"
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex items-center justify-center gap-2 mt-2"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-t-2 animate-spin"
                        style={{ borderColor: "#00F0FF" }}
                      />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
