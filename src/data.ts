import { Service, Article, Project, Attraction, SectorOpportunity, DirectoryItem, PublicDocument, StatsData } from './types';

export const STATS_LABE: StatsData = {
  population: "280 000 hab.",
  superficie: "402 km²",
  ecoles: 84,
  centresSante: 18,
  projetsActifs: 12,
  budgetAnnuel: "14.5 Milliards GNF"
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'act-naissance',
    title: 'Déclaration de Naissance',
    category: 'etat-civil',
    description: 'Enregistrement officiel d\'un nouveau-né à l\'état civil de la commune. Tout enfant né sur le territoire de la commune doit être déclaré dans les 15 jours suivant l\'accouchement.',
    cost: 'Gratuit (dans le délai légal de 15 jours)',
    delay: '24 heures',
    steps: [
      'Présentez-vous au bureau d\'état civil de la Mairie de Labé muni du certificat d\'accouchement délivré par l\'hôpital ou la maternité.',
      'Fournissez les pièces d\'identité des deux parents (originaux et copies).',
      'Remplissez le formulaire de déclaration fourni par l\'officier d\'état civil.',
      'Signez le registre des naissances. Le volet officiel vous sera remis immédiatement.'
    ],
    documentsRequired: [
      'Certificat d\'accouchement original (ou carnet de santé)',
      'Cartes Nationales d\'Identité ou Passeports des parents',
      'Acte de mariage des parents (le cas échéant pour filiation légitime)',
      'Présence de deux témoins majeurs avec leurs pièces d\'identité'
    ],
    formUrl: '/forms/formulaire_declaration_naissance_labe.pdf',
    faqs: [
      { q: 'Que faire si le délai de 15 jours est dépassé ?', a: 'Au-delà du délai de 15 jours, l\'enregistrement ne peut se faire que sur présentation d\'un jugement supplétif délivré par le Tribunal de Première Instance de Labé.' },
      { q: 'Qui peut faire la déclaration ?', a: 'Le père, la mère, le médecin, la sage-femme ou toute personne ayant assisté à l\'accouchement.' }
    ]
  },
  {
    id: 'act-mariage',
    title: 'Célébration et Acte de Mariage',
    category: 'etat-civil',
    description: 'Célébration républicaine du mariage civil et délivrance de l\'acte de mariage officiel à l\'Hôtel de Ville de Labé.',
    cost: '150 000 GNF (frais de timbre et dossier)',
    delay: 'Dossier à déposer au moins 21 jours avant la date de célébration',
    steps: [
      'Retirez le dossier de mariage au service d\'état civil de la mairie.',
      'Constituez le dossier complet et déposez-le pour la publication des bans.',
      'Publication des bans obligatoire pendant 10 jours consécutifs à la mairie.',
      'Confirmation de la date et de l\'heure de la cérémonie avec le service du protocole.',
      'Célébration du mariage civil dans la Grande Salle des Fêtes de la Mairie.'
    ],
    documentsRequired: [
      'Extraits d\'acte de naissance originaux des futurs époux (datant de moins de 3 mois)',
      'Photocopies des pièces d\'identité en cours de validité',
      'Certificat de célibat / de non-mariage récents',
      'Certificats médicaux prénuptiaux',
      'Noms, professions, domiciles et photocopies d\'identité de 2 témoins majeurs par époux'
    ],
    formUrl: '/forms/dossier_mariage_civil_labe.pdf',
    faqs: [
      { q: 'Peut-on célébrer un mariage en dehors de la Mairie ?', a: 'Non, sauf dérogation exceptionnelle accordée par le Procureur de la République pour motif grave constaté médicalement.' },
      { q: 'Quel est le nombre maximum d\'invités autorisés dans la salle ?', a: 'La Grande Salle des Mariages de l\'Hôtel de Ville de Labé a une capacité maximale de 120 personnes.' }
    ]
  },
  {
    id: 'act-deces',
    title: 'Déclaration de Décès',
    category: 'etat-civil',
    description: 'Enregistrement officiel d\'un décès survenu sur le territoire de la Commune Urbaine de Labé et délivrance de l\'acte de décès obligatoire pour l\'inhumation.',
    cost: 'Gratuit',
    delay: 'Immédiat (moins de 2 heures)',
    steps: [
      'Faites constater le décès par un médecin qualifié (qui délivrera le certificat de décès).',
      'Présentez-vous au bureau d\'état civil de la mairie sous 24 heures.',
      'Fournissez l\'identité complète du défunt et du déclarant.',
      'Retirez l\'acte de décès et l\'autorisation de permis d\'inhumer.'
    ],
    documentsRequired: [
      'Certificat médical de constatation du décès',
      'Pièce d\'identité du défunt (carte d\'identité, passeport ou extrait de naissance)',
      'Pièce d\'identité du déclarant',
      'Livret de famille (le cas échéant)'
    ],
    formUrl: '/forms/declaration_deces_labe.pdf',
    faqs: [
      { q: 'Est-il possible d\'inhumer sans déclaration préalable ?', a: 'Strictement interdit. Aucune inhumation dans les cimetières municipaux de Labé ne peut avoir lieu sans le permis d\'inhumer délivré par la Mairie.' }
    ]
  },
  {
    id: 'urb-permis',
    title: 'Permis de Construire',
    category: 'urbanisme',
    description: 'Autorisation obligatoire délivrée par la Direction Communale de l\'Urbanisme et de l\'Habitat pour toute construction neuve, modification de façade ou agrandissement significatif.',
    cost: 'Calculé selon la surface et le type d\'ouvrage (Barème municipal)',
    delay: '30 à 45 jours d\'instruction par les services techniques',
    steps: [
      'Déposez un dossier complet auprès du Guichet Unique de l\'Urbanisme à la Mairie.',
      'Visite de terrain par l\'ingénieur de la commune pour vérification de l\'alignement et de la conformité du titre.',
      'Examen de la commission technique d\'urbanisme.',
      'Paiement des taxes d\'urbanisme au Trésor Municipal.',
      'Notification de l\'arrêté d\'autorisation signé par Monsieur le Maire.'
    ],
    documentsRequired: [
      'Titre de propriété certifié (Titre Foncier ou Plan de lotissement approuvé)',
      'Plans architecturaux complets (Situation, Masse, Coupes, Façades) signés par un architecte agréé',
      'Devis descriptif des travaux et étude d\'impact environnemental pour les grands ouvrages',
      'Quittance de paiement des frais de dossier (50 000 GNF)'
    ],
    formUrl: '/forms/demande_permis_construire_labe.pdf',
    faqs: [
      { q: 'Quelle est la durée de validité d\'un permis de construire ?', a: 'Le permis de construire est valable 2 ans. Si les travaux n\'ont pas commencé dans ce délai, une prolongation peut être demandée.' }
    ]
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Labé s\'illumine : Lancement officiel du grand projet d\'éclairage public solaire',
    category: 'Projet',
    summary: 'La Commune Urbaine de Labé entame l\'installation de plus de 1 200 lampadaires solaires intelligents sur ses principaux axes routiers pour sécuriser la ville.',
    content: `C'est un jour historique pour les citoyens de Labé. Monsieur le Maire, Al Habib Bah, a procédé ce jeudi au lancement des travaux d'électrification publique solaire de la commune urbaine.\n\nCe programme d'envergure, financé en partenariat avec l'État et des bailleurs de fonds internationaux, vise à doter les artères principales, les marchés et les carrefours clés de la ville de plus de 1 200 lampadaires solaires photovoltaïques de dernière génération.\n\n"L'éclairage public est au cœur de notre stratégie de sécurité publique et de dynamisation de l'économie nocturne", a déclaré Monsieur le Maire lors de son allocution au rond-point de la préfecture.\n\nLes quartiers de Konkola, Mosquée, Kouroula et Pounthioun seront les premiers bénéficiaires de cette phase de déploiement qui devrait s'achever sous 3 mois. En plus d'améliorer la visibilité, ces infrastructures contribueront à réduire le taux d'insécurité nocturne et permettront aux petits commerces de prolonger leurs heures d'activité en toute sérénité.`,
    date: '12 Juillet 2026',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    author: 'Direction de la Communication',
    readTime: '4 min',
    tags: ['Infrastructures', 'Énergie', 'Sécurité', 'Modernisation']
  },
  {
    id: 'art-2',
    title: 'Foire Régionale Agricole du Fouta 2026 : Labé accueille plus de 200 exposants',
    category: 'Culture',
    summary: 'La Mairie de Labé, en collaboration avec la Chambre Régionale d\'Agriculture, inaugure la 8ème édition de la foire célébrant la culture de la pomme de terre et l\'élevage.',
    content: `Sous le haut patronage du Ministère de l'Agriculture et de l'Élevage, la 8ème édition de la Foire Agricole de Labé a ouvert ses portes ce matin sur l'esplanade du Stade Elhadj Saifoulaye Diallo.\n\nCette année, l'accent est mis sur l'industrialisation des chaînes de valeur de la pomme de terre, produit phare de notre région Foutanienne, et la promotion des coopératives laitières locales. Les exposants venus des différentes sous-préfectures de Labé mais aussi des pays voisins (Sénégal, Mali) proposent des produits frais, des innovations technologiques en matière d'irrigation et d'outillage.\n\nLa commune de Labé a mis à disposition des installations modernes et subventionné 30 stands pour les jeunes entrepreneurs agricoles de la région. "Nous voulons que Labé devienne le pôle agro-alimentaire leader de la sous-région", explique le conseiller municipal en charge du développement économique. La foire se poursuivra jusqu'au 25 juillet avec des conférences, des dégustations et des ateliers d'échanges.`,
    date: '10 Juillet 2026',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    author: 'Service Développement Économique',
    readTime: '5 min',
    tags: ['Agriculture', 'Économie', 'Événement', 'Tourisme']
  },
  {
    id: 'art-3',
    title: 'Campagne citoyenne "Labé Ville Verte" : Reboisement des têtes de sources d\'eau',
    category: 'Sante',
    summary: 'Face au changement climatique, les jeunes et les services techniques communaux unissent leurs forces pour planter 15 000 arbres autour des lits de rivières.',
    content: `La préservation de notre environnement est une urgence vitale. Ce week-end, sous l'impulsion de la Direction Communale de l'Environnement et de plusieurs associations de jeunes, la grande campagne de reboisement "Labé Ville Verte" a été lancée.\n\nL'objectif est d'assurer la protection des micro-bassins versants et des têtes de sources qui alimentent en eau potable la ville de Labé, notamment le site de Saala et les zones de captage environnantes.\n\nPlus de 15 000 plants d'espèces locales et d'arbres d'ombrage ont été mobilisés. Les comités de quartier se chargeront du suivi et de l'arrosage de ces jeunes arbres pour garantir leur survie. "Chaque citoyen doit être le gardien d'un arbre", a rappelé l'adjoint au maire lors de l'activité. Les écoles communales seront également associées à travers des clubs environnementaux dès la rentrée prochaine.`,
    date: '05 Juillet 2026',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    author: 'Direction de l\'Environnement',
    readTime: '3 min',
    tags: ['Environnement', 'Reboisement', 'Citoyenneté']
  },
  {
    id: 'art-4',
    title: 'Rénovation du Grand Marché Central de Labé : Point d\'avancement des travaux',
    category: 'Projet',
    summary: 'La mairie présente l\'état de progression de la réhabilitation des hangars commerciaux et de l\'installation des dispositifs de sécurité anti-incendie.',
    content: `Initié il y a six mois, le projet de réhabilitation et de modernisation du Grand Marché Central de Labé avance conformément au calendrier établi. Les ingénieurs municipaux font état d'un taux de réalisation globale de 65%.\n\nLes travaux en cours se concentrent sur la reconstruction complète des hangars à légumes, la pose de toitures ignifugées et le dallage des allées pour faciliter la circulation des piétons et des chariots de livraison. Point crucial du projet : l'installation de 12 bouches d'incendie connectées au réseau d'eau de la ville, une première pour prévenir les feux dévastateurs qui ont par le passé touché l'économie locale.\n\n"Nous travaillons en étroite collaboration avec l'association des commerçants pour minimiser l'impact sur l'activité quotidienne pendant les travaux", assure la cellule technique. La livraison complète est programmée pour fin octobre 2026.`,
    date: '28 Juin 2026',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    author: 'Travaux Publics Communaux',
    readTime: '4 min',
    tags: ['Infrastructures', 'Sécurité', 'Commerce', 'Marché']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-pavage',
    title: 'Aménagement et Pavage des Voiries de Labé',
    category: 'Infrastructure',
    budget: '4.8 Milliards GNF',
    progress: 78,
    status: 'En cours',
    description: 'Projet de pavage en pierres taillées locales et d\'asphaltage des voiries secondaires pour désengorger le centre-ville et éradiquer la boue en saison des pluies.',
    objectives: [
      'Paver 8.5 kilomètres de rues secondaires dans le centre commercial et les quartiers historiques.',
      'Aménager des caniveaux d\'évacuation maçonnés pour stopper l\'érosion pluviale.',
      'Employer et former plus de 250 jeunes locaux à la technique de taille et de pose de pavés.'
    ],
    achievements: [
      '6.2 kilomètres de rues déjà entièrement pavées avec succès.',
      'Caniveaux terminés à 90% réduisant drastiquement les inondations cette saison.',
      'Emploi direct de 180 jeunes de la commune.'
    ],
    startDate: '15 Novembre 2025',
    endDate: '30 Septembre 2026',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'proj-dechets',
    title: 'Construction du Centre de Tri et Valorisation des Déchets',
    category: 'Environnement',
    budget: '3.2 Milliards GNF',
    progress: 92,
    status: 'En cours',
    description: 'Mise en place d\'une infrastructure moderne de gestion des ordures ménagères avec tri sélectif, compostage pour l\'agriculture et recyclage du plastique.',
    objectives: [
      'Éradiquer les décharges sauvages dans la commune urbaine de Labé.',
      'Produire du compost organique de haute qualité pour les agriculteurs de la région.',
      'Instaurer un système de pré-collecte structuré géré par les GIE (Groupements d\'Intérêt Économique).'
    ],
    achievements: [
      'Bâtiments techniques de tri entièrement construits et équipés.',
      'Plateforme de compostage opérationnelle prête à accueillir les intrants.',
      'Signature de partenariats de pré-collecte avec 12 comités de quartiers.'
    ],
    startDate: '10 Janvier 2025',
    endDate: '15 Août 2026',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'proj-ecoles',
    title: 'Rénovation et Équipement des Écoles Primaires Communales',
    category: 'Éducation',
    budget: '1.9 Milliard GNF',
    progress: 100,
    status: 'Finalisé',
    description: 'Campagne de mise aux normes des établissements scolaires : réhabilitation des toitures, blocs sanitaires séparés, adduction d\'eau potable et installation de panneaux solaires pour l\'apprentissage nocturne.',
    objectives: [
      'Rénover entièrement les 4 plus grandes écoles primaires publiques de Labé (Konkola, Kouroula, Tata et Bowounloko).',
      'Construire des blocs de latrines hygiéniques séparés pour garçons et filles.',
      'Doter chaque école de puits forés équipés de pompes solaires et de kits d\'éclairage dans les salles de classe.'
    ],
    achievements: [
      '32 salles de classe totalement rénovées et équipées de nouveaux tableaux et tables-bancs.',
      '4 blocs sanitaires modernes fonctionnels.',
      'Éclairage solaire installé permettant l\'organisation de cours de soutien du soir.'
    ],
    startDate: '01 Juillet 2025',
    endDate: '15 Mai 2026',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80'
    ]
  }
];

