import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Bookmark, ArrowRight, ChevronDown, ChevronUp,
  Globe, DollarSign, Clock, CheckCircle, GraduationCap,
  TrendingUp, Users, Award, MapPin, Filter, Calendar,
  X, Building, Briefcase, RefreshCw
} from 'lucide-react';

/* ─── COUNTRY DATA ─── */
interface Country {
  id: string;
  name: string;
  flag: string;
  region: 'Europe' | 'North America' | 'Asia' | 'Australia & NZ';
  avgTuition: string;
  avgTuitionRange: 'Free' | 'Under $15K' | '$15K - $30K' | 'Over $30K';
  livingCost: string;
  livingCostRange: 'Low' | 'Medium' | 'High';
  visaSuccessRate: string;
  visaSuccessNumeric: number;
  workRights: string;
  workRightsYears: number;
  prPathway: 'Direct' | 'Streamlined' | 'Standard' | 'High Difficulty';
  topUniversitiesCount: string;
  popularCourses: string[];
  scholarshipsAvailable: string[];
  studentsGuided: string;
  image: string;
  salaryRange: string;
}

const COUNTRIES: Country[] = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    avgTuition: '€0 - €3,000/yr',
    avgTuitionRange: 'Free',
    livingCost: '€850 - €1,200',
    livingCostRange: 'Low',
    visaSuccessRate: '95%',
    visaSuccessNumeric: 95,
    workRights: '18 Months',
    workRightsYears: 1.5,
    prPathway: 'Streamlined',
    topUniversitiesCount: '45+',
    popularCourses: ['Mechanical Engineering', 'Computer Science', 'MBA'],
    scholarshipsAvailable: ['DAAD Scholarship', 'Heinrich Böll'],
    studentsGuided: '18,723',
    image: '/assets/germany-dest.png',
    salaryRange: '€48,000 - €65,000'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    avgTuition: 'CAD $16K - $35K/yr',
    avgTuitionRange: '$15K - $30K',
    livingCost: 'CAD $1,000 - $1,500',
    livingCostRange: 'Medium',
    visaSuccessRate: '91%',
    visaSuccessNumeric: 91,
    workRights: '3 Years',
    workRightsYears: 3,
    prPathway: 'Direct',
    topUniversitiesCount: '30+',
    popularCourses: ['Business Analytics', 'Computer Science', 'Medicine'],
    scholarshipsAvailable: ['Vanier CGS', 'Ontario Graduate'],
    studentsGuided: '28,514',
    image: '/assets/canada-dest.png',
    salaryRange: 'CAD $55,000 - $75,000'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Australia & NZ',
    avgTuition: 'AUD $25K - $45K/yr',
    avgTuitionRange: 'Over $30K',
    livingCost: 'AUD $1,400 - $2,000',
    livingCostRange: 'High',
    visaSuccessRate: '90%',
    visaSuccessNumeric: 90,
    workRights: '2 - 4 Years',
    workRightsYears: 3,
    prPathway: 'Streamlined',
    topUniversitiesCount: '37+',
    popularCourses: ['Information Technology', 'Civil Engineering', 'Nursing'],
    scholarshipsAvailable: ['Australia Awards', 'Destination Australia'],
    studentsGuided: '22,134',
    image: '/assets/australia-dest.png',
    salaryRange: 'AUD $65,000 - $85,000'
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    avgTuition: '£15K - £35K/yr',
    avgTuitionRange: 'Over $30K',
    livingCost: '£1,100 - £1,600',
    livingCostRange: 'High',
    visaSuccessRate: '93%',
    visaSuccessNumeric: 93,
    workRights: '2 Years',
    workRightsYears: 2,
    prPathway: 'Standard',
    topUniversitiesCount: '50+',
    popularCourses: ['Corporate Finance', 'International Law', 'Business Management'],
    scholarshipsAvailable: ['Chevening Scholarship', 'Commonwealth Scholarship'],
    studentsGuided: '35,742',
    image: '/assets/uk-dest.png',
    salaryRange: '£40,000 - £60,000'
  },
  {
    id: 'united-states',
    name: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    avgTuition: '$25K - $55K/yr',
    avgTuitionRange: 'Over $30K',
    livingCost: '$1,200 - $2,200',
    livingCostRange: 'High',
    visaSuccessRate: '88%',
    visaSuccessNumeric: 88,
    workRights: '1 - 3 Years (OPT)',
    workRightsYears: 2,
    prPathway: 'Standard',
    topUniversitiesCount: '100+',
    popularCourses: ['Computer Science & AI', 'Finance', 'Aerospace Engineering'],
    scholarshipsAvailable: ['Fulbright Foreign Student', 'Hubert Humphrey'],
    studentsGuided: '41,968',
    image: '/assets/usa-dest.png',
    salaryRange: '$70,000 - $95,000'
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    region: 'Europe',
    avgTuition: '€10K - €22K/yr',
    avgTuitionRange: '$15K - $30K',
    livingCost: '€1,000 - €1,500',
    livingCostRange: 'Medium',
    visaSuccessRate: '94%',
    visaSuccessNumeric: 94,
    workRights: '2 Years',
    workRightsYears: 2,
    prPathway: 'Streamlined',
    topUniversitiesCount: '25+',
    popularCourses: ['Data Science', 'Pharmaceutical Chemistry', 'Software Engineering'],
    scholarshipsAvailable: ['Government of Ireland', 'UCD Global Excellence'],
    studentsGuided: '7,512',
    image: '/assets/ireland-dest.png',
    salaryRange: '€45,000 - €60,000'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    avgTuition: '€10K - €20K/yr',
    avgTuitionRange: '$15K - $30K',
    livingCost: '€1,000 - €1,600',
    livingCostRange: 'Medium',
    visaSuccessRate: '95%',
    visaSuccessNumeric: 95,
    workRights: '1 Year',
    workRightsYears: 1,
    prPathway: 'Streamlined',
    topUniversitiesCount: '15+',
    popularCourses: ['Psychology', 'Sustainable Energy', 'Data Science'],
    scholarshipsAvailable: ['Orange Tulip Scholarship', 'Holland Scholarship'],
    studentsGuided: '5,124',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop&q=80',
    salaryRange: '€42,000 - €58,000'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    avgTuition: 'SGD $17K - $35K/yr',
    avgTuitionRange: '$15K - $30K',
    livingCost: 'SGD $1,200 - $2,200',
    livingCostRange: 'High',
    visaSuccessRate: '97%',
    visaSuccessNumeric: 97,
    workRights: '6 Months',
    workRightsYears: 0.5,
    prPathway: 'High Difficulty',
    topUniversitiesCount: '8+',
    popularCourses: ['Finance', 'Computer Science', 'Supply Chain Management'],
    scholarshipsAvailable: ['ASEAN Undergraduate Scholarship', 'SIA Youth'],
    studentsGuided: '6,492',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop&q=80',
    salaryRange: 'SGD $55,000 - $80,000'
  }
];

