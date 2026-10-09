import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { Service } from '../types';
import { ArrowRight, Calendar, Sparkles, Clock } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (service: Service) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Skin', 'Hair', 'Laser', 'Aesthetics'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#111317] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Refined Clinical Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE] tracking-tight">
            Our Signature Treatments
          </h2>

          <p className="text-base text-[#D1C9BC] font-light leading-relaxed">
            Personalized aesthetic solutions designed around your goals. Each modality is delivered with meticulous care and modern clinical equipment.
          </p>

          {/* Interactive Category Filter Tabs (Clean segmented buttons) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 rounded-sm cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C8A97E] text-[#0D0E11] font-semibold glow-gold-subtle shadow-md'
                    : 'bg-[#181B21] text-[#D1C9BC] hover:text-white hover:bg-[#20242D] border border-[#2A2E38]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <article
              key={service.id}
              className="group bg-[#15181F] rounded-sm border border-[#232732] hover:border-[#C8A97E]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden bg-[#0D0E11]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15181F] via-transparent to-transparent opacity-90" />
                
                {/* Quiet unboxed metadata */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase text-[#DFC8A2] bg-[#0D0E11]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-[#C8A97E]/20">
                  <span>{service.category}</span>
                </div>

                <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] text-[#A59E92] bg-[#0D0E11]/70 px-2 py-0.5 rounded-sm">
                  <Clock className="w-3 h-3 text-[#C8A97E]" />
                  <span>{service.typicalDuration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif-luxury font-medium text-[#F7F4EE] group-hover:text-[#DFC8A2] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#A59E92] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action Buttons: "Learn More" & "Book Appointment" */}
                <div className="pt-4 border-t border-[#232732] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-[#DFC8A2] hover:text-white transition-colors flex items-center gap-1.5 group/btn cursor-pointer py-1"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.name)}
                    className="px-3.5 py-2 rounded-sm bg-[#1E222A] hover:bg-[#C8A97E] text-[#D1C9BC] hover:text-[#0D0E11] text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Conversion Callout after Services */}
        <div className="mt-16 p-8 rounded-sm bg-[#15181F] border border-[#C8A97E]/25 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-serif-luxury text-[#F7F4EE]">
            Uncertain which treatment suits your skin or hair best?
          </h3>
          <p className="text-xs text-[#A59E92] max-w-xl mx-auto leading-relaxed">
            Every clinical journey starts with a personalized assessment. Schedule a one-on-one consultation with our specialists in Shivalik Colony.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking('General Consultation')}
              className="px-6 py-3 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-widest uppercase transition-all glow-gold-subtle"
            >
              Book Initial Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
