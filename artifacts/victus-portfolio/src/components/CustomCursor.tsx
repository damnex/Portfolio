import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] flex items-center justify-center mix-blend-screen"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(0, 240, 255, 1)" : "rgba(0, 240, 255, 0.5)",
          backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 20 }}
      >
        <div className="w-1 h-1 bg-primary rounded-full" />
      </motion.div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_#00F0FF]"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: "transform 0.05s linear"
        }}
      />
    </>
  );
}