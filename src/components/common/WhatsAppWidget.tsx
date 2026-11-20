import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MessageCircle, 
  X, 
  Send, 
  CheckCheck, 
  ShieldCheck, 
  PhoneCall,
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
  const defaultWhatsAppUrl = `https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(
    'Hello NCMF Secretariat, I am visiting the official website and would like to make an inquiry regarding membership and forum programmes.'
  )}`;

  const quickQuestions = [
    {
      label: '📝 How do I apply for Membership?',
      answer: 'Membership is open to established Nollywood and entertainment practitioners. The registration fee is ₦20,000. You can submit your application directly on our Membership page with instant duplicate protection!',
      actionText: 'Go to Membership Page',
      targetPage: 'membership' as const
    },
    {
      label: '🏆 When is the next Annual Seminar?',
      answer: 'Our flagship 2026 "In Pursuit of Better" National Summit & Merit Awards will be hosted at Four Points by Sheraton, Victoria Island, Lagos. Registration is currently open!',
      actionText: 'View Programmes & Events',
      targetPage: 'programmes' as const
    },
    {
      label: '🎬 Tell me about NCMF film projects',
      answer: 'NCMF produces collaborative short films and feature films, including the DStv hit "Perfect for Divorce" produced by our President Ijeoma Richards, and the award-winning short "Bottled Up" by Head of Media Tolulope Odebunmi.',
      actionText: 'Explore Projects & Gallery',
      targetPage: 'projects' as const
    },
    {
      label: '📞 Official Secretariat contact',
      answer: 'Our Secretariat is at 14 Anite Crescent, Okota, Lagos. Phone: 08118050555. Email: nollywoodcreativemindsforum18@gmail.com.',
      actionText: 'View Full Contact Details',
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

    // Automated smart response
    setTimeout(() => {
      let reply = 'Thank you for contacting the NCMF Secretariat. To connect directly with an executive officer on WhatsApp right now, click the "Open in WhatsApp" button below!';
      
      const lower = text.toLowerCase();
      if (lower.includes('member') || lower.includes('apply') || lower.includes('fee') || lower.includes('cost')) {
        reply = 'Membership registration is ₦20,000 for verified entertainment practitioners. You can submit your application right now through our online portal, and the review committee will evaluate your submission.';
      } else if (lower.includes('event') || lower.includes('seminar') || lower.includes('sheraton')) {
        reply = 'The flagship "In Pursuit of Better" gathering brings together filmmakers, producers, and financiers annually at Four Points by Sheraton, Lagos.';
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
    }, 600);
  };

  const openWhatsAppDirect = (customMsg?: string) => {
    const msg = customMsg || 'Hello NCMF Secretariat, I am reaching out from the official website regarding membership and programmes.';
    window.open(`https://wa.me/${officialWhatsAppNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Live Chat Dialog */}
      {isWhatsAppOpen && (
        <div className="mb-4 w-[360px] sm:w-[400px] max-w-[calc(100vw-2rem)] rounded-2xl bg-[#0d1424] border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col animate-slideUp">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-[#0e1726] p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d1424] ring-1 ring-white/50" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                    NCMF Secretariat Live Support
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </h3>
                  <p className="text-[11px] text-emerald-100/80 font-mono">
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
            <p className="text-[11px] text-emerald-100/90 mt-2 bg-black/20 px-2.5 py-1 rounded-md">
              Official WhatsApp desk for Nigerian film practitioners and members.
            </p>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#0a0f1b]/95 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 whitespace-pre-line leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-xs'
                      : 'bg-[#152033] text-slate-200 border border-white/5 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1 flex items-center gap-1">
                  {m.timestamp}
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-400" />}
                </span>
              </div>
            ))}

            {/* Quick Inquiry Chips */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
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
                        }, 900);
                      }
                    }}
                    className="text-left px-3 py-2 rounded-lg bg-[#141e30] hover:bg-emerald-600/20 text-slate-200 hover:text-emerald-300 border border-white/5 hover:border-emerald-500/30 transition-all text-[11px]"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Launch Button */}
          <div className="px-4 py-2 bg-[#0c1322] border-t border-white/5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Prefer official WhatsApp app?</span>
            <button
              onClick={() => openWhatsAppDirect(inputText)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              Open in WhatsApp <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Text Input Footer */}
          <div className="p-3 bg-[#0d1424] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-[#152033] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
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
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 border border-emerald-400/40"
        aria-label="Open WhatsApp Live Chat"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
        </div>
        <span className="font-bold text-xs tracking-wide hidden sm:inline">
          WhatsApp Live Chat
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-mono hidden md:inline">
          08118050555
        </span>
      </button>
    </div>
  );
};
