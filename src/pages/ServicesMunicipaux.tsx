import { useState, FormEvent } from 'react';
import { Search, Download, Calendar, Clock, BookOpen, CheckCircle, AlertCircle, FileText, Sparkles, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'Confirmé' | 'En attente';
}

interface ServicesMunicipauxProps {
  onAddAppointment: (appointment: Appointment) => void;
}

export default function ServicesMunicipaux({ onAddAppointment }: ServicesMunicipauxProps) {
  const [activeCategory, setActiveCategory] = useState<'etat-civil' | 'urbanisme'>('etat-civil');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Appointment Scheduler Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appDate, setAppDate] = useState('');
  const [appTime, setAppTime] = useState('');
  const [appServiceId, setAppServiceId] = useState('');
  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [downloadAlert, setDownloadAlert] = useState<string | null>(null);

  const filteredServices = SERVICES_DATA.filter((serv) => {
    const matchesCategory = serv.category === activeCategory;
    const matchesSearch = serv.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          serv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (formName: string) => {
    setDownloadAlert(`Téléchargement lancé : ${formName}`);
    setTimeout(() => {
      setDownloadAlert(null);
    }, 4000);
  };

  const handleSubmitAppointment = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !appDate || !appTime || !appServiceId) {
      alert('Veuillez remplir tous les champs du rendez-vous.');
      return;
    }

    const matchedServ = SERVICES_DATA.find(s => s.id === appServiceId);
    const newAppointment: Appointment = {
      id: `RDV-${Math.floor(100000 + Math.random() * 900000)}`,
      name: fullName,
      email,
      phone,
      serviceId: appServiceId,
      date: appDate,
      time: appTime,
      status: 'Confirmé'
    };

    onAddAppointment(newAppointment);

    setSuccessMessage(`Votre rendez-vous pour "${matchedServ?.title}" a été enregistré avec succès ! ID de réservation : ${newAppointment.id}`);
    
    // Clear fields
    setFullName('');
    setEmail('');
    setPhone('');
    setAppDate('');
    setAppTime('');
    setAppServiceId('');

    setTimeout(() => {
      setSuccessMessage(null);
    }, 8000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="services-view">
      
      {/* 1. HEADER & SEARCH */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Guichet Numérique Unique</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Démarches et Services Municipaux</h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Recherchez une procédure civile, téléchargez vos formulaires de demande et réservez des rendez-vous physiques de dépôt directement auprès des officiers de l'Hôtel de Ville.
        </p>
        
        {/* Search Input Box */}
        <div className="relative max-w-lg mx-auto pt-2">
          <input
            type="text"
            placeholder="Ex: Acte de naissance, Permis de construire..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* FLOATING SUCCESS/DOWNLOAD ALERTS */}
      {downloadAlert && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-bounce">
          <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
            <Download className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold font-mono">{downloadAlert}</p>
            <p className="text-[10px] text-gray-400">Dossier compressé officiel de la Mairie de Labé</p>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-900 text-white max-w-xl w-full px-6 py-5 rounded-xl shadow-2xl border border-emerald-800 space-y-2">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-emerald-300" />
            <span className="font-bold text-sm">Rendez-vous Confirmé de Niveau GovTech</span>
          </div>
          <p className="text-xs text-emerald-100 font-light leading-relaxed">{successMessage}</p>
          <p className="text-[10px] text-emerald-300 font-mono">Veuillez vous présenter à l'accueil muni d'une pièce d'identité 10 minutes avant votre horaire.</p>
        </div>
      )}

      {/* 2. SERVICES TABS & DIRECTORY GRID */}
      <div className="space-y-8">
        <div className="flex justify-center border-b border-gray-100">
          <div className="inline-flex gap-1 bg-gray-100 p-1.5 rounded-xl">
            <button
              onClick={() => { setActiveCategory('etat-civil'); setSelectedService(null); }}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'etat-civil' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              État Civil & Famille
            </button>
            <button
              onClick={() => { setActiveCategory('urbanisme'); setSelectedService(null); }}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'urbanisme' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              Urbanisme & Construction
            </button>
          </div>
        </div>

        {/* Dynamic List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column A: Procedure List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest mb-2">Fiches Pratiques</h3>
            {filteredServices.length > 0 ? (
              filteredServices.map((serv) => (
                <button
                  key={serv.id}
                  onClick={() => setSelectedService(serv)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex justify-between items-center group cursor-pointer ${
                    selectedService?.id === serv.id 
                      ? 'bg-emerald-50/50 border-emerald-400 shadow-sm' 
                      : 'bg-white border-gray-100 hover:border-emerald-100'
                  }`}
                >
                  <div>
                    <h4 className={`font-bold font-sans text-sm ${selectedService?.id === serv.id ? 'text-emerald-900' : 'text-slate-900 group-hover:text-emerald-700'}`}>{serv.title}</h4>
                    <p className="text-xs text-gray-400 font-light mt-1 line-clamp-1">{serv.description}</p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${selectedService?.id === serv.id ? 'text-emerald-700 translate-x-0.5' : 'text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-0.5'}`} />
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-gray-400 text-xs font-mono border border-dashed border-gray-200 rounded-xl">
                <AlertCircle className="w-5 h-5 mx-auto mb-2 text-gray-300" />
                Aucune démarche ne correspond à votre recherche.
              </div>
            )}
          </div>

          {/* Column B & C: Detailed Procedure view (or landing instruction if null) */}
          <div className="lg:col-span-2">
            {selectedService ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-mono uppercase">Fiche d'Information Officielle</span>
                    <span className="text-xs text-gray-400 font-mono">Réf: {selectedService.id.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedService.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light mt-2">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-gray-100 text-xs">
                  <div>
                    <span className="block text-gray-400 font-semibold uppercase tracking-wider mb-1">Coût Communal</span>
                    <span className="font-semibold text-slate-800">{selectedService.cost}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 font-semibold uppercase tracking-wider mb-1">Délai de Délivrance</span>
                    <span className="font-semibold text-slate-800">{selectedService.delay}</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Étapes de la Procédure</h4>
                  <ol className="space-y-2.5 text-xs text-gray-600 leading-relaxed font-light">
                    {selectedService.steps.map((st, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center font-bold text-emerald-700 shrink-0 font-mono">{idx + 1}</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Documents Required */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pièces à fournir (Dossier physique)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedService.documentsRequired.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-gray-100">
                        <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ details */}
                {selectedService.faqs && selectedService.faqs.length > 0 && (
                  <div className="border-t border-gray-100 pt-5 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-600" /> Questions Fréquentes (FAQ)
                    </h4>
                    <div className="space-y-3 text-xs">
                      {selectedService.faqs.map((f, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="font-bold text-slate-900">Q : {f.q}</p>
                          <p className="text-gray-500 font-light leading-relaxed">R : {f.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Download PDF button */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-xs text-gray-400">Formulaire mis à jour : Juin 2026</div>
                  <button
                    onClick={() => handleDownload(`Formulaire_${selectedService.title.replace(/\s+/g, '_')}_Labe.pdf`)}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-lg text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger le formulaire PDF
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-gray-200 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center space-y-3">
                <div className="p-4 bg-white rounded-full text-emerald-600 shadow-sm border border-emerald-50">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 font-sans">Sélectionnez une démarche à gauche</h3>
                <p className="text-xs text-gray-500 max-w-sm font-light">
                  Découvrez les conditions d'obtention de vos actes d'état civil officiels de la Mairie de Labé ou de vos demandes de permis d'urbanisme.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 3. INTERACTIVE APPOINTMENT SCHEDULER FORM */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-gray-100 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono uppercase">E-Guichet : Service de Réservation</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Prendre rendez-vous en Mairie</h2>
          <p className="text-xs text-gray-500 font-light">Évitez les files d'attente. Réservez une plage horaire dédiée auprès d'un officier d'état civil ou de l'ingénieur conseil de la Commune.</p>
        </div>

        <form onSubmit={handleSubmitAppointment} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Selector */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Service Demandé</label>
            <select
              value={appServiceId}
              onChange={(e) => setAppServiceId(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              required
            >
              <option value="">-- Sélectionnez la démarche --</option>
              {SERVICES_DATA.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          {/* Full name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Nom et Prénoms</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Ex: Amadou Diallo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Adresse Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Ex: amadou@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Téléphone (WhatsApp conseillé)</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="Ex: +224 620 00 00 00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Date Souhaitée</label>
            <div className="relative">
              <input
                type="date"
                value={appDate}
                onChange={(e) => setAppDate(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Time Slot */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Tranche Horaire d'Audience</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {['08:30', '09:30', '10:30', '11:30', '13:30', '14:30', '15:30'].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setAppTime(slot)}
                  className={`py-2 px-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                    appTime === slot 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                      : 'bg-slate-50 border-gray-200 text-gray-700 hover:bg-slate-100'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl py-3.5 text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-emerald-700/15"
            >
              Enregistrer ma réservation d'audience
              <CheckCircle className="w-4 h-4" />
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}
