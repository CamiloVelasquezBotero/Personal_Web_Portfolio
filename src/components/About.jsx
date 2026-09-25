import Image from 'next/image';
import TypewriterTitle from "./TypewriterTitle";
import FastTypewriterText from "./FastTypewriterText";

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "MERN · PERN",
    "TypeScript",
    "JavaScript",
    "Node.js/Express",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Python",
    "Tailwind CSS",
    "JWT",
    "Prisma",
    "Docker",
    "Git & GitHub",
    "Burp Suite"
  ];

  return (
    <section id="about" className="w-full pt-2 pb-4 scroll-mt-24 relative">
      <div className="flex items-center mb-10 border-b border-brand-green/30 pb-4">
        <TypewriterTitle
          text="ABOUT"
          className="text-3xl md:text-5xl font-bold text-white tracking-wider mb-2"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand-green rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-full border-4 border-brand-green/50 p-1 overflow-hidden bg-brand-dark filter grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src="/img/hacker.jpg" alt="Mini Hacker" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full" />
            </div>

            {/* Cyber Decorations */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-green"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-green"></div>
            <div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-brand-green"></div>
            <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-brand-green"></div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-3">
          <div className="bg-brand-gray/30 border border-brand-green/20 p-4 rounded-sm shadow-[0_0_15px_rgba(0,255,65,0.05)] text-gray-300 leading-relaxed font-light text-lg relative overflow-hidden">
            {/* Corner accenst */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-brand-green"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-green"></div>

            <FastTypewriterText text="Full-Stack Developer focused on building modern, scalable, and secure web applications. I develop complete solutions with React, Next.js, and its ecosystem, applying advanced state management with Zustand and TanStack Query.

My background in offensive security —under OWASP Top 10 and PTES methodologies— gives me a unique perspective: I don't just build software, I think like an attacker to make it more resilient by design.

Driven by continuous learning and improvement, across both development and security." />

            <div className="mt-5 mb-3 border-b border-brand-green/20 pb-2 flex items-center">
              <div className="w-2 h-2 bg-brand-green mr-2"></div>
              <span className="text-brand-green font-bold uppercase tracking-wider text-sm">
                [ Tech_Stack ]
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-brand-dark border border-brand-green/50 text-brand-green text-xs tracking-wider uppercase rounded-sm hover:bg-brand-green hover:text-black hover:font-bold transition-all cursor-crosshair">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}