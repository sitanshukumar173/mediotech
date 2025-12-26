export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-blue-50/15 to-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015]">
        <span className="text-[340px] font-bold text-gray-900 leading-none tracking-tighter">MEDIOTECH</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-5">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">About Us</span>
            </div>
          </div>

          <h2 className="text-[48px] font-bold text-gray-900 mb-5 tracking-tight">
            About <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Mediotech</span>
          </h2>
        </div>
        
        {/* Content Card */}
        <div className="bg-white border-2 border-gray-100 rounded-[40px] shadow-lg p-10 hover:shadow-xl transition-all">
          <div className="max-w-4xl mx-auto space-y-5 text-center">
            <p className="text-[17px] text-gray-700 leading-relaxed">
              Mediotech is India's leading manufacturer of advanced ICU equipment and critical care solutions. 
              Founded with a vision to make world-class medical technology accessible across healthcare facilities, 
              we've been at the forefront of innovation in the medical equipment industry for over 15 years.
            </p>
            
            <p className="text-[17px] text-gray-700 leading-relaxed">
              Our commitment to excellence, combined with deep understanding of Indian healthcare needs, has made 
              us the trusted partner for hundreds of hospitals and medical institutions nationwide. We manufacture 
              a comprehensive range of ICU equipment including ventilators, patient monitors, infusion pumps, and 
              anesthesia systems.
            </p>
            
            <p className="text-[17px] text-gray-700 leading-relaxed">
              Every product is designed with the clinician and patient in mind, ensuring ease of use, reliability, 
              and superior performance. Our state-of-the-art manufacturing facility in India adheres to international 
              quality standards, and we're proud to carry ISO 13485:2016 certification.
            </p>
            
            {/* Stats */}
            <div className="pt-8 grid grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-[13px] text-gray-600 font-semibold">Healthcare Facilities</div>
              </div>
              <div className="text-center group">
                <div className="text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-[13px] text-gray-600 font-semibold">Years of Excellence</div>
              </div>
              <div className="text-center group">
                <div className="text-[44px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-[13px] text-gray-600 font-semibold">Product Variants</div>
              </div>
              <div className="text-center group">
                <div className="text-[44px] font-bold text-[#ef4444] mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-[13px] text-gray-600 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}