import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap, CheckCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 24, stiffness: 90 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 },
    },
  };

  const stats = [
    { value: '500+', label: 'Universities' },
    { value: '95%', label: 'Visa Success' },
    { value: '₹250Cr+', label: 'Scholarships' },
    { value: '15,000+', label: 'Students' },
  ];

  return (
    <section className="bg-white w-full overflow-hidden" style={{ paddingTop: '64px' }}>
      {/* 
        3-column layout inside max-w-7xl:
        [LEFT TEXT ~44%] [CENTER IMAGE ~36%] [RIGHT CARDS ~20%]
      */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          className="grid items-stretch"
          style={{
            gridTemplateColumns: '1fr 420px 220px',
            minHeight: 'calc(100vh - 64px)',
            gap: '0 24px',
          }}
        >

          {/* ── COL 1: LEFT TEXT ── */}
          <motion.div
            className="flex flex-col justify-center py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 self-start mb-7">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6D4AFF]/8 border border-[#6D4AFF]/15">
                <Star className="w-3 h-3 text-[#6D4AFF] fill-[#6D4AFF]" />
                <span className="text-[11px] font-semibold text-[#6D4AFF] tracking-wide">
                  Trusted by 15,000+ Students Worldwide
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold text-[#0F172A] leading-[1.07] mb-5"
              style={{ fontSize: 'clamp(38px, 4vw, 54px)' }}
            >
              Global Education.
              <br />
              <em
                className="font-serif not-italic text-[#6D4AFF]"
                style={{ fontStyle: 'italic', fontWeight: 400 }}
              >
                Personalized for You.
              </em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.7] text-[#64748B] mb-8 max-w-[420px]"
            >
              Discover top universities, compare countries, explore
              scholarships, and connect with experts — all in one
              intelligent platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-12"
            >
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-all duration-200 shadow-lg shadow-[#6D4AFF]/25 hover:-translate-y-0.5"
              >
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#universities"
                className="inline-flex items-center px-5 py-3 rounded-lg text-[13px] font-semibold text-[#0F172A] bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                Explore Universities
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-5 pt-8 border-t border-slate-100"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[20px] font-extrabold text-[#0F172A] leading-none">{s.value}</div>
                  <div className="text-[10px] font-medium text-[#64748B] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── COL 2: CENTER IMAGE ── */}
          <motion.div
            className="relative self-stretch overflow-hidden"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <img
              src="/assets/student-hero.png"
              alt="AtlasPath student smiling on campus"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* soft bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
          </motion.div>

          {/* ── COL 3: RIGHT CARDS ── */}
          <div className="flex flex-col justify-center gap-3 py-12">

            {/* Card 1: University Match */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.55 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#6D4AFF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#6D4AFF]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wide leading-none">
                    University Match
                  </p>
                  <p className="text-[9px] text-[#94A3B8] mt-0.5">Top Matches For You</p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { flag: '🇩🇪', country: 'Germany', match: '96%' },
                  { flag: '🇨🇦', country: 'Canada', match: '92%' },
                  { flag: '🇮🇪', country: 'Ireland', match: '89%' },
                ].map((item) => (
                  <div key={item.country} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm leading-none">{item.flag}</span>
                      <span className="text-[11px] font-semibold text-[#0F172A]">{item.country}</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#6D4AFF]">{item.match}</span>
                  </div>
                ))}
              </div>
              <a href="#assessment" className="flex items-center gap-1 mt-3 text-[10px] font-bold text-[#6D4AFF] hover:underline">
                View All <ArrowRight className="w-2.5 h-2.5" />
              </a>
            </motion.div>

            {/* Card 2: Scholarships */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <span className="text-[11px] font-bold text-[#0F172A]">Scholarships</span>
              </div>
              <p className="text-[10px] text-[#94A3B8]">Up to</p>
              <p className="text-[24px] font-extrabold text-violet-600 leading-tight">₹15 Lakhs</p>
              <p className="text-[10px] text-[#64748B] mb-3">Available For You</p>
              <a href="#scholarships" className="flex items-center gap-1 text-[10px] font-bold text-violet-600 hover:underline">
                View Scholarships <ArrowRight className="w-2.5 h-2.5" />
              </a>
            </motion.div>

            {/* Card 3: Student Success */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.85 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-[#0F172A]">Student Success</span>
              </div>
              <p className="text-[10px] text-[#94A3B8]">Visa Success Rate</p>
              <p className="text-[30px] font-extrabold text-emerald-600 leading-tight">95%</p>
              <a href="#success" className="flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-600 hover:underline">
                View Success Stories <ArrowRight className="w-2.5 h-2.5" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
