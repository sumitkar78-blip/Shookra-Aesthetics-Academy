export interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'Skin' | 'Hair' | 'Aesthetics' | 'Laser';
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  benefits: string[];
  suitability: string[];
  treatmentExperience: string;
  typicalDuration: string;
  recommendedSessions: string;
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
}

export interface BookingAppointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Clinic' | 'Skin' | 'Hair' | 'Treatments' | 'Academy';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  comment: string;
  serviceMentioned?: string;
}
