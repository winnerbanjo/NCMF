import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CreativeDiscipline } from '../../types';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  BookOpen, 
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
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#0f172a', '#10B981', '#475569', '#cbd5e1']
          });
        } catch (err) {
          console.log('Confetti trigger', err);
        }

        // Scroll to confirmation box
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        setErrorMessage(res.message);
      }
    }, 500);
  };

  const copyRefCode = () => {
    if (successResult?.referenceNumber) {
      navigator.clipboard.writeText(successResult.referenceNumber);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="space-y-20 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>Professional Guild Membership</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Elevate Your Film Career with NCMF
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Join a dedicated community of Nigerian film practitioners. Access our comprehensive industry welfare package, collaborative short & feature film productions, and high-impact industry networking.
        </p>
      </section>

      {/* Category & Fee Overview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Professional Tier Benefits */}
          <div className="lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white uppercase tracking-wider">
                  Approved Category: Professional Member
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Direct Guild Induction
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                Everything You Gain as a Registered Member
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                NCMF membership is structured specifically for practicing screen performers, filmmakers, writers, and technical specialists who value high ethical standards and collaborative career progression.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <HeartHandshake className="w-4 h-4 text-slate-700" />
                    <span>Comprehensive Welfare Package</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Emergency benevolence assistance, safe set advocacy, hospital visitation support, and mutual guild solidarity.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <Film className="w-4 h-4 text-slate-700" />
                    <span>Collaborative Productions</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Priority casting and crew selection for NCMF feature films (e.g. <em>Perfect for Divorce</em>) and short-film incubators.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <BookOpen className="w-4 h-4 text-slate-700" />
                    <span>Masterclasses & Training</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Subsidized or free access to advanced directing, screenwriting, cinematography, and British Council FilmLab Africa clinics.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                    <Users className="w-4 h-4 text-slate-700" />
                    <span>Verified Public Directory</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Optionally showcase your verified filmography, bio, and contact credentials to casting directors and producers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong>Eligibility Criteria:</strong> Must be in the entertainment industry and an active practicing creative practitioner committed to the vision of “Optimizing Potentials”.
            </div>
          </div>

          {/* Card 2: Approved Fee & Process Card */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Official Registration Fee
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950">
                  ₦20,000
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  One-Time Entry
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers your membership induction, guild verification, welcome secretariat package, and access to member-only platforms.
              </p>
              
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500 space-y-1">
                <span className="font-semibold text-slate-900 block">Payment Roadmap Notice:</span>
                <p>
                  As outlined in the PRD, submission and review occur first. Upon vetting and committee approval, official NCMF bank account payment instructions are issued directly to your email and WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Application Workflow:
                </span>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>Complete Online Details Below</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>Secretariat Review & Credential Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Confirmation & ₦20,000 Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">4</span>
                    <span>Directory Opt-In & Induction</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#application-form"
              className="w-full py-3.5 rounded-full text-center font-semibold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-black transition-all shadow-sm block"
            >
              Jump to Application Form ↓
            </a>
          </div>

        </div>
      </section>

      {/* Online Application Form Section (Clean White) */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
              Direct Online Registration
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950">
              NCMF Membership Application
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fill in your details below. Once submitted, a unique application tracking code will be generated immediately.
            </p>
          </div>

          {/* Success Result View */}
          {successResult ? (
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                  Application Successfully Received
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  Welcome to the Vetting Stage
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  {successResult.message}
                </p>
              </div>

              {/* Reference Code Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block">
                    Your Application Reference
                  </span>
                  <span className="font-mono font-bold text-lg text-slate-950">
                    {successResult.referenceNumber}
                  </span>
                </div>
                <button
                  onClick={copyRefCode}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copiedRef ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedRef ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* What Happens Next Checklist */}
              <div className="max-w-md mx-auto text-left space-y-2 text-xs text-slate-600 pt-2">
                <span className="font-bold text-slate-800 uppercase tracking-wider block">
                  Next Steps:
                </span>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>The Secretariat vetting committee reviews your creative credentials.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You will receive an official outcome notification via email ({email}) and phone/WhatsApp ({phone}).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Once approved and induction completed, your profile will appear on our Public Member Directory.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('directory')}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-black transition-colors"
                >
                  View Member Directory
                </button>
                <button
                  onClick={() => setSuccessResult(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Full Legal or Professional Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Chukwuma Richard Eze"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. chukwuma@filmcraft.ng"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08118050555"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                  <span className="text-[10px] text-slate-400">Used for WhatsApp onboarding notifications</span>
                </div>

                {/* Creative Discipline */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Primary Creative Discipline <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value as CreativeDiscipline)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
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
                  <label className="text-xs font-semibold text-slate-700 block">
                    Industry Experience Level
                  </label>
                  <select
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  >
                    <option value="1-2 years">1 - 2 years (Emerging Talent)</option>
                    <option value="3-5 years">3 - 5 years (Established Practitioner)</option>
                    <option value="6-10 years">6 - 10 years (Senior Creative)</option>
                    <option value="10+ years">10+ years (Industry Veteran)</option>
                  </select>
                </div>

                {/* State of Residence */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    State of Primary Residence / Chapter
                  </label>
                  <input
                    type="text"
                    value={stateOfResidence}
                    onChange={(e) => setStateOfResidence(e.target.value)}
                    placeholder="e.g. Lagos, Kwara, Abuja, Enugu"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Portfolio / Showreel Link */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Portfolio, Instagram or Showreel Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://instagram.com/yourhandle or Vimeo/YouTube"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>

                {/* IMDb Profile Link */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    IMDb Profile Link (If available)
                  </label>
                  <input
                    type="url"
                    value={imdbUrl}
                    onChange={(e) => setImdbUrl(e.target.value)}
                    placeholder="https://www.imdb.com/name/..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* Statement of Purpose / Bio */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Statement of Purpose & Career Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={statementOfPurpose}
                  onChange={(e) => setStatementOfPurpose(e.target.value)}
                  placeholder="Share a brief summary of your creative background, notable screen credits, and what you hope to achieve through NCMF membership..."
                  className="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Directory Opt-In & Privacy Choice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={directoryOptIn}
                    onChange={(e) => setDirectoryOptIn(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-slate-900 bg-white border-slate-300 focus:ring-slate-900"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">
                      Opt-In to Public Member Directory (Recommended)
                    </span>
                    <span className="text-slate-500">
                      If approved, display your professional name, discipline, and portfolio link in our public member directory for casting calls and collaborations. You can withdraw permission at any time.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer pt-2 border-t border-slate-200">
                  <input
                    type="checkbox"
                    required
                    checked={agreeToRules}
                    onChange={(e) => setAgreeToRules(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-slate-900 bg-white border-slate-300 focus:ring-slate-900"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">
                      Agreement to NCMF Constitution & Professional Ethics <span className="text-red-500">*</span>
                    </span>
                    <span className="text-slate-500">
                      I certify that all details provided are true and accurate. I agree to uphold the core values of professionalism, accountability, and collaboration in all guild and industry activities.
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit Button: Solid Crisp Black */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-bold text-sm tracking-wide uppercase text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
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
                <p className="text-center text-[11px] text-slate-400 mt-2">
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
