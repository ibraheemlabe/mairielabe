import { useState } from 'react';
import { Briefcase, ArrowLeft, Calendar, HelpCircle, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';
import { Project } from '../types';

interface ProjetsProps {
  projects: Project[];
  selectedProjectId: string | null;
  onSelectProject: (id: string | null) => void;
}

export default function Projets({ projects, selectedProjectId, onSelectProject }: ProjetsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Infrastructure' | 'Environnement' | 'Éducation'>('All');

  const filteredProjects = projects.filter((proj) => {
    return activeTab === 'All' || proj.category === activeTab;
  });

  const activeProject = projects.find(p => p.id === selectedProjectId);

  // Single Project detail view
  if (activeProject) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8" id="project-detail-view">
        <button
          onClick={() => onSelectProject(null)}
          className="flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider bg-slate-50 border border-gray-100 hover:bg-slate-100 px-4 py-2.5 rounded-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au suivi des chantiers
        </button>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{activeProject.category}</span>
              <span className={`font-semibold px-2 py-0.5 rounded-full ${
                activeProject.status === 'Finalisé' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>{activeProject.status}</span>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{activeProject.title}</h1>
          </div>

          {/* Hero Banner with overlay budget info */}
          <div className="w-full h-80 rounded-2xl overflow-hidden relative shadow-sm bg-gray-100">
            <img 
              src={activeProject.image} 
              alt={activeProject.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent flex items-end p-6">
              <div className="flex flex-wrap gap-6 text-white text-xs sm:text-sm font-mono">
                <div>
                  <span className="text-emerald-400 block uppercase font-bold text-[10px]">Budget Alloué</span>
                  <span className="text-base font-bold">{activeProject.budget}</span>
                </div>
                <div>
                  <span className="text-emerald-400 block uppercase font-bold text-[10px]">Calendrier</span>
                  <span className="font-semibold">{activeProject.startDate} au {activeProject.endDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar detailed */}
          <div className="bg-slate-50 p-5 rounded-xl border border-gray-100 space-y-2">
            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wider font-semibold">
              <span>Taux d'exécution physique du chantier</span>
              <span className="text-emerald-700 font-bold font-mono">{activeProject.progress}%</span>
            </div>
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden shadow-inner">
              <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: `${activeProject.progress}%` }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Left Col: Objectives */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Objectifs Institutionnels
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 leading-relaxed font-light">
                {activeProject.objectives.map((obj, idx) => (
                  <li key={idx} className="flex gap-2.5 bg-white p-3 rounded-xl border border-gray-100">
                    <span className="text-emerald-600 shrink-0 font-bold">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: Achievements */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Avancées & Résultats à Date
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 leading-relaxed font-light">
                {activeProject.achievements.map((ach, idx) => (
                  <li key={idx} className="flex gap-2.5 bg-white p-3 rounded-xl border border-gray-100">
                    <span className="text-emerald-600 shrink-0 font-bold">★</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-6">
            <span className="font-semibold text-slate-800">Présentation Générale :</span> {activeProject.description}
          </p>

          {/* Photo Gallery */}
          {activeProject.gallery && activeProject.gallery.length > 0 && (
            <div className="space-y-3 pt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Chantier en Images</h4>
              <div className="grid grid-cols-2 gap-4">
                {activeProject.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Chantier" className="w-full h-44 rounded-xl object-cover bg-gray-50 border border-gray-100" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Projects Grid List
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="projects-list-view">
      
      {/* 1. HEADER & TABS */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Plan de Développement Local</span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Grands Projets de la Commune</h1>
        <p className="text-sm text-gray-500 font-light">
          Consultez en toute transparence le budget alloué, le calendrier d'exécution et le niveau d'avancement réel des chantiers de modernisation de la Commune Urbaine de Labé.
        </p>
      </div>

      <div className="flex justify-center border-b border-gray-100 pb-3">
        <div className="inline-flex gap-1 bg-gray-100 p-1.5 rounded-xl">
          {(['All', 'Infrastructure', 'Environnement', 'Éducation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === tab ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              {tab === 'All' ? 'Tous les Projets' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* 2. GRID LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onSelectProject(proj.id)}
            className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between h-[420px] cursor-pointer group"
          >
            {/* Top Banner Image */}
            <div className="h-44 overflow-hidden relative bg-gray-50">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <span className={`absolute top-3 left-3 text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full shadow-sm ${
                proj.status === 'Finalisé' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'
              }`}>
                {proj.status.toUpperCase()}
              </span>
            </div>

            {/* Project description content */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-700 font-mono">{proj.category}</span>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              {/* Progress & Budget summary details */}
              <div className="space-y-3 pt-3 border-t border-gray-50">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Budget</span>
                  <span className="font-bold text-slate-800">{proj.budget}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>Progrès Réel</span>
                    <span className="font-semibold text-gray-700">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
