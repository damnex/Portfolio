import React, { useEffect, useRef, useState } from "react";

export interface HeroPortraitProps {
  originalSrc?: string;
  transformedSrc?: string;
  revealRadius?: number;
  className?: string;
}

/**
 * HeroPortrait
 *
 * Cinematic Iron Man cursor-following transformation effect.
 *
 * Performance & Architecture:
 * - Seamlessly cross-fades the human portrait and the Iron Man armor inside the cursor reveal zone.
 * - Masks out the base layer underneath so natural hair never peeks out from behind the helmet.
 * - No circular cursor ring or crosshair - pure, clean, magical lens effect.
 * - Uses RAF-driven exponential interpolation (lerp) directly on CSS variables.
 * - Zero React re-renders during mouse movement.
 * - Graceful fallback on touch devices and when prefers-reduced-motion is active.
 * - Automatically suspends animation frames when idle to consume 0% CPU.
 */
export default function HeroPortrait({
  originalSrc = `${import.meta.env.BASE_URL}dheena-hero-cutout.png`,
  transformedSrc = `${import.meta.env.BASE_URL}dheena-hero-ironman.png`,
  revealRadius = 180,
  className = "",
}: HeroPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasIronMan, setHasIronMan] = useState(true);
  const [isSupported, setIsSupported] = useState(false);

  // High-performance pointer tracking refs (no state re-renders)
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const targetOpacity = useRef(0);
  const currentOpacity = useRef(0);

  const isInside = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable effect on devices with precise pointer (mouse / trackpad)
    // and when reduced-motion is not requested.
    const finePointerMedia = window.matchMedia("(pointer: fine)");
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateSupport = () => {
      setIsSupported(finePointerMedia.matches && !reducedMotionMedia.matches);
    };

    updateSupport();

    finePointerMedia.addEventListener("change", updateSupport);
    reducedMotionMedia.addEventListener("change", updateSupport);

    return () => {
      finePointerMedia.removeEventListener("change", updateSupport);
      reducedMotionMedia.removeEventListener("change", updateSupport);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  const startLoop = () => {
    if (rafId.current !== null) return;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const tick = () => {
      // Smooth interpolation for cursor follow and fade
      currentX.current = lerp(currentX.current, targetX.current, 0.16);
      currentY.current = lerp(currentY.current, targetY.current, 0.16);
      currentOpacity.current = lerp(currentOpacity.current, targetOpacity.current, 0.12);

      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--reveal-x", `${currentX.current.toFixed(2)}px`);
        el.style.setProperty("--reveal-y", `${currentY.current.toFixed(2)}px`);
        el.style.setProperty("--reveal-opacity", `${currentOpacity.current.toFixed(3)}`);
      }

      // If cursor has left and opacity decayed to near-zero, cancel RAF to preserve CPU
      if (!isInside.current && currentOpacity.current < 0.005) {
        if (el) {
          el.style.setProperty("--reveal-opacity", "0");
        }
        rafId.current = null;
        return;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSupported || e.pointerType === "touch") return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // On fresh entry, snap starting coordinates to avoid sliding in from far away
    if (currentOpacity.current < 0.05) {
      currentX.current = x;
      currentY.current = y;
    }

    targetX.current = x;
    targetY.current = y;
    targetOpacity.current = 1;
    isInside.current = true;
    startLoop();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSupported || e.pointerType === "touch") return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    targetX.current = e.clientX - rect.left;
    targetY.current = e.clientY - rect.top;
    targetOpacity.current = 1;
    isInside.current = true;
    startLoop();
  };

  const handlePointerLeave = () => {
    targetOpacity.current = 0;
    isInside.current = false;
    // RAF loop continues smoothly decaying currentOpacity to 0
  };

  return (
    <div
      ref={containerRef}
      className={`hero-cutout-container hero-cutout-image ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--reveal-r": `${revealRadius}px`,
          "--reveal-x": "-9999px",
          "--reveal-y": "-9999px",
          "--reveal-opacity": "0",
        } as React.CSSProperties
      }
    >
      {/* 1. Base Portrait Image (Masks out under the reveal zone so hair disappears on hover) */}
      <img
        src={originalSrc}
        alt="Dheena Dhayalan"
        fetchPriority="high"
        decoding="async"
        className="hero-cutout-layer hero-cutout-base"
      />

      {/* 2. Iron Man Transformed Layer with Radial Gradient Mask */}
      {hasIronMan && isSupported && (
        <div className="hero-ironman-layer" aria-hidden="true">
          <img
            src={transformedSrc}
            alt=""
            decoding="async"
            className="hero-cutout-layer hero-cutout-ironman"
            onError={() => setHasIronMan(false)}
          />
        </div>
      )}
    </div>
  );
}
