
import React from 'react';
import { siteConfig } from '../siteConfig';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <footer className="relative bg-oliva-900 text-oliva-100 pt-32 pb-12 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-oliva-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c64.35-8.12,127.88-29.2,194.28-41.29C235.82,72.01,281.37,63.85,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="space-y-8">
          <div className="flex flex-col items-start">
            <img src={siteConfig.brand.logoUrl} className="h-12 object-contain brightness-0 invert" alt={siteConfig.brand.name} />
            <span className="font-slogan text-xl text-oliva-400 mt-2">{siteConfig.brand.slogan}</span>
          </div>
          <p className="opacity-70 leading-relaxed font-medium text-balance">
            O novo conceito em benefícios que valoriza sua vida e seu bem-estar. Saúde, pet e economia real para todos.
          </p>
          <div className="flex gap-4">
            <a 
              href={siteConfig.contact.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-oliva-800 flex items-center justify-center hover:bg-cana hover:text-oliva-900 transition-all duration-300 border border-oliva-700 shadow-lg group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.259-2.911.556-.788.306-1.458.715-2.125 1.383-.668.667-1.077 1.337-1.383 2.125-.297.763-.499 1.634-.556 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.259 2.148.556 2.911.306.788.715 1.458 1.383 2.125.667.668 1.337 1.077 2.125 1.383.763.297 1.634.499 2.911.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.259 2.911-.556.788-.306 1.458-.715 2.125-1.383.668-.667-1.077-1.337-1.383-2.125.297-.763.499-1.634.556-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.259-2.148-.556-2.911-.306-.788-.715-1.458-1.383-2.125-.667-.668-1.337-1.077-2.125-1.383-.763-.297-1.634-.499-2.911-.556-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8">Navegação</h4>
          <ul className="space-y-4 opacity-70 font-medium text-lg">
            <li><a href="#inicio" className="hover:text-cana transition-colors block w-full">Início</a></li>
            <li><a href="#beneficios" className="hover:text-cana transition-colors block w-full">Benefícios</a></li>
            <li><a href="#planos" className="hover:text-cana transition-colors block w-full">Planos e Serviços</a></li>
            <li><a href={siteConfig.links.areaAssociado} className="hover:text-cana transition-colors block w-full">Área do Associado</a></li>
            <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cana transition-colors block w-full">Fale com Suporte</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8">Baixe o App</h4>
          <ul className="space-y-4">
            <li>
              <a href={siteConfig.links.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oliva-800 hover:bg-white hover:text-oliva-950 px-5 py-4 rounded-2xl transition-all border border-oliva-700 text-sm font-bold w-full sm:w-[220px] justify-center group h-16 box-border">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span className="whitespace-nowrap">App Store</span>
              </a>
            </li>
            <li>
              <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oliva-800 hover:bg-white hover:text-oliva-950 px-5 py-4 rounded-2xl transition-all border border-oliva-700 text-sm font-bold w-full sm:w-[220px] justify-center group h-16 box-border">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span className="whitespace-nowrap">Google Play</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8">Novidades</h4>
          <p className="opacity-70 mb-8 font-medium">Cadastre-se para receber novos benefícios e parceiros em primeira mão.</p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="flex-1 bg-oliva-800/50 border border-oliva-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-cana text-white placeholder-oliva-400 outline-none transition-all"
            />
            <button className="bg-cana text-oliva-900 p-4 rounded-2xl hover:bg-white transition-all shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-oliva-800 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-sm font-bold tracking-widest relative z-10 text-center md:text-left">
        <p>&copy; 2024 {siteConfig.brand.name.toUpperCase()}. TODOS OS DIREITOS RESERVADOS.</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-xs">
          <span>CNPJ: {siteConfig.brand.cnpj}</span>
          <span className="font-slogan tracking-normal text-lg">{siteConfig.brand.slogan}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
