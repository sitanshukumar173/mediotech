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
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Trusted Partners</span>
            </div>
          </div>

          <h2 className="text-[58px] font-bold text-gray-900 mb-7 tracking-tight">
            Trusted by leading <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Indian institutes</span>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our medical equipment serves premier healthcare facilities across India
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-[28px] p-7 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-gray-900 mb-1.5 leading-tight">{institution.name}</h3>
                  <p className="text-[13px] text-gray-600 font-medium">{institution.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}