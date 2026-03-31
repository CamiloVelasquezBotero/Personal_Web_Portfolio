"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  const navLinks = [
    { href: '#acercade', label: 'Acerca de' },
    { href: '#certificados', label: 'Certificados' },
    { href: 'https://github.com/CamiloVelasquezBotero', label: 'Proyectos', external: true },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-green/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20">

            {/* 1. Left - Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer md:w-[250px]">
              <span className="text-brand-green font-bold text-xl mr-3">&gt;_</span>
              <Link href="/" className="transition-opacity">
                <img src="/img/logo.png" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full hover:scale-110 hover:shadow-[0_0_10px_#00FF41] transition-all duration-300" />
              </Link>
            </div>

            {/* 2. Center - Navigation (Desktop) */}
            <nav className="hidden md:flex flex-1 justify-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="text-brand-green hover:text-white hover:text-neon hover:scale-110 inline-block transition-all duration-300 font-semibold tracking-wider text-sm uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* 3. Right - System Status (Desktop) */}
            <div className="hidden md:flex md:w-[250px] justify-end items-center space-x-3 text-xs font-mono cursor-default">
              <div className="flex flex-col text-right">
                <span className="text-brand-green/60 tracking-widest text-[10px] uppercase">SYS_STATUS</span>
                <span className="text-gray-200 font-bold tracking-widest">ONLINE</span>
              </div>
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_8px_#00FF41]"></div>
                <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-brand-green animate-ping opacity-75"></div>
              </div>
            </div>

            {/* 4. Mobile - Hamburger Button */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú de navegación"
              id="mobile-menu-toggle"
            >
              <span
                className={`block w-5 h-[2px] bg-brand-green rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
              />
              <span
                className={`block w-5 h-[2px] bg-brand-green rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''
                  }`}
              />
              <span
                className={`block w-5 h-[2px] bg-brand-green rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${menuOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-brand-dark/90 backdrop-blur-xl transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Nav Content */}
        <nav
          className={`absolute inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          {/* Decorative top line */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />

          {/* Subtle terminal prompt */}
          <span className="text-brand-green/40 text-xs font-mono tracking-[0.3em] uppercase mb-2">
            {'// nav_menu'}
          </span>

          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              onClick={handleLinkClick}
              className={`text-brand-green text-2xl font-semibold tracking-widest uppercase transition-all duration-300 hover:text-white hover:text-neon hover:tracking-[0.4em] ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 80}ms` : '0ms' }}
            >
              <span className="text-brand-green/30 text-sm mr-3 font-mono">0{i + 1}.</span>
              {link.label}
            </a>
          ))}

          {/* Decorative bottom line */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />

          {/* SYS_STATUS on mobile menu */}
          <div className="absolute bottom-16 flex items-center gap-2 text-xs font-mono">
            <span className="text-brand-green/40 tracking-widest">SYS_STATUS</span>
            <span className="text-gray-300 font-bold tracking-widest">ONLINE</span>
            <div className="relative ml-1">
              <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_6px_#00FF41]"></div>
              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-brand-green animate-ping opacity-75"></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
