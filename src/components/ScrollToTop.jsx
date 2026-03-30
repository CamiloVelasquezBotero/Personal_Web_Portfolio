"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece al bajar más del 50% de la pantalla inicial / o > 400px (aprox. llegando a Acerca de)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Revisar si al cargar la pagina ya esta escrolleada

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 md:right-10 z-[100] p-3 rounded-full bg-[#0a0a0a]/80 border-2 border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-[#0a0a0a] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] backdrop-blur-md transition-all duration-300 transform cursor-crosshair ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
