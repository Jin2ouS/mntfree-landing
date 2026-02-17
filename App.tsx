
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
          <h3 className="text-2xl font-bold mb-4">Money & Time Free</h3>
          <p className="mb-8 max-w-lg mx-auto text-center leading-[1.7]">
            <span className="block font-semibold text-white/90">반복을 자동화하고, 시간의 자유를 만드십시오.</span>
            <span className="block text-white/75 mt-1">MnTfree는 당신의 시스템을 구축합니다.</span>
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <a href="https://stock.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Stock</a>
            <a href="https://crypto.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Crypto</a>
            <a href="https://futures.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Futures</a>
            <a href="https://property.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Property</a>
            <a href="https://planner.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">Planner</a>
            <a href="https://automt.mntfree.com" className="text-white/60 hover:text-emerald-400 transition-colors">AutoMT</a>
          </div>
          <div className="text-center">
            <div className="text-white/30 text-xs">© 2026 MnTfree</div>
            <a
              href="https://everprin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-[10px] text-white/55 hover:text-white/70 transition-colors"
            >
              Built on EVERPRIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
