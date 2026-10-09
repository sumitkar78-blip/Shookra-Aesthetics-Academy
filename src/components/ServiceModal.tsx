import React, { useEffect, useState } from 'react';
import { Service } from '../types';
import { CLINIC_CONFIG, getWhatsAppLink } from '../config';
import { X, Calendar, Check, Clock, ChevronDown, ChevronUp, AlertCircle, MessageSquare } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#121419] border border-[#2B303C] rounded-sm shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232732] bg-[#15181F] z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest uppercase text-[#C8A97E] font-medium">
              {service.category} Modality
            </span>
            <span className="text-[#3E424B]">/</span>
            <span className="text-xs text-[#D1C9BC] hidden sm:inline">{service.typicalDuration}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-[#A59E92] hover:text-white hover:bg-[#1E222B] transition-colors"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          {/* Hero Banner with Treatment Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-64 md:h-72 rounded-sm overflow-hidden border border-[#2A2E39]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121419]/80 via-transparent to-transparent" />
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2
                id="service-modal-title"
                className="text-2xl sm:text-4xl font-serif-luxury font-medium text-[#F7F4EE] leading-tight"
              >
                {service.name}
              </h2>
              <p className="text-sm text-[#DFC8A2] italic font-light">
                {service.tagline}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#A59E92]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C8A97E]" />
                  <span>Duration: {service.typicalDuration}</span>
                </div>
                <span>·</span>
                <div>
                  <span className="text-[#D1C9BC]">Sessions:</span> {service.recommendedSessions}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookService(service.name);
                  }}
                  className="px-5 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Treatment</span>
                </button>

                <a
                  href={getWhatsAppLink(`Hello Shookra Aesthetics, I would like to enquire about ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3 pt-4 border-t border-[#232732]">
            <h3 className="text-lg font-serif-luxury text-[#F7F4EE] tracking-wide">
              Clinical Overview
            </h3>
            <p className="text-xs sm:text-sm text-[#D1C9BC] font-light leading-relaxed">
              {service.fullOverview}
            </p>
          </div>

          {/* Benefits & Suitability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Key Benefits */}
            <div className="p-5 rounded-sm bg-[#161921] border border-[#262A35] space-y-3">
              <h4 className="text-sm font-semibold tracking-wide uppercase text-[#DFC8A2]">
                Key Benefits
              </h4>
              <ul className="space-y-2 text-xs text-[#D1C9BC]">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C8A97E] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suitability */}
            <div className="p-5 rounded-sm bg-[#161921] border border-[#262A35] space-y-3">
              <h4 className="text-sm font-semibold tracking-wide uppercase text-[#DFC8A2]">
                Who It May Be Suitable For
              </h4>
              <ul className="space-y-2 text-xs text-[#D1C9BC]">
                {service.suitability.map((suit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#C8A97E] font-bold text-xs mt-0.5">•</span>
                    <span>{suit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment Experience */}
          <div className="space-y-3 p-5 rounded-sm bg-[#161921] border border-[#262A35]">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[#DFC8A2]">
              Treatment Experience
            </h4>
            <p className="text-xs text-[#D1C9BC] leading-relaxed">
              {service.treatmentExperience}
            </p>
          </div>

          {/* FAQs Accordion */}
          {service.faqs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-serif-luxury text-[#F7F4EE]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#262A35] rounded-sm overflow-hidden bg-[#15181F]"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-medium text-[#F7F4EE] hover:text-[#DFC8A2] transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#C8A97E]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#C8A97E]" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-[#A59E92] leading-relaxed border-t border-[#20232B] pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legal / Medical Disclaimer */}
          <div className="flex items-start gap-3 p-4 rounded-sm bg-[#16171C] border border-[#2F3440] text-[11px] text-[#A59E92] leading-relaxed">
            <AlertCircle className="w-4 h-4 text-[#C8A97E] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#D1C9BC]">Disclaimer: </span>
              {CLINIC_CONFIG.medicalDisclaimer}
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="px-6 py-4 bg-[#15181F] border-t border-[#232732] flex items-center justify-between">
          <div className="text-xs text-[#A59E92]">
            Need advice? Discuss during consultation.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-[#D1C9BC] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.name);
              }}
              className="px-5 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
