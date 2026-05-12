import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen() {
  const [stage, setStage] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);

  const messages = [
    "Initializing VICTUS System...",
    "Loading User Interface...",
    "Access Granted"
  ];

  useEffect(() => {
    let currentText = "";
    let i = 0;
    
    if (stage >= messages.length) {
      setTimeout(() => setShow(false), 800);
      return;
    }

    const targetText = messages[stage];
    
    const typeInterval = setInterval(() => {
      if (i < targetText.length) {
        currentText += targetText.charAt(i);
        setText(currentText);
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setStage(s => s + 1);
        }, 500);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [stage]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-grid-pattern"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          <div className="relative w-full max-w-2xl px-6 flex flex-col items-center">
            {/* Logo/Icon */}
            <motion.div 
              className="w-24 h-24 mb-8 rounded-full border border-primary/50 flex items-center justify-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border-b-2 border-secondary animate-spin-reverse"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
              <span className="font-display text-2xl font-bold text-primary neon-text-cyan">V</span>
            </motion.div>

            {/* Terminal Text */}
            <div className="font-mono text-primary text-lg md:text-xl h-8 mb-6 neon-text-cyan text-center">
              {text}
              <span className="animate-pulse ml-1">_</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_#00F0FF]"
                initial={{ width: "0%" }}
                animate={{ width: stage === 0 ? "30%" : stage === 1 ? "70%" : "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* HUD Elements */}
            <div className="absolute top-0 left-4 text-xs font-mono text-primary/50">
              SYS_INIT: {Math.floor(Math.random() * 9999)}
            </div>
            <div className="absolute bottom-0 right-4 text-xs font-mono text-secondary/50">
              CORE_TEMP: NORMAL
            </div>
          </div>
          
          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>
          <div className="absolute inset-0 pointer-events-none border-b border-primary/20 shadow-[0_2px_10px_rgba(0,240,255,0.2)] animate-scanline h-10 w-full top-0"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}