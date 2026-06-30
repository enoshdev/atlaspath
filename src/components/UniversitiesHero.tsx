import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, School, Globe } from 'lucide-react';

const searchExamples = [
  'Computer Science, Germany',
  'MBA, Canada',
  'Artificial Intelligence, UK',
  'Data Science, Australia',
  'Engineering, USA',
];

export const UniversitiesHero: React.FC = () => {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [exampleIdx, setExampleIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    const text = searchExamples[exampleIdx];
    const typeTimer = setInterval(() => {
      charIdx++;
      setPlaceholder(text.slice(0, charIdx));
      if (charIdx >= text.length) {
        clearInterval(typeTimer);
        setTimeout(() => {
          setPlaceholder('');
          setExampleIdx((i) => (i + 1) % searchExamples.length);
        }, 2200);
      }
    }, 65);
    return () => clearInterval(typeTimer);
  }, [exampleIdx]);

  const chips = [
    'Computer Science, Germany',
    'MBA, Canada',
    'Artificial Intelligence, UK',
    'Data Science, Australia',
  ];

  return (
    <section className="bg-white border-b border-slate-100" style={{ paddingTop: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-7">
          <a href="/" className="hover:text-[#6D4AFF] transition-colors font-medium">Home</a>
          <span>/</span>
          <span className="text-[#0F172A] font-semibold">Universities</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left: Headline + Search */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold text-[#0F172A] leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}
            >
              Find the Right University,
              <br />
              <em className="text-[#6D4AFF] font-serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Not Just a University.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[15px] text-[#64748B] leading-relaxed mb-7 max-w-2xl"
            >
              Explore 500+ universities across 50+ countries with rankings, tuition fees,
              scholarships, career outcomes and admission insights.
            </motion.p>

            {/* Spotlight Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="relative mb-5"
            >
              <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-200 shadow-lg shadow-slate-100/70 hover:border-slate-300 transition-all duration-200 ease-in-out focus-within:ring-0 focus-within:border-slate-200 focus-within:shadow-none focus-within:outline-none">
                <Search className="absolute left-5 w-5 h-5 text-[#94A3B8] pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${placeholder}...`}
                  className="flex-1 pl-14 pr-4 py-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-transparent outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent"
                  aria-label="Search universities, courses, or countries"
                />
                <button
                  type="button"
                  className="m-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
                >
                  Search
                </button>
              </div>
            </motion.div>

            {/* Quick chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="flex items-center gap-2 flex-wrap"
            >
              <span className="text-xs font-semibold text-[#94A3B8]">Try:</span>
              {chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuery(chip)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-[#6D4AFF] bg-[#6D4AFF]/8 border border-[#6D4AFF]/15 hover:bg-[#6D4AFF]/14 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right: Stat Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex flex-col gap-3 flex-shrink-0"
          >
            {[
              { icon: School, value: '500+', label: 'Universities', color: 'bg-[#6D4AFF]/10 text-[#6D4AFF]' },
              { icon: Globe, value: '50+', label: 'Countries', color: 'bg-indigo-50 text-indigo-600' },
            ].map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 bg-slate-50/80 border border-slate-100 rounded-2xl px-5 py-4 min-w-[170px]"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[22px] font-extrabold text-[#0F172A] leading-none">{value}</p>
                  <p className="text-[11px] text-[#64748B] font-medium mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
