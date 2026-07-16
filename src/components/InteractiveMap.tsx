import { useState } from 'react';
import { MapPin, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MapLocation {
  id: string;
  name: string;
  type: 'Quartier' | 'Site Touristique' | 'Infrastructure';
  coords: { x: number; y: number };
  description: string;
  population?: string;
  projects?: string[];
  keyFeature: string;
}

const LABE_LOCATIONS: MapLocation[] = [
  {
    id: 'loc-centre',
    name: 'Centre-Ville / Marché',
    type: 'Quartier',
    coords: { x: 50, y: 50 },
    description: 'Le cœur économique et administratif de Labé. Abrite l\'Hôtel de Ville, la préfecture, les banques et le Grand Marché Central.',
    population: '45 000 hab.',
    projects: ['Modernisation du Grand Marché', 'Rénovation de l\'éclairage solaire'],
    keyFeature: 'Forte densité commerciale, centre névralgique.'
  },
  {
    id: 'loc-tata',
    name: 'Quartier Tata',
    type: 'Quartier',
    coords: { x: 35, y: 35 },
    description: 'Quartier résidentiel dynamique et moderne en pleine expansion. Connu pour ses établissements hôteliers élégants et ses infrastructures de santé.',
    population: '28 000 hab.',
    projects: ['Campagne Ville Verte - Reboisement', 'Extension du réseau d\'eau'],
    keyFeature: 'Zone résidentielle chic, pôle hôtelier.'
  },
  {
    id: 'loc-konkola',
    name: 'Quartier Konkola',
    type: 'Quartier',
    coords: { x: 62, y: 40 },
    description: 'L\'un des quartiers historiques de la ville, réputé pour son dynamisme communautaire et ses écoles historiques.',
    population: '32 000 hab.',
    projects: ['Rénovation de l\'école primaire publique de Konkola'],
    keyFeature: 'Patrimoine historique et pôle scolaire.'
  },
  {
    id: 'loc-kouroula',
    name: 'Quartier Kouroula',
    type: 'Quartier',
    coords: { x: 45, y: 65 },
    description: 'Quartier accueillant l\'Hôpital Régional et de nombreuses résidences administratives. Zone calme et arborée.',
    population: '19 000 hab.',
    projects: ['Amélioration de l\'assainissement des eaux pluviales'],
    keyFeature: 'Quartier administratif et hospitalier.'
  },
  {
    id: 'loc-bowounloko',
    name: 'Bowounloko (Tanneurs)',
    type: 'Quartier',
    coords: { x: 68, y: 60 },
    description: 'Le berceau de l\'artisanat du cuir de Labé. C\'est ici que les maîtres tanneurs exercent et transmettent leur art.',
    population: '22 000 hab.',
    projects: ['Pavage de la rue des tanneurs', 'Aménagement du centre d\'apprentissage du cuir'],
    keyFeature: 'Artisanat d\'art traditionnel du cuir guinéen.'
  },
  {
    id: 'loc-saala',
    name: 'Chutes de Saala',
    type: 'Site Touristique',
    coords: { x: 80, y: 25 },
    description: 'Splendides chutes d\'eau situées à Diari (à 25 km du centre). Le site naturel le plus célèbre de la région.',
    keyFeature: 'Ressource écotouristique majeure du Fouta.'
  },
  {
    id: 'loc-sasnou',
    name: 'Mont Sasnou / Belvédère',
    type: 'Site Touristique',
    coords: { x: 20, y: 60 },
    description: 'Sommet offrant une vue spectaculaire sur toute la ville de Labé, propice aux pique-niques et randonnées.',
    keyFeature: 'Belvédère naturel culminant à 1100m d\'altitude.'
  }
];

export default function InteractiveMap() {
  const [selectedLoc, setSelectedLoc] = useState<MapLocation>(LABE_LOCATIONS[0]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" id="interactive-map-container">
      <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white flex justify-between items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Démonstration Technologique</span>
          <h3 className="text-xl font-bold font-sans">Carte Interactive de la Commune de Labé</h3>
        </div>
        <div className="bg-emerald-700/50 text-emerald-100 text-xs px-3 py-1 rounded-full font-mono">
          Géolocalisation Simulée
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Map Area */}
        <div className="lg:col-span-7 bg-slate-50 p-6 flex flex-col justify-between min-h-[400px] relative border-r border-gray-100">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="text-xs text-gray-500 font-mono flex items-center gap-1.5 z-10">
            <Info className="w-3.5 h-3.5 text-emerald-600" />
            Cliquez sur les marqueurs pour explorer les quartiers & sites d'intérêt
          </div>

          {/* Map Graphic representation using inline SVG of Fouta topography lines & points */}
          <div className="my-auto relative w-full h-[320px] bg-emerald-50/20 rounded-xl border border-emerald-100/30 overflow-hidden flex items-center justify-center">
            {/* Background topographic lines visual effect */}
            <svg className="absolute inset-0 w-full h-full text-emerald-100/30" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,100 C 150,120 200,50 400,100" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 0,150 C 100,200 250,150 400,200" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 0,50 C 120,40 180,120 400,30" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M 0,250 C 180,280 300,220 400,280" fill="none" stroke="currentColor" strokeWidth="2" />
              {/* Central ring indicator (Labé Basin) */}
              <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r="50" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="1" />
            </svg>

            {/* Grid Coordinates indicators */}
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gray-400">LAT: 11°19′N | LONG: 12°17′W</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-gray-400">Échelle 1:50 000</span>

            {/* Map Pins */}
            {LABE_LOCATIONS.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 focus:outline-none"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring Pulse for Selected */}
                    {isSelected && (
                      <span className="absolute inline-flex h-10 w-10 rounded-full bg-emerald-500 opacity-20 animate-ping"></span>
                    )}
                    
                    {/* Pin Outer circle */}
                    <div className={`p-2 rounded-full shadow-md transition-all duration-300 ${
                      isSelected 
                        ? 'bg-emerald-600 text-white scale-110' 
                        : 'bg-white text-emerald-800 hover:bg-emerald-50 hover:scale-105 border border-emerald-100'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Popover label on hover */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[11px] font-medium px-2 py-1 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                      {loc.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-4 text-xs mt-2 justify-center z-10">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-600 rounded-full"></span> Quartier</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-sky-500 rounded-full"></span> Site Touristique</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span> Infrastructure</span>
          </div>
        </div>

        {/* Detailed Description Area */}
        <div className="lg:col-span-5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${
                selectedLoc.type === 'Site Touristique' 
                  ? 'bg-sky-50 text-sky-700 border border-sky-100' 
                  : selectedLoc.type === 'Quartier' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                    : 'bg-amber-50 text-amber-700 border border-amber-100'
              }`}>
                {selectedLoc.type}
              </span>
              <span className="text-xs text-gray-400 font-mono">Ref: {selectedLoc.id.toUpperCase()}</span>
            </div>

            <h4 className="text-2xl font-bold text-gray-900 font-sans tracking-tight mb-2 flex items-center justify-between">
              {selectedLoc.name}
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {selectedLoc.description}
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wider font-semibold">Atout Majeur</span>
                <span className="text-sm font-medium text-gray-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {selectedLoc.keyFeature}
                </span>
              </div>

              {selectedLoc.population && (
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Population Estimée</span>
                  <span className="text-sm font-semibold text-gray-800">{selectedLoc.population}</span>
                </div>
              )}

              {selectedLoc.projects && selectedLoc.projects.length > 0 && (
                <div className="py-2">
                  <span className="text-xs text-gray-400 block mb-2 uppercase tracking-wider font-semibold">Projets Actifs</span>
                  <div className="space-y-1.5">
                    {selectedLoc.projects.map((proj, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        {proj}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">Mise à jour: Juillet 2026</span>
            <button className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group">
              Fiche Détaillée
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
