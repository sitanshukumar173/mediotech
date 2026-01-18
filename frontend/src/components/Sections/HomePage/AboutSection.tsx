export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/15 to-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015]">
        <span className="text-[200px] md:text-[280px] lg:text-[340px] font-bold text-gray-900 leading-none tracking-tighter">MEDIOTECH</span>
      </div>
      
      <div className="px-5 md:px-8 lg:px-12 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-block mb-4 md:mb-5">
            <div className="flex items-center gap-2 md:gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">About Us</span>
            </div>
          </div>

          <h2 className="text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-gray-900 mb-4 md:mb-5 tracking-tight">
            About <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Mediotech</span>
          </h2>
        </div>
        
        {/* Content Card */}
        <div className="bg-white border-2 border-gray-100 rounded-[24px] md:rounded-[32px] lg:rounded-[40px] shadow-lg p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 text-center">
            <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-700 leading-relaxed">
              Mediotech is India's leading manufacturer of advanced ICU equipment and critical care solutions. 
              Founded with a vision to make world-class medical technology accessible across healthcare facilities, 
              we've been at the forefront of innovation in the medical equipment industry for over 15 years.
            </p>
            
            <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-700 leading-relaxed">
              Our commitment to excellence, combined with deep understanding of Indian healthcare needs, has made 
              us the trusted partner for hundreds of hospitals and medical institutions nationwide. We manufacture 
              a comprehensive range of ICU equipment including ventilators, patient monitors, infusion pumps, and 
              anesthesia systems.
            </p>
            
            <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-700 leading-relaxed">
              Every product is designed with the clinician and patient in mind, ensuring ease of use, reliability, 
              and superior performance. Our state-of-the-art manufacturing facility in India adheres to international 
              quality standards, and we're proud to carry ISO 13485:2016 certification.
            </p>
            
            {/* Stats */}
            <div className="pt-6 md:pt-8 flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="text-center group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="text-[28px] md:text-[36px] lg:text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-[10px] md:text-[12px] lg:text-[13px] text-gray-600 font-semibold">Healthcare Facilities</div>
              </div>
              <div className="text-center group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="text-[28px] md:text-[36px] lg:text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-[10px] md:text-[12px] lg:text-[13px] text-gray-600 font-semibold">Years of Excellence</div>
              </div>
              <div className="text-center group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="text-[28px] md:text-[36px] lg:text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-[10px] md:text-[12px] lg:text-[13px] text-gray-600 font-semibold">Product Variants</div>
              </div>
              <div className="text-center group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#ef4444] mb-1 md:mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-[10px] md:text-[12px] lg:text-[13px] text-gray-600 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}