"use client";
import { useState, useEffect, useRef } from "react";

export default function TypewriterTitle({ text, className }) {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Evitar que escriba de nuevo si ya terminó (opcional, pero la orden dice "cada vez que se llegue")
          setTypedText("");
          setIsTyping(true);
        } else {
          // Reset text when out of viewport so it restarts typing next time
          setTypedText("");
          setIsTyping(false);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of it is visible

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isTyping, text]);

  return (
    <h2 ref={titleRef} className={className}>
      <span className="mr-2 inline-block animate-bounce-short">
        <span className="text-brand-green text-neon animate-pulse-neon">&gt;</span>
      </span>
      <span className="hover:text-brand-green hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all duration-300 cursor-crosshair">
        {typedText}
      </span>
      <span className="inline-block w-4 h-[0.8em] bg-brand-green ml-2 animate-pulse align-middle shadow-[0_0_8px_#00FF41]"></span>
    </h2>
  );
}
