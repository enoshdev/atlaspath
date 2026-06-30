import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, Award,
  Search, ArrowRight, ChevronDown, Play,
  Clock, Calendar, Check, Camera, Globe, BookOpen
} from 'lucide-react';

/* ─── DATA MODELS ─── */
interface StudentStory {
  id: string;
  name: string;
  course: string;
  university: string;
  country: string;
  flag: string;
  scholarship: string;
  amount: string;
  currentRole: string;
  visaStatus: string;
  year: string;
  initials: string;
  color: string;
  challenges: string;
  howHelped: string;
  outcome: string;
  image: string;
}

const STORIES: StudentStory[] = [
  {
    id: 'arjun',
    name: 'Arjun Patel',
    course: 'MSc in Data Science',
    university: 'Technical University of Munich',
    country: 'Germany',
    flag: '🇩🇪',
    scholarship: 'DAAD Scholarship',
    amount: '€12,000 / year',
    currentRole: 'Data Scientist at BMW Group',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'AP',
    color: 'bg-indigo-600',
    challenges: 'Finding tuition-free English programs and understanding APS certificate timeline.',
    howHelped: 'AtlasPath structured the document check, verified translation logs, and structured the DAAD essay.',
    outcome: '100% tuition-free admission at TUM and €1,200/mo living allowance.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'sneha',
    name: 'Sneha Kapoor',
    course: 'MSc in Computer Science',
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    scholarship: 'Vanier Canada Scholarship',
    amount: 'CAD $50,000 / year',
    currentRole: 'AI Research Intern at Vector Institute',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'SK',
    color: 'bg-[#6D4AFF]',
    challenges: 'Writing complex research proposals and soliciting academic letters of recommendation (LORs).',
    howHelped: 'AtlasPath research mentors edited the scientific draft and organized mock LOR samples.',
    outcome: 'Secured full PhD/Masters track funding and direct student visa approval.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'rohan',
    name: 'Rohan Mehta',
    course: 'MEng in Mechanical Eng.',
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    scholarship: 'Australia Awards',
    amount: 'AUD $37,000 / year',
    currentRole: 'Robotics Engineer at Cochlear',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'RM',
    color: 'bg-emerald-600',
    challenges: 'High living costs in Melbourne and structured requirements for Australia Awards applications.',
    howHelped: 'Created itemized budget plan, mapped local housing groups, and verified visa checklists.',
    outcome: 'Full tuition waiver and living stipend cover, visa stamped in 12 days.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'aisha',
    name: 'Aisha Khan',
    course: 'MSc in Public Health',
    university: 'London School of Hygiene & Tropical Medicine',
    country: 'United Kingdom',
    flag: '🇬🇧',
    scholarship: 'Chevening Scholarship',
    amount: '£18,000 / year',
    currentRole: 'Health Consultant at NHS England',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'AK',
    color: 'bg-purple-600',
    challenges: 'Drafting leadership-focused essays for the UK Foreign Office and handling strict reference timelines.',
    howHelped: 'Personal mock interviews, Chevening alumni essay review cycles, and VFS slots booking assistance.',
    outcome: 'Fully funded scholarship, air travel tickets covered, and LSHTM admission.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'vikram',
    name: 'Vikram Singh',
    course: 'MS in Computer Science',
    university: 'University of California, San Diego',
    country: 'United States',
    flag: '🇺🇸',
    scholarship: 'Fulbright Scholarship',
    amount: 'USD $25,000 / year',
    currentRole: 'Software Engineer at Google Cloud',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'VS',
    color: 'bg-amber-600',
    challenges: 'Extremely high tuition rates and preparing for the competitive Fulbright interview rounds.',
    howHelped: 'Matched with US-based Fulbright alumni mentors and designed comprehensive academic portfolio sheets.',
    outcome: 'Secured full funding package, visa stamped, and placed at UCSD.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'meera',
    name: 'Meera Nair',
    course: 'MSc in AI & Robotics',
    university: 'TU Delft',
    country: 'Netherlands',
    flag: '🇳🇱',
    scholarship: 'Erasmus+ Scholarship',
    amount: '€18,000 / year',
    currentRole: 'AI Research Engineer at ASML',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'MN',
    color: 'bg-rose-600',
    challenges: 'Applying to multiple European universities and coordinating joint degree admissions.',
    howHelped: 'Unified portal application tracking, essay edits, and translation checklist checks.',
    outcome: 'Erasmus Joint Master Degree placement with full travel & monthly allowances.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    course: 'MSc in Data Science',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    flag: '🇬🇧',
    scholarship: 'Commonwealth Scholarship',
    amount: '£15,000 / year',
    currentRole: 'Data Analyst at Lloyds Banking Group',
    visaStatus: 'Visa Approved',
    year: '2025 Intake',
    initials: 'PS',
    color: 'bg-indigo-600',
    challenges: 'Applying with a low GPA and preparing a strong personal statement.',
    howHelped: 'AtlasPath mentors focused on highlighting her practical work experience and coding achievements.',
    outcome: 'Received admission with a full tuition scholarship.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'karthik',
    name: 'Karthik Reddy',
    course: 'MS in Computer Science',
    university: 'University of Waterloo',
    country: 'Canada',
    flag: '🇨🇦',
    scholarship: 'Waterloo Graduate Scholarship',
    amount: 'CAD $10,000 / year',
    currentRole: 'Software Engineer at Shopify',
    visaStatus: 'Visa Approved',
    year: '2025 Intake',
    initials: 'KR',
    color: 'bg-emerald-600',
    challenges: 'Understanding the supervisor search process for research masters.',
    howHelped: 'Guided cold email drafts to Waterloo professors, matching research focus areas.',
    outcome: 'Secured research supervisor acceptance and Waterloo entrance funding.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'neha_v',
    name: 'Neha Verma',
    course: 'MSc in AI & Robotics',
    university: 'TU Munich',
    country: 'Germany',
    flag: '🇩🇪',
    scholarship: 'Heinrich Böll Scholarship',
    amount: '€850 / month',
    currentRole: 'Research Scientist at BioNTech SE',
    visaStatus: 'Visa Approved',
    year: '2025 Intake',
    initials: 'NV',
    color: 'bg-rose-600',
    challenges: 'Social-political commitment requirements of German foundations.',
    howHelped: 'AtlasPath helped structure her social projects and prepare for political foundation interviews.',
    outcome: 'Secured full living stipend foundation scholarship.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'aditya',
    name: 'Aditya Nair',
    course: 'MBA',
    university: 'NUS Business School',
    country: 'Singapore',
    flag: '🇸🇬',
    scholarship: 'NUS Dean\'s Fellowship',
    amount: 'SGD $20,000 total',
    currentRole: 'Associate at McKinsey & Company',
    visaStatus: 'Visa Approved',
    year: '2025 Intake',
    initials: 'AN',
    color: 'bg-amber-600',
    challenges: 'High GMAT benchmarks and Singapore MBA admission essays.',
    howHelped: 'Conducted structural resume redesign and matched with post-MBA consulting mentors.',
    outcome: 'Secured NUS admission with merit scholarship.',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'sophia',
    name: 'Sophia Loren',
    course: 'MSc in Finance',
    university: 'Erasmus University Rotterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    scholarship: 'Orange Tulip Scholarship',
    amount: '€15,000 / year',
    currentRole: 'Risk Analyst at ING Bank',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'SL',
    color: 'bg-indigo-600',
    challenges: 'Strict application deadlines and GMAT requirements.',
    howHelped: 'Coordinated early portal application and structured OTS scholarship essays.',
    outcome: 'Admission at Rotterdam School of Management with OTS fee waiver.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'daniels',
    name: 'Daniel Smith',
    course: 'MS in Biotechnology',
    university: 'Heidelberg University',
    country: 'Germany',
    flag: '🇩🇪',
    scholarship: 'DAAD Scholarship',
    amount: '€1,200 / month',
    currentRole: 'PhD Candidate at Max Planck Institute',
    visaStatus: 'Visa Approved',
    year: '2026 Intake',
    initials: 'DS',
    color: 'bg-[#6D4AFF]',
    challenges: 'Academics transcripts formatting and finding research labs.',
    howHelped: 'Document compilation assistance, translation checks, and research plan design.',
    outcome: 'Admission to Heidelberg with DAAD support.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
  }
];

