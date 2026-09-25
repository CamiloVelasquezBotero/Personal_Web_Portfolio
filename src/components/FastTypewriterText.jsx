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
    }, { threshold: 0.3 }); // Trigger when 30% visible

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
        // Fast typing in chunks of 2 characters for high-speed terminal effect
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
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] transform ${isVisible
        ? "scale-100 opacity-100 blur-none translate-y-0"
        : "scale-50 opacity-0 blur-md translate-y-12"
        }`}
    >
      <div className="mb-3 inline-flex items-center gap-2">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_14px_rgba(0,255,65,0.8)]"
        >
          {/* Defs for gradients & neon glow filters */}
          <defs>
            <linearGradient id="hoodGrad" x1="24" y1="2" x2="24" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#121814" />
              <stop offset="100%" stopColor="#050806" />
            </linearGradient>
            <linearGradient id="screenGlow" x1="24" y1="21" x2="24" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ff41" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00ff41" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Shoulders / Body silhouette */}
          <path
            d="M8 38C8 32 12 28.5 16 27L24 29L32 27C36 28.5 40 32 40 38H8Z"
            fill="#090d0b"
            stroke="#00ff41"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Hacker Hoodie Outline - Distinct Pointed Hood */}
          <path
            d="M24 3C22 3 13 8.5 13 16.5C13 22 15.5 25.5 17.5 27C15 28.5 11 31.8 9.5 37H38.5C37 31.8 33 28.5 30.5 27C32.5 25.5 35 22 35 16.5C35 8.5 26 3 24 3Z"
            fill="url(#hoodGrad)"
            stroke="#00ff41"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          {/* Hood Inner Shadow / Face Opening (Deep Mystery) */}
          <path
            d="M24 7.5C19.5 7.5 16 11.5 16 17C16 22.2 19.5 25.5 24 25.5C28.5 25.5 32 22.2 32 17C32 11.5 28.5 7.5 24 7.5Z"
            fill="#020403"
            stroke="#00ff41"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Hood peak crease line */}
          <path
            d="M24 3.5V7"
            stroke="#00ff41"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Ambient Screen Light casting upwards onto the hacker's face/hood */}
          <polygon
            points="14,24 34,24 38,13 10,13"
            fill="url(#screenGlow)"
            className="animate-pulse"
          />

          {/* Glowing Cyber Eyes / Visor under the hood (prende y apaga) */}
          <g className="animate-pulse">
            {/* Glowing visor bar */}
            <rect
              x="17.5"
              y="14.5"
              width="13"
              height="3.8"
              rx="1.9"
              fill="#00ff41"
            />
            {/* High-intensity visor eye slits inside */}
            <line x1="19.5" y1="16.4" x2="22.5" y2="16.4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="25.5" y1="16.4" x2="28.5" y2="16.4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Laptop Screen (Front View facing viewer/tilted back) */}
          <rect
            x="12"
            y="23"
            width="24"
            height="14"
            rx="1.8"
            fill="#080c0a"
            stroke="#00ff41"
            strokeWidth="1.6"
          />

          {/* Laptop Bezel inner screen */}
          <rect
            x="13.5"
            y="24.5"
            width="21"
            height="11"
            rx="1"
            fill="#030805"
          />

          {/* Terminal Command Prompt: >_ */}
          <path
            d="M15.5 28L18 29.5L15.5 31"
            stroke="#00ff41"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="20"
            y1="31"
            x2="23.5"
            y2="31"
            stroke="#00ff41"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-pulse"
          />

          {/* Matrix code lines on screen */}
          <line x1="15.5" y1="33.5" x2="27" y2="33.5" stroke="#00ff41" strokeWidth="1.1" strokeOpacity="0.8" strokeDasharray="3 2" />
          <line x1="28.5" y1="33.5" x2="33" y2="33.5" stroke="#00ff41" strokeWidth="1.1" strokeOpacity="0.4" />

          {/* Top Status LED lights on screen bezel */}
          <circle cx="24" cy="23.8" r="0.6" fill="#00ff41" />
          <circle cx="32" cy="27" r="0.8" fill="#00ff41" className="animate-ping" style={{ transformOrigin: '32px 27px' }} />

          {/* Laptop Keyboard Base (Slanted perspective) */}
          <polygon
            points="6,41 12,37 36,37 42,41"
            fill="#101713"
            stroke="#00ff41"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Keyboard Keys grid hint */}
          <line x1="14" y1="38.5" x2="34" y2="38.5" stroke="#00ff41" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 1.5" />

          {/* Trackpad */}
          <rect
            x="21"
            y="39.6"
            width="6"
            height="1.2"
            rx="0.6"
            fill="#00ff41"
            opacity="0.9"
          />

          {/* Hacker Sleeves & Hands typing on Keyboard */}
          {/* Left Hand + Sleeve */}
          <path d="M7 39L11.5 36.5L14 38L9.5 40.5Z" fill="#0a0a0a" stroke="#00ff41" strokeWidth="1" />
          <circle cx="14" cy="38" r="1.5" fill="#00ff41" />
          <circle cx="16" cy="37.5" r="1.2" fill="#00ff41" />

          {/* Right Hand + Sleeve */}
          <path d="M41 39L36.5 36.5L34 38L38.5 40.5Z" fill="#0a0a0a" stroke="#00ff41" strokeWidth="1" />
          <circle cx="34" cy="38" r="1.5" fill="#00ff41" />
          <circle cx="32" cy="37.5" r="1.2" fill="#00ff41" />
        </svg>
      </div>

      <p className="text-gray-300 whitespace-pre-line leading-relaxed">
        {typedText}
        <span className="inline-block w-2.5 h-[1em] bg-brand-green ml-1 animate-pulse align-middle shadow-[0_0_8px_#00FF41]"></span>
      </p>
    </div>
  );
}
