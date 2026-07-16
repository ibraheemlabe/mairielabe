import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, Send, CheckCircle, Info } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !msg) return;

    setSuccess(true);
    // Clear Form
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');

    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  const hours = [
    { title: "Bureaux de l'État Civil (Guichet Unique)", times: "Lundi au Vendredi : 08:00 - 16:30" },
    { title: "Cabinet de Monsieur le Maire (Audiences)", times: "Mardi & Jeudi : 10:00 - 13:00 (Sur rdv)" },
    { title: "Service Municipal de l'Urbanisme", times: "Lundi, Mercredi & Vendredi : 09:00 - 15:30" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="contact-view">
      
      {/* 1. TITLE SUMMARY */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Guichet de Relation Citoyenne</span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Nous Contacter</h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Une suggestion, une réclamation ou besoin d'assistance pour vos démarches en ligne ? Les agents de la Commune Urbaine de Labé sont à votre entière disposition.
        </p>
      </div>

      {/* 2. CONTACT DETAILS & HOURS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Coordinates & Hours */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-emerald-950 text-white p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="font-sans font-extrabold text-lg text-emerald-300">Coordonnées de l'Hôtel de Ville</h3>
            <p className="text-xs text-emerald-100 font-light leading-relaxed">
              Le bâtiment principal de l'Hôtel de Ville est situé au centre administratif de Labé, à proximité de la Grande Mosquée Karamoko Alpha.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Mairie de la Commune Urbaine de Labé<br />
                  Quartier Mosquée, Labé, Moyenne-Guinée<br />
                  République de Guinée
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secrétariat : +224 622 34 56 78</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@mairie-labe.gov.gn</span>
              </div>
            </div>
          </div>

          {/* Working hours card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" /> Horaires d'Ouverture Officiels
            </h4>
            <div className="space-y-3 text-xs">
              {hours.map((h, idx) => (
                <div key={idx} className="border-b border-gray-200/50 pb-2.5 last:border-0 last:pb-0">
                  <span className="font-bold text-slate-800 block">{h.title}</span>
                  <span className="text-gray-500 font-light">{h.times}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="font-extrabold text-slate-950 text-xl font-sans">Envoyer un Message Citoyen</h3>
          <p className="text-xs text-gray-500 font-light">
            Remplissez ce formulaire d'enregistrement. Votre demande sera transmise de manière sécurisée à l'adjoint communal concerné.
          </p>

          {success && (
            <div className="bg-emerald-50 text-emerald-900 border border-emerald-100 p-4 rounded-xl flex items-start gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold block">Message Transmis avec Succès</span>
                <p className="text-emerald-700/90 font-light mt-0.5">
                  Merci ! Votre message citoyen a été classifié et transmis au secrétariat général. Un accusé de réception vous a été envoyé par email.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Votre Nom et Prénom</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Thierno Diallo"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Adresse de Messagerie</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: thierno@example.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Objet de la Demande</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Demande d'information pour célébration civile"
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Votre Message ou Doléance</label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Exprimez votre besoin ou doléance de manière précise..."
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs h-32 focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg py-3.5 text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Envoyer ma doléance officielle
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* 3. SIMULATED MAP PREVIEW */}
      <section className="space-y-4">
        <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
          <Info className="w-5 h-5 text-emerald-600" />
          Plan d'Accès Officiel
        </h3>
        {/* visual styled map block representation */}
        <div className="w-full h-80 rounded-2xl border border-gray-100 overflow-hidden relative bg-emerald-50 flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
          <svg className="absolute inset-0 w-full h-full text-emerald-100/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,200 L 800,200" stroke="currentColor" strokeWidth="6" />
            <path d="M 400,0 L 400,400" stroke="currentColor" strokeWidth="6" />
            <circle cx="400" cy="200" r="12" fill="#10b981" />
            <circle cx="400" cy="200" r="24" fill="none" stroke="#10b981" strokeWidth="2" className="animate-ping" />
          </svg>
          <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center max-w-xs space-y-1">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Hôtel de Ville de Labé</span>
            <p className="text-[11px] text-gray-500 font-light">Face au rond-point central de la Mosquée</p>
          </div>
        </div>
      </section>

    </div>
  );
}
