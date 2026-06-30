import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Star, Calendar, ClipboardCheck } from 'lucide-react';

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

  const stats = [
    { value: '500+', label: 'Universities' },
    { value: '95%', label: 'Visa Success' },
    { value: '₹250Cr+', label: 'Scholarships' },
    { value: '15,000+', label: 'Students' },
  ];

  return (
    <section className="bg-white w-full overflow-hidden" style={{ paddingTop: '64px' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_420px_220px] lg:items-stretch" style={{ minHeight: 'calc(100vh - 64px)' }}>
          
          {/* Mobile: Image first above content, Desktop: column 2 */}
          <div className="lg:hidden -mx-4 sm:-mx-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              className="relative w-full overflow-hidden"
              style={{ maxHeight: '45vh' }}
            >
              <img
                src="/assets/student-hero.png"
                alt="AtlasPath student smiling on campus"
                className="w-full h-full object-cover object-top"
                loading="eager"
                style={{ maxHeight: '45vh' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
            </motion.div>
          </div>

          {/* COL 1: LEFT TEXT */}
          <motion.div
            className="flex flex-col justify-center py-8 sm:py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 self-start mb-5 sm:mb-7">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6D4AFF]/8 border border-[#6D4AFF]/15">
                <Star className="w-3 h-3 text-[#6D4AFF] fill-[#6D4AFF]" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#6D4AFF] tracking-wide">
                  Trusted by 15,000+ Students Worldwide
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold text-[#0F172A] leading-[1.07] mb-4 sm:mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 54px)' }}
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
              className="text-[14px] sm:text-[15px] leading-[1.7] text-[#64748B] mb-6 sm:mb-8 max-w-[420px]"
            >
              Discover top universities, compare countries, explore
              scholarships, and connect with experts — all in one
              intelligent platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-12"
            >
              <a
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-[13px] font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-all duration-200 shadow-lg shadow-[#6D4AFF]/25 hover:-translate-y-0.5"
              >
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-[13px] font-semibold text-[#0F172A] bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-3 sm:gap-5 pt-6 sm:pt-8 border-t border-slate-100"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[18px] sm:text-[20px] font-extrabold text-[#0F172A] leading-none">{s.value}</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-[#64748B] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* COL 2: CENTER IMAGE (Desktop only) */}
          <motion.div
            className="hidden lg:block relative self-stretch overflow-hidden"
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
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
          </motion.div>

          {/* COL 3: RIGHT CARDS (Desktop only) */}
          <div className="hidden lg:flex flex-col justify-center gap-3 py-12">
            {/* Card 1: Quick Actions */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.55 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#6D4AFF]/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-3.5 h-3.5 text-[#6D4AFF]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wide leading-none">
                    Quick Actions
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/assessment" className="text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1">
                  <ArrowRight className="w-2.5 h-2.5" /> Take Free Assessment
                </a>
                <a href="/book-consultation" className="text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1">
                  <ArrowRight className="w-2.5 h-2.5" /> Book Consultation
                </a>
                <a href="/universities" className="text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1">
                  <ArrowRight className="w-2.5 h-2.5" /> Explore Universities
                </a>
              </div>
            </motion.div>

            {/* Card 2: Student Success */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Star className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-[#0F172A]">Student Success</span>
              </div>
              <p className="text-[10px] text-[#94A3B8]">Visa Success Rate</p>
              <p className="text-[30px] font-extrabold text-emerald-600 leading-tight">95%</p>
              <a href="/success-stories" className="flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-600 hover:underline">
                View Success Stories <ArrowRight className="w-2.5 h-2.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
