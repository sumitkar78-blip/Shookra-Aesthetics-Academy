# Shookra Aesthetics & Academy

A production-grade, luxury website for **Shookra Aesthetics & Academy** located in Shivalik Colony, New Delhi, India. Designed with an editorial aesthetic clinic visual language, subtle luxury glow accents, high-resolution clinical photography, an interactive 5-step appointment booking engine, and SEO optimization.

---

## 💎 Brand Profile

- **Business Name:** Shookra Aesthetics & Academy
- **Location:** 8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India
- **Google Rating:** 5.0 / 5.0 (22 Verified Reviews)
- **Specialty:** Advanced Aesthetic Clinic & Professional Beauty Academy

---

## ✨ Features & Architecture

1. **Editorial Luxury Visual Direction**
   - Palette: Deep Charcoal (`#0D0E11`), Warm Ivory (`#F7F4EE`), and Champagne Gold (`#C8A97E`).
   - Subtle luxury neon glow on Instagram CTA and key interaction states.
   - High-fidelity typography pairing: *Cormorant Garamond* for editorial titles and *Plus Jakarta Sans* for clean body text.
   - Zero-pill metadata discipline with unboxed typographic separators.

2. **Full-Featured 10 Signature Treatments**
   - Permanent Makeup (Micropigmentation)
   - MNRF Treatment (Microneedling Fractional Radiofrequency)
   - Laser Hair Removal Treatment
   - Tattoo Removal
   - Hydra Facial
   - Vampire Facial (PRP / Cellular Rejuvenation)
   - Carbon Facial Peel (Hollywood Laser Peel)
   - Scar Removal
   - Scalp Micro Pigmentation (SMP)
   - Hairfall Treatment

3. **Dedicated Service Detail System**
   - Clinical overview, key benefits, suitability criteria, treatment experience, session count, typical duration, and dedicated FAQs for each modality.
   - Medical & aesthetic disclaimers throughout.

4. **Multi-Step Appointment Booking System**
   - **Step 1:** Select from 10 signature modalities
   - **Step 2:** Select preferred date (quick calendar selectors + date picker)
   - **Step 3:** Select preferred time slot
   - **Step 4:** Client contact info (Name, Phone/WhatsApp, Email, Message) with input validation
   - **Step 5:** Instant reference code generation, booking receipt, and direct 1-tap WhatsApp and Call verification buttons.
   - Saves requests locally (`localStorage`) for clinic tracking.

5. **Academy & Education Positioning**
   - Dedicated "Learn. Create. Elevate." training section for masterclasses and workshop enquiries.

6. **Filterable Lightbox Gallery**
   - High-resolution masonry gallery with keyboard controls (`Esc`, `ArrowLeft`, `ArrowRight`) and zoom controls.

7. **Omnichannel Conversion CTAs**
   - Floating WhatsApp button with prefilled enquiry text
   - Configurable Instagram profile button with subtle neon glow
   - Mobile bottom sticky conversion bar with direct WhatsApp and booking buttons

8. **Local SEO & Schema.org Structured Data**
   - `HealthAndBeautyBusiness` JSON-LD schema embedded in `index.html`.
   - OpenGraph and Twitter social sharing cards configured.

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** CSS transitions, backdrop filters, luxury glow filters

---

## ⚙️ Configuration & Environment Variables

Create or update `.env` using `.env.example`:

```bash
# Clinic WhatsApp Phone Number (International format without + or spaces)
VITE_WHATSAPP_NUMBER="919999999999"

# Official Instagram Profile URL
VITE_INSTAGRAM_URL="https://instagram.com/shookraaesthetics"

# Clinic Phone Number
VITE_PHONE_NUMBER="+91 99999 99999"

# Google Maps Location URL
VITE_GOOGLE_MAPS_URL="https://maps.google.com/?q=8+Shivalik+Rd+Shivalik+Colony+New+Delhi+Delhi+110017"
```

---

## 🚀 Development & Build

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
Dev server will run on `http://localhost:3000`.

### Typecheck & Build for Production
```bash
npm run lint
npm run build
```
The optimized bundle will be generated in `dist/`.
