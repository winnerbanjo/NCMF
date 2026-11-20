import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Award, 
  Film, 
  Mail, 
  ShieldCheck, 
  Star 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';

export const LeaderModal: React.FC = () => {
  const { selectedLeader, setSelectedLeader } = useApp();

  if (!selectedLeader) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setSelectedLeader(null)}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Trim */}
        <div className="h-1.5 bg-slate-900" />

        {/* Close Button */}
        <button
          onClick={() => setSelectedLeader(null)}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-colors"
          aria-label="Close leader modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                {selectedLeader.image ? (
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-600">
                    <Film className="w-10 h-10 mb-1 opacity-60" />
                    <span className="font-display font-bold text-sm tracking-widest">NCMF</span>
                  </div>
                )}
              </div>
              <span className="absolute -bottom-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white shadow-sm uppercase tracking-wider">
                {selectedLeader.category}
              </span>
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                  {selectedLeader.role}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Executive
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                {selectedLeader.name}
              </h2>

              <p className="text-sm font-medium text-slate-700 leading-snug">
                {selectedLeader.tagline}
              </p>

              {/* Direct links if available */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs">
                {selectedLeader.email && (
                  <a
                    href={`mailto:${selectedLeader.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-700" />
                    {selectedLeader.email}
                  </a>
                )}
                {selectedLeader.socials?.instagram && (
                  <a
                    href={selectedLeader.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                    Instagram
                  </a>
                )}
                {selectedLeader.socials?.facebook && (
                  <a
                    href={selectedLeader.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Full Biography Paragraphs */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Star className="w-4 h-4 text-slate-700" />
              Official Biography
            </h3>
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              {selectedLeader.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Screen Credits & Productions */}
          {selectedLeader.credits && selectedLeader.credits.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Film className="w-4 h-4 text-slate-700" />
                Select Film, Stage & Screen Credits
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedLeader.credits.map((credit, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-800 font-medium"
                  >
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Honors & Awards */}
          {selectedLeader.awards && selectedLeader.awards.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-slate-700" />
                Honors & Industry Accolades
              </h3>
              <ul className="space-y-1.5">
                {selectedLeader.awards.map((award, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => setSelectedLeader(null)}
            className="px-5 py-2 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs"
          >
            Close Biography
          </button>
        </div>
      </div>
    </div>
  );
};
