import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const resources = [
  {
    title: 'Product Manuals',
    description: 'Comprehensive technical documentation and user guides for all our ICU equipment and medical devices.',
    icon: BookOpen,
    color: 'from-[#2563EB] to-[#1d4ed8]',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdW1lbnRhdGlvbnxlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Training Videos',
    description: 'Step-by-step video tutorials for medical staff on equipment operation and maintenance procedures.',
    icon: Video,
    color: 'from-[#3b82f6] to-[#2563EB]',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhaW5pbmclMjB2aWRlb3xlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Technical Specs',
    description: 'Detailed specifications, compliance certificates, and technical drawings for procurement teams.',
    icon: FileText,
    color: 'from-[#ef4444] to-[#dc2626]',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzcGVjaWZpY2F0aW9uc3xlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Resources</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            Resources for <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">clinicians and engineers</span>
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Access comprehensive learning materials and technical documentation
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-[28px] md:rounded-[32px] lg:rounded-[36px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1.125rem)] xl:w-[calc(33.333%-1.167rem)]"
              >
                {/* Image */}
                <div className="relative h-36 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-3 md:bottom-4 lg:bottom-5 xl:bottom-6 left-3 md:left-4 lg:left-5 xl:left-6">
                    <div className={`w-10 md:w-12 lg:w-14 xl:w-16 h-10 md:h-12 lg:h-14 xl:h-16 bg-gradient-to-br ${resource.color} rounded-[12px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-2 border-white/20`}>
                      <Icon className="w-5 md:w-6 lg:w-7 xl:w-8 h-5 md:h-6 lg:h-7 xl:h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 lg:p-7 xl:p-9">
                  <h3 className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 leading-tight">{resource.title}</h3>
                  <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px] text-gray-600 mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-relaxed">{resource.description}</p>
                  
                  <button className="group/btn w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-4 md:px-5 lg:px-6 xl:px-7 py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 md:gap-2.5 lg:gap-3 font-bold text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px]">
                    <Download className="w-4 md:w-4.5 lg:w-5 h-4 md:h-4.5 lg:h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}