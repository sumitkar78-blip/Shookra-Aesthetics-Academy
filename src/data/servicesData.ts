import { Service } from '../types';

import permanentMakeupImg from '../assets/images/permanent_makeup_1791539708760.jpg';
import mnrfImg from '../assets/images/mnrf_skin_therapy_1791539781671.jpg';
import laserHairImg from '../assets/images/laser_hair_removal_1791539755013.jpg';
import tattooRemovalImg from '../assets/images/tattoo_removal_laser_1791539912938.jpg';
import hydraFacialImg from '../assets/images/hydra_facial_skin_1791539728420.jpg';
import vampireFacialImg from '../assets/images/vampire_facial_skin_1791540045364.jpg';
import carbonPeelImg from '../assets/images/carbon_laser_peel_1791539955830.jpg';
import scarRemovalImg from '../assets/images/scar_removal_skin_1791540458090.jpg';
import scalpMicroImg from '../assets/images/scalp_micro_pigment_1791539998707.jpg';
import hairfallImg from '../assets/images/hairfall_therapy_1791540514441.jpg';
import clinicInteriorImg from '../assets/images/clinic_interior_lounge_1791539814768.jpg';
import academyMasterclassImg from '../assets/images/academy_masterclass_1791539845349.jpg';
import heroImg from '../assets/images/hero_aesthetic_clinic_1791539690074.jpg';

export {
  heroImg,
  clinicInteriorImg,
  academyMasterclassImg,
  permanentMakeupImg,
  mnrfImg,
  laserHairImg,
  tattooRemovalImg,
  hydraFacialImg,
  vampireFacialImg,
  carbonPeelImg,
  scarRemovalImg,
  scalpMicroImg,
  hairfallImg
};

