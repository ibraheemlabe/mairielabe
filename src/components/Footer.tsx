import { Mail, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" id="main-footer">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Institutional Brand & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <div>
                <h3 className="text-white font-bold tracking-tight">Ville de Labé</h3>
                <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Mairie Urbaine</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Portail Officiel de la Commune Urbaine de Labé, République de Guinée. Au service des citoyens pour le développement, la transparence et la modernité.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CE1126]" title="Rouge"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FCD116]" title="Jaune"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#009460]" title="Vert"></span>
              <span className="text-xs text-slate-500 font-mono">Guinée-Fouta Djallon</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Raccourcis Utiles
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-emerald-400 transition-colors block text-left">
                  Démarches d'État Civil
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('projets')} className="hover:text-emerald-400 transition-colors block text-left">
                  Suivi des Projets Municipaux
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('investir')} className="hover:text-emerald-400 transition-colors block text-left">
                  Guide de l'Investisseur
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('documents')} className="hover:text-emerald-400 transition-colors block text-left">
                  Budgets et Délibérations
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('tourisme')} className="hover:text-emerald-400 transition-colors block text-left">
                  Visiter Labé & la Saala
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Emergency */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Nous Joindre
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>
                  Hôtel de Ville de Labé<br />
                  Quartier Mosquée, Labé<br />
                  République de Guinée
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+224 622 34 56 78</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contact@mairie-labe.gov.gn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Lun - Ven : 08:00 - 16:30</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Trust */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Lettre d'Information
            </h4>
            <p className="text-xs text-slate-400 mb-3.5 leading-relaxed">
              Inscrivez-vous pour recevoir les avis publics officiels, communiqués urgents et revues de presse de la Mairie.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full bg-slate-950 text-white border border-slate-800 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer"
              >
                S'abonner aux alertes
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-950 text-slate-500 py-6 text-xs border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © {currentYear} Commune Urbaine de Labé. Tous droits réservés. République de Guinée.
          </div>
          <div className="flex gap-6">
            <a href="#legal" className="hover:text-slate-300 transition-colors">Mentions Légales</a>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Charte de Confidentialité</a>
            <a href="#accessibility" className="hover:text-slate-300 transition-colors">Accessibilité (95%)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
