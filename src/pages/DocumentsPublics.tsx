import { useState } from 'react';
import { Search, Download, FileText, Calendar, AlertCircle, Bookmark, ShieldCheck } from 'lucide-react';
import { PublicDocument } from '../types';

interface DocumentsPublicsProps {
  documents: PublicDocument[];
}

export default function DocumentsPublics({ documents }: DocumentsPublicsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dlNotification, setDlNotification] = useState<string | null>(null);

  const categories = ['All', 'Budget', 'Rapport', 'Décision', "Appel d'Offres"];

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.reference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (title: string) => {
    setDlNotification(`Fichier vérifié et sécurisé : ${title}`);
    setTimeout(() => {
      setDlNotification(null);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="documents-view">
      
      {/* 1. TITLE & SUMMARY */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Transparence Budgétaire & Législative</span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Bibliothèque des Documents Publics</h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Accédez librement et en toute transparence aux arrêtés signés par Monsieur le Maire, aux procès-verbaux d'orientation budgétaire du Conseil Municipal de Labé, et aux avis d'appels d'offres en cours.
        </p>

        {/* Search */}
        <div className="relative max-w-lg mx-auto pt-2">
          <input
            type="text"
            placeholder="Rechercher par référence, mot-clé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all shadow-sm"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* TABS FILTER */}
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
            {cat === 'All' ? 'Tous les Documents' : cat}
          </button>
        ))}
      </div>

      {/* DL FLOATING RECEIPT */}
      {dlNotification && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-bounce max-w-sm">
          <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold font-mono text-emerald-400">Archivage Numérique Certifié</p>
            <p className="text-[10px] text-gray-400 leading-snug">{dlNotification}</p>
          </div>
        </div>
      )}

      {/* 2. ARCHIVE TABLE */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-100 text-slate-400 font-bold uppercase tracking-wider text-[10px] font-mono">
                <th className="p-4 sm:p-5">Intitulé du Document</th>
                <th className="p-4 sm:p-5">Catégorie</th>
                <th className="p-4 sm:p-5">Référence légale</th>
                <th className="p-4 sm:p-5">Date d'effet</th>
                <th className="p-4 sm:p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-slate-700">
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-700 shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="line-clamp-1 max-w-xs sm:max-w-md">{doc.title}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-gray-500">{doc.category}</td>
                    <td className="p-4 sm:p-5 font-mono text-xs font-bold text-slate-800">{doc.reference}</td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-gray-400">{doc.date}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <button
                        onClick={() => handleDownload(doc.title)}
                        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-3 py-2 rounded-lg cursor-pointer transition-colors shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{doc.type} ({doc.size})</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-gray-400 font-mono text-xs">
                    <AlertCircle className="w-6 h-6 mx-auto mb-2 text-gray-300" />
                    Aucun document ne correspond aux filtres de recherche publique.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
