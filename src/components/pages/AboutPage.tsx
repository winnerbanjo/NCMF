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
    <div className="space-y-20 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>About the Forum · Established in 2015</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Championing Excellence & Unity in Nigerian Cinema
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          A professional association of Nigerian film practitioners, established in 2015. Dedicated to capacity building, ethical standards, collaborative productions, and comprehensive industry welfare.
        </p>
      </section>

      {/* Mission, Vision & Motto Grid (Clean White Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Our Vision
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-950">
              “Optimizing Potentials”
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the premier catalyst that unlocks, nurtures, and optimizes the inherent creative and commercial potential of every Nigerian film practitioner, positioning African cinema for global leadership.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Our Mission
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-950">
              Promoting Creative Mastery
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To promote excellence, professionalism, creativity, and collaboration within the Nigerian film and entertainment industry by providing a robust platform for capacity development, knowledge sharing, networking, mentorship, and empowerment.
            </p>
          </div>

          {/* Core Values */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Our Core Values
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-950">
              Professionalism & Unity
            </h3>
            <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Professionalism:</strong> Promoting high ethical standards, discipline, accountability, and technical excellence on every set.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Collaboration:</strong> Building strong relationships, teamwork, and co-production partnerships among creative practitioners.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* History & Foundation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-14 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
              Our Journey Since 2015
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
              A Decade of Building Sustainable Careers in Nollywood
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The Nollywood Creative Minds Forum was conceived by forward-thinking practitioners led by Ijeoma Richards and founding colleagues who recognized that while Nollywood possessed limitless raw storytelling power, filmmakers lacked cohesive institutional support for career longevity, on-set safety protocols, legal protection, and collaborative finance.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established in 2015 as a professional association of Nigerian film practitioners, the forum has expanded from a dedicated think-tank in Lagos to a respected national body with chapters spanning Kwara State and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white text-slate-900 border border-slate-200 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Professional Association</h4>
                <p className="text-xs text-slate-500 mt-1">
                  A professional association of Nigerian film practitioners, established in 2015.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white text-slate-900 border border-slate-200 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Official Secretariat</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Operational headquarters at 14 Anite Crescent, Okota, Lagos, coordinating member services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white text-slate-900 border border-slate-200 shrink-0">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Multi-Disciplinary Scope</h4>
                <p className="text-xs text-slate-500 mt-1">
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
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
            The Four Pillars of NCMF
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Every initiative, workshop, and production we sponsor is structured around these enduring commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-950">
              1. Training & Capacity Development
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We host hands-on workshops, masterclasses with seasoned directors and DoPs, script doctoring sessions, and technical clinics on modern digital cinematography, sound design, color grading, and international festival distribution.
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Scriptwriting & character psychology labs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                British Council FilmLab Africa certified mentorship
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Masterclasses in high-production lighting and audio
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-950">
              2. Mentorship & Collaborative Filmmaking
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              NCMF bridges the generational divide. Emerging talents work side-by-side with veterans such as Keppy Ekpenyong Bassey, Ngozi Nwosu, and Ijeoma Richards on real productions, creating festival-worthy short films and hit feature broadcasts.
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Direct shadowing of experienced film directors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Co-production incubator for member-written screenplays
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Screening platforms for independent shorts
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-950">
              3. High-Value Professional Networking
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through the annual <em>In Pursuit of Better</em> seminar at Four Points by Sheraton, Lagos, and regular creative mixers, members build genuine business relationships with streaming platform acquisitions executives, financial sponsors, and casting directors.
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Annual National Summit & Merit Awards Banquet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Verified Public Member Directory for casting calls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Inter-guild partnerships with AGN, AMP, and NANTAP
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="rounded-2xl p-8 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-950">
              4. Industry Welfare & Practitioner Advocacy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We stand as a vocal advocate for filmmakers’ dignity. We actively campaign for fair, timely remuneration, humane working hours on set, comprehensive safety guidelines, and emergency welfare assistance for members facing medical distress.
            </p>
            <ul className="text-xs text-slate-600 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Advocacy for fair remuneration & standard contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Safe, respectful, and hazard-free set standards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" />
                Member benevolent fund & emergency healthcare network
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clean Bottom Callout */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
            Ready to be part of our story?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Join hundreds of Nigerian screen actors, directors, writers, and technical specialists shaping the next generation of Nollywood.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('membership')}
              className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-black transition-all shadow-sm"
            >
              Apply for Professional Membership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
