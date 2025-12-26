import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Package, Stethoscope, Activity, Heart, Thermometer, Droplet, Zap, BookOpen, FileText, Video, GraduationCap, Shield, Wrench, Headphones, Building2, Users, Globe, Award, Target } from 'lucide-react';
// Use a direct URL string for external images
const logo = "https://res.cloudinary.com/dlpluej6w/image/upload/v1766543013/Image_Mediotech_fv7zjv.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const productsMenu = {
    'ICU Equipment': [
      { icon: Activity, label: 'ICU Ventilators', desc: 'Advanced respiratory support' },
      { icon: Heart, label: 'Patient Monitors', desc: 'Multi-parameter monitoring' },
      { icon: Droplet, label: 'Infusion Pumps', desc: 'Precision medication delivery' },
      { icon: Thermometer, label: 'Anesthesia Systems', desc: 'Complete anesthesia solutions' },
    ],
    'Monitoring Systems': [
      { icon: Activity, label: 'ECG Monitors', desc: 'Cardiac rhythm monitoring' },
      { icon: Stethoscope, label: 'Vital Signs Monitors', desc: 'Comprehensive vital tracking' },
      { icon: Zap, label: 'Defibrillators', desc: 'Emergency cardiac care' },
    ],
    'Support Equipment': [
      { icon: Package, label: 'IV Stands', desc: 'Medical-grade support systems' },
      { icon: Shield, label: 'Sterilizers', desc: 'Advanced sterilization' },
    ],
  };

  const solutionsMenu = {
    'By Department': [
      { icon: Heart, label: 'Intensive Care Units', desc: 'Complete ICU solutions' },
      { icon: Activity, label: 'Emergency Departments', desc: 'Emergency care equipment' },
      { icon: Stethoscope, label: 'Operating Rooms', desc: 'Surgical suite equipment' },
      { icon: Building2, label: 'General Wards', desc: 'Ward care solutions' },
    ],
    'By Scale': [
      { icon: Building2, label: 'Large Hospitals', desc: '500+ bed facilities' },
      { icon: Users, label: 'Medium Hospitals', desc: '100-500 bed facilities' },
      { icon: Heart, label: 'Clinics', desc: 'Outpatient care centers' },
    ],
  };

  const resourcesMenu = {
    'Documentation': [
      { icon: BookOpen, label: 'Product Manuals', desc: 'Complete user guides' },
      { icon: FileText, label: 'Technical Specs', desc: 'Detailed specifications' },
      { icon: Shield, label: 'Compliance Docs', desc: 'Regulatory certificates' },
    ],
    'Training': [
      { icon: Video, label: 'Video Tutorials', desc: 'Step-by-step training' },
      { icon: GraduationCap, label: 'Training Programs', desc: 'Professional certification' },
      { icon: BookOpen, label: 'Knowledge Base', desc: 'Comprehensive guides' },
    ],
    'Support': [
      { icon: Headphones, label: '24/7 Support', desc: 'Round-the-clock assistance' },
      { icon: Wrench, label: 'Maintenance Services', desc: 'Preventive maintenance' },
      { icon: Globe, label: 'Service Network', desc: 'Pan-India coverage' },
    ],
  };

  const aboutMenu = {
    'Company': [
      { icon: Building2, label: 'About Mediotech', desc: 'Our story and mission', link: '/about' },
      { icon: Target, label: 'Mission & Vision', desc: 'Our purpose and goals', link: '/about#mission' },
      { icon: Heart, label: 'Our Values', desc: 'What we stand for', link: '/about#values' },
    ],
    'People': [
      { icon: Users, label: 'Leadership Team', desc: 'Meet our leaders', link: '/about#leaders' },
      { icon: Users, label: 'Our Team', desc: 'Dedicated professionals', link: '/about#team' },
      { icon: Award, label: 'Certifications', desc: 'ISO & quality standards', link: '/about#certifications' },
    ],
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/10' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className={`overflow-hidden shadow-md transition-all duration-300 ${
            isScrolled ? 'w-9 h-9 rounded-lg' : 'w-11 h-11 rounded-xl'
          }`}>
            <img src={logo} alt="Mediotech" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className={`font-bold text-gray-900 block leading-none transition-all duration-300 ${
              isScrolled ? 'text-[18px]' : 'text-[21px] mb-0.5'
            }`}>
              Mediotech
            </span>
            {!isScrolled && (
              <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-[0.1em]">
                Medical Solutions
              </span>
            )}
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          {/* Home Link */}
          <Link to="/" className={`font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
            isScrolled ? 'text-[13px]' : 'text-[15px]'
          }`}>
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
              isScrolled ? 'text-[13px]' : 'text-[15px]'
            }`}>
              Products
              <ChevronDown className={`transition-transform duration-300 ${
                activeDropdown === 'products' ? 'rotate-180' : ''
              } ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
            </button>

            {/* Mega Menu */}
            {activeDropdown === 'products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="w-[800px] bg-white rounded-[28px] shadow-2xl border-2 border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(productsMenu).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                          {category}
                        </h3>
                        <div className="space-y-1">
                          {items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                to="/products"
                                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-[14px] font-bold text-gray-900 mb-0.5">
                                    {item.label}
                                  </div>
                                  <div className="text-[12px] text-gray-600">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View All Products Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      to="/products"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                    >
                      <Package className="w-5 h-5" />
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
              isScrolled ? 'text-[13px]' : 'text-[14px]'
            }`}>
              Resources
              <ChevronDown className={`transition-transform duration-300 ${
                activeDropdown === 'resources' ? 'rotate-180' : ''
              } ${isScrolled ? 'w-4 h-4' : 'w-4 h-4'}`} />
            </button>

            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="w-[800px] bg-white rounded-[28px] shadow-2xl border-2 border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(resourcesMenu).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                          {category}
                        </h3>
                        <div className="space-y-1">
                          {items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.label}
                                href="#"
                                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-[14px] font-bold text-gray-900 mb-0.5">
                                    {item.label}
                                  </div>
                                  <div className="text-[12px] text-gray-600">
                                    {item.desc}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
              isScrolled ? 'text-[13px]' : 'text-[15px]'
            }`}>
              About
              <ChevronDown className={`transition-transform duration-300 ${
                activeDropdown === 'about' ? 'rotate-180' : ''
              } ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
            </button>

            {activeDropdown === 'about' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="w-[550px] bg-white rounded-[28px] shadow-2xl border-2 border-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(aboutMenu).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                          {category}
                        </h3>
                        <div className="space-y-1">
                          {items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                to={item.link}
                                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-[14px] font-bold text-gray-900 mb-0.5">
                                    {item.label}
                                  </div>
                                  <div className="text-[12px] text-gray-600">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
              isScrolled ? 'text-[13px]' : 'text-[15px]'
            }`}
          >
            <Phone className={isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
            Contact
          </Link>
          <div className="w-px h-5 bg-gray-300"></div>
          <button className={`bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white  font-semibold shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5 transition-all ${
            isScrolled ? 'px-5 py-2 text-[12px] rounded-full' : 'px-7 py-3 text-[14px] rounded-2xl'
          }`}>
            Mediotech Rentals
          </button>
        </div>
      </div>
    </nav>
  );
}