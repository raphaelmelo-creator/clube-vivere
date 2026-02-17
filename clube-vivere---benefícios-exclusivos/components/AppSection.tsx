
import React from 'react';
import { siteConfig } from '../siteConfig';

const AppSection: React.FC = () => {
  return (
    <section id="app" className="py-24 px-4 bg-oliva-100/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="reveal md:w-1/2 space-y-8 relative z-10">
          <div className="inline-block bg-oliva-200 text-oliva-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Baixe o App {siteConfig.brand.name}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-oliva-950 leading-[1.1]">
            Sua vida mais <br/>
            <span className="text-oliva-600">simples e digital.</span>
          </h2>
          
          <p className="text-xl text-oliva-800/70 font-medium leading-relaxed">
            Baixe agora o aplicativo <strong>{siteConfig.brand.name}</strong> na sua loja favorita. É através dele que você utiliza seu cartão virtual, acessa a telemedicina, consulta o seu pet e recebe seus descontos nas suas lojas favoritas.
          </p>
          
          <div className="grid gap-6">
            {[
              {
                title: "Cartão Virtual Imediato",
                desc: "Após a assinatura, seu cartão virtual fica disponível no app. Sem plásticos, sem espera. Basta apresentar na rede parceira.",
                icon: "📱"
              },
              {
                title: "Telemedicina Direto no Celular",
                desc: "Consulte médicos e veterinários sem sair de casa. O atendimento por vídeo acontece dentro do próprio app.",
                icon: "🩺"
              },
              {
                title: "Pagamento Facilitado",
                desc: "Assine seu plano usando Cartão de Crédito, Pix ou Boleto. Tudo seguro e automatizado para sua comodidade.",
                icon: "🏦"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/50 border border-white hover:bg-white transition-all shadow-sm">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-oliva-950 text-lg mb-1">{item.title}</h4>
                  <p className="text-oliva-700/80 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={siteConfig.links.appStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-oliva-900 text-white px-7 py-3 rounded-2xl font-bold flex items-center gap-4 hover:bg-black transition-all shadow-lg transform hover:-translate-y-1 group"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Disponível na</span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>

            <a 
              href={siteConfig.links.playStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-oliva-900 text-white px-7 py-3 rounded-2xl font-bold flex items-center gap-4 hover:bg-black transition-all shadow-lg transform hover:-translate-y-1 group"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Disponível no</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal md:w-1/2 relative" style={{ transitionDelay: '300ms' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-oliva-400/5 blur-[60px] rounded-full"></div>
          <div className="relative flex justify-center items-center">
            <div className="w-[280px] h-[580px] bg-oliva-950 rounded-[3rem] border-[8px] border-oliva-800 shadow-[0_0_80px_rgba(43,49,27,0.15)] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-oliva-800 rounded-b-2xl z-20"></div>
              <div className="h-full w-full bg-white p-6 pt-12 flex flex-col gap-4 overflow-y-auto no-scrollbar">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-10 h-10 bg-oliva-900 rounded-full flex items-center justify-center p-2 shadow-sm">
                    <img src={siteConfig.brand.logoUrl} loading="lazy" className="w-full h-full object-contain brightness-0 invert" alt={siteConfig.brand.name} />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-oliva-50 rounded-full flex items-center justify-center text-[10px]">🔔</div>
                    <div className="w-6 h-6 bg-oliva-50 rounded-full flex items-center justify-center text-[10px]">👤</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-32 w-full bg-gradient-to-br from-cana to-oliva-300 rounded-[2rem] p-5 relative overflow-hidden flex flex-col justify-between shadow-md">
                     <div className="flex justify-between items-start">
                       <div className="text-[8px] font-black text-oliva-900 opacity-30 italic tracking-tighter uppercase">{siteConfig.brand.name}</div>
                       <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                     </div>
                     <div>
                        <div className="text-[10px] font-bold text-oliva-950 mb-1 uppercase">Cartão Virtual</div>
                        <div className="text-[9px] text-oliva-900 font-black tracking-wide uppercase">Maria Silva Oliveira</div>
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { icon: "🩺", label: "TELEMEDICINA" },
                    { icon: "🐾", label: "TELEVET" },
                    { icon: "📍", label: "DESCONTOS LOCAIS" },
                    { icon: "🛍️", label: "LOJAS ONLINE" },
                    { icon: "💳", label: "PAGAMENTOS" },
                    { icon: "🏷️", label: "CUPONS" },
                    { icon: "📜", label: "HISTÓRICO" },
                    { icon: "⚙️", label: "AJUSTES" }
                  ].map((item, idx) => (
                    <div key={idx} className="h-16 bg-oliva-50 rounded-xl flex flex-col items-center justify-center gap-1 border border-oliva-100/50 shadow-sm hover:bg-white transition-colors cursor-pointer">
                      <div className="text-xl">{item.icon}</div>
                      <div className="text-[6.5px] font-black text-oliva-900 text-center px-1 uppercase leading-tight tracking-tighter">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="w-full bg-oliva-900 text-white py-4 rounded-2xl text-[10px] font-black text-center shadow-lg uppercase tracking-widest">
                    Acessar Clube
                  </div>
                </div>
                
                <div className="mt-auto h-1 w-20 bg-oliva-200 rounded-full mx-auto mb-2 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
