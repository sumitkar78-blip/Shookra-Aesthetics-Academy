import React from 'react';
import { clinicInteriorImg, academyMasterclassImg } from '../data/servicesData';
import { CLINIC_CONFIG } from '../config';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0D0E11] relative overflow-hidden">
      {/* Decorative ambient subtle light */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-[#C8A97E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dual Imagery Layout (Large primary + supporting inset) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative overflow-hidden rounded-sm border border-[#242832] shadow-2xl">
              <img
                src={clinicInteriorImg}
                alt="Shookra Aesthetics Clinic Suite in Shivalik Colony New Delhi"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#14161A]/85 backdrop-blur-md border border-[#C8A97E]/20 text-left">
                <span className="text-[10px] tracking-widest text-[#C8A97E] uppercase font-semibold">
                  Shivalik Colony, New Delhi
                </span>
                <p className="text-sm font-serif-luxury text-[#F7F4EE]">
                  Pristine Treatment Environment &amp; Private Consultation Suites
                </p>
              </div>
            </div>

            {/* Inset Supporting Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-48 rounded-sm overflow-hidden border-2 border-[#C8A97E]/40 shadow-2xl bg-[#14161A]">
              <img
                src={academyMasterclassImg}
                alt="Shookra Aesthetics & Academy training and practice"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#C8A97E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Shookra</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE] leading-[1.15]">
              Where Advanced Aesthetics <br />
              <span className="italic font-normal gold-gradient-text">Meets Personal Care.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D1C9BC] font-light leading-relaxed">
              Shookra Aesthetics &amp; Academy is dedicated to helping clients look and feel their best through personalized aesthetic, skin, hair and beauty treatments.
            </p>

            <p className="text-sm text-[#A59E92] leading-relaxed">
              Situated in Shivalik Colony, New Delhi, we unite modern clinical treatment technologies with an uncompromising standard of hygiene, comfort, and personalized care. Whether you are exploring signature facials, permanent makeup definition, or specialized skin and hair therapies, our philosophy always begins with an individualized consultation designed around your goals.
            </p>

            {/* Key Clinic Values (Unboxed metadata) */}
            <div className="pt-2 space-y-2.5 text-xs text-[#D1C9BC]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>Thorough assessment before initiating any treatment plan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>10 specialized aesthetic, skin, hair and laser modalities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>Professional academy empowering future beauty practitioners</span>
              </div>
            </div>

            {/* Medical Disclaimer Quote */}
            <div className="p-4 rounded-sm bg-[#14161A] border-l-2 border-[#C8A97E] text-[11px] text-[#A59E92] italic leading-relaxed">
              "{CLINIC_CONFIG.medicalDisclaimer}"
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all duration-300 glow-gold-subtle flex items-center gap-2 group cursor-pointer"
              >
                <span>Discover Shookra</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#treatments"
                className="text-xs text-[#DFC8A2] hover:text-white tracking-widest uppercase transition-colors"
              >
                View Our Portfolio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
