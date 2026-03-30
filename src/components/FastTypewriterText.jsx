"use client";
import { useState, useEffect, useRef } from "react";

export default function FastTypewriterText({ text, speed = 10 }) {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Restart animation each time you lose focus of section
          setIsVisible(false);
          setTypedText("");
        }
      });
    }, { threshold: 0.3 }); // Activar cuando esté 30% visible

    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
         // Escribe caracteres velozmente (de 2 en 2 si la velocidad es crítica o 1 en 1 muy rápido)
         // Usaremos saltos de 2 caracteres en 2 para un tipeo "Matrix" rapidísimo
         setTypedText(text.substring(0, currentIndex + 2)); 
         currentIndex += 2; 
      } else {
         clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] transform ${
        isVisible 
        ? "scale-100 opacity-100 blur-none translate-y-0" 
        : "scale-50 opacity-0 blur-md translate-y-12"
      }`}
    >
       <p className="mb-4 text-gray-300 whitespace-pre-line leading-relaxed">
         <span className="text-brand-green text-neon font-bold">Hi...</span>{"\n\n"}
         {typedText}
         <span className="inline-block w-2.5 h-[1em] bg-brand-green ml-1 animate-pulse align-middle shadow-[0_0_8px_#00FF41]"></span>
       </p>
    </div>
  );
}
