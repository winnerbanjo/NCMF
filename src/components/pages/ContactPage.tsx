import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2,
  Building2,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const ContactPage: React.FC = () => {
  const { setIsWhatsAppOpen, showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Membership Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const officialEmail = 'nollywoodcreativemindsforum18@gmail.com';
  const officialPhone = '08118050555';
  const officialAddress = '14 Anite Crescent, Okota, Lagos, Nigeria';
  const whatsappNumber = '2348118050555';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitted(true);
    showToast('Your message has been dispatched to the NCMF Secretariat. We will respond promptly.', 'success');
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Official Secretariat Communications</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Connect with the Secretariat
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Whether you are a filmmaker applying for membership, an event sponsor, or an industry partner, our secretariat team in Okota, Lagos is here to assist you.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="rounded-3xl p-8 bg-[#0c121e] border border-amber-500/30 shadow-xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Official Head Office
              </span>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Physical Address</h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {officialAddress}
                    </p>
                    <span className="text-[11px] text-slate-500 mt-1 block">Lagos State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Official Telephone</h3>
                    <a
                      href={`tel:${officialPhone}`}
                      className="text-sm font-mono text-amber-300 hover:text-amber-200 mt-1 block"
                    >
                      {officialPhone}
                    </a>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Direct Secretariat Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Official Email Address</h3>
                    <a
                      href={`mailto:${officialEmail}`}
                      className="text-xs sm:text-sm text-amber-300 hover:text-amber-200 mt-1 block break-all font-mono"
                    >
                      {officialEmail}
                    </a>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Monitored daily by Secretariat</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">Secretariat Working Hours</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Monday – Friday: 9:00 AM – 5:00 PM WAT<br />
                      Saturday: Event & Production Clinics (Scheduled)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels (Priority Instagram & WhatsApp) */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-[#121c2e] to-[#0c1322] border border-white/10 shadow-xl space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Instant Chat & Priority Socials
              </span>

              {/* WhatsApp Banner */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">WhatsApp Live Chat Desk</h4>
                    <p className="text-xs text-emerald-300 font-mono">+234 811 805 0555</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="flex-1 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                  >
                    Open Live Chat
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello NCMF Secretariat, I am reaching out from your official website.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-900/50 hover:bg-emerald-800/50 border border-emerald-500/30 flex items-center gap-1"
                  >
                    Direct App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Priority Instagram */}
              <div className="p-4 rounded-2xl bg-pink-950/30 border border-pink-500/30 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Official Instagram Channel</h4>
                    <p className="text-[11px] text-pink-300">Client-Identified Priority Social Platform</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/nollywoodcreativemindsforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl text-xs font-bold text-white bg-pink-600/30 hover:bg-pink-600/50 border border-pink-500/40 transition-colors flex items-center justify-center gap-1.5 block text-center"
                >
                  Follow @nollywoodcreativemindsforum <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
              </div>

              {/* Editorial distinction note from PRD Section 4 & 6 */}
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                * Note: The official NCMF organization accounts are maintained independently from the personal social accounts of National President Ijeoma Richards (@ijeomarichards1).
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#0c121e] border border-amber-500/30 shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  Send an Inquiry
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Message the Secretariat Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Have a specific question about an upcoming seminar, merit award submission, or membership eligibility? Leave a message below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, {name}. The NCMF Secretariat has received your dispatch and will reply to <strong>{email}</strong> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-200 block">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Bukola Adeleke"
                        className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-200 block">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. adeleke@films.ng"
                        className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-200 block">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 08023456789"
                        className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-200 block">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Membership Inquiry">Membership & Registration (₦20,000)</option>
                        <option value="In Pursuit of Better Summit">Annual Summit & Merit Awards</option>
                        <option value="Film Production Collaboration">Film & Short-Film Productions</option>
                        <option value="Member Directory Support">Member Directory Listing / Opt-Out</option>
                        <option value="Media & Press">Press, Media & Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-200 block">
                      Message Details <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message to the Secretariat team here..."
                      className="w-full bg-[#141e30] border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Message to Secretariat
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Map Locator Card (Okota, Lagos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-[#0b101c] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Physical Location
            </span>
            <h4 className="font-display font-bold text-xl text-white">
              Visiting the NCMF Secretariat in Okota
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              14 Anite Crescent is located off Okota Road, accessible via Ago Palace Way or Oshodi-Apapa Expressway in Lagos State, Nigeria.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=14+Anite+Crescent+Okota+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors flex items-center gap-2 shrink-0"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
