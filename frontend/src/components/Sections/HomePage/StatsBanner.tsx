import { ArrowRight } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    { number: '500+', label: 'Healthcare Facilities', gradient: 'from-[#3b82f6] to-[#2563EB]' },
    { number: '15+', label: 'Years of Excellence', gradient: 'from-[#60a5fa] to-[#3b82f6]' },
    { number: '50+', label: 'Product Variants', gradient: 'from-[#2563EB] to-[#1d4ed8]' },
    { number: '98%', label: 'Customer Satisfaction', gradient: 'from-[#ef4444] to-[#dc2626]' },
  ];

  return (
    <section className="py-16 my-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden rounded-[60px] py-16 px-8">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full shadow-lg shadow-white/20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-[bounce_3s_ease-in-out_infinite]"></div>
          
          <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-5">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-wide">Join Our Network</span>
            </div>
          </div>

          <h2 className="text-[48px] font-bold text-white mb-5 tracking-tight">
            Join 500+ Healthcare Institutions
          </h2>
          <p className="text-[17px] text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Become part of India's leading medical network powered by Mediotech's advanced ICU solutions
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className={`inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br ${stat.gradient} rounded-[24px] mb-6 shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-all duration-300 backdrop-blur-sm`}>
                <span className="text-[40px] font-bold text-white">{stat.number}</span>
              </div>
              <div className="text-[16px] text-white font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="group bg-white text-[#2563EB] px-12 py-5 rounded-full text-[16px] font-semibold shadow-2xl shadow-blue-900/40 hover:shadow-3xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
            Partner With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}