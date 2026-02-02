import { Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import './HomeHero.css';

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featuredItems = [
    {
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1770050270/Screenshot_2026-02-02_193836_ou0ih8.png',
      title: 'Medical Exhibition 2026',
      subtitle: 'Showcasing Innovation in Healthcare',
      link: '#exhibition'
    },
    {
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1770040428/Screenshot_2026-02-02_185239-removebg-preview_o5k8aa.png',
      title: 'Advanced ICU Ventilator',
      subtitle: 'Next-Gen Respiratory Care',
      link: '#ventilators'
    },
    {
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1770040427/Screenshot_2026-02-02_185212-removebg-preview_g6mvn6.png',
      title: 'Patient Monitor Pro',
      subtitle: 'Complete Vital Signs Monitoring',
      link: '#monitors'
    },
    {
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1770040427/Full-Digital-Ultrasound-Scanner-Machine-Price-removebg-preview_zul6ce.png',
      title: 'Digital Ultrasound Scanner',
      subtitle: 'High-Resolution Diagnostics',
      link: '#ultrasound'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredItems.length]);

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNavigate = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden pt-6 lg:pt-0">
        {/* Blue gradient background with rounded corners */}
        <div className="absolute right-0 top-0 bottom-0 lg:bottom-16 w-full lg:w-[35%]">
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

        <div className="hero-container px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-12 md:py-10 lg:py-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-4 items-stretch min-h-screen md:min-h-screen lg:min-h-screen">
            
            {/* Left Content */}
            <div className="left-content lg:col-span-5 space-y-12 md:space-y-12 lg:space-y-10 py-6 md:py-4 lg:py-12 order-1 md:order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
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

              {/* Trusted Hospitals Card */}
              <div className="relative bg-white/50 backdrop-blur-xl rounded-[18px] md:rounded-[24px] lg:rounded-[20px] px-4 md:px-6 lg:px-5 py-3.5 md:py-5 lg:py-4 shadow-lg hover:shadow-xl border border-white/30 w-full max-w-md md:max-w-lg lg:max-w-[420px] mx-auto lg:mx-0 transition-all duration-300 overflow-hidden group">
                
                <div className="relative z-10 flex gap-2.5 md:gap-4 lg:gap-3 items-center">
                  <button className="w-8 h-8 md:w-10 md:h-10 lg:w-9 lg:h-9 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md group/btn" title="Explore more">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 lg:w-4 lg:h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] md:text-[12px] lg:text-[11px] text-gray-900 leading-snug md:leading-relaxed mb-2 md:mb-3 lg:mb-2.5 font-semibold">
                      Trusted by <span className="font-bold text-gray-900">500+ hospitals</span>, serving healthcare nationwide
                    </div>
                    <div className="flex -space-x-1.5 md:-space-x-2.5 lg:-space-x-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 bg-white/90 backdrop-blur-sm rounded-full border-2 border-white flex items-center justify-center shadow-sm hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer">
                        <span className="text-gray-800 text-[8px] md:text-[10px] lg:text-[9px] font-bold">+500</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Simple corner accent */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              </div>


            </div>

            {/* Center & Right - Featured Section */}
            <div className="featured-section md:col-span-7 flex lg:col-span-7 relative items-stretch py-6 md:py-4 lg:py-12 order-2 md:order-2 lg:order-2 px-0 md:px-0 lg:pr-12 xl:pr-20">
              <div className="relative w-full h-full flex flex-col justify-center">
                
                {/* Featured Display */}
                <div className="featured-display relative w-full h-full flex flex-col justify-center">
                  
                  {/* Background glow effects */}
                  <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] -z-10"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-[100px] -z-10"></div>

                  {/* Image Section - Background Layer */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div 
                      className={`relative transition-all duration-700 ease-out ${
                        isTransitioning 
                          ? 'opacity-0 scale-95 blur-sm' 
                          : 'opacity-100 scale-100 blur-0'
                      }`}
                    >
                      {/* Main Image */}
                      <div className="relative flex justify-center ml-0 md:ml-4 lg:ml-16">
                        <div className="rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
                          <ImageWithFallback
                            key={currentSlide}
                            src={featuredItems[currentSlide].image}
                            alt={featuredItems[currentSlide].title}
                            className="w-full h-auto max-h-[220px] md:max-h-[280px] lg:max-h-[360px] object-contain"
                          />
                        </div>
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-[#60a5fa]/20 blur-3xl -z-10 scale-110 animate-pulse"></div>
                      </div>

                      {/* Floating decorative elements */}
                      <div className="absolute -top-4 right-8 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
                      <div className="absolute -bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-[#60a5fa]/15 to-transparent rounded-full blur-2xl"></div>
                    </div>
                    {/* Vertical Slide Indicators */}
                    <div className="featured-dots absolute -right-8 md:-right-9 lg:-right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                      {featuredItems.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSlideChange(idx)}
                          className={`w-2 rounded-full transition-all duration-500 ${
                            idx === currentSlide
                              ? 'h-7 bg-gradient-to-b from-[#1d4ed8] to-[#2563EB] shadow-lg shadow-blue-400/40'
                              : 'h-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        ></button>
                      ))}
                    </div>
                  </div>

                  {/* Floating Featured Tag - Fixed Position Top */}
                  <div className="absolute top-1 -left-4 md:-left-4 lg:-left-6 z-30 featured-tag-pos">
                    <div className="inline-flex items-center gap-2 md:gap-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-4 md:px-5 py-2.5 md:py-3.5 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105 cursor-pointer">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse"></div>
                      <span className="text-[10px] md:text-[11px] lg:text-[11px] font-bold uppercase tracking-[0.15em]">Featured</span>
                    </div>
                  </div>

                  {/* Text Content - Fixed Position Bottom */}
                  <div className="absolute bottom-16 md:bottom-18 lg:bottom-20 left-0 right-0 z-30 flex justify-center featured-title-pos">
                    <div className="ml-0 md:ml-4 lg:ml-16">
                      <div 
                        className={`transition-all duration-500 ease-out ${
                          isTransitioning 
                            ? 'opacity-0 translate-y-6' 
                            : 'opacity-100 translate-y-0'
                        }`}
                      >
                        {/* Floating Content Card */}
                        <div className="relative inline-flex items-center gap-2 md:gap-3 bg-white/85 backdrop-blur-xl rounded-[20px] md:rounded-[28px] pl-4 md:pl-6 lg:pl-7 pr-1.5 md:pr-2 py-2.5 md:py-3 lg:py-3.5 shadow-xl border border-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden group/card w-full lg:w-auto">
                        
                        {/* Decorative glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent rounded-[28px]"></div>
                        
                        <div className="relative z-10 flex items-center gap-3 w-full">
                          {/* Title and Subtitle */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-[13px] md:text-[16px] lg:text-[17px] font-bold text-gray-900 leading-tight truncate">
                              {featuredItems[currentSlide].title}
                            </h3>
                            <p className="text-[9px] md:text-[10px] lg:text-[11px] text-gray-600 font-medium leading-tight mt-0.5 truncate">
                              {featuredItems[currentSlide].subtitle}
                            </p>
                          </div>
                          
                          {/* Arrow Button */}
                          <button
                            onClick={() => handleNavigate(featuredItems[currentSlide].link)}
                            className="group/arrow flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-white border-2 border-gray-200 text-gray-900 rounded-full flex items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                          >
                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 text-blue-600 group-hover/arrow:translate-x-0.5 transition-transform relative z-10" />
                          </button>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-full shadow-sm shadow-red-400/60 animate-pulse"></div>
                        </div>
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