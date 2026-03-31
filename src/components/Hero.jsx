"use client";
import { useState, useEffect } from "react";

const text1 = "¡Hi!... I'm";
const text2 = "Camilo Velasquez Botero";
const text4 = "Developer";
const text5 = "FullStack";
const text3 = "INICIAR_SISTEMA_";

export default function Hero() {
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [typed4, setTyped4] = useState("");
  const [typed5, setTyped5] = useState("");
  const [typed3, setTyped3] = useState("");
  const [showSub, setShowSub] = useState(false); // Controls visibility of the sub-headline
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    let t4 = 0;
    let t5 = 0;
    let t3 = 0;

    // Add a small delay to start after bootloader
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (t1 < text1.length) {
          setTyped1(text1.substring(0, t1 + 1));
          t1++;
        } else if (t2 < text2.length) {
          setTyped2(text2.substring(0, t2 + 1));
          t2++;
        } else if (t4 < text4.length) {
          setShowSub(true);
          setTyped4(text4.substring(0, t4 + 1));
          t4++;
        } else if (t5 < text5.length) {
          setTyped5(text5.substring(0, t5 + 1));
          t5++;
        } else {
          // Texto principal terminado.
          setShowButton(true);
          clearInterval(interval);

          // Pausa antes de escribir el botón
          setTimeout(() => {
            const btnInterval = setInterval(() => {
              if (t3 < text3.length) {
                setTyped3(text3.substring(0, t3 + 1));
                t3++;
              } else {
                clearInterval(btnInterval);
              }
            }, 40); // El botón se escribe más rápido
          }, 300);
        }
      }, 50); // Velocidad base de tipado
      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      <div className="z-10 text-center space-y-6 max-w-4xl px-4 w-full">
        {/* Terminal Window Emulation */}
        <div className="bg-brand-gray/50 border border-brand-green/30 rounded-lg p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,65,0.1)] text-left inline-block w-full text-center relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-brand-gray border-b border-brand-green/30 rounded-t-lg flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 relative box-neon"></div>
            <span className="ml-4 text-xs text-brand-green/70">root@camilo-dev: ~</span>
          </div>

          <div className="mt-8 text-center max-w-full px-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 inline-block leading-relaxed">
              <span className="text-brand-green text-neon animate-pulse-neon ml-2">{typed1}</span>
              <br />
              <span className="text-white">{typed2}</span>
              <span className="inline-block w-3 h-[0.8em] bg-brand-green ml-2 animate-pulse align-middle shadow-[0_0_8px_#00FF41]"></span>
            </h1>
          </div>

          <div className={`mt-6 flex justify-center items-center transition-opacity duration-500 ${showSub ? 'opacity-100' : 'opacity-0'}`}>
            <span className="mr-4 inline-block animate-bounce-short">
              <span className="text-brand-green text-xl text-neon animate-pulse-neon">&gt;</span>
            </span>
            <h3 className="text-xl md:text-3xl font-light text-gray-300">
              {typed4} <span className="text-brand-green font-bold text-neon animate-pulse-neon px-2">||</span> <span className="text-brand-green">{typed5}</span>
            </h3>
          </div>
        </div>

        <div className={`pt-16 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#acercade" className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-mono font-bold tracking-widest text-[#0a0a0a] bg-brand-green border border-brand-green hover:bg-transparent hover:text-brand-green hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] rounded-sm transition-all duration-500 uppercase">

            {/* Subtle inner scanline effect on hover */}
            <span className="absolute w-full h-0 transition-all duration-700 ease-out bg-brand-green/10 group-hover:h-full opacity-0 group-hover:opacity-100 top-0"></span>

            {/* Corner Bracket Decorations */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black group-hover:border-brand-green transition-colors duration-300"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black group-hover:border-brand-green transition-colors duration-300"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black group-hover:border-brand-green transition-colors duration-300"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black group-hover:border-brand-green transition-colors duration-300"></span>

            <span className="relative flex items-center gap-3 z-10">
              <svg className={`w-5 h-5 ${typed3.length === text3.length ? 'group-hover:animate-bounce opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              {typed3}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
