import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: '',
    facilityType: 'Corporate ICU',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosInstance.post('/contact', form);
      toast.success('Thanks! We will contact you shortly.');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hospital: '',
        facilityType: 'Corporate ICU',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0b0b3b] via-[#0b0b3b] to-[#0a2fb8] pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-16">
        <div className="px-6 md:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-bold mb-4">Contact</h1>
            <p className="text-white/80 text-[14px] md:text-[16px] max-w-3xl">
              For information on Mediotech Prime products, call{' '}
              <span className="text-white font-semibold">+91 9528425813</span>. You can also email us at{' '}
              <a href="mailto:mediotech@outlook.in" className="text-blue-200 underline">
                mediotech@outlook.in
              </a>.
            </p>
          </div>

          <div className="text-white/90 text-[14px] md:text-[16px] leading-relaxed max-w-4xl">
            <p>
              For service related calls and logging a new Service request, kindly call the Mediotech Prime
              Solutions Pvt. Ltd. Maintenance and Service solutions: <span className="font-semibold">6203039580</span>{' '}
              or <span className="font-semibold">6388758917</span> (Monday – Saturday 9 am to 9 pm IST). You can
              email us at{' '}
              <a href="mailto:mediotechprimeservices@outlook.com" className="text-blue-200 underline">
                mediotechprimeservices@outlook.com
              </a>.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/mediotechprimesolutions/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-white/90 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-[13px] md:text-[14px]">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/mediotech-healthcare-solutions-private-limited/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-white/90 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-[13px] md:text-[14px]">LinkedIn</span>
            </a>
          </div>

          <p className="mt-6 text-white/80 text-[13px] md:text-[14px]">
            Please fill out the form below to have all your questions answered.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="px-6 md:px-10 lg:px-12 xl:px-16 max-w-6xl xl:max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-[18px] md:rounded-[22px] shadow-xl p-6 md:p-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">Get In Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Hospital / Institution</label>
                <input
                  name="hospital"
                  value={form.hospital}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Hospital name"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Organisation/Institution Type</label>
                <select
                  aria-label="Facility Type"
                  name="facilityType"
                  value={form.facilityType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                >
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
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="What is your question?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Submit'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div className="text-gray-800">
              <h3 className="text-[14px] md:text-[16px] font-bold mb-3">MEDIOTECH PRIME SOLUTIONS PVT. LTD.</h3>
              <div className="text-[13px] md:text-[14px] text-gray-600 space-y-1">
                <p>CSJM Innovation Foundation</p>
                <p>CSJM University, Kalyanpur</p>
                <p>Kanpur, Uttar Pradesh 208024, India</p>
                <p>CIN: U32309UP2023PTC228234</p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span className="text-[13px] md:text-[14px]">View our location on map</span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/mediotech-healthcare-solutions-private-limited/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-9 h-9 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB]/20 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mediotechprimesolutions/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-9 h-9 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB]/20 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[16px] overflow-hidden shadow-lg">
              <iframe
                title="Mediotech Location"
                src="https://www.google.com/maps?q=CSJM%20University%20Kalyanpur%20Kanpur&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}