import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Card with Gradient */}
        <div className="relative rounded-[60px] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] via-[#2563EB] to-[#1e40af]"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-20 px-12">
            <h2 className="text-[56px] font-bold text-white mb-7 tracking-tight leading-tight">
              See Mediotech in your ICU
            </h2>
            <p className="text-[18px] text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Whether you run a corporate ICU, a government teaching hospital or a growing multi-speciality centre, 
              Mediotech can help bring advanced ventilators, monitors and connectivity to your bedsides.
            </p>
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-5 mb-10">
              <button
                className="group bg-white text-[#2563EB] px-10 py-5 rounded-full text-[16px] font-bold shadow-2xl shadow-blue-900/40 hover:shadow-3xl hover:-translate-y-1 transition-all inline-flex items-center gap-3 cursor-not-allowed opacity-90"
              >
                Request Clinical Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/contact"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-[16px] font-bold hover:bg-white/20 hover:-translate-y-1 transition-all inline-flex items-center gap-3"
              >
                Talk to our team
              </Link>
            </div>
            
            {/* Bottom Text */}
            <p className="text-[14px] text-blue-200">
              For service or technical support, visit our <a href="/contact" className="text-white font-semibold underline hover:text-blue-100 transition-colors">Contact page</a> for dedicated numbers and email addresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}