/* ─── SUCCESS BY DESTINATION DATA ─── */
const SUCCESS_BY_DESTINATION: Record<string, { desc: string; students: string; visaRate: string; funding: string; unis: number; salary: string; courses: { label: string; pct: number }[] }> = {
  germany: {
    desc: 'Thousands of students have achieved their dreams in Germany with world-class education, scholarships and great career opportunities.',
    students: '3,450+',
    visaRate: '96%',
    funding: '€85M+',
    unis: 78,
    salary: '€58K',
    courses: [
      { label: 'Computer Science', pct: 32 },
      { label: 'Mechanical Engineering', pct: 21 },
      { label: 'Data Science', pct: 18 },
      { label: 'Electrical Engineering', pct: 12 },
      { label: 'Other Programs', pct: 17 }
    ]
  },
  canada: {
    desc: 'Canada offers excellent postgraduate work rights and direct PR pathways, making it a top choice for computer science and business graduates.',
    students: '2,850+',
    visaRate: '90%',
    funding: 'CAD $42M+',
    unis: 64,
    salary: 'CAD $68K',
    courses: [
      { label: 'Computer Science', pct: 35 },
      { label: 'Business Administration', pct: 25 },
      { label: 'Data Science', pct: 15 },
      { label: 'Civil Engineering', pct: 10 },
      { label: 'Other Programs', pct: 15 }
    ]
  },
  australia: {
    desc: 'With beautiful student-friendly cities and extensive post-study rights, Australia attracts researchers and medical professionals.',
    students: '2,200+',
    visaRate: '91%',
    funding: 'AUD $30M+',
    unis: 45,
    salary: 'AUD $72K',
    courses: [
      { label: 'Information Technology', pct: 30 },
      { label: 'Nursing & Health Science', pct: 22 },
      { label: 'Business Analytics', pct: 18 },
      { label: 'Civil Engineering', pct: 15 },
      { label: 'Other Programs', pct: 15 }
    ]
  },
  uk: {
    desc: 'One-year fast-track Master programs in the United Kingdom allow students to start working and earn ROI quickly.',
    students: '2,100+',
    visaRate: '93%',
    funding: '£28M+',
    unis: 90,
    salary: '£45K',
    courses: [
      { label: 'Business Administration', pct: 30 },
      { label: 'Computer Science', pct: 28 },
      { label: 'Finance & Banking', pct: 18 },
      { label: 'Public Health', pct: 12 },
      { label: 'Other Programs', pct: 12 }
    ]
  },
  usa: {
    desc: 'The United States remains the global hub for technology startups, financial centers, and top-tier QS ranked universities.',
    students: '1,890+',
    visaRate: '92%',
    funding: 'USD $52M+',
    unis: 110,
    salary: 'USD $82K',
    courses: [
      { label: 'Computer Science', pct: 40 },
      { label: 'Data Science & BI', pct: 20 },
      { label: 'Business & Finance', pct: 15 },
      { label: 'Electrical Engineering', pct: 13 },
      { label: 'Other Programs', pct: 12 }
    ]
  }
};

