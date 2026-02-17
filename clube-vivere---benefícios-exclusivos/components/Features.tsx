
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Descontos Locais",
      desc: "Economize nos melhores restaurantes, cinemas e lojas físicas da sua cidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Compras Online",
      desc: "Os maiores e-commerces do Brasil com cupons exclusivos e cashback direto na sua conta.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Telemedicina 24h",
      desc: "Médicos de plantão via vídeo ou chat para você, sem filas e no conforto do seu lar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="4" r="1.5" fill="currentColor" />
          <circle cx="17" cy="4" r="1.5" fill="currentColor" />
          <circle cx="18" cy="18" r="3.5" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" />
          <path d="M7 5.5c0 4 2 6.5 5 6.5s5-2.5 5-6.5" />
          <path d="M12 12v3c0 2.5 1 4 4 4" />
          <path d="M16 19c.5.5 1 .5 1.5.5" />
        </svg>
      )
    },
    {
      title: "TeleVet",
      desc: "Orientação veterinária online para cães e gatos. Cuidado e carinho para seu pet sem sair de casa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 21c-.3-1.5-.8-3-1.5-4.5-.8-1.5-1.8-3-3-4.2-.8-.8-1.5-1.5-2.5-2.2-.5-.3-1-.5-1.5-.7-.5-.2-1-.2-1.5-.2-.5 0-1 .2-1.5.4-.5.3-1 .6-1.5 1.1s-1 1-1.3 1.6c-.3.6-.5 1.2-.5 1.8v.2c0 .3.2.5.5.5h2.5c.3 0 .5-.2.5-.5v-1c0-.5.2-1 .5-1.3.3-.3.8-.5 1.3-.5h.2c.5 0 .9.2 1.3.5s.5.8.5 1.3v5.5c0 .3-.2.5-.5.5h-4.5c-.3 0-.5.2-.5.5v1.5c0 .3.2.5.5.5H21v-1.5c0-.2-.1-.4-.2-.6l-.8-1.4z" />
          <path d="M11 15.5c0-1.4.6-2.5 1.5-3.5 1-1 2-1.5 3-1.5h1.5l-1.5 5h3c.3 0 .5.2.5.5v1.5c0 .3-.2.5-.5.5h-6.5c-.8 0-1.5-.7-1.5-1.5v-1z" fill="white" />
        </svg>
      )
    }
  ];

  return (
    <section id="beneficios" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-oliva-950 tracking-tight">
            Benefícios que mudam sua rotina
          </h2>
          <p className="text-oliva-700/70 max-w-2xl mx-auto text-lg font-medium">
            Muito mais do que um clube de descontos. Somos seu parceiro em saúde, lazer e economia inteligente.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-oliva-50 hover:bg-cana-light/30 border border-transparent hover:border-oliva-200 transition-all group shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-oliva-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-oliva-950 mb-3">{f.title}</h3>
              <p className="text-oliva-800/70 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
