
import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-oliva-900/95 backdrop-blur-md border-b border-oliva-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center h-10 md:h-12">
            <img src={siteConfig.brand.logoUrl} className="h-full object-contain brightness-0 invert" alt={siteConfig.brand.name} />
            <span className="font-slogan text-[10px] md:text-xs text-oliva-200 tracking-wide mt-1">{siteConfig.brand.slogan}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-semibold text-oliva-50">
            <a href="#inicio" className="hover:text-cana transition-colors text-sm uppercase tracking-wider">Início</a>
            <a href="#beneficios" className="hover:text-cana transition-colors text-sm uppercase tracking-wider">Benefícios</a>
            <a href="#planos" className="hover:text-cana transition-colors text-sm uppercase tracking-wider">Planos</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cana transition-colors flex items-center gap-1 text-sm uppercase tracking-wider">
              Suporte
            </a>
          </nav>

          <div className="flex items-center gap-3 border-l border-oliva-800 pl-8">
            <a 
              href={siteConfig.links.areaAssociado} 
              className="text-oliva-100 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold border border-oliva-700 px-5 py-2.5 rounded-full hover:bg-oliva-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Área do Associado
            </a>
            <a href="#planos" className="bg-cana text-oliva-950 px-7 py-2.5 rounded-full font-black hover:bg-white transition-all shadow-lg text-sm whitespace-nowrap">
              Assine Agora
            </a>
          </div>
        </div>

        <button 
          className="lg:hidden text-oliva-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-oliva-900 border-b border-oliva-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-5 font-bold text-oliva-50 uppercase tracking-widest text-sm">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
            <a href="#planos" onClick={() => setIsMenuOpen(false)}>Planos</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Suporte</a>
            
            <div className="h-px bg-oliva-800 my-2"></div>
            
            <a href={siteConfig.links.areaAssociado} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-white bg-oliva-800 p-4 rounded-2xl justify-center normal-case tracking-normal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Área do Associado
            </a>
            <a href="#planos" onClick={() => setIsMenuOpen(false)} className="bg-cana text-oliva-950 w-full py-4 rounded-2xl font-black shadow-xl text-center">
              Assine Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
