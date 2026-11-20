import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  Star, 
  ChevronRight, 
  Info
} from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const { leaders, setSelectedLeader } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'executive' | 'board' | 'chapter'>('all');

  const filteredLeaders = leaders.filter(leader => {
    if (activeTab === 'all') return true;
    return leader.category === activeTab;
  });

  return (
    <div className="space-y-16 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <Users className="w-4 h-4 text-slate-700" />
          <span>Governance & Guild Stewards</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          National Executive Committee & Board of Advisers
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          NCMF is stewarded by a distinguished council of award-winning filmmakers, veteran screen icons, creative entrepreneurs, and veteran guild administrators committed to the welfare and advancement of Nollywood.
        </p>
      </section>

      {/* Tabs Filter (Clean Light Pills) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            All Leadership ({leaders.length})
          </button>

          <button
            onClick={() => setActiveTab('executive')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'executive'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            National Executives ({leaders.filter(l => l.category === 'executive').length})
          </button>

          <button
            onClick={() => setActiveTab('board')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'board'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Board & Industry Advisers ({leaders.filter(l => l.category === 'board').length})
          </button>

          <button
            onClick={() => setActiveTab('chapter')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'chapter'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Chapter Officers ({leaders.filter(l => l.category === 'chapter').length})
          </button>
        </div>
      </section>

      {/* Featured Primary Leadership Cards (Clean White Framing, Full Stature) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display font-bold text-2xl text-slate-950 flex items-center gap-2">
            <Award className="w-5 h-5 text-slate-900" />
            Executive Officers with Verified Profiles
          </h2>
          <span className="text-xs text-slate-500">Click any profile for full biography</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLeaders.filter(l => l.image).map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Clean Unobstructed Full Portrait */}
              <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-102 transition-transform duration-300"
                />
                
                {/* Role Pill */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white text-slate-900 shadow-sm border border-slate-200 uppercase tracking-wider">
                  {leader.role}
                </span>
              </div>

              {/* Leader Details on Pure White Card */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-800 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5 mb-2">
                    {leader.tagline}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {leader.bio[0]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-900 font-bold group-hover:underline flex items-center gap-1">
                    Read Biography & Credits <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board & Extended Executives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-950 flex items-center gap-2">
              <Award className="w-5 h-5 text-slate-900" />
              National Executives, Advisers & Chapter Leadership
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Distinguished Nollywood pioneers advising on institutional policy, regional representation, and guild development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeaders.filter(l => !l.image).map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="group cursor-pointer rounded-2xl p-6 bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-800 border border-slate-200 uppercase tracking-wider">
                      {leader.role}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      {leader.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-950 group-hover:text-black transition-colors">
                    {leader.name}
                  </h3>

                  <p className="text-xs text-slate-700 font-medium">
                    {leader.tagline}
                  </p>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed pt-1">
                    {leader.bio[0]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-900 font-semibold">
                  <span>View Details →</span>
                  <Star className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Note */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900">Secretariat Editorial Notice:</span>
            <p className="leading-relaxed text-slate-500">
              Profiles published above reflect verified materials submitted by the NCMF Secretariat and JISYEM’S View Productions. Additional executive portraits and expanded chapter rosters are updated continually under the governance of the National President.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
