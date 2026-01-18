import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Facility() {
  return (
    <section className="py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block mb-3 md:mb-4 lg:mb-5">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Facility</span>
            </div>
          </div>

          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-tight">
            Our Manufacturing <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Facility</span>
          </h2>
          <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ISO 13485:2016 certified facility with cutting-edge technology
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
          <div className="rounded-[28px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white w-full lg:w-[calc(50%-0.75rem)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764114441123-586d13fc6ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Manufacturing Facility"
              className="w-full h-[180px] md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="rounded-[28px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white w-full lg:w-[calc(50%-0.75rem)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1670665352618-49ae2ae914ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMElDVSUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzY1OTExOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Quality Testing"
              className="w-full h-[180px] md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}