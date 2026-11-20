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
    { id: 'programmes', label: 'Events' },
    { id: 'projects', label: 'Projects' },
    { id: 'directory', label: 'Directory' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200 bg-white">
      {/* Top Official Micro-Bar (Crisp, Clean Institutional Light) */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-1.5 px-4 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Nollywood Creative Minds Forum
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              Professional Association · Est. 2015
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline italic text-slate-600">
              “Optimizing Potentials”
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <a 
              href="tel:08118050555" 
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-700" />
              <span className="font-mono text-slate-800 font-medium">08118050555</span>
            </a>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-3 h-3 text-slate-700" />
              <span>Okota, Lagos</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Clean Header (Apple/Google Style White Background) */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 p-1.5 shadow-sm">
                <img 
                  src="/images/branding/ncmf-logo.svg" 
                  alt="NCMF Logo" 
                  className="w-full h-full object-contain filter invert brightness-200" 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xl tracking-wider text-slate-900">
                    NCMF
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                    EST. 2015
                  </span>
                </div>
                <span className="text-xs font-medium tracking-tight text-slate-600 hidden sm:block">
                  Nollywood Creative Minds Forum
                </span>
                <span className="text-[10px] text-slate-600 italic tracking-wider">
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                      isActive
                        ? 'text-slate-950 font-semibold bg-slate-100'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-slate-900 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Button: Minimalist Solid Black */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('membership')}
                className="px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Apply for Membership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('membership')}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-900 text-white shadow-sm"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'text-slate-950 bg-slate-100 font-semibold border-l-4 border-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-900' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-2 border-t border-slate-200">
              <button
                onClick={() => handleNavClick('membership')}
                className="w-full py-3 rounded-xl font-bold text-center text-white bg-slate-900 hover:bg-black shadow-sm flex items-center justify-center gap-2"
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
