import { ArrowRight } from 'lucide-react';

export default function ICUVentilators() {
  return (
    <section id="solutions" className="py-28 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <div className="inline-block mb-7">
          <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
            <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">ICU Solutions</span>
          </div>
        </div>

        <h2 className="text-[64px] leading-[1.1] font-bold text-gray-900 mb-8 tracking-tight max-w-5xl mx-auto">
          <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">ICU ventilators</span> built for<br />
          advanced care of <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Indian ICUs</span>
        </h2>
        
        <p className="text-[18px] text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          State-of-the-art respiratory support systems designed for the unique needs of Indian healthcare facilities
        </p>
        
        <button className="group bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-14 py-6 rounded-full text-[16px] font-bold shadow-xl shadow-blue-300/50 hover:shadow-2xl hover:shadow-blue-400/60 hover:-translate-y-1 transition-all inline-flex items-center gap-3">
          Explore Our Ventilators
          <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
}