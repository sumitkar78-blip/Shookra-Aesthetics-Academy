import React from 'react';
import { CLINIC_CONFIG } from '../config';
import { REVIEWS_DATA } from '../data/servicesData';
import { Star, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#111317] relative border-t border-[#1F232B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 5.0 Rating Highlight */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
            <ShieldCheck className="w-4 h-4" />
            <span>Client Impressions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE]">
            5.0 Star Rated Experience
          </h2>

          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-[#DFC8A2]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C8A97E] text-[#C8A97E]" />
              ))}
            </div>
            <span className="text-lg font-bold text-white ml-2">{CLINIC_CONFIG.googleRating}</span>
            <span className="text-xs text-[#A59E92]">({CLINIC_CONFIG.reviewCount} Google Reviews)</span>
          </div>

          <p className="text-sm text-[#A59E92] font-light leading-relaxed">
            Reflecting our steadfast commitment to clinical hygiene, personalized consultations, and natural-looking aesthetic results in New Delhi.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-sm bg-[#15181F] border border-[#232732] hover:border-[#C8A97E]/40 transition-all duration-300 flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#DFC8A2]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A59E92]">
                    {rev.source}
                  </span>
                </div>

                <p className="text-xs text-[#D1C9BC] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#232732] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">{rev.author}</div>
                  {rev.serviceMentioned && (
                    <div className="text-[10px] text-[#C8A97E]">{rev.serviceMentioned}</div>
                  )}
                </div>
                <span className="text-[10px] text-[#717682]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Review Architecture Callout */}
        <div className="mt-12 p-5 rounded-sm bg-[#14161C] border border-[#232732] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <div className="text-xs font-medium text-[#F7F4EE]">
              Real Google Reviews &amp; Client Feedback
            </div>
            <div className="text-[11px] text-[#A59E92]">
              Real client testimonials can be connected directly via Google Business Profile API.
            </div>
          </div>

          <a
            href={CLINIC_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-sm border border-[#C8A97E]/30 hover:border-[#C8A97E] text-[#DFC8A2] text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Read on Google</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
