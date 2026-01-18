export default function WeAre() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-50/50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 md:mb-6 lg:mb-8">
          <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
            <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Mission</span>
          </div>
        </div>

        <h2 className="text-[28px] md:text-[38px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.1] font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10 tracking-tight">
          We are a <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">team of innovators</span>,<br />
          passionate about <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">transforming<br />
          healthcare</span> through technology
        </h2>
        <p className="text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At Mediotech, we combine engineering excellence with deep healthcare expertise to create 
          medical equipment that makes a real difference in patient outcomes across India and beyond.
        </p>
      </div>
    </section>
  );
}