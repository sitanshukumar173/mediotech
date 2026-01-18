import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Cost Effective',
    description: 'Premium quality medical equipment at prices designed for Indian healthcare budgets',
    color: 'from-[#2563EB] to-[#1d4ed8]',
  },
  {
    title: 'Quick Service',
    description: 'Pan-India service network ensuring 24/7 support and rapid response times',
    color: 'from-[#3b82f6] to-[#2563EB]',
  },
  {
    title: 'Easy Training',
    description: 'Comprehensive training programs in local languages for medical and technical staff',
    color: 'from-[#60a5fa] to-[#3b82f6]',
  },
  {
    title: 'Spare Parts',
    description: 'Readily available spare parts inventory across India for minimal downtime',
    color: 'from-[#2563EB] to-[#1e40af]',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-slate-200 relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Why Choose Us</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight max-w-4xl mx-auto">
            Why Indian hospitals choose <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Mediotech</span>
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by healthcare providers for reliability, innovation, and exceptional support
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-[20px] md:rounded-[28px] lg:rounded-[32px] p-5 md:p-7 lg:p-9 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(25%-0.9rem)]"
            >
              <div className={`inline-flex items-center justify-center w-11 md:w-14 lg:w-16 xl:w-18 h-11 md:h-14 lg:h-16 xl:h-18 bg-gradient-to-br ${reason.color} rounded-[16px] md:rounded-[20px] lg:rounded-[22px] mb-3 md:mb-4 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <CheckCircle2 className="w-6 md:w-7 lg:w-8 xl:w-9 h-6 md:h-7 lg:h-8 xl:h-9 text-white" />
              </div>
              <h3 className="text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 leading-tight">{reason.title}</h3>
              <p className="text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px] text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}