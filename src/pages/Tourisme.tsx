import { useState, MouseEvent } from 'react';
import { Compass, CompassIcon, Info, Heart, Award, Sparkles, MapPin, Search } from 'lucide-react';
import { ATTRACTIONS_DATA } from '../data';

export default function Tourisme() {
  const [selectedCat, setSelectedCat] = useState<'All' | 'Nature' | 'Culture' | 'Artisanat'>('All');
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const filteredAttractions = ATTRACTIONS_DATA.filter((att) => {
    return selectedCat === 'All' || att.category === selectedCat;
  });

  const crafts = [
    { name: "Le Tissu Lépi de Labé", desc: "Le Lépi est le tissu traditionnel sacré du Fouta Djallon. Tissé à la main par des maîtres artisans à base de coton 100% naturel, il est ensuite teint à l'indigo végétal. Reconnaissable à sa couleur bleu nuit brillante, il symbolise l'élégance et la pureté." },
    { name: "L'artisanat du Cuir", desc: "Sacs de voyage, sandales d'apparat, poufs d'intérieur finement tressés... Le cuir de Labé est exporté dans toute l'Afrique de l'Ouest pour la finesse de ses détails, fruit d'un tannage végétal de chèvre ou de mouton transmis de génération en génération." },
    { name: "Le Miel Pur du Fouta", desc: "Issu des ruches sauvages du massif montagneux du Fouta Djallon, ce miel brun ambré bénéficie d'un goût boisé unique issu du butinage de fleurs sauvages d'eucalyptus et de karité. Un produit bio emblématique de la région." }
  ];

  const travelTips = [
    { title: "Quand Visiter ?", desc: "Privilégiez la fin de la saison des pluies (novembre à janvier) pour voir les Chutes de Saala dans toute leur splendeur, avec un débit spectaculaire et un climat frais idéal." },
    { title: "Comment se Déplacer ?", desc: "Pour accéder aux chutes de Saala ou monter au belvédère du Mont Sasnou, la location d'un véhicule tout-terrain (4x4) ou l'accompagnement par un guide local de l'Office de Tourisme de Labé est fortement conseillée." },
    { title: "Climat de Montagne", desc: "Prévoyez des vêtements chauds pour vos soirées. Du fait de l'altitude (~1 020 mètres), les nuits à Labé peuvent être particulièrement fraîches durant l'harmattan (décembre-janvier)." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="tourisme-view">
      
      {/* 1. HERO PREVIEW */}
      <div className="relative rounded-3xl overflow-hidden h-96 bg-slate-900 text-white flex items-center p-8 sm:p-12 shadow-md">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" 
            alt="Chutes de Saala" 
            className="w-full h-full object-cover opacity-35" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest font-mono">Écotourisme d'Excellence</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
            Explorez les merveilles naturelles du Fouta Djallon
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
            Surnommée la « Suisse de l'Afrique », la région de Labé vous invite à découvrir ses cascades vertigineuses, ses canyons rocheux et son précieux patrimoine artisanal.
          </p>
        </div>
      </div>

      {/* 2. ATTRACTIONS LIST WITH FILTER */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Sites Touristiques Incontournables</h2>
            <p className="text-xs text-gray-400 mt-1">Sélection officielle des plus beaux panoramas de la commune.</p>
          </div>

          <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-xl text-xs">
            {(['All', 'Nature', 'Culture', 'Artisanat'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCat(tab)}
                className={`px-3.5 py-1.5 rounded-lg font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCat === tab ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-emerald-700'
                }`}
              >
                {tab === 'All' ? 'Tous' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((att) => (
            <div key={att.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between h-[440px] hover:border-emerald-100 transition-all group">
              <div className="h-48 overflow-hidden relative bg-gray-50">
                <img src={att.image} alt={att.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button 
                  onClick={(e) => handleLike(att.id, e)}
                  className="absolute top-3 right-3 bg-white/95 p-2 rounded-full text-rose-500 hover:text-rose-600 shadow-xs cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current text-rose-500" />
                  <span className="text-xs font-mono font-bold text-slate-700">{likes[att.id] || 45}</span>
                </button>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">{att.category} • {att.location}</span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{att.name}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">{att.description}</p>
                </div>

                {/* Highlights List preview */}
                <div className="space-y-1.5 pt-3 border-t border-gray-50">
                  {att.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[10px] text-gray-600 font-light">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ARTISANAT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-80 bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" 
            alt="Artisanat Lépi" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent flex items-end p-6 text-white">
            <div>
              <span className="text-[10px] font-bold text-emerald-300 font-mono uppercase">Trésor du Fouta</span>
              <h3 className="text-lg font-bold">Le Châle Lépi Traditionnel</h3>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Savoir-Faire Ancestral</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Artisanat et Produits du Terroir</h2>
          
          <div className="space-y-4">
            {crafts.map((cr, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  {cr.name}
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{cr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. TRAVEL ADVICE / GUIDE */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 space-y-6">
        <h3 className="font-sans font-bold text-lg text-slate-900">Conseils Pratiques aux Voyageurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelTips.map((tip, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200/50 space-y-2 shadow-xs">
              <h4 className="font-bold text-sm text-emerald-900">{tip.title}</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
