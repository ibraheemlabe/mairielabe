import { Award, Target, BookOpen, Quote, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function LeMaire() {
  const priorities = [
    { title: "Sécurisation et Éclairage", desc: "Électrification solaire complète des artères routières pour dynamiser l'économie nocturne et éradiquer la criminalité." },
    { title: "Modernisation Administrative", desc: "Transformation numérique complète de l'état civil et transparence budgétaire avec publication des rapports d'audits municipaux." },
    { title: "Éducation et Jeunesse", desc: "Réhabilitation complète des écoles primaires communales et construction de bibliothèques et d'espaces de loisirs durables." },
    { title: "Préservation Écologique", desc: "Protection des sources de rivières et reboisement pour contrer la sécheresse pluviale dans les hauteurs du Fouta." },
  ];

  const cabinetMembers = [
    { role: "Maire de la Commune", name: "Al Habib Bah", desc: "Présidence du conseil communal, ordonnateur principal du budget municipal." },
    { role: "1er Adjoint au Maire", name: "Elhadj Thierno Amadou Diallo", desc: "Supervision des affaires administratives, de l'état civil et de la citoyenneté." },
    { role: "2ème Adjointe au Maire", name: "Madame Mariama Tata Bah", desc: "En charge des questions de genre, d'action sociale, de santé et d'éducation." },
    { role: "Secrétaire Général", name: "Monsieur Alpha Oumar Sow", desc: "Coordination des directions techniques municipales et mise en œuvre des décisions du conseil." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="maire-view">
      
      {/* SECTION 1: HEADER & PORTRAIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-emerald-600 shadow-xl bg-gray-100">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-700 text-white font-serif text-8xl font-bold">
              M
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-4 text-center">
              <span className="text-white font-bold block text-sm">Al Habib Bah</span>
              <span className="text-emerald-300 text-xs font-mono">Maire Élu de Labé</span>
            </div>
          </div>
          <span className="text-xs text-gray-400 mt-3 font-mono">Mandat Actuel : 2025 - 2030</span>
        </div>

        <div className="lg:col-span-8 space-y-5">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">L'Institution Municipale</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Le Message du Maire et sa Vision</h1>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Né et élevé au cœur de Labé, Al Habib Bah est un leader déterminé, diplômé en gestion administrative et passionné par le développement local. Élu pour porter la transformation de la Commune Urbaine, il axe ses actions sur la participation inclusive, la rigueur de gestion et le rayonnement culturel du Fouta Djallon.
          </p>
          <div className="border-l-4 border-emerald-600 pl-4 italic text-slate-600 text-sm py-2">
            "Notre commune regorge de forces vives, de terres fertiles et d'artisans au savoir-faire inimitable. Ma mission est de doter cette jeunesse et ces commerçants de structures dignes d'une grande ville d'Afrique de l'Ouest."
          </div>
        </div>
      </div>

      {/* SECTION 2: VISION ET PRIORITÉS */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-3">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-600" />
            Les Grandes Priorités du Mandat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {priorities.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-700 font-mono">0{idx + 1} //</span>
              <h3 className="font-bold text-slate-900">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: SPEECH TRANSCRIPT */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div className="p-3 bg-white rounded-xl w-fit shadow-sm text-emerald-700">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Discours d'Investiture</h3>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            Consultez les extraits du discours historique d'investiture présentant les lignes de développement communal et le budget participatif.
          </p>
          <button className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-100 shadow-sm cursor-pointer">
            <FileText className="w-4 h-4" />
            Télécharger le discours complet
          </button>
        </div>

        <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-gray-100 relative max-h-72 overflow-y-auto">
          <Quote className="absolute right-4 top-4 w-12 h-12 text-gray-100" />
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed font-light">
            <p className="font-semibold text-slate-900">Extrait de l'Allocution d'Orientation Budgétaire :</p>
            <p>
              « Honorables conseillers municipaux, chers concitoyens, l'exercice budgétaire de cette année ne sera pas une simple addition de dépenses et de recettes de routine. Nous inaugurons un modèle de gestion axé sur les résultats réels et quantifiables. Chaque franc guinéen perçu dans nos marchés, chaque taxe d'urbanisme versée doit trouver sa traduction concrète dans le pavage des routes de notre centre-ville, l'assainissement de nos caniveaux et la dotation de fournitures scolaires pour nos enfants. »
            </p>
            <p>
              « La décentralisation n'est pas un concept théorique, c'est une réalité de terrain. C'est pourquoi nous lançons également des comités de concertation citoyenne dans les 28 quartiers de la commune, afin que vous puissiez exprimer directement vos besoins prioritaires. C'est cela, la gouvernance de proximité que nous méritons à Labé. »
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: ORGANIGRAMME */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Cabinet de Monsieur le Maire</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cabinetMembers.map((mem, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-44">
              <div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{mem.role}</span>
                <h4 className="font-bold text-slate-950 mt-3 text-sm">{mem.name}</h4>
              </div>
              <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">{mem.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
