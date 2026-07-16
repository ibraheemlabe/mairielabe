import { useState, FormEvent } from 'react';
import { Briefcase, ArrowRight, Download, DollarSign, Calculator, Send, CheckCircle, Sprout, TrendingUp, Users } from 'lucide-react';
import { INVEST_SECTORS } from '../data';

export default function Investir() {
  const [budget, setBudget] = useState('100000');
  const [jobs, setJobs] = useState('10');
  const [incentiveResult, setIncentiveResult] = useState<any>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Investment Calculator Logic
  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    const budgetVal = parseFloat(budget) || 0;
    const jobsVal = parseInt(jobs) || 0;

    // Simulate GovTech incentives based on volume
    let exonYears = 3;
    let landDiscount = 20; // %
    let priorityClass = 'Standard';

    if (budgetVal >= 1000000 || jobsVal >= 100) {
      exonYears = 10;
      landDiscount = 75;
      priorityClass = 'Partenaire Stratégique de Classe A';
    } else if (budgetVal >= 500000 || jobsVal >= 50) {
      exonYears = 7;
      landDiscount = 50;
      priorityClass = 'Investissement Majeur de Classe B';
    } else if (budgetVal >= 250000 || jobsVal >= 25) {
      exonYears = 5;
      landDiscount = 35;
      priorityClass = 'Développement Local de Classe C';
    }

    setIncentiveResult({
      exonYears,
      landDiscount,
      priorityClass,
      estRent: (budgetVal * 0.18).toLocaleString('fr-FR', { maximumFractionDigits: 0 })
    });
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="investir-view">
      
      {/* 1. WHY INVEST SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Développement Économique</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Investir dans la Commune Urbaine de Labé</h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Bénéficiez d'une fiscalité locale avantageuse, d'une main d'œuvre dynamique et d'une position stratégique de carrefour régional reliant la Guinée, le Sénégal et le Mali.
        </p>
      </div>

      {/* 2. DYNAMIC SECTORS GRID */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-3">
          <h2 className="text-xl font-bold text-slate-900">Secteurs Porteurs d'Investissement</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INVEST_SECTORS.map((sec) => (
            <div key={sec.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-[450px] hover:border-emerald-200 transition-all">
              <div className="space-y-4">
                <div className="p-3.5 bg-emerald-50 rounded-xl w-fit text-emerald-700 font-bold">
                  {sec.id === 'inv-agri' ? <Sprout className="w-6 h-6" /> : sec.id === 'inv-elevage' ? <TrendingUp className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                </div>
                <h3 className="font-extrabold text-slate-950 text-lg leading-tight">{sec.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{sec.description}</p>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Atouts :</span>
                  {sec.potentials.slice(0, 2).map((pot, idx) => (
                    <div key={idx} className="text-xs text-gray-600 font-light flex items-start gap-1.5 leading-snug">
                      <span className="text-emerald-600 shrink-0">✓</span>
                      <span>{pot}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 space-y-1.5">
                <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wider block">Projet Recommandé par la Mairie :</span>
                <span className="text-xs font-semibold text-slate-800 line-clamp-1">{sec.projectsToFund[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SIMULATOR: INCENTIVE CALCULATOR */}
      <section className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <div className="p-3 bg-white rounded-xl text-emerald-700 w-fit shadow-xs">
            <Calculator className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-sans">Simulateur d'Incitations Fiscales</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-light">
            Déterminez le niveau d'avantages douaniers, d'exonérations d'impôts locaux et de réductions foncières octroyées par la commission d'aménagement de la Commune de Labé en fonction de votre budget d'investissement prévisionnel.
          </p>

          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Budget d'Investissement Prévisionnel ($ USD)</label>
              <div className="relative">
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none font-semibold"
                  min="50000"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-400 font-mono">USD</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Emplois Directs à Créer (Sous-Région)</label>
              <input
                type="number"
                value={jobs}
                onChange={(e) => setJobs(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                min="1"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg py-2.5 text-xs cursor-pointer shadow-sm"
            >
              Calculer mes incitations municipales
            </button>
          </form>
        </div>

        {/* Simulator Outputs */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-gray-100 flex flex-col justify-between">
          {incentiveResult ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[9px] font-bold font-mono uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Classe d'Éligibilité</span>
                <h4 className="text-lg font-bold text-slate-900">{incentiveResult.priorityClass}</h4>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block mb-1">Exonération d'Impôts Locaux</span>
                  <span className="font-extrabold text-emerald-800 text-base">{incentiveResult.exonYears} Ans</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block mb-1">Réduction Bail Foncier</span>
                  <span className="font-extrabold text-emerald-800 text-base">-{incentiveResult.landDiscount}%</span>
                </div>
              </div>

              <div className="border-t border-gray-50 pt-4 space-y-1">
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Retombées Économiques Estimées (Annuel)</span>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Grâce à cette implantation, vous pouvez projeter un rendement d'activité estimé à <span className="font-bold text-slate-900">{incentiveResult.estRent} USD</span> d'impact territorial sous-régional.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 font-light text-xs py-8">
              <Briefcase className="w-10 h-10 text-gray-200 mb-2" />
              Saisissez votre budget d'investissement et cliquez sur Calculer pour voir le barème officiel des privilèges fiscaux du Code des Investissements de Labé.
            </div>
          )}

          <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <span>Barème actualisé : Juillet 2026</span>
            <span>Code des Investissements - Art. 14</span>
          </div>
        </div>
      </section>

      {/* 4. GUIDE & CONTACT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-emerald-950 text-white p-8 rounded-3xl">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-sans">Guide de l'Investisseur Foutanien</h3>
          <p className="text-xs text-emerald-200 leading-relaxed font-light">
            Téléchargez le document officiel exhaustif rédigé par le secrétariat général de la commune. Retrouvez toutes les lois foncières, le barème des taxes professionnelles et la cartographie des parcelles industrielles réservées à Hafia.
          </p>
          <button className="flex items-center gap-2 text-xs font-bold bg-white text-emerald-950 px-5 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg cursor-pointer">
            <Download className="w-4 h-4" />
            Télécharger le Guide Officiel (PDF, 4.8 Mo)
          </button>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
          <h4 className="font-bold uppercase tracking-wider text-emerald-300">Bureau d'Accueil des Investisseurs</h4>
          {formSubmitted ? (
            <div className="bg-emerald-600 text-white p-4 rounded-xl flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Demande d'audience enregistrée. Un conseiller vous contactera sous 48 heures.</span>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Votre nom ou entreprise"
                className="w-full bg-slate-900 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full bg-slate-900 border border-white/10 text-white rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <textarea
                placeholder="Décrivez brièvement votre projet..."
                className="w-full bg-slate-900 border border-white/10 text-white rounded-lg px-3 py-2 text-xs h-20 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer w-full flex items-center justify-center gap-2"
              >
                Prendre contact avec la Mairie
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
