import { useState } from 'react';
import { Menu, X, Search, Shield, Building2, BookOpen, Landmark, Briefcase, Compass, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export default function Header({ currentPage, onPageChange, isAdmin, onToggleAdmin }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'accueil', name: 'Accueil', icon: Landmark },
    { id: 'maire', name: 'Le Maire', icon: Shield },
    { id: 'commune', name: 'La Commune', icon: Building2 },
    { id: 'services', name: 'Services Municipaux', icon: BookOpen },
    { id: 'actualites', name: 'Actualités', icon: BookOpen },
    { id: 'projets', name: 'Projets', icon: Briefcase },
    { id: 'tourisme', name: 'Tourisme', icon: Compass },
    { id: 'investir', name: 'Investir', icon: Briefcase },
    { id: 'annuaire', name: 'Annuaire', icon: PhoneCall },
    { id: 'documents', name: 'Documents', icon: BookOpen },
    { id: 'contact', name: 'Contact', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm" id="main-header">
      {/* Guinean National Flag Colored Top Bar */}
      <div className="h-1.5 w-full grid grid-cols-3">
        <div className="bg-[#CE1126]"></div> {/* Red */}
        <div className="bg-[#FCD116]"></div> {/* Yellow */}
        <div className="bg-[#009460]"></div> {/* Green */}
      </div>

      {/* Sub-Header: National Motto and State Seal Label */}
      <div className="bg-slate-50 border-b border-gray-100 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-gray-500 font-mono flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          RÉPUBLIQUE DE GUINÉE • TRAVAIL - JUSTICE - SOLIDARITÉ
        </div>
        <div className="flex items-center gap-4">
          <span>Climat: Fouta Djallon ~ 22°C</span>
          <button 
            onClick={onToggleAdmin}
            className={`flex items-center gap-1 font-semibold transition-colors px-2 py-0.5 rounded text-xs ${
              isAdmin 
                ? 'bg-amber-100 text-amber-800' 
                : 'text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            {isAdmin ? 'Retour Portail Public' : 'Accès Administration'}
          </button>
        </div>
      </div>

      {/* Main Brand & Desktop Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <button 
            onClick={() => { onPageChange('accueil'); setIsOpen(false); }}
            className="flex items-center gap-3 focus:outline-none text-left"
          >
            {/* Elegant Emblem SVG Representing Labé (Mountain and Leaf) */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-700/10 shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2-2 4 4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">LABÉ</h1>
              <p className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Commune Urbaine de Labé</p>
            </div>
          </button>

          {/* Desktop Links (Mainly the core 5 menus, with a drop down or multi-level selector) */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const isSelected = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                    isSelected
                      ? 'bg-emerald-50 text-emerald-800 border-b-2 border-emerald-700'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger & Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-gray-100 bg-white"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => {
              const isSelected = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.name}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-gray-100 px-4">
              <button 
                onClick={() => {
                  onToggleAdmin();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <Shield className="w-4 h-4" />
                {isAdmin ? 'Retour Portail Public' : 'Accès Administration'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
