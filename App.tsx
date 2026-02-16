
import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import FreedomLoop from './components/FreedomLoop';

const App: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => observer.observe(section));

    return () => {
      fadeSections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <div className="text-2xl font-bold tracking-tighter text-white/90">
          MnTfree<span className="text-emerald-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a href="#hero" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#freedom-loop" className="hover:text-white transition-colors">Freedom Loop</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <FreedomLoop />
      </main>

      <footer className="py-20 px-6 text-center border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">MnTfree</h3>
          <p className="text-white/40 mb-8 max-w-lg mx-auto leading-relaxed">
            반복되는 수고를 자동화하고, 절약된 시간을 가치 있는 곳에 투자하십시오. 
            MnTfree는 당신의 시스템 구축을 돕습니다.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://stock.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Stock</a>
            <a href="https://crypto.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Crypto</a>
            <a href="https://futures.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Futures</a>
            <a href="https://property.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Property</a>
          </div>
          <div className="text-white/20 text-xs">
            © {new Date().getFullYear()} MnTfree. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
