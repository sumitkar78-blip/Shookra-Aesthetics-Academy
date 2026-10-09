import React, { useState } from 'react';
import { academyMasterclassImg } from '../data/servicesData';
import { getWhatsAppLink } from '../config';
import { GraduationCap, ArrowRight, BookOpen, CheckCircle, MessageSquare, X } from 'lucide-react';

export const AcademySection: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Permanent Makeup & Micropigmentation');
  const [submitted, setSubmitted] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#111317] relative border-t border-[#1F232B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
              <GraduationCap className="w-4 h-4" />
              <span>Professional Aesthetics Education</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE] leading-tight">
              Learn. Create. <br />
              <span className="italic font-normal gold-gradient-text">Elevate.</span>
            </h2>

            <p className="text-base text-[#D1C9BC] font-light leading-relaxed">
              Explore professional beauty and aesthetic education through Shookra Aesthetics &amp; Academy.
            </p>

            <p className="text-xs sm:text-sm text-[#A59E92] leading-relaxed">
              Our training division bridges theory with practical hands-on masterclasses in modern micropigmentation, skincare methodologies, and aesthetic artistry. Programs are structured for aspiring practitioners seeking refined techniques, clinical sanitation standards, and client-centric consulting skills.
            </p>

            {/* Architecture placeholder features for future courses/workshops */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-[#15181F] border border-[#232732]">
                <div className="text-xs font-semibold text-[#DFC8A2] uppercase tracking-wide">
                  Hands-On
                </div>
                <div className="text-[11px] text-[#A59E92] mt-1">
                  Practical model practice &amp; technique refinement
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#15181F] border border-[#232732]">
                <div className="text-xs font-semibold text-[#DFC8A2] uppercase tracking-wide">
                  Small Batches
                </div>
                <div className="text-[11px] text-[#A59E92] mt-1">
                  Intimate cohorts for personalized mentorship
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#15181F] border border-[#232732]">
                <div className="text-xs font-semibold text-[#DFC8A2] uppercase tracking-wide">
                  Sanitation First
                </div>
                <div className="text-[11px] text-[#A59E92] mt-1">
                  Clinical hygiene, cross-contamination prevention
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 py-3.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Academy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppLink("Hello Shookra Academy, I would like to enquire about your upcoming aesthetic training masterclasses.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admission Enquiry</span>
              </a>
            </div>
          </div>

          {/* Image & Highlights */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#2B303C] shadow-2xl">
              <img
                src={academyMasterclassImg}
                alt="Shookra Aesthetics Academy masterclass session"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#15181F]/90 backdrop-blur-md border border-[#C8A97E]/30 text-left">
                <span className="text-[10px] tracking-widest text-[#C8A97E] uppercase font-semibold">
                  Training Studio · Shivalik Colony
                </span>
                <p className="text-sm font-serif-luxury text-[#F7F4EE] mt-0.5">
                  Fostering the next generation of aesthetic practitioners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Enquiry Modal */}
      {enquiryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-lg bg-[#14161D] border border-[#2B303D] rounded-sm p-6 space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-[#232732] pb-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8A97E]">
                <BookOpen className="w-4 h-4" />
                <span>Academy Admission Enquiry</span>
              </div>
              <button
                onClick={() => {
                  setEnquiryOpen(false);
                  setSubmitted(false);
                }}
                className="text-[#A59E92] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-10 h-10 text-[#25D366] mx-auto" />
                <h3 className="text-lg font-serif-luxury text-white">
                  Enquiry Received
                </h3>
                <p className="text-xs text-[#A59E92]">
                  Thank you! Our academy coordinator will reach out with the upcoming workshop dates, curriculum outlines, and admission details.
                </p>
                <button
                  onClick={() => {
                    setEnquiryOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2 rounded-sm bg-[#C8A97E] text-[#0D0E11] text-xs font-semibold uppercase tracking-wider mt-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquiry} className="space-y-4">
                <p className="text-xs text-[#A59E92]">
                  Interested in mastering aesthetic micropigmentation or advanced skincare? Leave your details below.
                </p>

                <div>
                  <label className="block text-xs text-[#D1C9BC] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm bg-[#1A1D25] border border-[#2B303D] text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#D1C9BC] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm bg-[#1A1D25] border border-[#2B303D] text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#D1C9BC] mb-1">Area of Interest</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3 py-2 rounded-sm bg-[#1A1D25] border border-[#2B303D] text-xs text-white focus:outline-none focus:border-[#C8A97E]"
                  >
                    <option value="Permanent Makeup & Micropigmentation">Permanent Makeup &amp; Micropigmentation</option>
                    <option value="Laser Technology & Skin Aesthetics">Laser Technology &amp; Skin Aesthetics</option>
                    <option value="Scalp Micropigmentation (SMP)">Scalp Micropigmentation (SMP)</option>
                    <option value="Advanced Clinical Facials & Peels">Advanced Clinical Facials &amp; Peels</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(false)}
                    className="px-4 py-2 text-xs text-[#A59E92]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold uppercase tracking-wider glow-gold-subtle"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
