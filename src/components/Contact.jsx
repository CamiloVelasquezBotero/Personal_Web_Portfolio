import TypewriterTitle from "./TypewriterTitle";

export default function Contact() {
  return (
    <section id="contacto" className="w-full pt-2 scroll-mt-24 relative">
      <div className="flex items-center mb-10 border-b border-brand-green/30 pb-4">
        <TypewriterTitle
          text="CONTACTO"
          className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase"
        />
        <div className="h-px bg-brand-green/30 flex-grow ml-8"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-black border border-brand-green/30 p-8 relative rounded-sm shadow-[0_0_20px_rgba(0,255,65,0.05)]">
        {/* Terminal decorative header */}
        <div className="absolute top-0 left-0 w-full h-8 bg-brand-gray border-b border-brand-green/30 flex items-center px-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs text-brand-green/50">contact-form.sh</span>
        </div>

        <div className="lg:w-2/3 pt-6">
          <div className="mb-6">
            <span className="text-brand-green/70"># Enviame tu mensaje</span>
          </div>

          <form action="https://formsubmit.co/camilox168@outlook.com" method="POST" className="space-y-6">
            <div className="relative group">
              <span className="absolute top-3 left-0 text-brand-green font-bold">&gt;</span>
              <input
                type="text"
                name="name"
                placeholder="Introduzca su nombre..."
                required
                className="w-full bg-[#0a0a0a] border border-brand-green/30 focus:border-brand-green text-green-100 pl-8 pr-4 py-3 outline-none transition-colors placeholder:text-gray-600 rounded-sm"
              />
            </div>

            <div className="relative group">
              <span className="absolute top-3.5 left-3 text-brand-green font-bold">&gt;</span>
              <input
                type="email"
                name="email"
                placeholder="Introduzca su correo (user@domain.com)..."
                required
                className="w-full bg-[#0a0a0a] border border-brand-green/30 focus:border-brand-green text-green-100 pl-8 pr-4 py-3 outline-none transition-colors placeholder:text-gray-600 rounded-sm"
              />
            </div>

            <div className="relative group">
              <span className="absolute top-3.5 left-3 text-brand-green font-bold">&gt;</span>
              <textarea
                name="mensaje"
                placeholder="Escriba aquí los datos de transmisión..."
                required
                rows="4"
                className="w-full bg-[#0a0a0a] border border-brand-green/30 focus:border-brand-green text-green-100 pl-8 pr-4 py-3 outline-none transition-colors placeholder:text-gray-600 resize-none rounded-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full bg-[#111] text-gray-400 hover:bg-brand-green hover:text-[#0a0a0a] hover:scale-105 transition-all duration-500 flex items-center gap-3 group tracking-widest uppercase text-sm font-bold border border-transparent shadow-lg"
            >
              <svg className="w-4 h-4 fill-current group-hover:animate-bounce" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
              Ejecutar Script_
            </button>
          </form>
        </div>

        <div className="lg:w-1/3 pt-6 flex flex-col justify-center space-y-8 border-t lg:border-t-0 lg:border-l border-brand-green/20 lg:pl-8">
          <div>
            <span className="text-brand-green/70 block mb-6 text-center"># Enlaces Externos</span>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://www.linkedin.com/in/camilodeveloper/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-gray/50 border border-transparent hover:bg-brand-green hover:border-brand-green hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:scale-110 transition-all duration-500 group"
              >
                <div className="text-3xl text-blue-500 group-hover:text-[#0a0a0a] transition-colors duration-500 font-sans font-bold leading-none">in</div>
              </a>

              <a
                href="https://github.com/CamiloVelasquezBotero?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-gray/50 border border-transparent hover:bg-brand-green hover:border-brand-green hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:scale-110 transition-all duration-500 group"
              >
                <div className="text-white group-hover:text-[#0a0a0a] transition-colors duration-500">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
