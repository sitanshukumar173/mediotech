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
    <section className="py-28 bg-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Why Choose Us</span>
            </div>
          </div>

          <h2 className="text-[58px] font-bold text-gray-900 mb-7 tracking-tight max-w-4xl mx-auto">
            Why Indian hospitals choose <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Mediotech</span>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by healthcare providers for reliability, innovation, and exceptional support
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-[32px] p-9 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-18 h-18 bg-gradient-to-br ${reason.color} rounded-[22px] mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <CheckCircle2 className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-4 leading-tight">{reason.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}