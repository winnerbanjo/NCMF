import React from 'react';
import { useApp } from '../../context/AppContext';
import { PageId } from '../../types';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Award, 
  Film, 
  ChevronRight,
  Compass,
  Lock
} from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const { setCurrentPage, setIsWhatsAppOpen } = useApp();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-slate-900 p-1.5 flex items-center justify-center shadow-xs">
                <img 
                  src="/images/branding/ncmf-logo.svg" 
                  alt="NCMF Official Crest" 
                  className="w-full h-full object-contain filter invert brightness-200"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl tracking-wider text-slate-950">
                  NCMF
                </span>
                <p className="text-xs text-slate-500 font-medium">Nollywood Creative Minds Forum</p>
              </div>
            </div>

            <p className="text-xs text-slate-700 font-semibold italic tracking-wide">
              “Optimizing Potentials”
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Established in 2015, the Nollywood Creative Minds Forum (NCMF) is a premier professional association of Nigerian film practitioners dedicated to promoting capacity building, ethical standards, collaborative productions, and comprehensive industry welfare.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
                CAC Registered (RC: 2015)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Film className="w-3.5 h-3.5" />
                10+ Years in Nollywood
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> About the Forum
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('leadership')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Leadership & Board
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('membership')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Membership & Fees
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programmes')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Programmes & Events
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Projects & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('directory')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Member Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-slate-950 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" /> Official Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Initiatives */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Flagship Pillars
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="font-semibold text-slate-950 block mb-0.5">In Pursuit of Better Summit</span>
                <p className="text-slate-500">Annual national convention and creative merit awards hosted at Four Points by Sheraton, Lagos.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="font-semibold text-slate-950 block mb-0.5">Hit Feature & Short Productions</span>
                <p className="text-slate-500">From the hit film <em>Perfect for Divorce</em> on DStv to festival-winning shorts like <em>Bottled Up</em>.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="font-semibold text-slate-950 block mb-0.5">Film Industry Welfare Package</span>
                <p className="text-slate-500">Emergency support, safe set protocols, medical access, and legal advocacy for creative practitioners.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Verified Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              Secretariat Contact
            </h4>
            
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <span>14 Anite Crescent, Okota, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                <a href="tel:08118050555" className="hover:text-slate-950 font-mono text-sm font-semibold">
                  08118050555
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                <a href="mailto:nollywoodcreativemindsforum18@gmail.com" className="hover:text-slate-950 break-all font-mono">
                  nollywoodcreativemindsforum18@gmail.com
                </a>
              </li>
            </ul>

            {/* Social channels: Priority Instagram & WhatsApp */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Official Digital Channels
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsWhatsAppOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all text-xs font-semibold"
                  title="WhatsApp Live Chat Support"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  WhatsApp Live
                </button>

                <a
                  href="https://instagram.com/nollywoodcreativemindsforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 transition-all text-xs font-semibold shadow-2xs"
                  title="Official Instagram (Client Priority Social Platform)"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Nollywood Creative Minds Forum (NCMF). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">CAC Registered RC: 2015</span>
            <span className="text-slate-300">•</span>
            <button onClick={() => handleNav('membership')} className="hover:text-slate-900">
              Apply Online
            </button>
            <span className="text-slate-300">•</span>
            <button onClick={() => handleNav('directory')} className="hover:text-slate-900">
              Directory Policy
            </button>
            <span className="text-slate-300">•</span>
            <button onClick={() => handleNav('admin')} className="text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors">
              <Lock className="w-3 h-3" />
              Secretariat Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
