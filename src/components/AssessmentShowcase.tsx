import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ClipboardList, RefreshCw, Download, ArrowRight, Sparkles } from 'lucide-react';

export const AssessmentShowcase: React.FC = () => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState('Master');
  const [field, setField] = useState('Computer Science');
  const [gpa, setGpa] = useState(8.8);
  const [englishScore, setEnglishScore] = useState(7.5);
  const [budget, setBudget] = useState('Medium');
  
  // Results states
  const [readinessScore, setReadinessScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Trigger recalculation on inputs change
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      // Simple logic to calculate readiness score
      let score = 60;
      if (degree === 'Master') score += 5;
      if (field === 'Computer Science') score += 5;
      score += Math.round((gpa / 10) * 20); // GPA out of 10
      score += Math.round((englishScore / 9) * 10); // IELTS out of 9
      if (budget === 'Medium' || budget === 'High') score += 5;
      
      setReadinessScore(Math.min(score, 99));
      setIsCalculating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [degree, field, gpa, englishScore, budget]);

  const handleDownload = () => {
    setDownloadState('loading');
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 3000);
    }, 1500);
  };

  const countries = [
    { name: 'Germany', baseMatch: 96, flag: '🇩🇪', intake: 'Winter/Summer', visaTime: '6-8 weeks' },
    { name: 'Canada', baseMatch: 92, flag: '🇨🇦', intake: 'Fall/Winter', visaTime: '4-6 weeks' },
    { name: 'Ireland', baseMatch: 88, flag: '🇮🇪', intake: 'Autumn/Spring', visaTime: '8-10 weeks' },
  ];

  return (
    <section id="assessment" className="py-24 bg-surface px-4 sm:px-6 lg:px-8 border-y border-slate-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3 h-3" />
            Interactive Assessment Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty mb-4">
            Evaluate Your Global Readiness.
          </h2>
          <p className="text-base sm:text-lg text-muted text-pretty">
            Answer a few key profile questions to simulate your matching rate, calculate readiness metrics, and see matching destinations instantly.
          </p>
        </div>

        {/* Software Frame (Mac OS Browser Mockup) */}
        <div className="bg-white border border-slate-200 rounded-[24px] shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Windows Titlebar */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
            </div>
            <div className="mx-auto bg-white border border-slate-200 text-xs text-muted font-medium py-1 px-12 rounded-lg truncate w-full max-w-sm text-center">
              app.atlaspath.com/assessment/readiness-evaluator
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Column: Input Form (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
              
              {/* Stepper Progress */}
              <div>
                <div className="flex items-center justify-between text-xs text-muted font-bold mb-4 uppercase tracking-wider">
                  <span>Step {step} of 3</span>
                  <span>{step === 1 ? 'Academic Level' : step === 2 ? 'Test Scores' : 'Preferences'}</span>
                </div>
                
                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-8">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                {/* Wizard Steps */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col gap-4"
                      >
                        <h4 className="text-sm font-bold text-text mb-2">What is your academic profile?</h4>
                        <div>
                          <label className="block text-xs font-semibold text-muted mb-2 uppercase tracking-wide">Target Degree</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Bachelor', 'Master'].map((d) => (
                              <button
                                key={d}
                                onClick={() => setDegree(d)}
                                className={`py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                                  degree === d 
                                    ? 'border-primary bg-primary/5 text-primary' 
                                    : 'border-slate-200 hover:border-slate-300 text-text'
                                }`}
                              >
                                {d}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-muted mb-2 uppercase tracking-wide">Field of Study</label>
                          <select
                            value={field}
                            onChange={(e) => setField(e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold text-text focus:ring-0 focus:border-transparent outline-none"
                          >
                            <option value="Computer Science">Computer Science</option>
                            <option value="Business Administration">Business Administration</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Biomedical Science">Biomedical Science</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col gap-4"
                      >
                        <h4 className="text-sm font-bold text-text mb-2">Enter your academic scores</h4>
                        <div>
                          <div className="flex justify-between text-xs font-semibold text-muted mb-2 uppercase tracking-wide">
                            <span>GPA / Percentage Score</span>
                            <span className="text-primary font-bold">{gpa} / 10.0</span>
                          </div>
                          <input
                            type="range"
                            min="6.0"
                            max="10.0"
                            step="0.1"
                            value={gpa}
                            onChange={(e) => setGpa(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-slate-100 accent-primary rounded-lg appearance-none cursor-pointer"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-semibold text-muted mb-2 uppercase tracking-wide">
                            <span>IELTS / Equivalent Score</span>
                            <span className="text-primary font-bold">{englishScore} / 9.0</span>
                          </div>
                          <input
                            type="range"
                            min="5.5"
                            max="9.0"
                            step="0.5"
                            value={englishScore}
                            onChange={(e) => setEnglishScore(parseFloat(e.target.value))}
                            className="w-full h-1.5 bg-slate-100 accent-primary rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col gap-4"
                      >
                        <h4 className="text-sm font-bold text-text mb-2">Configure budget limits</h4>
                        <div>
                          <label className="block text-xs font-semibold text-muted mb-2 uppercase tracking-wide">Financial Budget Priority</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['Low', 'Medium', 'High'].map((b) => (
                              <button
                                key={b}
                                onClick={() => setBudget(b)}
                                className={`py-3.5 px-2 rounded-xl border text-xs font-bold transition-all ${
                                  budget === b 
                                    ? 'border-primary bg-primary/5 text-primary' 
                                    : 'border-slate-200 hover:border-slate-300 text-text'
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Wizard Nav */}
              <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-6">
                <button
                  onClick={() => setStep(prev => Math.max(1, prev - 1))}
                  disabled={step === 1}
                  className={`text-xs font-bold px-4 py-2.5 rounded-full border transition-all ${
                    step === 1 
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                      : 'border-slate-200 hover:bg-slate-50 text-text'
                  }`}
                >
                  Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={() => setStep(prev => Math.min(3, prev + 1))}
                    className="flex items-center gap-1.5 text-xs font-bold bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-primary/10"
                  >
                    <span>Next step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="/book-consultation"
                    className="flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-500/10"
                  >
                    <span>Book Free Consultation</span>
                    <Check className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Calculations & Preview (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider">Live Evaluation Report</h4>
                  {isCalculating ? (
                    <span className="flex items-center gap-1.5 text-xs text-primary font-bold">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Recalculating…
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Active
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  {/* Readiness Score circular graphic */}
                  <div className="sm:col-span-5 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold uppercase text-muted tracking-wider mb-4">Readiness Score</span>
                    
                    {/* Ring score */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                        {/* Background Path */}
                        <path
                          className="text-slate-100"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Foreground Score Ring */}
                        <motion.path
                          className="text-primary"
                          strokeWidth="2.5"
                          strokeDasharray={`${readinessScore}, 100`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${readinessScore}, 100` }}
                          transition={{ duration: 0.5 }}
                        />
                      </svg>
                      {/* Central number */}
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-2xl font-extrabold tracking-tight text-text">{readinessScore}%</span>
                        <span className="text-[8px] text-emerald-600 font-bold uppercase">Qualified</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="sm:col-span-7 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                    <span className="text-[10px] font-bold uppercase text-muted tracking-wider mb-3">Country Recommendations</span>
                    
                    <div className="flex flex-col gap-3">
                      {countries.map((c, idx) => {
                        // Dynamically tweak matching rate slightly according to IELTS and GPA
                        const offset = Math.round((gpa - 8.5) * 4 + (englishScore - 7.5) * 5);
                        const matchRate = Math.min(Math.max(c.baseMatch + offset, 45), 99);
                        
                        return (
                          <div key={c.name} className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-xs font-semibold text-text">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm" aria-hidden="true">{c.flag}</span>
                                <span>{c.name}</span>
                              </div>
                              <span className="text-primary font-bold">{matchRate}% match</span>
                            </div>
                            
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${matchRate}%` }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Download mockup block */}
              <div className="mt-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 flex-shrink-0">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-text">Full Evaluation Report.pdf</h5>
                    <p className="text-[10px] text-muted">Complete breakdown of {degree} matched courses</p>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={downloadState !== 'idle'}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all w-full sm:w-auto justify-center ${
                    downloadState === 'loading'
                      ? 'bg-slate-100 text-slate-400 cursor-wait'
                      : downloadState === 'success'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-text hover:bg-slate-800 text-white shadow-md'
                  }`}
                >
                  {downloadState === 'loading' ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Generating…</span>
                    </>
                  ) : downloadState === 'success' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Report</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
