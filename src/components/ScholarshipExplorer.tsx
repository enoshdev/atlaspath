import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Bookmark, BarChart2, ArrowRight, ChevronDown, ChevronUp,
  Globe, CheckCircle, GraduationCap, Users, Award, Filter, Calendar,
  Briefcase, RefreshCw, Check, FileText, BookOpen
} from 'lucide-react';

/* ─── DATA TYPES & DATA ─── */
interface Scholarship {
  id: string;
  name: string;
  country: string;
  flag: string;
  provider: string;
  providerType: 'Government' | 'University' | 'Private' | 'Research' | 'Merit-based';
  amount: string;
  amountNumeric: number;
  coverage: string;
  fundingType: 'Fully Funded' | 'Partially Funded';
  degrees: string[];
  eligibility: string;
  deadline: string;
  successRate: string;
  successRateNumeric: number;
  ieltsMin: number;
  image: string;
}

const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'daad',
    name: 'DAAD Scholarship',
    country: 'Germany',
    flag: '🇩🇪',
    provider: 'German Academic Exchange Service',
    providerType: 'Government',
    amount: 'Up to €12,000 / year',
    amountNumeric: 12000,
    coverage: 'Tuition + Living Stipend + Health Insurance',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Graduates with 2+ years of professional work experience',
    deadline: 'Varies (usually Oct-Dec)',
    successRate: '90%',
    successRateNumeric: 90,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'chevening',
    name: 'Chevening Scholarship',
    country: 'United Kingdom',
    flag: '🇬🇧',
    provider: 'UK Foreign, Commonwealth & Development Office',
    providerType: 'Government',
    amount: '£18,000 - £30,000 / year',
    amountNumeric: 24000,
    coverage: 'Tuition Fees + Monthly Stipend + Travel Costs',
    fundingType: 'Fully Funded',
    degrees: ['Masters'],
    eligibility: 'Bachelor\'s degree, 2 years work experience, leadership potential',
    deadline: 'Nov 07, 2026',
    successRate: '88%',
    successRateNumeric: 88,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'fulbright',
    name: 'Fulbright Foreign Student Program',
    country: 'United States',
    flag: '🇺🇸',
    provider: 'US Department of State',
    providerType: 'Government',
    amount: 'Up to $70,000 / year',
    amountNumeric: 70000,
    coverage: 'Full Tuition + Airfare + Living Stipend + Health Cover',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Completed Bachelor\'s, strong academic record & leadership',
    deadline: 'Oct 15, 2026',
    successRate: '92%',
    successRateNumeric: 92,
    ieltsMin: 7.0,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'erasmus',
    name: 'Erasmus+ Scholarship',
    country: 'Europe',
    flag: '🇪🇺',
    provider: 'European Commission',
    providerType: 'Government',
    amount: '€5,000 - €15,000 / year',
    amountNumeric: 10000,
    coverage: 'Tuition Fees + Participation Cost + Travel Stipend',
    fundingType: 'Partially Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Excellent academic record, admitted to Erasmus Joint degree',
    deadline: 'Feb 28, 2027',
    successRate: '85%',
    successRateNumeric: 85,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'australia-awards',
    name: 'Australia Awards',
    country: 'Australia',
    flag: '🇦🇺',
    provider: 'Department of Foreign Affairs and Trade',
    providerType: 'Government',
    amount: 'AUD $25,000 - $50,000 / year',
    amountNumeric: 37000,
    coverage: 'Full Tuition + Return Air Travel + Living Stipend',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Admissible to Australian universities, home return policy',
    deadline: 'Apr 30, 2027',
    successRate: '89%',
    successRateNumeric: 89,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vanier',
    name: 'Vanier Canada Graduate Scholarships',
    country: 'Canada',
    flag: '🇨🇦',
    provider: 'Government of Canada',
    providerType: 'Government',
    amount: 'CAD $50,000 / year',
    amountNumeric: 36000,
    coverage: 'Full PhD Funding & Research Stipend',
    fundingType: 'Fully Funded',
    degrees: ['PhD'],
    eligibility: 'Exceptional academic success, research potential, leadership',
    deadline: 'Nov 01, 2026',
    successRate: '92%',
    successRateNumeric: 92,
    ieltsMin: 7.0,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'rhodes',
    name: 'Rhodes Scholarship',
    country: 'United Kingdom',
    flag: '🇬🇧',
    provider: 'The Rhodes Trust',
    providerType: 'Merit-based',
    amount: 'Full Funding + £18,180 / year',
    amountNumeric: 40000,
    coverage: 'Full Tuition Fees + Living Stipend + Health Insurance',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Outstanding intellect, character, leadership, GPA 3.7+',
    deadline: 'Oct 01, 2026',
    successRate: '84%',
    successRateNumeric: 84,
    ieltsMin: 7.5,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'mext',
    name: 'MEXT Scholarship',
    country: 'Japan',
    flag: '🇯🇵',
    provider: 'Government of Japan',
    providerType: 'Government',
    amount: 'JPY 117,000 - 145,000 / month',
    amountNumeric: 13000,
    coverage: 'Full Tuition + Roundtrip Airfare + Monthly Stipend',
    fundingType: 'Fully Funded',
    degrees: ['Bachelors', 'Masters', 'PhD'],
    eligibility: 'Under 35, willing to learn basic Japanese language',
    deadline: 'May 15, 2027',
    successRate: '90%',
    successRateNumeric: 90,
    ieltsMin: 6.0,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'gates-cambridge',
    name: 'Gates Cambridge Scholarship',
    country: 'United Kingdom',
    flag: '🇬🇧',
    provider: 'Bill & Melinda Gates Foundation',
    providerType: 'Private',
    amount: 'Full Funding + £18,744 / year',
    amountNumeric: 42000,
    coverage: 'Full Tuition + Airfare + Discretionary Funding',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Outstanding intellectual ability, leadership, commitment to helping others',
    deadline: 'Dec 05, 2026',
    successRate: '84%',
    successRateNumeric: 84,
    ieltsMin: 7.5,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'eiffel',
    name: 'Eiffel Excellence Scholarship',
    country: 'France',
    flag: '🇫🇷',
    provider: 'Ministry for Europe and Foreign Affairs',
    providerType: 'Government',
    amount: 'Up to €1,400 / month',
    amountNumeric: 16800,
    coverage: 'Living Stipend + Return Airfare + Local Transport',
    fundingType: 'Fully Funded',
    degrees: ['Masters', 'PhD'],
    eligibility: 'Up to 25 yrs (Master\'s) or 30 yrs (PhD), excellence profile',
    deadline: 'Jan 10, 2027',
    successRate: '88%',
    successRateNumeric: 88,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'orange-tulip',
    name: 'Orange Tulip Scholarship',
    country: 'Netherlands',
    flag: '🇳🇱',
    provider: 'Nuffic Neso',
    providerType: 'University',
    amount: '€10,000 - €22,000 / year',
    amountNumeric: 18000,
    coverage: 'Partial or Full Tuition Fee waivers',
    fundingType: 'Partially Funded',
    degrees: ['Bachelors', 'Masters'],
    eligibility: 'High GPA, admitted to participating Dutch universities',
    deadline: 'Apr 01, 2027',
    successRate: '89%',
    successRateNumeric: 89,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'singapore-singa',
    name: 'SINGA Graduate Award',
    country: 'Singapore',
    flag: '🇸🇬',
    provider: 'Agency for Science, Technology and Research',
    providerType: 'Research',
    amount: 'SGD $2,200 - $2,700 / month',
    amountNumeric: 25000,
    coverage: 'Full Tuition + Monthly Stipend + Settling-In Grant',
    fundingType: 'Fully Funded',
    degrees: ['PhD'],
    eligibility: 'Strong interest in research, excellent academic record',
    deadline: 'Jun 01, 2026',
    successRate: '91%',
    successRateNumeric: 91,
    ieltsMin: 6.5,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop&q=80'
  }
];

