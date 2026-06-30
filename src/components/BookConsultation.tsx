import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Award, CheckCircle, Star, Lock, Calendar, Clock,
  ArrowRight, Users, Sparkles, University, Briefcase,
  Video, Sun, Sunrise, Sunset, FileText, Check,
  Trophy, BadgeCheck, ShieldCheck, Sparkle,
  ChevronLeft, ChevronRight, AlertCircle, Loader2
} from 'lucide-react';

/* ─── DATA DEFINITIONS ─── */

interface Goal {
  id: string;
  label: string;
  desc: string;
  icon: any;
  flag: string;
  gradient: string;
  successRate: string;
  duration: string;
  price: string;
  expertId: string;
  countries: string[];
}

const GOALS: Goal[] = [
  { id: 'germany', label: 'Study in Germany', desc: 'Tuition-free public universities & DAAD opportunities', icon: MapPin, flag: '🇩🇪', gradient: 'from-blue-500 to-cyan-400', successRate: '92% Success', duration: '60 min', price: '₹2,499', expertId: 'rahul', countries: ['Germany'] },
  { id: 'canada', label: 'Study in Canada', desc: 'PGWP opportunities & SDS pathway', icon: MapPin, flag: '🇨🇦', gradient: 'from-red-500 to-orange-400', successRate: '94% Success', duration: '60 min', price: '₹2,499', expertId: 'ananya', countries: ['Canada'] },
  { id: 'uk', label: 'Study in UK', desc: 'Russell Group universities & scholarships', icon: MapPin, flag: '🇬🇧', gradient: 'from-blue-600 to-blue-400', successRate: '91% Success', duration: '60 min', price: '₹2,499', expertId: 'ananya', countries: ['UK'] },
  { id: 'usa', label: 'Study in USA', desc: 'STEM programs & OPT pathway', icon: MapPin, flag: '🇺🇸', gradient: 'from-indigo-600 to-blue-500', successRate: '92% Success', duration: '60 min', price: '₹2,499', expertId: 'ananya', countries: ['USA'] },
  { id: 'australia', label: 'Study in Australia', desc: 'Post-study work rights & top universities', icon: MapPin, flag: '🇦🇺', gradient: 'from-green-500 to-emerald-400', successRate: '92% Success', duration: '60 min', price: '₹2,499', expertId: 'ananya', countries: ['Australia'] },
  { id: 'ireland', label: 'Study in Ireland', desc: 'Tech industry opportunities & PR pathway', icon: MapPin, flag: '🇮🇪', gradient: 'from-green-600 to-lime-500', successRate: '90% Success', duration: '60 min', price: '₹2,499', expertId: 'rahul', countries: ['Ireland'] },
  { id: 'scholarship', label: 'Scholarship Assistance', desc: 'DAAD, Chevening, Erasmus & full funding strategy', icon: Award, flag: '🏆', gradient: 'from-amber-500 to-yellow-400', successRate: '95% Success', duration: '45 min', price: '₹1,999', expertId: 'vikram', countries: ['Multiple'] },
  { id: 'university', label: 'University Selection', desc: 'Shortlist best universities based on your profile', icon: University, flag: '🎯', gradient: 'from-purple-500 to-violet-400', successRate: '93% Success', duration: '45 min', price: '₹1,999', expertId: 'rahul', countries: ['Multiple'] },
  { id: 'visa', label: 'Visa Guidance', desc: 'Document guidance & visa success strategy', icon: FileText, flag: '🛂', gradient: 'from-sky-500 to-blue-400', successRate: '92% Success', duration: '45 min', price: '₹2,499', expertId: 'vikram', countries: ['Multiple'] },
  { id: 'career', label: 'Career Planning', desc: 'Post-study work rights & career roadmap', icon: Briefcase, flag: '💼', gradient: 'from-rose-500 to-pink-400', successRate: '91% Success', duration: '45 min', price: '₹1,999', expertId: 'ananya', countries: ['Global'] },
];

interface Expert {
  id: string;
  name: string;
  role: string;
  exp: string;
  students: string;
  successRate: string;
  img: string;
  languages: string;
  specialties: string[];
  flags: string[];
  achievements: string[];
  rating: string;
  reviews: string;
}

