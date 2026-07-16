import { useState, FormEvent } from 'react';
import { BookOpen, Briefcase, PhoneCall, FileText, Users, Settings, Plus, TrendingUp, CheckCircle, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Article, Project, DirectoryItem, PublicDocument } from '../types';

interface AdminDashboardProps {
  onAddArticle: (art: Article) => void;
  onAddProject: (proj: Project) => void;
  onAddDirectoryItem: (item: DirectoryItem) => void;
  onAddDocument: (doc: PublicDocument) => void;
  appointments: any[];
  contacts: any[];
}

export default function AdminDashboard({ 
  onAddArticle, 
  onAddProject, 
  onAddDirectoryItem, 
  onAddDocument,
  appointments,
  contacts
}: AdminDashboardProps) {
  
  const [activeTab, setActiveTab] = useState<'stats' | 'news' | 'projects' | 'directory' | 'documents' | 'users'>('stats');

  // FORM STATES
  // News form
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCat, setNewsCat] = useState<'Communique' | 'Evenement' | 'Projet' | 'Sante' | 'Culture'>('Communique');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsImg, setNewsImg] = useState('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80');

  // Project form
  const [projTitle, setProjTitle] = useState('');
  const [projCat, setProjCat] = useState<'Infrastructure' | 'Environnement' | 'Éducation' | 'Économie'>('Infrastructure');
  const [projBudget, setProjBudget] = useState('1.5 Milliards GNF');
  const [projProg, setProjProg] = useState('50');
  const [projDesc, setProjDesc] = useState('');

  // Directory form
  const [dirName, setDirName] = useState('');
  const [dirCat, setDirCat] = useState<'Entreprise' | 'Pharmacie' | 'Hôtel' | 'Restaurant' | 'Banque' | 'École' | 'Santé'>('Entreprise');
  const [dirAddr, setDirAddr] = useState('');
  const [dirPhone, setDirPhone] = useState('');

  // Document form
  const [docTitle, setDocTitle] = useState('');
  const [docCat, setDocCat] = useState<'Budget' | 'Rapport' | 'Décision' | "Appel d'Offres">('Budget');
  const [docRef, setDocRef] = useState('');

  // Notification success
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 5000);
  };

  const submitNews = (e: FormEvent) => {
    e.preventDefault();
    const newArt: Article = {
      id: `art-custom-${Date.now()}`,
      title: newsTitle,
      category: newsCat,
      summary: newsSummary,
      content: newsContent,
      date: 'Aujourd\'hui',
      image: newsImg,
      author: 'Secrétariat Général',
      readTime: '3 min',
      tags: ['Admin', 'Labé']
    };
    onAddArticle(newArt);
    triggerSuccess(`Actualité "${newsTitle}" publiée live avec succès !`);
    setNewsTitle('');
    setNewsSummary('');
    setNewsContent('');
  };

  const submitProject = (e: FormEvent) => {
    e.preventDefault();
    const newProj: Project = {
      id: `proj-custom-${Date.now()}`,
      title: projTitle,
      category: projCat,
      budget: projBudget,
      progress: parseInt(projProg) || 0,
      status: 'En cours',
      description: projDesc,
      objectives: ['Objectif général de modernisation communale'],
      achievements: ['Lancement initial effectué'],
      startDate: 'Juillet 2026',
      endDate: 'Décembre 2026',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80',
      gallery: []
    };
    onAddProject(newProj);
    triggerSuccess(`Projet municipal "${projTitle}" enregistré live !`);
    setProjTitle('');
    setProjDesc('');
  };

  const submitDirectory = (e: FormEvent) => {
    e.preventDefault();
    const newDir: DirectoryItem = {
      id: `dir-custom-${Date.now()}`,
      name: dirName,
      category: dirCat,
      address: dirAddr,
      phone: dirPhone,
      status: 'Ouvert',
      rating: 5.0
    };
    onAddDirectoryItem(newDir);
    triggerSuccess(`Établissement "${dirName}" ajouté à l'annuaire public !`);
    setDirName('');
    setDirAddr('');
    setDirPhone('');
  };

  const submitDocument = (e: FormEvent) => {
    e.preventDefault();
    const newDoc: PublicDocument = {
      id: `doc-custom-${Date.now()}`,
      title: docTitle,
      category: docCat,
      date: 'Aujourd\'hui',
      size: '1.4 Mo',
      type: 'PDF',
      reference: docRef || 'ARR-2026-X'
    };
    onAddDocument(newDoc);
    triggerSuccess(`Document officiel "${docTitle}" téléversé live !`);
    setDocTitle('');
    setDocRef('');
  };

  const adminUsers = [
    { name: "Al Habib Bah", role: "Maire / Administrateur Principal", status: "Actif" },
    { name: "Alpha Oumar Sow", role: "Secrétaire Général / Modérateur", status: "Actif" },
    { name: "Thierno Amadou Diallo", role: "Adjoint Civil / Éditeur d'Actes", status: "Actif" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="admin-dashboard-view">
      
      {/* 1. BRAND HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
        <div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest font-mono">Système de Gestion de Contenu (CMS)</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Console d'Administration Municipale</h1>
        </div>
        <div className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-100 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Session Connectée : Cabinet du Maire
        </div>
      </div>

      {/* FLOAT NOTIFICATION SUCCESS */}
      {successMsg && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white max-w-lg w-full px-5 py-4 rounded-xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-bounce">
          <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold font-mono text-emerald-400">Action CMS Réussie</p>
            <p className="text-[11px] text-gray-300 leading-snug">{successMsg}</p>
          </div>
        </div>
      )}

      {/* 2. ADMINISTRATIVE TABS NAVIGATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 bg-slate-50 p-4 rounded-2xl border border-gray-100 space-y-1.5 h-fit">
          <button
            onClick={() => setActiveTab('stats')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'stats' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Tableau de Bord / Stats
          </button>
          
          <button
            onClick={() => setActiveTab('news')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'news' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Publier une actualité
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'projects' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Ajouter un projet
          </button>

          <button
            onClick={() => setActiveTab('directory')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'directory' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Ajouter à l'annuaire
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'documents' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Téléverser un document
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'users' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            Gérer les utilisateurs
          </button>
        </div>

        {/* Content Panel Area */}
        <div className="lg:col-span-9">
          
          {/* TAB 1: STATISTICS & LOGS */}
          {activeTab === 'stats' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Demandes d'audiences enregistrées</span>
                  <p className="text-3xl font-extrabold text-slate-900 font-sans">{appointments.length + 4}</p>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">✓ Tous les dossiers approuvés</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Messages citoyens reçus</span>
                  <p className="text-3xl font-extrabold text-slate-900 font-sans">{contacts.length + 8}</p>
                  <span className="text-[10px] text-amber-600 font-mono font-bold flex items-center gap-1">⚠ 2 messages en attente de réponse</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Taux de réponse numérique</span>
                  <p className="text-3xl font-extrabold text-slate-900 font-sans">98.5%</p>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold">Excellent • Niveau international</span>
                </div>
              </div>

              {/* appointments log queue list */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
                <h3 className="font-extrabold text-slate-950 text-base">Rendez-vous d'Audiences Récentes (Live)</h3>
                <div className="space-y-2 text-xs">
                  {appointments.length > 0 ? (
                    appointments.map((app, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex flex-wrap justify-between items-center gap-3">
                        <div className="space-y-1">
                          <span className="font-bold text-slate-900">{app.name} ({app.phone})</span>
                          <p className="text-gray-500 font-light text-[10px]">Démarche choisie : {app.serviceId} | Email : {app.email}</p>
                        </div>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-[10px] text-gray-400">Date: {app.date} • {app.time}</span>
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">{app.status}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-6 text-gray-400 leading-relaxed font-light">
                      Aucune nouvelle réservation d'audience effectuée par un citoyen pour le moment. Allez sur la page des "Services municipaux" pour en simuler une !
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ADD NEWS */}
          {activeTab === 'news' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6 animate-fadeIn">
              <h3 className="font-bold text-slate-950 text-lg">Publier un communiqué officiel ou actualité</h3>
              
              <form onSubmit={submitNews} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Titre de l'Article</label>
                    <input
                      type="text"
                      value={newsTitle}
                      onChange={(e) => setNewsTitle(e.target.value)}
                      placeholder="Ex: Inauguration de la nouvelle école"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Catégorie</label>
                    <select
                      value={newsCat}
                      onChange={(e: any) => setNewsCat(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    >
                      <option value="Communique">Communiqué Officiel</option>
                      <option value="Evenement">Événement</option>
                      <option value="Projet">Suivi Projet</option>
                      <option value="Sante">Santé</option>
                      <option value="Culture">Culture</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Résumé de l'Article (Sous-titre)</label>
                  <input
                    type="text"
                    value={newsSummary}
                    onChange={(e) => setNewsSummary(e.target.value)}
                    placeholder="Brève description d'introduction..."
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Contenu Principal de l'Article</label>
                  <textarea
                    value={newsContent}
                    onChange={(e) => setNewsContent(e.target.value)}
                    placeholder="Écrivez le texte intégral du communiqué..."
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 h-36 focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-5 py-3 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Publier live sur le portail
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: ADD PROJECT */}
          {activeTab === 'projects' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6 animate-fadeIn">
              <h3 className="font-bold text-slate-950 text-lg">Enregistrer un projet de développement local</h3>
              
              <form onSubmit={submitProject} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Intitulé du Projet</label>
                    <input
                      type="text"
                      value={projTitle}
                      onChange={(e) => setProjTitle(e.target.value)}
                      placeholder="Ex: Bitumage de la route nationale"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Catégorie de Chantier</label>
                    <select
                      value={projCat}
                      onChange={(e: any) => setProjCat(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    >
                      <option value="Infrastructure">Infrastructure & Voirie</option>
                      <option value="Environnement">Environnement & Climat</option>
                      <option value="Éducation">Éducation & Jeunesse</option>
                      <option value="Économie">Développement Économique</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Budget prévisionnel (GNF ou USD)</label>
                    <input
                      type="text"
                      value={projBudget}
                      onChange={(e) => setProjBudget(e.target.value)}
                      placeholder="Ex: 2.4 Milliards GNF"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Taux d'exécution initial (%)</label>
                    <input
                      type="number"
                      value={projProg}
                      onChange={(e) => setProjProg(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      min="0"
                      max="100"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Description Générale</label>
                  <textarea
                    value={projDesc}
                    onChange={(e) => setProjDesc(e.target.value)}
                    placeholder="Écrivez les caractéristiques majeures du projet..."
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 h-24 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-5 py-3 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Enregistrer et publier live
                </button>
              </form>
            </div>
          )}

          {/* TAB 4: ADD DIRECTORY */}
          {activeTab === 'directory' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6 animate-fadeIn">
              <h3 className="font-bold text-slate-950 text-lg">Inscrire un établissement ou commerce à l'annuaire</h3>
              
              <form onSubmit={submitDirectory} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Nom commercial de l'établissement</label>
                    <input
                      type="text"
                      value={dirName}
                      onChange={(e) => setDirName(e.target.value)}
                      placeholder="Ex: Pharmacie Saala"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Type d'Activité</label>
                    <select
                      value={dirCat}
                      onChange={(e: any) => setDirCat(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    >
                      <option value="Entreprise">Entreprise locale</option>
                      <option value="Pharmacie">Pharmacie</option>
                      <option value="Hôtel">Hôtel</option>
                      <option value="Restaurant">Restaurant / Gastronomie</option>
                      <option value="Banque">Banque / Service financier</option>
                      <option value="École">Établissement scolaire / Univ</option>
                      <option value="Santé">Centre de santé / Clinique</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Adresse Physique (Quartier)</label>
                    <input
                      type="text"
                      value={dirAddr}
                      onChange={(e) => setDirAddr(e.target.value)}
                      placeholder="Ex: Quartier Kouroula, face au stade"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Numéro de téléphone</label>
                    <input
                      type="text"
                      value={dirPhone}
                      onChange={(e) => setDirPhone(e.target.value)}
                      placeholder="Ex: +224 620 12 34 56"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-5 py-3 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter à l'annuaire live
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: TELEVERSER DOC */}
          {activeTab === 'documents' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6 animate-fadeIn">
              <h3 className="font-bold text-slate-950 text-lg">Téléverser un document ou arrêté officiel</h3>
              
              <form onSubmit={submitDocument} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Intitulé du document</label>
                    <input
                      type="text"
                      value={docTitle}
                      onChange={(e) => setDocTitle(e.target.value)}
                      placeholder="Ex: Réglementation d'urbanisme de Labé"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Catégorie d'Archive</label>
                    <select
                      value={docCat}
                      onChange={(e: any) => setDocCat(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      required
                    >
                      <option value="Budget">Budget Communal</option>
                      <option value="Rapport">Rapport d'activité</option>
                      <option value="Décision">Arrêté / Décision municipale</option>
                      <option value="Appel d'Offres">Avis d'Appel d'Offre</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-700 uppercase block tracking-wider">Référence d'Enregistrement Légal</label>
                  <input
                    type="text"
                    value={docRef}
                    onChange={(e) => setDocRef(e.target.value)}
                    placeholder="Ex: ARR/2026/102-CBL"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-5 py-3 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Mettre en ligne live
                </button>
              </form>
            </div>
          )}

          {/* TAB 6: USERS LIST */}
          {activeTab === 'users' && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs space-y-6 animate-fadeIn">
              <h3 className="font-bold text-slate-950 text-lg">Gestionnaires et Rôles Autorisés</h3>
              <div className="space-y-3">
                {adminUsers.map((usr, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-950 block">{usr.name}</span>
                      <span className="text-gray-400 font-light mt-0.5 block">{usr.role}</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-bold font-mono">
                      {usr.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