/* ─── COUNTRY TABS DATA ─── */
const SCHOLARSHIPS_BY_COUNTRY: Record<string, { name: string; amount: string }[]> = {
  germany: [
    { name: 'DAAD Scholarship', amount: 'Up to €1,200/mo + full fees' },
    { name: 'Deutschlandstipendium', amount: '€300 / month merit award' },
    { name: 'Heinrich Böll Foundation', amount: 'Up to €850/mo + study grant' },
    { name: 'Konrad-Adenauer-Stiftung', amount: 'Up to €861/mo for Master\'s' },
    { name: 'Friedrich Ebert Stiftung', amount: 'Comprehensive living stipend' }
  ],
  canada: [
    { name: 'Vanier Canada Graduate Scholarships', amount: 'CAD $50,000 / year' },
    { name: 'Banting Postdoctoral Fellowships', amount: 'CAD $70,000 / year' },
    { name: 'Ontario Graduate Scholarship (OGS)', amount: 'CAD $15,000 / year' },
    { name: 'UBC International Major Entrance', amount: 'Up to CAD $40,000 total' },
    { name: 'University of Waterloo Entrance Awards', amount: 'Up to CAD $10,000' }
  ],
  australia: [
    { name: 'Australia Awards Scholarships', amount: 'Fully Funded + Stipend' },
    { name: 'Destination Australia Scholarship', amount: 'AUD $15,000 / year' },
    { name: 'University of Sydney Research Training', amount: 'AUD $37,207 / year' },
    { name: 'Melbourne Research Scholarship', amount: 'Full fee offset + stipend' },
    { name: 'UNSW International Scientia Coursework', amount: 'Full tuition coverage' }
  ],
  uk: [
    { name: 'Chevening Scholarships', amount: 'Fully Funded + Airfare' },
    { name: 'Rhodes Scholarship at Oxford', amount: 'Full tuition + £18,180/yr' },
    { name: 'Gates Cambridge Scholarship', amount: 'Full tuition + £18,744/yr' },
    { name: 'Commonwealth Master\'s Scholarships', amount: 'Fully Funded' },
    { name: 'Great Scholarships', amount: 'Minimum £10,000 tuition waiver' }
  ],
  usa: [
    { name: 'Fulbright Student Program', amount: 'Fully Funded + Flights' },
    { name: 'Hubert H. Humphrey Fellowship', amount: 'Tuition + Living allowances' },
    { name: 'AAUW International Fellowships', amount: 'Up to $50,000 for PhD' },
    { name: 'Knight-Hennessy Scholars at Stanford', amount: 'Full funding + stipend' },
    { name: 'Harvard University Academy Scholars', amount: 'Up to $75,000 / year' }
  ]
};

