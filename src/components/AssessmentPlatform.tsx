import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, Calendar, ArrowRight,
  Compass, DollarSign, Building, Clock, Globe, Users,
  Star, ChevronDown, Check, ShieldCheck, Lock, Sparkles
} from 'lucide-react';

/* ─── STRUCTURAL STEPS ─── */
interface StepOption {
  value: string;
  label: string;
  desc?: string;
  flag?: string;
  icon?: React.ComponentType<any>;
}

const QUALIFICATIONS: StepOption[] = [
  { value: 'bachelors', label: 'Bachelors Degree', desc: 'Currently studying or graduated with an undergrad degree' },
  { value: 'masters', label: 'Masters Degree', desc: 'Postgraduate or research-level profiles' },
  { value: 'highschool', label: 'High School / 12th Grade', desc: 'Completed school and seeking undergrad entry' },
  { value: 'diploma', label: 'Diploma / Other', desc: 'Vocational or customized academic backgrounds' }
];

const COURSES: StepOption[] = [
  { value: 'cs', label: 'Computer Science', desc: 'Software engineering, algorithms, architectures' },
  { value: 'ai', label: 'Artificial Intelligence & ML', desc: 'Deep learning, neural nets, data analytics' },
  { value: 'mba', label: 'Business & MBA', desc: 'Finance, leadership, corporate strategy' },
  { value: 'ds', label: 'Data Science & BI', desc: 'Statistical models, pipeline analytics' },
  { value: 'me', label: 'Mechanical Engineering', desc: 'Thermodynamics, CAD designing, material sciences' },
  { value: 'bio', label: 'Medicine & Health', desc: 'Biomedical, pharmacy, healthcare structures' }
];

const BUDGETS: StepOption[] = [
  { value: 'low', label: 'Under ₹10 Lakhs', desc: 'Focus on public universities with low or zero tuition fees' },
  { value: 'mid', label: '₹10–20 Lakhs', desc: 'Moderate tuition fees or study destinations with moderate living costs' },
  { value: 'high', label: '₹20–30 Lakhs', desc: 'Public or private universities in major destinations' },
  { value: 'premium', label: '₹30 Lakhs+', desc: 'Private institutions or premium global universities' }
];

const COUNTRIES: StepOption[] = [
  { value: 'germany', label: 'Germany', flag: '🇩🇪', desc: 'Tuition-free public track, high engineering scope' },
  { value: 'canada', label: 'Canada', flag: '🇨🇦', desc: 'Favorable PGWP, direct permanent residency pathways' },
  { value: 'australia', label: 'Australia', flag: '🇦🇺', desc: 'Warm climate, 2-4 years post-study rights' },
  { value: 'uk', label: 'United Kingdom', flag: '🇬🇧', desc: '1-year fast master degrees, high graduate market' },
  { value: 'usa', label: 'United States', flag: '🇺🇸', desc: 'Silicon valley tech hubs, premium university rankings' },
  { value: 'ireland', label: 'Ireland', flag: '🇮🇪', desc: 'European tech HQ, student-friendly English core' }
];

const ENGLISH_TESTS: StepOption[] = [
  { value: 'ielts', label: 'IELTS Academic', desc: 'Standardized global English benchmark' },
  { value: 'toeft', label: 'TOEFL iBT', desc: 'Internet-based English capability review' },
  { value: 'pte', label: 'PTE Academic', desc: 'Computerized academic test' },
  { value: 'not_taken', label: 'Not Taken Yet', desc: 'Planning to write or seeking English waivers' }
];

/* ─── UNIVERSITY MATCHES DATA ─── */
interface UniMatch {
  name: string;
  qsRank: number;
  matchScore: number;
  programs: number;
  avgTuition: string;
  image: string;
  shortName: string;
}

