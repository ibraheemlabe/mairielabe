import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import LeMaire from './pages/LeMaire';
import LaCommune from './pages/LaCommune';
import ServicesMunicipaux from './pages/ServicesMunicipaux';
import Actualites from './pages/Actualites';
import Projets from './pages/Projets';
import Tourisme from './pages/Tourisme';
import Investir from './pages/Investir';
import Annuaire from './pages/Annuaire';
import DocumentsPublics from './pages/DocumentsPublics';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { ARTICLES_DATA, PROJECTS_DATA, DIRECTORY_DATA, PUBLIC_DOCUMENTS, STATS_LABE } from './data';
import { Article, Project, DirectoryItem, PublicDocument } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('accueil');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const [articles, setArticles] = useState<Article[]>(ARTICLES_DATA);
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [directoryItems, setDirectoryItems] = useState<DirectoryItem[]>(DIRECTORY_DATA);
  const [publicDocuments, setPublicDocuments] = useState<PublicDocument[]>(PUBLIC_DOCUMENTS);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsAdmin(false);
    setSelectedArticleId(null);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (id: string | null) => {
    setSelectedArticleId(id);
    setCurrentPage('actualites');
    setIsAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (id: string | null) => {
    setSelectedProjectId(id);
    setCurrentPage('projets');
    setIsAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans" id="labe-portal-root">
      <Header 
        currentPage={isAdmin ? 'admin' : currentPage} 
        onPageChange={handlePageChange} 
        isAdmin={isAdmin} 
        onToggleAdmin={handleToggleAdmin} 
      />

      <main className="flex-grow">
        {isAdmin ? (
          <AdminDashboard 
            onAddArticle={(art) => setArticles([art, ...articles])}
            onAddProject={(proj) => setProjects([proj, ...projects])}
            onAddDirectoryItem={(item) => setDirectoryItems([item, ...directoryItems])}
            onAddDocument={(doc) => setPublicDocuments([doc, ...publicDocuments])}
            appointments={appointments}
            contacts={contacts}
          />
        ) : (
          <>
            {currentPage === 'accueil' && (
              <Accueil 
                onPageChange={handlePageChange}
                latestArticles={articles}
                activeProjects={projects}
                stats={STATS_LABE}
                onSelectArticle={handleSelectArticle}
                onSelectProject={handleSelectProject}
              />
            )}
            {currentPage === 'maire' && <LeMaire />}
            {currentPage === 'commune' && <LaCommune />}
            {currentPage === 'services' && (
              <ServicesMunicipaux 
                onAddAppointment={(app) => setAppointments([app, ...appointments])}
              />
            )}
            {currentPage === 'actualites' && (
              <Actualites 
                articles={articles}
                selectedArticleId={selectedArticleId}
                onSelectArticle={setSelectedArticleId}
              />
            )}
            {currentPage === 'projets' && (
              <Projets 
                projects={projects}
                selectedProjectId={selectedProjectId}
                onSelectProject={setSelectedProjectId}
              />
            )}
            {currentPage === 'tourisme' && <Tourisme />}
            {currentPage === 'investir' && <Investir />}
            {currentPage === 'annuaire' && <Annuaire items={directoryItems} />}
            {currentPage === 'documents' && <DocumentsPublics documents={publicDocuments} />}
            {currentPage === 'contact' && <Contact />}
          </>
        )}
      </main>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
