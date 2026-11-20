import React, { useState, useEffect } from 'react';
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
  Target,
  Tv
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, events, setSelectedLeader, leaders } = useApp();

  // Rotating phrases for animated hero headline
  const rotatingPhrases = [
    'Contemporary Nollywood',
    'Collaborative Filmmaking',
    'Creative Storytelling',
    'Filmmaker Welfare'
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setPhraseIndex(prev => (prev + 1) % rotatingPhrases.length);
        setFadeState('in');
      }, 350);
    }, 3200);

    return () => clearInterval(timer);
  }, [rotatingPhrases.length]);

  // Feature the documented 2024 seminar and merit awards
  const featuredEvent = events.find(e => e.id === 'event-awards-2024') || events[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 bg-white text-slate-900">
      
      {/* Hero Section: Editorial Light Style with Animated Hero Text & Immediate Photography */}
      <section className="relative pt-12 pb-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Official Description Badge with entrance animation */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium mb-8 animate-hero-badge">
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>A professional association of Nigerian film practitioners, established in 2015</span>
        </div>

        {/* Hero Title: Animated with dynamic rotating focus phrase */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-950 max-w-4xl mx-auto leading-[1.12] mb-6 animate-hero-title">
          <span>Optimizing Potentials in </span>
          <span className="relative inline-block text-slate-950 mt-1 sm:mt-0">
            <span
              className={`inline-block transition-all duration-350 transform ${
                fadeState === 'in'
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-2 scale-98'
              }`}
            >
              {rotatingPhrases[phraseIndex]}
            </span>
            {/* Elegant editorial accent underline */}
            <span className="block h-1 w-full bg-slate-900 rounded-full mt-1 sm:mt-2 transition-all duration-500"></span>
          </span>
        </h1>

        {/* Subtitle with entrance animation */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 animate-hero-sub">
          A professional association providing Nigerian actors, directors, screenwriters, cinematographers, and producers with a unified platform for mentorship, collaborative productions, capacity building, and industry welfare.
        </p>

        {/* Primary Action Buttons with entrance animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12 animate-hero-actions">
          <button
            onClick={() => setCurrentPage('membership')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>Apply for Membership</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setCurrentPage('programmes')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            Explore Events
          </button>
        </div>

        {/* First Screen Visual: Showing the Real People Behind the Forum */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm text-left mb-10 animate-hero-visual">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-100">
            <img
              src="/images/gallery/ncmf-merit-awards-gathering.jpg"
              alt="NCMF filmmakers, executives, and honorees gathering at Four Points by Sheraton, Lagos"
              className="w-full h-full object-cover object-[center_35%]"
            />
          </div>
          <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="font-semibold text-slate-900">
                Filmmakers, executives, and guild members at the 2024 NCMF Merit Awards gathering
              </span>
            </div>
            <span className="text-slate-500 font-medium">
              Four Points by Sheraton, Victoria Island, Lagos
            </span>
          </div>
        </div>

        {/* Verified Facts & Accurate Tiles (Replacing misleading tiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-display font-bold text-2xl sm:text-3xl text-slate-950 block mb-1">
              2015
            </span>
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">
              Established in Lagos
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              Professional association founded by practicing Nigerian film practitioners.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-display font-bold text-2xl sm:text-3xl text-slate-950 block mb-1">
              ₦20,000
            </span>
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">
              Approved Registration Fee
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              Payable exclusively upon credential vetting and committee approval.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-display font-bold text-xl sm:text-2xl text-slate-950 block mb-1 truncate">
              Four Points by Sheraton
            </span>
            <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block">
              2024 Gathering Venue
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              Venue for the documented 2024 seminar and creative merit awards.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Core Questions Section (Clean White Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
            First Time Visiting NCMF?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
            Three Questions Every Filmmaker Asks
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Clear, practical answers designed to guide your journey in the Nigerian film industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                <Film className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Question 01
              </span>
              <h3 className="font-display font-bold text-xl text-slate-950">
                What does the forum do?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                NCMF unifies Nigerian film practitioners to promote capacity development, masterclasses with industry veterans, collaborative productions (including the hit film <em>Perfect for Divorce</em>), and rigorous advocacy for safe set standards and fair remuneration.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setCurrentPage('about')}
                className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5"
              >
                Learn our History & Mission <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Question 02
              </span>
              <h3 className="font-display font-bold text-xl text-slate-950">
                What do I gain by joining?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As a Professional member, you gain access to our comprehensive welfare package, exclusive casting and production opportunities, invitations to the annual <em>In Pursuit of Better</em> seminar, film screening showcases, and an optional verified public profile in our Member Directory.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setCurrentPage('membership')}
                className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5"
              >
                Review Member Benefits <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Question 03
              </span>
              <h3 className="font-display font-bold text-xl text-slate-950">
                How do I apply?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Submit our simple mobile-friendly online application with your creative discipline and credentials. The approved registration fee is ₦20,000. Once submitted, our vetting committee reviews your profile and issues your official induction reference number.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setCurrentPage('membership')}
                className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5"
              >
                Start Online Application <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Programme Banner (Clean Editorial Magazine Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Documented Landmark Gathering
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 leading-tight">
                {featuredEvent.title}
              </h2>

              {featuredEvent.subtitle && (
                <p className="text-slate-700 font-semibold text-sm sm:text-base">
                  {featuredEvent.subtitle}
                </p>
              )}

              <p className="text-sm text-slate-600 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200">
                  <Calendar className="w-4 h-4 text-slate-900 shrink-0" />
                  <span className="font-medium">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0" />
                  <span className="truncate font-medium">{featuredEvent.venue}</span>
                </div>
              </div>

              {featuredEvent.highlights && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                    Session Highlights:
                  </span>
                  {featuredEvent.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="px-6 py-3 rounded-full font-semibold text-xs tracking-wider uppercase text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center gap-2"
                >
                  View Event Photos & Gallery <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setCurrentPage('programmes')}
                  className="px-5 py-3 rounded-full font-semibold text-xs text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  Explore All Events & Archive
                </button>
              </div>
            </div>

            {/* Event Photography */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={featuredEvent.image || '/images/gallery/ncmf-merit-awards-gathering.jpg'}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-xs">
                  <span className="font-semibold block text-slate-900">Annual Merit Awards Ceremony</span>
                  <span className="text-slate-500 text-[11px]">Four Points by Sheraton, Victoria Island, Lagos</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Film & Creative Projects Showcase (Clean Light Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Collaborative Cinema
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
              Signature Screen Productions
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('projects')}
            className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5"
          >
            Explore All Films & Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Film 1: Perfect for Divorce */}
          <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src="/images/gallery/ncmf-presidential-presentation.jpg"
                alt="Perfect for Divorce"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white shadow-sm">
                DStv Hit Feature Film
              </span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200">
                2024 / 2025
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  Perfect for Divorce
                </h3>
                <p className="text-xs text-slate-700 font-semibold">
                  Produced by Ijeoma Richards (NCMF President / TRIMM Network)
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The critically acclaimed DStv hit feature film showcasing the collaborative power of NCMF practitioners. An emotionally charged drama exploring marital reconciliation, legal battles, and forgiveness.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-slate-700" /> Broadcast: DStv Africa Magic
                </span>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="font-bold text-slate-900 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>

          {/* Film 2: Bottled Up */}
          <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src="/images/gallery/ncmf-awards-panel.jpg"
                alt="Bottled Up Short Film"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-sm">
                Festival Award Winner
              </span>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200">
                British Council FilmLab
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  Bottled Up
                </h3>
                <p className="text-xs text-slate-700 font-semibold">
                  Directed & Produced by Tolulope Odebunmi (Head of Media)
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Supported by British Council FilmLab Africa. Won <strong>Best Short Film</strong> at the Kaduna International Film Festival, with official festival screenings at the Bayelsa International Film Festival and An Evening of Short Film Festival.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Accolade: Best Short Film (Kaduna Intl Film Fest)</span>
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="font-bold text-slate-900 hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Full Stature Portrait Cards on White Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
            Governance & Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
            Led by Respected Nollywood Practitioners
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Our executives bring decades of combined filmography, guild administration, and commercial leadership.
          </p>
        </div>

        {/* Clean, Full-Height Executive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.slice(0, 4).map((leader) => (
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
                
                {/* Clean Role Pill */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white text-slate-900 shadow-sm border border-slate-200 uppercase tracking-wider">
                  {leader.role}
                </span>
              </div>

              {/* Bio & Read Action on Pure White Card */}
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
                    Read Biography <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('leadership')}
            className="px-7 py-3 rounded-full font-semibold text-xs text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            Meet Full National Executive Committee & Board of Advisers <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Clean Bottom CTA Section (Minimalist & Crisp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 sm:p-14 bg-slate-900 text-white shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-200 uppercase tracking-widest border border-white/10">
              Join Our Creative Community
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
              Ready to Optimize Your Potential in Nollywood?
            </h2>
            <p className="text-slate-300 font-normal text-base sm:text-lg leading-relaxed">
              Become a verified Professional Member today. Access the comprehensive welfare package, participate in high-level productions, and connect with fellow practitioners across Nigeria.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setCurrentPage('membership')}
                className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wide bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Apply for Membership (₦20,000)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-7 py-3.5 rounded-full font-semibold text-sm bg-transparent hover:bg-white/10 text-white border border-white/30 transition-all text-center"
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
