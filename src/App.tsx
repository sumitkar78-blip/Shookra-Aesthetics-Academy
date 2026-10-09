import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceModal } from './components/ServiceModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AcademySection } from './components/AcademySection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SERVICES } from './data/servicesData';
import { Service } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedService, setBookingPreselectedService] = useState<string>('');
  const [activeServiceDetail, setActiveServiceDetail] = useState<Service | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle URL hash routing for direct deep linking (e.g. #treatment-hydra-facial)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('treatment-')) {
        const slug = hash.replace('treatment-', '');
        const matched = SERVICES.find((s) => s.slug === slug);
        if (matched) {
          setActiveServiceDetail(matched);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Intersection observer to highlight current navigation section
  useEffect(() => {
    const sections = ['hero', 'about', 'treatments', 'why-us', 'academy', 'gallery', 'reviews', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingPreselectedService(serviceName || '');
    setBookingModalOpen(true);
  };

  const handleSelectTreatmentByName = (serviceName: string) => {
    const matched = SERVICES.find(
      (s) => s.name.toLowerCase() === serviceName.toLowerCase()
    );
    if (matched) {
      setActiveServiceDetail(matched);
    } else {
      handleOpenBooking(serviceName);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E11] text-[#EBE6DC] selection:bg-[#C8A97E] selection:text-[#0D0E11] flex flex-col font-sans">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-width Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Immediate Social Proof / Trust Strip */}
        <TrustBar />

        {/* Editorial About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking('General Consultation')} />

        {/* Signature Treatments (All 10 Modalities) */}
        <ServicesGrid
          onSelectService={(srv) => setActiveServiceDetail(srv)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Why Choose Shookra */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* Dedicated Academy Section */}
        <AcademySection />

        {/* Visual Portfolio Gallery */}
        <GallerySection />

        {/* 5.0 Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact & Map Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Dark Footer */}
      <Footer
        onSelectTreatment={handleSelectTreatmentByName}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Detailed Service Modal / Deep Dive View */}
      <ServiceModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBookService={(srvName) => {
          setActiveServiceDetail(null);
          handleOpenBooking(srvName);
        }}
      />

      {/* Multi-Step Appointment Booking System */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={bookingPreselectedService}
      />
    </div>
  );
}