export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: 'att-saala',
    name: 'Chutes de la Saala',
    category: 'Nature',
    location: 'Diari (à 25 km du centre-ville de Labé)',
    description: 'Véritable merveille de la nature, les Chutes de la Saala sont composées d\'une série de cascades spectaculaires nichées au cœur d\'une forêt galerie dense. C\'est l\'un des sites touristiques les plus célèbres de Guinée et le joyau touristique du Fouta Djallon.',
    highlights: [
      'Série de cascades rugissantes de plus de 50 mètres de hauteur totale.',
      'Piscines naturelles d\'eau pure propices à la détente et au ressourcement.',
      'Sentier de randonnée pédestre aménagé sous l\'ombrage d\'arbres séculaires.',
      'Présence d\'un espace d\'accueil et de pique-nique pour les visiteurs.'
    ],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'att-sasnou',
    name: 'Le Mont Sasnou et Belvédère de Labé',
    category: 'Nature',
    location: 'Quartier Sassé (périphérie de Labé)',
    description: 'Surplombant la ville de Labé à plus de 1 100 mètres d\'altitude, le Mont Sasnou offre un panorama saisissant à 360 degrés sur la cuvette de la commune, ses toits de tôle étincelants et les collines verdoyantes du Fouta Djallon.',
    highlights: [
      'Point de vue panoramique exceptionnel, idéal au coucher du soleil.',
      'Lieu historique de recueillement et de contes traditionnels.',
      'Sentier accessible en véhicule 4x4 ou par une ascension pédestre de 45 minutes.',
      'Climat frais et vivifiant toute l\'année.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 'att-cuir',
    name: 'Le Quartier des Tanneurs et Artisans du Cuir',
    category: 'Artisanat',
    location: 'Quartier Bowounloko, Labé',
    description: 'Labé est mondialement réputée pour son artisanat du cuir de grande qualité. Au cœur du quartier Bowounloko, les maîtres tanneurs perpétuent des techniques ancestrales de tannage naturel à base de graines de gousses locales et d\'extraits de plantes, façonnant sandales d\'apparat, sacs, poufs et objets décoratifs uniques.',
    highlights: [
      'Démonstration en direct des étapes de tannage et de coloration naturelle du cuir.',
      'Possibilité d\'acheter directement aux artisans sans intermédiaire.',
      'Découverte des motifs traditionnels et des chaussures emblématiques du Fouta.'
    ],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80'
    ]
  }
];

