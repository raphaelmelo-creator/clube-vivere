
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppSection from './components/AppSection';
import PartnersSection from './components/PartnersSection';
import BenefitsSection from './components/BenefitsSection';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.clubedahora.vivere";
  const appStoreUrl = "https://apps.apple.com/br/app/clube-vivere/id6755839154";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-oliva-200 selection:text-oliva-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <AppSection />
        
        <PartnersSection />

        <BenefitsSection />
        
        <Pricing />

        {/* Call to Action Final */}
        <section className="py-24 px-4 bg-oliva-700">
          <div className="reveal max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pronto para economizar de verdade?
            </h2>
            <p className="text-xl opacity-90 font-medium">
              Escolha seu plano individual, baixe o app <strong>Clube Vivere</strong> e comece a aproveitar os benefícios hoje mesmo. Pagamento via Pix, Cartão ou Boleto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-oliva-700 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:bg-oliva-50 transition-all scale-100 hover:scale-105 active:scale-95"
              >
                App Store
              </a>
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-oliva-700 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:bg-oliva-50 transition-all scale-100 hover:scale-105 active:scale-95"
              >
                Google Play
              </a>
            </div>
            <p className="font-slogan text-3xl text-oliva-200 mt-8">Porque viver é pra sempre.</p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
