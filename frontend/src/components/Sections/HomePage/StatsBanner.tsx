import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedNumber } from '../../core/animated-number';

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animateStats, setAnimateStats] = useState(false);

  const stats = [
    { value: 500, suffix: '+', label: 'Healthcare Facilities' },
    { value: 15, suffix: '+', label: 'Years of Excellence' },
    { value: 50, suffix: '+', label: 'Product Variants' },
    { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  ];

  useEffect(() => {
    if (!sectionRef.current || animateStats) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [animateStats]);

  return (
    <section ref={sectionRef} className="py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-16 my-8 md:my-10 lg:my-12 xl:my-16">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden rounded-[40px] md:rounded-[48px] lg:rounded-[56px] xl:rounded-[60px] py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 px-5 md:px-6 lg:px-8">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full shadow-lg shadow-white/20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-[bounce_3s_ease-in-out_infinite]"></div>
          
          <div className="relative z-10">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block mb-3 md:mb-4 lg:mb-5">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-5 py-2 md:py-2.5">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[10px] lg:text-[11px] font-semibold text-white uppercase tracking-wider">Join Our Network</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] xl:text-[46px] 2xl:text-[48px] font-bold text-white mb-3 md:mb-4 lg:mb-5 tracking-tight">
            Join 500+ Healthcare Institutions
          </h2>
          <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Become part of India's leading medical network powered by Mediotech's advanced ICU solutions
          </p>
        </div>
        
        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-5 md:gap-x-10 md:gap-y-6 lg:gap-x-12 lg:gap-y-7">
          {stats.map((stat, index) => (
            <div key={index} className="text-center min-w-[140px] md:min-w-[170px] lg:min-w-[190px]">
              <div className="text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold text-white leading-none mb-1.5 md:mb-2">
                <AnimatedNumber
                  className="inline"
                  springOptions={{
                    bounce: 0,
                    duration: 2000,
                  }}
                  value={animateStats ? stat.value : 0}
                />
                {stat.suffix}
              </div>
              <div className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] text-blue-100 font-semibold leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <button className="group bg-white text-[#2563EB] px-8 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-semibold shadow-2xl shadow-blue-900/40 hover:shadow-3xl hover:-translate-y-1 transition-all inline-flex items-center gap-2 md:gap-3">
            Partner With Us
            <ArrowRight className="w-4 md:w-5 lg:w-5 h-4 md:h-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}