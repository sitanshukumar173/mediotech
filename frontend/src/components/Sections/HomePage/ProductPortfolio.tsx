import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    title: 'ICU Ventilators',
    subtitle: 'Respiratory Care',
    description: 'Advanced mechanical ventilation systems with AI-assisted breathing modes for adult, pediatric, and neonatal patients.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW50aWxhdG9yJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Patient Monitors',
    subtitle: 'Vital Signs',
    description: 'Multi-parameter monitoring systems with continuous tracking of ECG, SpO2, NIBP, temperature, and respiratory rate.',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwbW9uaXRvciUyMG1lZGljYWx8ZW58MXx8fHwxNzY1OTExOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Infusion Pumps',
    subtitle: 'Precision Deliveray',
    description: 'Smart infusion systems with dose error reduction and comprehensive drug library for safe medication delivery.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5mdXNpb24lMjBwdW1wfGVufDF8fHx8MTc2NTkxMTk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function ProductPortfolio() {
  return (
    <section id="products" className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Products</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            Our critical care product <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">portfolio</span>
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive range of medical equipment designed for intensive care units
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              {/* Image */}
              <div className="relative h-32 md:h-40 lg:h-48 xl:h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-3 md:top-4 lg:top-5 right-3 md:right-4 lg:right-5 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-2 border-white/50">
                  <span className="text-[9px] md:text-[10px] lg:text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">{product.subtitle}</span>
                </div>
              </div>
              
              <div className="p-4 md:p-5 lg:p-6">
                <div className="text-[9px] md:text-[10px] lg:text-[11px] font-bold text-[#2563EB] mb-2 md:mb-3 uppercase tracking-[0.15em]">{product.subtitle}</div>
                <h3 className="text-[15px] md:text-[18px] lg:text-[22px] xl:text-[26px] font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{product.title}</h3>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 mb-4 md:mb-5 lg:mb-6 leading-relaxed">{product.description}</p>
                
                <button className="group/btn flex items-center gap-2 md:gap-3 text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-bold text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 transition-all w-full justify-center">
                  Learn More
                  <ArrowRight className="w-4 md:w-4.5 lg:w-5 h-4 md:h-4.5 lg:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}