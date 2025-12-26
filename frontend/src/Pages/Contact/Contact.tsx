import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-7">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-full px-6 py-3 shadow-lg shadow-blue-200/50">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Get In Touch</span>
            </div>
          </div>

          <h1 className="text-[48px] font-bold text-gray-900 mb-5 tracking-tight">
            Let's Transform Your <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">ICU Together</span>
          </h1>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you run a corporate ICU, a government teaching hospital or a growing multi-speciality centre, 
            Mediotech can help bring advanced equipment to your bedsides.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-[28px] p-6 shadow-lg shadow-blue-200/20 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Call Us</div>
                  <div className="text-[22px] text-gray-900 font-bold mb-1">+91 1800 XXX XXXX</div>
                  <div className="text-[13px] text-gray-600">Available 24/7 for emergencies</div>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-[28px] p-6 shadow-lg shadow-blue-200/20 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Email Us</div>
                  <div className="text-[22px] text-gray-900 font-bold mb-1">contact@mediotech.com</div>
                  <div className="text-[13px] text-gray-600">We'll respond within 24 hours</div>
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="group relative overflow-hidden bg-white/60 backdrop-blur-xl border-2 border-white/60 rounded-[28px] p-6 shadow-lg shadow-blue-200/20 hover:shadow-2xl hover:shadow-blue-300/30 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Visit Us</div>
                  <div className="text-[22px] text-gray-900 font-bold mb-1">Mumbai, Maharashtra</div>
                  <div className="text-[13px] text-gray-600">India - Manufacturing facility tours available</div>
                </div>
              </div>
            </div>

            {/* Service Note - Blue Gradient Card */}
            <div className="relative overflow-hidden rounded-[28px] p-6 shadow-lg shadow-blue-400/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] via-[#2563EB] to-[#1e40af]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="text-[18px] font-bold text-white mb-2">Service & Technical Support</h3>
                <p className="text-[13px] text-blue-100 leading-relaxed">
                  For service or technical support, our dedicated team is available 24/7. 
                  Contact us for immediate assistance with equipment maintenance and troubleshooting.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="relative">
            <div className="sticky top-28">
              <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-[36px] shadow-2xl shadow-blue-300/30 border-2 border-white/80 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"></div>
                
                <div className="relative">
                  <h3 className="text-[28px] font-bold text-gray-900 mb-6">Request a Demo</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        placeholder="your.email@hospital.com"
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Hospital / Institution</label>
                      <input
                        type="text"
                        placeholder="Enter hospital name"
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Facility Type</label>
                      <select className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 transition-all text-[14px] shadow-sm">
                        <option>Corporate ICU</option>
                        <option>Government Teaching Hospital</option>
                        <option>Multi-Speciality Centre</option>
                        <option>Clinic</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white hover:border-gray-300 resize-none transition-all text-[14px] shadow-sm"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-6 py-4 rounded-xl shadow-lg shadow-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/60 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 font-bold text-[15px]"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}