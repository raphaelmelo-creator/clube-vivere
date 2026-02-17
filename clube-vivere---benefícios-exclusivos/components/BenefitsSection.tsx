
import React from 'react';

// --- ÁREA DE EDIÇÃO DAS IMAGENS ---
const IMG_LOCAL  = "https://cdn-icons-png.flaticon.com/512/8146/8146003.png"; 
const IMG_ONLINE = "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"; 
const IMG_SAUDE  = "https://cdn-icons-png.flaticon.com/512/2966/2966327.png"; 
const IMG_PET    = "https://cdn-icons-png.flaticon.com/512/616/616408.png";   

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Descontos Locais",
      desc: "Economize em restaurantes, academias e lojas da sua cidade.",
      imgUrl: IMG_LOCAL
    },
    {
      title: "Compras Online",
      desc: "Cupons exclusivos nos maiores e-commerces do Brasil.",
      imgUrl: IMG_ONLINE
    },
    {
      title: "Telemedicina 24h",
      desc: "Médicos de plantão via vídeo diretamente no seu celular.",
      imgUrl: IMG_SAUDE
    },
    {
      title: "TeleVet Pet",
      desc: "Consulta veterinária online para o seu melhor amigo.",
      imgUrl: IMG_PET
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 px-4 bg-oliva-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cana/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-block bg-white text-oliva-700 px-5 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-sm">
            Vantagens Exclusivas
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-oliva-950 tracking-tight leading-tight">
            Benefícios que mudam <br/>
            <span className="text-oliva-500">sua rotina para melhor.</span>
          </h2>
          <p className="text-oliva-700/70 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed">
            Muito mais do que um clube de descontos. Somos seu parceiro em saúde e lazer.
          </p>
        </div>
        
        {/* Grid ajustado para grid-cols-2 no Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="reveal group p-5 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border-2 border-transparent hover:border-oliva-100 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(43,49,27,0.1)] flex flex-col items-center text-center md:items-start md:text-left"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-oliva-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md border border-oliva-50 overflow-hidden p-2 md:p-4">
                <img 
                  src={benefit.imgUrl} 
                  alt={benefit.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm md:text-2xl font-black text-oliva-950 mb-2 md:mb-4 group-hover:text-oliva-600 transition-colors leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[10px] md:text-base text-oliva-800/70 leading-snug md:leading-relaxed font-semibold">
                {benefit.desc}
              </p>
              
              <div className="hidden md:flex mt-8 pt-6 border-t border-oliva-100/50 items-center text-oliva-400 font-bold text-sm group-hover:text-oliva-700 transition-colors w-full">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
