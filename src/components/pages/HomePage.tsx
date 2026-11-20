import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Film, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  HeartHandshake, 
  ChevronRight,
  ExternalLink,
  Target
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, events, setSelectedLeader, leaders } = useApp();

  const featuredEvent = events.find(e => e.isUpcoming) || events[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Cinematic Backdrop Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-[#080d16] to-[#05080e] pointer-events-none" />
        
        {/* Subtle architectural grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          
          {/* Official Accreditation Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-glow-subtle animate-fadeIn">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>The Official Professional Body for Nigerian Film Practitioners · Established 2015</span>
          </div>

          {/* Main Cinematic Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
            Optimizing Potentials in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Contemporary Nollywood
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
            A professional association providing Nigerian actors, directors, writers, cinematographers, and producers with a unified platform for mentorship, collaborative productions, capacity building, and industry welfare.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <button
              onClick={() => setCurrentPage('membership')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm tracking-wide text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all duration-300 shadow-glow-gold hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>Apply for Membership</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentPage('programmes')}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Programmes
            </button>
          </div>

          {/* Key Institutional Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block mb-1">
                2015
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Year Founded (CAC Reg)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block mb-1">
                ₦20,000
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Approved Entry Fee
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block mb-1">
                100+
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Film & TV Productions
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block mb-1">
                Four Points
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Sheraton Annual Host
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Filmmaker Questions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            First Time Visiting NCMF?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Three Questions Every Filmmaker Asks
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Clear, transparent answers designed to guide your creative journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-3xl p-8 bg-gradient-to-b from-[#101827] to-[#0a0f18] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Film className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400/80 font-semibold block">
                Question 01
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                What does the forum do?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                NCMF unifies Nigerian film practitioners to promote capacity building, masterclasses with industry veterans, collaborative productions (including the hit film <em>Perfect for Divorce</em>), and rigorous advocacy for safe set standards and fair remuneration.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button
                onClick={() => setCurrentPage('about')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                Learn our History & Mission <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-3xl p-8 bg-gradient-to-b from-[#101827] to-[#0a0f18] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/80 font-semibold block">
                Question 02
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                What do I gain by joining?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As a Professional member, you gain access to our comprehensive welfare package, exclusive casting and production opportunities, invitations to the annual <em>In Pursuit of Better</em> seminar, film screening showcases, and an optional verified public profile in our Member Directory.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button
                onClick={() => setCurrentPage('membership')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                Review Member Benefits <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-3xl p-8 bg-gradient-to-b from-[#101827] to-[#0a0f18] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-yellow-400/80 font-semibold block">
                Question 03
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                How do I apply?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Submit our simple mobile-friendly online application with your creative discipline and credentials. The approved registration fee is ₦20,000. Once submitted, our vetting committee reviews your profile and issues your official induction reference number.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6">
              <button
                onClick={() => setCurrentPage('membership')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                Start Online Application <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programme Banner (Four Points by Sheraton Flagship) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-[#121c2e] via-[#0c1322] to-[#070b12] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-md uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Featured Flagship Programme
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                {featuredEvent.title}
              </h2>

              {featuredEvent.subtitle && (
                <p className="text-amber-300 font-medium text-sm sm:text-base">
                  {featuredEvent.subtitle}
                </p>
              )}

              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{featuredEvent.venue}</span>
                </div>
              </div>

              {featuredEvent.highlights && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Session Highlights:
                  </span>
                  {featuredEvent.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                {featuredEvent.registrationUrl ? (
                  <a
                    href={featuredEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md flex items-center gap-2"
                  >
                    Register for Event <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                    Registration opening soon · Check back for updates
                  </span>
                )}

                <button
                  onClick={() => setCurrentPage('programmes')}
                  className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  View Past & Upcoming Archive
                </button>
              </div>
            </div>

            {/* Event Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl relative group aspect-[4/3]">
                <img
                  src={featuredEvent.image || '/images/gallery/ncmf-merit-awards-gathering.jpg'}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-semibold block text-amber-300">Annual Merit Awards Ceremony</span>
                  <span className="text-slate-400 text-[11px]">Four Points by Sheraton, Victoria Island, Lagos</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Film & Creative Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
              Collaborative Cinema
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Signature Screen Productions
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('projects')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
          >
            Explore All Films & Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Film 1: Perfect for Divorce */}
          <div className="group rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400/40 transition-all shadow-xl flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-900">
              <img
                src="/images/gallery/ncmf-presidential-presentation.jpg"
                alt="Perfect for Divorce"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-md">
                DStv Hit Feature Film
              </span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
                2024 / 2025
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  Perfect for Divorce
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  Produced by Ijeoma Richards (NCMF President / TRIMM Network)
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The critically acclaimed DStv hit feature film showcasing the collaborative power of NCMF practitioners. An emotionally charged drama exploring marital reconciliation, legal battles, and forgiveness.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Broadcast: DStv Africa Magic</span>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="font-bold text-amber-400 hover:text-amber-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>

          {/* Film 2: Bottled Up */}
          <div className="group rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400/40 transition-all shadow-xl flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-900">
              <img
                src="/images/gallery/ncmf-awards-panel.jpg"
                alt="Bottled Up Short Film"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-black shadow-md">
                Festival Award Winner
              </span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
                British Council FilmLab
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  Bottled Up
                </h3>
                <p className="text-xs text-emerald-400 font-semibold">
                  Directed & Produced by Tolulope Odebunmi (Head of Media)
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Supported by British Council FilmLab Africa. Won <strong>Best Short Film</strong> at the Kaduna International Film Festival and official screening selection at the Lagos Fringe Festival and Bayelsa Film Festival.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Accolade: Best Short Film Winner</span>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="font-bold text-amber-400 hover:text-amber-300"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with FULL Stature Portrait Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            Governance & Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Led by Respected Nollywood Practitioners
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Our executives bring decades of combined filmography, guild administration, and commercial leadership.
          </p>
        </div>

        {/* Full-Height Portrait Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.slice(0, 4).map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Full height portrait container */}
              <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-slate-900">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/30 to-transparent opacity-90" />
                
                {/* Role Pill */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-md uppercase tracking-wider">
                  {leader.role}
                </span>

                {/* Name Overlay at base of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-amber-300/80 line-clamp-1 mt-0.5">
                    {leader.tagline}
                  </p>
                </div>
              </div>

              {/* Bio & Action */}
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

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('leadership')}
            className="px-7 py-3.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors inline-flex items-center gap-2"
          >
            Meet Full National Executive Committee & Board of Advisers <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* High-Impact CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-14 overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-black shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-black text-amber-400 uppercase tracking-widest">
              Join Our Creative Community
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
              Ready to Optimize Your Potential in Nollywood?
            </h2>
            <p className="text-black/80 font-medium text-base sm:text-lg leading-relaxed">
              Become a verified Professional Member today. Access the comprehensive welfare package, participate in high-level productions, and connect with fellow practitioners across Nigeria.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setCurrentPage('membership')}
                className="px-8 py-4 rounded-2xl font-black text-sm tracking-wide bg-black text-white hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Apply for Membership (₦20,000)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-7 py-4 rounded-2xl font-bold text-sm bg-black/15 hover:bg-black/25 text-black border border-black/20 transition-all text-center"
              >
                Inquire via Secretariat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
