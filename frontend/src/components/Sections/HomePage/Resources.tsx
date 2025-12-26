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
    <section id="resources" className="py-28 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Resources</span>
            </div>
          </div>

          <h2 className="text-[58px] font-bold text-gray-900 mb-7 tracking-tight">
            Resources for <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">clinicians and engineers</span>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Access comprehensive learning materials and technical documentation
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-7">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-[36px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-[20px] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-2 border-white/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-9">
                  <h3 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight">{resource.title}</h3>
                  <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">{resource.description}</p>
                  
                  <button className="group/btn w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-7 py-4 rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 font-bold text-[15px]">
                    <Download className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform" />
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