const EXPERTS: Expert[] = [
  {
    id: 'rahul',
    name: 'Rahul Mehta',
    role: 'Sr. Education Expert & Germany Specialist',
    exp: '8+ Years',
    students: '2,500+',
    successRate: '92%',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    languages: 'English, Hindi, German',
    specialties: ['TUM & LMU Admissions', 'APS Certificate', 'Blocked Account Setup', 'DAAD Scholarship Strategy'],
    flags: ['🇩🇪', '🇦🇺'],
    achievements: ['98% visa success rate', 'Placed 500+ at TUM', 'DAAD mentor since 2019'],
    rating: '4.9',
    reviews: '1,247'
  },
  {
    id: 'ananya',
    name: 'Ananya Sharma',
    role: 'Senior Admissions Consultant & Europe Specialist',
    exp: '8+ Years',
    students: '2,100+',
    successRate: '90%',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    languages: 'English, Hindi, Spanish',
    specialties: ['Russell Group Admissions', 'Canada SDS Pathway', 'Europe Public Unis', 'SOP & LOR Writing'],
    flags: ['🇨🇦', '🇬🇧', '🇪🇺'],
    achievements: ['90% Success Rate', 'Placed 300+ in UK/Canada', 'SOP drafting expert'],
    rating: '4.8',
    reviews: '980'
  },
  {
    id: 'vikram',
    name: 'Vikram Singh',
    role: 'Global Scholarship & Visa Expert',
    exp: '10+ Years',
    students: '1,800+',
    successRate: '94%',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    languages: 'English, Hindi',
    specialties: ['Chevening Scholarships', 'Erasmus Mundus Grants', 'Commonwealth Awards', 'Consulate Visa Mock Interviews'],
    flags: ['🇺🇸', '🇬🇧', '🇮🇳'],
    achievements: ['₹250Cr+ Scholarships secured', '94% success rate', '60+ Chevening winners'],
    rating: '4.9',
    reviews: '1,102'
  }
];

const AI_MATCH_PREVIEW: Record<string, { universities: string[]; scholarshipPotential: string; successRate: string; timeline: string; visaDifficulty: string; avgCosts: string }> = {
  germany: { universities: ['TUM Munich (QS #28)', 'RWTH Aachen (QS #147)', 'LMU Munich (QS #54)'], scholarshipPotential: 'DAAD Scholarship, Deutschlandstipendium, Erasmus+', successRate: '92%', timeline: '6 – 8 Months', visaDifficulty: 'Moderate', avgCosts: '€11,208/yr + €0 tuition' },
  canada: { universities: ['U of Toronto (QS #21)', 'UBC (QS #38)', 'McGill (QS #29)'], scholarshipPotential: 'SDS Canada Merit, Entrance Bursaries', successRate: '94%', timeline: '4 – 6 Months', visaDifficulty: 'Easy (SDS)', avgCosts: 'CAD ~30,000/yr' },
  uk: { universities: ['Imperial College (QS #2)', 'UCL (QS #9)', 'Edinburgh (QS #27)'], scholarshipPotential: 'Chevening, Commonwealth, GREAT Grants', successRate: '91%', timeline: '4 – 8 Months', visaDifficulty: 'Moderate', avgCosts: '£25K – 35K/yr' },
  usa: { universities: ['MIT (QS #1)', 'Stanford (QS #6)', 'Harvard (QS #4)'], scholarshipPotential: 'University Merit Aid, Fulbright Grant', successRate: '89%', timeline: '6 – 12 Months', visaDifficulty: 'Challenging', avgCosts: '$35K – 60K/yr' },
  australia: { universities: ['Melbourne (QS #14)', 'UNSW (QS #19)', 'Sydney (QS #18)'], scholarshipPotential: 'Australia Awards, RTP Scholarships', successRate: '92%', timeline: '3 – 6 Months', visaDifficulty: 'Easy (GTE)', avgCosts: 'AUD 33K – 45K/yr' },
  ireland: { universities: ['Trinity College (QS #98)', 'UCD (QS #126)', 'Dublin City Uni'], scholarshipPotential: 'Government of Ireland, UCD Global Merit', successRate: '90%', timeline: '3 – 5 Months', visaDifficulty: 'Moderate', avgCosts: '€18K – 25K/yr' },
  scholarship: { universities: ['Russell Group', 'European Public Universities', 'US Ivy Leagues'], scholarshipPotential: 'Up to 100% Tuition + Monthly Stipend', successRate: '95%', timeline: '6 – 12 Months', visaDifficulty: 'Moderate', avgCosts: 'N/A (Fully Funded)' },
  university: { universities: ['Custom Shortlist (8 Matches)', 'Reach, Target & Safe Unis'], scholarshipPotential: 'Profile-dependent Merit Grants', successRate: '93%', timeline: '1 – 2 Months', visaDifficulty: 'Post-Admission support', avgCosts: 'Matched to your budget' },
  visa: { universities: ['Partner Academic Institutions'], scholarshipPotential: 'Visa-specific Fee Waivers (where applicable)', successRate: '92%', timeline: '1 – 3 Months', visaDifficulty: 'Managed / Direct Guidance', avgCosts: 'Standard consulate fees' },
  career: { universities: ['Global Top Tier Corporate Partners'], scholarshipPotential: 'Corporate placement sponsorships', successRate: '91%', timeline: '1 – 3 Sessions', visaDifficulty: 'Transition guidance', avgCosts: 'Coaching Included' },
};

const TIMEZONE_SLOTS = {
  IST: { suffix: 'IST', label: 'Asia/Kolkata' },
  EST: { suffix: 'EST', label: 'US/Eastern' },
  GMT: { suffix: 'GMT', label: 'Europe/London' },
  PST: { suffix: 'PST', label: 'US/Pacific' },
  AEDT: { suffix: 'AEDT', label: 'Australia/Sydney' }
};

