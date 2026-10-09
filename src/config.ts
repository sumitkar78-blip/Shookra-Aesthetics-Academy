export const CLINIC_CONFIG = {
  name: "Shookra Aesthetics & Academy",
  legalName: "Shookra Aesthetics & Academy",
  eyebrow: "Aesthetic Clinic & Beauty Academy",
  address: "8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India",
  locality: "Shivalik Colony, South Delhi",
  city: "New Delhi",
  state: "Delhi",
  pincode: "110017",
  country: "India",
  googleRating: "5.0",
  reviewCount: 22,
  
  // Configurable external variables
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "YOUR_NUMBER_HERE",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/shookraaesthetics",
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || "YOUR_PHONE_NUMBER_HERE",
  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL || "https://maps.google.com/?q=8+Shivalik+Rd+Shivalik+Colony+New+Delhi+Delhi+110017",

  // Consultation disclaimer
  medicalDisclaimer: "Treatment suitability and results may vary from person to person. A personalized clinical consultation is recommended before proceeding with any treatment.",
};

export const getWhatsAppLink = (customText?: string) => {
  const number = CLINIC_CONFIG.whatsappNumber;
  const defaultText = "Hello Shookra Aesthetics & Academy, I would like to enquire about an appointment.";
  const text = encodeURIComponent(customText || defaultText);
  
  if (!number || number === "YOUR_NUMBER_HERE") {
    // Standard direct web intent without specific hardcoded number if not yet configured
    return `https://wa.me/?text=${text}`;
  }
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${text}`;
};

export const getPhoneCallLink = () => {
  const num = CLINIC_CONFIG.phoneNumber;
  if (!num || num === "YOUR_PHONE_NUMBER_HERE") {
    return "#contact";
  }
  return `tel:${num.replace(/[^0-9+]/g, "")}`;
};
