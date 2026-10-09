import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG, getWhatsAppLink } from '../config';
import { Calendar, Menu, X, Instagram, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0E11]/90 backdrop-blur-md border-b border-[#C8A97E]/20 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex flex-col group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A97E]"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.2em] font-semibold text-[#F7F4EE] group-hover:text-[#DFC8A2] transition-colors uppercase">
              SHOOKRA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase font-medium">
              Aesthetics &amp; Academy
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-widest uppercase transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A97E] ${
                    isActive
                      ? 'text-[#DFC8A2] font-semibold'
                      : 'text-[#D1C9BC] hover:text-[#F7F4EE]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A97E] shadow-[0_0_8px_#C8A97E]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-4">
            {/* Instagram Luxury Button with subtle neon glow */}
            <a
              href={CLINIC_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Shookra Aesthetics on Instagram"
              className="p-2 sm:px-3 sm:py-2 rounded-sm border border-[#E1306C]/30 bg-[#161318]/70 text-[#F7F4EE] hover:text-white transition-all duration-300 flex items-center gap-2 text-xs tracking-wider glow-instagram group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-[11px] font-medium tracking-wide">Instagram</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="relative px-4 sm:px-5 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all duration-300 glow-gold-subtle glow-gold-hover flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC8A2]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0D0E11]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-sm bg-[#C8A97E] text-[#0D0E11] text-[11px] font-semibold uppercase tracking-wider glow-gold-subtle"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm border border-[#2A2D34] text-[#F7F4EE] hover:text-[#C8A97E] hover:border-[#C8A97E]/40 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0D0E11]/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 border-b border-[#2A2D34]">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col text-left"
            >
              <span className="font-serif-luxury text-xl tracking-[0.2em] font-semibold text-[#F7F4EE]">
                SHOOKRA
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase">
                Aesthetics &amp; Academy
              </span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-sm border border-[#2A2D34] text-[#F7F4EE]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between space-y-6">
            <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif-luxury tracking-widest uppercase text-[#D1C9BC] hover:text-[#DFC8A2] transition-colors py-1 flex items-center justify-between border-b border-[#1E222A]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#C8A97E]">→</span>
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-[#2A2D34]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-sm bg-[#C8A97E] text-[#0D0E11] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 glow-gold-subtle"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
              >
                <span>Talk on WhatsApp</span>
              </a>

              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-sm border border-[#E1306C]/40 bg-[#171217] text-[#E1306C] text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 glow-instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
