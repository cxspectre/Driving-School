
export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Package {
  name: string;
  lessons: number;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
