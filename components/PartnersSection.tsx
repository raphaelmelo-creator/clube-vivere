
import React, { useState, useEffect, useCallback, useRef, memo } from 'react';

const ALL_LOGOS = [
  "https://i.postimg.cc/pVhDJhm0/1.png",
  "https://i.postimg.cc/7ZD04Kmm/2.png",
  "https://i.postimg.cc/nLhmjC8C/3.png",
  "https://i.postimg.cc/SswYvdnf/4.png",
  "https://i.postimg.cc/LXrgbDJb/5.png",
  "https://i.postimg.cc/mg8zsBcY/10.png",
  "https://i.postimg.cc/yNxJ6t9k/11.png",
  "https://i.postimg.cc/PqJLf9ZL/12.png",
  "https://i.postimg.cc/HLnJWR5j/13.png",
  "https://i.postimg.cc/yNxJ6t9Z/14.png",
  "https://i.postimg.cc/FKzfF8c0/15.png",
  "https://i.postimg.cc/zfvLD6WK/16.png",
  "https://i.postimg.cc/fby3WpXx/17.png",
  "https://i.postimg.cc/3wNyrVpj/18.png",
  "https://i.postimg.cc/rpsdy3WC/19.png",
  "https://i.postimg.cc/PqJLf9Zy/20.png",
  "https://i.postimg.cc/tgJ1RwPN/21.png",
  "https://i.postimg.cc/wBMtxZJF/22.png",
  "https://i.postimg.cc/7LhCPd7K/23.png",
  "https://i.postimg.cc/jj2WqmN8/24.png",
  "https://i.postimg.cc/CK5ZMXDP/25.png",
  "https://i.postimg.cc/25yqjMv9/26.png",
  "https://i.postimg.cc/GptB3VYS/27.png",
  "https://i.postimg.cc/Jh0y7vJ2/28.png",
  "https://i.postimg.cc/wBMtxZJr/29.png",
  "https://i.postimg.cc/cJCK12Yj/30.png",
  "https://i.postimg.cc/xdZXX5y6/31.png",
  "https://i.postimg.cc/QMzFFmk6/32.png",
  "https://i.postimg.cc/t42Zjp1x/6.png",
  "https://i.postimg.cc/XYQGb4Z5/7.png",
  "https://i.postimg.cc/XYQGb4Zd/8.png",
  "https://i.postimg.cc/t42Zjp1P/9.png",
];

const NEWS_BANNERS = [
  { title: "NOVA PARCERIA!", desc: "Agora você tem até 15% de desconto em farmácias selecionadas." },
  { title: "NOVAS PARCERIAS", desc: "Novas Parcerias chegando em breve." },
  ];

// Memoized LogoSlot para evitar re-renders do pai
const LogoSlot = memo(({ logoUrl }: { logoUrl: string }) => {
  const [displayUrl, setDisplayUrl] = useState(logoUrl);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (logoUrl !== displayUrl) {
      setFade(false);
      const timer = setTimeout(() => {
        setDisplayUrl(logoUrl);
        setFade(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [logoUrl]);

  return (
    <div className="w-full h-24 md:h-32 flex items-center justify-center p-2 overflow-hidden bg-white/50 rounded-2xl border border-oliva-50/50">
      <img
        src={displayUrl}
        loading="lazy"
        alt="Parceiro"
        className={`max-w-full max-h-full object-contain mix-blend-multiply transition-all duration-700 ${
          fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
});

const PartnersSection: React.FC = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  // Centralizado: Muda um logo aleatório a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices(prev => {
        const next = [...prev];
        const slotToChange = Math.floor(Math.random() * prev.length);
        let newIdx = Math.floor(Math.random() * ALL_LOGOS.length);
        while (next.includes(newIdx)) {
          newIdx = Math.floor(Math.random() * ALL_LOGOS.length);
        }
        next[slotToChange] = newIdx;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % NEWS_BANNERS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="empresas" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-oliva-50 text-oliva-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-oliva-100">
            Nossa Rede
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-oliva-950 tracking-tight">
            Nossas empresas parceiras
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
          {visibleIndices.map((logoIdx, i) => (
            <LogoSlot key={i} logoUrl={ALL_LOGOS[logoIdx]} />
          ))}
        </div>

        <div className="mt-16 bg-cana/5 border border-cana/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left overflow-hidden">
          <span className="bg-white text-oliva-800 px-3 py-1 rounded-lg text-[10px] font-black uppercase shadow-sm">News</span>
          <div className="flex-1">
            <h4 className="font-bold text-oliva-950">{NEWS_BANNERS[newsIndex].title}</h4>
            <p className="text-sm text-oliva-800/70">{NEWS_BANNERS[newsIndex].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
