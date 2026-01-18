export default function MadeInIndia() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-slate-200 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
        <span className="text-[200px] md:text-[250px] lg:text-[280px] xl:text-[300px] 2xl:text-[320px] font-bold text-gray-900 leading-none tracking-tighter">INDIA</span>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-28 h-28 border-3 border-blue-100 rounded-[24px] rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-3 border-blue-200 rounded-full opacity-15"></div>
      
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 md:mb-6 lg:mb-8">
          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
            <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Manufacturing Excellence</span>
          </div>
        </div>

        <h2 className="text-[32px] md:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] leading-[1.05] font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10 tracking-tight">
          Made in <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">India</span>,<br />
          for the <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">World</span>
        </h2>
        <p className="text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Manufacturing excellence meets healthcare innovation. Our ICU equipment is designed 
          with precision and built to serve healthcare facilities globally, proudly carrying 
          the Make in India legacy with international quality standards.
        </p>
      </div>
    </section>
  );
}