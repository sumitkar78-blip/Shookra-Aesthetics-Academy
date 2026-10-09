import React from 'react';
import { Sparkles, UserCheck, HeartHandshake, Eye, Award } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Personalized Approach',
      description:
        'Every skin and hair type is unique. We tailor treatment settings, modalities, and care routines to individual client goals rather than offering one-size-fits-all packages.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Premium Experience',
      description:
        'From our serene consultation rooms in Shivalik Colony to post-treatment follow-up, your comfort, privacy, and clinical hygiene remain our highest priorities.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Modern Treatment Approach',
      description:
        'Utilizing contemporary aesthetic technologies including fractional RF, Q-switched lasers, contact cooling, and micro-pigmentation equipment.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Consultation First',
      description:
        'We believe in honest, transparent assessments. We outline realistic expectations, timeline requirements, and suitability before any procedure commences.',
    },
    {
      icon: <Eye className="w-5 h-5 text-[#C8A97E]" />,
      title: 'Attention to Detail',
      description:
        'Aesthetic procedures demand fine precision — from micro-millimeter permanent brow mapping to calibrated laser energy delivery and follicular replication.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0D0E11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Shookra Difference</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE]">
            Why Shookra?
          </h2>

          <p className="text-sm text-[#A59E92] font-light leading-relaxed">
            Founded on refined aesthetic principles and clinical responsibility in South Delhi.
          </p>
        </div>

        {/* 5 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-sm bg-[#13161C] border border-[#222631] hover:border-[#C8A97E]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl space-y-4 text-left ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-sm bg-[#1A1E26] border border-[#2B303C] flex items-center justify-center">
                {pillar.icon}
              </div>

              <h3 className="text-lg font-serif-luxury font-semibold text-[#F7F4EE] tracking-wide">
                {pillar.title}
              </h3>

              <p className="text-xs text-[#A59E92] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* Interactive Consultation Invite Card */}
          <div className="p-8 rounded-sm bg-gradient-to-br from-[#181B22] to-[#121419] border border-[#C8A97E]/30 flex flex-col justify-between space-y-4 text-left">
            <div className="space-y-2">
              <span className="text-[10px] tracking-widest uppercase text-[#C8A97E] font-semibold">
                Start Your Journey
              </span>
              <h3 className="text-lg font-serif-luxury text-[#F7F4EE]">
                Experience Refined Aesthetic Care
              </h3>
              <p className="text-xs text-[#A59E92] leading-relaxed">
                Schedule your consultation with our aesthetic team in Shivalik Colony, New Delhi.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