/* ─── SUCCESS STORIES ─── */
interface SuccessStory {
  student: string;
  country: string;
  flag: string;
  scholarship: string;
  university: string;
  amount: string;
  story: string;
  initials: string;
  color: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  { student: 'Priya Sharma', country: 'Germany', flag: '🇩🇪', scholarship: 'DAAD Scholarship', university: 'Technical University of Munich', amount: '€1,200 / month', story: 'AtlasPath helped me secure the DAAD scholarship by providing detailed SOP checklists and reviewing my engineering research draft.', initials: 'PS', color: 'bg-indigo-600' },
  { student: 'Arjun Patel', country: 'United Kingdom', flag: '🇬🇧', scholarship: 'Chevening Scholarship', university: 'University of London', amount: 'Fully Funded', story: 'The mock interviews and leadership essay guidance from AtlasPath mentors were the keys to my Chevening success.', initials: 'AP', color: 'bg-[#6D4AFF]' },
  { student: 'Neha Verma', country: 'United States', flag: '🇺🇸', scholarship: 'Fulbright Scholarship', university: 'Stanford University', amount: 'Fully Funded', story: 'From profile review to visa support, AtlasPath turned my dream of studying at Stanford on a Fulbright into reality.', initials: 'NV', color: 'bg-emerald-600' },
  { student: 'Rohan Mehta', country: 'Australia', flag: '🇦🇺', scholarship: 'Australia Awards', university: 'University of Melbourne', amount: 'AUD $30,000 / year', story: 'I was lost with Australia Awards requirements. AtlasPath structured my credentials and guided me through each step.', initials: 'RM', color: 'bg-amber-600' }
];

