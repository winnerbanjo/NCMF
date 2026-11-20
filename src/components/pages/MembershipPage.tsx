import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CreativeDiscipline } from '../../types';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Users, 
  HeartHandshake, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  AlertCircle,
  Copy,
  Check,
  Film
} from 'lucide-react';

const DISCIPLINES: CreativeDiscipline[] = [
  'Actor / Actress',
  'Film Director',
  'Film Producer',
  'Screenwriter / Playwright',
  'Cinematographer / DoP',
  'Film Editor',
  'Sound Designer / Music',
  'Costume & Makeup',
  'Production Crew / Manager',
  'Voice-Over / Model',
  'Media & Communications'
];

export const MembershipPage: React.FC = () => {
  const { submitApplication, setCurrentPage } = useApp();

  // Form fields state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [discipline, setDiscipline] = useState<CreativeDiscipline>('Actor / Actress');
  const [experienceYears, setExperienceYears] = useState('3-5 years');
  const [stateOfResidence, setStateOfResidence] = useState('Lagos');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [statementOfPurpose, setStatementOfPurpose] = useState('');
  const [directoryOptIn, setDirectoryOptIn] = useState(true);
  const [agreeToRules, setAgreeToRules] = useState(false);

  // Submission UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    referenceNumber: string;
    message: string;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim() || fullName.trim().length < 3) {
      setErrorMessage('Please enter your full legal or professional guild name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid official email address.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setErrorMessage('Please provide a valid phone number (e.g. 08012345678).');
      return;
    }
    if (!statementOfPurpose.trim() || statementOfPurpose.trim().length < 20) {
      setErrorMessage('Please provide a brief statement of purpose or career summary (min 20 characters).');
      return;
    }
    if (!agreeToRules) {
      setErrorMessage('You must confirm your agreement to abide by NCMF constitution and ethical standards.');
      return;
    }

    setIsSubmitting(true);

    // Call submit with duplicate prevention
    setTimeout(() => {
      const res = submitApplication({
        fullName,
        email,
        phone,
        discipline,
        experienceYears,
        stateOfResidence,
        portfolioUrl,
        imdbUrl,
        statementOfPurpose,
        directoryOptIn,
        agreeToRules
      });

      setIsSubmitting(false);

      if (res.success && res.referenceNumber) {
        setSuccessResult({
          referenceNumber: res.referenceNumber,
          message: res.message
        });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D49526', '#F5C05C', '#10B981', '#FFFFFF']
          });
        } catch (err) {
          console.log('Confetti trigger', err);
        }

        // Scroll to confirmation box
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        setErrorMessage(res.message);
      }
    }, 600);
  };

  const copyRefCode = () => {
    if (successResult?.referenceNumber) {
      navigator.clipboard.writeText(successResult.referenceNumber);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Professional Guild Membership</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Elevate Your Film Career with NCMF
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Join a dedicated community of Nigerian film practitioners. Access our comprehensive industry welfare package, collaborative short & feature film productions, and high-impact industry networking.
        </p>
      </section>

      {/* Category & Fee Overview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Professional Tier Benefits */}
          <div className="lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-[#0c121e] border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-black uppercase tracking-wider">
                  Approved Category: Professional Member
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Guild Induction
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Everything You Gain as a Registered Member
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                NCMF membership is structured specifically for practicing screen performers, filmmakers, writers, and technical specialists who value high ethical standards and collaborative career progression.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Comprehensive Welfare Package</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Emergency benevolence assistance, safe set advocacy, hospital visitation support, and mutual guild solidarity.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Film className="w-4 h-4" />
                    <span>Collaborative Productions</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Priority casting and crew selection for NCMF feature films (e.g. <em>Perfect for Divorce</em>) and short-film incubators.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Masterclasses & Training</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Subsidized or free access to advanced directing, screenwriting, cinematography, and British Council FilmLab Africa clinics.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Users className="w-4 h-4" />
                    <span>Verified Public Directory</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Optionally showcase your verified filmography, bio, and contact credentials to casting directors and producers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <strong>Eligibility Criteria:</strong> Must be in the entertainment industry and an active practicing creative practitioner committed to the vision of “Optimizing Potentials”.
            </div>
          </div>

          {/* Card 2: Approved Fee & Process Card */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-gradient-to-b from-[#141e30] to-[#0c1322] border border-amber-500/40 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                Official Registration Fee
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                  ₦20,000
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">
                  One-Time Entry
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Covers your membership induction, guild verification, welcome secretariat package, and access to member-only platforms.
              </p>
              
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-[11px] text-slate-400 space-y-1">
                <span className="font-semibold text-amber-300 block">Payment Roadmap Notice:</span>
                <p>
                  As outlined in the PRD, submission and review occur first. Upon vetting and committee approval, official NCMF bank account payment instructions are issued directly to your email and WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Application Workflow:
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>Complete Online Details Below</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>Secretariat Review & Credential Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Confirmation & ₦20,000 Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[10px]">4</span>
                    <span>Directory Opt-In & Induction</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#application-form"
              className="w-full py-3.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md block"
            >
              Jump to Application Form ↓
            </a>
          </div>

        </div>
      </section>

      {/* Online Application Form Section */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0b101c] border border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Direct Online Registration
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              NCMF Membership Application
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Fill in your details below. Once submitted, a unique application tracking code will be generated immediately.
            </p>
          </div>

          {/* Success Result View */}
          {successResult ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Application Successfully Received
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Welcome to the Vetting Stage
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  {successResult.message}
                </p>
              </div>

              {/* Reference Code Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-black/40 border border-emerald-500/30 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    Your Application Reference
                  </span>
                  <span className="font-mono font-bold text-lg text-amber-400">
                    {successResult.referenceNumber}
                  </span>
                </div>
                <button
                  onClick={copyRefCode}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copiedRef ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copiedRef ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* What Happens Next Checklist */}
              <div className="max-w-md mx-auto text-left space-y-2 text-xs text-slate-300 pt-2">
                <span className="font-bold text-slate-200 uppercase tracking-wider block">
                  Next Steps:
                </span>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>The Secretariat vetting committee reviews your creative credentials.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>You will receive an official outcome notification via email ({email}) and phone/WhatsApp ({phone}).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Once approved and induction completed, your profile will appear on our Public Member Directory.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('directory')}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
                >
                  View Member Directory
                </button>
                <button
                  onClick={() => setSuccessResult(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Full Legal or Professional Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Chukwuma Richard Eze"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. chukwuma@filmcraft.ng"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Phone / WhatsApp Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08118050555"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <span className="text-[10px] text-slate-400">Used for WhatsApp onboarding notifications</span>
                </div>

                {/* Creative Discipline */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Primary Creative Discipline <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value as CreativeDiscipline)}
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {DISCIPLINES.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Years of Experience */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Industry Experience Level
                  </label>
                  <select
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="1-2 years">1 - 2 years (Emerging Talent)</option>
                    <option value="3-5 years">3 - 5 years (Established Practitioner)</option>
                    <option value="6-10 years">6 - 10 years (Senior Creative)</option>
                    <option value="10+ years">10+ years (Industry Veteran)</option>
                  </select>
                </div>

                {/* State of Residence */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    State of Primary Residence / Chapter
                  </label>
                  <input
                    type="text"
                    value={stateOfResidence}
                    onChange={(e) => setStateOfResidence(e.target.value)}
                    placeholder="e.g. Lagos, Kwara, Abuja, Enugu"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Portfolio / Showreel Link */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    Portfolio, Instagram or Showreel Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://instagram.com/yourhandle or Vimeo/YouTube"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* IMDb Profile Link */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 block">
                    IMDb Profile Link (If available)
                  </label>
                  <input
                    type="url"
                    value={imdbUrl}
                    onChange={(e) => setImdbUrl(e.target.value)}
                    placeholder="https://www.imdb.com/name/..."
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Statement of Purpose / Bio */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-200 block">
                  Statement of Purpose & Career Summary <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={statementOfPurpose}
                  onChange={(e) => setStatementOfPurpose(e.target.value)}
                  placeholder="Share a brief summary of your creative background, notable screen credits, and what you hope to achieve through NCMF membership..."
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Directory Opt-In & Privacy Choice (PRD requirement) */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={directoryOptIn}
                    onChange={(e) => setDirectoryOptIn(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-amber-500 bg-[#141e30] border-white/20 focus:ring-amber-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">
                      Opt-In to Public Member Directory (Recommended)
                    </span>
                    <span className="text-slate-400">
                      If approved, display your professional name, discipline, and portfolio link in our public member directory for casting calls and collaborations. You can withdraw permission at any time.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer pt-2 border-t border-white/5">
                  <input
                    type="checkbox"
                    required
                    checked={agreeToRules}
                    onChange={(e) => setAgreeToRules(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-amber-500 bg-[#141e30] border-white/20 focus:ring-amber-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">
                      Agreement to NCMF Constitution & Professional Ethics <span className="text-amber-400">*</span>
                    </span>
                    <span className="text-slate-400">
                      I certify that all details provided are true and accurate. I agree to uphold the core values of professionalism, accountability, and collaboration in all guild and industry activities.
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-black text-sm tracking-wide uppercase text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all shadow-glow-gold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Membership Application (₦20,000)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 Automated duplicate detection active. Your submission is protected against double-clicks.
                </p>
              </div>
            </form>
          )}

        </div>
      </section>
    </div>
  );
};
