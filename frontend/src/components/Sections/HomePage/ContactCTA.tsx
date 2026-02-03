import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoRequest } from '../../../context/DemoRequestContext';

export default function ContactCTA() {
  const { openDemoRequest } = useDemoRequest();

  return (
    <section className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-white">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Main Card with Gradient */}
        <div className="relative rounded-[40px] md:rounded-[48px] lg:rounded-[56px] xl:rounded-[60px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] via-[#2563EB] to-[#1e40af]"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-5 md:px-8 lg:px-10 xl:px-12">
            <h2 className="text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] font-bold text-white mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight leading-tight">
              See Mediotech in your ICU
            </h2>
            <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-10 xl:mb-12">
              Whether you run a corporate ICU, a government teaching hospital or a growing multi-speciality centre, 
              Mediotech can help bring advanced ventilators, monitors and connectivity to your bedsides.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 mb-6 md:mb-8 lg:mb-10">
              <button
                onClick={() => openDemoRequest()}
                className="group bg-white text-[#2563EB] px-5 md:px-6 lg:px-8 xl:px-10 py-2.5 md:py-3 lg:py-4 xl:py-5 rounded-full text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-bold shadow-2xl shadow-blue-900/40 hover:shadow-3xl hover:-translate-y-1 transition-all inline-flex items-center gap-2 md:gap-3"
              >
                Request Clinical Demo
                <ArrowRight className="w-4 md:w-5 lg:w-5 h-4 md:h-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/contact"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-5 md:px-6 lg:px-8 xl:px-10 py-2.5 md:py-3 lg:py-4 xl:py-5 rounded-full text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-bold hover:bg-white/20 hover:-translate-y-1 transition-all inline-flex items-center gap-3"
              >
                Talk to our team
              </Link>
            </div>
            
            {/* Bottom Text */}
            <p className="text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] text-blue-200">
              For service or technical support, visit our <a href="/contact" className="text-white font-semibold underline hover:text-blue-100 transition-colors">Contact page</a> for dedicated numbers and email addresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}