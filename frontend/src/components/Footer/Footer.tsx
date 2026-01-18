import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
const logo = 'https://res.cloudinary.com/dlpluej6w/image/upload/v1766543013/Image_Mediotech_fv7zjv.svg';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const productLinks = [
  { label: 'ICU Ventilators', href: '#' },
  { label: 'Patient Monitors', href: '#' },
  { label: 'Infusion Systems', href: '#' },
  { label: 'All Products', href: '#' },
];

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Contact', href: '#' },
];

const contactInfo = [
  { icon: Phone, text: '+91 1800 XXX XXXX' },
  { icon: Mail, text: 'contact@mediotech.com' },
  { icon: MapPin, text: 'Mumbai, Maharashtra, India' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 relative z-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          {/* Brand Column */}
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)]">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="Mediotech" className="h-10 w-10" />
              <span className="text-xl font-bold text-white">Mediotech</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Leading manufacturer of advanced ICU equipment and critical care solutions for healthcare facilities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl hover:bg-[#2563EB] hover:border-[#2563EB] transition-all flex items-center justify-center group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Products Column */}
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)]">
            <h3 className="text-white text-base font-bold mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-[#2563EB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)]">
            <h3 className="text-white text-base font-bold mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-[#2563EB] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)]">
            <h3 className="text-white text-base font-bold mb-5">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Mediotech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-[#2563EB] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#2563EB] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}