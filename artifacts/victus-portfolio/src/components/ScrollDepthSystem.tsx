import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ScrollDepthSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    const compactMotion = window.matchMedia("(max-width: 639px)");

    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    let frame: number | null = null;
    let pointerFrame: number | null = null;
    let pointerX = 0;
    let pointerY = 0;
    let previousActiveSection: HTMLElement | null = null;
    let isCompact = compactMotion.matches;

    const setRootDefaults = () => {
      root.style.setProperty("--depth-pointer-x", "0px");
      root.style.setProperty("--depth-pointer-y", "0px");
      root.style.setProperty("--depth-rotate-x", "0deg");
      root.style.setProperty("--depth-rotate-y", "0deg");
      root.style.setProperty("--grid-x", "0px");
      root.style.setProperty("--grid-y", "0px");
      root.style.setProperty("--particle-x", "0px");
      root.style.setProperty("--particle-y", "0px");
      root.style.setProperty("--tunnel-y", "0px");
      root.style.setProperty("--tunnel-scale", "1");
      root.style.setProperty("--skill-cloud-y", "0px");
      root.style.setProperty("--skill-cloud-scale", "1");
      root.style.setProperty("--skill-cloud-rotate", "0deg");
      root.style.setProperty("--scan-x", "0%");
      root.style.setProperty("--active-glow", "0.1");
      root.style.setProperty("--hero-copy-y", "0px");
      root.style.setProperty("--hero-copy-z", "0px");
      root.style.setProperty("--hero-visual-y", "0px");
      root.style.setProperty("--hero-visual-z", "0px");
      root.style.setProperty("--hero-rotate-x", "0deg");
      root.style.setProperty("--hero-rotate-y", "0deg");
      root.style.setProperty("--hero-opacity", "1");
    };

    const update = () => {
      frame = null;

      const viewportHeight = Math.max(1, window.innerHeight);
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - viewportHeight);
      const scrollProgress = clamp(scrollY / scrollable, 0, 1);
      const heroExit = clamp(scrollY / (viewportHeight * 0.95), 0, 1);

      root.style.setProperty("--particle-y", `${scrollY * (isCompact ? -0.022 : -0.065)}px`);
      root.style.setProperty("--skill-cloud-y", `${scrollY * (isCompact ? -0.024 : -0.092)}px`);
      root.style.setProperty("--scan-x", `${scrollProgress * 120 - 10}%`);

      if (isCompact) {
        root.style.setProperty("--tunnel-y", "0px");
        root.style.setProperty("--tunnel-scale", "1");
        root.style.setProperty("--skill-cloud-scale", "1");
        root.style.setProperty("--skill-cloud-rotate", "0deg");
        root.style.setProperty("--hero-opacity", "1");
        if (previousActiveSection) {
          previousActiveSection.dataset.depthActive = "false";
          previousActiveSection = null;
        }
        return;
      }

      root.style.setProperty("--tunnel-y", `${scrollY * -0.082}px`);
      root.style.setProperty("--tunnel-scale", `${1 + scrollProgress * 0.038}`);
      root.style.setProperty("--skill-cloud-scale", `${1 + scrollProgress * 0.024}`);
      root.style.setProperty("--skill-cloud-rotate", `${scrollProgress * 3.4}deg`);
      root.style.setProperty("--active-glow", `${0.08 + heroExit * 0.12}`);
      root.style.setProperty("--hero-copy-y", `${heroExit * -28}px`);
      root.style.setProperty("--hero-copy-z", `${heroExit * -72}px`);
      root.style.setProperty("--hero-visual-y", `${heroExit * 18}px`);
      root.style.setProperty("--hero-visual-z", `${heroExit * -108}px`);
      root.style.setProperty("--hero-rotate-x", `${heroExit * 1.8}deg`);
      root.style.setProperty("--hero-opacity", `${1 - heroExit * 0.12}`);

      let activeSection: HTMLElement | null = null;
      let activeVisibility = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const centerOffset =
          (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const depth = clamp(centerOffset, -1.2, 1.2);
        const visible = clamp(1 - Math.abs(depth) * 0.84, 0, 1);
        const progress = clamp(
          (viewportHeight - rect.top) / Math.max(1, viewportHeight + rect.height),
          0,
          1,
        );

        if (visible > activeVisibility) {
          activeVisibility = visible;
          activeSection = section;
        }

        section.style.setProperty("--section-y", `${depth * -15}px`);
        section.style.setProperty("--section-z", `${(visible - 0.56) * 72}px`);
        section.style.setProperty("--section-scale", `${0.988 + visible * 0.012}`);
        section.style.setProperty("--section-rotate-x", `${depth * 1.05}deg`);
        section.style.setProperty("--section-opacity", `${0.82 + visible * 0.18}`);
        section.style.setProperty("--section-glow", `${0.02 + visible * 0.12}`);
        section.style.setProperty("--section-sweep", `${progress * 120 - 12}%`);
      });

      const currentActiveSection = activeSection as HTMLElement | null;

      if (currentActiveSection !== previousActiveSection) {
        if (previousActiveSection) previousActiveSection.dataset.depthActive = "false";
        if (currentActiveSection) currentActiveSection.dataset.depthActive = "true";
        previousActiveSection = currentActiveSection;
      }
    };

    const queueUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isCompact || event.pointerType === "touch") return;

      pointerX = event.clientX / Math.max(1, window.innerWidth) - 0.5;
      pointerY = event.clientY / Math.max(1, window.innerHeight) - 0.5;

      if (pointerFrame !== null) return;
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = null;
        root.style.setProperty("--depth-pointer-x", `${pointerX * 10}px`);
        root.style.setProperty("--depth-pointer-y", `${pointerY * 10}px`);
        root.style.setProperty("--depth-rotate-x", `${pointerY * -1.6}deg`);
        root.style.setProperty("--depth-rotate-y", `${pointerX * 1.6}deg`);
        root.style.setProperty("--particle-x", `${pointerX * 18}px`);
        root.style.setProperty("--hero-rotate-y", `${pointerX * -2.1}deg`);
      });
    };

    const handleCompactChange = () => {
      isCompact = compactMotion.matches;
      root.classList.toggle("depth-compact", isCompact);
      queueUpdate();
    };

    setRootDefaults();
    root.classList.add("depth-enabled");
    root.classList.toggle("depth-compact", isCompact);
    update();

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    compactMotion.addEventListener("change", handleCompactChange);

    return () => {
      root.classList.remove("depth-enabled");
      root.classList.remove("depth-compact");
      sections.forEach((section) => {
        delete section.dataset.depthActive;
      });
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      window.removeEventListener("pointermove", handlePointerMove);
      compactMotion.removeEventListener("change", handleCompactChange);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      if (pointerFrame !== null) {
        window.cancelAnimationFrame(pointerFrame);
      }
    };
  }, []);

  return null;
}
