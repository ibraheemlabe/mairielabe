export interface Service {
  id: string;
  title: string;
  category: 'etat-civil' | 'citoyennete' | 'urbanisme' | 'social';
  description: string;
  steps: string[];
  documentsRequired: string[];
  cost: string;
  delay: string;
  formUrl?: string;
  faqs: { q: string; a: string }[];
}

export interface Article {
  id: string;
  title: string;
  category: 'Communique' | 'Evenement' | 'Projet' | 'Sante' | 'Culture';
  summary: string;
  content: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Environnement' | 'Éducation' | 'Économie';
  budget: string;
  progress: number; // 0 to 100
  status: 'Planifié' | 'En cours' | 'Finalisé' | 'Suspendu';
  description: string;
  objectives: string[];
  achievements: string[];
  startDate: string;
  endDate: string;
  image: string;
  gallery: string[];
}

export interface Attraction {
  id: string;
  name: string;
  category: 'Nature' | 'Culture' | 'Artisanat' | 'Gastronomie';
  description: string;
  location: string;
  highlights: string[];
  image: string;
  gallery: string[];
}

export interface SectorOpportunity {
  id: string;
  title: string;
  icon: string;
  description: string;
  potentials: string[];
  projectsToFund: string[];
}

export interface DirectoryItem {
  id: string;
  name: string;
  category: 'Entreprise' | 'Pharmacie' | 'Hôtel' | 'Restaurant' | 'Banque' | 'École' | 'Santé';
  address: string;
  phone: string;
  email?: string;
  hours?: string;
  status?: 'Ouvert' | 'Fermé' | '24h/24';
  rating?: number;
}

export interface PublicDocument {
  id: string;
  title: string;
  category: 'Budget' | 'Rapport' | 'Décision' | 'Appel d\'Offres';
  date: string;
  size: string;
  type: string;
  reference: string;
}

export interface StatsData {
  population: string;
  superficie: string;
  ecoles: number;
  centresSante: number;
  projetsActifs: number;
  budgetAnnuel: string;
}