/* ─── ADMISSION TIMELINES ─── */
const TIMELINES = [
  { student: 'Arjun Patel', uni: 'TUM', applied: 'Dec \'25', admitted: 'Mar \'26', visa: 'May \'26', departed: 'Sep \'26', status: 'Departed' },
  { student: 'Sneha Kapoor', uni: 'UoT', applied: 'Jan \'26', admitted: 'Apr \'26', visa: 'Jun \'26', departed: 'Sep \'26', status: 'Departed' },
  { student: 'Rohan Mehta', uni: 'Melbourne', applied: 'Nov \'25', admitted: 'Feb \'26', visa: 'Apr \'26', departed: 'Jul \'26', status: 'Departed' },
  { student: 'Aisha Khan', uni: 'LSHTM', applied: 'Dec \'25', admitted: 'Mar \'26', visa: 'May \'26', departed: 'Sep \'26', status: 'Departed' },
  { student: 'Vikram Singh', uni: 'UC San Diego', applied: 'Jan \'26', admitted: 'Apr \'26', visa: 'Jun \'26', departed: 'Sep \'26', status: 'Departed' }
];

/* ─── FAQs ─── */
const FAQS = [
  { q: 'How long does the university admission process take?', a: 'On average, university admissions take 4 to 8 weeks after document submission. Government scholarships and APS verification might add 2 to 3 months of processing time, so applying early is crucial.' },
  { q: 'How are scholarships secured through AtlasPath?', a: 'Our mentors match your academic profile, CGPA, and goals to active scholarships. We then guide you through essay drafting, personal statements (SOPs), soliciting reference letters, and scholarship interview preparation.' },
  { q: 'Can average students with a low CGPA get admissions or scholarships?', a: 'Yes! While fully funded government scholarships are highly competitive, average students can secure admissions and partial tuition waivers by highlighting robust work experience, coding profiles, portfolios, and writing high-impact SOPs.' },
  { q: 'What CGPA is required to study in public German universities?', a: 'German public universities are competitive, usually requiring a minimum CGPA of 7.5/10 (roughly 2.5 on the German scale). However, top universities like TUM or RWTH Aachen might require 8.5+ along with specific course credits.' },
  { q: 'How much does AtlasPath help throughout the process?', a: 'AtlasPath offers end-to-end guidance: university selection, profile structuring, SOP and LOR reviews, blocked account setup, APS certificate processing, mock visa interviews, and pre-departure accommodation networking.' },
  { q: 'When should I start preparing my application?', a: 'You should start preparing your profile 10 to 12 months before your planned intake. This gives you enough time to write tests (IELTS/TOEFL/GRE), request LORs, and apply before early scholarship deadlines close.' },
  { q: 'Can I get a student visa if I have a gap year?', a: 'Yes. Educational or career gaps do not impact your visa success if explained correctly. Doing internships, certifications, or jobs during the gap strengthens your visa statement.' },
  { q: 'Do I need a block account for Canada or other countries?', a: 'Canada requires the GIC (Guaranteed Investment Certificate) which functions similarly to Germany\'s blocked account, costing around CAD $20,635. Other countries like Australia or the UK require proof of liquid bank funds.' },
  { q: 'Is learning the local language mandatory before traveling?', a: 'If your course is taught in English, local language skills are not mandatory for admissions. However, having basic skills (A1/A2 German or French) is highly helpful for local student jobs and integration.' },
  { q: 'Are health insurances covered in the fees?', a: 'In public universities (like Germany), health insurance is separate and mandatory (around €120/mo). For countries like the UK or Australia, students pay an upfront Overseas Student Health Cover (OSHC) or IHS fee during visa submission.' },
  { q: 'Can I change my course after arriving at the university?', a: 'Yes, but it depends on university regulations and visa compliance. Changing courses in the same domain is easier, but shifting domains might require a new university offer and visa adjustment.' },
  { q: 'How does AtlasPath achieve a 95% visa success rate?', a: 'We achieve this by verifying your financial documents, ensuring all transcripts are properly translated, double-checking blocked account compliance, and preparing candidates through rigorous mock interview rounds.' },
  { q: 'What are the part-time work caps for international students?', a: 'Most countries (UK, Canada, Germany, Australia) limit international students to 20 hours of work per week during active semesters, and full-time work during official vacations.' },
  { q: 'How can I get reference letters (LORs) if I graduated years ago?', a: 'You can request LORs from your university professors or academic departments. If you have been working, professional reference letters from current or past employers are also accepted.' },
  { q: 'Can I apply for PR directly after graduation?', a: 'Most countries offer post-study work rights (1 to 3 years) during which you can secure a job. Once you complete the required employment years (e.g. 2 years in Germany, 1 year in Canada), you can apply for Permanent Residency.' }
];

