import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MemberProfile, CreativeDiscipline } from '../../types';
import { 
  Users, 
  Search, 
  Filter, 
  ShieldCheck, 
  Film, 
  MapPin, 
  Mail, 
  Lock, 
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const MemberDirectoryPage: React.FC = () => {
  const { members, setCurrentPage, showToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [contactingMember, setContactingMember] = useState<MemberProfile | null>(null);
  const [inquiryText, setInquiryText] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  // Filter only opted-in, approved profiles as mandated by PRD Section 4
  const publicMembers = members.filter(m => m.directoryOptIn);

  const filteredMembers = publicMembers.filter(m => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.credits.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDiscipline = selectedDiscipline === 'all' || m.discipline === selectedDiscipline;

    return matchesSearch && matchesDiscipline;
  });

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail.trim() || !inquiryText.trim()) return;

    showToast(`Professional casting / collaboration inquiry routed to ${contactingMember?.name} via NCMF Secretariat!`, 'success');
    setContactingMember(null);
    setInquiryText('');
    setSenderEmail('');
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Creative Talent Registry</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Official NCMF Member Directory
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Discover vetted actors, directors, screenwriters, cinematographers, and producers who have consented to appear publicly for casting calls, productions, and co-ventures.
        </p>
      </section>

      {/* Strict Privacy & Consent Governance Banner (PRD Requirement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1626] border border-amber-500/30 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300 block mb-0.5">Privacy & Consent Enforced:</span>
              <p className="text-slate-400 leading-relaxed">
                Only approved members who explicitly opted in are listed here. Private phone numbers and home addresses are never published. Members may opt out or update their public details anytime via the Secretariat.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('membership')}
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
          >
            Apply to Join Directory
          </button>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-6 rounded-2xl bg-[#0c121e] border border-white/10 flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members by name, production credits, or keywords..."
              className="w-full bg-[#141e30] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Discipline Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-amber-400 shrink-0" />
            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="w-full md:w-64 bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Creative Disciplines</option>
              <option value="Actor / Actress">Actors & Actresses</option>
              <option value="Film Director">Film Directors</option>
              <option value="Film Producer">Film Producers</option>
              <option value="Screenwriter / Playwright">Screenwriters</option>
              <option value="Cinematographer / DoP">Cinematographers</option>
              <option value="Film Editor">Film Editors</option>
              <option value="Media & Communications">Media & Communications</option>
            </select>
          </div>
        </div>
      </section>

      {/* Member Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredMembers.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#0c121e] border border-white/10 text-center space-y-3">
            <Users className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="font-display font-bold text-lg text-white">No members matched your search criteria</h3>
            <p className="text-xs text-slate-400">Try clearing the search query or changing the discipline filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl bg-[#0c121e] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Photo / Avatar */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#141e30] to-[#0c1322] text-amber-400">
                      <Film className="w-12 h-12 mb-2 opacity-60" />
                      <span className="font-display font-bold text-sm tracking-widest text-slate-400">NCMF VERIFIED</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-md uppercase tracking-wider">
                    {member.discipline}
                  </span>

                  <span className="absolute top-3 right-3 p-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" title="Verified Member">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-[10px] text-slate-500 font-mono">Member since {member.joinedYear}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{member.city}</span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed pt-1">
                      {member.bio}
                    </p>

                    {/* Credits */}
                    {member.credits && member.credits.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                          Notable Credits:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {member.credits.slice(0, 3).map((c, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-amber-200/90 font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connect Button */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setContactingMember(member)}
                      className="w-full py-2 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Contact for Casting / Collaboration
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact Inquiry Modal */}
      {contactingMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setContactingMember(null)}
        >
          <div 
            className="w-full max-w-lg rounded-3xl bg-[#0c121e] border border-amber-500/30 p-6 sm:p-8 space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  Secretariat Routing Service
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  Message to {contactingMember.name}
                </h3>
              </div>
              <button
                onClick={() => setContactingMember(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              To protect member privacy, your message is routed securely through the NCMF Secretariat and forwarded to {contactingMember.name}’s verified email.
            </p>

            <form onSubmit={handleSendInquiry} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200 block">
                  Your Name & Production Company <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Balogun (Mainframe Media)"
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200 block">
                  Your Contact Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. tunde@mainframemedia.ng"
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200 block">
                  Inquiry / Role Description <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder="Describe the production, proposed role, filming dates, and terms..."
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setContactingMember(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  Send Inquiry via Secretariat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
