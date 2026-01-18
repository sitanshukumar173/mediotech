import { Building2 } from 'lucide-react';

const institutions = [
  { name: 'AIIMS Delhi', location: 'New Delhi' },
  { name: 'Apollo Hospitals', location: 'Chennai' },
  { name: 'Fortis Healthcare', location: 'Mumbai' },
  { name: 'Max Healthcare', location: 'Delhi NCR' },
  { name: 'Manipal Hospitals', location: 'Bangalore' },
  { name: 'Medanta', location: 'Gurugram' },
  { name: 'Narayana Health', location: 'Bangalore' },
  { name: 'Kokilaben Hospital', location: 'Mumbai' },
];

export function TrustedInstitutes() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white relative overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Trusted Partners</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            Trusted by leading <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Indian institutes</span>
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our medical equipment serves premier healthcare facilities across India
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-[18px] md:rounded-[24px] lg:rounded-[26px] xl:rounded-[28px] p-3 md:p-4 lg:p-5 xl:p-7 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(25%-0.9rem)]"
            >
              <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                <div className="w-9 md:w-10 lg:w-12 xl:w-14 h-9 md:h-10 lg:h-12 xl:h-14 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 md:w-5 lg:w-6 xl:w-7 h-4 md:h-5 lg:h-6 xl:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-bold text-gray-900 mb-0.5 md:mb-1 lg:mb-1.5 leading-tight">{institution.name}</h3>
                  <p className="text-[9px] md:text-[11px] lg:text-[12px] xl:text-[13px] text-gray-600 font-medium">{institution.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}