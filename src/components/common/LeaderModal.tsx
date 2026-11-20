import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Award, 
  Film, 
  Mail, 
  ExternalLink,
  ShieldCheck,
  Star
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';

export const LeaderModal: React.FC = () => {
  const { selectedLeader, setSelectedLeader } = useApp();

  if (!selectedLeader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c121e] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Gradient Trim */}
        <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />

        {/* Close Button */}
        <button
          onClick={() => setSelectedLeader(null)}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors"
          aria-label="Close leader modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl bg-slate-900">
                {selectedLeader.image ? (
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#141e30] to-[#0a0f18] text-amber-400">
                    <Film className="w-10 h-10 mb-1 opacity-70" />
                    <span className="font-display font-bold text-sm tracking-widest">NCMF</span>
                  </div>
                )}
              </div>
              <span className="absolute -bottom-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-md uppercase tracking-wider">
                {selectedLeader.category}
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {selectedLeader.role}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Executive
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {selectedLeader.name}
              </h2>

              <p className="text-sm font-medium text-amber-300/90 leading-snug">
                {selectedLeader.tagline}
              </p>

              {/* Direct links if available */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs">
                {selectedLeader.email && (
                  <a
                    href={`mailto:${selectedLeader.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    {selectedLeader.email}
                  </a>
                )}
                {selectedLeader.socials?.instagram && (
                  <a
                    href={selectedLeader.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/20 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    Instagram
                  </a>
                )}
                {selectedLeader.socials?.facebook && (
                  <a
                    href={selectedLeader.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-blue-400" />
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Full Biography Paragraphs */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Official Biography
            </h3>
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              {selectedLeader.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Screen Credits & Productions */}
          {selectedLeader.credits && selectedLeader.credits.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Film className="w-4 h-4" />
                Select Film, Stage & Screen Credits
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedLeader.credits.map((credit, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#141e30] border border-amber-500/20 text-xs text-amber-200 font-medium"
                  >
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Honors & Awards */}
          {selectedLeader.awards && selectedLeader.awards.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Honors & Industry Accolades
              </h3>
              <ul className="space-y-1.5">
                {selectedLeader.awards.map((award, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080d16] border-t border-white/10 flex justify-end">
          <button
            onClick={() => setSelectedLeader(null)}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            Close Biography
          </button>
        </div>
      </div>
    </div>
  );
};
