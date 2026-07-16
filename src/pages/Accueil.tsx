import { Landmark, ArrowRight, BookOpen, Briefcase, Compass, Users, Map, Award, HelpCircle, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Article, Project, StatsData } from '../types';
import InteractiveMap from '../components/InteractiveMap';

interface AccueilProps {
  onPageChange: (page: string) => void;
  latestArticles: Article[];
  activeProjects: Project[];
  stats: StatsData;
  onSelectArticle: (id: string) => void;
  onSelectProject: (id: string) => void;
}

export default function Accueil({ 
  onPageChange, 
  latestArticles, 
  activeProjects, 
  stats, 
  onSelectArticle,
  onSelectProject 
}: AccueilProps) {

  const servicesShortcuts = [
    { title: "État Civil", desc: "Actes de naissance, mariage, décès", icon: Users, page: "services" },
    { title: "Urbanisme", desc: "Permis de construire, cadastre", icon: Landmark, page: "services" },
    { title: "Investir", desc: "Opportunités & guide économique", icon: Briefcase, page: "investir" },
    { title: "Tourisme", desc: "Chutes de Saala & artisanat", icon: Compass, page: "tourisme" }
  ];

  return (
    <div className="space-y-16 pb-16" id="accueil-view">
      {/* 1. HERO SECTION */}
      <section className="relative h-[620px] bg-slate-900 text-white flex items-center overflow-hidden">
        {/* Artistic Background Image - Panoramic view of Fouta Djallon */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="Panorama de Labé" 
            className="w-full h-full object-cover opacity-35 transform scale-105 motion-safe:animate-[pulse_8s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/30 text-emerald-300 text-xs font-mono border border-emerald-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Portail Institutionnel Officiel de Guinée
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight leading-none text-white">
              Bienvenue sur le portail de la <span className="text-emerald-400">Commune Urbaine de Labé</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
              Découvrez nos services en ligne, suivez les grands projets de modernisation municipale et explorez le potentiel économique et touristique de la capitale du Fouta Djallon.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => onPageChange('services')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm tracking-wide shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => onPageChange('investir')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm tracking-wide border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Investir à Labé
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-800 font-sans tracking-tight">{stats.population}</span>
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block mt-1">Population</span>
          </div>
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-800 font-sans tracking-tight">{stats.superficie}</span>
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block mt-1">Superficie</span>
          </div>
          <div className="text-center p-4 border-r border-gray-100 last:border-0">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-800 font-sans tracking-tight">{stats.projetsActifs}</span>
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block mt-1">Projets en Cours</span>
          </div>
          <div className="text-center p-4">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-800 font-sans tracking-tight">{stats.budgetAnnuel}</span>
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block mt-1">Budget Municipal</span>
          </div>
        </div>
      </section>

      {/* 3. MESSAGE DU MAIRE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg mb-4 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center bg-emerald-800 text-white font-serif text-5xl font-bold">
                M
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-sans">Al Habib Bah</h3>
            <p className="text-xs font-bold text-emerald-700 font-mono uppercase tracking-widest">Maire de la Commune de Labé</p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 font-mono">Le Mot de l'Édile</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">"Bâtir ensemble la capitale verte du Fouta"</h2>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              Chers citoyens, partenaires civils et investisseurs, c'est avec un immense honneur que nous vous accueillons sur ce portail numérique officiel. Notre ambition pour la Commune Urbaine de Labé repose sur la transparence démocratique, le développement durable des infrastructures et la modernisation numérique des démarches citoyennes.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              Chaque jour, nos services municipaux s'activent pour paver nos rues, éclairer durablement nos quartiers, valoriser nos déchets et faciliter vos démarches civiles. Ensemble, relevons les défis de l'urbanisation harmonieuse tout en valorisant la richesse de notre artisanat et de notre culture Foutanienne.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => onPageChange('maire')}
                className="text-emerald-700 hover:text-emerald-800 font-bold text-sm inline-flex items-center gap-1 group"
              >
                Lire la biographie et la vision politique
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS SERVICES SHORTCUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Services en Ligne</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Simplifiez vos démarches administratives</h2>
          <p className="text-sm text-gray-500 font-light">Accédez directement aux fiches pratiques, téléchargez vos formulaires et préparez vos dossiers à distance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesShortcuts.map((serv, idx) => {
            const Icon = serv.icon;
            return (
              <button
                key={idx}
                onClick={() => onPageChange(serv.page)}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between h-48 group cursor-pointer"
              >
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-sans group-hover:text-emerald-700 transition-colors">{serv.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light leading-snug">{serv.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE MAP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveMap />
      </section>

      {/* 6. LATEST NEWS & PROJECTS PREVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Actualités */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">Actualités Récentes</h3>
            <button 
              onClick={() => onPageChange('actualites')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider"
            >
              Voir Tout
            </button>
          </div>

          <div className="space-y-4">
            {latestArticles.slice(0, 2).map((art) => (
              <div 
                key={art.id}
                onClick={() => onSelectArticle(art.id)}
                className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all cursor-pointer group"
              >
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full sm:w-28 sm:h-28 rounded-lg object-cover bg-gray-50 shrink-0" 
                />
                <div className="space-y-1.5 flex flex-col justify-center">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-700">{art.category} • {art.date}</span>
                  <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">{art.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2 font-light">{art.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projets */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">Projets de Modernisation</h3>
            <button 
              onClick={() => onPageChange('projets')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider"
            >
              Voir Tout
            </button>
          </div>

          <div className="space-y-4">
            {activeProjects.slice(0, 2).map((proj) => (
              <div 
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="bg-white p-5 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all cursor-pointer space-y-3"
              >
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-900 text-sm">{proj.title}</h4>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{proj.category}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Avancement</span>
                    <span className="font-semibold text-gray-700">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NATURE & GALERIE DE LABÉ */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Patrimoine Local</span>
            <h2 className="text-3xl font-extrabold text-slate-900">La "Suisse de l'Afrique" en images</h2>
            <p className="text-sm text-gray-500 font-light mt-2">Plongez dans les paysages uniques de Labé : cascades sauvages, collines embrumées et artisanat de renom.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden relative group h-64 shadow-sm bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80" 
                alt="Chutes de Saala" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-bold text-base">Les Chutes de Saala</h4>
                  <p className="text-xs text-emerald-300 font-mono">Cascade majestueuse du Fouta</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative group h-64 shadow-sm bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" 
                alt="Artisanat du cuir" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-bold text-base">Tanneries de Bowounloko</h4>
                  <p className="text-xs text-emerald-300 font-mono">Art traditionnel du cuir de Labé</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative group h-64 shadow-sm bg-gray-200 sm:col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
                alt="Montagnes embrumées" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <h4 className="text-white font-bold text-base">Montagnes du Fouta</h4>
                  <p className="text-xs text-emerald-300 font-mono">Belvédère de Labé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
