import React from 'react';
import { CLINIC_CONFIG } from '../config';
import { Star, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: <Building2 className="w-4 h-4 text-[#C8A97E]" />,
      title: 'Professional Experience',
      desc: 'Dedicated aesthetic, skin & hair care protocols'
    },
    {
      icon: <HeartPulse className="w-4 h-4 text-[#C8A97E]" />,
      title: 'Personalized Consultation',
      desc: 'Custom assessment aligned with your personal goals'
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#C8A97E]" />,
      title: 'Modern Treatment Approach',
      desc: 'Advanced equipment and targeted precision techniques'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />,
      title: 'Premium Clinic Experience',
      desc: 'Hygienic, private clinical suites in Shivalik Colony'
    }
  ];

  return (
    <section className="relative bg-[#111317] border-y border-[#20242C] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Rating Callout */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[#242832] pb-6 lg:pb-0">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-serif-luxury font-bold text-[#F7F4EE]">
                {CLINIC_CONFIG.googleRating}
              </span>
              <div className="space-y-0.5">
                <div className="flex text-[#DFC8A2]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />
                  ))}
                </div>
                <div className="text-xs text-[#A59E92] font-medium tracking-wide">
                  {CLINIC_CONFIG.reviewCount} Verified Google Reviews
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs text-[#C8A97E] tracking-wide">
              Trusted by clients seeking refined aesthetic care in South Delhi.
            </p>
          </div>

          {/* 4 Pillars Grid (No pills, clean unboxed typography) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {pillar.icon}
                  <span className="text-xs font-semibold text-[#F7F4EE] tracking-wide">
                    {pillar.title}
                  </span>
                </div>
                <p className="text-[11px] text-[#A59E92] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
