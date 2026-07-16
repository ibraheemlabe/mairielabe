import { useState } from 'react';
import { Search, Phone, MapPin, Star, Bookmark, ExternalLink, Calendar, Building } from 'lucide-react';
import { DirectoryItem } from '../types';

interface AnnuaireProps {
  items: DirectoryItem[];
}

export default function Annuaire({ items }: AnnuaireProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pharmacie', 'Hôtel', 'Restaurant', 'Banque', 'École', 'Santé'];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="annuaire-view">
      
      {/* 1. HEADER & SEARCH */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Annuaire Communal Officiel</span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Services et Commerces de Labé</h1>
        <p className="text-sm text-gray-500 font-light">
          Retrouvez instantanément les contacts, adresses physiques, horaires d'ouverture et gardes de nuit des pharmacies, hôpitaux, hôtels et établissements bancaires de la commune.
        </p>

        {/* Search Input */}
        <div className="relative max-w-lg mx-auto pt-2">
          <input
            type="text"
            placeholder="Rechercher par nom, quartier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all shadow-sm"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
              selectedCategory === cat
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white border-gray-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat === 'All' ? 'Tous les Établissements' : cat}
          </button>
        ))}
      </div>

      {/* 2. REGISTRY GRID */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-[210px] hover:border-emerald-100 transition-all group"
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                      {item.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Status Indicator Pill */}
                  {item.status && (
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      item.status === 'Ouvert' || item.status === '24h/24'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>

                <div className="space-y-1 text-xs text-gray-500 font-light">
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {item.address}</p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {item.phone}</p>
                  {item.hours && (
                    <p className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {item.hours}</p>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-50 flex justify-between items-center text-xs">
                {/* Rating if exists */}
                {item.rating ? (
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span className="font-bold text-slate-800">{item.rating}</span>
                    <span className="text-gray-400 font-light text-[10px]">(Note usagers)</span>
                  </div>
                ) : (
                  <span className="text-gray-400 text-[10px] font-mono">ID: {item.id.toUpperCase()}</span>
                )}

                <button className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 text-[11px] cursor-pointer">
                  Fiche Établissement
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-400 font-mono text-xs border border-dashed border-gray-200 rounded-2xl">
          <Building className="w-6 h-6 mx-auto mb-2 text-gray-300" />
          Aucun professionnel ne correspond à vos filtres dans l'annuaire actuel.
        </div>
      )}

    </div>
  );
}
