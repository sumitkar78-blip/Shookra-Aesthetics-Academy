import React from 'react';
import { CLINIC_CONFIG, getWhatsAppLink } from '../config';
import { SERVICES } from '../data/servicesData';
import { Instagram, MessageSquare, MapPin, Star, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTreatment: (serviceName: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatment, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Shookra', href: '#why-us' },
    { label: 'Academy', href: '#academy' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#090A0D] text-[#D1C9BC] border-t border-[#1D212A] pt-16 pb-24 md:pb-12 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-semibold tracking-[0.2em] text-[#F7F4EE]">
                SHOOKRA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase font-semibold">
                Aesthetics &amp; Academy
              </span>
            </div>

            <p className="text-xs text-[#A59E92] leading-relaxed max-w-sm">
              Refined aesthetic, skin, hair and beauty treatments designed with modern techniques and personalized care in New Delhi.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2 text-[#D1C9BC]">
                <MapPin className="w-4 h-4 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                <span>{CLINIC_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2 text-[#DFC8A2] pt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C8A97E] text-[#C8A97E]" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-[#A59E92]">(22 Reviews)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="p-2.5 rounded-sm border border-[#E1306C]/30 bg-[#151216] text-[#E1306C] hover:text-white transition-all glow-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2.5 rounded-sm border border-[#25D366]/30 bg-[#121915] text-[#25D366] hover:text-white transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7F4EE]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#A59E92]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#DFC8A2] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 10 Signature Treatments Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7F4EE]">
              Our Treatments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A59E92]">
              {SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onSelectTreatment(srv.name)}
                  className="text-left hover:text-[#DFC8A2] transition-colors cursor-pointer truncate"
                >
                  {srv.name}
                </button>
              ))}
            </div>
          </div>

          {/* Consultation CTA Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F7F4EE]">
              Consultations
            </h4>
            <p className="text-xs text-[#A59E92] leading-relaxed">
              Plan your personalized consultation with our clinic specialists.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-3 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-[11px] font-semibold tracking-wider uppercase transition-all glow-gold-subtle"
            >
              Book Now
            </button>

            <button
              onClick={scrollToTop}
              className="w-full mt-2 py-2 text-xs text-[#A59E92] hover:text-white flex items-center justify-center gap-1.5 border border-[#1D212A] rounded-sm transition-colors"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-sm bg-[#101217] border border-[#1D212A] text-[11px] text-[#787D8A] leading-relaxed text-center sm:text-left">
          <span className="font-semibold text-[#A59E92]">Medical &amp; Aesthetic Notice: </span>
          {CLINIC_CONFIG.medicalDisclaimer}
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-[#1B1E26] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#787D8A] gap-4">
          <div>
            © 2026 Shookra Aesthetics &amp; Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Shivalik Colony, New Delhi</span>
            <span aria-hidden="true">·</span>
            <span>5.0 Star Aesthetic Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