export const SERVICES: Service[] = [
  {
    id: 'permanent-makeup',
    slug: 'permanent-makeup',
    name: 'Permanent Makeup',
    category: 'Aesthetics',
    tagline: 'Precision cosmetic micropigmentation for effortlessly defined features',
    shortDescription: 'Customized microblading, ombre powder brows, and natural lip blush designed to complement your unique facial structure.',
    fullOverview: 'Permanent Makeup (Micropigmentation) at Shookra Aesthetics is an elevated cosmetic artistry procedure that embeds hypoallergenic, medical-grade pigments into the dermal layer. From hyper-realistic eyebrow feathering and powder brows to subtle lip blush enhancement, our bespoke design approach focuses on natural elegance, symmetrical balance, and lasting refinement.',
    benefits: [
      'Saves everyday morning grooming time',
      'Custom pigment mapping tailored to skin undertones',
      'Natural-looking definition that enhances innate contours',
      'Waterproof, smudge-free cosmetic enhancement'
    ],
    suitability: [
      'Individuals with sparse, asymmetric, or over-plucked brows',
      'Clients desiring defined lip contours or subtle coloration',
      'Busy professionals seeking effortless everyday elegance',
      'Active lifestyle enthusiasts seeking smudge-free symmetry'
    ],
    treatmentExperience: 'Each session begins with facial geometry mapping and pigment shade calibration. Topical numbing is applied for comfort throughout the delicate procedure.',
    typicalDuration: '90 – 120 mins',
    recommendedSessions: '1 initial session + 1 touch-up after 4–6 weeks',
    faqs: [
      {
        question: 'How long does Permanent Makeup last?',
        answer: 'Depending on skin type, lifestyle, and aftercare, results typically maintain vibrancy between 12 to 24 months before a subtle color refresher is recommended.'
      },
      {
        question: 'Does the procedure hurt?',
        answer: 'A high-grade topical numbing cream is applied prior to and during the treatment to ensure maximum client comfort.'
      }
    ],
    image: permanentMakeupImg,
    imageAlt: 'High-end cosmetic permanent makeup brow and lip artistry'
  },
  {
    id: 'mnrf-treatment',
    slug: 'mnrf-treatment',
    name: 'MNRF Treatment',
    category: 'Skin',
    tagline: 'Microneedling Radiofrequency for dermal remodeling and collagen renewal',
    shortDescription: 'Advanced RF energy delivered through insulated micro-pins to firm skin laxity, refine texture, and stimulate natural collagen synthesis.',
    fullOverview: 'MNRF (Microneedling Fractional Radiofrequency) combines precision micro-needles with targeted radiofrequency thermal energy. By bypassing the superficial epidermis to heat deeper dermal layers, MNRF triggers robust natural collagen synthesis, minimizes enlarged pores, and tightens skin laxity with minimal downtime.',
    benefits: [
      'Stimulates deep neocollagenesis and elastin renewal',
      'Smoothes uneven skin texture and diminishes fine lines',
      'Helps refine enlarged pores and skin laxity',
      'Minimal epidermal disruption and rapid recovery'
    ],
    suitability: [
      'Clients experiencing mild to moderate skin laxity',
      'Those with texture irregularities, mild scarring, or large pores',
      'Individuals seeking collagen stimulation without extensive downtime'
    ],
    treatmentExperience: 'A numbing cream is applied for 30 minutes. The RF micro-pins are gently positioned over target facial regions. A sensation of mild warmth and slight prickling is customary.',
    typicalDuration: '60 – 75 mins',
    recommendedSessions: '3 – 4 sessions spaced 4 weeks apart',
    faqs: [
      {
        question: 'What is the recovery period for MNRF?',
        answer: 'Mild erythema (redness) resembling a gentle sunburn may persist for 24 to 48 hours. Most clients resume daily routines within one to two days with proper sun protection.'
      },
      {
        question: 'When will I notice improvements?',
        answer: 'While immediate skin tightness may be felt, optimal collagen regeneration unfolds gradually over 4 to 12 weeks.'
      }
    ],
    image: mnrfImg,
    imageAlt: 'MNRF fractional microneedling radiofrequency skin therapy'
  },
  {
    id: 'laser-hair-removal',
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal Treatment',
    category: 'Laser',
    tagline: 'Advanced precision laser technology for long-lasting silky smoothness',
    shortDescription: 'High-precision diode laser with integrated contact cooling for gentle, effective, and lasting hair reduction across all body areas.',
    fullOverview: 'Our Laser Hair Removal treatment utilizes modern wavelength technology with integrated continuous epidermal contact cooling. The laser selectively targets melanin inside hair follicles to disrupt the growth cycle while protecting surrounding skin, delivering a smooth, refined sensation.',
    benefits: [
      'Significant reduction in unwanted hair growth over time',
      'Relieves painful ingrown hairs and razor bumps',
      'Integrated contact cooling tip for maximum comfort',
      'Suitable for face, underarms, arms, legs, and full body'
    ],
    suitability: [
      'Anyone prone to ingrown hairs, folliculitis, or razor irritation',
      'Clients seeking a long-term solution to repetitive waxing and shaving'
    ],
    treatmentExperience: 'The treatment area is shaved and cleaned. A chilled gel is applied, and the laser handpiece glides with continuous cooling pulses. Sensations feel like gentle warm snaps.',
    typicalDuration: '20 – 60 mins (depending on target zone)',
    recommendedSessions: '6 – 8 sessions spaced 4–6 weeks apart',
    faqs: [
      {
        question: 'Is laser hair removal permanent?',
        answer: 'It provides long-term permanent hair reduction. Following a complete series, remaining hair is typically finer and sparse, requiring only occasional maintenance.'
      },
      {
        question: 'Can laser hair removal be done in summer?',
        answer: 'Yes, with proper clinical SPF application and adherence to sun avoidance guidelines post-session.'
      }
    ],
    image: laserHairImg,
    imageAlt: 'Precision laser hair removal treatment with cooling technology'
  },
  {
    id: 'tattoo-removal',
    slug: 'tattoo-removal',
    name: 'Tattoo Removal',
    category: 'Laser',
    tagline: 'Q-Switched laser pulses that shatter unwanted pigments safely',
    shortDescription: 'Advanced ultra-short laser pulses break down ink particles into microscopic fragments for gradual, natural clearance by the body.',
    fullOverview: 'Tattoo Removal at Shookra Aesthetics utilizes calibrated photoacoustic laser technology. Ultra-short nanosecond pulses fragment complex tattoo pigment particles without burning surrounding skin tissue. Over several weeks, the lymphatic system naturally purges the shattered ink particles.',
    benefits: [
      'Non-invasive, targeted ink pigment shattering',
      'Minimal risk of dermal scarring when aftercare is followed',
      'Effective on various tattoo densities and professional inks',
      'Personalized session pacing tailored to ink depth'
    ],
    suitability: [
      'Clients looking to completely fade or lighten existing tattoos',
      'Those planning cover-up tattoos requiring background fading'
    ],
    treatmentExperience: 'Topical cooling or numbing is utilized. Precise laser pulses target the pigment, producing an immediate frost-like reaction that subsides quickly.',
    typicalDuration: '30 – 45 mins',
    recommendedSessions: '4 – 8 sessions spaced 6–8 weeks apart',
    faqs: [
      {
        question: 'Can all colors be removed?',
        answer: 'Black and dark pigments respond most swiftly. Multi-colored inks are assessed during your preliminary consultation to determine optimal laser wavelength settings.'
      },
      {
        question: 'Will there be scarring?',
        answer: 'Our precision approach minimizes epidermal trauma. Following clinical aftercare guidelines strictly helps preserve healthy skin integrity.'
      }
    ],
    image: tattooRemovalImg,
    imageAlt: 'Laser tattoo removal treatment in clinical setting'
  },
  {
    id: 'hydra-facial',
    slug: 'hydra-facial',
    name: 'Hydra Facial',
    category: 'Skin',
    tagline: 'Multi-step vortex deep cleansing, gentle exfoliation, and intense hydration',
    shortDescription: 'Patented vortex suction deeply clears congestion while saturating skin with antioxidant, peptide, and hyaluronic infusions.',
    fullOverview: 'The Signature Hydra Facial is our premier non-invasive glow treatment. Utilizing vortex vacuum extraction, the wand sweeps away accumulated debris, sebum, and dead cellular buildup, simultaneously infusing botanical extracts, peptides, and deep hyaluronic acid moisture for instantaneous radiance.',
    benefits: [
      'Instant dewy hydration and luminous glow without redness',
      'Painless extraction of blackheads, sebum, and congestion',
      'Plumps fine dehydration lines and refines surface texture',
      'Zero downtime — ideal before celebrations or special events'
    ],
    suitability: [
      'Dull, congested, or dehydrated skin types',
      'Anyone preparing for an event requiring flawless skin radiance',
      'Suitable across diverse skin sensitivities'
    ],
    treatmentExperience: 'A relaxing multi-stage experience including gentle lymphatic drainage, gentle chemical peeling, painless vortex extraction, and concentrated serum infusion.',
    typicalDuration: '45 – 60 mins',
    recommendedSessions: 'Monthly maintenance or as desired prior to key events',
    faqs: [
      {
        question: 'Is there any downtime after Hydra Facial?',
        answer: 'None. Your skin leaves clean, deeply nourished, and radiant. Makeup can be applied immediately, though clients usually love the natural bare-skin glow.'
      },
      {
        question: 'How often should I get a Hydra Facial?',
        answer: 'A monthly session is ideal for maintaining clear pores, smooth texture, and optimal hydration balance.'
      }
    ],
    image: hydraFacialImg,
    imageAlt: 'Luxury Hydra Facial vortex extraction and hydration therapy'
  },
  {
    id: 'vampire-facial',
    slug: 'vampire-facial',
    name: 'Vampire Facial',
    category: 'Skin',
    tagline: 'Autologous platelet-rich plasma microneedling for cellular regeneration',
    shortDescription: 'Harnesses your own platelet growth factors infused via microneedling to stimulate deep repair, smoothing, and cellular revitalization.',
    fullOverview: 'The Vampire Facial (PRP / Platelet-Rich Plasma facial) is a premier regenerative aesthetics treatment. A small sample of blood is gently drawn and spun in a centrifuge to isolate concentrated platelet growth factors. These natural bio-stimulants are micro-infused into the skin to supercharge fibroblasts and collagen synthesis.',
    benefits: [
      'Natural bio-stimulation using your body’s own healing factors',
      'Improves skin density, elasticity, and youthful bounce',
      'Softens early fine lines and uneven tone',
      'Encourages accelerated cellular repair'
    ],
    suitability: [
      'Clients desiring natural regenerative skin renewal',
      'Individuals dealing with persistent skin dullness and early laxity',
      'Those seeking holistic collagen stimulation'
    ],
    treatmentExperience: 'A brief blood draw is performed, followed by thorough topical numbing. The concentrated plasma is applied onto the face while a micro-needling device facilitates dermal absorption.',
    typicalDuration: '75 – 90 mins',
    recommendedSessions: '3 sessions spaced 4–6 weeks apart',
    faqs: [
      {
        question: 'What is the recovery timeline?',
        answer: 'Clients typically experience mild flushed redness for 24–48 hours. Skin flaking or dryness may occur for a few days as cellular renewal takes place.'
      },
      {
        question: 'Is the Vampire Facial safe?',
        answer: 'Because the platelet concentrate originates from your own body, there is zero risk of allergic reaction to the biological components.'
      }
    ],
    image: vampireFacialImg,
    imageAlt: 'Vampire facial PRP microneedling regenerative skin treatment'
  },
  {
    id: 'carbon-facial-peel',
    slug: 'carbon-facial-peel',
    name: 'Carbon Facial Peel',
    category: 'Laser',
    tagline: 'The iconic Hollywood laser peel for pore refinement and porcelain clarity',
    shortDescription: 'Liquid carbon captures deep impurities, then is gently vaporized by laser energy to tighten pores, balance oil, and revitalize skin.',
    fullOverview: 'Often heralded as the Hollywood Laser Peel, this revolutionary treatment begins with an application of a specialized medical liquid carbon layer. The carbon bonds with surface dead cells and impurities. When the gentle laser sweeps across the skin, it gently vaporizes the carbon particles, instantly exfoliating and clarifying the complexion.',
    benefits: [
      'Instant tightening of enlarged pores and surface sebum reduction',
      'Deep purification of stubborn impurities and blackheads',
      'Promotes porcelain smoothness and radiant luminosity',
      'Gentle thermal stimulation that promotes subtle collagen tone'
    ],
    suitability: [
      'Oily, combination, or acne-prone skin types',
      'Clients troubled by stubborn enlarged pores or uneven pigmentation',
      'Those wanting an instant photo-ready glow without peeling downtime'
    ],
    treatmentExperience: 'A dark carbon paste is massaged into the skin. As the laser passes over, you hear gentle acoustic pops and feel mild warmth, leaving behind silky, refined skin.',
    typicalDuration: '45 mins',
    recommendedSessions: '3 – 5 sessions for lasting oil balance and pore refinement',
    faqs: [
      {
        question: 'Does the Carbon Peel hurt?',
        answer: 'Not at all. Most clients describe it as a gentle warm tingling with audible clicks as the carbon is vaporized.'
      },
      {
        question: 'Will my face peel afterwards?',
        answer: 'No obvious visible peeling occurs. The exfoliation happens instantaneously during the laser pass, so you can resume normal routines right away.'
      }
    ],
    image: carbonPeelImg,
    imageAlt: 'Carbon laser peel facial treatment in modern aesthetic clinic'
  },
  {
    id: 'scar-removal',
    slug: 'scar-removal',
    name: 'Scar Removal',
    category: 'Skin',
    tagline: 'Targeted fractional resurfacing to diminish textural scars and marks',
    shortDescription: 'Targeted fractional therapies and dermal revision techniques to break down rigid fibrous scar bands and restore uniform skin texture.',
    fullOverview: 'Scar Revision at Shookra Aesthetics incorporates customized multi-modality skin resurfacing. Whether addressing atrophic acne scars, surgical marks, or textural irregularities, our approach combines fractional technologies to break down dense scar fibers and stimulate organized healthy dermal tissue.',
    benefits: [
      'Gradual leveling and smoothing of indented textural scars',
      'Stimulates organized collagen re-alignment',
      'Fades post-inflammatory hyperpigmentation associated with scars',
      'Bespoke clinical strategy customized to each scar type'
    ],
    suitability: [
      'Individuals with resolved acne seeking scar smoothing (boxcar, rolling, icepick)',
      'Clients with superficial post-traumatic or post-surgical scars'
    ],
    treatmentExperience: 'Numbing is applied to the treatment zones. Specialized fractional passes target scarred boundaries to stimulate biological re-contouring.',
    typicalDuration: '60 mins',
    recommendedSessions: '4 – 6 sessions based on scar depth and maturity',
    faqs: [
      {
        question: 'Can old scars be improved?',
        answer: 'Yes, mature scars can show significant textural improvement and softening through consistent fractional sessions.'
      },
      {
        question: 'Are results permanent?',
        answer: 'Yes. Once collagen remodels and textural scars are leveled, the newly synthesized collagen structural improvement is lasting.'
      }
    ],
    image: scarRemovalImg,
    imageAlt: 'Fractional scar revision and laser skin resurfacing'
  },
  {
    id: 'scalp-micro-pigmentation',
    slug: 'scalp-micro-pigmentation',
    name: 'Scalp Micro Pigmentation',
    category: 'Hair',
    tagline: 'Non-surgical follicle replication for the appearance of fuller, denser hair',
    shortDescription: 'Precision micro-dots replicate natural hair follicles to restore receded hairlines, conceal crown thinning, and add perceived density.',
    fullOverview: 'Scalp Micro Pigmentation (SMP) is a cutting-edge cosmetic tattooing procedure designed specifically for the scalp. Using specialized micro-needles and custom organic carbon pigments, our certified specialists replicate thousands of natural hair follicle impressions, recreating sharp hairline definition or disguising visible scalp thinning.',
    benefits: [
      'Immediate visual appearance of a full, buzz-cut hairline or greater density',
      'Non-surgical with zero recovery downtime or scarring',
      'Conceals hair transplant donor scars and alopecia patches',
      'Permanent aesthetic result with long-lasting pigment stability'
    ],
    suitability: [
      'Men and women dealing with pattern baldness, receding hairlines, or crown thinning',
      'Individuals with thinning hair wanting to reduce scalp contrast',
      'Clients seeking to camouflage FUT or FUE transplant scars'
    ],
    treatmentExperience: 'Hairline mapping and color matching precede the micro-pigmentation. Gentle micro-deposits are placed meticulously across several layered sessions.',
    typicalDuration: '2 – 4 hours per session',
    recommendedSessions: '2 – 3 sessions to build realistic layered depth',
    faqs: [
      {
        question: 'How does SMP differ from a regular tattoo?',
        answer: 'SMP uses specialized micro-needles, proprietary non-shifting carbon pigments, and shallow dermal placement that will not bleed or turn blue over time.'
      },
      {
        question: 'How long does SMP last?',
        answer: 'Scalp Micropigmentation typically maintains crisp visual density for 3 to 5 years, requiring only occasional minor touch-ups.'
      }
    ],
    image: scalpMicroImg,
    imageAlt: 'Precision Scalp Micropigmentation follicle density restoration'
  },
  {
    id: 'hairfall-treatment',
    slug: 'hairfall-treatment',
    name: 'Hairfall Treatment',
    category: 'Hair',
    tagline: 'Targeted scalp revitalization and follicle stimulation therapies',
    shortDescription: 'Comprehensive clinical protocols including scalp mesotherapy, peptide boosters, and micro-needling to nourish dormant hair roots.',
    fullOverview: 'Our Clinical Hairfall Treatment is a targeted therapeutic regimen engineered to counteract excessive hair shedding and stimulate miniaturized follicles. Incorporating nutrient-rich mesotherapy cocktails, peptide complexes, and scalp stimulation techniques, this treatment restores scalp micro-circulation and optimizes the follicular growth phase.',
    benefits: [
      'Helps curb active excessive hair shedding',
      'Nourishes dormant roots with bio-active peptides and vitamins',
      'Enhances scalp blood circulation and follicular diameter',
      'Non-invasive protocol with zero disruption to daily life'
    ],
    suitability: [
      'Individuals experiencing telogen effluvium or seasonal hair shedding',
      'Early stages of androgenetic alopecia or overall thinning',
      'Clients wanting to strengthen brittle, thinning hair strands'
    ],
    treatmentExperience: 'The scalp is gently cleansed, followed by targeted micro-delivery of therapeutic serums and optional therapeutic light stimulation. The protocol is comfortable and relaxing.',
    typicalDuration: '45 – 60 mins',
    recommendedSessions: '4 – 8 sessions spaced fortnightly',
    faqs: [
      {
        question: 'How soon can I see a decrease in hair shedding?',
        answer: 'Many clients observe noticeable reduction in daily hair fall within 3 to 4 sessions, with gradual improvements in hair thickness over following months.'
      },
      {
        question: 'Is maintenance required?',
        answer: 'Periodic maintenance sessions every few months help sustain root vitality and long-term follicular nourishment.'
      }
    ],
    image: hairfallImg,
    imageAlt: 'Clinical scalp therapy and hairfall treatment session'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Consultation & Treatment Lounge',
    category: 'Clinic',
    image: clinicInteriorImg,
    description: 'Serene, pristine clinical aesthetic environment in Shivalik Colony.'
  },
  {
    id: 'gal-2',
    title: 'Permanent Makeup Artistry',
    category: 'Treatments',
    image: permanentMakeupImg,
    description: 'Bespoke brow feathering and lip blush micropigmentation.'
  },
  {
    id: 'gal-3',
    title: 'Hydra Facial Rejuvenation',
    category: 'Skin',
    image: hydraFacialImg,
    description: 'Vortex nutrient infusion and deep pore cleansing.'
  },
  {
    id: 'gal-4',
    title: 'MNRF Micro-Needling RF',
    category: 'Skin',
    image: mnrfImg,
    description: 'Precision dermal remodeling and collagen stimulation.'
  },
  {
    id: 'gal-5',
    title: 'Advanced Laser Hair Removal',
    category: 'Treatments',
    image: laserHairImg,
    description: 'Contact-cooled comfortable laser hair reduction.'
  },
  {
    id: 'gal-6',
    title: 'Scalp Micropigmentation',
    category: 'Hair',
    image: scalpMicroImg,
    description: 'Follicle-level micro-pigment density restoration.'
  },
  {
    id: 'gal-7',
    title: 'Carbon Laser Hollywood Peel',
    category: 'Skin',
    image: carbonPeelImg,
    description: 'Instant pore refinement and radiant skin renewal.'
  },
  {
    id: 'gal-8',
    title: 'Vampire Facial PRP Session',
    category: 'Skin',
    image: vampireFacialImg,
    description: 'Autologous platelet therapy for deep cellular rejuvenation.'
  },
  {
    id: 'gal-9',
    title: 'Academy Training Masterclass',
    category: 'Academy',
    image: academyMasterclassImg,
    description: 'Hands-on practical training with certified master educators.'
  }
];

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Simran K.',
    rating: 5,
    date: 'Recent Client',
    source: 'Google Review',
    comment: 'The experience at Shookra Aesthetics was truly exceptional. The clinic in Shivalik is spotless, luxurious, and the staff took time to explain every step before starting my Hydra Facial. My skin has never felt this refreshed!',
    serviceMentioned: 'Hydra Facial'
  },
  {
    id: 'rev-2',
    author: 'Aditya M.',
    rating: 5,
    date: 'Recent Client',
    source: 'Google Review',
    comment: 'Outstanding attention to detail! I opted for the Scalp Micro Pigmentation consultation and the precision is remarkable. Extremely professional and hygienic clinic environment in South Delhi.',
    serviceMentioned: 'Scalp Micro Pigmentation'
  },
  {
    id: 'rev-3',
    author: 'Priyanka S.',
    rating: 5,
    date: 'Recent Client',
    source: 'Google Review',
    comment: 'Had my Permanent Makeup consultation and session here. The aesthetician was so patient with the brow mapping and matched the exact shade for my skin tone. Absolutely 5-star standard!',
    serviceMentioned: 'Permanent Makeup'
  },
  {
    id: 'rev-4',
    author: 'Neha V.',
    rating: 5,
    date: 'Recent Client',
    source: 'Google Review',
    comment: 'Laser hair removal at Shookra was painless thanks to the modern cooling system. The consultation was thorough with no false promises. Truly appreciate the transparent and caring approach.',
    serviceMentioned: 'Laser Hair Removal'
  }
];

