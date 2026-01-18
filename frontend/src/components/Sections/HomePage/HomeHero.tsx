import { Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import './HomeHero.css';

export function HomeHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden pt-6 lg:pt-0">
        {/* Blue gradient background with rounded corners */}
        <div className="absolute right-0 top-0 bottom-0 lg:bottom-16 w-full lg:w-[45%]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#3b82f6]/70 to-[#1d4ed8] lg:bg-gradient-to-br lg:from-[#3b82f6] lg:via-[#2563EB] lg:to-[#1e40af] lg:rounded-l-[60px]"></div>
          {/* Enhanced glow effects */}
          <div className="absolute top-32 right-28 w-[550px] h-[550px] bg-white/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-16 w-[650px] h-[650px] bg-blue-300/10 rounded-full blur-3xl"></div>
          {/* Mobile decorative circles - hidden on tablet/desktop */}
          <div className="absolute top-24 right-8 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl lg:hidden animate-pulse"></div>
          <div className="absolute bottom-32 left-6 w-48 h-48 bg-[#60a5fa]/25 rounded-full blur-3xl lg:hidden"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl lg:hidden"></div>
        </div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-grid-pattern"></div>

        <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-12 md:py-10 lg:py-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-4 items-center min-h-[92vh] md:min-h-screen lg:min-h-screen">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-7 md:space-y-6 lg:space-y-3 py-6 md:py-4 lg:py-0.5 order-2 md:order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge - Enhanced */}
              <div className="inline-flex items-center gap-2 md:gap-2.5 lg:gap-2 bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200/60 rounded-full px-5 md:px-5.5 lg:px-4 py-2.5 md:py-2.5 lg:py-2 shadow-lg shadow-blue-200/40 hover:shadow-xl hover:shadow-blue-300/50 transition-all hover:scale-105 mx-auto lg:mx-0">
                <div className="w-2.5 h-2.5 md:w-2.5 lg:w-2 lg:h-2 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <span className="text-[9px] md:text-[10px] lg:text-[10px] font-bold bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] bg-clip-text text-transparent uppercase tracking-[0.15em]">Leading ICU Solutions</span>
              </div>

              {/* Headline - Enhanced */}
              <div className="space-y-5 md:space-y-4 lg:space-y-2 w-full flex flex-col items-center lg:items-start">
                <h1 className="text-[52px] md:text-[64px] lg:text-[44px] leading-[0.9] md:leading-[0.9] lg:leading-[0.92] font-bold text-gray-900 tracking-tight text-center lg:text-left">
                  Advanced
                  <br />
                  <span className="relative inline-block bg-gradient-to-r from-gray-900 via-[#1d4ed8] to-gray-900 bg-clip-text text-transparent">
                    ICU Care
                    <div className="absolute -right-3 md:-right-3.5 lg:-right-3 top-1 md:top-2 lg:top-2 w-6 h-6 md:w-6.5 md:h-6.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full shadow-xl shadow-red-400/60 animate-pulse"></div>
                    {/* Subtle glow behind text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-2xl -z-10"></div>
                  </span>
                </h1>
                <p className="text-[15px] md:text-[16px] lg:text-[13px] text-gray-600 leading-[1.75] md:leading-[1.7] lg:leading-[1.5] max-w-[520px] md:max-w-[580px] lg:max-w-[420px] text-center lg:text-left mx-auto lg:mx-0">
                  <span className="font-bold text-gray-900">We deliver</span> cutting-edge medical technology and{' '}
                  <span className="font-bold text-gray-900">we care</span> about patient outcomes and safety across India's healthcare network.
                </p>
              </div>

              {/* Buttons - Enhanced */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 lg:gap-3 w-full md:w-auto md:justify-center lg:justify-start">
                <button className="group inline-flex items-center justify-center gap-3 md:gap-3.5 lg:gap-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white pl-7 md:pl-7 lg:pl-6 pr-2.5 md:pr-2.5 lg:pr-2 py-3.5 md:py-4 lg:py-3 rounded-full hover:shadow-2xl hover:shadow-blue-400/40 hover:-translate-y-1 transition-all shadow-xl">
                  <span className="text-[13px] md:text-[14px] lg:text-[13px] font-bold whitespace-nowrap">Explore Ventilators</span>
                  <div className="w-9 h-9 md:w-10 md:h-10 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-4 lg:h-4 text-white" />
                  </div>
                </button>
                <button className="group inline-flex items-center justify-center gap-3 md:gap-3.5 lg:gap-3 bg-white border-2 border-gray-200 text-gray-900 pl-7 md:pl-7 lg:pl-6 pr-2.5 md:pr-2.5 lg:pr-2 py-3.5 md:py-4 lg:py-3 rounded-full hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="text-[13px] md:text-[14px] lg:text-[13px] font-bold whitespace-nowrap">Watch Demo</span>
                  <ArrowRight className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Cards */}
              <div className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-4 lg:gap-3 md:pt-0 lg:pt-1 w-full items-center lg:items-stretch">
                {/* Tour Card - Enhanced */}
                <div className="relative w-full md:w-full lg:w-32 max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0 h-40 md:h-48 lg:h-32 rounded-[32px] md:rounded-[32px] lg:rounded-[24px] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-white/80">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1720180246349-584d40758674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NTg3ODYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Facility"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-9 h-9 md:w-10 md:h-10 lg:w-7 lg:h-7 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all shadow-lg">
                        <ArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-[13px] lg:text-[11px] font-bold">Virtual tour</span>
                    </div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full shadow-lg"></div>
                </div>

                {/* Stats Card - Enhanced */}
                <div className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-[32px] md:rounded-[32px] lg:rounded-[24px] px-5 md:px-8 lg:px-4 xl:px-5 2xl:px-6 py-6 md:py-8 lg:py-4 xl:py-4 2xl:py-5 shadow-xl border-2 border-blue-100/50 flex-1 w-full md:w-full lg:w-auto max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern-small"></div>
                  
                  <div className="relative z-10">
                    <div className="text-[9px] lg:text-[8px] text-gray-500 mb-3 lg:mb-2 xl:mb-2.5 2xl:mb-3 uppercase tracking-[0.15em] font-bold flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#2563EB] rounded-full"></div>
                      Proven Excellence
                    </div>
                    <div className="flex items-center justify-between gap-3 md:gap-4 lg:gap-1.5 xl:gap-1.5 2xl:gap-2">
                      <div className="text-center flex-1">
                        <div className="text-[32px] md:text-[40px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-bold bg-gradient-to-br from-[#1d4ed8] via-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent leading-none mb-2 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1.5 group-hover:scale-110 transition-transform">500+</div>
                        <div className="text-[9px] lg:text-[8px] text-gray-600 leading-tight font-medium">Hospitals<br />served</div>
                      </div>
                      <div className="w-[2px] md:w-[2px] lg:w-[1px] xl:w-[1px] 2xl:w-[1.5px] h-12 md:h-14 lg:h-9 xl:h-10 2xl:h-11 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
                      <div className="text-center flex-1">
                        <div className="text-[32px] md:text-[40px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-bold bg-gradient-to-br from-[#1d4ed8] via-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent leading-none mb-2 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1.5 group-hover:scale-110 transition-transform">15+</div>
                        <div className="text-[9px] lg:text-[8px] text-gray-600 leading-tight font-medium">Years of<br />experience</div>
                      </div>
                      <div className="w-[2px] md:w-[2px] lg:w-[1px] xl:w-[1px] 2xl:w-[1.5px] h-12 md:h-14 lg:h-9 xl:h-10 2xl:h-11 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
                      <div className="text-center flex-1">
                        <div className="text-[32px] md:text-[40px] lg:text-[24px] xl:text-[26px] 2xl:text-[30px] font-bold bg-gradient-to-br from-[#ef4444] to-[#dc2626] bg-clip-text text-transparent leading-none mb-2 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1.5 group-hover:scale-110 transition-transform">98%</div>
                        <div className="text-[9px] lg:text-[8px] text-gray-600 leading-tight font-medium">Customer<br />satisfaction</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Center - Doctor Image */}
            <div className="hidden lg:flex lg:col-span-4 relative items-center justify-center py-4 lg:py-1 order-1 lg:order-2">
              <div className="relative rounded-[40px] lg:rounded-[32px] overflow-visible shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTkxMzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Professional"
                  className="w-full h-auto max-h-[60vh] lg:max-h-[55vh] object-cover rounded-[40px] lg:rounded-[32px]"
                />

                {/* Floating Labels */}
                <div className="absolute top-[22%] -left-6 lg:-left-4 bg-white rounded-full px-4 lg:px-3 py-2 lg:py-1.5 shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] lg:text-[12px] font-bold text-gray-900">Reliability</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 lg:w-1.5 lg:h-1.5 bg-[#ef4444] rounded-full"></div>
                </div>

                <div className="absolute top-[46%] -right-6 lg:-right-4 bg-white rounded-full px-4 lg:px-3 py-2 lg:py-1.5 shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] lg:text-[12px] font-bold text-gray-900">Innovation</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 lg:w-1.5 lg:h-1.5 bg-[#ef4444] rounded-full"></div>
                </div>

                <div className="absolute bottom-[18%] right-0 bg-white rounded-full px-4 lg:px-3 py-2 lg:py-1.5 shadow-xl border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] lg:text-[12px] font-bold text-gray-900">Excellence</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 lg:w-1.5 lg:h-1.5 bg-[#ef4444] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3 text-white px-5 md:px-6 lg:pl-2 flex flex-col justify-between py-6 md:py-6 lg:py-0.5 order-3 min-h-[55vh] md:min-h-[60vh] lg:min-h-[50vh] items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4 md:space-y-3 lg:space-y-2 w-full flex flex-col items-center lg:items-start">
                <h2 className="text-[32px] md:text-[40px] lg:text-[28px] leading-[1] md:leading-[0.95] lg:leading-[1] font-bold tracking-tight drop-shadow-lg text-center lg:text-left">
                  <span className="block whitespace-nowrap">Made in India</span>
                  <span className="block">for the <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">World</span></span>
                </h2>
                <p className="text-[13px] md:text-[14px] lg:text-[12px] text-blue-50 md:text-blue-50 lg:text-blue-50 leading-[1.6] md:leading-[1.7] lg:leading-[1.5] drop-shadow-md text-center lg:text-left max-w-sm md:max-w-lg lg:max-w-none mx-auto lg:mx-0">
                  Latest generation ICU equipment and advanced monitoring systems, all manufactured with precision, care, and Indian excellence.
                </p>
              </div>

              {/* Bottom Card - Ultra Enhanced */}
              <div className="relative bg-white/20 md:bg-white/20 lg:bg-white/20 backdrop-blur-xl rounded-[24px] md:rounded-[24px] lg:rounded-[18px] xl:rounded-[16px] 2xl:rounded-[18px] p-5 md:p-6 lg:p-4 xl:p-3.5 2xl:p-4 border-2 md:border-2 lg:border-2 border-white/40 md:border-white/40 lg:border-white/40 hover:bg-white/25 md:hover:bg-white/25 lg:hover:bg-white/25 transition-all mt-auto md:mt-6 lg:mt-8 shadow-2xl shadow-blue-900/30 overflow-hidden group w-full max-w-sm md:max-w-lg lg:max-w-none mx-auto lg:mx-0">
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex gap-3 md:gap-4 lg:gap-4 relative z-10 flex-col md:flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                  <button className="w-10 h-10 md:w-11 md:h-11 lg:w-8 lg:h-8 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-white/25 md:bg-white/25 lg:bg-white/25 rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-md 2xl:rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-white/35 md:hover:bg-white/35 lg:hover:bg-white/35 transition-all cursor-pointer hover:scale-110 border border-white/30 shadow-lg group/btn mx-auto lg:mx-0" title="Explore more">
                    <ArrowRight className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-3.5 lg:h-3.5 xl:w-3 xl:h-3 2xl:w-3.5 2xl:h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex-1 w-full flex flex-col items-center lg:items-start">
                    <div className="text-[12px] md:text-[13px] lg:text-[11px] xl:text-[10px] 2xl:text-[11px] text-white md:text-white lg:text-white leading-tight mb-3 md:mb-3.5 lg:mb-2 xl:mb-1.5 2xl:mb-2 font-medium text-center lg:text-left">
                      Trusted by <span className="font-bold text-white drop-shadow-md">500+ hospitals</span>, serving healthcare nationwide
                    </div>
                    <div className="flex -space-x-2 md:-space-x-2.5 lg:-space-x-1.5 xl:-space-x-1 2xl:-space-x-1.5 justify-center lg:justify-start">
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2.5 md:border-3 lg:border-2 xl:border-2 2xl:border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2.5 md:border-3 lg:border-2 xl:border-2 2xl:border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2.5 md:border-3 lg:border-2 xl:border-2 2xl:border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2.5 md:border-3 lg:border-2 xl:border-2 2xl:border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"></div>
                      <div className="w-8 h-8 md:w-9 md:h-9 lg:w-7 lg:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-white/30 md:bg-white/30 lg:bg-white/30 backdrop-blur-sm rounded-full border-2.5 md:border-3 lg:border-2 xl:border-2 2xl:border-2 border-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-[10px] md:text-[10px] lg:text-[8px] xl:text-[7px] 2xl:text-[8px] font-bold drop-shadow">+500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </>
  );
}