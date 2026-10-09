import React, { useState } from 'react';
import { FAQS_DATA } from '../data/servicesData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0D0E11] relative border-t border-[#1F232B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-[#A59E92] font-light leading-relaxed">
            Helpful answers regarding our aesthetic treatments, consultations, and clinic visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#232732] rounded-sm overflow-hidden bg-[#13161C] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif-luxury text-[#F7F4EE] hover:text-[#DFC8A2] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#A59E92] leading-relaxed border-t border-[#1C2028] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
