export default function Footer() {
  return (
    <footer className="w-full mt-32 py-8 bg-black border-t border-brand-green/30 text-center">
      <div className="flex flex-col items-center justify-center">
        <img 
          src="/img/logo.png" 
          alt="Logo" 
          className="h-10 w-auto mb-4 opacity-50 relative bottom-1 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer"
        />
        <h3 className="text-gray-400 text-sm tracking-widest font-light mb-1">
          &lt;Created by/&gt;
        </h3>
        <p className="text-brand-green font-bold tracking-widest uppercase">
          Camilo Velasquez Botero
        </p>
        <div className="mt-8 flex items-center justify-center opacity-50">
          <span className="text-xs text-brand-green/50 px-2">SYSTEM_ALL_OK</span>
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
        </div>
      </div>
    </footer>
  );
}