const MORNING_SLOTS = [
  { time: '09:00 AM', label: 'Early Bird Slot', popular: false, recommended: false },
  { time: '10:00 AM', label: 'Morning Prime', popular: true, recommended: false },
  { time: '11:00 AM', label: 'Late Morning', popular: false, recommended: true }
];

const AFTERNOON_SLOTS = [
  { time: '02:00 PM', label: 'Mid-Day Slot', popular: false, recommended: false },
  { time: '03:00 PM', label: 'Afternoon Prime', popular: true, recommended: false },
  { time: '04:00 PM', label: 'Late Afternoon', popular: false, recommended: false }
];

const EVENING_SLOTS = [
  { time: '05:00 PM', label: 'Early Evening', popular: false, recommended: true },
  { time: '06:00 PM', label: 'Evening Prime', popular: true, recommended: false },
  { time: '07:00 PM', label: 'Night Owl Slot', popular: false, recommended: false }
];

/* ─── MAIN COMPONENT ─── */

export const BookConsultation: React.FC = () => {
  // Booking selections state
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<keyof typeof TIMEZONE_SLOTS>('IST');

  // Customer contact info
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // UI state for animations
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingId, setBookingId] = useState('');

  // References for smooth scrolling and selectors
  const goalSectionRef = useRef<HTMLDivElement>(null);
  const aiMatchSectionRef = useRef<HTMLDivElement>(null);
  const expertSectionRef = useRef<HTMLDivElement>(null);
  const dateTimeSectionRef = useRef<HTMLDivElement>(null);
  const confirmationSectionRef = useRef<HTMLDivElement>(null);
  const datesContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic values
  const selectedGoalData = useMemo(() => {
    return GOALS.find(g => g.id === selectedGoal) || null;
  }, [selectedGoal]);

  const matchedExpert = useMemo(() => {
    if (!selectedGoalData) return null;
    return EXPERTS.find(e => e.id === selectedGoalData.expertId) || null;
  }, [selectedGoalData]);

  const aiMatchData = useMemo(() => {
    if (!selectedGoal) return null;
    return AI_MATCH_PREVIEW[selectedGoal] || null;
  }, [selectedGoal]);

  // Set default expert match when goal changes, and trigger AI Loader animation
  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    
    // Automatically match the expert for this goal
    const targetGoal = GOALS.find(g => g.id === goalId);
    if (targetGoal) {
      const match = EXPERTS.find(e => e.id === targetGoal.expertId);
      if (match) setSelectedExpert(match);
    }

    // Trigger AI loading state
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Auto-scroll to Recommended Experts section
      setTimeout(() => {
        expertSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 750);
  };

  const handleExpertSelect = (expert: Expert) => {
    setSelectedExpert(expert);
    // Smooth scroll to Date & Time selection
    setTimeout(() => {
      dateTimeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    if (selectedTime) {
      // Smooth scroll to Confirmation summary
      setTimeout(() => {
        confirmationSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      // Smooth scroll to Confirmation summary
      setTimeout(() => {
        confirmationSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedGoal || !selectedExpert || !selectedDate || !selectedTime) return;
    if (!customerName.trim() || !customerEmail.trim()) {
      setBookingError('Please enter your name and email');
      return;
    }
    setIsSubmitting(true);
    setBookingError('');
    setBookingId('');
    try {
      const res = await fetch('/api/consultation/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goalId: selectedGoal,
          goalLabel: selectedGoalData?.label || '',
          expertId: selectedExpert.id,
          expertName: selectedExpert.name,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          customerPhone: customerPhone.trim(),
          selectedDate: selectedDate.toISOString().split('T')[0],
          selectedTime,
          timezone,
          price: selectedGoalData?.price || '',
          duration: selectedGoalData?.duration || '',
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setBookingId(data.bookingId || '');
        setShowSuccessOverlay(true);
      } else {
        setBookingError(data.error || 'Booking failed. Please try again.');
      }
    } catch {
      setBookingError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSelectedGoal(null);
    setSelectedExpert(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setShowSuccessOverlay(false);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setBookingError('');
    setBookingId('');
    goalSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine current active step for the progress sidebar card (4 Steps Workflow)
  const activeStep = useMemo(() => {
    if (!selectedGoal) return 1;
    if (!selectedExpert) return 2;
    if (!selectedDate || !selectedTime) return 3;
    if (!customerName.trim() || !customerEmail.trim()) return 3;
    return 4;
  }, [selectedGoal, selectedExpert, selectedDate, selectedTime, customerName, customerEmail]);

  // Generate 14 days from today for horizontal date selection
  const horizontalDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  }, []);

  const scrollDates = (direction: 'left' | 'right') => {
    if (datesContainerRef.current) {
      const scrollAmount = 240;
      datesContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const formatDateString = (date: Date | null) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Sticky Card CTA behavior
  const handleStickyCardCTA = () => {
    if (activeStep === 1 && goalSectionRef.current) {
      goalSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (activeStep === 2 && expertSectionRef.current) {
      expertSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (activeStep === 3 && dateTimeSectionRef.current) {
      dateTimeSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (activeStep === 4 && confirmationSectionRef.current) {
      confirmationSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans antialiased relative selection:bg-primary/10 selection:text-primary pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 relative z-10">
        
        {/* ====================================================
            SECTION 1: Premium Hero Grid (2 Columns: 65% / 35% split)
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Hero Left Side: Content and Trust Metrics (65% on Desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-4 hover:bg-primary/15 transition-all">
              <Sparkles className="w-3.5 h-3.5" />
              Premium Education Strategy Session
            </div>

            {/* Large Heading (Constraints: max-width 700px, reduced height by 25-30%, max 3 lines) */}
            <div className="max-w-[700px]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
                Book Your Personalized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent italic font-serif pr-2">
                  Global Education
                </span> <br />
                Strategy Session
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed mb-6">
              Receive a personalized roadmap covering universities, scholarships, admissions, visas and career opportunities — crafted by senior country experts.
            </p>

            {/* Trust Metrics Grid (4 items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: '15,000+', desc: 'Students Guided', icon: Users, color: 'bg-primary/10 text-primary border-primary/5' },
                { label: '95%', desc: 'Visa Success', icon: ShieldCheck, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                { label: '₹250Cr+', desc: 'Scholarships Won', icon: Trophy, color: 'bg-amber-50 text-amber-600 border-amber-100' },
                { label: '500+', desc: 'University Partners', icon: University, color: 'bg-blue-50 text-blue-600 border-blue-100' }
              ].map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div key={i} className="flex flex-col bg-white border border-slate-100 p-4 rounded-2xl shadow-xs transition-transform duration-300 hover:-translate-y-0.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${metric.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">{metric.label}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">{metric.desc}</span>
                  </div>
                );
              })}
            </div>

            {/* Footer Trust Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-400 border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                4.9/5 Google Rating
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-primary" />
                ISO 27001 Certified
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Data Protected & Secure
              </span>
            </div>
          </div>

          {/* Hero Right Side: Sticky Consultation Progress Card (35% on Desktop, top-aligned with hero, sticky top offset 120px) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:sticky lg:top-[120px] z-20">
            <div className="w-full max-w-full sm:max-w-[340px] bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl shadow-slate-200/40 relative overflow-hidden transition-all duration-300">
              
              {/* Header with Pulse Indicator */}
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-800 tracking-tight uppercase">Your Consultation</span>
                <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                  23 bookings today
                </span>
              </div>

              {/* Progress Steps header (4 Steps Workflow UX) */}
              <div className="flex items-center justify-between gap-1 mb-5 relative px-1">
                {[
                  { stepNum: 1, label: 'Goal' },
                  { stepNum: 2, label: 'Expert' },
                  { stepNum: 3, label: 'Date/Time' },
                  { stepNum: 4, label: 'Review' }
                ].map((s, i) => (
                  <React.Fragment key={s.stepNum}>
                    <div className="flex flex-col items-center z-10">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        activeStep > s.stepNum
                          ? 'bg-primary text-white'
                          : activeStep === s.stepNum
                            ? 'bg-primary text-white shadow-md shadow-primary/20 ring-4 ring-primary/10'
                            : 'bg-slate-100 text-slate-400'
                      }`}>
                        {activeStep > s.stepNum ? <Check className="w-3.5 h-3.5" /> : s.stepNum}
                      </div>
                      <span className={`text-[8px] font-bold mt-1 tracking-tight ${activeStep >= s.stepNum ? 'text-primary' : 'text-slate-400'}`}>{s.label}</span>
                    </div>
                    {i < 3 && (
                      <div className="flex-1 h-[2px] -mt-5 bg-slate-100 relative">
                        <div className={`absolute inset-y-0 left-0 bg-primary transition-all duration-500`} style={{ width: activeStep > s.stepNum ? '100%' : '0%' }} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Title/Context */}
              <div className="mb-4 bg-slate-50 border border-slate-100/50 rounded-2xl p-3">
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">
                  STEP {activeStep} OF 4
                </span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                  {activeStep === 1 && 'Select Your Goal'}
                  {activeStep === 2 && 'Choose Your Expert'}
                  {activeStep === 3 && 'Date, Time & Contact'}
                  {activeStep === 4 && 'Review & Confirm'}
                </span>
              </div>

              {/* Selection Summary */}
              <div className="space-y-2 mb-4 border-b border-slate-100 pb-4">
                {/* Goal selected state */}
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{selectedGoalData?.flag || '🎯'}</span>
                    <span className={`font-semibold ${selectedGoalData ? 'text-slate-800' : 'text-slate-400'}`}>
                      {selectedGoalData ? selectedGoalData.label : 'Choose goal...'}
                    </span>
                  </div>
                  {selectedGoalData && <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />}
                </div>

                {/* Expert selected state */}
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    {selectedExpert ? (
                      <div className="w-5 h-5 rounded-full overflow-hidden border border-white shadow-xs">
                        <img src={selectedExpert.img} alt={selectedExpert.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <Users className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`font-semibold ${selectedExpert ? 'text-slate-800' : 'text-slate-400'}`}>
                      {selectedExpert ? selectedExpert.name : 'Choose expert...'}
                    </span>
                  </div>
                  {selectedExpert && <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />}
                </div>

                {/* Time selected state */}
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className={`font-semibold ${selectedDate ? 'text-slate-800' : 'text-slate-400'}`}>
                      {selectedDate ? `${formatDateString(selectedDate)} ${selectedTime ? `@ ${selectedTime}` : ''}` : 'Choose date & time...'}
                    </span>
                  </div>
                  {selectedDate && selectedTime && <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />}
                </div>
              </div>

              {/* Price & Guarantee */}
              <div className="mb-4 space-y-2">
                <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl p-2.5 text-center">
                  <span className="text-[10px] font-bold text-emerald-800 leading-snug block">
                    🛡️ 100% Money-Back Guarantee
                  </span>
                </div>

                {/* Trust mini labels */}
                <div className="flex items-center justify-center gap-3 text-[8px] text-slate-400 font-bold uppercase tracking-wider pt-1">
                  <span className="flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5" /> 256-bit Encrypted
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-0.5">
                    <Video className="w-2.5 h-2.5" /> Video Consultation
                  </span>
                </div>
              </div>

              {/* Review Quote Social Proof */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-4">
                <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  &ldquo;Rahul Mehta provided incredible guidance — helped me secure admission to my dream university!&rdquo;
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleStickyCardCTA}
                disabled={activeStep === 1 && !selectedGoal}
                className={`w-full py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                  activeStep === 1
                    ? selectedGoal
                      ? 'bg-primary text-white hover:bg-secondary shadow-primary/10'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                    : activeStep === 2
                      ? 'bg-primary text-white hover:bg-secondary shadow-primary/10'
                      : activeStep === 3
                        ? selectedDate && selectedTime
                          ? 'bg-primary text-white hover:bg-secondary shadow-primary/10'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                        : 'bg-primary text-white hover:bg-secondary shadow-primary/10'
                }`}
              >
                {activeStep === 1 && 'Select a Goal below to Continue'}
                {activeStep === 2 && 'Proceed to Select Expert'}
                {activeStep === 3 && (selectedDate && selectedTime ? 'Review Booking' : 'Select Date & Time')}
                {activeStep === 4 && 'Review Selections Below'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================
            SECTION 2: Choose Your Goal (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col. Height: 220px)
            ==================================================== */}
        <div ref={goalSectionRef} id="goal-section" className="scroll-mt-28 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">1. Choose Your Goal</h2>
            <p className="text-sm text-slate-500 mt-1">Select the area you need expert guidance in</p>
          </div>

          {/* Cards Grid (No wrapping overflows, layout constraints: exactly 220px card height) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOALS.map((goal) => {
              const Icon = goal.icon;
              const isSelected = selectedGoal === goal.id;
              
              return (
                <button
                  key={goal.id}
                  onClick={() => handleGoalSelect(goal.id)}
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between min-h-[180px] sm:h-[220px] overflow-hidden ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary/10 shadow-lg shadow-primary/5 bg-primary/[0.01]'
                      : 'border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Selected Tick Indicator */}
                  {isSelected && (
                    <span className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                  )}

                  {/* Header Row: Icon */}
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center text-white shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content: Title & description configured with overflow rules to prevent awkward wrapping */}
                  <div className="my-2">
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span className="text-base leading-none">{goal.flag}</span>
                      <span className="font-extrabold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-base truncate max-w-[80%]">
                        {goal.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium line-clamp-2 leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50/80 rounded px-1.5 py-0.5 uppercase tracking-wide">
                      {goal.successRate}
                    </span>
                    <span className="flex items-center gap-0.5 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" /> {goal.duration}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            SECTION 3: AI Match Section (Appears after goal selection, Single Horizontal Row)
            ==================================================== */}
        <div ref={aiMatchSectionRef} className="scroll-mt-28 mb-12">
          <AnimatePresence mode="wait">
            {selectedGoal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-3">
                    <Sparkle className="w-3.5 h-3.5 fill-indigo-100" />
                    AI Profiler Engine Active
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">2. AI Match Preview</h2>
                  <p className="text-sm text-slate-500 mt-1">Matched details based on your chosen strategy</p>
                </div>

                {isAnalyzing ? (
                  /* Loading Simulator */
                  <div className="bg-white border border-slate-200/80 rounded-3xl p-10 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Analyzing Profile Database...</h4>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Single Horizontal Card Row - Strict flex-row on desktop, stack on mobile */
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between">
                    
                    {/* Item 1: Recommended Expert */}
                    <div className="flex items-center gap-4 shrink-0 min-w-[220px]">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0">
                        <img src={matchedExpert?.img} alt={matchedExpert?.name || 'Expert'} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Recommended Expert</span>
                        <h3 className="font-extrabold text-slate-900 text-sm mt-0.5">{matchedExpert?.name}</h3>
                        <p className="text-[10px] text-primary font-bold">{matchedExpert?.role}</p>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-px h-10 bg-slate-200" />

                    {/* Item 2: Success Probability */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="28" cy="28" r="22" className="stroke-slate-200" strokeWidth="4" fill="transparent" />
                          <circle
                            cx="28"
                            cy="28"
                            r="22"
                            className="stroke-primary"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 22}
                            strokeDashoffset={(2 * Math.PI * 22) * (1 - (parseInt(aiMatchData?.successRate || '90') / 100))}
                          />
                        </svg>
                        <span className="absolute text-xs font-extrabold text-slate-900">{aiMatchData?.successRate}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Success Probability</span>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide block mt-0.5">High Chance</span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-px h-10 bg-slate-200" />

                    {/* Item 3: Top Universities */}
                    <div className="flex-1 min-w-[200px]">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Top Universities</span>
                      <div className="flex flex-wrap gap-1.5">
                        {aiMatchData?.universities.map((uni, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-800 bg-white border border-slate-200/50 rounded-md px-2 py-0.5">
                            {uni}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-px h-10 bg-slate-200" />

                    {/* Item 4: Scholarship Opportunities */}
                    <div className="flex-1 min-w-[180px]">
                      <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Scholarship Opportunities</span>
                      <p className="text-xs font-bold text-slate-800 leading-snug truncate mt-1">
                        {aiMatchData?.scholarshipPotential}
                      </p>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:block w-px h-10 bg-slate-200" />

                    {/* Item 5: Estimated Timeline */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                      <div>
                        <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Estimated Timeline</span>
                        <span className="text-xs font-bold text-slate-800 block mt-0.5">{aiMatchData?.timeline}</span>
                      </div>
                    </div>

                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ====================================================
            SECTION 4: Recommended Experts (Equal-height grid)
            ==================================================== */}
        <div ref={expertSectionRef} className="scroll-mt-28 mb-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">3. Choose Your Expert</h2>
              <p className="text-sm text-slate-500 mt-1">Book a session with one of our top-rated advisors</p>
            </div>
          </div>

          {/* Grid of 3 Equal-Height Experts */}
          {!selectedGoal ? (
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[300px] mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center mb-4 text-slate-400 border border-slate-200/55">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2">Select your goal to start booking.</h3>
              <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed">
                You must first select a strategy goal before matching with an expert advisor.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('goal-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors cursor-pointer border-0 outline-none"
              >
                Choose Goal
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch animate-fadeIn">
              {EXPERTS.map((expert) => {
                const isMatch = matchedExpert?.id === expert.id;
                const isSelected = selectedExpert?.id === expert.id;

                return (
                  <div
                    key={expert.id}
                    className={`bg-white border rounded-3xl p-5 shadow-xs transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full ${
                      isSelected
                        ? 'border-primary ring-2 ring-primary/10 shadow-lg shadow-primary/5 bg-primary/[0.005]'
                        : 'border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {/* Top Match Tag */}
                    {isMatch && (
                      <span className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider">
                        Top Match
                      </span>
                    )}

                    {/* Header Row: Profile photo, Name, Specialization */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm shrink-0">
                          <img src={expert.img} alt={expert.name} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h3 className="font-extrabold text-slate-900 text-sm">{expert.name}</h3>
                            <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                          </div>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{expert.role}</p>
                          
                          {/* Rating Row */}
                          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-bold mt-1">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span className="text-slate-700">{expert.rating}</span>
                            <span>({expert.reviews})</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-2 bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-4 text-center">
                        <div>
                          <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Experience</span>
                          <span className="text-[10px] font-extrabold text-slate-700 mt-0.5 block">{expert.exp}</span>
                        </div>
                        <div className="border-l border-slate-200">
                          <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Students</span>
                          <span className="text-[10px] font-extrabold text-slate-700 mt-0.5 block">{expert.students}</span>
                        </div>
                        <div className="border-l border-slate-200">
                          <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block">Success</span>
                          <span className="text-[10px] font-extrabold text-slate-700 mt-0.5 block">{expert.successRate}</span>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="mb-4">
                        <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">Specialization</span>
                        <div className="flex flex-wrap gap-1">
                          {expert.specialties.map((spec, i) => (
                            <span key={i} className="text-[9px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/50 rounded-md px-1.5 py-0.5">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleExpertSelect(expert)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer mt-auto ${
                        isSelected
                          ? 'bg-primary text-white hover:bg-secondary'
                          : 'bg-white border border-slate-200 text-slate-700 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Booked
                        </>
                      ) : (
                        'Book Expert'
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ====================================================
            SECTION 5 & 6: Pick Date & Time (Left column)
            + Confirmation Panel (Right column) in a 2-Column Row
            ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1 (Left - wider): 4. Pick Date & Time */}
          <div ref={dateTimeSectionRef} className="lg:col-span-8 scroll-mt-28">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">4. Pick Date & Time</h2>
                <p className="text-sm text-slate-500 mt-1">Select a date and a slot in your timezone</p>
              </div>

              {/* Timezone Selector dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Timezone:</span>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value as keyof typeof TIMEZONE_SLOTS)}
                  className="bg-white border border-slate-200/80 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 shadow-xs focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  {Object.entries(TIMEZONE_SLOTS).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key} ({value.label})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Horizontal Date Selector & Time slots grouped by Morning, Afternoon, Evening */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              
              {/* Horizontal Date Selector (Weekday name + date) */}
              <div className="mb-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">Select Date</h4>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => scrollDates('left')}
                      className="p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollDates('right')}
                      className="p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div
                  ref={datesContainerRef}
                  className="flex gap-3 overflow-x-auto pb-2.5 hide-scrollbar scroll-smooth snap-x"
                >
                  {horizontalDates.map((date, idx) => {
                    const isSelected = selectedDate ? selectedDate.toDateString() === date.toDateString() : false;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleDateSelect(date)}
                        className={`flex flex-col items-center justify-center min-w-[70px] py-3 rounded-2xl border text-center transition-all cursor-pointer snap-start ${
                          isSelected
                            ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                            : 'border-slate-200/80 bg-white hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className={`text-[9px] font-extrabold uppercase tracking-wide ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <span className="text-base font-extrabold mt-0.5">
                          {date.getDate()}
                        </span>
                        <span className={`text-[8px] font-bold ${isSelected ? 'text-white/60' : 'text-slate-400'}`}>
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots grouping under Morning, Afternoon, Evening */}
              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Available Slots
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Morning', icon: Sunrise, slots: MORNING_SLOTS },
                    { title: 'Afternoon', icon: Sun, slots: AFTERNOON_SLOTS },
                    { title: 'Evening', icon: Sunset, slots: EVENING_SLOTS }
                  ].map((group) => {
                    const SlotIcon = group.icon;
                    return (
                      <div key={group.title} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4">
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3 border-b border-slate-100 pb-1.5">
                          <SlotIcon className="w-3.5 h-3.5 text-slate-400" />
                          {group.title}
                        </span>

                        <div className="flex flex-col gap-2">
                          {group.slots.map((slot) => {
                            const isTimeSelected = selectedTime === slot.time;
                            const tzoneSuffix = TIMEZONE_SLOTS[timezone].suffix;

                            return (
                              <button
                                key={slot.time}
                                onClick={() => handleTimeSelect(slot.time)}
                                className={`w-full py-2 px-3 text-left rounded-xl border text-[10px] font-bold transition-all relative cursor-pointer flex items-center justify-between ${
                                  isTimeSelected
                                    ? 'border-primary bg-primary text-white shadow-md shadow-primary/10'
                                    : 'border-slate-200/80 bg-white hover:border-slate-300 text-slate-700'
                                }`}
                              >
                                <span>{slot.time} <span className={`text-[8px] ml-0.5 uppercase tracking-wide font-medium ${isTimeSelected ? 'text-white/80' : 'text-slate-400'}`}>{tzoneSuffix}</span></span>
                                
                                {slot.popular && (
                                  <span className={`px-1.5 py-0.5 rounded text-[5px] font-extrabold uppercase ${isTimeSelected ? 'bg-white/20 text-white' : 'bg-primary text-white'}`}>
                                    Popular
                                  </span>
                                )}
                                {slot.recommended && (
                                  <span className={`px-1.5 py-0.5 rounded text-[5px] font-extrabold uppercase ${isTimeSelected ? 'bg-white/20 text-white' : 'bg-emerald-500 text-white'}`}>
                                    Best
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Column 2 (Right - narrower): 5. Review & Confirm Panel */}
          <div ref={confirmationSectionRef} className="lg:col-span-4 scroll-mt-28">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">5. Review & Confirm</h2>
              <p className="text-sm text-slate-500 mt-1">Live updates based on selections</p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-200/20">
              <h4 className="font-extrabold text-slate-950 text-xs uppercase tracking-wider mb-4 border-b border-slate-100 pb-3">
                Live Confirmation Summary
              </h4>

              {/* Selections Details */}
              <div className="space-y-3.5 mb-5 text-xs">
                {/* Goal */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Goal</span>
                  <span className="font-bold text-slate-900">
                    {selectedGoalData ? `${selectedGoalData.flag} ${selectedGoalData.label}` : <span className="text-slate-300 font-medium italic">Not Selected</span>}
                  </span>
                </div>

                {/* Assigned Expert */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Expert</span>
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    {selectedExpert ? (
                      <>
                        <span className="w-4 h-4 rounded-full overflow-hidden inline-block border border-slate-100">
                          <img src={selectedExpert.img} alt={selectedExpert.name} loading="lazy" className="w-full h-full object-cover" />
                        </span>
                        <span>{selectedExpert.name}</span>
                      </>
                    ) : (
                      <span className="text-slate-300 font-medium italic">Not Assigned</span>
                    )}
                  </span>
                </div>

                {/* Target Country */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Country</span>
                  <span className="font-bold text-slate-900">
                    {selectedGoalData ? selectedGoalData.countries.join(', ') : <span className="text-slate-300 font-medium italic">N/A</span>}
                  </span>
                </div>

                {/* Selected Date */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Date</span>
                  <span className="font-bold text-slate-900">
                    {selectedDate ? formatDateString(selectedDate) : <span className="text-slate-300 font-medium italic">Not Selected</span>}
                  </span>
                </div>

                {/* Selected Time */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Time Slot</span>
                  <span className="font-bold text-slate-900">
                    {selectedTime ? `${selectedTime} (${timezone})` : <span className="text-slate-300 font-medium italic">Not Selected</span>}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Duration</span>
                  <span className="font-bold text-slate-900">
                    {selectedGoalData ? selectedGoalData.duration : <span className="text-slate-300 font-medium italic">N/A</span>}
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Price</span>
                  <span className="text-sm font-extrabold text-primary">
                    {selectedGoalData ? selectedGoalData.price : <span className="text-slate-300 font-medium italic">N/A</span>}
                  </span>
                </div>
              </div>

              {/* Contact Info Fields */}
              <div className="space-y-2.5 mb-4 border-b border-slate-100 pb-4">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your full name *"
                  className="w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Your email *"
                  className="w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Phone (optional)"
                  className="w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
                />
              </div>

              {/* 100% Satisfaction Guarantee */}
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-3 mb-5">
                <span className="text-[10px] font-bold text-emerald-800 flex items-center gap-1">
                  🛡️ Satisfaction Guarantee
                </span>
                <p className="text-[9px] text-emerald-600 mt-1 leading-normal font-semibold">
                  Not completely satisfied with your roadmap? Get a full refund within 24 hours of your call.
                </p>
              </div>

              {/* Final CTA Button */}
              {bookingError && (
                <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-[10px] font-bold text-rose-600 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {bookingError}
                </div>
              )}
              <button
                onClick={handleConfirmBooking}
                disabled={!selectedGoal || !selectedExpert || !selectedDate || !selectedTime || isSubmitting}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                  selectedGoal && selectedExpert && selectedDate && selectedTime && !isSubmitting
                    ? 'bg-primary text-white hover:bg-secondary hover:scale-[1.01] shadow-primary/20 cursor-pointer'
                    : 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none border border-slate-200'
                }`}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Submitting...</>
                ) : (
                  <><Lock className="w-3.5 h-3.5" /> Confirm Booking</>
                )}
              </button>

              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider text-center block mt-3 flex items-center justify-center gap-1">
                🔒 Secure & Encrypted Payments
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Booking Confirmed Success Modal */}
      <AnimatePresence>
        {showSuccessOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Check className="w-8 h-8 text-emerald-500" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-2">Booking Confirmed!</h3>
              <p className="text-xs sm:text-sm text-slate-400 text-center mb-6">
                Your global education strategy session is scheduled. Check your email for access links.
              </p>

              {/* Brief Confirmation Details list */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3 mb-6 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Goal</span>
                  <span className="font-bold text-slate-900">{selectedGoalData?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Expert</span>
                  <span className="font-bold text-slate-900">{selectedExpert?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Time</span>
                  <span className="font-bold text-slate-900">{selectedTime} ({timezone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Date</span>
                  <span className="font-bold text-slate-900">{formatDateString(selectedDate)}</span>
                </div>
                {bookingId && (
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[9px]">Booking ID</span>
                    <span className="font-bold text-primary text-[9px] font-mono">{bookingId.slice(0, 8)}...</span>
                  </div>
                )}
              </div>

              {/* Video Meet Note */}
              <div className="bg-indigo-50 border border-indigo-100/50 rounded-2xl p-3.5 mb-8 flex items-start gap-3">
                <Video className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">Video Meet Access Link</h5>
                  <p className="text-[10px] text-slate-500 leading-normal font-semibold mt-0.5">
                    A private Google Meet link has been generated and sent to you along with the session preparation guide.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 bg-primary text-white font-bold rounded-2xl text-xs shadow-md shadow-primary/20 hover:bg-secondary hover:scale-[1.01] transition-all cursor-pointer text-center"
                >
                  Book Another Session
                </button>
                <a
                  href="/"
                  className="flex-1 py-3 bg-slate-50 text-slate-700 font-bold border border-slate-200 rounded-2xl text-xs hover:bg-slate-100 transition-all text-center"
                >
                  Return Home
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
