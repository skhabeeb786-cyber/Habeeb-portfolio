import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Target,
  Cpu,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { 
  MetaIcon, 
  GoogleAdsIcon, 
  WhatsAppIcon, 
  GA4Icon, 
  GTMIcon, 
  CanvaIcon, 
  ExcelIcon,
  LinkedInIcon 
} from '../common/BrandIcons';

export default function AboutSection() {
  const { personal, marketingStack } = portfolioData;

  const stackIconMap = {
    meta: MetaIcon,
    google: GoogleAdsIcon,
    ga4: GA4Icon,
    gtm: GTMIcon,
    whatsapp: WhatsAppIcon,
    seo: Sparkles,
    canva: CanvaIcon,
    excel: ExcelIcon,
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Profile Visual / Image Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Animated Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-25 blur-xl animate-pulse-slow" />

              {/* Portrait Container with subtle hover tilt */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-blue-400/50 transition-all duration-500">
                
                {/* Visual Avatar Header */}
                <div className="aspect-[4/4.2] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center p-6 sm:p-8 relative overflow-hidden">
                  
                  {/* Decorative background grid */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl animate-float-slow" />

                  {/* Stylized Executive Profile Graphic */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-5">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-500 shadow-glow animate-float-slow">
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border-4 border-slate-900 overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 flex items-center justify-center">
                            <span className="font-extrabold text-3xl sm:text-4xl text-white tracking-wider">
                              HH
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Active Status Badge */}
                      <span className="absolute bottom-1 right-2 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-md" title="Available for campaigns" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {personal.name}
                    </h3>
                    <p className="text-blue-400 text-xs sm:text-sm font-semibold mt-0.5">
                      {personal.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{personal.location}</span>
                    </div>

                    {/* Stats Pill in Card */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xs text-left">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-slate-600 transition-colors">
                        <div className="text-[11px] text-slate-400 font-medium">Experience</div>
                        <div className="text-sm sm:text-base font-bold text-white">1+ Years</div>
                      </div>
                      <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-slate-600 transition-colors">
                        <div className="text-[11px] text-slate-400 font-medium">Campaigns</div>
                        <div className="text-sm sm:text-base font-bold text-emerald-400">₹1L/mo Spend</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="p-3.5 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available
                  </span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:translate-x-0.5 transition-all"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: About Details & Industry Tags & Marketing Stack */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Professional Background
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-3">
                About Me
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {personal.aboutBio}
              </p>
            </div>

            {/* Industry Tags with interactive hover lift */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Industry Experience & Focus</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.industryTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Marketing Stack Component with card glow */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  <span>Core Marketing & Analytics Stack</span>
                </h3>
                <span className="text-xs text-slate-400">8 Integrated Tools</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {marketingStack.map((item, idx) => {
                  const IconComp = stackIconMap[item.icon] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="group p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 transition-colors group-hover:scale-110 duration-200">
                          <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          {item.category.split(' ')[0]}
                        </span>
                      </div>
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
