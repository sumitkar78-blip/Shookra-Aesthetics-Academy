import React from 'react';
import { heroImg } from '../data/servicesData';
import { Calendar, Compass, Star, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with luxury gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Shookra Aesthetics and Academy luxury treatment room"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Editorial Vignette & Mood Shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E11]/95 via-[#0D0E11]/80 to-[#0D0E11]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-transparent to-[#0D0E11]/70" />
        {/* Subtle Luxury Warm Gold ambient light beam */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Typography & CTAs */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            {/* Small Eyebrow (No pill box, clean editorial typography) */}
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
              <span className="w-8 h-[1px] bg-[#C8A97E]" />
              <span className="font-semibold">Shookra Aesthetics &amp; Academy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-medium tracking-tight text-[#F7F4EE] leading-[1.08]">
              Advanced Aesthetics. <br />
              <span className="italic font-normal gold-gradient-text">Elevated Confidence.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-base sm:text-lg text-[#D1C9BC] font-light leading-relaxed">
              Premium aesthetic, skin, hair and beauty treatments designed with precision, care and modern techniques. Located in Shivalik Colony, New Delhi.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-widest uppercase transition-all duration-300 glow-gold-subtle glow-gold-hover flex items-center justify-center gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC8A2]"
              >
                <Calendar className="w-4 h-4 text-[#0D0E11]" />
                <span>Book Your Appointment</span>
              </button>

              <a
                href="#treatments"
                className="px-7 py-4 rounded-sm border border-[#C8A97E]/40 hover:border-[#C8A97E] bg-[#14161A]/50 hover:bg-[#14161A] text-[#F7F4EE] hover:text-[#DFC8A2] text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Compass className="w-4 h-4 text-[#C8A97E] group-hover:rotate-45 transition-transform" />
                <span>Explore Treatments</span>
              </a>
            </div>

            {/* Subtle Trust Strip (Zero-pill discipline: unboxed clean text) */}
            <div className="pt-6 border-t border-[#2A2D34]/70 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#D1C9BC]">
              <div className="flex items-center gap-1.5 text-[#DFC8A2]">
                <div className="flex text-[#DFC8A2]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">5.0</span>
                <span className="text-[#A59E92]">Rating</span>
              </div>

              <span className="hidden sm:inline text-[#3E424B]" aria-hidden="true">·</span>

              <div className="text-[#D1C9BC]">
                <span className="font-semibold text-white">22+</span> Client Reviews
              </div>

              <span className="hidden sm:inline text-[#3E424B]" aria-hidden="true">·</span>

              <div className="flex items-center gap-1 text-[#D1C9BC]">
                <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Shivalik Colony, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Right Floating Badge / Feature Preview */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="w-full max-w-sm p-6 rounded-sm bg-[#14161A]/85 backdrop-blur-md border border-[#C8A97E]/30 shadow-2xl relative">
              {/* Subtle gold line accent */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#C8A97E] text-xs font-medium tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Aesthetics</span>
                </div>

                <div className="text-xl font-serif-luxury text-[#F7F4EE]">
                  Premium Aesthetic Experience
                </div>

                <p className="text-xs text-[#A59E92] leading-relaxed">
                  Every treatment protocol begins with clinical skin assessment and personalized consultation to deliver refined, natural-looking harmony.
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#C8A97E]">
                  <span>Private Clinical Suites</span>
                  <span aria-hidden="true">/</span>
                  <span>10 Specialized Modalities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
