import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  ExternalLink,
  CheckCircle2
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
    <div className="space-y-20 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <Phone className="w-4 h-4 text-slate-700" />
          <span>Official Secretariat Communications</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Connect with the Secretariat
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Whether you are a filmmaker applying for membership, an event sponsor, or an industry partner, our secretariat team in Okota, Lagos is here to assist you.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                Official Head Office
              </span>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-slate-900 border border-slate-200 shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-950">Physical Address</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {officialAddress}
                    </p>
                    <span className="text-[11px] text-slate-400 mt-1 block">Lagos State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-slate-900 border border-slate-200 shrink-0 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-950">Official Telephone</h3>
                    <a
                      href={`tel:${officialPhone}`}
                      className="text-sm font-mono text-slate-900 font-bold hover:underline mt-1 block"
                    >
                      {officialPhone}
                    </a>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Direct Secretariat Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-slate-900 border border-slate-200 shrink-0 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-950">Official Email Address</h3>
                    <a
                      href={`mailto:${officialEmail}`}
                      className="text-xs sm:text-sm text-slate-900 font-semibold hover:underline mt-1 block break-all font-mono"
                    >
                      {officialEmail}
                    </a>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Monitored daily by Secretariat</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white text-slate-900 border border-slate-200 shrink-0 shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-950">Secretariat Working Hours</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Monday – Friday: 9:00 AM – 5:00 PM WAT<br />
                      Saturday: Event & Production Clinics (Scheduled)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels (Priority Instagram & WhatsApp) */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                Instant Chat & Priority Socials
              </span>

              {/* WhatsApp Banner */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">WhatsApp Live Chat Desk</h4>
                    <p className="text-xs text-emerald-800 font-mono">+234 811 805 0555</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="flex-1 py-2 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
                  >
                    Open Live Chat
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello NCMF Secretariat, I am reaching out from your official website.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 flex items-center gap-1"
                  >
                    Direct App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Priority Instagram */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Official Instagram Channel</h4>
                    <p className="text-[11px] text-slate-500">Follow NCMF on Instagram</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/nollywoodcreativemindsforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-full text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 block text-center"
                >
                  Follow @nollywoodcreativemindsforum <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                * Note: Official NCMF announcements are published via @nollywoodcreativemindsforum, distinct from the personal pages of forum executives.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-sm space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  Send an Inquiry
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
                  Message the Secretariat Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Have a specific question about an upcoming seminar, merit award submission, or membership eligibility? Leave a message below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-950">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {name}. The NCMF Secretariat has received your dispatch and will reply to <strong>{email}</strong> within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-black transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Bukola Adeleke"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. adeleke@films.ng"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 08023456789"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900"
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
                    <label className="text-xs font-semibold text-slate-700 block">
                      Message Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message to the Secretariat team here..."
                      className="w-full bg-white border border-slate-300 rounded-xl p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2"
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
        <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
              Physical Location
            </span>
            <h4 className="font-display font-bold text-xl text-slate-950">
              Visiting the NCMF Secretariat in Okota
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
              14 Anite Crescent is located off Okota Road, accessible via Ago Palace Way or Oshodi-Apapa Expressway in Lagos State, Nigeria.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=14+Anite+Crescent+Okota+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs font-semibold bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <MapPin className="w-4 h-4 text-slate-700" />
            Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
