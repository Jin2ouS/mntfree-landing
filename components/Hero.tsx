
import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  const handleMouseMove = (e: MouseEvent) => {
    // Normalizing coordinates to -1 to 1
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    
    // Smoothly update state using RAF logic internally or just simple state update
    // For performance we use RAF to handle the actual transform
    setMousePos({ x, y });
  };

  useEffect(() => {
    const animate = () => {
      if (cardRef.current) {
        // Reduced sensitivity for mobile/small screens
        const factor = window.innerWidth < 768 ? 5 : 20;
        const rotateY = mousePos.x * factor;
        const rotateX = -mousePos.y * factor;
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePos]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Spline Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe 
          src='https://my.spline.design/shiny3dcoinlogoanimation-IDq0OkaPUtQtUC0gszhGTWO1/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="scale-110 md:scale-100 opacity-60 md:opacity-80"
          title="MnTfree 3D Logo"
        ></iframe>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]"></div>
      </div>

      {/* Glass Card Overlay */}
      <div 
        ref={cardRef}
        className="glass-morphism relative z-10 max-w-2xl w-full p-8 md:p-16 rounded-[40px] text-center transition-transform duration-200 ease-out"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
          MnTfree Intelligence
        </span>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white">
          시간을 사는<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">자동화</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed">
          반복을 시스템으로 바꾸면,<br className="md:hidden" /> 자유는 시간 위에 쌓입니다.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a 
            href="https://stock.mntfree.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
          >
            <span className="text-sm font-semibold group-hover:scale-105 transition-transform">Stock</span>
          </a>
          <a 
            href="https://crypto.mntfree.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-4 px-6 rounded-2xl bg-emerald-500/80 hover:bg-emerald-400 text-black transition-all group"
          >
            <span className="text-sm font-bold group-hover:scale-105 transition-transform">Crypto</span>
          </a>
          <a 
            href="https://futures.mntfree.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
          >
            <span className="text-sm font-semibold group-hover:scale-105 transition-transform">Futures</span>
          </a>
          <a 
            href="https://property.mntfree.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
          >
            <span className="text-sm font-semibold group-hover:scale-105 transition-transform">Property</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
