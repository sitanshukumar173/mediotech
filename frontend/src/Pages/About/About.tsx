import { Target, Eye, Award, Shield, Globe, Users, Heart, Zap, CheckCircle, UserCircle } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<'conveyor' | 'sachet' | null>(null);
  const leaders = [
    {
      name: 'Utkarsh Dubey',
      role: 'Founder | CEO | MD',
      id: '01190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001988/Utkarsh_Dubey_jxkbpp.jpg',
      description: 'Bringing innovation and vision to transforming healthcare through innovation. A leader with the ability to dream, and execute impactful solutions. Committed to pushing innovative technologies into patient care to make care accessible and efficient.'
    },
    {
      name: 'Keshav Kumar',
      role: 'Executive Director | CFO',
      id: '02190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001990/Keshav_Kumar_sooe4z.png',
      description: 'Experienced professional with a solid business background with deep expertise in finance, strategic planning. Adept at resource optimization and ensuring financial sustainability with growth. Mediotech Solutions towards growth and profitability.'
    },
    {
      name: 'Samarth Agarwal',
      role: 'Director | COO',
      id: '03190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001988/Samarth_Agarwal_et6um0.jpg',
      description: 'Biotechnology student turned operations and stakeholder management, team coordination, and stakeholder engagement. Strong relationship-building combined with expertise in research and market insights make him an essential contributor to development and extension.'
    }
  ];

  const team = [
    {
      name: 'Vidushi Rastogi',
      role: 'Content & Corporate Presentation Associate',
      id: '04190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001987/Vidushi_Rastogi_eecmwe.jpg',
      email: 'vidushirastogi5005@gmail.com'
    },
    {
      name: 'Siddarth Mishra',
      role: 'R&D Manager',
      id: '05190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001989/Siddarth_Mishra_dxz7sp.png',
      email: 'siddharth.20.mishra@gmail.com'
    },
    {
      name: 'Manas Pratap',
      role: 'Assistant Manager',
      id: '08190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001987/Manas_Pratap_tw1n7v.jpg',
      email: 'pratapsinghmanas@gmail.com'
    },
    {
      name: 'Shashwat',
      role: 'Executive Assistant',
      id: '07190725',
      image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1774001987/Shashwat_pt2zn3.jpg',
      email: 'upadhyayashashwat02@gmail.com'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Innovation',
      description: 'Every solution we develop prioritizes patient safety, comfort, and improved healthcare outcomes.'
    },
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'ISO-certified manufacturing processes ensure the highest standards of quality and reliability in every product.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We continuously invest in R&D to bring the latest medical technology innovations to Indian healthcare.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work closely with healthcare providers to understand and address their unique challenges.'
    },
    {
      icon: Globe,
      title: 'Made in India',
      description: 'Proudly manufacturing world-class medical equipment in India, contributing to Atmanirbhar Bharat.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: '24/7 support with pan-India service network ensuring minimal downtime and maximum reliability.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section with Large MEDIOTECH Text */}
      <div className="relative pt-28 md:pt-36 lg:pt-44 xl:pt-52 pb-32 md:pb-40 lg:pb-48 xl:pb-56 bg-gradient-to-br from-[#2563EB] to-[#183491]">
        {/* Large Background Text "MEDIOTECH" aligned to center within 7xl container */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-8 lg:pb-10 xl:pb-12">
          <h2 className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[250px] font-black select-none leading-none tracking-tight whitespace-nowrap bg-gradient-to-t from-transparent to-white/40 bg-clip-text text-transparent text-center px-4">
            MEDIOTECH
          </h2>
        </div>
        
        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      </div>

      {/* Content Section - Innovating Healthcare */}
      <div className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16">
          <div className="text-center">
            <div className="inline-block mb-4 md:mb-5 lg:mb-6">
              <div className="flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 shadow-lg shadow-blue-200/50">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] lg:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]\">About Mediotech</span>
              </div>
            </div>

            <h1 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6 tracking-tight leading-tight">
              Innovating Healthcare,<br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                  Empowering Hospitals
                </span>
            </h1>
            <p className="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Mediotech Prime Solutions Pvt Ltd, we are redefining healthcare with innovation, technology, 
              and care-driven solutions. As a comprehensive supplier of A to Z medical equipment, we are committed 
              to improving patient care and supporting healthcare professionals through advanced and reliable products.
            </p>
          </div>
        </div>
      </div>

       {/* Mission & Vision - Premium Blue Gradient Card */}
      <div className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div id="mission" className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 scroll-mt-32">
          <div className="relative bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] rounded-[40px] md:rounded-[48px] lg:rounded-[56px] xl:rounded-[60px] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Animated decorative elements */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-20 w-3 md:w-4 h-3 md:h-4 bg-white/30 rounded-full shadow-lg shadow-white/20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-2 md:w-3 h-2 md:h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 border-2 border-white/10 rounded-[12px] md:rounded-[16px] lg:rounded-[20px] rotate-12 opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Mission */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
                  <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-white/20 backdrop-blur-sm rounded-[16px] md:rounded-[18px] lg:rounded-[20px] flex items-center justify-center shadow-xl">
                    <Target className="w-6 md:w-7 lg:w-9 h-6 md:h-7 lg:h-9 text-white" />
                  </div>
                  <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-white/95 leading-relaxed">
                  To empower healthcare providers with innovative, reliable, and affordable medical technology. 
                  We are committed to improving patient outcomes and operational efficiency through world-class 
                  medical equipment and dedicated support services.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
                  <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-white/20 backdrop-blur-sm rounded-[16px] md:rounded-[18px] lg:rounded-[20px] flex items-center justify-center shadow-xl">
                    <Eye className="w-6 md:w-7 lg:w-9 h-6 md:h-7 lg:h-9 text-white" />
                  </div>
                  <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-white/95 leading-relaxed">
                  To be India's most trusted partner in healthcare innovation, setting new standards in medical 
                  equipment manufacturing and distribution. We envision a future where cutting-edge healthcare 
                  technology is accessible to every medical facility across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Innovations */}
      <div className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">
              Our Core <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                   Innovations
                </span>      
                
             </h2>
          </div>

          {/* Conveyor G1 Card */}
          <div 
            className="relative mb-6 md:mb-8 lg:mb-10"
            onMouseEnter={() => setHoveredCard('conveyor')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* SVG Background - Full Width Screen */}
            <div className="w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] absolute inset-x-0 -top-40 md:max-[1023px]:-top-12 min-[820px]:max-[900px]:-top-16 min-[1024px]:max-[1279px]:-top-20 min-[1280px]:max-[1439px]:-top-32 max-[430px]:hidden">
              <img 
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1774377416/SubtractSMALL_svakir.svg"
                alt=""
                className={`w-full h-full object-contain pointer-events-none transition-opacity duration-200 ease-in-out ${hoveredCard === 'sachet' ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
            
            {/* Content Container - Within margins */}
            <div className="relative z-10 px-5 md:px-8 lg:px-14 2xl:px-16 py-16 md:py-20 lg:py-28 xl:py-32 2xl:py-40 max-[430px]:px-4 max-[430px]:py-6 max-[430px]:rounded-2xl max-[430px]:border max-[430px]:border-blue-100 max-[430px]:bg-white max-[430px]:shadow-md max-[430px]:transition-colors max-[430px]:duration-300 max-[430px]:hover:bg-blue-600">
              <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  {/* Image on Left */}
                  <div className="flex justify-center lg:order-1">
                    <img 
                      src="https://res.cloudinary.com/dlpluej6w/image/upload/v1774374056/Convinier_01_vd0vvx.jpg"
                      alt="Conveyor G1"
                      className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-[16px] md:rounded-[20px] shadow-lg"
                    />
                  </div>
                  
                  {/* Text on Right */}
                  <div className={`transition-colors duration-500 ease-in-out lg:order-2 ${hoveredCard === 'conveyor' ? 'text-white' : 'text-gray-900'}`}>
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-3 md:mb-4 lg:mb-5">Conveyor G1</h3>
                    <p className={`text-[12px] md:text-[13px] lg:text-[14px] mb-4 md:mb-5 lg:mb-6 transition-opacity duration-500 ease-in-out ${hoveredCard === 'conveyor' ? 'opacity-95' : 'opacity-80'}`}>
                      An automated motorized patient shifting bed that:
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                      {[
                        'Transfers patients seamlessly between surfaces',
                        'Reduces physical strain on staff',
                        'Enhances patient comfort and safety'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 lg:gap-3">
                          <CheckCircle className={`w-4 md:w-5 lg:w-5 h-4 md:h-5 lg:h-5 flex-shrink-0 mt-0.5 transition-colors duration-500 ease-in-out ${hoveredCard === 'conveyor' ? 'text-white' : 'text-blue-600'}`} />
                          <span className={`text-[11px] md:text-[12px] lg:text-[13px] transition-colors duration-500 ease-in-out ${hoveredCard === 'conveyor' ? 'text-white' : 'text-gray-700'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sachet G1 Card */}
          <div 
            className="relative"
            onMouseEnter={() => setHoveredCard('sachet')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* SVG Background - Full Width Screen */}
            <div className="w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] absolute inset-x-0 -top-36 md:max-[1023px]:-top-9 min-[820px]:max-[900px]:-top-14 min-[1024px]:max-[1279px]:-top-14 min-[1280px]:max-[1439px]:-top-28 max-[430px]:hidden">
              <img 
                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1774377646/SubtractSMALLreversed_dutnbj.svg"
                alt=""
                className={`w-full h-full object-contain pointer-events-none transition-opacity duration-500 ease-in-out ${hoveredCard === 'sachet' ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            
            {/* Content Container - Within margins */}
            <div className="relative z-10 px-5 md:px-8 lg:px-14 2xl:px-16 py-16 md:py-20 lg:py-28 xl:py-32 2xl:py-40 max-[430px]:px-4 max-[430px]:py-6 max-[430px]:rounded-2xl max-[430px]:border max-[430px]:border-blue-100 max-[430px]:bg-white max-[430px]:shadow-md max-[430px]:transition-colors max-[430px]:duration-300 max-[430px]:hover:bg-blue-600">
              <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  {/* Text on Left */}
                  <div className={`order-2 md:order-1 transition-colors duration-500 ease-in-out lg:order-1 ${hoveredCard === 'sachet' ? 'text-white' : 'text-gray-900'}`}>
                    <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-3 md:mb-4 lg:mb-5">Sachet G1</h3>
                    <p className={`text-[12px] md:text-[13px] lg:text-[14px] mb-4 md:mb-5 lg:mb-6 transition-opacity duration-200 ease-in-out ${hoveredCard === 'sachet' ? 'opacity-95' : 'opacity-80'}`}>
                      Smart sensor device preventing patient falls:
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                      {[
                        'Fall Monitoring – Tracks patient posture and activity',
                        'Safety Alerts – Real-time alerts to prevent falls',
                        'Compact Design – Wearable patch or bedside sensor'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3 lg:gap-3">
                          <CheckCircle className={`w-4 md:w-5 lg:w-5 h-4 md:h-5 lg:h-5 flex-shrink-0 mt-0.5 transition-colors duration-500 ease-in-out ${hoveredCard === 'sachet' ? 'text-white' : 'text-blue-600'}`} />
                          <span className={`text-[11px] md:text-[12px] lg:text-[13px] transition-colors duration-500 ease-in-out ${hoveredCard === 'sachet' ? 'text-white' : 'text-gray-700'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Image on Right */}
                  <div className="order-1 md:order-2 flex justify-center lg:order-2">
                    <img 
                      src="https://res.cloudinary.com/dlpluej6w/image/upload/v1774374057/Sachet_01_dbn6vx.png"
                      alt="Sachet G1"
                      className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-[16px] md:rounded-[20px] shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[20px] md:rounded-[24px] lg:rounded-[28px] xl:rounded-[32px] p-6 md:p-7 lg:p-8 shadow-xl text-white">
            <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed">
              Alongside these innovations, we provide a wide portfolio of medical, diagnostic, surgical, and laboratory equipment, catering to hospitals, clinics, research institutes, and government healthcare projects.
            </p>
        
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div id="values" className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 scroll-mt-32">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">What We <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                    Stand For
                </span>  </h2>
            <p className="text-[12px] md:text-[13px] lg:text-[15px] text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <div className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-blue-500/40">
                    <Icon className="w-5 md:w-6 lg:w-6 h-5 md:h-6 lg:h-6 text-white" />
                  </div>
                  <h4 className="text-[14px] md:text-[15px] lg:text-[17px] font-bold text-gray-900 mb-2 md:mb-2.5">{value.title}</h4>
                  <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Leaders */}
      <div className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div id="leaders" className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 scroll-mt-32">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Our <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                    Leaders
                </span></h2>
            <p className="text-[12px] md:text-[13px] lg:text-[15px] text-gray-600 max-w-2xl mx-auto"> 
              Meet the visionaries driving innovation at Mediotech
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-7">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[20px] md:rounded-[24px] lg:rounded-[28px] xl:rounded-[32px] p-5 md:p-6 lg:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.167rem)]"
              >
                {/* Profile Image */}
                <div className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <UserCircle className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 text-blue-600" />
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-gray-900 mb-1.5 md:mb-2">{leader.name}</h3>
                  <p className="text-[10px] md:text-[11px] lg:text-[12px] font-bold text-[#2563EB] mb-1">{leader.role}</p>
                  <p className="text-[11px] md:text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div id="team" className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 scroll-mt-32">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Our <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                    Team
                </span></h2>
            <p className="text-[12px] md:text-[13px] lg:text-[15px] text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-4.5 lg:gap-5">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center w-full md:w-[calc(50%-0.525rem)] lg:w-[calc(33.333%-0.833rem)] xl:w-[calc(25%-1.125rem)]"
              >
                {/* Profile Image */}
                <div className="w-16 md:w-18 lg:w-20 h-16 md:h-18 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-2.5 lg:mb-3.5 shadow-md overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <UserCircle className="w-12 md:w-14 lg:w-14 h-12 md:h-14 lg:h-14 text-blue-600" />
                    </div>
                  )}
                </div>
                
                <h4 className="text-[12px] md:text-[14px] lg:text-[16px] font-bold text-gray-900 mb-1 md:mb-1.5">{member.name}</h4>
                <p className="text-[8px] md:text-[9px] lg:text-[10px] font-semibold text-[#2563EB] mb-1.5 md:mb-2 line-clamp-2">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-[7px] md:text-[8px] lg:text-[9px] text-blue-600 hover:underline break-all block line-clamp-1">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      {/* <div className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div id="certifications" className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 scroll-mt-32">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[26px] md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Certifications & Compliance</h2>
            <p className="text-[12px] md:text-[13px] lg:text-[15px] text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality validated by international standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-4 md:p-5 lg:p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
              >
                <div className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-3.5 lg:mb-4">
                  <Award className="w-5 md:w-6 lg:w-6 h-5 md:h-6 lg:h-6 text-white" />
                </div>
                <h4 className="text-[12px] md:text-[14px] lg:text-[15px] font-bold text-gray-900 mb-1.5 md:mb-2">{cert.name}</h4>
                <p className="text-[10px] md:text-[11px] lg:text-[11px] text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}