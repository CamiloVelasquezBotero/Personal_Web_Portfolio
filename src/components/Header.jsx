import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-green/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left - Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer md:w-[250px]">
            <span className="text-brand-green font-bold text-xl mr-3">&gt;_</span>
            <Link href="/" className="transition-opacity">
              <img src="/img/logo.png" alt="Logo" className="h-12 w-12 object-cover rounded-full hover:scale-110 hover:shadow-[0_0_10px_#00FF41] transition-all duration-300" />
            </Link>
          </div>
          
          {/* 2. Center - Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-12">
            <a href="#acercade" className="text-brand-green hover:text-white hover:text-neon hover:scale-110 inline-block transition-all duration-300 font-semibold tracking-wider text-sm uppercase">Acerca de</a>
            <a href="#certificados" className="text-brand-green hover:text-white hover:text-neon hover:scale-110 inline-block transition-all duration-300 font-semibold tracking-wider text-sm uppercase">Certificados</a>
            <a href="https://github.com/CamiloVelasquezBotero" target="_blank" rel="noreferrer" className="text-brand-green hover:text-white hover:text-neon hover:scale-110 inline-block transition-all duration-300 font-semibold tracking-wider text-sm uppercase">Proyectos</a>
            <a href="#contacto" className="text-brand-green hover:text-white hover:text-neon hover:scale-110 inline-block transition-all duration-300 font-semibold tracking-wider text-sm uppercase">Contacto</a>
          </nav>
          
          {/* 3. Right - System Status (Cyberpunk detail) */}
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
          
        </div>
      </div>
    </header>
  );
}
