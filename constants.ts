
import { Benefit, Package, Testimonial, ProcessStep } from './types';

export const COLORS = {
  primary: '#0F172A', // Midnight
  accent: '#F59E0B',  // Electric Amber
  brandBlue: '#2563EB', // Vibrant Blue
  bgLight: '#FDFDFF', 
};

export const BENEFITS: Benefit[] = [
  {
    title: 'Focus op Zelfvertrouwen',
    description: 'Geen angst, maar plezier in het rijden. Wij bouwen stap voor stap aan jouw rust achter het stuur.',
    icon: 'fa-shield-heart'
  },
  {
    title: 'Gouda Expert',
    description: 'Wij kennen elk straatje en elke examenroute in Gouda en omstreken als onze eigen broekzak.',
    icon: 'fa-location-dot'
  },
  {
    title: 'Vaste Instructeur',
    description: 'Altijd hetzelfde gezicht. Jouw persoonlijke coach die precies weet waar je nog even extra aandacht nodig hebt.',
    icon: 'fa-user-tie'
  },
  {
    title: 'Direct Starten',
    description: 'Geen ellenlange wachtlijsten. Wij maken ruimte in de agenda voor nieuwe talenten uit de regio.',
    icon: 'fa-bolt-lightning'
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'Kickstart',
    lessons: 15,
    price: '€975',
    features: ['Individuele coaching', 'CBR Praktijkexamen', 'Persoonlijk plan']
  },
  {
    name: 'Elite Focus',
    lessons: 25,
    price: '€1.550',
    features: ['Meest gekozen', 'Inclusief Tussentijdse Toets', 'Inclusief praktijkexamen', 'Proefexamen training'],
    recommended: true
  },
  {
    name: 'Full Mastery',
    lessons: 35,
    price: '€2.100',
    features: ['Gegarandeerde kwaliteit', 'Inclusief TTT & Examen', 'Theorie begeleiding', 'Onbeperkt advies']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'De Intake',
    description: 'Een relaxte proefles van 60 min waarin we jouw niveau bepalen.'
  },
  {
    title: 'Jouw Roadmap',
    description: 'Geen giswerk. Een helder plan met een vaste einddatum naar je examen.'
  },
  {
    title: 'Mastery & Toets',
    description: 'De fijne kneepjes leren en een proef-run bij het CBR voor de zenuwen.'
  },
  {
    title: 'Het Examen',
    description: 'Je gaat op pad als een veilige weggebruiker. Het roze pasje is binnen handbereik.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Lucas de Vries',
    rating: 5,
    text: 'Echt een top rijschool! Mijn instructeur was super rustig en legde alles heel duidelijk uit. In één keer geslaagd!',
    date: '2 weken geleden'
  },
  {
    name: 'Sanne Meijer',
    rating: 5,
    text: 'Vond het rijden in het begin heel spannend, maar door de persoonlijke aanpak van Sediki kreeg ik al snel zelfvertrouwen.',
    date: '1 maand geleden'
  },
  {
    name: 'Thomas Bakker',
    rating: 5,
    text: 'Hele fijne communicatie en duidelijke afspraken. Geen verborgen kosten en een eerlijk advies over het aantal lessen.',
    date: '2 maanden geleden'
  }
];
