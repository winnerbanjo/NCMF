import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MessageCircle, 
  X, 
  Send, 
  CheckCheck, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const WhatsAppWidget: React.FC = () => {
  const { isWhatsAppOpen, setIsWhatsAppOpen, setCurrentPage } = useApp();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: 'Hello & Welcome to Nollywood Creative Minds Forum (NCMF)! 👋\n\nHow can the Secretariat assist you today?',
      timestamp: 'Just now'
    }
  ]);

  const officialWhatsAppNumber = '2348118050555'; // 08118050555

  const quickQuestions = [
    {
      label: '📝 How do I apply for Membership?',
      answer: 'Membership is open to practicing Nigerian film practitioners. The approved registration fee is ₦20,000, payable after your application is vetted and approved. You can submit your application directly on our Membership page!',
      targetPage: 'membership' as const
    },
    {
      label: '🏆 When is the next Annual Seminar?',
      answer: 'Our landmark "In Pursuit of Better" gathering brings together filmmakers, producers, and creative heads. Dates and venue for the upcoming national edition will be announced by the Secretariat shortly!',
      targetPage: 'programmes' as const
    },
    {
      label: '🎬 Tell me about NCMF film projects',
      answer: 'NCMF produces collaborative short films and feature films, including the DStv hit "Perfect for Divorce" produced by our President Ijeoma Richards, and the award-winning short "Bottled Up" by Head of Media Tolulope Odebunmi.',
      targetPage: 'projects' as const
    },
    {
      label: '📞 Official Secretariat contact',
      answer: 'Our Secretariat is at 14 Anite Crescent, Okota, Lagos. Phone: 08118050555. Email: nollywoodcreativemindsforum18@gmail.com.',
      targetPage: 'contact' as const
    }
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      let reply = 'Thank you for contacting the NCMF Secretariat. To connect directly with an executive officer on WhatsApp right now, click the "Open in WhatsApp" button below!';
      
      const lower = text.toLowerCase();
      if (lower.includes('member') || lower.includes('apply') || lower.includes('fee') || lower.includes('cost')) {
        reply = 'The approved registration fee is ₦20,000, payable only after your application has been vetted and provisionally approved by the membership committee.';
      } else if (lower.includes('event') || lower.includes('seminar') || lower.includes('sheraton')) {
        reply = 'Our landmark "In Pursuit of Better" gathering brings together filmmakers, producers, and financiers in Lagos. Past editions include our documented gathering at Four Points by Sheraton.';
      } else if (lower.includes('president') || lower.includes('ijeoma') || lower.includes('leader')) {
        reply = 'NCMF is led by Co-Founder & National President Ijeoma Richards alongside Vice Presidents Bukola "Bukky" Thomas and Kayode Freeman, Head of Media Tolulope Odebunmi, and Secretary Stella-Maris Nnaji.';
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  const openWhatsAppDirect = (customMsg?: string) => {
    const msg = customMsg || 'Hello NCMF Secretariat, I am reaching out from the official website regarding membership and programmes.';
    window.open(`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Live Chat Dialog (Clean White) */}
      {isWhatsAppOpen && (
        <div className="mb-4 w-[360px] sm:w-[390px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-slideUp">
          
          {/* Header */}
          <div className="bg-emerald-700 p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                    NCMF Secretariat Live
                    <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  </h3>
                  <p className="text-[11px] text-emerald-100 font-mono">
                    +234 811 805 0555 · Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsAppOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[11px] text-emerald-100 mt-2 bg-black/15 px-2.5 py-1 rounded-md">
              Official WhatsApp desk for Nigerian film practitioners and members.
            </p>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 whitespace-pre-line leading-relaxed shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-emerald-700 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1 flex items-center gap-1">
                  {m.timestamp}
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-600" />}
                </span>
              </div>
            ))}

            {/* Quick Inquiry Chips */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                Frequently Asked Topics:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      handleSendMessage(q.label);
                      if (q.targetPage) {
                        setTimeout(() => {
                          setCurrentPage(q.targetPage);
                        }, 700);
                      }
                    }}
                    className="text-left px-3 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 transition-all text-[11px] shadow-2xs"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Launch Button */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-600">Prefer WhatsApp app?</span>
            <button
              onClick={() => openWhatsAppDirect(inputText)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              Open in WhatsApp <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Text Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-xs"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg transition-all duration-200 border border-emerald-600"
        aria-label="Open WhatsApp Live Chat"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-300 ring-2 ring-emerald-700" />
        </div>
        <span className="font-semibold text-xs tracking-wide hidden sm:inline">
          WhatsApp Support
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-mono hidden md:inline">
          08118050555
        </span>
      </button>
    </div>
  );
};
