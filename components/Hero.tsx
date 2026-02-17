
import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    tag: "🍃 Economia Inteligente",
    title: "Vivere: Onde o benefício é para sempre.",
    desc: "Descontos reais que fazem a diferença no seu dia a dia. Lojas, lazer e gastronomia com a curadoria Clube Vivere.",
    bgClass: "from-oliva-100 to-oliva-50",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
    ctaText: "Ver Descontos",
    link: "#beneficios"
  },
  {
    id: 2,
    tag: "🩺 Telemedicina",
    title: "Cuidado e saúde sem fronteiras.",
    desc: "Acesso médico especializado 24 horas por dia. Prescrições digitais e atendimento humano via vídeo.",
    bgClass: "from-oliva-200 to-oliva-100",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=1000",
    ctaText: "Conhecer Planos",
    link: "#planos"
  },
  {
    id: 3,
    tag: "🐾 TeleVet",
    title: "Seu pet merece o melhor cuidado.",
    desc: "Orientação veterinária online ilimitada para cães e gatos. Tranquilidade para você e saúde para seu amigo.",
    bgClass: "from-cana-light to-oliva-100",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=1000",
    ctaText: "Proteger meu Pet",
    link: "#app"
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[95vh] md:h-[90vh] overflow-hidden pt-32 md:pt-48 pb-12 md:pb-0">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out bg-gradient-to-b ${banner.bgClass} ${
            index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto h-full px-4 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
            <div className={`space-y-6 md:space-y-8 text-center md:text-left transition-all duration-700 delay-300 order-1 ${
              index === current ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-oliva-800 px-5 py-2 rounded-full text-sm font-bold shadow-sm border border-white/20">
                {banner.tag}
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-oliva-950 leading-[1.1] md:leading-[1.05]">
                {banner.title}
              </h1>
              <p className="text-base md:text-xl text-oliva-800/80 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                {banner.desc}
              </p>
              <div className="pt-4">
                <a 
                  href={banner.link}
                  className="inline-block bg-oliva-900 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  {banner.ctaText}
                </a>
              </div>
            </div>

            <div className={`relative w-full max-w-[320px] md:max-w-none mx-auto order-2 transition-all duration-1000 delay-500 ${
              index === current ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              {/* Reduzido blur de 120px para 60px para economia de GPU */}
              <div className="absolute -inset-10 md:-inset-20 bg-oliva-400/10 blur-[60px] rounded-full"></div>
              <div className="relative">
                <img 
                  src={banner.image} 
                  loading={index === 0 ? "eager" : "lazy"}
                  className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-4 md:border-[12px] border-white/80 object-cover aspect-[4/3] w-full"
                  alt={banner.title}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-10">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full h-2 md:h-3 ${
              current === i ? 'w-12 md:w-16 bg-oliva-700' : 'w-2 md:w-3 bg-oliva-300 hover:bg-oliva-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