export const INVEST_SECTORS: SectorOpportunity[] = [
  {
    id: 'inv-agri',
    title: 'Agriculture et Agro-industrie',
    icon: 'Sprout',
    description: 'Le Fouta Djallon possède un micro-climat tempéré exceptionnel et des terres fertiles adaptées aux cultures maraîchères de haute valeur, notamment la célèbre Pomme de Terre de Labé.',
    potentials: [
      'Premier bassin producteur de pommes de terre en Afrique de l\'Ouest, avec un potentiel d\'exportation sous-régionale énorme.',
      'Forte demande pour les cultures d\'oignons, de tomates, d\'agrumes et d\'avocats.',
      'Besoin crucial en infrastructures de stockage frigorifique de grande échelle et de transformation agro-industrielle.'
    ],
    projectsToFund: [
      'Projet de construction d\'une usine de transformation de pommes de terre (frites surgelées, amidon).',
      'Mise en place de chaînes de froid alimentées par énergie solaire près des zones de production.'
    ]
  },
  {
    id: 'inv-elevage',
    title: 'Élevage et Industrie Laitière',
    icon: 'Milk',
    description: 'Labé est au cœur de la zone d\'élevage pastoral guinéen. La valorisation de la race bovine locale et le développement de la filière laitière présentent des perspectives de rentabilité élevées.',
    potentials: [
      'Tradition pastorale ancrée avec un cheptel de qualité supérieure.',
      'Consommation locale et nationale de lait frais et de produits laitiers transformés en croissance continue.',
      'Disponibilité d\'espaces pour l\'aménagement de fermes laitières modernes semi-intensives.'
    ],
    projectsToFund: [
      'Création d\'une centrale laitière coopérative moderne avec réseau de collecte réfrigéré.',
      'Projet d\'unité d\'alimentation animale industrielle pour améliorer les rendements laitiers.'
    ]
  },
  {
    id: 'inv-tourisme',
    title: 'Écotourisme et Hôtellerie d\'Affaires',
    icon: 'Trees',
    description: 'Surnommée la "Suisse de l\'Afrique" pour son climat frais et ses montagnes, la région de Labé est la première destination d\'écotourisme du pays. L\'hôtellerie d\'affaires s\'y développe rapidement.',
    potentials: [
      'Attrait naturel majeur : chutes, canyons, falaises de grès, faune et flore endémiques.',
      'Climat agréable toute l\'année, idéal pour le tourisme de santé et de repos.',
      'Position géographique stratégique attirant les séminaires d\'organisations non-gouvernementales et d\'entreprises.'
    ],
    projectsToFund: [
      'Aménagement de l\'Éco-resort des Chutes de Saala (bungalows éco-conçus, tyrolienne, restaurant panoramique).',
      'Construction d\'un complexe hôtelier 4 étoiles de 80 chambres avec centre de conférence de niveau international.'
    ]
  }
];

