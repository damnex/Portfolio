import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function useTypingEffect(text: string, speed = 60, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    setDisplayed("");
    setDone(false);

    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed: initText } = useTypingEffect("Initializing VICTUS System...", 55, 3800);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
        >
          {/* Init label */}
          <div
            className="font-mono text-sm h-6 flex items-center gap-2"
            style={{ color: "rgba(0,240,255,0.7)" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ background: "#00F0FF" }} />
            {initText}
            <span className="animate-blink" style={{ color: "#00F0FF" }}>_</span>
          </div>

          {/* Main heading */}
          <div>
            <motion.h1
              className="font-display font-black leading-none tracking-wide"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                color: "#fff",
                textShadow: "0 0 40px rgba(0,240,255,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.9 }}
            >
              DHEENA
              <br />
              <span className="neon-text-cyan" style={{ color: "#00F0FF" }}>
                DHAYALAN M
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg font-medium"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: "480px", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 4.1 }}
          >
            UI/UX Designer &amp; Developer crafting{" "}
            <span style={{ color: "#8B5CF6" }}>futuristic digital experiences.</span>
          </motion.p>

          <motion.p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.45)", maxWidth: "440px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 4.2 }}
          >
            Building intelligent digital systems through design, technology, and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 4.4 }}
          >
            <button
              data-testid="hero-btn-enter"
              className="btn-primary"
              onClick={scrollToAbout}
            >
              Enter System
            </button>
            <button
              data-testid="hero-btn-projects"
              className="btn-secondary"
              onClick={scrollToProjects}
            >
              Explore Projects
            </button>
          </motion.div>

          {/* Status line */}
          <motion.div
            className="flex items-center gap-6 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 4.6 }}
          >
            {[
              { label: "Projects", value: "10+" },
              { label: "Experience", value: "3+ Yrs" },
              { label: "Clients", value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display text-xl font-bold neon-text-cyan"
                  style={{ color: "#00F0FF" }}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — HUD Profile */}
        <motion.div
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                border: "1px solid rgba(0,240,255,0.25)",
                boxShadow: "0 0 20px rgba(0,240,255,0.1)",
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ background: "#00F0FF", boxShadow: "0 0 8px #00F0FF" }}
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{ background: "rgba(0,240,255,0.6)" }}
              />
            </div>

            {/* Middle ring */}
            <div
              className="absolute animate-spin-reverse"
              style={{
                inset: "20px",
                borderRadius: "50%",
                border: "1px solid rgba(139,92,246,0.3)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full"
                style={{ background: "#8B5CF6", boxShadow: "0 0 6px #8B5CF6" }}
              />
            </div>

            {/* Inner ring */}
            <div
              className="absolute animate-spin-slow"
              style={{
                inset: "40px",
                borderRadius: "50%",
                border: "1px dashed rgba(255,107,0,0.2)",
                animationDuration: "20s",
              }}
            />

            {/* Core — hexagonal profile frame */}
            <div
              className="relative z-10 flex flex-col items-center justify-center"
              style={{
                width: "160px",
                height: "160px",
                background:
                  "linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(255,107,0,0.05) 100%)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                border: "1px solid rgba(0,240,255,0.3)",
              }}
            >
              {/* Scan line */}
              <div
                className="absolute w-full animate-scan-vertical pointer-events-none overflow-hidden"
                style={{
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,240,255,0.6), transparent)",
                  boxShadow: "0 0 10px rgba(0,240,255,0.4)",
                }}
              />

              {/* Avatar letter */}
              <div
                className="font-display text-4xl font-black neon-text-cyan"
                style={{ color: "#00F0FF" }}
              >
                DM
              </div>
              <div
                className="font-mono text-xs mt-1"
                style={{ color: "rgba(0,240,255,0.5)", letterSpacing: "0.15em" }}
              >
                DESIGNER
              </div>
            </div>

            {/* Floating HUD chips */}
            <motion.div
              className="absolute top-4 -right-2 glass-card px-2 py-1 rounded animate-float"
              style={{ fontSize: "0.6rem", fontFamily: "monospace", color: "rgba(0,240,255,0.7)" }}
            >
              SYS: ONLINE
            </motion.div>

            <motion.div
              className="absolute bottom-8 -left-4 glass-card px-2 py-1 rounded animate-float-delay"
              style={{ fontSize: "0.6rem", fontFamily: "monospace", color: "rgba(139,92,246,0.8)" }}
            >
              UI/UX v2.0
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 glass-card px-2 py-1 rounded animate-float"
              style={{
                fontSize: "0.55rem",
                fontFamily: "monospace",
                color: "rgba(255,107,0,0.7)",
                animationDelay: "0.8s",
              }}
            >
              LOC: IND
            </motion.div>
          </div>

          {/* System label */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
            style={{ bottom: "-2rem" }}
          >
            <div
              className="font-mono text-xs tracking-widest"
              style={{ color: "rgba(0,240,255,0.5)" }}
            >
              SYSTEM USER: DHEENADHAYALAN
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
              />
              <span className="font-mono text-xs" style={{ color: "#22c55e" }}>
                ONLINE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        data-testid="hero-scroll-down"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(0,240,255,0.4)" }}
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.8 }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
