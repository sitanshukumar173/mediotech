import { Target, Eye, Award, Shield, Globe, Users, Heart, Zap, CheckCircle, UserCircle } from 'lucide-react';

export default function About() {
  const leaders = [
    {
      name: 'Utkarsh Dubey',
      role: 'Founder | CEO | MD',
      id: '01190725',
      description: 'Bringing innovation and vision to transforming healthcare through innovation. A leader with the ability to dream, and execute impactful solutions. Committed to pushing innovative technologies into patient care to make care accessible and efficient.'
    },
    {
      name: 'Keshav Kumar',
      role: 'Executive Director | CFO',
      id: '02190725',
      description: 'Experienced professional with a solid business background with deep expertise in finance, strategic planning. Adept at resource optimization and ensuring financial sustainability with growth. Mediotech Solutions towards growth and profitability.'
    },
    {
      name: 'Samarth Agarwal',
      role: 'Director | COO',
      id: '03190725',
      description: 'Biotechnology student turned operations and stakeholder management, team coordination, and stakeholder engagement. Strong relationship-building combined with expertise in research and market insights make him an essential contributor to development and extension.'
    }
  ];

  const team = [
    {
      name: 'Vidushi Rastogi',
      role: 'Content & Corporate Presentation Associate',
      id: '04190725',
      email: 'vidushirastogi5005@gmail.com'
    },
    {
      name: 'Siddarth Mishra',
      role: 'R&D Manager',
      id: '05190725',
      email: 'siddharth.20.mishra@gmail.com'
    },
    {
      name: 'Manas Pratap',
      role: 'Assistant Manager',
      id: '08190725',
      email: 'pratapsinghmanas@gmail.com'
    },
    {
      name: 'Shashwat',
      role: 'Executive Assistant',
      id: '07190725',
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

  const certifications = [
    { name: 'ISO 13485:2016', desc: 'Medical Devices Quality Management' },
    { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
    { name: 'CE Certified', desc: 'European Conformity Standards' },
    { name: 'FDA Registered', desc: 'US Food & Drug Administration' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section with Large MEDIOTECH Text */}
      <div className="relative pt-52 pb-56 bg-gradient-to-br from-[#2563EB] to-[#183491]">
        {/* Large Background Text "MEDIOTECH" aligned to center within 7xl container */}
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h2 className="text-[150px] md:text-[195px] lg:text-[220px] xl:text-[250px] font-black select-none leading-none tracking-tight whitespace-nowrap bg-gradient-to-t from-transparent to-white/40 bg-clip-text text-transparent text-center">
            MEDIOTECH
          </h2>
        </div>
        
        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      </div>

      {/* Content Section - Innovating Healthcare */}
      <div className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-full px-6 py-3 shadow-lg shadow-blue-200/50">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">About Mediotech</span>
              </div>
            </div>

            <h1 className="text-[52px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Innovating Healthcare,<br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">
                Empowering Hospitals
              </span>
            </h1>
            <p className="text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Mediotech Prime Solutions Pvt Ltd, we are redefining healthcare with innovation, technology, 
              and care-driven solutions. As a comprehensive supplier of A to Z medical equipment, we are committed 
              to improving patient care and supporting healthcare professionals through advanced and reliable products.
            </p>
          </div>
        </div>
      </div>

       {/* Mission & Vision - Premium Blue Gradient Card */}
      <div className="py-20">
        <div id="mission" className="max-w-7xl mx-auto px-8 scroll-mt-32">
          <div className="relative bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] rounded-[60px] p-16 shadow-2xl overflow-hidden">
            {/* Animated decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full shadow-lg shadow-white/20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-white/10 rounded-[20px] rotate-12 opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-12">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-[20px] flex items-center justify-center shadow-xl">
                    <Target className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[32px] font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-[16px] text-white/95 leading-relaxed">
                  To empower healthcare providers with innovative, reliable, and affordable medical technology. 
                  We are committed to improving patient outcomes and operational efficiency through world-class 
                  medical equipment and dedicated support services.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-[20px] flex items-center justify-center shadow-xl">
                    <Eye className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[32px] font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-[16px] text-white/95 leading-relaxed">
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
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-bold text-gray-900 mb-4">Our Core Innovations</h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              Revolutionary solutions designed to transform patient care and hospital operations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Conveyor G1 */}
            <div className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[32px] p-8 shadow-xl">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Conveyor G1</h3>
              <p className="text-[14px] text-gray-600 mb-5">
                An automated motorized patient shifting bed that:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Transfers patients seamlessly between surfaces',
                  'Reduces physical strain on staff',
                  'Enhances patient comfort and safety'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sachet G1 */}
            <div className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[32px] p-8 shadow-xl">
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">Sachet G1</h3>
              <p className="text-[14px] text-gray-600 mb-5">
                Smart sensor device preventing patient falls:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Fall Monitoring – Tracks patient posture and activity',
                  'Safety Alerts – Real-time alerts to prevent falls',
                  'Compact Design – Wearable patch or bedside sensor'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[32px] p-8 shadow-xl text-white">
            <p className="text-[14px] leading-relaxed">
              We provide a complete portfolio of medical, diagnostic, surgical, and laboratory equipment, 
              catering to hospitals, clinics, and government healthcare projects.
            </p>
            <p className="text-[14px] leading-relaxed mt-3">
              As a trusted vendor in GeM, we proudly serve CCRAS, RARIDD Patna, PMCH & AIIMS Guwahati.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div id="values" className="max-w-7xl mx-auto px-8 scroll-mt-32">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[28px] p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[16px] flex items-center justify-center mb-4 shadow-lg shadow-blue-500/40">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-[17px] font-bold text-gray-900 mb-2.5">{value.title}</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Leaders */}
      <div className="py-20">
        <div id="leaders" className="max-w-7xl mx-auto px-8 scroll-mt-32">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-bold text-gray-900 mb-4">Our Leaders</h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving innovation at Mediotech
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[32px] p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Profile Image Placeholder */}
                <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform">
                  <UserCircle className="w-18 h-18 text-blue-600" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-[12px] font-bold text-[#2563EB] mb-1.5">{leader.role}</p>
                  <p className="text-[10px] text-gray-500 mb-3">Id: {leader.id}</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div id="team" className="max-w-7xl mx-auto px-8 scroll-mt-32">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to excellence
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[28px] p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                {/* Profile Image Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3.5 shadow-md">
                  <UserCircle className="w-14 h-14 text-blue-600" />
                </div>
                
                <h4 className="text-[16px] font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-[10px] font-semibold text-[#2563EB] mb-2.5">{member.role}</p>
                <p className="text-[9px] text-gray-500 mb-2">Id: {member.id}</p>
                <a href={`mailto:${member.email}`} className="text-[9px] text-blue-600 hover:underline break-all block">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20">
        <div id="certifications" className="max-w-7xl mx-auto px-8 scroll-mt-32">
          <div className="text-center mb-10">
            <h2 className="text-[38px] font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality validated by international standards
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[24px] p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-[11px] text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}