import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Award, 
  BookOpen, 
  HeartHandshake, 
  CheckCircle2, 
  Scale, 
  FileText,
  Building2,
  Film
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="space-y-20 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>About the Forum · Est. 2015 · CAC Registered</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Championing Excellence & Unity in Nigerian Cinema
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Founded in 2015, the Nollywood Creative Minds Forum (NCMF) is a registered professional association committed to the continuous elevation, ethical standards, and collective prosperity of Nigerian film practitioners.
        </p>
      </section>

      {/* Mission, Vision & Motto Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#131d2e] to-[#0c1322] border border-amber-500/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
              Our Vision
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              “Optimizing Potentials”
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the premier catalyst that unlocks, nurtures, and optimizes the inherent creative and commercial potential of every Nigerian film practitioner, positioning African cinema for global leadership.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#131d2e] to-[#0c1322] border border-amber-500/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              Our Mission
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Promoting Creative Mastery
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To promote excellence, professionalism, creativity, and collaboration within the Nigerian film and entertainment industry by providing a robust platform for capacity development, knowledge sharing, networking, mentorship, and empowerment.
            </p>
          </div>

          {/* Core Values */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#131d2e] to-[#0c1322] border border-amber-500/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
              Our Core Values
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white">
              Professionalism & Unity
            </h3>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Professionalism:</strong> Promoting high ethical standards, discipline, accountability, and technical excellence on every set.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Collaboration:</strong> Building strong relationships, teamwork, and co-production partnerships among creative practitioners.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* History & Foundation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0b101c] border border-amber-500/20 p-8 sm:p-14 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Our Journey Since 2015
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              A Decade of Building Sustainable Careers in Nollywood
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The Nollywood Creative Minds Forum was conceived by forward-thinking practitioners led by Ijeoma Richards and founding colleagues who recognized that while Nollywood possessed limitless raw storytelling power, filmmakers lacked cohesive institutional support for career longevity, on-set safety protocols, legal protection, and collaborative finance.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Formally registered under the Corporate Affairs Commission (CAC) in 2015, the forum has expanded from a dedicated think-tank in Lagos to a respected national body with chapters spanning Kwara State and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Corporate Affairs Commission</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Legally incorporated entity adhering to statutory nonprofit governance and transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Official Secretariat</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Operational headquarters at 14 Anite Crescent, Okota, Lagos, coordinating member services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Multi-Disciplinary Scope</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Encompassing actors, directors, writers, cinematographers, producers, and post-production craftspeople.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Strategic Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            The Four Pillars of NCMF
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Every initiative, workshop, and production we sponsor is structured around these enduring commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="rounded-3xl p-8 bg-[#0c121e] border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              1. Training & Capacity Development
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We host hands-on workshops, masterclasses with seasoned directors and DoPs, script doctoring sessions, and technical clinics on modern digital cinematography, sound design, color grading, and international festival distribution.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Scriptwriting & character psychology labs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                British Council FilmLab Africa certified mentorship
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Masterclasses in high-production lighting and audio
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl p-8 bg-[#0c121e] border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              2. Mentorship & Collaborative Filmmaking
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              NCMF bridges the generational divide. Emerging talents work side-by-side with veterans such as Keppy Ekpenyong Bassey, Ngozi Nwosu, and Ijeoma Richards on real productions, creating festival-worthy short films and hit feature broadcasts.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct shadowing of experienced film directors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Co-production incubator for member-written screenplays
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Screening platforms for independent shorts
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl p-8 bg-[#0c121e] border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center border border-yellow-500/20">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              3. High-Value Professional Networking
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Through the annual <em>In Pursuit of Better</em> seminar at Four Points by Sheraton, Lagos, and regular creative mixers, members build genuine business relationships with streaming platform acquisitions executives, financial sponsors, and casting directors.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Annual National Summit & Merit Awards Banquet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Verified Public Member Directory for casting calls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Inter-guild partnerships with AGN, AMP, and NANTAP
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="rounded-3xl p-8 bg-[#0c121e] border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              4. Industry Welfare & Practitioner Advocacy
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We stand as a vocal advocate for filmmakers’ dignity. We actively campaign for fair, timely remuneration, humane working hours on set, comprehensive safety guidelines, and emergency welfare assistance for members facing medical distress.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                Advocacy for fair remuneration & standard contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                Safe, respectful, and hazard-free set standards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                Member benevolent fund & emergency healthcare network
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121c2e] to-[#0a0f18] border border-amber-500/30 space-y-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Ready to be part of our story?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Join hundreds of Nigerian screen actors, directors, writers, and technical specialists shaping the next generation of Nollywood.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('membership')}
              className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg"
            >
              Apply for Professional Membership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