export const DIRECTORY_DATA: DirectoryItem[] = [
  { id: 'dir-1', name: 'Pharmacie du Fouta', category: 'Pharmacie', address: 'Quartier Mosquée, face à la Grande Mosquée de Labé', phone: '+224 622 34 56 78', status: 'Ouvert', rating: 4.8 },
  { id: 'dir-2', name: 'Hôtel Tata', category: 'Hôtel', address: 'Quartier Tata, Avenue de la République', phone: '+224 620 45 89 12', email: 'contact@hoteltata-labe.com', status: 'Ouvert', rating: 4.5 },
  { id: 'dir-3', name: 'Hôpital Régional Elhadj Saifoulaye Diallo', category: 'Santé', address: 'Quartier Kouroula, Boulevard de l\'Hôpital', phone: '+224 628 90 12 34', status: '24h/24', rating: 4.2 },
  { id: 'dir-4', name: 'Hôtel Saala', category: 'Hôtel', address: 'Quartier Pounthioun, route des chutes', phone: '+224 622 88 99 00', status: 'Ouvert', rating: 4.3 },
  { id: 'dir-5', name: 'Société Générale Guinée (SGG) - Agence Labé', category: 'Banque', address: 'Rond-point de la Préfecture, Centre-ville', phone: '+224 624 55 66 77', hours: '08h30 - 16h30', status: 'Fermé', rating: 4.6 },
  { id: 'dir-6', name: 'Ecobank Labé', category: 'Banque', address: 'Quartier Kouroula, face au Cinéma', phone: '+224 621 11 22 33', hours: '08h30 - 16h30', status: 'Fermé', rating: 4.4 },
  { id: 'dir-7', name: 'Restaurant Le Fouta Saveurs', category: 'Restaurant', address: 'Quartier Mosquée, Rue des Artisans', phone: '+224 664 23 23 23', hours: '12h00 - 23h00', status: 'Ouvert', rating: 4.7 },
  { id: 'dir-8', name: 'Université de Labé', category: 'École', address: 'Hafia (à 15 km de Labé)', phone: '+224 620 33 44 55', email: 'info@univ-labe.edu.gn', hours: '08h00 - 18h00', status: 'Fermé', rating: 4.9 },
  { id: 'dir-9', name: 'Lycée National Wouro', category: 'École', address: 'Quartier Wouro, route de Pita', phone: '+224 625 78 90 12', status: 'Fermé', rating: 4.1 },
  { id: 'dir-10', name: 'Pharmacie Saala', category: 'Pharmacie', address: 'Quartier Bowounloko, route nationale', phone: '+224 623 44 55 66', status: '24h/24', rating: 4.5 }
];

