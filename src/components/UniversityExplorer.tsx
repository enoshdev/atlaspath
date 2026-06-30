import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart2, ArrowRight, ChevronDown, ChevronUp,
  SlidersHorizontal, Award, GraduationCap, CheckCircle, X, School, Globe, Landmark, DollarSign, Briefcase, Check
} from 'lucide-react';

/* ─── DATA ─── */
interface University {
  id: string; name: string; short: string; country: string; flag: string;
  qsRank: number; tuition: string; acceptance: string; scholarships: string;
  programs: number; color: string; type: 'Public' | 'Private';
  employment: string; courses: string[]; intake: string;
  image: string;
  imageAlt: string;
  imageSource: string;
}

const UNIVERSITIES: University[] = [
  { id:'mit', name:'Massachusetts Institute of Technology', short:'MIT', country:'United States', flag:'🇺🇸', qsRank:1, tuition:'$57,986/yr', acceptance:'4%', scholarships:'Up to $80,000', programs:350, color:'#8C1515', type:'Private', employment:'94%', courses:['CS','AI','Engineering','Physics'], intake:'4,500+', image:'', imageAlt:'Massachusetts Institute of Technology Great Dome campus landmark', imageSource:'Official MIT Campus' },
  { id:'stanford', name:'Stanford University', short:'Stanford', country:'United States', flag:'🇺🇸', qsRank:5, tuition:'$56,169/yr', acceptance:'4%', scholarships:'Up to $75,000', programs:420, color:'#8C1515', type:'Private', employment:'95%', courses:['CS','Business','Medicine','Law'], intake:'4,700+', image:'', imageAlt:'Stanford University Main Quad and Palm Drive', imageSource:'Official Stanford Campus' },
  { id:'oxford', name:'University of Oxford', short:'Oxford', country:'United Kingdom', flag:'🇬🇧', qsRank:3, tuition:'£9,250–£43,050/yr', acceptance:'17%', scholarships:'Up to £16,000', programs:300, color:'#002147', type:'Public', employment:'92%', courses:['PPE','Medicine','Law','History'], intake:'3,200+', image:'', imageAlt:'University of Oxford Radcliffe Camera landmark building', imageSource:'Official Oxford Campus' },
  { id:'harvard', name:'Harvard University', short:'Harvard', country:'United States', flag:'🇺🇸', qsRank:4, tuition:'$57,261/yr', acceptance:'4%', scholarships:'Up to $80,000', programs:500, color:'#A51C30', type:'Private', employment:'96%', courses:['Business','Law','Medicine','CS'], intake:'5,200+', image:'', imageAlt:'Harvard University campus yard and landmark buildings', imageSource:'Official Harvard Campus' },
  { id:'cambridge', name:'University of Cambridge', short:'Cambridge', country:'United Kingdom', flag:'🇬🇧', qsRank:2, tuition:'£9,250–£58,038/yr', acceptance:'21%', scholarships:'Up to £18,000', programs:280, color:'#003B71', type:'Public', employment:'91%', courses:['Mathematics','Law','Medicine','Engineering'], intake:'3,400+', image:'', imageAlt:'University of Cambridge Kings College Chapel view', imageSource:'Official Cambridge Campus' },
  { id:'eth', name:'ETH Zurich', short:'ETH', country:'Switzerland', flag:'🇨🇭', qsRank:7, tuition:'CHF 730/yr', acceptance:'27%', scholarships:'Up to CHF 12,000', programs:150, color:'#1F407A', type:'Public', employment:'93%', courses:['Engineering','CS','Physics','Architecture'], intake:'3,900+', image:'', imageAlt:'ETH Zurich Blue & Grey Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'nus', name:'National University of Singapore', short:'NUS', country:'Singapore', flag:'🇸🇬', qsRank:8, tuition:'SGD $17,550–$37,550/yr', acceptance:'5%', scholarships:'Up to SGD $30,000', programs:280, color:'#003D7C', type:'Public', employment:'91%', courses:['Business','Engineering','CS','Medicine'], intake:'7,500+', image:'', imageAlt:'National University of Singapore Orange & Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'ucl', name:'University College London', short:'UCL', country:'United Kingdom', flag:'🇬🇧', qsRank:9, tuition:'£9,250–£35,000/yr', acceptance:'63%', scholarships:'Up to £5,000', programs:450, color:'#500778', type:'Public', employment:'88%', courses:['Law','Medicine','Architecture','CS'], intake:'9,000+', image:'', imageAlt:'University College London Purple Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'toronto', name:'University of Toronto', short:'U of T', country:'Canada', flag:'🇨🇦', qsRank:25, tuition:'CAD $45,690/yr', acceptance:'43%', scholarships:'Up to CAD $20,000', programs:700, color:'#002A5C', type:'Public', employment:'89%', courses:['CS','Medicine','Business','Engineering'], intake:'10,000+', image:'', imageAlt:'University of Toronto Navy Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'tum', name:'Technical University of Munich', short:'TUM', country:'Germany', flag:'🇩🇪', qsRank:37, tuition:'€0–€3,000/yr', acceptance:'8%', scholarships:'Up to €12,000', programs:220, color:'#3070B3', type:'Public', employment:'90%', courses:['Engineering','CS','Business','Physics'], intake:'8,500+', image:'', imageAlt:'Technical University of Munich Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'melbourne', name:'University of Melbourne', short:'UniMelb', country:'Australia', flag:'🇦🇺', qsRank:33, tuition:'AUD $36,000–$46,000/yr', acceptance:'70%', scholarships:'Up to AUD $30,000', programs:380, color:'#003087', type:'Public', employment:'87%', courses:['Medicine','Law','Business','Engineering'], intake:'11,000+', image:'', imageAlt:'University of Melbourne Blue & Gold Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'ubc', name:'University of British Columbia', short:'UBC', country:'Canada', flag:'🇨🇦', qsRank:34, tuition:'CAD $35,280/yr', acceptance:'52%', scholarships:'Up to CAD $18,000', programs:500, color:'#002145', type:'Public', employment:'88%', courses:['Forestry','Engineering','Business','Medicine'], intake:'12,000+', image:'', imageAlt:'University of British Columbia Navy Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'imperial', name:'Imperial College London', short:'Imperial', country:'United Kingdom', flag:'🇬🇧', qsRank:6, tuition:'£9,250–£38,000/yr', acceptance:'14%', scholarships:'Up to £10,000', programs:160, color:'#003E74', type:'Public', employment:'94%', courses:['Engineering','Medicine','CS','Business'], intake:'4,000+', image:'', imageAlt:'Imperial College London Deep Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'sydney', name:'University of Sydney', short:'USYD', country:'Australia', flag:'🇦🇺', qsRank:18, tuition:'AUD $28,000–$52,000/yr', acceptance:'30%', scholarships:'Up to AUD $25,000', programs:400, color:'#002366', type:'Public', employment:'86%', courses:['Medicine','Law','Engineering','Arts'], intake:'10,500+', image:'', imageAlt:'University of Sydney Navy Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'rwth', name:'RWTH Aachen University', short:'RWTH', country:'Germany', flag:'🇩🇪', qsRank:106, tuition:'€0–€3,500/yr', acceptance:'60%', scholarships:'Up to €11,000', programs:160, color:'#006AB3', type:'Public', employment:'92%', courses:['Engineering','CS','Physics','Business'], intake:'9,500+', image:'', imageAlt:'RWTH Aachen University Royal Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'ntu', name:'Nanyang Technological University', short:'NTU', country:'Singapore', flag:'🇸🇬', qsRank:15, tuition:'SGD $17,550/yr', acceptance:'12%', scholarships:'Up to SGD $25,000', programs:210, color:'#C00000', type:'Public', employment:'90%', courses:['Engineering','CS','Business'], intake:'6,200+', image:'', imageAlt:'Nanyang Technological University Red Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'tcd', name:'Trinity College Dublin', short:'TCD', country:'Ireland', flag:'🇮🇪', qsRank:81, tuition:'€18,860/yr', acceptance:'35%', scholarships:'Up to. €10,000', programs:240, color:'#0A3161', type:'Public', employment:'89%', courses:['Arts','Medicine','Law','CS'], intake:'4,800+', image:'', imageAlt:'Trinity College Dublin Navy Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'ucd', name:'University College Dublin', short:'UCD', country:'Ireland', flag:'🇮🇪', qsRank:126, tuition:'€19,500/yr', acceptance:'40%', scholarships:'Up to €8,000', programs:270, color:'#004A97', type:'Public', employment:'88%', courses:['Business','CS','Engineering'], intake:'5,500+', image:'', imageAlt:'University College Dublin Royal Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'mcgill', name:'McGill University', short:'McGill', country:'Canada', flag:'🇨🇦', qsRank:30, tuition:'CAD $32,000/yr', acceptance:'46%', scholarships:'Up to CAD $12,000', programs:400, color:'#ED1B2F', type:'Public', employment:'90%', courses:['Medicine','Law','CS','Arts'], intake:'8,200+', image:'', imageAlt:'McGill University Crimson Red Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'waterloo', name:'University of Waterloo', short:'Waterloo', country:'Canada', flag:'🇨🇦', qsRank:112, tuition:'CAD $42,000/yr', acceptance:'53%', scholarships:'Up to CAD $10,000', programs:180, color:'#FFD54F', type:'Public', employment:'92%', courses:['CS','Mathematics','Engineering'], intake:'7,000+', image:'', imageAlt:'University of Waterloo Gold Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'anu', name:'Australian National University', short:'ANU', country:'Australia', flag:'🇦🇺', qsRank:34, tuition:'AUD $39,000/yr', acceptance:'35%', scholarships:'Up to AUD $20,000', programs:320, color:'#BE1E2D', type:'Public', employment:'87%', courses:['Arts','Sciences','CS'], intake:'4,200+', image:'', imageAlt:'Australian National University Red Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'unsw', name:'UNSW Sydney', short:'UNSW', country:'Australia', flag:'🇦🇺', qsRank:19, tuition:'AUD $41,000/yr', acceptance:'30%', scholarships:'Up to AUD $15,000', programs:390, color:'#F0B323', type:'Public', employment:'89%', courses:['Engineering','CS','Business'], intake:'8,000+', image:'', imageAlt:'UNSW Sydney Gold & Black Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'lmu', name:'LMU Munich', short:'LMU', country:'Germany', flag:'🇩🇪', qsRank:54, tuition:'€0–€3,000/yr', acceptance:'10%', scholarships:'Up to €6,000', programs:190, color:'#008C3A', type:'Public', employment:'88%', courses:['Physics','Medicine','CS'], intake:'7,800+', image:'', imageAlt:'LMU Munich Green Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'heidelberg', name:'Heidelberg University', short:'Heidelberg', country:'Germany', flag:'🇩🇪', qsRank:87, tuition:'€0–€3,000/yr', acceptance:'15%', scholarships:'Up to €7,000', programs:140, color:'#9B1C1C', type:'Public', employment:'86%', courses:['Medicine','History','CS'], intake:'3,500+', image:'', imageAlt:'Heidelberg University Dark Red Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'caltech', name:'California Institute of Technology', short:'Caltech', country:'United States', flag:'🇺🇸', qsRank:6, tuition:'$60,816/yr', acceptance:'3%', scholarships:'Up to $82,000', programs:120, color:'#FF6C0C', type:'Private', employment:'95%', courses:['Physics','Chemistry','Engineering'], intake:'1,000+', image:'', imageAlt:'California Institute of Technology Orange Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'princeton', name:'Princeton University', short:'Princeton', country:'United States', flag:'🇺🇸', qsRank:17, tuition:'$59,710/yr', acceptance:'4%', scholarships:'Up to $78,000', programs:290, color:'#EE7624', type:'Private', employment:'94%', courses:['Arts','Mathematics','CS'], intake:'2,800+', image:'', imageAlt:'Princeton University Orange & Black Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'columbia', name:'Columbia University', short:'Columbia', country:'United States', flag:'🇺🇸', qsRank:23, tuition:'$63,530/yr', acceptance:'6%', scholarships:'Up to $76,000', programs:380, color:'#1D70B8', type:'Private', employment:'92%', courses:['Journalism','Law','Business','CS'], intake:'6,500+', image:'', imageAlt:'Columbia University Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'yale', name:'Yale University', short:'Yale', country:'United States', flag:'🇺🇸', qsRank:17, tuition:'$62,250/yr', acceptance:'5%', scholarships:'Up to $80,000', programs:310, color:'#00356B', type:'Private', employment:'94%', courses:['Arts','Law','Medicine'], intake:'3,000+', image:'', imageAlt:'Yale University Yale Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'kcl', name:'King\'s College London', short:'KCL', country:'United Kingdom', flag:'🇬🇧', qsRank:40, tuition:'£9,250–£32,000/yr', acceptance:'13%', scholarships:'Up to £6,000', programs:340, color:'#B90000', type:'Public', employment:'89%', courses:['Arts','Medicine','Law'], intake:'7,200+', image:'', imageAlt:'Kings College London Red Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
  { id:'edinburgh', name:'University of Edinburgh', short:'Edinburgh', country:'United Kingdom', flag:'🇬🇧', qsRank:22, tuition:'£9,250–£30,400/yr', acceptance:'10%', scholarships:'Up to £8,000', programs:410, color:'#1B365D', type:'Public', employment:'90%', courses:['Informatics','Sciences','History'], intake:'8,800+', image:'', imageAlt:'University of Edinburgh Navy Blue Branded Gradient Card', imageSource:'AtlasPath Premium Design System' },
];

interface Destination {
  country: string; flag: string; students: string;
  avgTuition: string; topUnis: string; popularCourses: string[];
  image: string;
}

const DESTINATIONS: Destination[] = [
  { country:'Germany', flag:'🇩🇪', students:'61,293 Students', avgTuition:'€0 – €3,500/yr', topUnis:'45+ Top Unis', popularCourses:['Engineering','CS','MBA'], image:'/assets/germany-dest.png' },
  { country:'Canada', flag:'🇨🇦', students:'38,084 Students', avgTuition:'CAD $19K – $26K/yr', topUnis:'30+ Top Unis', popularCourses:['Business','CS','Medicine'], image:'/assets/canada-dest.png' },
  { country:'Australia', flag:'🇦🇺', students:'22,398 Students', avgTuition:'AUD $25K – $42K/yr', topUnis:'40+ Top Unis', popularCourses:['Engineering','Nursing','MBA'], image:'/assets/australia-dest.png' },
  { country:'United Kingdom', flag:'🇬🇧', students:'55,742 Students', avgTuition:'£9K – £38K/yr', topUnis:'100+ Top Unis', popularCourses:['Law','Medicine','Finance'], image:'/assets/uk-dest.png' },
  { country:'USA', flag:'🇺🇸', students:'44,982 Students', avgTuition:'$30K – $55K/yr', topUnis:'200+ Top Unis', popularCourses:['CS','Business','Engineering'], image:'/assets/usa-dest.png' },
  { country:'Ireland', flag:'🇮🇪', students:'7,318 Students', avgTuition:'€10K – €25K/yr', topUnis:'10+ Top Unis', popularCourses:['CS','Finance','Pharmacy'], image:'/assets/ireland-dest.png' },
];

interface Scholarship {
  name: string; country: string; flag: string; amount: string;
  type: string; programs: string; color: string;
}

const SCHOLARSHIPS: Scholarship[] = [
  { name:'DAAD Scholarship', country:'Germany', flag:'🇩🇪', amount:'Up to €11,208/yr', type:'Partially Funded', programs:"Master's, PhD", color:'#3070B3' },
  { name:'Canada Graduate Scholarship', country:'Canada', flag:'🇨🇦', amount:'Up to CAD $50,000', type:'Partially Funded', programs:"Master's, PhD", color:'#b91c1c' },
  { name:'Australia Awards', country:'Australia', flag:'🇦🇺', amount:'Fully Funded', type:'Fully Funded', programs:"Master's, PhD", color:'#1d4ed8' },
  { name:'Chevening Scholarship', country:'United Kingdom', flag:'🇬🇧', amount:'Fully Funded', type:'Fully Funded', programs:"Master's only", color:'#1e3a8a' },
  { name:'Erasmus+ Scholarship', country:'Europe', flag:'🇪🇺', amount:'Up to €1,800/month', type:'Partially Funded', programs:"Master's, PhD", color:'#4f46e5' },
  { name:'Fulbright Foreign Student', country:'USA', flag:'🇺🇸', amount:'Fully Funded', type:'Fully Funded', programs:"Master's, PhD", color:'#991b1b' },
];

/* ─── FILTER SECTION ─── */
const FilterSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-3.5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-sm font-semibold text-[#0F172A] mb-1 focus:outline-none focus:ring-0">
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {open && <div className="mt-2.5">{children}</div>}
    </div>
  );
};

