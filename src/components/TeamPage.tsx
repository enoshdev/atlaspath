import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, CheckCircle, ArrowRight,
  Compass, Globe, ChevronDown, ChevronUp, Star, Award, Briefcase, Heart
} from 'lucide-react';

/* ─── DATA MODELS ─── */
interface LeaderProfile {
  name: string;
  role: string;
  exp: string;
  specialized: string[];
  students: string;
  img: string;
}

const LEADERS: LeaderProfile[] = [
  { name: 'Rahul Mehta', role: 'Co-founder & CEO', exp: '12+ Years Exp.', specialized: ['Germany', 'USA'], students: '8,500+', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Priya Sharma', role: 'Co-founder & COO', exp: '10+ Years Exp.', specialized: ['Canada', 'UK'], students: '7,200+', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80' },
  { name: 'Arjun Patel', role: 'Head of Global Admissions', exp: '11+ Years Exp.', specialized: ['Australia', 'Ireland'], students: '6,800+', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80' },
  { name: 'Neha Verma', role: 'Head of Scholarships', exp: '9+ Years Exp.', specialized: ['Netherlands', 'Singapore'], students: '5,500+', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80' }
];

interface ExpertProfile {
  name: string;
  role: string;
  exp: string;
  img: string;
  expertise: string;
}

const EXPERTS_BY_CATEGORY: Record<string, ExpertProfile[]> = {
  'Germany Experts': [
    { name: 'Lisa Mueller', role: 'Senior Germany Advisor', exp: '8 Yrs Exp', expertise: 'APS Verification & TUM/LMU Admissions Specialist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
    { name: 'Markus Weber', role: 'Germany Visa Counsel', exp: '10 Yrs Exp', expertise: 'Blocked Accounts & Sperrkonto Verification Specialist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' }
  ],
  'Canada Experts': [
    { name: 'Sarah Jenkins', role: 'Canada Desk Specialist', exp: '7 Yrs Exp', expertise: 'PGWP Guidelines & PR Pathways under CEC/PNP', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
    { name: 'David Miller', role: 'Canada Admissions Officer', exp: '8 Yrs Exp', expertise: 'Rotman School, McGill & UBC Admissions Specialist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80' }
  ],
  'UK Experts': [
    { name: 'Alistair Brown', role: 'UK Senior Advisor', exp: '11 Yrs Exp', expertise: 'Russell Group Admissions & CAS document validation', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
    { name: 'Victoria Green', role: 'UK Visa Specialist', exp: '9 Yrs Exp', expertise: 'Student Visa Route guidance & BRP collection', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80' }
  ],
  'Australia Experts': [
    { name: 'Oliver Smith', role: 'Australia Specialist', exp: '8 Yrs Exp', expertise: 'OSHC Setup, GTE Statement & Subclass 500 Visa', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80' },
    { name: 'Chloe Jones', role: 'Go8 Admissions Lead', exp: '7 Yrs Exp', expertise: 'UniMelb & USYD Entry Requirements counselor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' }
  ],
  'Scholarship Experts': [
    { name: 'James Carter', role: 'Global Scholarship Lead', exp: '9 Yrs Exp', expertise: 'Chevening, DAAD & Fulbright matching expert', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80' },
    { name: 'Megan Foster', role: 'Fellowship Advisor', exp: '10 Yrs Exp', expertise: 'SOP Essay Editing & Scholarship interview preps', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' }
  ],
  'Visa Experts': [
    { name: 'Vikram Singh', role: 'Head of Visa Compliance', exp: '12 Yrs Exp', expertise: 'Consular mock prep & compliance checks lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
    { name: 'Niamh Walsh', role: 'EU Immigration Counsel', exp: '7 Yrs Exp', expertise: 'Eurozone entry permits & blocked funds verifier', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' }
  ]
};

const FAQS = [
  { q: 'Who are the experts at AtlasPath?', a: 'Our network consists of certified study abroad advisors, former visa consular officers, scholarship analysts, and academic mentors with over 10+ average years of student counseling experience.' },
  { q: 'What is the experience level of your counselors?', a: 'Every AtlasPath advisor has a minimum of 5 years of professional study abroad consulting experience, with senior leads having 10+ to 15+ years managing admissions and visas.' },
  { q: 'How do you ensure student visa success?', a: 'We achieve our 95% visa success rate by thoroughly reviewing financial proofs, verifying academic transcript translation logs, confirming blocked account deposits, and conducting mock consular interviews.' },
  { q: 'Do you help with global scholarships?', a: 'Yes! Our scholarship consultants match candidate profiles with active awards (like DAAD, Chevening, Fulbright) and guide students through draft essay edits and interviews.' },
  { q: 'How many students has AtlasPath guided?', a: 'Over the past decade, our global advisor team has successfully guided over 15,000+ international students to secure admissions across top universities.' },
  { q: 'Which countries do your experts specialize in?', a: 'We have dedicated country-specific expert desks for Germany, Canada, Australia, the United Kingdom, the United States, Ireland, and the Netherlands.' }
];

interface ReviewItem {
  name: string;
  uni: string;
  country: string;
  rating: number;
  review: string;
  outcome: string;
  img: string;
}

const STUDENT_REVIEWS: ReviewItem[] = [
  { name: 'Arjun Patel', uni: 'TUM, Germany', country: 'Germany', rating: 5, review: 'AtlasPath guided me at every step. From shortlisting universities to securing my German blocked account and visa. I couldn\'t have done it without them!', outcome: 'Admitted: MSc In Data Science (TUM)', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
  { name: 'Sneha Kapoor', uni: 'University of Toronto, Canada', country: 'Canada', rating: 5, review: 'The Canada desk helped me build a premium SOP that got me admitted with a merit scholarship. Simply the best consultants.', outcome: 'Admitted: BEng Computer Science', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80' },
  { name: 'Aisha Khan', uni: 'Imperial College London, UK', country: 'UK', rating: 5, review: 'Their scholarship advisory helped me structure a perfect application for the Chevening scholarship. Fully recommended!', outcome: 'Admitted: MSc Health Policy (Chevening Winner)', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' }
];

/* ─── MAIN COMPONENT ─── */
export const TeamPage: React.FC = () => {
  const [activeCategoryTab, setActiveCategoryTab] = useState('Germany Experts');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80';
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(prev => prev === idx ? null : idx);
  };

  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      
      {/* ─── SECTION 1: EDITORIAL HERO SECTION ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* World Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="team-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#team-grid-pattern)" />
          </svg>
        </div>

        {/* Dynamic Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold">Team & Experts</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            
            {/* Left: Heading + Stats */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 self-start mb-5 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[11px] font-bold text-slate-600">
                🌐 TEAM & GLOBAL SPECIALISTS
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Meet The Advisors Behind
                <br />
                Your Global <span className="font-serif italic font-normal text-primary">Academic Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-xl text-pretty"
              >
                We are a network of certified consultants, former visa compliance officers, and university placement advisors working to make study abroad counseling transparent.
              </motion.p>

              {/* Stats Panel Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="grid grid-cols-3 gap-4 bg-slate-50/70 border border-slate-100 rounded-2xl p-5 mb-8 text-center max-w-lg"
              >
                {[
                  { value: '15,000+', label: 'Students Guided' },
                  { value: '95%', label: 'Visa Success' },
                  { value: '500+', label: 'University Partners' }
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-lg font-black text-primary leading-none">{value}</span>
                    <span className="text-[10px] text-[#64748B] font-bold mt-1.5 leading-snug">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="#leadership"
                  className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-primary hover:bg-secondary transition-all shadow-md shadow-primary/10 hover:-translate-y-0.5"
                >
                  Meet Leadership <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/book-consultation"
                  className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
                >
                  Book Specialist Call
                </a>
              </div>
            </div>

            {/* Right: Full-width editorial image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="lg:w-[460px] flex flex-col justify-center shrink-0"
            >
              <div className="relative h-[250px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80"
                  alt="AtlasPath Team Collaborating"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  AtlasPath Munich Office (Collaborating Advisors)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: LEADERSHIP TEAM ─── */}
      <section id="leadership" className="py-16 bg-slate-50 border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Leadership</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3">Core Leadership Team</h2>
            <p className="text-xs text-slate-400 mt-1">Directing study abroad compliance, admissions verification, and visa operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((leader, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  {/* Photo Container */}
                  <div className="relative h-[200px] w-full rounded-2xl overflow-hidden mb-4 border border-slate-50 shadow-sm">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-350"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[9px] font-bold text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded uppercase">
                      {leader.exp}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-slate-800 leading-none">{leader.name}</h3>
                  <span className="text-[10px] text-primary font-bold mt-1.5 block leading-none">{leader.role}</span>

                  <div className="space-y-2 mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-semibold">
                    <div className="flex items-center justify-between">
                      <span>Specialized Areas</span>
                      <span className="text-slate-800 font-bold">{leader.specialized.join(', ')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Students Guided</span>
                      <span className="text-slate-800 font-bold">{leader.students}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href="/book-consultation"
                    className="flex-grow py-2.5 rounded-xl text-center text-[10px] font-bold text-[#6D4AFF] bg-[#6D4AFF]/6 hover:bg-[#6D4AFF]/12 transition-colors border-0"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: GLOBAL EXPERTS NETWORK ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Specialists Group</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3">Global Experts Network</h2>
            <p className="text-xs text-slate-400 mt-1">Browse study abroad specialists by regional desks or compliance teams</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Category selection list */}
            <div className="w-full lg:w-[260px] flex flex-col gap-2 shrink-0">
              {Object.keys(EXPERTS_BY_CATEGORY).map((catName) => (
                <button
                  key={catName}
                  onClick={() => setActiveCategoryTab(catName)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                    activeCategoryTab === catName
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/10'
                      : 'bg-slate-50 text-slate-600 border-slate-200/50 hover:bg-slate-100'
                  }`}
                >
                  <span>{catName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>

            {/* Category Experts Grid */}
            <div className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm min-h-[300px]">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200/60">
                Active Specialists — {activeCategoryTab}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXPERTS_BY_CATEGORY[activeCategoryTab]?.map((exp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3.5">
                      <img src={exp.img} alt={exp.name} loading="lazy" className="w-10 h-10 rounded-full object-cover border border-slate-150" />
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-800 leading-none">{exp.name}</h4>
                        <span className="text-[9px] text-primary font-bold mt-1.5 block leading-none">{exp.role}</span>
                        <p className="text-[9px] text-[#64748B] font-semibold mt-2 leading-relaxed max-w-[200px]">{exp.expertise}</p>
                      </div>
                    </div>
                    <div className="text-right text-[9px] font-bold text-slate-400 shrink-0 self-start">
                      <span>{exp.exp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOMENTS AT ATLASPATH (DAY IN THE LIFE GALLERY) ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Day In The Life</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3">Moments at AtlasPath</h2>
            <p className="text-xs text-slate-400 mt-1">Summits, collaborations, events, and student visa success milestones</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                alt="Student Consultations"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-primary bg-primary/20 backdrop-blur-md px-2 py-0.5 rounded uppercase">Mentoring</span>
                <h3 className="text-white text-xs font-black mt-1.5">Student Consultations</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80"
                alt="University meetings"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase">Partnerships</span>
                <h3 className="text-white text-xs font-black mt-1.5">University Summits</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80"
                alt="Global Events & Networking"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-amber-400 bg-amber-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase">Global Events</span>
                <h3 className="text-white text-xs font-black mt-1.5">International Education Expo & Networking</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-sm group lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Office Culture & Team Collaboration"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-purple-400 bg-purple-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase">Office Culture</span>
                <h3 className="text-white text-xs font-black mt-1.5">Professional Team Collaboration</h3>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
                alt="Visa success celebrations"
                loading="lazy"
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase">Visa Success</span>
                <h3 className="text-white text-xs font-black mt-1.5">Visa Success Celebrations</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── OUTCOME & GALLERY & JOURNEY DASHBOARD ─── */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Column 1: Placement Outcomes */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 leading-none">Placement Outcomes</h3>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1.5 block">International alumni securing corporate roles post graduation</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { role: 'Software Engineer', pct: '32%', salary: '€62K/YR AVERAGE', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80' },
                    { role: 'Data Scientist', pct: '21%', salary: '€65K/YR AVERAGE', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80' },
                    { role: 'Research Scientist', pct: '16%', salary: '€58K/YR AVERAGE', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&auto=format&fit=crop&q=80' },
                    { role: 'Product Manager', pct: '12%', salary: '€75K/YR AVERAGE', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=120&auto=format&fit=crop&q=80' },
                    { role: 'AI/ML Engineer', pct: '12%', salary: '€70K/YR AVERAGE', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-3">
                      <div className="flex-grow">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                          <span>{item.role}</span>
                          <span>{item.pct}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden mb-1">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: item.pct }} />
                        </div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase">{item.salary}</span>
                      </div>
                      <img src={item.img} alt={item.role} loading="lazy" className="w-12 h-12 rounded-xl object-cover border border-slate-150 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary/6 border border-primary/10 rounded-2xl p-3.5 mt-6">
                <div className="w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-slate-700 font-extrabold">85%+ Alumni placed in top global companies</span>
              </div>
            </div>

            {/* Column 2: Gallery Network */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 leading-none">Gallery Network</h3>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1.5 block">Campus celebrations, university events, student success stories and global education milestones</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Convocation Day — Featured Card */}
                  <div className="col-span-2 relative h-[160px] rounded-2xl overflow-hidden shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&auto=format&fit=crop&q=80"
                      alt="Convocation Day"
                      loading="lazy"
                      onError={handleImgError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[9px] font-bold text-white flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded">
                      🎓 Convocation Day
                    </span>
                  </div>

                  {/* Campus Life */}
                  <div className="relative h-[110px] rounded-2xl overflow-hidden shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&auto=format&fit=crop&q=80"
                      alt="Campus Life"
                      loading="lazy"
                      onError={handleImgError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded">
                      🏛️ Campus Life
                    </span>
                  </div>

                  {/* University Fairs */}
                  <div className="relative h-[110px] rounded-2xl overflow-hidden shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&auto=format&fit=crop&q=80"
                      alt="University Fairs"
                      loading="lazy"
                      onError={handleImgError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded">
                      🎪 University Fairs
                    </span>
                  </div>

                  {/* Alumni Meetups */}
                  <div className="relative h-[110px] rounded-2xl overflow-hidden shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&auto=format&fit=crop&q=80"
                      alt="Alumni Meetups"
                      loading="lazy"
                      onError={handleImgError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded">
                      🤝 Alumni Meetups
                    </span>
                  </div>

                  {/* Visa Approvals */}
                  <div className="relative h-[110px] rounded-2xl overflow-hidden shadow-sm group">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&auto=format&fit=crop&q=80"
                      alt="Visa Approvals"
                      loading="lazy"
                      onError={handleImgError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded">
                      ✓ Visa Approvals
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    {[
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80'
                    ].map((avatar, i) => (
                      <img key={i} className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover shrink-0" src={avatar} alt="Student avatar" loading="lazy" />
                    ))}
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary ring-2 ring-white text-[9px] font-black shrink-0">
                      +1200
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">Join 15,000+ successful students worldwide</span>
                </div>
              </div>
            </div>

            {/* Column 3: Journey Comparison */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-800 leading-none">Journey Comparison</h3>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1.5 block">Real transformations. Real results.</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    { before: 'Confused & Lost', after: 'Clear target shortlists', desc: 'Students move from uncertainty to having a clear list of best-fit universities.' },
                    { before: 'No Scholarship Plan', after: 'Full DAAD/Chevening support', desc: 'We help students secure scholarships worth €10K - €50K.' },
                    { before: 'Complex Document Checklist', after: 'Structured LOR/SOP dossiers', desc: 'We transform confusing requirements into strong, organized applications.' },
                    { before: 'Unstable Visa Ratios', after: '95% visa success approval', desc: 'Our experts ensure a smooth visa process with maximum success.' },
                    { before: 'Unclear Job Endpoints', after: 'Post-study roles at ASML/BMW', desc: 'Students graduate with clarity and land roles in top global companies.' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-[9px] font-bold tracking-wider leading-none">
                        <div className="flex items-center gap-1.5">
                          <span className="text-indigo-600 uppercase">BEFORE: {item.before}</span>
                          <span className="text-slate-400 font-light">&rarr;</span>
                          <span className="text-emerald-600 uppercase">AFTER: {item.after}</span>
                        </div>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3 mt-6">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black text-primary leading-none">95%</span>
                  <span className="text-[9px] text-slate-500 font-bold">Overall student success rate</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION 6: STUDENT TESTIMONIALS ─── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Testimonials</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3">Student Placements</h2>
            <p className="text-xs text-slate-400 mt-1">Verification transcripts showing candidate university entries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.img} alt={review.name} loading="lazy" className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-none">{review.name}</h4>
                      <span className="text-[8px] text-slate-400 font-semibold mt-1 block leading-none">{review.uni}</span>
                    </div>
                  </div>
                  <p className="text-[10px] italic text-slate-500 leading-relaxed font-semibold mb-4">&ldquo;{review.review}&rdquo;</p>
                </div>

                <div className="border-t border-slate-100 pt-3 text-[9px] text-[#64748B] font-bold space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Country</span>
                    <span className="text-slate-800">{review.country}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Outcome</span>
                    <span className="text-emerald-600">{review.outcome.split(' (')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: UNIVERSITY PARTNERSHIPS ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Partnerships</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3">University Logo Wall</h2>
            <p className="text-xs text-slate-400 mt-1">Accredited student placement pathways inside leading global institutes</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { name: 'MIT', location: 'USA', color: 'border-red-100 hover:border-red-400 hover:text-red-600' },
              { name: 'Stanford', location: 'USA', color: 'border-rose-100 hover:border-rose-400 hover:text-rose-600' },
              { name: 'Oxford', location: 'UK', color: 'border-blue-100 hover:border-blue-400 hover:text-blue-600' },
              { name: 'Cambridge', location: 'UK', color: 'border-sky-100 hover:border-sky-400 hover:text-sky-600' },
              { name: 'TUM', location: 'Germany', color: 'border-indigo-100 hover:border-indigo-400 hover:text-indigo-600' },
              { name: 'Toronto', location: 'Canada', color: 'border-red-100 hover:border-red-400 hover:text-red-600' },
              { name: 'Waterloo', location: 'Canada', color: 'border-amber-100 hover:border-amber-400 hover:text-amber-600' },
              { name: 'Melbourne', location: 'Australia', color: 'border-blue-100 hover:border-blue-400 hover:text-blue-600' },
              { name: 'NUS', location: 'Singapore', color: 'border-orange-100 hover:border-orange-400 hover:text-orange-600' },
              { name: 'ETH Zurich', location: 'Switzerland', color: 'border-slate-100 hover:border-slate-400 hover:text-slate-800' }
            ].map((uni, idx) => (
              <div
                key={idx}
                className={`bg-slate-50/50 border rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all cursor-default shadow-sm ${uni.color}`}
              >
                <span className="text-xs font-black tracking-tight">{uni.name}</span>
                <span className="text-[8px] text-slate-400 font-bold uppercase mt-1 tracking-wider leading-none">{uni.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CAREERS AT ATLASPATH ─── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            
            {/* Culture / Benefits */}
            <div className="flex-1">
              <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Careers</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3 mb-5">Join Our Startup Culture</h2>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">
                We are reshaping study abroad counseling. Join a remote-first, energetic team driven by compliance, data transparency, and student outcome success.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Remote-First Flexibility', desc: 'Work from anywhere with core synchronized hours.' },
                  { title: 'Continuous Growth Stipend', desc: 'Annual education budget for certifications or courses.' },
                  { title: 'Comprehensive Medical Coverage', desc: 'Health benefits coverage for team members and dependents.' },
                  { title: 'Annual Global Retreats', desc: 'We gather once a year to align plans, hike, and celebrate.' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs font-semibold text-slate-600">
                    <Heart className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800 leading-none">{benefit.title}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-snug">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="w-full lg:w-[480px] shrink-0 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-5 flex items-center gap-1.5">
                <Briefcase className="w-4.5 h-4.5 text-primary" />
                Open Positions
              </h3>

              <div className="space-y-3.5">
                {[
                  { title: 'Senior Study Advisor', loc: 'Remote &bull; Full-time', action: 'Apply Now' },
                  { title: 'Visa Operations Lead', loc: 'New Delhi (Hybrid) &bull; Full-time', action: 'Apply Now' },
                  { title: 'Scholarship Researcher', loc: 'Munich (Hybrid) &bull; Part-time', action: 'Apply Now' }
                ].map((pos, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-primary/30 transition-colors">
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-800 leading-none">{pos.title}</h4>
                      <span className="text-[8px] text-slate-400 font-semibold mt-1.5 block leading-none" dangerouslySetInnerHTML={{ __html: pos.loc }} />
                    </div>
                    <span
                      className="px-3 py-1.5 rounded-lg text-[9px] font-black text-white bg-primary/60 cursor-not-allowed inline-block"
                    >
                      {pos.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FAQs ACCORDION ─── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-400 mt-1">Answers regarding expert consultants, profile evaluations, and visa checks</p>
          </div>

          <div className="space-y-3 font-sans">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 p-1 bg-slate-100 rounded-lg">
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed font-semibold bg-white border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── READY TO START CALL TO ACTION ─── */}
      <section className="py-16 bg-[#6D4AFF] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="team-cta-grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#team-cta-grid-pattern)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-pretty">
            Ready to Begin Your Journey with Certified Advisors?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8 font-medium">
            Join thousands of successful students who aligned their documentation with expert compliance reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-extrabold text-[#6D4AFF] bg-white hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Strategy Session
            </a>
            <a
              href="/assessment"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-extrabold text-white border border-white/30 hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Start Profile Assessment
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
