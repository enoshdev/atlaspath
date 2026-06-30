import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Search, Globe, Award, Calculator, Users2, ShieldCheck, ArrowRight } from 'lucide-react';

export const PlatformOverview: React.FC = () => {
  const cards = [
    {
      title: 'University Discovery',
      description: 'Find and compare top universities worldwide that match your profile.',
      icon: <Search className="w-5 h-5" />,
      colorClass: 'text-primary bg-primary/5 border-primary/10',
      href: '#discovery',
    },
    {
      title: 'Country Insights',
      description: 'Compare countries based on cost, visas, jobs, and lifestyle.',
      icon: <Globe className="w-5 h-5" />,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      href: '#countries',
    },
    {
      title: 'Scholarship Finder',
      description: 'Discover scholarships worth lakhs and maximize funding.',
      icon: <Award className="w-5 h-5" />,
      colorClass: 'text-amber-600 bg-amber-50 border-amber-100',
      href: '#scholarships',
    },
    {
      title: 'Cost Calculator',
      description: 'Estimate your total cost of study, living expenses, and currency conversions.',
      icon: <Calculator className="w-5 h-5" />,
      colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      href: '#calculator',
    },
    {
      title: 'Expert Guidance',
      description: 'Connect with certified counselors and visa experts whenever you need.',
      icon: <Users2 className="w-5 h-5" />,
      colorClass: 'text-violet-600 bg-violet-50 border-violet-100',
      href: '#guidance',
    },
    {
      title: 'Application Support',
      description: 'End-to-end guidance for applications, document review, and visa processing.',
      icon: <ShieldCheck className="w-5 h-5" />,
      colorClass: 'text-rose-600 bg-rose-50 border-rose-100',
      href: '#support',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  return (
    <section id="platform-overview" className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              All-In-One Platform
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty leading-tight">
              Everything You Need,<br />
              <span className="font-serif italic font-normal text-slate-500">
                To Study Abroad.
              </span>
            </h2>
          </div>
          <a
            href="#all-features"
            className="group flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 self-start md:self-end"
          >
            <span>Explore All Features</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-surface border border-slate-200/50 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:bg-white flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Icon Wrapper */}
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-105 ${card.colorClass}`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted mb-6">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={card.href}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-all duration-300"
              >
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
