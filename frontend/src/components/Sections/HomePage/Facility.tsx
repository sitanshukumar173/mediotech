import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Facility() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-5">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Facility</span>
            </div>
          </div>

          <h2 className="text-[48px] font-bold text-gray-900 mb-5 tracking-tight">
            Our Manufacturing <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Facility</span>
          </h2>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ISO 13485:2016 certified facility with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[40px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764114441123-586d13fc6ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjU5MTE5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Manufacturing Facility"
              className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="rounded-[40px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1670665352618-49ae2ae914ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMElDVSUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzY1OTExOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Quality Testing"
              className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}