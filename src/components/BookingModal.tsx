import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data/servicesData';
import { CLINIC_CONFIG, getWhatsAppLink, getPhoneCallLink } from '../config';
import { BookingAppointment } from '../types';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  User,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const AVAILABLE_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '01:00 PM',
  '02:30 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Customer details
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Status states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<BookingAppointment | null>(null);

  // Initialize or update preselected service
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    } else if (!selectedService && SERVICES.length > 0) {
      setSelectedService(SERVICES[0].name);
    }
  }, [preselectedService]);

  // Set default minimum date (tomorrow)
  useEffect(() => {
    if (!selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const iso = tomorrow.toISOString().split('T')[0];
      setSelectedDate(iso);
    }
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (phone.replace(/[^0-9]/g, '').length < 9) {
      newErrors.phone = 'Please enter a valid phone number (min 9 digits).';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!selectedService) newErrors.service = 'Please select a treatment.';
    if (!selectedDate) newErrors.date = 'Please select a preferred date.';
    if (!selectedTime) newErrors.time = 'Please select a time slot.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable booking API pipeline
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const newBooking: BookingAppointment = {
        id: `SHK-${Math.floor(100000 + Math.random() * 900000)}`,
        name: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        message: message.trim(),
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      // Persist in local storage for clinic tracking
      const existing = JSON.parse(localStorage.getItem('shookra_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('shookra_bookings', JSON.stringify(existing));

      setConfirmedBooking(newBooking);
      setStep(5);
    } catch {
      setErrors({ form: 'Something went wrong. Please try again or reach out on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate quick upcoming dates
  const getUpcomingDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
      days.push({ iso, weekday, dayNum });
    }
    return days;
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#121419] border border-[#2B303C] rounded-sm shadow-2xl overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232732] bg-[#161820]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A97E] font-semibold">
              Shookra Aesthetics &amp; Academy
            </span>
            <h2 id="booking-modal-title" className="text-lg font-serif-luxury text-[#F7F4EE]">
              {step === 5 ? 'Appointment Confirmation' : 'Schedule Consultation'}
            </h2>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-sm text-[#A59E92] hover:text-white hover:bg-[#1E222B] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-[#14161C] border-b border-[#20232C] flex items-center justify-between text-xs text-[#A59E92]">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 1 ? 'bg-[#C8A97E] text-[#0D0E11]' : 'bg-[#232732] text-[#A59E92]'
              }`}>1</span>
              <span className={step === 1 ? 'text-[#DFC8A2] font-semibold' : ''}>Treatment</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#353945]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 2 ? 'bg-[#C8A97E] text-[#0D0E11]' : 'bg-[#232732] text-[#A59E92]'
              }`}>2</span>
              <span className={step === 2 ? 'text-[#DFC8A2] font-semibold' : ''}>Date</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#353945]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 3 ? 'bg-[#C8A97E] text-[#0D0E11]' : 'bg-[#232732] text-[#A59E92]'
              }`}>3</span>
              <span className={step === 3 ? 'text-[#DFC8A2] font-semibold' : ''}>Time Slot</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#353945]" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 4 ? 'bg-[#C8A97E] text-[#0D0E11]' : 'bg-[#232732] text-[#A59E92]'
              }`}>4</span>
              <span className={step === 4 ? 'text-[#DFC8A2] font-semibold' : ''}>Details</span>
            </div>
          </div>
        )}

        {/* Modal Step Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* STEP 1: Select Treatment */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium text-[#F7F4EE]">
                  Select Your Treatment
                </h3>
                <p className="text-xs text-[#A59E92]">
                  Choose from our 10 signature aesthetic modalities or general assessment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-h-80 overflow-y-auto pr-1">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService === srv.name;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-3 text-left rounded-sm border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#C8A97E] bg-[#1E222A] text-white shadow-md'
                          : 'border-[#262A35] bg-[#15181F] text-[#D1C9BC] hover:border-[#C8A97E]/50'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold">{srv.name}</div>
                        <div className="text-[10px] text-[#A59E92]">{srv.category} · {srv.typicalDuration}</div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {errors.service && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.service}
                </p>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedService) {
                      setErrors({ service: 'Please select a treatment.' });
                      return;
                    }
                    setErrors({});
                    setStep(2);
                  }}
                  className="px-6 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Select Date</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Date */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-base font-medium text-[#F7F4EE]">
                  Select Preferred Date
                </h3>
                <p className="text-xs text-[#A59E92]">
                  Select from upcoming dates or pick from the calendar.
                </p>
              </div>

              {/* Quick Date Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {getUpcomingDays().map((day) => {
                  const isSelected = selectedDate === day.iso;
                  return (
                    <button
                      key={day.iso}
                      type="button"
                      onClick={() => setSelectedDate(day.iso)}
                      className={`p-3 text-center rounded-sm border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#C8A97E] bg-[#1E222A] text-white'
                          : 'border-[#262A35] bg-[#15181F] text-[#D1C9BC] hover:border-[#C8A97E]/40'
                      }`}
                    >
                      <div className="text-[11px] text-[#A59E92] uppercase">{day.weekday}</div>
                      <div className="text-xs font-semibold text-[#F7F4EE]">{day.dayNum}</div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Date Input */}
              <div className="pt-2">
                <label className="block text-xs font-medium text-[#D1C9BC] mb-1.5">
                  Or pick a specific date:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-sm bg-[#15181F] border border-[#2B303C] text-xs text-[#F7F4EE] focus:outline-none focus:border-[#C8A97E]"
                  />
                  <Calendar className="w-4 h-4 text-[#C8A97E] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {errors.date && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.date}
                </p>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-[#A59E92] hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedDate) {
                      setErrors({ date: 'Please choose a date.' });
                      return;
                    }
                    setErrors({});
                    setStep(3);
                  }}
                  className="px-6 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Select Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Select Time Slot */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-base font-medium text-[#F7F4EE]">
                  Select Preferred Time Slot
                </h3>
                <p className="text-xs text-[#A59E92]">
                  Available consultation windows for {selectedDate}. Slots are tentative until verified by our coordinator.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {AVAILABLE_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-sm border text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-[#C8A97E] bg-[#1E222A] text-[#DFC8A2] font-semibold'
                          : 'border-[#262A35] bg-[#15181F] text-[#D1C9BC] hover:border-[#C8A97E]/40'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span className="text-xs">{slot}</span>
                    </button>
                  );
                })}
              </div>

              {errors.time && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.time}
                </p>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs text-[#A59E92] hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedTime) {
                      setErrors({ time: 'Please select a time slot.' });
                      return;
                    }
                    setErrors({});
                    setStep(4);
                  }}
                  className="px-6 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Customer Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Customer Information */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium text-[#F7F4EE]">
                  Client Information
                </h3>
                <p className="text-xs text-[#A59E92]">
                  Booking summary: <span className="text-[#DFC8A2] font-semibold">{selectedService}</span> on{' '}
                  <span className="text-[#DFC8A2] font-semibold">{selectedDate}</span> at{' '}
                  <span className="text-[#DFC8A2] font-semibold">{selectedTime}</span>.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#D1C9BC] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#15181F] border border-[#2B303C] text-xs text-[#F7F4EE] placeholder-[#575B66] focus:outline-none focus:border-[#C8A97E]"
                    />
                    <User className="w-4 h-4 text-[#A59E92] absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#D1C9BC] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#15181F] border border-[#2B303C] text-xs text-[#F7F4EE] placeholder-[#575B66] focus:outline-none focus:border-[#C8A97E]"
                    />
                    <Phone className="w-4 h-4 text-[#A59E92] absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-[#D1C9BC] mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. priya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-[#15181F] border border-[#2B303C] text-xs text-[#F7F4EE] placeholder-[#575B66] focus:outline-none focus:border-[#C8A97E]"
                    />
                    <Mail className="w-4 h-4 text-[#A59E92] absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-medium text-[#D1C9BC] mb-1">
                    Specific Concerns / Message (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={2}
                      placeholder="Any prior treatments, skin allergies or specific goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-sm bg-[#15181F] border border-[#2B303C] text-xs text-[#F7F4EE] placeholder-[#575B66] focus:outline-none focus:border-[#C8A97E]"
                    />
                    <FileText className="w-4 h-4 text-[#A59E92] absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {errors.form && (
                <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-200 text-xs rounded-sm">
                  {errors.form}
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-xs text-[#A59E92] hover:text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all glow-gold-subtle flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing your appointment request...</span>
                  ) : (
                    <>
                      <span>Confirm Request</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Confirmation Received */}
          {step === 5 && confirmedBooking && (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#18231C] border border-[#25D366]/40 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif-luxury text-[#F7F4EE]">
                  Your appointment request has been received.
                </h3>
                <p className="text-xs text-[#A59E92] max-w-md mx-auto">
                  Our clinical coordinator will contact you shortly to finalize your consultation time slot.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="p-5 rounded-sm bg-[#161820] border border-[#282D39] text-left max-w-md mx-auto space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-[#222631] pb-2">
                  <span className="text-[#A59E92]">Reference No:</span>
                  <span className="font-mono text-[#DFC8A2] font-semibold">{confirmedBooking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A59E92]">Client Name:</span>
                  <span className="text-[#F7F4EE] font-medium">{confirmedBooking.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A59E92]">Treatment:</span>
                  <span className="text-[#DFC8A2] font-medium">{confirmedBooking.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A59E92]">Preferred Date:</span>
                  <span className="text-[#F7F4EE]">{confirmedBooking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A59E92]">Preferred Time:</span>
                  <span className="text-[#F7F4EE]">{confirmedBooking.time}</span>
                </div>
                <div className="flex justify-between border-t border-[#222631] pt-2">
                  <span className="text-[#A59E92]">Location:</span>
                  <span className="text-[#A59E92] text-[11px]">8, Shivalik Rd, New Delhi</span>
                </div>
              </div>

              {/* Action Buttons as requested */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(
                    `Hello Shookra Aesthetics, I just submitted appointment request ${confirmedBooking.id} for ${confirmedBooking.service} on ${confirmedBooking.date} at ${confirmedBooking.time}. My name is ${confirmedBooking.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-[#25D366]/40 bg-[#121B16] text-[#25D366] text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={getPhoneCallLink()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-[#2B303C] hover:border-[#C8A97E] bg-[#161820] text-[#D1C9BC] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>Call Clinic</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-[#C8A97E] hover:bg-[#DFC8A2] text-[#0D0E11] text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
