
import React from 'react';
import { siteConfig } from '../siteConfig';

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 md:py-32 px-4 bg-oliva-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal relative mb-16 md:mb-24">
          <div className="absolute inset-0 bg-cana/10 blur-[100px] rounded-full -z-10 scale-150"></div>
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-white text-oliva-800 px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-sm border border-oliva-200">
              <span className="w-2 h-2 bg-cana rounded-full animate-pulse"></span>
              Investimento Individual
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-oliva-950 leading-tight">
              Escolha viver com <br/>
              <span className="text-oliva-600">mais benefícios</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-10 mb-20">
          {siteConfig.plans.map((p, i) => (
            <div 
              key={i} 
              className={`reveal relative p-4 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white border-2 transition-all hover:shadow-2xl flex flex-col 
                w-[calc(50%-6px)] lg:w-[calc(33.333%-27px)] 
                ${p.recommended ? 'border-oliva-500 ring-4 md:ring-8 ring-oliva-500/5 shadow-lg' : 'border-oliva-200'}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {p.recommended && (
                <div className="absolute -top-3 md:-top-5 left-1/2 -translate-x-1/2 bg-oliva-700 text-white px-3 md:px-6 py-1 md:py-2 rounded-full text-[8px] md:text-xs font-bold uppercase tracking-widest shadow-lg z-10">
                  Mais Vendido
                </div>
              )}
              
              <div className="mb-4 md:mb-8">
                <h3 className="text-base md:text-3xl font-black text-oliva-950 mb-1 md:mb-3 leading-tight">{p.name}</h3>
                <p className="text-[9px] md:text-base text-oliva-600 font-medium line-clamp-1">{p.description}</p>
              </div>

              <div className="flex items-baseline gap-0.5 md:gap-2 mb-6 md:mb-10">
                <span className="text-[10px] md:text-xl text-oliva-500 font-bold">R$</span>
                <span className="text-2xl md:text-6xl font-black text-oliva-950">{p.price.split(',')[0]}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xl font-bold text-oliva-950">,{p.price.split(',')[1]}</span>
                  <span className="text-[8px] md:text-sm text-oliva-600 font-bold -mt-0.5 md:-mt-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-2.5 md:space-y-5 mb-8 md:mb-12 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-1.5 md:gap-4 text-oliva-900/90 font-medium">
                    <div className="w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-oliva-100 flex items-center justify-center text-oliva-700 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[9px] md:text-base leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#app"
                className={`w-full py-3 md:py-5 rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-lg text-center transition-all ${
                  p.recommended 
                    ? 'bg-oliva-700 text-white hover:bg-oliva-800 shadow-md' 
                    : 'bg-oliva-100 text-oliva-800 hover:bg-oliva-200'
                }`}
              >
                Assine no App
              </a>
            </div>
          ))}
        </div>

        <div className="reveal bg-cana/20 border-2 border-cana/30 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
            <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-black text-oliva-950">Você no controle.</h3>
              <p className="text-sm md:text-lg text-oliva-800 font-medium">
                Planos transparentes. Sem fidelidade, cancele quando quiser diretamente pelo app.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-6 w-full">
              {[
                { title: "Sem Fidelidade", icon: "✨" },
                { title: "Gestão via App", icon: "📱" },
                { title: "Pagamento Justo", icon: "💳" },
                { title: "Uso Imediato", icon: "✅" }
              ].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl md:rounded-2xl flex items-center gap-3 shadow-sm border border-white/50">
                  <span className="text-lg md:text-2xl">{item.icon}</span>
                  <h4 className="font-bold text-oliva-950 text-[10px] md:text-base">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