export const PUBLIC_DOCUMENTS: PublicDocument[] = [
  { id: 'doc-1', title: 'Budget Municipal Primitif 2026 - Commune de Labé', category: 'Budget', date: '05 Janvier 2026', size: '4.2 Mo', type: 'PDF', reference: 'ARR/2026/001-CBL' },
  { id: 'doc-2', title: 'Plan de Développement Local (PDL) 2025-2030', category: 'Rapport', date: '18 Décembre 2025', size: '12.8 Mo', type: 'PDF', reference: 'PDL-LABE-2025' },
  { id: 'doc-3', title: 'Arrêté Communal portant réglementation de la circulation des engins lourds au centre-ville', category: 'Décision', date: '22 Avril 2026', size: '1.1 Mo', type: 'PDF', reference: 'DEC-2026-089' },
  { id: 'doc-4', title: 'Appel d\'Offres National : Pavage de voiries secondaires et assainissement (Lot 4)', category: 'Appel d\'Offres', date: '10 Juillet 2026', size: '2.5 Mo', type: 'PDF', reference: 'DAO/CBL/2026/012' },
  { id: 'doc-5', title: 'Compte Rendu de la Session du Conseil Municipal - Juin 2026', category: 'Rapport', date: '29 Juin 2026', size: '1.8 Mo', type: 'PDF', reference: 'CR-CM-2026-02' }
];
