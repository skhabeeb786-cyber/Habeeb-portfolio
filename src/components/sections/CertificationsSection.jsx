import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Industry Accreditations"
          title="Verified Professional"
          highlight="Certifications"
          description="Formally certified by Google Skillshop and SEMrush Academy in paid media algorithms, analytics tracking, and search optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-sm`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {cert.issuer}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {cert.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 text-xs border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Verified</span>
                </span>
                <span className="text-slate-400 font-medium">Skillshop / Academy</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
