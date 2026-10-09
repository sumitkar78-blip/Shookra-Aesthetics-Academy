import React from 'react';
import { CLINIC_CONFIG, getWhatsAppLink, getPhoneCallLink } from '../config';
import {
  MapPin,
  Star,
  Phone,
  MessageSquare,
  Instagram,
  Calendar,
  Navigation,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#111317] relative border-t border-[#1F232B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Clinic Details */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Us in South Delhi</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE]">
                Shookra Aesthetics <br />
                <span className="italic font-normal gold-gradient-text">&amp; Academy</span>
              </h2>

              <p className="text-sm text-[#D1C9BC] font-light leading-relaxed">
                Connect with our team to arrange your consultation or enquire about specialized aesthetic treatments.
              </p>
            </div>

            {/* Address & Social Proof */}
            <div className="p-6 rounded-sm bg-[#161921] border border-[#262A35] space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#A59E92] font-semibold">
                    Clinic Address
                  </div>
                  <div className="text-sm text-[#F7F4EE] leading-snug">
                    {CLINIC_CONFIG.address}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#232732] text-xs">
                <div className="flex items-center gap-1.5 text-[#DFC8A2]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />
                    ))}
                  </div>
                  <span className="font-bold text-white ml-1">{CLINIC_CONFIG.googleRating}</span>
                  <span className="text-[#A59E92]">Google Rating</span>
                </div>

                <div className="text-[#D1C9BC]">
                  <span className="font-semibold text-white">{CLINIC_CONFIG.reviewCount}</span> Client Reviews
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#A59E92] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Appointments &amp; Consultations by scheduled booking</span>
              </div>
            </div>

            {/* Key 4 Contact CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="py-3 px-4 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={getPhoneCallLink()}
                className="py-3 px-4 rounded-sm border border-[#2A2E38] hover:border-[#C8A97E] bg-[#161820] text-[#D1C9BC] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C8A97E]" />
                <span>Call Clinic</span>
              </a>

              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-sm border border-[#E1306C]/40 bg-[#171217] text-[#E1306C] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 glow-instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Map Preview & Location Details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-80 sm:h-96 rounded-sm overflow-hidden border border-[#2A2E38] shadow-2xl bg-[#161921]">
              <iframe
                title="Shookra Aesthetics and Academy Location Map"
                src="https://maps.google.com/maps?q=8,+Shivalik+Rd,+Shivalik+Colony,+New+Delhi,+Delhi+110017&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0D0E11]/90 backdrop-blur-md border border-[#C8A97E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">
                    Shivalik Colony, New Delhi
                  </div>
                  <div className="text-[11px] text-[#A59E92]">
                    Near Malviya Nagar &amp; South Delhi Landmarks
                  </div>
                </div>

                <a
                  href={CLINIC_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#161820] border border-[#262A35] text-left">
              <span className="text-[10px] tracking-widest uppercase text-[#C8A97E] font-semibold">
                Arrival Guidelines
              </span>
              <p className="text-xs text-[#A59E92] mt-1 leading-relaxed">
                We suggest arriving 10 minutes prior to your scheduled consultation so our team can perform initial skin/hair history mapping before meeting with your aesthetic practitioner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
