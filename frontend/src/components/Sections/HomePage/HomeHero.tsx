import { Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomeHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden ">
        {/* Blue gradient background with rounded corners */}
        <div className="absolute right-0 top-0 bottom-16 w-[45%]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] via-[#2563EB] to-[#1e40af] rounded-l-[60px]"></div>
          <div className="absolute top-32 right-28 w-[550px] h-[550px] bg-white/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-16 w-[650px] h-[650px] bg-blue-300/10 rounded-full blur-3xl"></div>
        </div>

        {/* content */}
        <div className="px-12 max-w-7xl mx-auto py-8 relative z-10 ">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            
            {/* Left Content - 5 columns */}
            <div className="col-span-5 space-y-4 py-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-blue-50 border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Leading ICU Solutions</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-[52px] leading-[0.92] font-bold text-gray-900 tracking-tight">
                  Advanced
                  <br />
                  <span className="relative inline-block">
                    ICU Care
                    <div className="absolute -right-4 top-3 w-5 h-5 bg-[#ef4444] rounded-full shadow-lg shadow-red-300/50"></div>
                  </span>
                </h1>
                <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[500px]">
                  <span className="font-bold text-gray-900">We deliver</span> cutting-edge medical technology and{' '}
                  <span className="font-bold text-gray-900">we care</span> about patient outcomes and safety across India's healthcare network.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <button className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white pl-8 pr-3 py-3.5 rounded-full hover:shadow-2xl hover:shadow-blue-400/40 hover:-translate-y-1 transition-all shadow-xl">
                  <span className="text-[15px] font-bold">Explore Ventilators</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-4.5 h-4.5 text-white" />
                  </div>
                </button>
                <button className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3.5 rounded-full hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <span className="text-[15px] font-bold">Watch Demo</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex gap-5 pt-2">
                {/* Tour Card */}
                <div className="relative w-36 h-36 rounded-[28px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1720180246349-584d40758674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NTg3ODYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Facility"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] font-bold">Virtual tour</span>
                    </div>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-[28px] px-7 py-6 shadow-md border-2 border-gray-100 flex-1 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-[9px] text-gray-500 mb-4 uppercase tracking-[0.15em] font-bold">Proven Excellence</div>
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="text-center flex-1">
                      <div className="text-[32px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent leading-none mb-1.5">500+</div>
                      <div className="text-[9px] text-gray-600 leading-tight font-medium">Hospitals<br />served</div>
                    </div>
                    <div className="w-[1.5px] h-12 bg-gray-200"></div>
                    <div className="text-center flex-1">
                      <div className="text-[32px] font-bold bg-gradient-to-r from-[#2563EB] to-[#3b82f6] bg-clip-text text-transparent leading-none mb-1.5">15+</div>
                      <div className="text-[9px] text-gray-600 leading-tight font-medium">Years of<br />experience</div>
                    </div>
                    <div className="w-[1.5px] h-12 bg-gray-200"></div>
                    <div className="text-center flex-1">
                      <div className="text-[32px] font-bold text-[#ef4444] leading-none mb-1.5">98%</div>
                      <div className="text-[9px] text-gray-600 leading-tight font-medium">Customer<br />satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Doctor Image - 4 columns */}
            <div className="col-span-4 relative flex items-center justify-center py-2">
              <div className="relative rounded-[40px] overflow-visible shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTkxMzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Medical Professional"
                  className="w-full h-auto max-h-[60vh] object-cover rounded-[40px]"
                />

                {/* Floating Labels */}
                <div className="absolute top-[22%] -left-6 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] font-bold text-gray-900">Reliability</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ef4444] rounded-full"></div>
                </div>

                <div className="absolute top-[46%] -right-6 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] font-bold text-gray-900">Innovation</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ef4444] rounded-full"></div>
                </div>

                <div className="absolute bottom-[18%] right-0 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 hover:scale-105 transition-transform cursor-default">
                  <span className="text-[14px] font-bold text-gray-900">Excellence</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ef4444] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Content - 3 columns */}
            <div className="col-span-3 text-white pl-4 flex flex-col justify-between py-2 min-h-[50vh]">
              <div className="space-y-3">
                <h2 className="text-[32px] leading-[0.95] font-bold tracking-tight">
                  Made in<br />
                  India<br />
                  for the<br />
                  World
                </h2>
                <p className="text-[15px] text-blue-100 leading-[1.7]">
                  Latest generation ICU equipment<br />
                  and advanced monitoring systems,<br />
                  all manufactured with precision,<br />
                  care, and Indian excellence.
                </p>
              </div>

              {/* Bottom Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-5 border border-white/20 hover:bg-white/15 transition-all mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-white/25 transition-all cursor-pointer group">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[12px] text-blue-100 leading-relaxed mb-2.5">
                      Trusted by <span className="font-bold text-white">500+ hospitals,</span><br />
                      serving healthcare nationwide
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-3 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-3 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-3 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-3 border-white"></div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border-3 border-white flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">+500</span>
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