export const SuccessStories: React.FC = () => {
  /* ─── SEARCH & FILTER STATES ─── */
  const [searchName, setSearchName] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [courseFilter, setCourseFilter] = useState('all');
  const [scholFilter, setScholFilter] = useState('all');
  const [activeTabCountry, setActiveTabCountry] = useState('germany');
  const [limit, setLimit] = useState(6);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  /* ─── DYNAMIC FILTERS LOGIC ─── */
  const filteredStories = useMemo(() => {
    return STORIES.filter(s => {
      if (searchName.trim() !== '') {
        const query = searchName.toLowerCase();
        const matchesName = s.name.toLowerCase().includes(query);
        const matchesUni = s.university.toLowerCase().includes(query);
        if (!matchesName && !matchesUni) return false;
      }
      if (countryFilter !== 'all' && s.country !== countryFilter) return false;
      if (courseFilter !== 'all' && !s.course.toLowerCase().includes(courseFilter)) return false;
      if (scholFilter !== 'all') {
        if (scholFilter === 'yes' && s.scholarship === 'None') return false;
        if (scholFilter === 'no' && s.scholarship !== 'None') return false;
      }
      return true;
    });
  }, [searchName, countryFilter, courseFilter, scholFilter]);

  const displayedStories = useMemo(() => {
    return filteredStories.slice(0, limit);
  }, [filteredStories, limit]);

  const handleSliderScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      
      {/* ─── HERO & MAP SECTION ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="success-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#success-grid)" />
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
            <span className="text-[#0F172A] font-semibold">Success Stories</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            {/* Left: Heading & Stats */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1 mb-4 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[10px] font-bold text-slate-600">
                🎓 REAL STORIES, REAL IMPACT
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Real Students.
                <br />
                Real Universities.
                <br />
                Real <span className="font-serif italic font-normal text-primary">Success Stories</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-xl text-pretty"
              >
                Discover how students from different academic backgrounds achieved their global education goals through AtlasPath.
              </motion.p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center max-w-lg">
                {[
                  { value: '15,000+', label: 'Students Guided' },
                  { value: '95%', label: 'Visa Success Rate' },
                  { value: '500+', label: 'University Partners' },
                  { value: '₹250Cr+', label: 'Scholarships Secured' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-lg font-black text-primary leading-none">{stat.value}</span>
                    <span className="text-[9px] text-[#64748B] font-bold mt-1.5 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Dotted World Map Visual */}
            <div className="lg:w-[480px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

              <div>
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Our Global Impact Map</h3>
                <p className="text-[10px] text-slate-400 font-semibold mb-4 leading-normal">AtlasPath candidates successfully studying across major international universities</p>

                {/* Country badges callout list */}
                <div className="space-y-2.5">
                  {[
                    { country: 'Germany', count: '3,450+ Students', visa: '96% Visa Success', flag: '🇩🇪' },
                    { country: 'Canada', count: '2,850+ Students', visa: '90% Visa Success', flag: '🇨🇦' },
                    { country: 'Australia', count: '2,200+ Students', visa: '91% Visa Success', flag: '🇦🇺' },
                    { country: 'United Kingdom', count: '2,100+ Students', visa: '93% Visa Success', flag: '🇬🇧' },
                    { country: 'United States', count: '1,890+ Students', visa: '92% Visa Success', flag: '🇺🇸' }
                  ].map((callout) => (
                    <div key={callout.country} className="flex items-center justify-between text-xs bg-white border border-slate-100/50 rounded-xl p-2.5 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{callout.flag}</span>
                        <div>
                          <span className="font-extrabold text-slate-800 block leading-none">{callout.country}</span>
                          <span className="text-[9px] text-slate-400 font-semibold mt-1 block leading-none">{callout.count}</span>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">{callout.visa}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/countries" className="text-xs font-bold text-primary hover:text-secondary mt-5 flex items-center gap-0.5 self-start">
                Explore All Countries &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FEATURED SUCCESS STORIES CAROUSEL ─── */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Featured Success Stories</h2>
            <p className="text-xs text-slate-400 mt-1">Real academic placements and visa completions</p>
          </div>
          <div className="flex items-center gap-1.5 border border-slate-100 rounded-full p-1 bg-slate-50">
            <button
              onClick={() => handleSliderScroll('left')}
              className="p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none"
              aria-label="Previous Featured"
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
            </button>
            <button
              onClick={() => handleSliderScroll('right')}
              className="p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none"
              aria-label="Next Featured"
            >
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {STORIES.slice(0, 6).map((story) => (
            <div
              key={story.id}
              className="w-[280px] sm:w-[310px] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-100/70 hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0 group"
            >
              {/* Photo Cover */}
              <div className="relative h-[150px] w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                {/* Overlay Name + Initials */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center`}>
                    {story.initials}
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-bold leading-none">{story.name}</h3>
                    <span className="text-[9px] text-white/70 font-semibold mt-1 block">{story.flag} {story.country}</span>
                  </div>
                </div>

                <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase">
                  {story.year}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5 mb-4">
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">University</p>
                    <p className="text-xs font-black text-slate-800 mt-1 leading-snug line-clamp-1">{story.university}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold pt-1 border-t border-slate-50">
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Course</p>
                      <p className="text-slate-700 font-bold mt-1 truncate block">{story.course.split(' in ')[1] || story.course}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Funding</p>
                      <p className="text-slate-700 font-bold mt-1 truncate block">{story.amount.split(' / ')[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">{story.visaStatus}</span>
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    Explore Journey &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STUDENT EXPLORER GRID & FILTERS ─── */}
      <section className="py-14 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3 w-full md:w-auto flex-1 border border-slate-200/60 bg-slate-50/30 rounded-xl px-3.5 py-2.5 hover:border-slate-350 transition-all duration-200 ease-in-out focus-within:ring-0 focus-within:border-current focus-within:shadow-none">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by name or university..."
                className="w-full text-xs font-bold text-[#0F172A] placeholder:text-slate-400 bg-transparent outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none"
              >
                <option value="all">All Countries</option>
                <option value="Germany">Germany</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Netherlands">Netherlands</option>
              </select>

              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none"
              >
                <option value="all">All Courses</option>
                <option value="computer science">Computer Science</option>
                <option value="mechanical">Mechanical</option>
                <option value="data science">Data Science</option>
                <option value="public health">Public Health</option>
                <option value="ai">AI & Robotics</option>
              </select>

              <select
                value={scholFilter}
                onChange={(e) => setScholFilter(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none"
              >
                <option value="all">All Scholarships</option>
                <option value="yes">Scholarship Winner</option>
                <option value="no">Self-Funded / None</option>
              </select>
            </div>
          </div>

          {/* Grid Layout of at least 12 rich student profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedStories.map((story) => (
              <div key={story.id} className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border border-slate-100"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-none">{story.name}</h4>
                      <p className="text-[9px] text-slate-400 font-semibold mt-1">{story.university}</p>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed mb-4">
                    <span className="font-bold text-slate-700">Journey:</span> &ldquo;{story.challenges} {story.howHelped} {story.outcome}&rdquo;
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-500 font-semibold py-2.5 bg-slate-50 rounded-xl px-3 border border-slate-100 mb-4">
                    <div>
                      <span className="text-slate-400 uppercase text-[7px] tracking-wider block">Course</span>
                      <span className="font-extrabold text-slate-700 truncate block">{story.course}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase text-[7px] tracking-wider block">Award</span>
                      <span className="font-extrabold text-slate-700 truncate block">{story.scholarship}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-50 pt-3 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-700">{story.flag} {story.country} &bull; {story.year}</span>
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Check className="w-2.5 h-2.5 text-emerald-500" /> {story.visaStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {filteredStories.length > limit && (
            <div className="text-center">
              <button
                onClick={() => setLimit(prev => prev + 6)}
                className="px-5 py-3 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm focus:outline-none"
              >
                Load More Stories
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ─── SUCCESS BY DESTINATION (TABBED DASHBOARD) ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Success by Destination</h2>
          <p className="text-xs text-slate-400 mt-1">Detailed country metrics, placement volume, and salary outcomes</p>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-50 border border-slate-200/50 rounded-2xl p-1 max-w-xl mx-auto">
          {Object.keys(SUCCESS_BY_DESTINATION).map((code) => (
            <button
              key={code}
              onClick={() => setActiveTabCountry(code)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all focus:outline-none ${
                activeTabCountry === code ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-800'
              }`}
            >
              {code === 'uk' ? 'United Kingdom' : code === 'usa' ? 'United States' : code}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col lg:flex-row items-stretch gap-8 shadow-sm">
          {/* Stats layout */}
          <div className="flex-1">
            <h3 className="text-sm font-black text-slate-800 tracking-tight mb-3">
              {activeTabCountry.toUpperCase()} Success Stories Overview
            </h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed mb-6">
              {SUCCESS_BY_DESTINATION[activeTabCountry].desc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Students Placed', val: SUCCESS_BY_DESTINATION[activeTabCountry].students },
                { label: 'Visa Approvals', val: SUCCESS_BY_DESTINATION[activeTabCountry].visaRate },
                { label: 'Funding Secured', val: SUCCESS_BY_DESTINATION[activeTabCountry].funding },
                { label: 'Partner Universities', val: SUCCESS_BY_DESTINATION[activeTabCountry].unis }
              ].map((row) => (
                <div key={row.label} className="bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none">{row.label}</span>
                  <span className="text-xs font-black text-slate-800 mt-2 block leading-none">{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular courses chart */}
          <div className="w-full lg:w-[320px] shrink-0 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Popular Disciplines</h4>
            <div className="space-y-3.5">
              {SUCCESS_BY_DESTINATION[activeTabCountry].courses.map((bar) => (
                <div key={bar.label} className="text-xs font-semibold">
                  <div className="flex items-center justify-between text-slate-600 mb-1">
                    <span>{bar.label}</span>
                    <span className="text-slate-800 font-extrabold">{bar.pct}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${bar.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCHOLARSHIP WINNERS SPOTLIGHT ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Scholarship Winners Spotlight</h2>
            <p className="text-xs text-slate-400 mt-1">Highlighting candidates placed on fully funded global grants</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { type: 'DAAD Scholars', count: '500+ Winners', stipend: 'Up to €12,000 / year' },
              { type: 'Chevening Scholars', count: '680+ Winners', stipend: 'Full tuition + living' },
              { type: 'Fulbright Scholars', count: '450+ Winners', stipend: 'Up to $70,000 / year' },
              { type: 'Vanier Scholars', count: '220+ Winners', stipend: 'Up to CAD $50,000 / year' },
              { type: 'Erasmus+ Scholars', count: '780+ Winners', stipend: 'Up to €15,000 / year' }
            ].map((win, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-none">{win.type}</h4>
                <p className="text-[9px] text-[#64748B] font-bold mt-1.5 leading-none">{win.count}</p>
                <p className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mt-3 inline-block font-bold">{win.stipend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADMISSION TIMELINES & VIDEO TESTIMONIALS (SIDE-BY-SIDE) ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Left Table: Timelines */}
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5">
              <Clock className="w-4.5 h-4.5 text-primary" />
              Admission Timelines
            </h3>
            
            <div className="overflow-x-auto text-[10px] font-semibold text-slate-600">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/80 text-slate-400 font-bold uppercase text-[8px] tracking-wider">
                    <th className="pb-2.5">Student</th>
                    <th className="pb-2.5">University</th>
                    <th className="pb-2.5">Applied</th>
                    <th className="pb-2.5">Admitted</th>
                    <th className="pb-2.5">Visa Approved</th>
                    <th className="pb-2.5">Departed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                  {TIMELINES.map((t, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                      <td className="py-3 font-extrabold text-[#0f172a]">{t.student}</td>
                      <td className="py-3 text-primary">{t.uni}</td>
                      <td className="py-3">{t.applied}</td>
                      <td className="py-3">{t.admitted}</td>
                      <td className="py-3 text-emerald-600">{t.visa}</td>
                      <td className="py-3">{t.departed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Cards: Mock Video Testimonials */}
          <div className="w-full lg:w-[480px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Video Testimonials</h3>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { name: 'Priya Sharma', uni: 'UoE Edinburgh', cover: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&auto=format&fit=crop&q=80' },
                { name: 'Karthik Reddy', uni: 'Waterloo Canada', cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&auto=format&fit=crop&q=80' },
                { name: 'Neha Verma', uni: 'TUM Munich', cover: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&auto=format&fit=crop&q=80' },
                { name: 'Aditya Nair', uni: 'NUS Singapore', cover: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80' }
              ].map((video, idx) => (
                <div key={idx} className="relative h-[90px] rounded-xl overflow-hidden shadow-sm group cursor-pointer">
                  <img src={video.cover} alt={video.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white/50 transition-all">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[9px] font-bold text-white leading-none">
                    <p>{video.name}</p>
                    <span className="text-white/75 text-[8px] font-semibold mt-0.5 block">{video.uni}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── CAREER OUTCOMES, GALLERY & BEFORE-AFTER (3-COLUMN ROW) ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Career Outcomes */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Placement Outcomes</h3>
                <p className="text-[10px] text-slate-400 font-semibold mb-4 leading-normal">International alumni securing corporate roles post graduation</p>

                <div className="space-y-3.5">
                  {[
                    { role: 'Software Engineer', pct: 32, salary: '€62K/yr average' },
                    { role: 'Data Scientist', pct: 21, salary: '€65K/yr average' },
                    { role: 'Research Scientist', pct: 16, salary: '€58K/yr average' },
                    { role: 'Product Manager', pct: 12, salary: '€75K/yr average' },
                    { role: 'AI/ML Engineer', pct: 12, salary: '€70K/yr average' }
                  ].map((bar, idx) => (
                    <div key={idx} className="text-xs font-semibold">
                      <div className="flex items-center justify-between text-slate-600 mb-1">
                        <span>{bar.role}</span>
                        <span className="text-slate-800 font-extrabold">{bar.pct}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-primary" style={{ width: `${bar.pct}%` }} />
                      </div>
                      <span className="text-[8px] text-[#64748B] font-bold uppercase tracking-wider">{bar.salary}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Photo Gallery Masonry */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5">
                  <Camera className="w-4.5 h-4.5 text-primary" />
                  Gallery Network
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold mb-4 leading-normal">Campus celebrations, convocations, and visa approvals</p>

                <div className="grid grid-cols-2 gap-2">
                  <div className="h-[70px] rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&auto=format&fit=crop&q=80" alt="Campus Life" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[70px] rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&auto=format&fit=crop&q=80" alt="Graduation" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[70px] rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=80" alt="Study Group" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[70px] rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&auto=format&fit=crop&q=80" alt="Admissions" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Before vs After */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Journey Comparison</h3>
              
              <div className="space-y-3.5 text-xs font-semibold">
                {[
                  { before: 'Confused & lost', after: 'Clear target shortlists' },
                  { before: 'No scholarship plan', after: 'Full DAAD/Chevening support' },
                  { before: 'Complex document checklist', after: 'Structured LOR/SOP dossiers' },
                  { before: 'Unstable visa ratios', after: '95% visa success approval' },
                  { before: 'Unclear job endpoints', after: 'Post-study roles at ASML/BMW' }
                ].map((row, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1 text-[9px] text-[#8b5cf6] font-extrabold uppercase">
                      <span>Before:</span>
                      <span className="text-slate-500 font-semibold capitalize">{row.before}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>After: {row.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FAQs ACCORDION (15 FAQs) ─── */}
      <section className="py-14 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400 mt-1">Get precise answers about admissions, CGPA caps, and support channels</p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <label htmlFor={`success-faq-${idx}`} className="w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 select-none">
                <span className="text-xs font-bold text-slate-800 leading-snug">{faq.q}</span>
                <span className="text-slate-400 shrink-0">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </label>
              <input type="checkbox" id={`success-faq-${idx}`} className="peer hidden" />
              <div className="max-h-0 overflow-hidden peer-checked:max-h-96 transition-all duration-300 bg-white border-t border-slate-100">
                <p className="p-4 text-xs leading-relaxed text-[#64748B] font-medium text-pretty">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="success-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#success-cta-grid)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Join Our Network
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight">
            Ready to Become Our Next Success Story?<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Evaluate Your Study Abroad Options
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
            Take our AI assessment, shortlist matched university courses, coordinate LOR reference checks, and get visa slots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <a
              href="/assessment"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Take Assessment</span>
            </a>
            <a
              href="/book-consultation"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/universities"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Globe className="w-4 h-4" />
              <span>Explore Universities</span>
            </a>
            <a
              href="/scholarships"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Scholarships</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
