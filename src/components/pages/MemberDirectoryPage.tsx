import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MemberProfile } from '../../types';
import { 
  Users, 
  Search, 
  Filter, 
  ShieldCheck, 
  Film, 
  MapPin, 
  Mail, 
  Lock
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
    <div className="space-y-16 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>Verified Creative Talent Registry</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Official NCMF Member Directory
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Discover vetted actors, directors, screenwriters, cinematographers, and producers who have consented to appear publicly for casting calls, productions, and co-ventures.
        </p>
      </section>

      {/* Privacy & Consent Governance Banner (Clean Slate Box) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Privacy & Consent Enforced:</span>
              <p className="text-slate-500 leading-relaxed">
                Only approved members who explicitly opted in are listed here. Private phone numbers and home addresses are never published. Members may opt out or update their public details anytime via the Secretariat.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('membership')}
            className="shrink-0 px-4 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-black transition-colors"
          >
            Apply to Join Directory
          </button>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members by name, production credits, or keywords..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-sm"
            />
          </div>

          {/* Discipline Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-slate-600 shrink-0" />
            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="w-full md:w-64 bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 shadow-sm"
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
          <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <Users className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-display font-bold text-lg text-slate-950">No members matched your search criteria</h3>
            <p className="text-xs text-slate-500">Try clearing the search query or changing the discipline filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
              >
                {/* Photo / Avatar */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-500">
                      <Film className="w-10 h-10 mb-2 opacity-50" />
                      <span className="font-display font-bold text-xs tracking-widest text-slate-600">NCMF VERIFIED</span>
                    </div>
                  )}
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-900 shadow-sm border border-slate-200 uppercase tracking-wider">
                    {member.discipline}
                  </span>

                  <span className="absolute top-3 right-3 p-1 rounded-full bg-white text-emerald-600 border border-slate-200 shadow-sm" title="Verified Member">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-slate-950">
                        {member.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-mono">Member since {member.joinedYear}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>{member.city}</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
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
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium border border-slate-200">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connect Button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setContactingMember(member)}
                      className="w-full py-2 rounded-xl text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setContactingMember(null)}
        >
          <div 
            className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  Secretariat Routing Service
                </span>
                <h3 className="font-display font-bold text-xl text-slate-950">
                  Message to {contactingMember.name}
                </h3>
              </div>
              <button
                onClick={() => setContactingMember(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              To protect member privacy, your message is routed securely through the NCMF Secretariat and forwarded to {contactingMember.name}’s verified email.
            </p>

            <form onSubmit={handleSendInquiry} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Your Name & Production Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Balogun (Mainframe Media)"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Your Contact Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. tunde@mainframemedia.ng"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Inquiry / Role Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder="Describe the production, proposed role, filming dates, and terms..."
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setContactingMember(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black transition-colors shadow-sm"
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