export const FAQS_DATA = [
  {
    question: 'What treatments do you offer?',
    answer: 'Shookra Aesthetics & Academy provides 10 signature services: Permanent Makeup, MNRF Treatment, Laser Hair Removal, Tattoo Removal, Hydra Facial, Vampire Facial, Carbon Facial Peel, Scar Removal, Scalp Micro Pigmentation, and Hairfall Treatment.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book your appointment directly using our online booking interface by choosing your desired treatment, preferred date, and time slot. Alternatively, you can message us directly on WhatsApp or call our clinic.'
  },
  {
    question: 'Do I need a consultation before treatment?',
    answer: 'Yes, we always prioritize a thorough preliminary consultation. Our specialists evaluate your skin or hair type, discuss your aesthetic goals, and create a personalized treatment plan suited specifically to you.'
  },
  {
    question: 'How long does a treatment take?',
    answer: 'Treatment times vary based on the procedure. Express glow facials like the Carbon Peel or Hydra Facial take approximately 45 to 60 minutes, while detailed procedures like Scalp Micro Pigmentation or Permanent Makeup may take 90 minutes to 3 hours.'
  },
  {
    question: 'Are treatments suitable for everyone?',
    answer: 'Every treatment has specific indications and suitability criteria. During your personalized consultation, we assess contraindications and tailor the protocol accordingly to ensure utmost safety and efficacy.'
  },
  {
    question: 'How can I contact Shookra?',
    answer: 'You can reach us by clicking our WhatsApp chat button, calling our clinic directly, booking through our online form, or visiting us in person at 8, Road, Shivalik Rd, Shivalik Colony, New Delhi 110017.'
  },
  {
    question: 'Where is Shookra Aesthetics & Academy located?',
    answer: 'We are conveniently located at 8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India — in the heart of South Delhi.'
  },
  {
    question: 'Can I enquire through WhatsApp?',
    answer: 'Yes! Our WhatsApp enquiry link is available across the website. You can send a pre-filled enquiry to discuss appointments, consultations, or academy training programs.'
  }
];