/* ─── FILTER ACCORDION ─── */
const FilterAccordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-3.5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-semibold text-[#0F172A] mb-1 focus:outline-none"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-2.5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ScholarshipExplorer: React.FC = () => {
  /* ─── STATE MANAGEMENT ─── */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFundings, setSelectedFundings] = useState<string[]>([]);
  const [ieltsFilter, setIeltsFilter] = useState('any');
  const [savedScholarships, setSavedScholarships] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>(['daad', 'chevening']);
  const [activeTabCountry, setActiveTabCountry] = useState('germany');
  const [limit, setLimit] = useState(5);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  /* ─── HANDLERS ─── */
  const toggleCountry = (c: string) =>
    setSelectedCountries(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const toggleDegree = (d: string) =>
    setSelectedDegrees(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);

  const toggleType = (t: string) =>
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const toggleFunding = (f: string) =>
    setSelectedFundings(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedScholarships(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleCompareSelection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      }
      if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const clearAllFilters = () => {
    setSelectedCountries([]);
    setSelectedDegrees([]);
    setSelectedTypes([]);
    setSelectedFundings([]);
    setIeltsFilter('any');
    setSearchQuery('');
  };

  const handleSliderScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  /* ─── FILTER LOGIC ─── */
  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS.filter(s => {
      // Search Box
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = s.name.toLowerCase().includes(query);
        const matchesProvider = s.provider.toLowerCase().includes(query);
        const matchesCountry = s.country.toLowerCase().includes(query);
        if (!matchesName && !matchesProvider && !matchesCountry) return false;
      }
      // Country Checkboxes
      if (selectedCountries.length > 0 && !selectedCountries.includes(s.country)) return false;
      // Degree Checkboxes
      if (selectedDegrees.length > 0 && !s.degrees.some(d => selectedDegrees.includes(d))) return false;
      // Scholarship Type Checkboxes
      if (selectedTypes.length > 0 && !selectedTypes.includes(s.providerType)) return false;
      // Funding Type Checkboxes
      if (selectedFundings.length > 0 && !selectedFundings.includes(s.fundingType)) return false;
      // IELTS Dropdown
      if (ieltsFilter !== 'any') {
        const score = parseFloat(ieltsFilter);
        if (s.ieltsMin > score) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCountries, selectedDegrees, selectedTypes, selectedFundings, ieltsFilter]);

  const displayedScholarships = useMemo(() => {
    return filteredScholarships.slice(0, limit);
  }, [filteredScholarships, limit]);

  // Comparison Matrix data resolver
  const comparisonMatrix = useMemo(() => {
    const s1 = SCHOLARSHIPS.find(s => s.id === compareList[0]) || SCHOLARSHIPS[0];
    const s2 = SCHOLARSHIPS.find(s => s.id === (compareList[1] || compareList[0])) || SCHOLARSHIPS[1];
    return {
      s1,
      s2,
      rows: [
        { label: 'Coverage', val1: s1.coverage, val2: s2.coverage },
        { label: 'Funding Amount', val1: s1.amount, val2: s2.amount },
        { label: 'Duration / Degree', val1: s1.degrees.join(', '), val2: s2.degrees.join(', ') },
        { label: 'Provider Type', val1: s1.providerType, val2: s2.providerType },
        { label: 'Visa & Health Cover', val1: s1.id === 'daad' || s1.id === 'chevening' ? 'Included' : 'Partial Offset', val2: s2.id === 'daad' || s2.id === 'chevening' ? 'Included' : 'Partial Offset' },
        { label: 'Min IELTS Req.', val1: s1.ieltsMin === 0 ? 'Not Mandatory' : `${s1.ieltsMin}+`, val2: s2.ieltsMin === 0 ? 'Not Mandatory' : `${s2.ieltsMin}+` },
        { label: 'Success Rate', val1: s1.successRate, val2: s2.successRate },
        { label: 'Deadline Date', val1: s1.deadline, val2: s2.deadline }
      ]
    };
  }, [compareList]);

  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      {/* ─── HERO SECTION ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* World Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="schol-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#schol-grid)" />
          </svg>
        </div>

        {/* Dynamic Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold">Scholarships</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            {/* Left: Heading + Search */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight animate-float"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Find Scholarships That
                <br />
                <span className="font-serif italic font-normal text-primary">
                  Fund Your Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-2xl text-pretty"
              >
                Explore global scholarships, grants and funding opportunities from universities, governments and international organizations.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
                className="relative mb-6"
              >
                <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-200 shadow-md shadow-slate-100 hover:border-slate-300 transition-all duration-200 ease-in-out focus-within:ring-0 focus-within:border-current focus-within:shadow-none">
                  <Search className="absolute left-5 w-5 h-5 text-[#94A3B8] pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search scholarships, e.g. DAAD, Chevening, Computer Science..."
                    className="flex-1 pl-14 pr-4 py-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-transparent outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent"
                  />
                  <button
                    type="button"
                    className="m-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-primary hover:bg-secondary transition-colors shrink-0 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
                  >
                    Search
                  </button>
                </div>
              </motion.div>

              {/* Autocomplete tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <span className="text-xs font-semibold text-[#94A3B8]">Popular:</span>
                {['Fully-funded', 'Masters in Canada', 'DAAD Germany', 'MBA Scholarships', 'Erasmus+'].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      const searchStr = c === 'Fully-funded' ? 'Fully Funded' : c === 'DAAD Germany' ? 'DAAD' : c;
                      setSearchQuery(searchStr);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/12 hover:bg-primary/14 transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Right: Floating Student Illustration Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:w-[380px] bg-slate-50/70 border border-slate-100 rounded-3xl p-6 flex flex-col justify-center shrink-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">AtlasPath Metrics</h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {[
                  { value: '5,000+', label: 'Scholarships Available', color: 'text-primary' },
                  { value: '50+', label: 'Countries Supported', color: 'text-[#8B5CF6]' },
                  { value: '₹500Cr+', label: 'Funding Opportunity', color: 'text-emerald-600' },
                  { value: '1,000+', label: 'University Grants', color: 'text-indigo-600' },
                ].map(({ value, label, color }) => (
                  <div key={label} className="flex flex-col">
                    <p className={`text-[25px] font-black leading-none tracking-tight ${color}`}>{value}</p>
                    <p className="text-[11px] text-[#64748B] font-medium mt-1.5 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED SCHOLARSHIPS ─── */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Featured Scholarships</h2>
            <p className="text-xs text-slate-400 mt-1">Premier government and global foundation grants</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#explorer-grid" className="text-xs font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1">
              View all scholarships <ArrowRight className="w-3 h-3" />
            </a>
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
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {SCHOLARSHIPS.slice(0, 5).map((schol) => (
            <div
              key={schol.id}
              className="w-[280px] sm:w-[310px] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-100/70 hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0 group"
            >
              {/* Header Image */}
              <div className="relative h-[130px] w-full overflow-hidden">
                <img
                  src={schol.image}
                  alt={schol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Badges on overlay */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-lg">{schol.flag}</span>
                  <span className="text-white text-xs font-bold">{schol.country}</span>
                </div>

                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 text-[9px] font-bold text-white uppercase tracking-wider">
                  {schol.fundingType}
                </div>
              </div>

              {/* Details Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-slate-800 tracking-tight leading-snug line-clamp-1 mb-2">
                    {schol.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 text-[10px] text-slate-500 font-semibold mb-4 pt-1">
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Funding</p>
                      <p className="text-slate-700 font-bold mt-1.5 leading-snug">{schol.amount.split(' / ')[0]}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Coverage</p>
                      <p className="text-slate-700 font-bold mt-1.5 leading-snug truncate">{schol.coverage.split(' + ')[0]}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Eligible Degrees</p>
                      <p className="text-slate-700 font-bold mt-1.5 leading-snug">{schol.degrees.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Deadline</p>
                      <p className="text-slate-700 font-bold mt-1.5 leading-snug">{schol.deadline}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{schol.successRate} Success Rate</span>
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FILTER SYSTEM & GRID ─── */}
      <section id="explorer-grid" className="py-14 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            
            {/* Sidebar filter */}
            <div className="w-full lg:w-[260px] shrink-0">
              <div className="sticky top-24 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#0F172A]">
                    <Filter className="w-4 h-4 text-primary" />
                    <span>Filter Scholarships</span>
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-bold text-primary hover:text-[#5B3BE0] transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {/* Country Destination */}
                <FilterAccordion title="Study Destination" defaultOpen={true}>
                  <div className="flex flex-col gap-2.5">
                    {['Germany', 'Canada', 'Australia', 'United Kingdom', 'United States', 'France', 'Singapore'].map((c) => (
                      <label key={c} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCountries.includes(c)}
                          onChange={() => toggleCountry(c)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Degree Level */}
                <FilterAccordion title="Degree Level">
                  <div className="flex flex-col gap-2.5">
                    {['Bachelors', 'Masters', 'PhD'].map((d) => (
                      <label key={d} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedDegrees.includes(d)}
                          onChange={() => toggleDegree(d)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{d}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Scholarship Type */}
                <FilterAccordion title="Scholarship Type">
                  <div className="flex flex-col gap-2.5">
                    {['Government', 'University', 'Private', 'Research', 'Merit-based'].map((type) => (
                      <label key={type} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Funding Type */}
                <FilterAccordion title="Funding Type">
                  <div className="flex flex-col gap-2.5">
                    {['Fully Funded', 'Partially Funded'].map((funding) => (
                      <label key={funding} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFundings.includes(funding)}
                          onChange={() => toggleFunding(funding)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{funding}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* IELTS score requirement */}
                <FilterAccordion title="IELTS Requirement">
                  <select
                    value={ieltsFilter}
                    onChange={(e) => setIeltsFilter(e.target.value)}
                    className="w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-2 focus:outline-none"
                  >
                    <option value="any">No Minimum IELTS Score</option>
                    <option value="6.0">Under 6.0</option>
                    <option value="6.5">6.5 and above</option>
                    <option value="7.0">7.0 and above</option>
                    <option value="7.5">7.5 and above</option>
                  </select>
                </FilterAccordion>

                <div className="mt-5 text-center">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{filteredScholarships.length} scholarships found</p>
                </div>
              </div>
            </div>

            {/* Right: premium card grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Scholarships <span className="text-slate-400 font-medium">({filteredScholarships.length})</span>
                </h3>
                {selectedCountries.length > 0 && (
                  <button onClick={clearAllFilters} className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">Clear filters</button>
                )}
              </div>

              {filteredScholarships.length === 0 ? (
                <div className="text-center py-20 bg-gradient-to-br from-slate-50 to-white border border-dashed border-slate-200 rounded-3xl">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="text-base font-bold text-slate-600">No scholarships found.</p>
                  <p className="text-sm text-slate-400 mt-1">Try adjusting your filters above</p>
                  <button onClick={clearAllFilters} className="mt-4 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Explore Scholarships</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  {displayedScholarships.map((schol) => {
                    const saved = savedScholarships.includes(schol.id);
                    const comparing = compareList.includes(schol.id);
                    return (
                      <motion.div
                        layout
                        key={schol.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col"
                      >
                        {/* Card header with image */}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={schol.image}
                            alt={schol.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                          
                          {/* Top badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                              <span>{schol.flag}</span>
                              <span>{schol.country}</span>
                            </span>
                            <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                              schol.fundingType === 'Fully Funded' 
                                ? 'bg-emerald-500/80 text-white' 
                                : 'bg-amber-500/80 text-white'
                            }`}>
                              {schol.fundingType === 'Fully Funded' ? 'Full' : 'Partial'}
                            </span>
                          </div>

                          {/* Title on image */}
                          <div className="absolute bottom-3 left-4 right-4">
                            <h4 className="text-sm font-bold text-white leading-tight drop-shadow-sm">{schol.name}</h4>
                            <p className="text-[10px] text-white/70 font-medium mt-0.5">{schol.provider}</p>
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-4 flex-1 flex flex-col gap-3">
                          {/* Key metrics row */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Amount</p>
                              <p className="text-[11px] font-extrabold text-slate-800 mt-0.5 truncate">{schol.amount.split(' / ')[0]}</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Success</p>
                              <p className="text-[11px] font-extrabold text-emerald-600 mt-0.5">{schol.successRate}</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">IELTS</p>
                              <p className="text-[11px] font-extrabold text-slate-800 mt-0.5">{schol.ieltsMin}+</p>
                            </div>
                          </div>

                          {/* Eligibility */}
                          <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">{schol.eligibility}</p>

                          {/* Degree tags */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            {schol.degrees.map(d => (
                              <span key={d} className="px-2 py-0.5 rounded-md bg-primary/6 text-[9px] font-semibold text-primary border border-primary/10">{d}</span>
                            ))}
                            <span className="text-[9px] text-slate-400 font-medium ml-auto">{schol.deadline}</span>
                          </div>

                          {/* Actions row */}
                          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-auto">
                            <button
                              onClick={(e) => toggleCompareSelection(schol.id, e)}
                              className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                                comparing ? 'bg-primary border-primary text-white shadow-sm shadow-primary/20' : 'border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                              }`}
                              title="Compare"
                            >
                              <BarChart2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => toggleSave(schol.id, e)}
                              className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                                saved ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm shadow-emerald-500/20' : 'border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                              }`}
                              title="Save"
                            >
                              <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
                            </button>
                            <a
                              href="https://wa.me/919876543210"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 h-9 rounded-xl text-center text-xs font-extrabold text-white bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-1.5 group/btn"
                            >
                              <span>Apply Now</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {filteredScholarships.length > limit && (
                <div className="text-center">
                  <button
                    onClick={() => setLimit(prev => prev + 5)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Load More</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── TOOLBOX: Country Lists, Comparison, Funded, Deadlines ─── */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Column 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-slate-800">By Country</h3>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {['germany', 'canada', 'australia', 'uk', 'usa'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabCountry(tab)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                      activeTabCountry === tab ? 'bg-primary text-white shadow-sm' : 'bg-slate-50 text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-2.5">
                {SCHOLARSHIPS_BY_COUNTRY[activeTabCountry]?.map((schol, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-[11px] font-semibold text-slate-700 truncate">{schol.name}</span>
                    <span className="text-[9px] font-bold text-primary shrink-0 ml-2">{schol.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Comparison */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-slate-800">Compare</h3>
              </div>
              <div className="grid grid-cols-[90px_1fr_1fr] gap-1 pb-3 border-b border-slate-100">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Feature</span>
                <span className="text-[10px] font-black text-slate-800 truncate text-center">{comparisonMatrix.s1.name.split(' ')[0]}</span>
                <span className="text-[10px] font-black text-slate-800 truncate text-center">{comparisonMatrix.s2.name.split(' ')[0]}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {comparisonMatrix.rows.slice(0, 5).map((row) => (
                  <div key={row.label} className="grid grid-cols-[90px_1fr_1fr] gap-1 py-2 items-center text-[9px] font-semibold">
                    <span className="text-slate-500 truncate">{row.label}</span>
                    <span className="text-slate-800 text-center truncate">{row.val1}</span>
                    <span className="text-slate-800 text-center truncate">{row.val2}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Fully Funded */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-xs font-bold text-slate-800">Fully Funded</h3>
              </div>
              <div className="space-y-2.5">
                {SCHOLARSHIPS.filter(s => s.fundingType === 'Fully Funded').slice(0, 5).map((schol) => (
                  <div key={schol.id} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{schol.flag}</span>
                      <span className="text-[11px] font-semibold text-slate-700 truncate max-w-[110px]">{schol.name}</span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Full</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4: Deadlines */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-xs font-bold text-slate-800">Deadlines</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { month: 'May 2027', name: 'MEXT Scholarship', flag: '🇯🇵' },
                  { month: 'Jun 2026', name: 'SINGA Graduate Award', flag: '🇸🇬' },
                  { month: 'Oct 2026', name: 'Fulbright Program', flag: '🇺🇸' },
                  { month: 'Nov 2026', name: 'Chevening Scholarship', flag: '🇬🇧' },
                  { month: 'Dec 2026', name: 'Gates Cambridge', flag: '🇬🇧' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.flag}</span>
                      <div>
                        <p className="text-[11px] font-semibold text-slate-700">{item.name}</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">{item.month}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SUCCESS STORIES & APPLICATION ROADMAP ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          
          {/* Left: Testimonial Carousel */}
          <div className="flex-1 bg-slate-50/70 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-primary/8 text-[9px] font-bold text-primary uppercase tracking-wider">Student Impact</span>
              <h3 className="text-sm font-black text-slate-800 tracking-tight mt-3 mb-5">Scholarship Success Stories</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SUCCESS_STORIES.slice(0, 2).map((story, idx) => (
                  <div key={idx} className="bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center shrink-0`}>
                          {story.initials}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 leading-none">{story.student}</h4>
                          <span className="text-[9px] text-slate-400 font-semibold mt-1 block truncate max-w-[140px]">{story.university}</span>
                        </div>
                      </div>
                      <p className="text-[10px] italic text-slate-500 font-semibold leading-relaxed mb-4">&ldquo;{story.story}&rdquo;</p>
                    </div>

                    <div className="border-t border-slate-50 pt-2 flex items-center justify-between text-[9px] font-bold">
                      <span className="text-slate-800">{story.flag} {story.scholarship}</span>
                      <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-1.5 self-start">
                        <Check className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                        <span>Awarded</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Roadmap Timeline */}
          <div className="w-full lg:w-[380px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 tracking-tight mb-5">Application Roadmap</h3>
            
            <div className="relative border-l border-slate-100 ml-2.5 pl-4 space-y-4 text-xs font-medium text-slate-600">
              {[
                { title: 'Find Scholarship', desc: 'Identify matching opportunities via explorer grid filters' },
                { title: 'Check Eligibility', desc: 'Confirm academic records, CGPA, and country bounds' },
                { title: 'Prepare Documents', desc: 'Write SOP draft, solicit LOR references, and verify scores' },
                { title: 'Submit Application', desc: 'Submit dossiers to university or portal before deadline' },
                { title: 'Receive Funding', desc: 'Formalize blocked accounts, visa appointments, and fly out' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[22px] top-0 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white" />
                  <h4 className="text-[11px] font-bold text-slate-800 leading-none">{idx + 1}. {step.title}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── REQUIRED DOCUMENTATION CHECKLIST ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Required Documentation Checklist</h2>
            <p className="text-xs text-slate-400 mt-1">Make sure you have these key files prepared for submission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Statement of Purpose (SOP)', desc: 'Detailed essay showcasing academic intent, goals, and why you deserve funding support.', icon: FileText },
              { title: 'Letters of Recommendation (LOR)', desc: 'Academic or professional references backing your character, intellect, and capabilities.', icon: Users },
              { title: 'Curriculum Vitae (CV)', desc: '1-2 page structural summary of career milestones, leadership, publications, and skills.', icon: Briefcase },
              { title: 'Academic Transcripts', desc: 'Original certificates, mark sheets, and CGPA reports from school & undergraduate colleges.', icon: BookOpen },
              { title: 'IELTS / TOEFL Reports', desc: 'Valid standardized English capability scorecards (typical minimum targets 6.5+).', icon: CheckCircle },
              { title: 'Research Proposals', desc: 'Dossier presenting research questions and methodology (essential for PhD applications).', icon: GraduationCap },
              { title: 'Creative Portfolio', desc: 'Showcase compilation of designs, codes, writing samples, or projects (field-specific).', icon: Award }
            ].map((doc, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <doc.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{doc.title}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1 leading-snug">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ACCORDION (15 FAQs) ─── */}
      <section className="py-14 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400 mt-1">Get precise answers about deadlines, CGPA caps, and funding coverages</p>
        </div>

        <div className="space-y-3.5">
          {[
            { q: 'How do fully funded scholarships work?', a: 'Fully funded scholarships cover your entire cost of education. This typically includes 100% of your university tuition fees, a monthly living stipend (ranging from €900 to €2,000 depending on the country), roundtrip flight airfares, health insurance, and sometimes settling-in allowances.' },
            { q: 'Can I get a global scholarship without IELTS or TOEFL?', a: 'Yes! Some scholarships (like the CSC in China, MEXT in Japan, or specific European university grants) accept a Medium of Instruction (MOI) certificate confirming your previous degree was taught in English. However, major government awards like Chevening, Fulbright, and Commonwealth require standardized IELTS/TOEFL scores.' },
            { q: 'Do scholarships cover my living expenses?', a: 'Fully funded scholarships do cover living expenses through monthly stipends. Partially funded scholarships typically offset tuition fees only, meaning you must fund your own living expenses (e.g. via blocked accounts or part-time student jobs).' },
            { q: 'What CGPA is required to be competitive for top scholarships?', a: 'For highly competitive global scholarships (like Rhodes, Gates Cambridge, or Vanier), a minimum CGPA of 3.5/4.0 (roughly 85% or first-class degree) is standard. For government scholarships (DAAD, Australia Awards), a solid first-class academic profile along with 2+ years of professional experience is highly valued.' },
            { q: 'When is the best time to apply for global scholarships?', a: 'Most scholarships have deadlines 8 to 12 months before the program begins. For Fall intake (September/October), scholarship deadlines generally run from October of the previous year to February of the entry year.' },
            { q: 'Can I apply for multiple scholarships at the same time?', a: 'Absolutely. You are encouraged to apply for multiple university-specific and government scholarships to maximize your funding chances. Just make sure to read the terms, as some scholarships cannot be combined concurrently.' },
            { q: 'Are scholarships available for undergraduate (Bachelor\'s) degrees?', a: 'Yes, but fully funded undergraduate scholarships are rarer than master\'s and PhD options. Opportunities like Japan\'s MEXT, Turkey Burslari, and university merit entrance awards offer full funding for outstanding school graduates.' },
            { q: 'Can I legally work while holding a scholarship?', a: 'This depends on the scholarship rules. Some government scholarships (like Chevening) allow part-time work within standard visa limits (20 hours/week). Others (like Fulbright or specific research grants) explicitly forbid working during semesters to ensure you focus entirely on your studies.' },
            { q: 'Do I need a university admission offer letter before applying for a scholarship?', a: 'For university-specific scholarships, yes—you usually need to be admitted first. For major government scholarships (like Chevening, Fulbright, DAAD), the scholarship application window opens early, allowing you to apply before securing an official offer letter.' },
            { q: 'What is a SOP, and why is it critical for scholarships?', a: 'The Statement of Purpose (SOP) is an essay that presents your goals, qualifications, why you chose the course, and why you are a deserving candidate. For scholarships, a strong SOP that highlights leadership, academic merit, and community contribution is often the deciding factor.' },
            { q: 'How long do LORs (Letters of Recommendation) need to be?', a: 'LORs should be 1 page (about 300-500 words) written on official institutional letterheads. They should be written by university professors or workplace supervisors who can vouch for your intellect, character, and work ethic.' },
            { q: 'Do scholarships cover the cost of study visa processing?', a: 'Most fully funded government scholarships cover visa application fees and travel fares. However, partially funded university waivers usually do not, meaning you must cover your own visa fees and flight tickets.' },
            { q: 'What happens if I fail a course while on a scholarship?', a: 'Most scholarship providers require you to maintain a minimum GPA (e.g. 3.0/4.0 or equivalent) every semester. If you fail a course or fall below the target GPA, the scholarship may be put on probation or cancelled.' },
            { q: 'Can I get a scholarship if I have a gap year in my education?', a: 'Yes! A gap year is not a barrier if you can explain it constructively. If you spent the gap year gaining relevant work experience, completing certifications, or working on research, it can actually strengthen your profile.' },
            { q: 'How are scholarship stipends disbursed to students?', a: 'Once you arrive in the destination country, you will open a local bank account. The scholarship administration office will disburse your monthly stipend directly into your account, usually during the first week of every month.' }
          ].map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
              <label htmlFor={`faq-toggle-${idx}`} className="w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 select-none">
                <span className="text-xs font-bold text-slate-800 leading-snug">{faq.q}</span>
                <span className="text-slate-400 shrink-0 select-none">
                  {/* Custom CSS Accordion trick utilizing standard React state toggle */}
                  <ChevronDown className="w-4 h-4" />
                </span>
              </label>
              <input type="checkbox" id={`faq-toggle-${idx}`} className="peer hidden" />
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
            <pattern id="schol-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#schol-cta-grid)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Find Funding
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight">
            Ready to Fund Your Global Education?<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Get Expert Guidance Today
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
            Coordinate profile reviews, academic document checks, essay editing, and interview preparations with certified mentors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="#explorer-grid"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4" />
              <span>Find Scholarships</span>
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
              href="/assessment"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Take Assessment</span>
            </a>
            <a
              href="/universities"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Explore Universities</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
