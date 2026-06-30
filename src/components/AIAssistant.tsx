import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

/* ─── KNOWLEDGE BASE ─── */
interface KnowledgeEntry {
  keywords: string[];
  response: string;
  followUp?: string[];
}

const KNOWLEDGE: KnowledgeEntry[] = [
  {
    keywords: ['germany', 'deutschland'],
    response: 'Germany is a top destination with tuition-free public universities! Key points:\n\n• Tuition: €0–€3,000/year (public)\n• Living cost: €10,200–€12,000/year\n• APS certificate is mandatory for students from India, China, Vietnam\n• DAAD and Heinrich Böll scholarships available\n• 18 months post-study work permit\n• Strong engineering and automotive sectors',
    followUp: ['How do I apply to Germany?', 'What is APS?', 'DAAD scholarship details']
  },
  {
    keywords: ['canada'],
    response: 'Canada is one of the most popular study destinations:\n\n• Tuition: CAD $16,000–$35,000/year\n• Living cost: CAD $12,000–$18,000/year\n• Up to 3 years PGWP (Post-Graduation Work Permit)\n• SDS stream for faster visa processing\n• Direct PR pathway through Express Entry\n• Vanier, OGS, and entrance scholarships available',
    followUp: ['Canada visa process', 'SDS vs non-SDS', 'PGWP details']
  },
  {
    keywords: ['australia'],
    response: 'Australia offers world-class education with great post-study options:\n\n• Tuition: AUD $25,000–$45,000/year\n• Living cost: AUD $16,000–$24,000/year\n• 2–4 years PSW (Post-Study Work) visa\n• Subclass 500 student visa\n• Australia Awards and Destination Australia scholarships\n• Strong part-time work opportunities (up to 48 hrs/fortnight)',
    followUp: ['Australia visa step-by-step', 'PSW visa details', 'Part-time work rules']
  },
  {
    keywords: ['uk', 'united kingdom'],
    response: 'The UK is a global education hub with rich heritage:\n\n• Tuition: £14,000–£26,000/year\n• Living cost: £12,000–£16,000/year\n• 2-year Graduate Route visa\n• 1-year fast Master programs available\n• Chevening and Commonwealth scholarships\n• 80+ universities to choose from',
    followUp: ['UK visa process', 'Chevening scholarship', '1-year Masters']
  },
  {
    keywords: ['usa', 'united states', 'america'],
    response: 'The USA offers unparalleled academic opportunities:\n\n• Tuition: $25,000–$60,000/year\n• Living cost: $12,000–$20,000/year\n• 1–3 years OPT (STEM students get 3 years)\n• F-1 student visa process\n• Fulbright and Knight-Hennessy scholarships\n• 150+ universities with global rankings\n• High starting packages in tech and finance',
    followUp: ['F-1 visa process', 'OPT details', 'Fulbright scholarship']
  },
  {
    keywords: ['ireland'],
    response: 'Ireland is a fast-growing study destination:\n\n• Tuition: €12,000–€25,000/year\n• Living cost: €10,000–€14,000/year\n• 2-year stay-back visa for Master graduates\n• Strong tech sector (Google, Apple, Meta HQs)\n• Post-study work options excellent\n• Friendly, English-speaking environment',
    followUp: ['Ireland visa process', 'Stay-back visa', 'Tech jobs in Ireland']
  },
  {
    keywords: ['singapore'],
    response: 'Singapore is Asias education hub:\n\n• Tuition: SGD $15,000–$40,000/year\n• Living cost: SGD $10,000–$16,000/year\n• NUS and NTU ranked among top global universities\n• Strong scholarships like SINGA\n• Strategic location for Asian careers\n• High employment rate post-graduation',
    followUp: ['SINGA scholarship', 'NUS admission', 'Singapore visa']
  },
  {
    keywords: ['netherlands', 'holland'],
    response: 'The Netherlands offers high-quality English-taught programs:\n\n• Tuition: €8,000–€20,000/year\n• Living cost: €10,000–€14,000/year\n• 1-year orientation year visa after studies\n• Holland Scholarship and Orange Tulip available\n• Strong in engineering, business, and social sciences\n• Excellent international student support',
    followUp: ['Holland Scholarship', 'Orientation year visa', 'Dutch university ranking']
  },
  {
    keywords: ['scholarship', 'scholarships', 'funding', 'financial aid', 'fee waiver'],
    response: 'We help you find the right scholarships! Here are major options:\n\n• DAAD (Germany) — fully funded\n• Fulbright (USA) — fully funded\n• Chevening (UK) — fully funded\n• Australia Awards — fully funded\n• Vanier Canada — fully funded\n• SINGA (Singapore) — fully funded\n• Erasmus Mundus — EU joint programs\n\nAtlasPath has helped students secure over ₹250Cr in scholarships!',
    followUp: ['DAAD scholarship', 'Fulbright scholarship', 'Chevening scholarship']
  },
  {
    keywords: ['visa', 'student visa', 'visa process'],
    response: 'The student visa process varies by country but generally involves:\n\n1. Get acceptance letter from university\n2. Pay tuition deposit (if required)\n3. Open blocked account (Germany: €11,904)\n4. Get health insurance\n5. Book visa appointment\n6. Prepare documents (financial proof, SOP, etc.)\n7. Attend visa interview\n8. Wait for processing (4–12 weeks depending on country)\n\nAtlasPath provides mock visa interviews and document checklists!',
    followUp: ['Germany visa steps', 'Canada SDS visa', 'USA F-1 visa']
  },
  {
    keywords: ['ielts'],
    response: 'IELTS (International English Language Testing System):\n\n• Required for most English-speaking countries\n• Band 6.5–7.5 typically needed for universities\n• 4 sections: Listening, Reading, Writing, Speaking\n• Score valid for 2 years\n• Both Academic and General Training available\n• Our IELTS Band 7+ Strategy Guide available in Resources!\n• Tip: Practice with timed mock tests regularly',
    followUp: ['IELTS vs TOEFL', 'Improve IELTS score', 'IELTS resources']
  },
  {
    keywords: ['toefl'],
    response: 'TOEFL iBT (Test of English as a Foreign Language):\n\n• Preferred by US and Canadian universities\n• Score range: 0–120 (80–100 typically required)\n• 4 sections: Reading, Listening, Speaking, Writing\n• Score valid for 2 years\n• Internet-based test (iBT)\n• Our TOEFL iBT Complete Preparation guide is available!\n• Tip: Focus on note-taking during Listening section',
    followUp: ['TOEFL vs IELTS', 'TOEFL score requirements', 'TOEFL resources']
  },
  {
    keywords: ['gre'],
    response: 'GRE (Graduate Record Examination):\n\n• Required for many US graduate programs\n• 3 sections: Verbal Reasoning, Quantitative Reasoning, Analytical Writing\n• Score range: 260–340 (Verbal + Quant)\n• Analytical Writing scored 0–6\n• Valid for 5 years\n• Our GRE 330+ Study Plan available!\n• Tip: Focus on vocabulary for Verbal and problem-solving speed for Quant',
    followUp: ['GRE vs GMAT', 'GRE study plan', 'GRE score for top universities']
  },
  {
    keywords: ['sop', 'statement of purpose'],
    response: 'A strong Statement of Purpose (SOP) is crucial:\n\n• Usually 800–1000 words\n• Should explain: Why this program? Why this university? Why you?\n• Be specific about your career goals\n• Connect your past experiences to the program\n• Show you have researched the university\n• Avoid generic statements\n\nOur SOP Writing Masterclass in Resources has templates and expert tips!',
    followUp: ['SOP format', 'SOP mistakes to avoid', 'SOP samples']
  },
  {
    keywords: ['lor', 'recommendation', 'letter of recommendation'],
    response: 'Letters of Recommendation (LORs):\n\n• Typically 2–3 LORs required\n• Can be academic (professors) or professional (employers)\n• Should highlight your skills, achievements, and potential\n• Choose recommenders who know you well\n• Give them at least 2–3 weeks notice\n• Share your CV and SOP with them for context\n\nCheck our LOR Request Guide in Resources!',
    followUp: ['How to request LOR', 'LOR vs SOP', 'LOR samples']
  },
  {
    keywords: ['application', 'admission', 'apply', 'deadline'],
    response: 'The university application process typically:\n\n1. Research universities and programs (4–6 months before deadline)\n2. Prepare for tests (IELTS/TOEFL/GRE)\n3. Get documents ready (transcripts, SOP, LORs)\n4. Submit applications (usually Oct–Jan for Fall intake)\n5. Wait for decisions (4–8 weeks)\n6. Accept offer and pay deposit\n7. Apply for visa\n\nAtlasPath guides you through every step! Start with our free Readiness Assessment.',
    followUp: ['Application timeline', 'Document checklist', 'Book consultation']
  },
  {
    keywords: ['university', 'universities', 'college'],
    response: 'Choosing the right university is key. Consider:\n\n• Academic reputation and rankings\n• Program curriculum and faculty\n• Location and cost of living\n• Scholarship opportunities\n• Career services and alumni network\n• Intake options (Fall/Spring/Summer)\n\nUse our University Matcher tool to find your best-fit universities based on your profile!',
    followUp: ['University rankings', 'University selection tips', 'Use University Matcher']
  },
  {
    keywords: ['budget', 'cost', 'tuition', 'expenses', 'expensive'],
    response: 'Study abroad costs vary by country. Here is a quick comparison:\n\n🇩🇪 Germany: €10,200–€15,000/yr\n🇨🇦 Canada: CAD $28,000–$53,000/yr\n🇦🇺 Australia: AUD $41,000–$69,000/yr\n🇬🇧 UK: £26,000–£42,000/yr\n🇺🇸 USA: $37,000–$80,000/yr\n🇮🇪 Ireland: €22,000–€39,000/yr\n\nUse our Budget Calculator and Scholarship Finder to reduce costs!',
    followUp: ['Scholarship options', 'Cost comparison', 'Budget planner']
  },
  {
    keywords: ['timeline', 'when', 'how long', 'duration', 'intake'],
    response: 'Typical study abroad timeline:\n\n📅 12–18 months before: Research & test prep\n📅 10–12 months before: Take IELTS/TOEFL/GRE\n📅 8–10 months before: Shortlist universities\n📅 6–8 months before: Submit applications\n📅 4–6 months before: Apply for scholarships\n📅 3–4 months before: Apply for visa\n📅 1–2 months before: Travel preparations\n\nMain intakes: Fall (Sep/Oct), Spring (Jan/Feb), Summer (May/Jun)',
    followUp: ['Application deadlines', 'Fall vs Spring intake', 'Book consultation']
  },
  {
    keywords: ['assessment', 'readiness', 'evaluate', 'profile'],
    response: 'Our Readiness Assessment is a free 3-step online evaluation:\n\n1. Share your academic profile and preferences\n2. Get a personalized readiness score\n3. Receive tailored university and scholarship recommendations\n\nIt takes just 10 minutes and gives you a clear roadmap for your study abroad journey!',
    followUp: ['Take assessment now', 'Consultation after assessment', 'How it works']
  },
  {
    keywords: ['consultation', 'consult', 'advisor', 'counselor', 'expert'],
    response: 'Book a free strategy consultation with our experts:\n\n• Personalized university shortlist\n• Scholarship matching\n• Application strategy\n• Visa guidance\n• Timeline planning\n\nOur consultants have helped 15,000+ students achieve their study abroad dreams!',
    followUp: ['Book consultation', 'Assessment first', 'What to prepare']
  },
  {
    keywords: ['aps', 'aps certificate'],
    response: 'The APS (Academic Evaluation Centre) certificate:\n\n• Mandatory for students from India, China, Vietnam applying to Germany\n• Verifies authenticity of academic documents\n• Takes about 2–3 months to process\n• Must be done BEFORE applying for student visa\n• Required for both university admission and visa\n\nStart your APS process early — it is a critical step!',
    followUp: ['APS process steps', 'Germany visa', 'Germany universities']
  },
  {
    keywords: ['blocked account', 'block account'],
    response: 'A blocked account (Sperrkonto) is required for German student visas:\n\n• Current amount: €11,904 (2024)\n• You can only access €992 per month\n• Options: Deutsche Bank, Fintiba, Expatrio, Coracle\n• Must be opened before visa application\n• Proof of blocked account is mandatory for visa\n\nWe can guide you through the process!',
    followUp: ['Germany visa', 'Living cost in Germany', 'Book consultation']
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'],
    response: 'Hello! 👋 Welcome to AtlasPath. I am your study abroad planning assistant. Ask me anything about:\n\n• Study destinations (Germany, Canada, Australia, UK, USA, and more)\n• Scholarships and funding\n• Visa processes\n• Tests (IELTS, TOEFL, GRE)\n• Applications and deadlines\n• Budget and cost planning',
    followUp: ['Popular destinations', 'Scholarship options', 'Take assessment']
  },
  {
    keywords: ['thanks', 'thank you', 'thanks!', 'thank'],
    response: "You are very welcome! 😊 If you have more questions, just ask. When you are ready, take our free Readiness Assessment or book a consultation to get personalized guidance. Good luck with your study abroad journey! 🎓",
    followUp: ['Take assessment', 'Book consultation', 'Popular destinations']
  },
];

