
import React from 'react';

const LoopCard: React.FC<{ 
  step: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  delay: string; 
}> = ({ step, title, desc, icon, delay }) => (
  <div className={`fade-in-section glass-morphism p-10 rounded-[32px] hover:translate-y-[-10px] transition-all duration-500 border border-white/5 hover:border-emerald-500/30 group`}>
    <div className="mb-8 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <div className="text-xs font-bold text-emerald-500/50 mb-2 uppercase tracking-widest">{step}</div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
    <p className="text-white/50 leading-relaxed font-light">{desc}</p>
  </div>
);

const FreedomLoop: React.FC = () => {
  return (
    <section id="freedom-loop" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 fade-in-section">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Freedom Loop</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-8"></div>
        <p className="max-w-2xl mx-auto text-white/40 text-lg font-light leading-relaxed">
          우리는 관찰하고, 자동화하고, 마침내 복리로 쌓이는 시간을 얻습니다.<br />
          이것이 MnTfree가 지향하는 가치입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LoopCard 
          step="Step 01"
          title="Observe"
          desc="매일 반복되는 일상과 데이터의 흐름을 관찰합니다. 어디에서 시간이 낭비되는지, 어디에서 기회가 발생하는지 파악하는 첫 단계입니다."
          delay="0"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 8v4l2 2"/></svg>
          }
        />
        <LoopCard 
          step="Step 02"
          title="Automate"
          desc="기술과 논리를 결합하여 사람이 개입하지 않아도 돌아가는 시스템을 만듭니다. 반복은 기계가, 창의는 사람이 담당합니다."
          delay="200"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
          }
        />
        <LoopCard 
          step="Step 03"
          title="Compound Time"
          desc="절약된 시간은 다시 새로운 시스템을 만드는 자본이 됩니다. 시간의 복리는 경제적 자유를 향한 가장 강력한 도구입니다."
          delay="400"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          }
        />
      </div>

      {/* Philosophy Banner */}
      <div className="mt-32 fade-in-section glass-morphism rounded-[40px] p-12 md:p-20 relative overflow-hidden group">
        <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-emerald-500/5 rotate-12 blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            "시스템은 당신이 잠든 사이에도 <br />당신의 자유를 위해 일합니다."
          </h2>
          <p className="text-white/50 text-xl font-light italic">
            — MnTfree Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreedomLoop;
