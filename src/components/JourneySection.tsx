import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Sparkles, UserCheck, Compass, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Take Assessment',
      description: 'Answer simple questions about your goals, academics, and preferences to start your profile evaluation.',
      icon: <ClipboardCheck className="w-5 h-5" />,
      colorClass: 'text-primary bg-primary/5 border-primary/10',
    },
    {
      number: '02',
      title: 'Get Personalized Results',
      description: 'Receive university matches, scholarship options, budget estimations, and country recommendations.',
      icon: <Sparkles className="w-5 h-5" />,
      colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      number: '03',
      title: 'Connect with Experts',
      description: 'Book a free strategy session with expert advisors to align on your choices and visa requirements.',
      icon: <UserCheck className="w-5 h-5" />,
      colorClass: 'text-violet-600 bg-violet-50 border-violet-100',
    },
    {
      number: '04',
      title: 'Start Your Journey',
      description: 'We help you with everything from initial documentation and essays to mock visa interviews.',
      icon: <Compass className="w-5 h-5" />,
      colorClass: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty leading-tight">
              Your Study Abroad Journey,<br />
              <span className="font-serif italic font-normal text-slate-500">
                Simplified in 4 Steps.
              </span>
            </h2>
          </div>
          <a
            href="#assessment"
            className="group flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 self-start md:self-end"
          >
            <span>See Full Process</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-emerald-500 w-[75%] h-full rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col relative"
              >
                {/* Step Marker Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-xs font-extrabold text-muted tracking-widest bg-slate-50 border border-slate-200/50 px-3 py-1 rounded-full shadow-sm">
                    {step.number}
                  </div>
                </div>

                {/* Card Container */}
                <div className="bg-surface border border-slate-200/50 p-6 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:bg-white flex flex-col flex-grow">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border mb-6 ${step.colorClass}`}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-text mb-2.5 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-muted flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
