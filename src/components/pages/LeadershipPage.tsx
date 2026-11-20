import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LeaderProfile } from '../../types';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  Film, 
  Star, 
  ChevronRight, 
  Info,
  CheckCircle2
} from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const { leaders, setSelectedLeader } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'executive' | 'board' | 'chapter'>('all');

  const filteredLeaders = leaders.filter(leader => {
    if (activeTab === 'all') return true;
    return leader.category === activeTab;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <Users className="w-4 h-4 text-amber-400" />
          <span>Governance & Guild Stewards</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          National Executive Committee & Board of Advisers
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          NCMF is stewarded by a distinguished council of award-winning filmmakers, veteran screen icons, creative entrepreneurs, and veteran guild administrators committed to the welfare and advancement of Nollywood.
        </p>
      </section>

      {/* Tabs Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            All Leadership ({leaders.length})
          </button>

          <button
            onClick={() => setActiveTab('executive')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'executive'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            National Executives ({leaders.filter(l => l.category === 'executive').length})
          </button>

          <button
            onClick={() => setActiveTab('board')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'board'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Board & Industry Advisers ({leaders.filter(l => l.category === 'board').length})
          </button>

          <button
            onClick={() => setActiveTab('chapter')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'chapter'
                ? 'bg-amber-500 text-black shadow-md'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Chapter Officers ({leaders.filter(l => l.category === 'chapter').length})
          </button>
        </div>
      </section>

      {/* Featured Primary Leadership Cards (Portraits Supplied) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display font-bold text-2xl text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            Executive Officers with Verified Profiles
          </h2>
          <span className="text-xs text-slate-400">Click any profile for full biography</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLeaders.filter(l => l.image).map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-slate-900">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/30 to-transparent opacity-90" />
                
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-md uppercase tracking-wider">
                  {leader.role}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-amber-300/80 line-clamp-1 mt-0.5">
                    {leader.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {leader.bio[0]}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                    Read Full Bio & Filmography <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board & Extended Executives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-t border-white/10 pt-12">
          <div className="mb-8">
            <h2 className="font-display font-bold text-2xl text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              National Executives, Advisers & Chapter Leadership
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Distinguished Nollywood pioneers advising on institutional policy, regional representation, and guild development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeaders.filter(l => !l.image).map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="group cursor-pointer rounded-2xl p-6 bg-[#0b101c] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">
                      {leader.role}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      {leader.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {leader.name}
                  </h3>

                  <p className="text-xs text-amber-400/80 font-medium">
                    {leader.tagline}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed pt-1">
                    {leader.bio[0]}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>View Details →</span>
                  <Star className="w-3.5 h-3.5 text-amber-400/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Note as cited in PRD */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-5 rounded-2xl bg-[#0e1626] border border-blue-500/20 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-blue-300">Secretariat Editorial Notice:</span>
            <p className="leading-relaxed text-slate-400">
              Profiles published above reflect verified materials submitted by the NCMF Secretariat and JISYEM’S View Productions. Additional executive portraits and expanded chapter rosters are updated continually under the governance of the National President.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
