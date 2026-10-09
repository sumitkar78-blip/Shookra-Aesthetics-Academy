import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/servicesData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = ['All', 'Clinic', 'Skin', 'Hair', 'Treatments', 'Academy'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0D0E11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8A97E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-medium text-[#F7F4EE]">
            The Shookra Gallery
          </h2>

          <p className="text-sm text-[#A59E92] font-light leading-relaxed">
            A glimpse into our serene aesthetic environment, precision modalities, and training studio in Shivalik Colony.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase rounded-sm transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#C8A97E] text-[#0D0E11] font-semibold'
                    : 'bg-[#15181F] text-[#D1C9BC] hover:text-white border border-[#232732]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 rounded-sm overflow-hidden bg-[#15181F] border border-[#232732] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-[#0D0E11]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] tracking-widest uppercase text-[#DFC8A2] bg-[#0D0E11]/80 px-2 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#15181F]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#C8A97E]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-serif-luxury text-[#F7F4EE] group-hover:text-[#DFC8A2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#A59E92] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Editorial Note */}
        <div className="mt-8 text-center text-[11px] text-[#717682]">
          Note: Images illustrate clinical treatment environments and aesthetic protocols. Individual results depend on clinical assessment.
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#181B22] text-[#D1C9BC] hover:text-white hover:bg-[#222631] z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181B22]/80 text-white hover:bg-[#C8A97E] hover:text-[#0D0E11] transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#181B22]/80 text-white hover:bg-[#C8A97E] hover:text-[#0D0E11] transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Active Item */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-sm border border-[#2B303C]"
            />
            <div className="text-center space-y-1">
              <h3 className="text-lg font-serif-luxury text-[#F7F4EE]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#A59E92] max-w-lg">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="text-[10px] text-[#C8A97E] tracking-widest uppercase">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