/* ─── UNIVERSITY CARD ─── */
interface UniversityCardProps {
  uni: University;
  onCompare: (id: string) => void;
  comparing: boolean;
  onViewDetails: (uni: University) => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ uni, onCompare, comparing, onViewDetails }) => {
  const hasValidImage = uni.image && uni.image.startsWith('http');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.18 } }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-100/85 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Campus Image Header */}
      <div className="relative h-[110px] w-full overflow-hidden">
        {hasValidImage ? (
          <>
            <img
              src={uni.image}
              alt={uni.imageAlt || uni.name}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </>
        ) : (
          /* Premium Branded Gradient Card Fallback */
          <div
            className="w-full h-full flex flex-col justify-between p-3 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${uni.color}dd 0%, ${uni.color} 100%)`
            }}
          >
            {/* Large Watermark Abbreviation in background */}
            <span
              className="absolute right-[-10px] bottom-[-20px] font-black text-5xl text-white/[0.08] select-none tracking-tighter"
              style={{ pointerEvents: 'none' }}
            >
              {uni.short}
            </span>
            
            {/* Mini University Icon/Logo */}
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
              <School className="w-3.5 h-3.5 text-white" />
            </div>

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Short Name Logo Circle */}
        <div className="absolute bottom-2.5 left-3.5 w-9 h-9 rounded-xl flex items-center justify-center border border-white/25 shadow-sm" style={{ backgroundColor: uni.color }}>
          <span className="text-white font-extrabold text-[11px] uppercase tracking-wider">{uni.short.slice(0, 3)}</span>
        </div>

        {/* QS Rank Badge */}
        <div className="absolute top-2.5 right-3.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/10">
          <span className="text-[8px] font-bold text-white/80 uppercase">QS</span>
          <span className="text-xs font-black text-white leading-none">#{uni.qsRank}</span>
        </div>
      </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-1">
      <div className="mb-3.5">
        <h3 className="text-[12px] font-bold text-[#0F172A] leading-snug mb-1 line-clamp-2 min-h-[36px]">{uni.name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-sm leading-none">{uni.flag}</span>
          <span className="text-[10px] text-[#64748B] font-semibold">{uni.country}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-4 flex-1">
        {[
          { label: 'All-In Fees', value: uni.tuition },
          { label: 'Acceptance', value: uni.acceptance },
          { label: 'Scholarships', value: uni.scholarships },
          { label: 'Programs', value: `${uni.programs}+` },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[9px] font-medium text-[#94A3B8] uppercase tracking-wider leading-none">{label}</p>
            <p className="text-[10px] font-bold text-[#0F172A] mt-1 leading-tight">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onViewDetails(uni)}
          className="flex-grow py-2.5 rounded-xl text-[10px] font-bold text-[#6D4AFF] bg-[#6D4AFF]/6 hover:bg-[#6D4AFF]/12 text-center transition-colors focus:outline-none focus:ring-0 border-0 outline-none"
        >
          View Details
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCompare(uni.id);
          }}
          className={`px-3 py-2.5 rounded-xl text-[10px] font-bold transition-all focus:outline-none focus:ring-0 border-0 outline-none flex items-center justify-center gap-1 shrink-0 ${
            comparing
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
          title={comparing ? "Remove from comparison" : "Add to comparison"}
        >
          {comparing ? <Check className="w-3 h-3" /> : <BarChart2 className="w-3 h-3" />}
          <span>{comparing ? 'Selected' : 'Compare'}</span>
        </button>
      </div>
    </div>
  </motion.div>
  );
};

/* ─── MAIN COMPONENT ─── */
export const UniversityExplorer: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [hasScholarships, setHasScholarships] = useState(false);
  const [sortBy, setSortBy] = useState('QS Ranking');
  const [compareList, setCompareList] = useState<string[]>(['mit', 'stanford', 'toronto']);
  const [showAllUnis, setShowAllUnis] = useState(false);
  const [activeUni, setActiveUni] = useState<University | null>(null);

  const toggleCountry = (c: string) => setSelectedCountries(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  const toggleCourse = (c: string) => setSelectedCourses(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  const toggleCompare = (id: string) => setCompareList(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 3 ? [...prev, id] : prev);

  const filteredUnis = UNIVERSITIES.filter(u => {
    if (selectedCountries.length > 0 && !selectedCountries.includes(u.country)) return false;
    if (hasScholarships && !u.scholarships) return false;
    return true;
  }).sort((a, b) => sortBy === 'QS Ranking' ? a.qsRank - b.qsRank : 0);

  const displayedUnis = showAllUnis ? filteredUnis : filteredUnis.slice(0, 30);
  const compareUnis = UNIVERSITIES.filter(u => compareList.includes(u.id));

  const countries = ['Germany', 'Canada', 'Australia', 'United Kingdom', 'United States', 'Ireland'];
  const courses = ['Computer Science', 'Data Science', 'Business Analytics', 'MBA', 'Mechanical Engineering', 'Artificial Intelligence'];
  const countryCounts: Record<string, number> = {};
  UNIVERSITIES.forEach(u => { countryCounts[u.country] = (countryCounts[u.country] || 0) + 1; });

  return (
    <div className="bg-white">

      {/* ── POPULAR DESTINATIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#0F172A]">Popular Destinations</h2>
          <a href="/countries" className="flex items-center gap-1 text-sm font-semibold text-[#6D4AFF] hover:underline">
            View all countries <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.country}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[3/4.2] flex flex-col justify-end"
            >
              <img
                src={dest.image}
                alt={dest.country}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />
              
              <div className="relative p-4 z-10">
                <div className="text-2xl mb-1">{dest.flag}</div>
                <h3 className="text-white font-bold text-[14px] mb-2 leading-tight">{dest.country}</h3>
                <div className="flex flex-col gap-0.5 mb-2.5">
                  <div className="text-white/90 text-[10px] font-semibold">{dest.students}</div>
                  <div className="text-white/85 text-[9px]">Avg: <span className="text-white font-bold">{dest.avgTuition}</span></div>
                  <div className="text-white/80 text-[9px]">{dest.topUnis}</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {dest.popularCourses.map(c => (
                    <span key={c} className="text-[8px] px-1.5 py-0.5 rounded bg-white/20 text-white font-medium backdrop-blur-[2px]">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FILTERS + UNIVERSITY GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex gap-7">

          {/* ── LEFT: STICKY SIDEBAR FILTERS ── */}
          <aside className="hidden lg:block w-[240px] flex-shrink-0">
            <div className="sticky top-[80px] bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#6D4AFF]" />
                  <span className="text-sm font-bold text-[#0F172A]">Filters</span>
                </div>
                <button
                  onClick={() => { setSelectedCountries([]); setSelectedCourses([]); setHasScholarships(false); }}
                  className="text-[11px] font-semibold text-[#6D4AFF] hover:underline focus:outline-none"
                >
                  Clear All
                </button>
              </div>

              <FilterSection title="Country" defaultOpen>
                <div className="flex flex-col gap-2">
                  {countries.map(c => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer group select-none">
                      <input
                        type="checkbox"
                        checked={selectedCountries.includes(c)}
                        onChange={() => toggleCountry(c)}
                        className="w-3.5 h-3.5 rounded accent-[#6D4AFF] focus:ring-0 focus:outline-none"
                      />
                      <span className="text-[12px] text-[#0F172A] flex-1">{c}</span>
                      <span className="text-[10px] text-[#94A3B8]">({countryCounts[c] || 0})</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Course" defaultOpen>
                <div className="flex flex-col gap-2">
                  {courses.map(c => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="checkbox" checked={selectedCourses.includes(c)} onChange={() => toggleCourse(c)} className="w-3.5 h-3.5 rounded accent-[#6D4AFF] focus:ring-0 focus:outline-none" />
                      <span className="text-[12px] text-[#0F172A] flex-1">{c}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Degree Level">
                <div className="flex flex-col gap-2">
                  {["Bachelor's", "Master's", 'PhD', 'Diploma'].map(d => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded accent-[#6D4AFF] focus:ring-0 focus:outline-none" />
                      <span className="text-[12px] text-[#0F172A]">{d}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="QS Ranking">
                <div className="flex flex-col gap-2">
                  {['Top 10', 'Top 11 – 50', 'Top 51 – 100', 'Top 101 – 200', 'Top 201 – 500'].map(r => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="radio" name="rank" className="w-3.5 h-3.5 accent-[#6D4AFF] focus:ring-0 focus:outline-none" />
                      <span className="text-[12px] text-[#0F172A]">{r}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Intake">
                <div className="flex flex-wrap gap-2">
                  {['September', 'January', 'May'].map(i => (
                    <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-slate-200 text-[#64748B] cursor-pointer hover:border-[#6D4AFF] hover:text-[#6D4AFF] transition-colors">{i}</span>
                  ))}
                </div>
              </FilterSection>

              <div className="py-3.5 flex flex-col gap-3">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-[12px] font-semibold text-[#0F172A]">Scholarships Available</span>
                  <div
                    onClick={() => setHasScholarships(!hasScholarships)}
                    className={`w-9 h-5 rounded-full transition-colors ${hasScholarships ? 'bg-[#6D4AFF]' : 'bg-slate-200'} relative cursor-pointer`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${hasScholarships ? 'translate-x-4' : 'translate-x-0.5'}`} />
                  </div>
                </label>
                {['IELTS Required', 'Work Rights', 'Post Study Visa'].map(toggle => (
                  <label key={toggle} className="flex items-center justify-between cursor-pointer select-none">
                    <span className="text-[12px] font-semibold text-[#0F172A]">{toggle}</span>
                    <div className="w-9 h-5 rounded-full bg-slate-200 relative">
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow" />
                    </div>
                  </label>
                ))}
              </div>

              <a href="#uni-grid" className="block w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors mt-2 text-center focus:outline-none focus:ring-0">
                Show Results
              </a>
              <p className="text-[11px] text-center text-[#64748B] mt-2">
                {filteredUnis.length} universities found
              </p>
            </div>
          </aside>

          {/* ── RIGHT: UNIVERSITY GRID ── */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-semibold text-[#0F172A]">
                Universities <span className="text-[#94A3B8] font-normal">({filteredUnis.length} results)</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-[#64748B]">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="text-[12px] font-semibold text-[#0F172A] border border-slate-200 rounded-lg px-3 py-1.5 outline-none bg-white focus:ring-0"
                >
                  <option>QS Ranking</option>
                  <option>Tuition (Low to High)</option>
                  <option>Acceptance Rate</option>
                  <option>Programs Count</option>
                </select>
              </div>
            </div>

            {displayedUnis.length === 0 ? (
              <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[300px] mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center mb-4 text-slate-400 border border-slate-200/55">
                  <School className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">No universities matched your search.</h3>
                <p className="text-xs text-slate-500 mb-4">Suggestions:</p>
                <div className="flex flex-col items-start gap-1.5 text-xs text-slate-600 text-left bg-white p-4 rounded-2xl border border-slate-100 shadow-sm min-w-[200px]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Try another country</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Adjust budget</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Remove filters</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 mb-6 animate-fadeIn">
                {displayedUnis.map((uni) => (
                  <UniversityCard
                    key={uni.id}
                    uni={uni}
                    onCompare={toggleCompare}
                    comparing={compareList.includes(uni.id)}
                    onViewDetails={setActiveUni}
                  />
                ))}
              </div>
            )}

            {!showAllUnis && filteredUnis.length > 30 && displayedUnis.length > 0 && (
              <div className="flex justify-center mb-10">
                <button
                  onClick={() => setShowAllUnis(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#6D4AFF] border-2 border-[#6D4AFF]/20 hover:bg-[#6D4AFF]/6 transition-colors focus:outline-none"
                >
                  Load More Universities
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* ── COMPARE UNIVERSITIES ── */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-[#0F172A]">Compare Universities</h2>
                <a href="/countries" className="flex items-center gap-1 text-sm font-semibold text-[#6D4AFF] hover:underline">
                  View full comparison <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-start">
                
                {/* Left floating selection card */}
                <div className="w-full lg:w-[260px] bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between min-h-[320px] shadow-sm flex-shrink-0">
                  <div>
                    <h3 className="text-[#0F172A] font-extrabold text-[15px] leading-snug mb-3">
                      Select universities to compare
                    </h3>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      {compareList.length} / 3 selected
                    </p>
                  </div>
                  
                  {/* Select guide */}
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Click the "Compare" button at the bottom of any university card to add it to this evaluation matrix.
                  </p>

                  <button className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors focus:outline-none focus:ring-0">
                    Compare
                  </button>
                </div>

                {/* Right Comparison Table or Empty State */}
                {compareUnis.length === 0 ? (
                  <div className="flex-1 w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center mb-4 text-slate-400 border border-slate-200/55">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 mb-2">You haven't selected any universities yet.</h3>
                    <p className="text-xs text-slate-500 mb-6 max-w-xs leading-relaxed">
                      Choose up to 3 universities to compare their tuition, acceptance, and employment rates side by side.
                    </p>
                    <a
                      href="#uni-grid"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('uni-grid')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors"
                    >
                      Browse Universities
                    </a>
                  </div>
                ) : (
                  <div className="flex-1 w-full bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden overflow-x-auto animate-fadeIn">
                    <div className="min-w-[650px] grid gap-0" style={{ gridTemplateColumns: `140px repeat(${compareUnis.length}, 1fr)` }}>
                      
                      {/* Metrics Labels Column */}
                      <div className="border-r border-slate-100 bg-slate-50/40">
                      <div className="h-[92px] p-4 flex items-end border-b border-slate-100">
                        <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">University</span>
                      </div>
                      {[
                        'QS Ranking',
                        'Annual Tuition Fees',
                        'Acceptance Rate',
                        'Scholarships',
                        'Employment Rate',
                        'Student Intake'
                      ].map(metric => (
                        <div key={metric} className="h-12 px-4 border-b border-slate-100 flex items-center bg-slate-50/20">
                          <span className="text-[11px] font-bold text-[#64748B]">{metric}</span>
                        </div>
                      ))}
                      <div className="h-12 border-b border-slate-100" />
                    </div>

                    {/* Compare University Columns */}
                    {compareUnis.map((uni) => (
                      <div key={uni.id} className="border-r border-slate-100 last:border-r-0">
                        {/* Column Header */}
                        <div className="h-[92px] p-4 border-b border-slate-100 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-extrabold text-xs shadow-sm" style={{ backgroundColor: uni.color }}>
                            {uni.short.slice(0, 3)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12px] font-extrabold text-[#0F172A] leading-tight truncate">{uni.name}</p>
                            <p className="text-[10px] text-[#64748B] mt-0.5 flex items-center gap-1 font-semibold">
                              <span>{uni.flag}</span>
                              <span className="truncate">{uni.country}</span>
                            </p>
                          </div>
                        </div>

                        {/* Metrics values rows */}
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-bold text-[#0F172A]">{uni.qsRank}</span>
                        </div>
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-semibold text-[#0F172A]">{uni.tuition}</span>
                        </div>
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-semibold text-[#0F172A]">{uni.acceptance}</span>
                        </div>
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-semibold text-[#0F172A]">{uni.scholarships}</span>
                        </div>
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-semibold text-[#0F172A]">{uni.employment}</span>
                        </div>
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <span className="text-xs font-semibold text-[#0F172A]">{uni.intake}</span>
                        </div>

                        {/* View details cell trigger */}
                        <div className="h-12 px-4 border-b border-slate-100 flex items-center">
                          <button
                            onClick={() => setActiveUni(uni)}
                            className="text-[10px] font-bold text-[#6D4AFF] hover:underline flex items-center gap-0.5 focus:outline-none"
                          >
                            View Details <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

            {/* ── SCHOLARSHIPS ── */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-[#0F172A]">Scholarships You Can Apply For</h2>
                <a href="/scholarships" className="flex items-center gap-1 text-sm font-semibold text-[#6D4AFF] hover:underline">
                  View all scholarships <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                {SCHOLARSHIPS.map((s) => (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -3, transition: { duration: 0.18 } }}
                    className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 text-white text-[11px] font-bold" style={{ backgroundColor: s.color }}>
                      <Award className="w-4 h-4" />
                    </div>
                    <h3 className="text-[12px] font-bold text-[#0F172A] leading-tight mb-1">{s.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-sm">{s.flag}</span>
                      <span className="text-[10px] text-[#64748B]">{s.country}</span>
                    </div>
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-semibold mb-2 ${s.type === 'Fully Funded' ? 'bg-emerald-50 text-emerald-700' : 'bg-violet-50 text-violet-700'}`}>
                      {s.type}
                    </span>
                    <p className="text-[11px] font-bold text-[#0F172A] mb-1">{s.amount}</p>
                    <p className="text-[10px] text-[#64748B] mb-3">{s.programs}</p>
                    <a href="/scholarships" className="block w-full text-center py-1.5 rounded-lg text-[10px] font-semibold text-[#6D4AFF] bg-[#6D4AFF]/8 hover:bg-[#6D4AFF]/14 transition-colors focus:outline-none border-0 outline-none">
                      Apply Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── CTA SECTION ── */}
            <div className="rounded-2xl overflow-hidden mb-12" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
              <div className="px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider mb-2">Need Expert Help?</p>
                  <h3 className="text-2xl font-extrabold text-white leading-tight mb-2">
                    Need help shortlisting<br />the right universities?
                  </h3>
                  <p className="text-[13px] text-slate-400">
                    Our experts will help you choose the best universities based on your profile, budget and goals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a href="/book-consultation" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors focus:outline-none">
                    Book Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/assessment" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-100 transition-colors focus:outline-none">
                    Start Assessment
                  </a>
                </div>
              </div>
            </div>

            {/* ── STATS BAR ── */}
            <div className="rounded-2xl bg-[#0F172A] px-8 py-8">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {[
                  { icon: School, value: '500+', label: 'Universities' },
                  { icon: Globe, value: '50+', label: 'Countries' },
                  { icon: GraduationCap, value: '1,000+', label: 'Programs' },
                  { icon: Award, value: '₹250Cr+', label: 'Scholarships' },
                  { icon: CheckCircle, value: '95%', label: 'Visa Success' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex flex-col items-center text-center">
                    <Icon className="w-5 h-5 text-[#6D4AFF] mb-2" />
                    <p className="text-2xl font-extrabold text-white leading-none mb-1">{value}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED UNIVERSITY MODAL (POPUP) ── */}
      <AnimatePresence>
        {activeUni && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveUni(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-0 border-0 outline-none"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Banner Image */}
              <div className="relative h-[200px] w-full overflow-hidden">
                {activeUni.image && activeUni.image.startsWith('http') ? (
                  <>
                    <img
                      src={activeUni.image}
                      alt={activeUni.imageAlt || activeUni.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
                  </>
                ) : (
                  /* Premium Branded Gradient Card Fallback */
                  <div
                    className="w-full h-full flex flex-col justify-between p-6 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${activeUni.color}dd 0%, ${activeUni.color} 100%)`
                    }}
                  >
                    {/* Large Watermark Abbreviation in background */}
                    <span
                      className="absolute right-[-20px] bottom-[-40px] font-black text-8xl text-white/[0.08] select-none tracking-tighter"
                      style={{ pointerEvents: 'none' }}
                    >
                      {activeUni.short}
                    </span>
                    
                    {/* Logo */}
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                      <School className="w-5 h-5 text-white" />
                    </div>

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                
                {/* Header overlay info */}
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 shadow" style={{ backgroundColor: activeUni.color }}>
                      <span className="text-white font-black text-sm">{activeUni.short.slice(0, 3)}</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white leading-tight">{activeUni.name}</h2>
                      <p className="text-xs text-white/80 mt-1 flex items-center gap-1.5 font-semibold">
                        <span>{activeUni.flag}</span>
                        <span>{activeUni.country}</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] bg-white/20 text-white font-bold uppercase tracking-wider">{activeUni.type}</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/25 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-2xl flex items-center gap-1">
                    <span className="text-[10px] font-bold text-white/90">QS RANK</span>
                    <span className="text-base font-black text-white leading-none">#{activeUni.qsRank}</span>
                  </div>
                </div>
              </div>

              {/* Detail Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider">Tuition Fees</p>
                      <p className="text-sm font-bold text-[#0F172A] mt-0.5">{activeUni.tuition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider">Acceptance</p>
                      <p className="text-sm font-bold text-[#0F172A] mt-0.5">{activeUni.acceptance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider">Employment</p>
                      <p className="text-sm font-bold text-[#0F172A] mt-0.5">{activeUni.employment}</p>
                    </div>
                  </div>
                </div>

                {/* Scholarships and Courses */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#6D4AFF]" />
                      Scholarship Support
                    </h3>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                      <p className="text-sm font-extrabold text-[#6D4AFF]">{activeUni.scholarships}</p>
                      <p className="text-[11px] text-[#64748B] mt-1">Available for global eligibility criteria and merit applicants.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-[#6D4AFF]" />
                      Popular Programs
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {activeUni.courses.map(course => (
                        <span key={course} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-150 text-[#0F172A]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveUni(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#64748B] hover:bg-slate-50 transition-colors focus:outline-none border-0 outline-none"
                  >
                    Cancel
                  </button>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-colors focus:outline-none"
                  >
                    Contact Admission Desk
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
