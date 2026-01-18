import { Shield, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Proven Reliability',
    description: 'Our equipment maintains 99.9% uptime in critical care environments, ensuring continuous patient monitoring and life support.',
    isRed: false,
  },
  {
    icon: Users,
    title: 'Serving 500+ Hospitals',
    description: 'Trusted by major healthcare institutions across India, from tier-1 cities to rural healthcare centers.',
    isRed: true,
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Latest generation equipment with AI-assisted monitoring, smart alerts, and intuitive interfaces for clinical staff.',
    isRed: false,
  },
  {
    icon: Award,
    title: 'ISO Certified Manufacturing',
    description: 'ISO 13485:2016 certified facility ensuring the highest quality standards in medical device manufacturing.',
    isRed: false,
  },
];

export default function ProvenScale() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Strength</span>
            </div>
          </div>

          <h2 className="text-[28px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            Proven at <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Scale</span> in Indian ICUs
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our equipment powers critical care across India's leading healthcare institutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group rounded-[20px] md:rounded-[28px] lg:rounded-[32px] p-5 md:p-7 lg:p-8 transition-all duration-500 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.625rem)] ${
                  feature.isRed
                    ? 'bg-gradient-to-br from-[#ef4444] via-[#dc2626] to-[#b91c1c] text-white shadow-xl shadow-red-300/30 hover:shadow-2xl hover:shadow-red-400/40 hover:-translate-y-2'
                    : 'bg-white border-2 border-gray-100 hover:border-blue-200 text-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2'
                }`}
              >
                <div className={`w-10 md:w-12 lg:w-14 xl:w-16 h-10 md:h-12 lg:h-14 xl:h-16 rounded-[12px] md:rounded-[14px] lg:rounded-[16px] flex items-center justify-center mb-3 md:mb-4 lg:mb-5 shadow-lg transition-transform group-hover:scale-110 ${
                  feature.isRed ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30' : 'bg-gradient-to-br from-[#2563EB] to-[#1d4ed8]'
                }`}>
                  <Icon className="w-4 md:w-5 lg:w-6 xl:w-8 h-4 md:h-5 lg:h-6 xl:h-8 text-white" />
                </div>
                <h3 className={`text-[15px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold mb-2 md:mb-3 lg:mb-4 leading-tight ${feature.isRed ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] leading-relaxed ${feature.isRed ? 'text-red-50' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}