/* ─── UNIVERSITY DATA BY COUNTRY ─── */
interface UniData {
  name: string;
  qsRank: number;
  tuition: string;
  scholarships: string;
  programs: number;
  color: string;
  image: string;
  shortName: string;
}

const UNIVERSITIES_BY_COUNTRY: Record<string, UniData[]> = {
  germany: [
    { name: 'Technical University of Munich', qsRank: 37, tuition: '€0 - €3,000/yr', scholarships: 'Up to €12,000', programs: 220, color: '#3070B3', shortName: 'TUM', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80' },
    { name: 'LMU Munich', qsRank: 54, tuition: '€0 - €3,000/yr', scholarships: 'Up to €6,000', programs: 190, color: '#008C3A', shortName: 'LMU', image: 'https://placehold.co/600x400/008C3A/white?text=LMU%20Munich' },
    { name: 'Heidelberg University', qsRank: 87, tuition: '€0 - €3,000/yr', scholarships: 'Up to €7,000', programs: 140, color: '#9B1C1C', shortName: 'HD', image: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=600&auto=format&fit=crop&q=80' }
  ],
  canada: [
    { name: 'University of Toronto', qsRank: 25, tuition: 'CAD $45,690/yr', scholarships: 'Up to CAD $20,000', programs: 700, color: '#002A5C', shortName: 'UofT', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80' },
    { name: 'University of British Columbia', qsRank: 34, tuition: 'CAD $35,280/yr', scholarships: 'Up to CAD $18,000', programs: 500, color: '#002145', shortName: 'UBC', image: 'https://placehold.co/600x400/002145/white?text=UBC' },
    { name: 'McGill University', qsRank: 30, tuition: 'CAD $32,000/yr', scholarships: 'Up to CAD $12,000', programs: 400, color: '#ED1B2F', shortName: 'McGill', image: 'https://placehold.co/600x400/ED1B2F/white?text=McGill' }
  ],
  australia: [
    { name: 'University of Sydney', qsRank: 18, tuition: 'AUD $28,000–$52,000/yr', scholarships: 'Up to AUD $25,000', programs: 400, color: '#002366', shortName: 'USYD', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=80' },
    { name: 'University of Melbourne', qsRank: 33, tuition: 'AUD $36,000–$46,000/yr', scholarships: 'Up to AUD $30,000', programs: 380, color: '#003087', shortName: 'UniMelb', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80' },
    { name: 'UNSW Sydney', qsRank: 19, tuition: 'AUD $41,000/yr', scholarships: 'Up to AUD $15,000', programs: 390, color: '#F0B323', shortName: 'UNSW', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80' }
  ],
  uk: [
    { name: 'University of Oxford', qsRank: 3, tuition: '£9,250–£43,050/yr', scholarships: 'Up to £16,000', programs: 300, color: '#002147', shortName: 'Oxon', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=80' },
    { name: 'University of Cambridge', qsRank: 2, tuition: '£9,250–£58,038/yr', scholarships: 'Up to £18,000', programs: 280, color: '#003B71', shortName: 'Cantab', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop&q=80' },
    { name: 'Imperial College London', qsRank: 6, tuition: '£9,250–£38,000/yr', scholarships: 'Up to £10,000', programs: 160, color: '#003E74', shortName: 'Imperial', image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&auto=format&fit=crop&q=80' }
  ],
  usa: [
    { name: 'Massachusetts Institute of Technology', qsRank: 1, tuition: '$57,986/yr', scholarships: 'Up to $80,000', programs: 350, color: '#8C1515', shortName: 'MIT', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&auto=format&fit=crop&q=80' },
    { name: 'Stanford University', qsRank: 5, tuition: '$56,169/yr', scholarships: 'Up to $75,000', programs: 420, color: '#8C1515', shortName: 'SU', image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&auto=format&fit=crop&q=80' },
    { name: 'Harvard University', qsRank: 4, tuition: '$57,261/yr', scholarships: 'Up to $80,000', programs: 500, color: '#A51C30', shortName: 'Harvard', image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=600&auto=format&fit=crop&q=80' }
  ]
};

/* ─── SCHOLARSHIPS ─── */
interface ScholarData {
  name: string;
  country: string;
  flag: string;
  amount: string;
  eligibility: string;
  deadline: string;
  type: string;
}

const SCHOLARSHIPS: ScholarData[] = [
  { name: 'DAAD Scholarship', country: 'Germany', flag: '🇩🇪', amount: 'Up to €11,208/yr + Full Tuition', eligibility: 'Graduates with 2+ years of professional work experience; GPA 3.0+', deadline: 'Oct 31, 2026', type: 'Fully Funded' },
  { name: 'Chevening Scholarship', country: 'United Kingdom', flag: '🇬🇧', amount: 'Flights, Living Stipend & Full Fees', eligibility: 'Strong academic background, leadership potential, 2 years work exp', deadline: 'Nov 04, 2026', type: 'Fully Funded' },
  { name: 'Fulbright Student Program', country: 'United States', flag: '🇺🇸', amount: 'Tuition, Living Stipend, Travel & Health', eligibility: 'Completed Bachelor\'s degree; excellent academic/leadership record', deadline: 'Oct 15, 2026', type: 'Fully Funded' },
  { name: 'Vanier Canada Graduate Scholarships', country: 'Canada', flag: '🇨🇦', amount: 'CAD $50,000 per year', eligibility: 'Doctoral candidates with stellar leadership skills and research excellence', deadline: 'Nov 01, 2026', type: 'Partially Funded' },
  { name: 'Australia Awards Scholarships', country: 'Australia', flag: '🇦🇺', amount: 'Full Tuition, Return Air Travel, Living Allowance', eligibility: 'Minimum 18 years old, completed secondary education; return home policy', deadline: 'Apr 30, 2027', type: 'Fully Funded' }
];

/* ─── SUCCESS STORIES ─── */
interface StoryData {
  name: string;
  country: string;
  flag: string;
  university: string;
  course: string;
  outcome: string;
  visaSuccess: string;
  quote: string;
  initials: string;
  color: string;
}

const SUCCESS_STORIES: StoryData[] = [
  { name: 'Amit Sharma', country: 'Germany', flag: '🇩🇪', university: 'Technical University of Munich', course: 'M.S. Robotics & AI', outcome: 'Placed as AI Research Engineer at Bosch', visaSuccess: 'Approved in 14 Days', quote: 'AtlasPath helped me navigate the visa process and choose a tuition-free university that matches my research goals.', initials: 'AS', color: 'bg-indigo-600' },
  { name: 'Sarah Jenkins', country: 'Canada', flag: '🇨🇦', university: 'University of Toronto', course: 'Master of Business Administration', outcome: 'Strategic Consultant at RBC Capital', visaSuccess: 'Approved in 21 Days', quote: 'The interactive comparison tool was crucial in helping me choose Canada over the UK based on post-study work paths.', initials: 'SJ', color: 'bg-[#6D4AFF]' },
  { name: 'Rohan Patel', country: 'Australia', flag: '🇦🇺', university: 'University of Melbourne', course: 'M.S. Computer Science', outcome: 'Software Engineer at Atlassian', visaSuccess: 'Approved in 8 Days', quote: 'Getting a fully funded scholarship in Australia felt impossible until AtlasPath streamlined my profile and application.', initials: 'RP', color: 'bg-emerald-600' },
  { name: 'Priya Nair', country: 'United Kingdom', flag: '🇬🇧', university: 'University of Oxford', course: 'M.Sc. Mathematical Finance', outcome: 'Investment Analyst at Goldman Sachs', visaSuccess: 'Approved in 12 Days', quote: 'From Chevening essay reviews to interview practice, the mentors at AtlasPath were with me at every stage.', initials: 'PN', color: 'bg-amber-600' }
];

/* ─── FILTER CONTAINER COMPONENT ─── */
const FilterAccordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-3.5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-semibold text-[#0F172A] mb-1 focus:outline-none focus:ring-0"
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

export const CountryExplorer: React.FC = () => {
  /* ─── STATE MANAGEMENT ─── */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedTuitions, setSelectedTuitions] = useState<string[]>([]);
  const [selectedLivingCosts, setSelectedLivingCosts] = useState<string[]>([]);
  const [selectedWorkRights, setSelectedWorkRights] = useState<string[]>([]);
  const [selectedPRPathways, setSelectedPRPathways] = useState<string[]>([]);
  const [selectedVisaRates, setSelectedVisaRates] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [savedCountries, setSavedCountries] = useState<string[]>([]);
  const [activeTabCountry, setActiveTabCountry] = useState('germany');
  const [limit, setLimit] = useState(4);
  const [selectedDetailsCountry, setSelectedDetailsCountry] = useState<Country | null>(null);

  // Comparison State
  const [compCountry1, setCompCountry1] = useState('germany');
  const [compCountry2, setCompCountry2] = useState('canada');

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  /* ─── HANDLERS ─── */
  const toggleRegion = (reg: string) =>
    setSelectedRegions(prev => prev.includes(reg) ? prev.filter(x => x !== reg) : [...prev, reg]);

  const toggleTuition = (val: string) =>
    setSelectedTuitions(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const toggleLivingCost = (val: string) =>
    setSelectedLivingCosts(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const toggleWorkRights = (val: string) =>
    setSelectedWorkRights(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const togglePRPathway = (val: string) =>
    setSelectedPRPathways(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const toggleVisaRate = (val: string) =>
    setSelectedVisaRates(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedCountries(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const clearAllFilters = () => {
    setSelectedRegions([]);
    setSelectedTuitions([]);
    setSelectedLivingCosts([]);
    setSelectedWorkRights([]);
    setSelectedPRPathways([]);
    setSelectedVisaRates([]);
    setSearchQuery('');
  };

  /* ─── FILTERING AND SORTING ─── */
  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter(c => {
      // Search text
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(query);
        const matchesCourses = c.popularCourses.some(course => course.toLowerCase().includes(query));
        if (!matchesName && !matchesCourses) return false;
      }
      // Region
      if (selectedRegions.length > 0 && !selectedRegions.includes(c.region)) return false;
      // Tuition Range
      if (selectedTuitions.length > 0 && !selectedTuitions.includes(c.avgTuitionRange)) return false;
      // Living Cost Range
      if (selectedLivingCosts.length > 0 && !selectedLivingCosts.includes(c.livingCostRange)) return false;
      // Post Study Work Rights
      if (selectedWorkRights.length > 0) {
        const matchesWork = selectedWorkRights.some(w => {
          if (w === '1 Year' && c.workRightsYears <= 1) return true;
          if (w === '2 Years' && c.workRightsYears === 2) return true;
          if (w === '3+ Years' && c.workRightsYears >= 3) return true;
          return false;
        });
        if (!matchesWork) return false;
      }
      // PR Pathway
      if (selectedPRPathways.length > 0 && !selectedPRPathways.includes(c.prPathway)) return false;
      // Visa Rate
      if (selectedVisaRates.length > 0) {
        const matchesVisa = selectedVisaRates.some(rate => {
          if (rate === '> 90%' && c.visaSuccessNumeric >= 90) return true;
          if (rate === '> 95%' && c.visaSuccessNumeric >= 95) return true;
          return false;
        });
        if (!matchesVisa) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'tuition-low') {
        const costA = a.avgTuitionRange === 'Free' ? 0 : 30000;
        const costB = b.avgTuitionRange === 'Free' ? 0 : 30000;
        return costA - costB;
      }
      if (sortBy === 'visa') {
        return b.visaSuccessNumeric - a.visaSuccessNumeric;
      }
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      // default: popularity (students guided)
      const numA = parseInt(a.studentsGuided.replace(/,/g, ''));
      const numB = parseInt(b.studentsGuided.replace(/,/g, ''));
      return numB - numA;
    });
  }, [searchQuery, selectedRegions, selectedTuitions, selectedLivingCosts, selectedWorkRights, selectedPRPathways, selectedVisaRates, sortBy]);

  const displayedCountries = useMemo(() => {
    return filteredCountries.slice(0, limit);
  }, [filteredCountries, limit]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Pre-configured comparison info
  const comparisonMatrix = useMemo(() => {
    const c1 = COUNTRIES.find(c => c.id === compCountry1) || COUNTRIES[0];
    const c2 = COUNTRIES.find(c => c.id === compCountry2) || COUNTRIES[1];
    return {
      c1,
      c2,
      rows: [
        { label: 'Average Tuition', val1: c1.avgTuition, val2: c2.avgTuition },
        { label: 'Monthly Living Cost', val1: c1.livingCost, val2: c2.livingCost },
        { label: 'Work Rights Duration', val1: c1.workRights, val2: c2.workRights },
        { label: 'PR Pathway Ease', val1: c1.prPathway, val2: c2.prPathway },
        { label: 'Visa Success Rate', val1: c1.visaSuccessRate, val2: c2.visaSuccessRate },
        { label: 'Avg Graduate Salary', val1: c1.salaryRange, val2: c2.salaryRange },
        { label: 'Scholarships Available', val1: c1.scholarshipsAvailable.join(', '), val2: c2.scholarshipsAvailable.join(', ') }
      ]
    };
  }, [compCountry1, compCountry2]);

  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      {/* ─── HERO SECTION ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* World Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Dynamic Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold">Countries</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            {/* Left Column: Heading + Search */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Explore Study Destinations
                <br />
                <span className="font-serif italic font-normal text-primary">
                  Worldwide
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-2xl text-pretty"
              >
                Compare tuition fees, scholarships, work opportunities, visa pathways and top universities across leading study destinations.
              </motion.p>

              {/* Premium Spotlight Search Bar */}
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
                    placeholder="Search countries, e.g. Study in Germany, Canada..."
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

              {/* Popular Searches Chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <span className="text-xs font-semibold text-[#94A3B8]">Popular:</span>
                {['Germany', 'Canada', 'Australia', 'UK', 'USA'].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      const searchStr = c === 'UK' ? 'United Kingdom' : c === 'USA' ? 'United States' : c;
                      setSearchQuery(searchStr);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/12 hover:bg-primary/14 transition-colors"
                  >
                    Study in {c}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Statistics Grid Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:w-[380px] bg-slate-50/70 border border-slate-100 rounded-3xl p-6 flex flex-col justify-center shrink-0 relative overflow-hidden"
            >
              {/* Grid detail */}
              <div className="absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">AtlasPath Numbers</h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {[
                  { value: '50+', label: 'Countries Available', color: 'text-primary' },
                  { value: '15,000+', label: 'Students Guided', color: 'text-[#8B5CF6]' },
                  { value: '500+', label: 'University Partners', color: 'text-indigo-600' },
                  { value: '₹250Cr+', label: 'Scholarships Secured', color: 'text-emerald-600' },
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

      {/* ─── POPULAR DESTINATIONS SLIDER ─── */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Popular Destinations</h2>
            <p className="text-xs text-slate-400 mt-1">Direct pathways to world-class learning capitals</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#browse-grid" className="text-xs font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1">
              View all countries <ArrowRight className="w-3 h-3" />
            </a>
            <div className="flex items-center gap-1.5 border border-slate-100 rounded-full p-1 bg-slate-50">
              <button
                onClick={() => handleScroll('left')}
                className="p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none"
                aria-label="Previous Destinations"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none"
                aria-label="Next Destinations"
              >
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Wrapper */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {COUNTRIES.slice(0, 6).map((country) => {
            return (
              <div
                key={country.id}
                onClick={() => {
                  window.location.href = `/countries/${country.id}`;
                }}
                className="w-[280px] sm:w-[310px] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-100/70 hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0 cursor-pointer group"
              >
                {/* Card Image */}
                <div className="relative h-[130px] w-full overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Country Flag Circle */}
                  <div className="absolute bottom-3.5 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-lg">
                      {country.flag}
                    </div>
                    <h3 className="text-white text-[15px] font-bold tracking-tight">{country.name}</h3>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-2 text-center py-2 bg-slate-50/70 rounded-xl mb-3 border border-slate-100">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students</p>
                      <p className="text-xs font-black text-slate-800 mt-0.5">{country.studentsGuided}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Tuition</p>
                      <p className="text-xs font-black text-slate-800 mt-0.5">{country.avgTuition.split(' ')[0]}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Unis</p>
                      <p className="text-xs font-black text-slate-800 mt-0.5">{country.topUniversitiesCount}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PR PATH: {country.prPathway.toUpperCase()}</span>
                    <a
                      href={`/countries/${country.id}`}
                      className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform decoration-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── COUNTRY EXPLORER GRID & FILTERING ─── */}
      <section id="browse-grid" className="py-14 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Left Filter Sidebar */}
            <div className="w-full lg:w-[260px] shrink-0">
              <div className="sticky top-24 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#0F172A]">
                    <Filter className="w-4 h-4 text-primary" />
                    <span>Filter Countries</span>
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-bold text-primary hover:text-[#5B3BE0] transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {/* Region Accordion */}
                <FilterAccordion title="Region" defaultOpen={true}>
                  <div className="flex flex-col gap-2.5">
                    {['Europe', 'North America', 'Asia', 'Australia & NZ'].map((reg) => (
                      <label key={reg} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedRegions.includes(reg)}
                          onChange={() => toggleRegion(reg)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{reg}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Average Tuition Fees */}
                <FilterAccordion title="Average Tuition Fees">
                  <div className="flex flex-col gap-2.5">
                    {[
                      { key: 'Free', label: 'Free / Nominally Free (Germany)' },
                      { key: 'Under $15K', label: 'Under $15,000/yr' },
                      { key: '$15K - $30K', label: '$15,000 - $30,000/yr' },
                      { key: 'Over $30K', label: 'Over $30,000/yr' }
                    ].map((tuition) => (
                      <label key={tuition.key} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTuitions.includes(tuition.key)}
                          onChange={() => toggleTuition(tuition.key)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{tuition.label}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Living Cost (Monthly) */}
                <FilterAccordion title="Living Cost (Monthly)">
                  <div className="flex flex-col gap-2.5">
                    {[
                      { key: 'Low', label: 'Low (< €1,200/mo)' },
                      { key: 'Medium', label: 'Medium (€1,200 - €1,600/mo)' },
                      { key: 'High', label: 'High (> €1,600/mo)' }
                    ].map((cost) => (
                      <label key={cost.key} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLivingCosts.includes(cost.key)}
                          onChange={() => toggleLivingCost(cost.key)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{cost.label}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Post Study Work Rights */}
                <FilterAccordion title="Post Study Work Rights">
                  <div className="flex flex-col gap-2.5">
                    {['1 Year', '2 Years', '3+ Years'].map((rights) => (
                      <label key={rights} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedWorkRights.includes(rights)}
                          onChange={() => toggleWorkRights(rights)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{rights}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* PR Pathways */}
                <FilterAccordion title="PR Pathways">
                  <div className="flex flex-col gap-2.5">
                    {['Direct', 'Streamlined', 'Standard', 'High Difficulty'].map((path) => (
                      <label key={path} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPRPathways.includes(path)}
                          onChange={() => togglePRPathway(path)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{path}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                {/* Visa Success Rate */}
                <FilterAccordion title="Visa Success Rate">
                  <div className="flex flex-col gap-2.5">
                    {['> 90%', '> 95%'].map((rate) => (
                      <label key={rate} className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedVisaRates.includes(rate)}
                          onChange={() => toggleVisaRate(rate)}
                          className="w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
                        />
                        <span>{rate}</span>
                      </label>
                    ))}
                  </div>
                </FilterAccordion>

                <div className="mt-5 text-center">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{filteredCountries.length} countries found</p>
                </div>
              </div>
            </div>

            {/* Right Side Cards Grid */}
            <div className="flex-1">
              {/* Grid Header & Sort */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[17px] font-bold text-[#0F172A] tracking-tight">
                  Browse All Countries <span className="text-slate-400 font-medium text-sm">({filteredCountries.length})</span>
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-0"
                  >
                    <option value="popularity">Popularity (High to Low)</option>
                    <option value="tuition-low">Tuition (Low to High)</option>
                    <option value="visa">Visa Success Rate</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>

              {filteredCountries.length === 0 ? (
                <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
                  <Globe className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-bold text-slate-500">No destinations found matching these filters.</p>
                  <button onClick={clearAllFilters} className="text-xs font-bold text-primary mt-2">Clear all filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  {displayedCountries.map((country) => {
                    const saved = savedCountries.includes(country.id);
                    return (
                      <motion.div
                        layout
                        key={country.id}
                        onClick={() => {
                          window.location.href = `/countries/${country.id}`;
                        }}
                        whileHover={{ y: -4, transition: { duration: 0.15 } }}
                        className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-100/80 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 group"
                      >
                        {/* Cover image header */}
                        <div className="relative h-[120px] w-full overflow-hidden">
                          <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                          {/* Country Title + Flag */}
                          <div className="absolute bottom-3 left-4 flex items-center gap-2">
                            <span className="text-lg">{country.flag}</span>
                            <span className="text-[15px] font-extrabold text-white tracking-tight">{country.name}</span>
                          </div>

                          {/* Bookmark */}
                          <button
                            onClick={(e) => toggleSave(country.id, e)}
                            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                              saved ? 'bg-primary text-white' : 'bg-black/30 backdrop-blur-md text-white/95 hover:bg-black/50 border border-white/10'
                            }`}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-white' : ''}`} />
                          </button>
                        </div>

                        {/* Content Stats Table */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div className="space-y-2.5 mb-5 flex-1">
                            {[
                              { label: 'Avg. Tuition', value: country.avgTuition, icon: DollarSign },
                              { label: 'Living Cost', value: `${country.livingCost}/mo`, icon: Globe },
                              { label: 'Visa Success', value: country.visaSuccessRate, icon: CheckCircle },
                              { label: 'Work Rights', value: country.workRights, icon: Clock },
                              { label: 'Top Universities', value: country.topUniversitiesCount, icon: Building },
                            ].map(({ label, value, icon: Icon }) => (
                              <div key={label} className="flex items-center justify-between text-xs border-b border-slate-50 pb-1.5 last:border-0 last:pb-0">
                                <span className="text-[#64748B] font-medium flex items-center gap-1.5">
                                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                                  {label}
                                </span>
                                <span className="text-[#0F172A] font-extrabold">{value}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href={`/countries/${country.id}`}
                            className="w-full py-2.5 rounded-xl text-[11px] font-bold text-primary bg-primary/6 group-hover:bg-primary group-hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-1 border-0 decoration-none"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Explore Country</span>
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Load More Button */}
              {filteredCountries.length > limit && (
                <div className="text-center">
                  <button
                    onClick={() => setLimit(prev => prev + 4)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-sm focus:outline-none"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-slate-500 animate-spin-hover" />
                    <span>Load More Countries</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK COMPARISON SECTION ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-primary/8 text-[10px] font-bold text-primary uppercase tracking-wider border border-primary/10">Side-by-Side</span>
              <h2 className="text-xl font-bold text-[#0F172A] tracking-tight mt-2.5">Compare Study Destinations</h2>
              <p className="text-xs text-slate-400 mt-1">Get instant breakdowns of critical metrics to simplify decisions</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Country A Selection */}
              <select
                value={compCountry1}
                onChange={(e) => setCompCountry1(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm focus:outline-none"
              >
                {COUNTRIES.map(c => (
                  <option key={c.id} value={c.id} disabled={c.id === compCountry2}>{c.flag} {c.name}</option>
                ))}
              </select>
              <span className="text-xs font-bold text-slate-400">VS</span>
              {/* Country B Selection */}
              <select
                value={compCountry2}
                onChange={(e) => setCompCountry2(e.target.value)}
                className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm focus:outline-none"
              >
                {COUNTRIES.map(c => (
                  <option key={c.id} value={c.id} disabled={c.id === compCountry1}>{c.flag} {c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Board */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 overflow-hidden">
            <div className="grid grid-cols-[150px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] items-center text-center gap-4 border-b border-slate-100 pb-5">
              <div className="text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Comparison</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-2xl">{comparisonMatrix.c1.flag}</span>
                <span className="text-sm font-black text-slate-800">{comparisonMatrix.c1.name}</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-2xl">{comparisonMatrix.c2.flag}</span>
                <span className="text-sm font-black text-slate-800">{comparisonMatrix.c2.name}</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonMatrix.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[150px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] items-stretch gap-4 py-4 text-center">
                  <div className="text-left flex items-center">
                    <span className="text-xs font-bold text-[#64748B]">{row.label}</span>
                  </div>
                  <div className="flex items-center justify-center py-2 px-3 bg-slate-50/50 rounded-xl">
                    <span className="text-xs font-black text-[#0F172A]">{row.val1}</span>
                  </div>
                  <div className="flex items-center justify-center py-2 px-3 bg-slate-50/50 rounded-xl">
                    <span className="text-xs font-black text-[#0F172A]">{row.val2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COUNTRY HIGHLIGHTS SECTION ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Unique Benefits</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-3">Country Highlights & Strategic Values</h2>
          <p className="text-sm text-[#64748B] mt-2">Every country has distinct academic strengths and visa benefits. Understand what fits your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { country: 'Germany', flag: '🇩🇪', items: ['No tuition fees at public universities', 'Strong industrial/engineering ecosystem', '18-month job seeker post-study visa', 'Low living expenses compared to UK/US'] },
            { country: 'Canada', flag: '🇨🇦', items: ['Up to 3-year PGWP (Post-Graduation Work Permit)', 'Direct, point-based PR pathways (Express Entry)', 'Excellent university funding & coop plans', 'Highly supportive student ecosystem'] },
            { country: 'Australia', flag: '🇦🇺', items: ['Stellar global QS university rankings', 'Flexible 2 to 4-year post-study work rights', 'High quality of living and study standards', 'Vibrant global job opportunities'] },
            { country: 'United Kingdom', flag: '🇬🇧', items: ['Globally recognized historical universities', '2-year Graduate Route post-study work visa', 'Accelerated degree programs (3-yr UG / 1-yr PG)', 'Major global business and financial hubs'] }
          ].map((hl) => (
            <div key={hl.country} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{hl.flag}</span>
                <h3 className="font-extrabold text-slate-800 text-sm tracking-tight">{hl.country}</h3>
              </div>
              <ul className="space-y-3">
                {hl.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TOP UNIVERSITIES BY COUNTRY (TABS) ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Top Universities by Country</h2>
              <p className="text-xs text-slate-400 mt-1">Explore campus profiles, tuition models, and global QS rankings</p>
            </div>
            {/* Tab Toggles */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/60 border border-slate-200/50 rounded-xl p-1 shrink-0">
              {[
                { id: 'germany', name: 'Germany 🇩🇪' },
                { id: 'canada', name: 'Canada 🇨🇦' },
                { id: 'australia', name: 'Australia 🇦🇺' },
                { id: 'uk', name: 'United Kingdom 🇬🇧' },
                { id: 'usa', name: 'United States 🇺🇸' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabCountry(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                    activeTabCountry === tab.id
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UNIVERSITIES_BY_COUNTRY[activeTabCountry]?.map((uni, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-[110px] w-full overflow-hidden">
                  <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 w-8 h-8 rounded-xl flex items-center justify-center border border-white/20 text-white text-[10px] font-black uppercase tracking-wider" style={{ backgroundColor: uni.color }}>
                    {uni.shortName}
                  </div>
                  <div className="absolute top-2.5 right-3 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/10">
                    <span className="text-[7px] font-bold text-white/80 uppercase">QS</span>
                    <span className="text-[11px] font-black text-white leading-none">#{uni.qsRank}</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-2 min-h-[32px]">{uni.name}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 border-t border-slate-50 pt-3">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[8px] tracking-wider">Tuition</p>
                      <p className="font-extrabold text-slate-700 mt-0.5">{uni.tuition}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[8px] tracking-wider">Scholarship</p>
                      <p className="font-extrabold text-slate-700 mt-0.5">{uni.scholarships}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCHOLARSHIP OPPORTUNITIES ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Country-Specific Scholarships</h2>
            <p className="text-xs text-slate-400 mt-1">Unlock fully and partially funded options across leading destinations</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">₹250Cr+ Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCHOLARSHIPS.map((scholar, idx) => (
            <div key={idx} className="bg-slate-50/40 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-xs font-bold text-primary bg-primary/6 px-2 py-0.5 rounded">{scholar.type}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">{scholar.flag}</span>
                    <span className="text-[10px] text-slate-500 font-semibold">{scholar.country}</span>
                  </div>
                </div>
                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight leading-snug mb-2">{scholar.name}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{scholar.eligibility}</p>
              </div>

              <div className="border-t border-slate-100/60 pt-4 flex items-center justify-between text-[11px] font-bold">
                <div>
                  <p className="text-slate-400 text-[9px] uppercase tracking-wider">Amount</p>
                  <p className="text-slate-800 mt-0.5">{scholar.amount}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-[9px] uppercase tracking-wider">Deadline</p>
                  <p className="text-slate-800 mt-0.5">{scholar.deadline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STUDENT SUCCESS STORIES ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10">Inspirational Paths</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-3">Student Success Stories</h2>
            <p className="text-sm text-[#64748B] mt-2">Hear directly from students who landed at their dream universities and careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUCCESS_STORIES.map((story, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center`}>
                      {story.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-none">{story.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium mt-1">{story.flag} {story.country}</p>
                    </div>
                  </div>
                  <p className="text-[11px] italic text-slate-500 font-medium leading-relaxed mb-4">&ldquo;{story.quote}&rdquo;</p>
                </div>

                <div className="border-t border-slate-50 pt-3 text-[10px] text-slate-600 font-medium space-y-1">
                  <p><span className="text-slate-400 font-bold uppercase text-[8px] tracking-wider block">University</span> {story.university}</p>
                  <p><span className="text-slate-400 font-bold uppercase text-[8px] tracking-wider block">Course</span> {story.course}</p>
                  <p><span className="text-slate-400 font-bold uppercase text-[8px] tracking-wider block">Outcome</span> {story.outcome}</p>
                  <div className="inline-block mt-2 bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded">
                    {story.visaSuccess}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COUNTRY MAP SECTION (INTERACTIVE PER-REGION METRICS) ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden p-6 md:p-10 relative">
          {/* Grid trace */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dark-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dark-grid)" />
            </svg>
          </div>

          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-md">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-bold text-slate-300 uppercase tracking-widest">Global Reach</span>
              <h2 className="text-xl sm:text-2xl font-extrabold mt-3 tracking-tight">Interactive Global Partner Network</h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed text-pretty">
                AtlasPath coordinates application routing, scholarships, and visa processing across major continents. Select a region below to see guided metrics.
              </p>

              {/* Continent selectors */}
              <div className="space-y-3.5 mt-6">
                {[
                  { region: 'Europe', guided: '35,000+ Students', partners: '240+ Universities', scholarships: '₹120Cr+' },
                  { region: 'North America', guided: '45,000+ Students', partners: '180+ Universities', scholarships: '₹95Cr+' },
                  { region: 'Asia-Pacific', guided: '18,000+ Students', partners: '80+ Universities', scholarships: '₹35Cr+' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-xs text-white">{item.region}</span>
                      <span className="text-[10px] text-primary">{item.scholarships} Secured</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold mt-1">
                      <span>{item.guided} Guided</span>
                      <span>{item.partners} Partnered</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual World Map Illustration */}
            <div className="flex-1 w-full max-w-[500px] bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 1000 480" className="w-full h-auto text-slate-600 fill-current opacity-80">
                {/* World map trace paths */}
                <path d="M150,120 Q160,110 180,130 T220,110 T250,140 T270,120 T300,150 T310,130" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
                <path d="M480,180 Q520,150 560,160 T600,140 T650,170 T700,150 T750,180" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
                {/* North America pin */}
                <g className="animate-pulse">
                  <circle cx="200" cy="150" r="14" fill="#6D4AFF" fillOpacity="0.15" />
                  <circle cx="200" cy="150" r="6" fill="#6D4AFF" />
                </g>
                <text x="200" y="180" textAnchor="middle" fill="#94A3B8" className="text-[14px] font-black">North America</text>
                
                {/* Europe pin */}
                <g>
                  <circle cx="500" cy="140" r="14" fill="#6D4AFF" fillOpacity="0.15" />
                  <circle cx="500" cy="140" r="6" fill="#6D4AFF" />
                </g>
                <text x="500" y="170" textAnchor="middle" fill="#94A3B8" className="text-[14px] font-black">Europe</text>
                
                {/* Asia pin */}
                <g>
                  <circle cx="750" cy="180" r="14" fill="#6D4AFF" fillOpacity="0.15" />
                  <circle cx="750" cy="180" r="6" fill="#6D4AFF" />
                </g>
                <text x="750" y="210" textAnchor="middle" fill="#94A3B8" className="text-[14px] font-black">Asia</text>
                
                {/* Australia pin */}
                <g>
                  <circle cx="850" cy="350" r="14" fill="#6D4AFF" fillOpacity="0.15" />
                  <circle cx="850" cy="350" r="6" fill="#6D4AFF" />
                </g>
                <text x="850" y="380" textAnchor="middle" fill="#94A3B8" className="text-[14px] font-black">Australia & NZ</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY STUDY ABROAD GRID HIGHLIGHTS ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Why Study Abroad?</h2>
            <p className="text-xs text-slate-400 mt-1">Unlock systemic values that expand career potentials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Global Exposure', desc: 'Experience diverse cultures and communities', icon: Globe, color: 'bg-[#6D4AFF]/10 text-primary' },
              { title: 'Better Career Growth', desc: 'International degree boosts career prospects', icon: Briefcase, color: 'bg-indigo-50 text-indigo-600' },
              { title: 'High Visa Success', desc: 'We help you with end-to-end visa support', icon: CheckCircle, color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Scholarship Opportunities', desc: 'Access global scholarships worth ₹250Cr+', icon: GraduationCap, color: 'bg-amber-50 text-amber-600' },
              { title: 'Work & Settle Options', desc: 'Multiple work & PR pathways available', icon: MapPin, color: 'bg-rose-50 text-rose-600' },
              { title: 'World-Class Education', desc: 'Top universities and quality education', icon: Award, color: 'bg-purple-50 text-purple-600' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section className="py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="cta-grid-2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-grid-2)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Let&rsquo;s Plan Your Future
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight">
            Not Sure Which Country Fits You?<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Get Personalized Advice
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
            Get personalized recommendations based on your goals, budget and academic profile with our expert advisors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="/assessment"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5"
            >
              <CheckCircle className="w-4 h-4" />
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
          </div>
        </div>
      </section>

      {/* ─── DETAIL DIALOG / SLIDEOUT PANEL ─── */}
      <AnimatePresence>
        {selectedDetailsCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDetailsCountry(null)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-100 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDetailsCountry(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Banner */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{selectedDetailsCountry.flag}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{selectedDetailsCountry.name}</h3>
                  <p className="text-xs text-slate-400 font-semibold">{selectedDetailsCountry.region} Region</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-5 bg-slate-50 rounded-2xl mb-6 text-center border border-slate-100">
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Avg Tuition</p>
                  <p className="text-xs font-black text-slate-800 mt-1">{selectedDetailsCountry.avgTuition}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Living Cost</p>
                  <p className="text-xs font-black text-slate-800 mt-1">{selectedDetailsCountry.livingCost}/mo</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Visa Success</p>
                  <p className="text-xs font-black text-emerald-600 mt-1">{selectedDetailsCountry.visaSuccessRate}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Work Rights</p>
                  <p className="text-xs font-black text-slate-800 mt-1">{selectedDetailsCountry.workRights}</p>
                </div>
              </div>

              {/* General Insights */}
              <div className="space-y-6 text-xs text-slate-600 font-medium">
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm tracking-tight mb-2.5 flex items-center gap-1.5">
                    <GraduationCap className="w-4.5 h-4.5 text-primary" />
                    Popular Programs & Fields
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedDetailsCountry.popularCourses.map((course, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold">{course}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm tracking-tight mb-2.5 flex items-center gap-1.5">
                    <Award className="w-4.5 h-4.5 text-primary" />
                    Scholarships Offered
                  </h4>
                  <div className="space-y-1.5">
                    {selectedDetailsCountry.scholarshipsAvailable.map((scholar, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-slate-800 font-bold">{scholar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-tight mb-2 flex items-center gap-1.5">
                      <TrendingUp className="w-4.5 h-4.5 text-primary" />
                      Post-Study Career Info
                    </h4>
                    <p className="leading-relaxed">
                      Average graduate starting salaries run between <span className="font-extrabold text-slate-800">{selectedDetailsCountry.salaryRange}</span>. Post-study pathways offer a <span className="font-extrabold text-slate-800">{selectedDetailsCountry.prPathway}</span> route to permanent residency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-tight mb-2 flex items-center gap-1.5">
                      <Users className="w-4.5 h-4.5 text-primary" />
                      Student Population
                    </h4>
                    <p className="leading-relaxed">
                      AtlasPath has safely guided over <span className="font-extrabold text-slate-800">{selectedDetailsCountry.studentsGuided}</span> international learners to this destination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end gap-3.5">
                <button
                  onClick={() => setSelectedDetailsCountry(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Close Details
                </button>
                <a
                  href="/book-consultation"
                  onClick={() => setSelectedDetailsCountry(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors shadow-sm"
                >
                  Consult Expert
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
