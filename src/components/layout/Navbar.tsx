import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PageId } from '../../types';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, setCurrentPage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'membership', label: 'Membership' },
    { id: 'programmes', label: 'Programmes & Events' },
    { id: 'projects', label: 'Projects & Gallery' },
    { id: 'directory', label: 'Member Directory' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Official Micro-Bar (Clean, Executive, No Admin CMS) */}
      <div className="bg-[#05080e] border-b border-white/5 py-1.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Nollywood Creative Minds Forum
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              CAC Registered · Est. 2015
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline italic text-amber-200/70">
              “Optimizing Potentials”
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href="tel:08118050555" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-mono">08118050555</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Okota, Lagos</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <nav className="backdrop-blur-xl bg-[#090e17]/95 border-b border-amber-500/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1b263b] to-[#0c1322] border border-amber-500/30 p-1.5 shadow-lg group-hover:border-amber-400 transition-all duration-300">
                <img 
                  src="/images/branding/ncmf-logo.svg" 
                  alt="NCMF Logo" 
                  className="w-full h-full object-contain filter drop-shadow" 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                    NCMF
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 font-semibold border border-amber-500/20">
                    EST. 2015
                  </span>
                </div>
                <span className="text-xs font-medium tracking-tight text-slate-300 group-hover:text-amber-300 transition-colors hidden sm:block">
                  Nollywood Creative Minds Forum
                </span>
                <span className="text-[10px] text-amber-400/70 italic tracking-wider">
                  Optimizing Potentials
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-amber-300 bg-amber-500/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Button: Clean Apply For Membership */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('membership')}
                className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 transition-all duration-500 group-hover:scale-105" />
                <div className="relative px-5 py-2.5 rounded-[11px] bg-[#0b111c] transition-all duration-200 group-hover:bg-opacity-0">
                  <span className="flex items-center gap-2 text-sm font-semibold text-amber-300 group-hover:text-black">
                    Apply for Membership
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:text-black group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('membership')}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-md"
              >
                Join
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#090e17] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/15 font-semibold border-l-4 border-amber-500'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('membership')}
                className="w-full py-3 rounded-xl font-bold text-center text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-lg flex items-center justify-center gap-2"
              >
                Apply for Membership (₦20,000)
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
