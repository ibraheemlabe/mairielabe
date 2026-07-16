import { Compass, Landmark, Users, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function LaCommune() {
  const directions = [
    { title: "Direction de l'État Civil et des Affaires Générales", lead: "M. Thierno Amadou Diallo", desc: "Gestion des actes de naissance, mariage, décès, légalisations, et coordination des bureaux administratifs de quartier." },
    { title: "Direction Communale de l'Urbanisme, Habitat et Voirie", lead: "Ing. Ousmane Condé", desc: "Planification territoriale, instruction des permis de construire, aménagement routier et lutte contre l'occupation anarchique." },
    { title: "Service Municipal de l'Assainissement et Environnement", lead: "Mme Hadja Fatoumata Diallo", desc: "Collecte, tri, et valorisation des ordures ménagères, reboisement urbain et protection du climat." },
    { title: "Direction Administrative et Financière (DAF)", lead: "M. Mamadou Saliou Sow", desc: "Planification budgétaire, perception des taxes communales, ordonnancement des dépenses et rapports comptables." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="commune-view">
      
      {/* SECTION 1: INTRODUCTION GEOGRAPHIQUE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Territoire & Identité</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">À la Découverte de Labé</h1>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Chef-lieu de la Moyenne-Guinée, la Commune Urbaine de Labé est bâtie sur un haut plateau du massif montagneux du Fouta Djallon, culminant à environ 1 020 mètres d'altitude. Son climat frais, caractérisé par une saison sèche vivifiante de novembre à avril et une saison pluvieuse de mai à octobre, en fait l'une des régions les plus agréables à vivre d'Afrique de l'Ouest.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-light">
            Carrefour géographique incontournable, elle relie la Guinée côtière et forestière aux pays limitrophes, notamment le Sénégal et le Mali. C'est un pôle de transit commercial intense et le foyer spirituel de la culture peule du Fouta.
          </p>
        </div>

        <div className="lg:col-span-5 bg-emerald-950 text-white p-6 rounded-2xl space-y-4">
          <h3 className="font-sans font-bold text-lg text-emerald-300">Fiche d'Identité Territoriale</h3>
          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex justify-between border-b border-emerald-800/50 pb-2">
              <span className="text-emerald-400">Statut :</span>
              <span>Capitale Régionale de la Moyenne-Guinée</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/50 pb-2">
              <span className="text-emerald-400">Coordonnées :</span>
              <span>11° 19′ Nord, 12° 17′ Ouest</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/50 pb-2">
              <span className="text-emerald-400">Climat :</span>
              <span>Tropical de montagne (~18°C à ~28°C)</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/50 pb-2">
              <span className="text-emerald-400">Quartiers :</span>
              <span>28 quartiers administratifs urbains</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-400">Langues de travail :</span>
              <span>Français (officiel), Poular (national)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: RICHE HISTOIRE */}
      <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 space-y-6">
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
          <Clock className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-900">Fondation et Histoire Sacrée</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-gray-600 leading-relaxed font-light">
          <div className="lg:col-span-6 space-y-4">
            <p>
              La ville de Labé a été fondée vers <span className="font-semibold text-slate-900">1755</span> par l'érudit musulman <span className="font-semibold text-slate-900">Karamoko Alpha mo Labé</span>, l'une des figures majeures de la révolution théocratique peule qui a donné naissance à l'État confédéral théocratique du Fouta Djallon.
            </p>
            <p>
              À l'origine, le site fut choisi pour sa tranquillité spirituelle, son abondance en eau pure et ses collines protectrices, idéales pour l'étude sacrée et la prière. Karamoko Alpha y construisit la première mosquée historique, jetant les bases d'un rayonnement académique et religieux qui traversera les frontières de l'Afrique de l'Ouest.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <p>
              Labé devint rapidement la capitale du puissant <span className="font-bold text-slate-900">Diwal de Labé</span>, la plus vaste et la plus influente des neuf provinces de la confédération du Fouta Djallon. Son influence militaire et commerciale permit la structuration de routes caravanières majeures reliant la côte atlantique au fleuve Niger.
            </p>
            <p>
              Aujourd'hui, cet héritage historique se reflète dans la fierté culturelle de ses citoyens, l'architecture de ses mosquées et le maintien de traditions académiques islamiques et d'un artisanat d'une finesse reconnue dans toute l'Afrique.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: DIRECTIONS MUNICIPALES */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">Organisation administrative de la Mairie</h2>
          <p className="text-xs text-gray-400 mt-1">Les directions opérationnelles au service de l'intérêt général.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directions.map((dir, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-mono">Direction Communale</span>
              <h3 className="font-bold text-slate-950 font-sans text-sm leading-tight">{dir.title}</h3>
              <div className="text-xs text-gray-500">
                <span className="font-semibold text-slate-800">Directeur :</span> {dir.lead}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{dir.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
