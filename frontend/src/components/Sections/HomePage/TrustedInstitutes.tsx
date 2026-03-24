const institutions = [
  {
    name: 'Government e-Marketplace (GeM)',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774382603/gem_iv3ahs.webp',
  },
  {
    name: 'CCRAS',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774382435/CCRAS_ew0yae.jpg',
  },
  {
    name: 'RARIID Patna',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774382435/RARIID-Patna-Logo_zxmbko.png',
  },
  {
    name: 'PMCH',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774382436/pmch_mpvlwb.png',
  },
  {
    name: 'AIIMS Gorakhpur',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774382435/All_India_Institute_of_Medical_Sciences__Gorakhpur_Logo_uqnhuu.png',
  },
];

export function TrustedInstitutes() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Trusted Partners</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            <span className="text-gray-900">Trusted by Leading</span>
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
              Government & Medical Institutions
            </span>
          </h2>

          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our medical equipment serves premier healthcare facilities across India
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {institutions.map((institution) => (
            <div
              key={institution.name}
              className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 lg:p-5 flex flex-col items-center justify-center text-center"
            >
              <div className="w-full h-16 md:h-20 lg:h-24 flex items-center justify-center mb-2 md:mb-3">
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[11px] md:text-[12px] lg:text-[13px] font-semibold text-gray-800 leading-tight">
                {institution.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