const UNIVERSITIES: UniMatch[] = [
  { name: 'Technical University of Munich', qsRank: 28, matchScore: 95, programs: 150, avgTuition: '€0 - €3,000 / yr', shortName: 'TUM', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop&q=80' },
  { name: 'RWTH Aachen University', qsRank: 99, matchScore: 92, programs: 130, avgTuition: '€0 - €1,500 / yr', shortName: 'RWTH', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80' },
  { name: 'Karlsruhe Institute of Technology', qsRank: 107, matchScore: 91, programs: 120, avgTuition: '€0 - €1,500 / yr', shortName: 'KIT', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80' },
  { name: 'Heidelberg University', qsRank: 87, matchScore: 90, programs: 180, avgTuition: '€1,000 - €3,000 / yr', shortName: 'HD', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80' }
];

/* ─── SCHOLARSHIP MATCHES DATA ─── */
interface ScholMatch {
  name: string;
  funding: string;
  status: 'Highly Matched' | 'Matched';
  country: string;
}

const SCHOLARSHIPS: ScholMatch[] = [
  { name: 'DAAD Scholarship', funding: 'Up to €12,000 / year', status: 'Highly Matched', country: 'Germany' },
  { name: 'Deutschlandstipendium', funding: '€300 / month stipend', status: 'Highly Matched', country: 'Germany' },
  { name: 'Erasmus+ Scholarship', funding: 'Up to €12,000 total', status: 'Matched', country: 'Europe' },
  { name: 'Heinrich Böll Foundation', funding: 'Up to €850 / month stipend', status: 'Matched', country: 'Germany' }
];

/* ─── FAQs DATA ─── */
const FAQS = [
  { q: 'How accurate is the AtlasPath assessment?', a: 'Our matching engine yields a 95% success rate. The recommendations are generated by analyzing historical admission thresholds, visa guidelines, blocked account criteria, and real-time scholarship deadlines across 500+ global partner universities.' },
  { q: 'Will my assessment data be kept confidential?', a: 'Yes. All data entered during the assessment is encrypted and securely processed in compliance with data privacy regulations. We never sell your personal profile data.' },
  { q: 'What if I haven\'t taken the IELTS or TOEFL exam yet?', a: 'No problem! You can select "Not Taken Yet" in the English test step. Our engine will estimate your options using academic backgrounds (such as Medium of Instruction certificates) or direct pathways that accept waiver policies.' },
  { q: 'Is the assessment platform completely free to use?', a: 'Yes! The multi-step assessment, live dashboard matching calculations, and core results display are 100% free to help students plan their roadmap.' },
  { q: 'Can I retake the assessment if my grades or budget change?', a: 'Yes, you can retake the assessment as many times as you like. Toggling different options in the form recalculates your country and university matches instantly.' },
  { q: 'Can I speak to an expert after completing the assessment?', a: 'Absolutely. On the results dashboard, you can click "Book Consultation" to speak with a study abroad advisor who can review your profile, verify requirements, and guide your application.' },
  { q: 'How long does the assessment take to complete?', a: 'The assessment takes only 3 to 5 minutes. Answering all questions thoroughly helps our AI engine calculate the most precise matching scores.' },
  { q: 'Do I need to create an account to view my results?', a: 'No, you can complete the questions and view your live matching overview instantly. To download the comprehensive PDF report detailing specific university guidelines, we require entering a valid email address.' },
  { q: 'Will the results suggest fully funded scholarships?', a: 'Yes! Based on your academic record (CGPA), target country, and preferred course, our system displays matching scholarships (e.g. DAAD, Chevening, Fulbright) alongside their funding amounts.' },
  { q: 'Can the assessment predict my visa success rate?', a: 'While we cannot guarantee approvals, our "Visa Readiness" score evaluates parameters like your blocked account coverage, target country success history, and test compliance to estimate your preparation rating.' },
  { q: 'What happens if my CGPA is below the requirement?', a: 'If your CGPA is lower (e.g. below 7.0/10), our system will suggest study destinations or private universities that have flexible thresholds, rather than highly competitive public ones.' },
  { q: 'Does the calculator include living expenses?', a: 'Yes, the budget matching logic factors in both university tuition fees and estimated local monthly living costs (housing, transport, utilities) to suggest suitable pathways.' },
  { q: 'Are research-based degrees like PhDs covered in this assessment?', a: 'Yes, selecting "Masters Degree" or "PhD/Research" in the qualifications step activates specific PhD matching parameters, prioritizing institutions with research stipends.' },
  { q: 'Does the system suggest programs taught in English?', a: 'Yes. The default parameters assume international tracks taught in English. If you have German language skills (A1-B2), you can configure those to unlock even more public university options.' },
  { q: 'How often are university rankings and tuition fees updated?', a: 'Our databases are updated monthly. The tuition bands, QS world rankings, and scholarship deadlines are reviewed regularly to align with active 2026/2027 guidelines.' }
];

export const AssessmentPlatform: React.FC = () => {
  /* ─── STEP STATE MACHINE ─── */
  const [activeStep, setActiveStep] = useState(1);
  const [qualification, setQualification] = useState('bachelors');
  const [fieldOfStudy, setFieldOfStudy] = useState('cs');
  const [cgpa, setCgpa] = useState('8.5');
  const [gradYear, setGradYear] = useState('2026');
  const [budget, setBudget] = useState('low');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['germany']);
  const [englishTest, setEnglishTest] = useState('ielts');
  const [emailInput, setEmailInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Form completion indicator
  const formProgress = useMemo(() => {
    return Math.round(((activeStep - 1) / 5) * 100);
  }, [activeStep]);

  // Live Score Calculator based on form states
  const liveScores = useMemo(() => {
    // Basic dynamic calculations
    const baseCgpa = parseFloat(cgpa) || 7.0;
    const universityMatch = Math.min(60 + Math.round(baseCgpa * 4), 98);
    const countryMatch = selectedCountries.length > 0 ? 80 + selectedCountries.length * 3 : 75;
    const scholarshipMatch = baseCgpa >= 8.5 ? 88 : baseCgpa >= 7.5 ? 65 : 40;
    const visaReadiness = englishTest !== 'not_taken' ? 92 : 68;
    const careerPotential = fieldOfStudy === 'cs' || fieldOfStudy === 'ai' ? 95 : 85;

    const overallScore = Math.round((universityMatch + countryMatch + scholarshipMatch + visaReadiness + careerPotential) / 5);

    return {
      overallScore,
      universityMatch,
      countryMatch: Math.min(countryMatch, 99),
      scholarshipMatch,
      visaReadiness,
      careerPotential
    };
  }, [cgpa, selectedCountries, englishTest, fieldOfStudy]);

  const handleCountryToggle = (code: string) => {
    setSelectedCountries(prev => {
      if (prev.includes(code)) {
        return prev.filter(x => x !== code);
      }
      return [...prev, code];
    });
  };

  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(prev => prev + 1);
    } else {
      // Final submission trigger - show results
      setIsUnlocked(true);
      setActiveStep(6);
    }
  };

  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      
      {/* ─── HERO SECTION ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* World Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="assess-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#assess-grid)" />
          </svg>
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold">AI Assessment</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            
            {/* Left: Heading + Stats */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 self-start mb-4 bg-primary/8 border border-primary/12 rounded-full px-3 py-1 text-[10px] font-bold text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                AI-POWERED MATCHING
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Discover Your Perfect
                <br />
                <span className="font-serif italic font-normal text-primary">
                  Study Abroad Path
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-xl text-pretty"
              >
                Answer a few questions and receive personalized country, university and scholarship recommendations tailored just for you.
              </motion.p>

              {/* Stats Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-3 gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-md"
              >
                {[
                  { value: '95%', label: 'Success Rate' },
                  { value: '15,000+', label: 'Students Guided' },
                  { value: '500+', label: 'UniversitiesMatched' }
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <span className="text-lg font-black text-primary leading-none block">{value}</span>
                    <span className="text-[9px] text-[#64748B] font-bold mt-1 block leading-snug">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Middle: Miniature Form Preview */}
            <div className="w-full lg:w-[350px] shrink-0 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Assessment Preview</span>
                  <span className="text-[10px] font-bold text-primary bg-primary/6 px-2 py-0.5 rounded">60% Done</span>
                </div>
                <p className="text-xs font-bold text-[#0F172A] mb-3">What is your preferred field of study?</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {['Computer Science', 'Business & MBA', 'Data Science', 'Engineering'].map((opt) => (
                    <div
                      key={opt}
                      className={`p-3 rounded-xl border text-center text-[10px] font-bold transition-all cursor-pointer ${
                        opt === 'Computer Science' ? 'border-primary bg-primary/6 text-primary' : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100/60'
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase">Step 2 of 5</span>
                <a href="/assessment" className="text-[10px] font-bold text-primary flex items-center gap-0.5 hover:translate-x-0.5 transition-transform">
                  Start Form <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Matches Miniature Preview */}
            <div className="w-full lg:w-[260px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Live Matches</h3>
                <div className="space-y-3">
                  {[
                    { country: 'Germany', match: '92% Match', flag: '🇩🇪' },
                    { country: 'Canada', match: '88% Match', flag: '🇨🇦' },
                    { country: 'Australia', match: '83% Match', flag: '🇦🇺' },
                    { country: 'United Kingdom', match: '78% Match', flag: '🇬🇧' }
                  ].map((c) => (
                    <div key={c.country} className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-200/50 last:border-0 last:pb-0">
                      <span className="text-slate-800 font-extrabold flex items-center gap-1.5">
                        <span>{c.flag}</span>
                        {c.country}
                      </span>
                      <span className="text-emerald-600 font-bold">{c.match}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/assessment" className="text-[10px] font-black text-primary hover:text-secondary mt-5 flex items-center gap-0.5">
                See Full Results <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MULTI-STEP PLANNER & LIVE SCOREPANEL (SIDE-BY-SIDE) ─── */}
      <section id="assessment-start" className="py-14 bg-slate-50 border-t border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            
            {/* Step Navigator Sidebar */}
            <div className="w-full lg:w-[240px] shrink-0">
              <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm sticky top-24">
                <div className="mb-5 pb-3 border-b border-slate-100">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest leading-none">Assessment Journey</h3>
                  <span className="text-[9px] text-[#64748B] font-bold mt-1.5 block">Takes only 3-5 minutes</span>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 1, label: 'Academic Background', desc: 'Tell us about your education' },
                    { id: 2, label: 'Preferred Course', desc: 'Choose your field of study' },
                    { id: 3, label: 'Budget Range', desc: 'Select your budget range' },
                    { id: 4, label: 'Preferred Countries', desc: 'Select your dream countries' },
                    { id: 5, label: 'English Proficiency', desc: 'Your English test status' },
                    { id: 6, label: 'Additional Info', desc: 'A few more details' }
                  ].map((step) => {
                    const active = activeStep === step.id;
                    const done = activeStep > step.id;
                    return (
                      <div key={step.id} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          active ? 'bg-primary text-white' : done ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {done ? <Check className="w-3.5 h-3.5" /> : step.id}
                        </div>
                        <div>
                          <p className={`text-[11px] font-bold leading-none ${active ? 'text-primary' : done ? 'text-slate-800' : 'text-slate-400'}`}>
                            {step.label}
                          </p>
                          <span className="text-[9px] text-slate-400 font-semibold mt-1 block leading-snug">{step.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Form Area Panel */}
            <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[400px]">
              
              {/* Form Content */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3.5 border-b border-slate-50">
                  <span className="text-xs font-bold text-primary">Step {activeStep} of 6</span>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${formProgress}%` }} />
                  </div>
                </div>

                {activeStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">Academic Background</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Current Qualification</label>
                        <select
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-0"
                        >
                          {QUALIFICATIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Field of Study</label>
                        <select
                          value={fieldOfStudy}
                          onChange={(e) => setFieldOfStudy(e.target.value)}
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-0"
                        >
                          {COURSES.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">CGPA / Percentage</label>
                        <input
                          type="text"
                          value={cgpa}
                          onChange={(e) => setCgpa(e.target.value)}
                          placeholder="e.g. 8.5"
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
                        />
                        <span className="text-[9px] text-slate-400 mt-1 block">Specify out of 10.0 scale or percentage</span>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Graduation Year</label>
                        <input
                          type="text"
                          value={gradYear}
                          onChange={(e) => setGradYear(e.target.value)}
                          placeholder="e.g. 2026"
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">Preferred Course</h3>
                    <p className="text-xs text-slate-500 font-semibold mb-4">Select the discipline you plan to pursue abroad</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {COURSES.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => setFieldOfStudy(opt.value)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            fieldOfStudy === opt.value
                              ? 'border-primary bg-primary/6 text-primary'
                              : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600'
                          }`}
                        >
                          <p className="text-xs font-bold">{opt.label}</p>
                          <p className="text-[10px] text-slate-400 font-semibold mt-1">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">Budget Capacity</h3>
                    <p className="text-xs text-slate-500 font-semibold mb-4">Estimate your total tuition & living budget per year</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {BUDGETS.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => setBudget(opt.value)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            budget === opt.value
                              ? 'border-primary bg-primary/6 text-primary'
                              : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600'
                          }`}
                        >
                          <p className="text-xs font-bold">{opt.label}</p>
                          <p className="text-[10px] text-slate-400 font-semibold mt-1">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">Dream Countries</h3>
                    <p className="text-xs text-slate-500 font-semibold mb-4">Select all target study destinations you wish to analyze</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {COUNTRIES.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => handleCountryToggle(opt.value)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            selectedCountries.includes(opt.value)
                              ? 'border-primary bg-primary/6 text-primary'
                              : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{opt.flag}</span>
                            <div>
                              <p className="text-xs font-bold">{opt.label}</p>
                              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{opt.desc}</p>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            selectedCountries.includes(opt.value) ? 'bg-primary border-primary text-white' : 'border-slate-200 bg-white'
                          }`}>
                            {selectedCountries.includes(opt.value) && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">English Proficiency Test</h3>
                    <p className="text-xs text-slate-500 font-semibold mb-4">Let us know if you have written or planned language benchmarks</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {ENGLISH_TESTS.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => setEnglishTest(opt.value)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            englishTest === opt.value
                              ? 'border-primary bg-primary/6 text-primary'
                              : 'border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600'
                          }`}
                        >
                          <p className="text-xs font-bold">{opt.label}</p>
                          <p className="text-[10px] text-slate-400 font-semibold mt-1">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 6 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight">Additional Details</h3>
                    <p className="text-xs text-slate-500 font-semibold mb-4">A few final indicators to generate your study reports</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Work Experience Years</label>
                        <select
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none"
                        >
                          <option>None (Fresher)</option>
                          <option>1–2 Years</option>
                          <option>3+ Years</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Standardized Entrance (GRE/GMAT)</label>
                        <select
                          className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none"
                        >
                          <option>Not Taken / Not Required</option>
                          <option>Planning to take</option>
                          <option>Score available</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Form Actions Footer */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <button
                  onClick={handleBackStep}
                  disabled={activeStep === 1}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                    activeStep === 1 ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Back
                </button>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" /> Answers secure
                  </span>
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors"
                  >
                    {activeStep === 6 ? 'View Matching Dashboard' : 'Continue'}
                  </button>
                </div>
              </div>

            </div>

            {/* Real-time Score Panel Sidebar */}
            <div className="w-full lg:w-[280px] shrink-0">
              <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm sticky top-24 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1.5">Live Score Card</h3>
                  <p className="text-[10px] text-slate-400 font-semibold mb-6">Updates dynamically as you supply credentials</p>

                  {/* Circular Match Score Dial */}
                  <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle cx="64" cy="64" r="54" className="stroke-slate-100 fill-none" strokeWidth="8" />
                      <circle
                        cx="64"
                        cy="64"
                        r="54"
                        className="stroke-primary fill-none transition-all duration-500"
                        strokeWidth="8"
                        strokeDasharray={339.29}
                        strokeDashoffset={339.29 - (339.29 * liveScores.overallScore) / 100}
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-[25px] font-black text-slate-800 block leading-none">{liveScores.overallScore}%</span>
                      <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider mt-1 block">Match Rating</span>
                    </div>
                  </div>

                  {/* Score Breakdowns */}
                  <div className="space-y-3.5">
                    {[
                      { label: 'Country Match', val: liveScores.countryMatch },
                      { label: 'University Match', val: liveScores.universityMatch },
                      { label: 'Scholarship Match', val: liveScores.scholarshipMatch },
                      { label: 'Visa Readiness', val: liveScores.visaReadiness },
                      { label: 'Career Potential', val: liveScores.careerPotential }
                    ].map((row) => (
                      <div key={row.label} className="text-xs font-semibold">
                        <div className="flex items-center justify-between text-slate-600 mb-1">
                          <span>{row.label}</span>
                          <span className="text-[#0F172A] font-extrabold">{row.val}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${row.val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── AI RECOMMENDATION ENGINE (POST-COMPLETION PORTAL) ─── */}
      {isUnlocked && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-primary/8 text-[9px] font-bold text-primary uppercase tracking-wider">Evaluation Portal</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-2.5">Your Match Analytics Engine</h2>
            </div>
            <span className="text-xs font-bold text-slate-400">Analysis completed 2026/2027</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-8">
            {/* Box 1: Best Country */}
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Recommended Study Hub</span>
                <div className="flex items-center gap-2 mt-2 mb-4">
                  <span className="text-3xl">🇩🇪</span>
                  <h3 className="text-lg font-black text-[#0F172A]">Germany</h3>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2">92% Match</span>
                </div>
                <div className="space-y-2 text-xs font-semibold text-slate-600">
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Low tuition fees at public universities</p>
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> 18-month post-study work visa grant</p>
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Strong industrial core (Automotive, AI)</p>
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> High visa success rates (94%+ for Germany)</p>
                </div>
              </div>
              <a href="/countries/germany" className="mt-6 w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors">
                Explore Germany
              </a>
            </div>

            {/* Box 2: Country Stats Sheet */}
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest text-slate-400">Why Germany fits?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Avg Tuition Fees', val: '€0 - €3,000 / year' },
                  { label: 'Living Costs', val: '€10,200 - €12,000 / year' },
                  { label: 'Visa Success Rate', val: '94%' },
                  { label: 'Post Study Work Rights', val: '18 Months' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider leading-none">{stat.label}</span>
                    <span className="text-xs font-black text-slate-800 mt-2 block leading-none">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Other Country Recommendations */}
            <div className="w-full lg:w-[280px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest text-slate-400 mb-4">Other Matches</h3>
                <div className="space-y-3.5 text-xs font-semibold">
                  {[
                    { flag: '🇨🇦', country: 'Canada', match: '88% Match' },
                    { flag: '🇦🇺', country: 'Australia', match: '83% Match' },
                    { flag: '🇬🇧', country: 'United Kingdom', match: '78% Match' },
                    { flag: '🇮🇪', country: 'Ireland', match: '72% Match' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-200 last:border-0 last:pb-0">
                      <span className="text-slate-800 font-extrabold flex items-center gap-2">
                        <span>{item.flag}</span>
                        {item.country}
                      </span>
                      <span className="text-emerald-600 font-bold">{item.match}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/countries" className="text-xs font-bold text-primary hover:text-secondary text-center block mt-4">
                View All Countries &rarr;
              </a>
            </div>

            {/* Unlock Full Report Card */}
            <div className="w-full lg:w-[300px] shrink-0 bg-primary/6 border border-primary/10 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-primary tracking-tight mb-3">Unlock Full Report</h3>
                <div className="space-y-2 text-[11px] text-slate-600 font-semibold mb-6">
                  <p className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> Detailed university matches</p>
                  <p className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> Tailored scholarship advice</p>
                  <p className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> Monthly expense budgets</p>
                  <p className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> Visa process timelines</p>
                </div>
              </div>

              <div>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full text-xs font-bold text-[#0f172a] placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl p-3 mb-2.5 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => alert(`Full report sent to: ${emailInput}`)}
                  className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors"
                >
                  Unlock Report Brochure
                </button>
              </div>
            </div>

          </div>

          {/* Matches grid for Universities and Scholarships */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Matching Universities */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-5">
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">University Placement Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {UNIVERSITIES.map((uni, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-[10px] flex items-center justify-center shrink-0">
                          {uni.shortName}
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-800 leading-none">{uni.name}</h4>
                          <span className="text-[9px] text-slate-400 font-semibold mt-1 block">QS Global Rank: #{uni.qsRank}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold py-2 bg-slate-50/70 rounded-xl px-2.5 mb-3 border border-slate-100/50">
                        <div>
                          <span>Match Score</span>
                          <span className="font-extrabold text-emerald-600 block mt-0.5">{uni.matchScore}%</span>
                        </div>
                        <div>
                          <span>Avg Tuition</span>
                          <span className="font-extrabold text-slate-700 block mt-0.5">{uni.avgTuition.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                    <a href="/universities" className="text-[10px] font-bold text-primary hover:text-secondary text-center block pt-2 border-t border-slate-50">
                      View Details &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Scholarships */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Scholarship Opportunities</h3>
                <div className="space-y-3.5">
                  {SCHOLARSHIPS.map((schol, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 leading-none">{schol.name}</h4>
                        <p className="text-[9px] text-slate-400 font-semibold mt-1">Country Target: {schol.country}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-bold text-slate-400 block">{schol.funding}</span>
                        <span className="inline-block text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                          {schol.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a href="/scholarships" className="text-xs font-bold text-primary hover:text-secondary text-center mt-5">
                Explore All Scholarships &rarr;
              </a>
            </div>

          </div>
        </motion.section>
      )}

      {/* ─── CORE STATISTICS BANNER ─── */}
      <section className="py-10 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            {[
              { value: '15,000+', label: 'Students Guided', icon: Users },
              { value: '500+', label: 'University Partners', icon: Building },
              { value: '95%', label: 'Visa Success Rate', icon: CheckCircle },
              { value: '₹500Cr+', label: 'Scholarships Secured', icon: DollarSign },
              { value: '50+', label: 'Countries Covered', icon: Globe },
              { value: '4.9/5', label: 'Student Satisfaction', icon: Star }
            ].map(({ value, label, icon: Icon }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5">
                <Icon className="w-5 h-5 text-primary mb-0.5" />
                <span className="text-lg font-black text-slate-800 leading-none">{value}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP, TESTIMONIALS, AND VALUE PROP (3-COLUMN GRID) ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Roadmap */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 tracking-tight mb-5">Your Study Abroad Roadmap</h3>
            <div className="relative border-l border-slate-100 ml-2 pl-4 space-y-4 text-xs font-semibold text-slate-600">
              {[
                { title: 'Shortlist Universities', desc: 'Identify target courses matching grade criteria' },
                { title: 'Prepare & Apply', desc: 'Write SOP, solicit academic references, submit dossier' },
                { title: 'Secure Scholarships', desc: 'Submit funding portfolios (like DAAD or university grants)' },
                { title: 'Visa Preparation', desc: 'Complete block account deposits, schedule interview slots' },
                { title: 'Pre-Departure checks', desc: 'Purchase air tickets, arrange student hostels' },
                { title: 'Arrive & Thrive', desc: 'Land in your destination and begin your classes' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-white" />
                  <h4 className="text-[11px] font-bold text-slate-800 leading-none">{step.title}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Success Stories */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-5">Student Success Stories</h3>
              <div className="space-y-4">
                {[
                  { name: 'Arjun Patel', schol: 'DAAD Scholar', text: 'AtlasPath structured my admission documents and blocked account deposits. Today I\'m studying engineering in Munich!', initials: 'AP', color: 'bg-[#6D4AFF]' },
                  { name: 'Sneha Kapoor', schol: 'Vanier Scholar', text: 'The mock interview guidance and profile evaluation helped me secure Canada\'s premier research grant.', initials: 'SK', color: 'bg-emerald-600' },
                  { name: 'Rohan Mehta', schol: 'Chevening Scholar', text: 'Highly structural guidance. My mentor helped refine my essays, which was critical for the UK interview success.', initials: 'RM', color: 'bg-amber-600' }
                ].map((s, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-7 h-7 rounded-full ${s.color} text-white font-extrabold text-[10px] flex items-center justify-center shrink-0`}>
                        {s.initials}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-800 leading-none">{s.name}</h4>
                        <span className="text-[8px] text-slate-400 font-semibold mt-0.5 block">{s.schol}</span>
                      </div>
                    </div>
                    <p className="text-[10px] italic text-slate-500 font-semibold leading-relaxed">&ldquo;{s.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Why Assessment? */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-5">Why Take AtlasPath Assessment?</h3>
              <div className="space-y-4 text-xs font-semibold text-slate-600">
                {[
                  { title: 'AI-Powered Matching', desc: 'Advanced algorithms parse through thousands of university guidelines to identify high-conversion matches.', icon: Sparkles },
                  { title: 'Transparent & Accurate', desc: 'No biased recommendations. All scores align strictly with actual CGPA, budget, and test criteria.', icon: ShieldCheck },
                  { title: 'Save Time & Money', desc: 'Avoid expensive consultancy fees and application mistakes. Know your path before spending a rupee.', icon: Clock },
                  { title: 'End-to-End Guidance', desc: 'From the initial shortlist to visa approvals and flight booking support, we are with you.', icon: Compass }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800 leading-none">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FAQs ACCORDION (15 FAQs) ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-400 mt-1">Get precise answers about match calculations, requirements, and advisors</p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300">
                <label htmlFor={`assess-faq-${idx}`} className="w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/20 hover:bg-slate-50 select-none">
                  <span className="text-xs font-bold text-slate-800 leading-snug">{faq.q}</span>
                  <span className="text-slate-400 shrink-0">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </label>
                <input type="checkbox" id={`assess-faq-${idx}`} className="peer hidden" />
                <div className="max-h-0 overflow-hidden peer-checked:max-h-96 transition-all duration-300 bg-white border-t border-slate-100">
                  <p className="p-4 text-xs leading-relaxed text-[#64748B] font-medium text-pretty">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="assess-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#assess-cta-grid)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Get Evaluated
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight">
            Ready to Take the Next Step?<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Complete Your Profile Evaluation
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
            Answer a few quick questions, compare matched public options, estimate your budget requirements, and map your study roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="/universities"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5"
            >
              <Building className="w-4 h-4 text-primary" />
              <span>Explore Universities</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
