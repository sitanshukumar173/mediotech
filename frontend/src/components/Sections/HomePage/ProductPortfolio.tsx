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
    <section id="products" className="py-28 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Products</span>
            </div>
          </div>

          <h2 className="text-[58px] font-bold text-gray-900 mb-7 tracking-tight">
            Our critical care product <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">portfolio</span>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive range of medical equipment designed for intensive care units
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-2 border-white/50">
                  <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">{product.subtitle}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-[11px] font-bold text-[#2563EB] mb-3 uppercase tracking-[0.15em]">{product.subtitle}</div>
                <h3 className="text-[26px] font-bold text-gray-900 mb-3 leading-tight">{product.title}</h3>
                <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <button className="group/btn flex items-center gap-3 text-white bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-6 py-3 rounded-full font-bold text-[14px] shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 transition-all w-full justify-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}