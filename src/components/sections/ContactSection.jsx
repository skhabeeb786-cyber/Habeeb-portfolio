import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { LinkedInIcon } from '../common/BrandIcons';
import SectionHeader from '../common/SectionHeader';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Meta Ads',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Meta Ads',
    'Google Ads',
    'Lead Generation',
    'Social Media Management',
    'SEO',
    'Website Design',
    'Digital Marketing Consultation'
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Meta Ads',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Start A Conversation"
          title="Let's Grow Your"
          highlight="Business Online"
          description="Have a project, campaign or digital marketing challenge? Let's talk."
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start mt-8 sm:mt-12">
          
          {/* LEFT: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Reach out directly via email, phone, or LinkedIn to discuss campaign scaling, ad audits, or consultation.
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate min-w-0">
                    <span className="text-[10px] sm:text-xs text-slate-500 block">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold truncate group-hover:text-blue-400 transition-colors block">
                      {personal.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 block">Direct Phone</span>
                    <span className="text-xs sm:text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                      {personal.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personal.location}
                    </span>
                  </div>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="truncate min-w-0">
                    <span className="text-[10px] sm:text-xs text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold group-hover:text-blue-400 transition-colors truncate block">
                      linkedin.com/in/habeebhussain
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>Typical response time: <strong className="text-slate-200">Within 24 hours</strong></span>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-5">
                Tell me about your business goals, target markets, or current ad spend.
              </p>

              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-2.5 mb-5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong>Thank you!</strong> Your message has been sent successfully. Habeeb will review your inquiry shortly.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-2.5 mb-5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc} className="bg-slate-900 text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Message / Campaign Requirements *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your target audience, goals, or current marketing challenge..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