/* ─── FALLBACK RESPONSES ─── */
const FALLBACKS = [
  "I am not sure about that specific query. However, I can help you with:\n\n• Study destinations and universities\n• Scholarships and funding\n• Visa processes\n• Tests (IELTS, TOEFL, GRE)\n• Applications and deadlines\n• Budget planning\n\nCould you try rephrasing your question?",
  "That is a great question! While I do not have the exact details right now, here is what I recommend:\n\n1. Take our free Readiness Assessment for personalized guidance\n2. Book a consultation with our experts\n3. Check our Resources Hub for comprehensive guides\n\nWhat would you like to know more about?",
  "Hmm, I could not find a direct match for that. Try asking about:\n\n• A specific country (Germany, Canada, Australia, etc.)\n• Scholarships and financial aid\n• Visa requirements\n• IELTS/TOEFL/GRE preparation\n• Application timelines",
];

/* ─── COMPONENT ─── */
export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([{
      sender: 'bot',
      text: 'Hi there! I am **Atlas AI**, your global education planner. 🎓\n\nAsk me anything about studying abroad — destinations, scholarships, visas, tests, applications, and more!',
      timestamp: new Date(),
    }]);
    setSuggestions(['Popular destinations', 'Scholarship options', 'Take assessment']);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findResponse = useCallback((query: string): { text: string; followUp?: string[] } | null => {
    const lower = query.toLowerCase();
    for (const entry of KNOWLEDGE) {
      if (entry.keywords.some(kw => lower.includes(kw))) {
        return { text: entry.response, followUp: entry.followUp };
      }
    }
    return null;
  }, []);

  const addBotMessage = useCallback((text: string, followUp?: string[]) => {
    setIsTyping(true);
    setSuggestions([]);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text, timestamp: new Date() }]);
      if (followUp && followUp.length > 0) {
        setSuggestions(followUp);
      }
    }, 800 + Math.random() * 600);
  }, []);

  const handleSend = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages(prev => [...prev, { sender: 'user', text: trimmed, timestamp: new Date() }]);
    setInput('');
    setSuggestions([]);

    const match = findResponse(trimmed);
    if (match) {
      addBotMessage(match.text, match.followUp);
    } else {
      const fallback = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
      addBotMessage(fallback, ['Popular destinations', 'Scholarship options', 'Take assessment']);
    }
  }, [isTyping, findResponse, addBotMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('•') || line.startsWith('-')) {
        return <span key={i} className="block ml-1">{line}</span>;
      }
      if (line.startsWith('📅') || line.startsWith('🇩') || line.startsWith('🇨') || line.startsWith('🇦') || line.startsWith('🇬') || line.startsWith('🇺') || line.startsWith('🇮')) {
        return <span key={i} className="block">{line}</span>;
      }
      if (/^\d+\./.test(line)) {
        return <span key={i} className="block ml-1">{line}</span>;
      }
      if (line.trim() === '') return <br key={i} />;
      return <span key={i} className="block">{line}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="p-4 bg-primary hover:bg-secondary text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Open Atlas AI assistant"
          >
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none pointer-events-none" />
            <MessageSquare className="w-6 h-6 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 80, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 80, scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-[calc(100vw-32px)] sm:w-[400px] h-[520px] bg-white border border-slate-200/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#090D1A] text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold tracking-tight block">Atlas AI</span>
                  <span className="text-[9px] text-emerald-400 font-bold uppercase leading-none">Online &amp; Active</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-slate-50/50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col max-w-[85%] ${
                    msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                  }`}
                >
                  <div
                    className={`p-3 text-xs leading-relaxed rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-100 shadow-sm rounded-tl-none'
                    }`}
                  >
                    {msg.sender === 'bot' ? formatText(msg.text) : msg.text}
                  </div>
                  <span className="text-[8px] text-slate-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col max-w-[80%] self-start items-start">
                  <div className="p-3 bg-white text-slate-500 border border-slate-100 shadow-sm rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span className="text-xs font-medium">Thinking…</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-white shrink-0">
              {/* Suggestions */}
              {suggestions.length > 0 && !isTyping && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestionClick(s)}
                      className="px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-bold text-primary hover:bg-primary/10 transition-all"
                    >
                      {s} <ArrowRight className="w-2.5 h-2.5 inline ml-0.5" />
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-xl px-3 py-1.5 focus-within:border-primary/40 focus-within:bg-white transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question…"
                  disabled={isTyping}
                  className="bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full disabled:opacity-50"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isTyping}
                  className="p-1.5 rounded-lg bg-primary text-white hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Send"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Germany', 'Canada', 'Australia', 'UK', 'USA', 'Scholarships', 'Visa process', 'IELTS'].map(q => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      disabled={isTyping}
                      className="px-2 py-1 bg-slate-100 rounded-lg text-[9px] font-bold text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes bounce-slow-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};
