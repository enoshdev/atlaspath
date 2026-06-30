import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MetricCounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const MetricCounter: React.FC<MetricCounterProps> = ({ value, suffix, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16); // cap at ~60fps
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Format count nicely (e.g. adding commas)
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <span ref={ref} className="font-sans font-bold tracking-tight text-white">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export const ImpactSection: React.FC = () => {
  const metrics = [
    {
      label: 'Students Guided',
      value: 15000,
      suffix: '+',
    },
    {
      label: 'University Partners',
      value: 500,
      suffix: '+',
    },
    {
      label: 'Visa Success Rate',
      value: 95,
      suffix: '%',
    },
    {
      label: 'Scholarships Secured',
      value: 250,
      suffix: 'Cr+',
      prefix: '₹',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-[#090D1A] text-white relative overflow-hidden border-t border-slate-800">
      {/* Absolute decorative grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Our Impact In Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 text-pretty leading-tight">
              We don&rsquo;t just promise,<br />
              <span className="font-serif italic font-normal text-slate-400">
                We deliver results.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-pretty">
              AtlasPath connects dream academic pathways with structured realities. Our statistics reflect years of commitment, expert visa guidance, and verified financial packages.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.06] p-6 sm:p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-center min-h-[140px]"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 flex items-center">
                  {metric.prefix && <span className="mr-0.5">{metric.prefix}</span>}
                  <MetricCounter value={metric.value} suffix={metric.suffix} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
