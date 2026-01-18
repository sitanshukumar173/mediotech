import { ArrowRight } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    { number: '500+', label: 'Healthcare Facilities', gradient: 'from-[#3b82f6] to-[#2563EB]' },
    { number: '15+', label: 'Years of Excellence', gradient: 'from-[#60a5fa] to-[#3b82f6]' },
    { number: '50+', label: 'Product Variants', gradient: 'from-[#2563EB] to-[#1d4ed8]' },
    { number: '98%', label: 'Customer Satisfaction', gradient: 'from-[#ef4444] to-[#dc2626]' },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-16 my-8 md:my-10 lg:my-12 xl:my-16">
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
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
              <div className={`inline-flex items-center justify-center w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-28 h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-28 bg-gradient-to-br ${stat.gradient} rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mb-3 md:mb-4 lg:mb-5 xl:mb-6 shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-all duration-300 backdrop-blur-sm`}>
                <span className="text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[40px] font-bold text-white">{stat.number}</span>
              </div>
              <div className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] text-white font-semibold">{stat.label}</div>
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