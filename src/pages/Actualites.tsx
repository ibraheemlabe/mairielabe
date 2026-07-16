import { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowLeft, Share2, Eye, ShieldAlert, AlertTriangle } from 'lucide-react';
import { Article } from '../types';

interface ActualitesProps {
  articles: Article[];
  selectedArticleId: string | null;
  onSelectArticle: (id: string | null) => void;
}

export default function Actualites({ articles, selectedArticleId, onSelectArticle }: ActualitesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [shareSuccess, setShareSuccess] = useState(false);

  const categories = ['All', 'Communiqué', 'Événement', 'Projet', 'Santé', 'Culture'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeArticle = articles.find(a => a.id === selectedArticleId);

  const handleShare = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  // Single Article Reading View
  if (activeArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8" id="article-detail-view">
        <button
          onClick={() => onSelectArticle(null)}
          className="flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider bg-slate-50 border border-gray-100 hover:bg-slate-100 px-4 py-2.5 rounded-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la liste des actualités
        </button>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{activeArticle.category}</span>
              <span className="text-gray-400 font-mono">Publié le {activeArticle.date}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {activeArticle.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium py-2 border-y border-gray-100">
              <span className="flex items-center gap-1"><User className="w-4 h-4 text-emerald-600" /> Par {activeArticle.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-emerald-600" /> Lecture: {activeArticle.readTime}</span>
              <span className="flex items-center gap-1"><Eye className="w-4 h-4 text-emerald-600" /> 1 420 Vues</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
            <img 
              src={activeArticle.image} 
              alt={activeArticle.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Article Text Content */}
          <div className="prose prose-emerald max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 font-light whitespace-pre-line">
            {activeArticle.content}
          </div>

          {/* Tags */}
          {activeArticle.tags && activeArticle.tags.length > 0 && (
            <div className="pt-4 flex flex-wrap gap-1.5">
              {activeArticle.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded text-xs border border-gray-100">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Comments Disabled Notification Banner (User Requirement) */}
          <div className="bg-amber-50/50 rounded-xl p-4.5 border border-amber-200/50 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-900">Espace de commentaires désactivé</p>
              <p className="text-[11px] text-amber-700/80 mt-0.5 leading-relaxed">
                Conformément à la Charte d'Utilisation des Portails Gouvernementaux de la République de Guinée, l'espace de commentaires public est désactivé sur ce canal officiel de communication pour prévenir la diffusion de fausses informations et préserver la neutralité institutionnelle.
              </p>
            </div>
          </div>

          {/* Share Block */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <span className="text-xs text-gray-400">Copyright © {new Date().getFullYear()} Mairie de Labé</span>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {shareSuccess ? 'Lien de partage copié !' : 'Partager l\'article'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // General Articles Feed Grid View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="articles-feed-view">
      
      {/* 1. TITLE & FILTERS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Actualités & Avis Publics</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Le Journal Municipal de Labé</h1>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Rechercher une actualité..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
              (cat === 'All' && selectedCategory === 'All') || selectedCategory === cat
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white border-gray-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat === 'All' ? 'Toutes les actualités' : cat}
          </button>
        ))}
      </div>

      {/* 2. FEED GRID */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art.id)}
              className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between h-[420px] cursor-pointer group"
            >
              {/* Image banner */}
              <div className="h-44 overflow-hidden relative bg-gray-100">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-emerald-800 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full shadow-xs">
                  {art.category.toUpperCase()}
                </span>
              </div>

              {/* Text content summary */}
              <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-gray-400 font-mono block">{art.date}</span>
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-50 font-mono text-[10px] text-gray-400">
                  <span>Par {art.author}</span>
                  <span>{art.readTime} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-400 font-mono text-xs border border-dashed border-gray-200 rounded-2xl">
          <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-amber-500" />
          Aucun article correspondant trouvé dans nos communiqués de presse.
        </div>
      )}

    </div>
  );
}
