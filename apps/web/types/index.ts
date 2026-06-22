export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CarouselImage {
  src: string;
  alt: string;
}
