"use client";
import { useEffect, useState } from "react";

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              document.body.style.overflow = "auto";
              onComplete();
            }, 600); // Esperar a que termine la animacion de fade out
          }, 400); // Pequeña pausa al 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0a0a0a]/70 backdrop-blur-md flex flex-col items-center justify-center font-mono transition-all duration-700 ease-in-out ${isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
      <div className="w-80 max-w-[85vw]">

        {/* Animated Radar/Spinner */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-t-2 border-l-2 border-brand-green rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-r-2 border-b-2 border-brand-green/60 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }}></div>
            <div className="absolute inset-4 bg-brand-green/10 rounded-full animate-pulse flex items-center justify-center text-brand-green font-bold text-sm shadow-[0_0_15px_rgba(0,255,65,0.4)]">
              <img src="/../icon.png" alt="CVB" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex justify-between text-brand-green text-[10px] sm:text-xs tracking-widest mb-3 font-bold relative z-10">
          <span className="animate-pulse">SYSTEM BOOT...</span>
          <span>{progress > 100 ? 100 : progress}%</span>
        </div>

        {/* Bar */}
        <div className="w-full h-1.5 bg-brand-gray overflow-hidden relative rounded-full border border-brand-green/20 z-10">
          <div
            className="absolute top-0 left-0 h-full bg-brand-green shadow-[0_0_15px_#00FF41]"
            style={{ width: `${progress > 100 ? 100 : progress}%`, transition: 'width 0.1s linear' }}
          ></div>
        </div>

        {/* Logs */}
        <div className="mt-6 space-y-1.5 text-[10px] sm:text-xs text-brand-green/60 font-mono text-left relative z-10">
          <p>&gt; Neural network linked... <span className="text-brand-green shadow-[0_0_5px_#00FF41]">[OK]</span></p>
          {progress > 30 && <p className="animate-pulse">&gt; Loading core modules... <span className="text-brand-green shadow-[0_0_5px_#00FF41]">[OK]</span></p>}
          {progress > 60 && <p className="animate-pulse">&gt; Retrieving credentials... <span className="text-brand-green shadow-[0_0_5px_#00FF41]">[OK]</span></p>}
          {progress > 85 && <p className="animate-pulse">&gt; Rendering UI elements... <span className="text-brand-green shadow-[0_0_5px_#00FF41]">[OK]</span></p>}
        </div>
      </div>
    </div>
  );
}
