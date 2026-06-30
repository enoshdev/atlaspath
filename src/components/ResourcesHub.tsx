import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Search, BookOpen, GraduationCap, Globe, Award,
  FileText, CheckCircle, ChevronDown, Sparkles, Download,
  ArrowRight, DollarSign, Bookmark, BookmarkCheck,
  AlertCircle, RefreshCw, Mail, Loader2, Calendar
} from 'lucide-react';
import type { Resource } from '../lib/types';

/* ─── STATIC REFERENCE DATA (not resource data) ─── */
const CATEGORY_CARDS = [
  { label: 'Visa Guides', icon: FileText },
  { label: 'Scholarships', icon: Award },
  { label: 'Country Guides', icon: Globe },
  { label: 'Applications', icon: FileText },
  { label: 'IELTS', icon: FileText },
  { label: 'TOEFL', icon: FileText },
  { label: 'GRE', icon: FileText },
  { label: 'SOP Guides', icon: BookOpen },
  { label: 'LOR Guides', icon: BookOpen },
  { label: 'University Selection', icon: GraduationCap },
  { label: 'Budget Planning', icon: DollarSign },
];

const COUNTRY_GUIDES: Record<string, {
  visaProcess: string; tuition: string; livingCost: string;
  unisCount: string; scholarships: string; pswRights: string; bullets: string[];
}> = {
  germany: {
    visaProcess: '8 Steps (6-8 Weeks)', tuition: '€0 - €3,000 / year (Public)',
    livingCost: '€10,200 - €12,000 / year', unisCount: '35+ Universities',
    scholarships: 'DAAD, Heinrich Böll', pswRights: '18 Months Work Permit',
    bullets: ['Tuition-free public system', 'Strong engineering & automotive sectors', 'High visa approval rates', 'Excellent career opportunities']
  },
  canada: {
    visaProcess: '6 Steps (8-12 Weeks)', tuition: 'CAD $16,000 - $35,000 / year',
    livingCost: 'CAD $12,000 - $18,000 / year', unisCount: '28+ Universities',
    scholarships: 'Vanier, OGS, Entrances', pswRights: 'Up to 3 Years PGWP',
    bullets: ['Direct permanent residency path', 'Postgraduate work permits', 'Multicultural environment', 'Top-tier tech research centers']
  },
  australia: {
    visaProcess: '5 Steps (4-8 Weeks)', tuition: 'AUD $25,000 - $45,000 / year',
    livingCost: 'AUD $16,000 - $24,000 / year', unisCount: '37+ Universities',
    scholarships: 'Australia Awards, Destination', pswRights: '2 - 4 Years PSW Visa',
    bullets: ['Top QS ranked institutions', 'Warm climate, student friendly', 'Substantial part-time wages', 'Streamlined visa pathways']
  },
  uk: {
    visaProcess: '4 Steps (3-6 Weeks)', tuition: '£14,000 - £26,000 / year',
    livingCost: '£12,000 - £16,000 / year', unisCount: '80+ Universities',
    scholarships: 'Chevening, Commonwealth', pswRights: '2 Years Graduate Route',
    bullets: ['1-year fast Master programs', 'Global business Hub', 'Rich heritage, research-driven', 'Simple visa submission']
  },
  usa: {
    visaProcess: '5 Steps (4-12 Weeks)', tuition: '$25,000 - $60,000 / year',
    livingCost: '$12,000 - $20,000 / year', unisCount: '150+ Universities',
    scholarships: 'Fulbright, Knight-Hennessy', pswRights: '1 - 3 Years OPT (STEM)',
    bullets: ['Global silicon valley tech hubs', 'World-class academic rankings', 'High starting packages', 'Robust teaching assistants']
  }
};

const FAQS = [
  { q: 'How long does the university admission process take?', a: 'University admissions generally take 4 to 8 weeks after document submission. Government scholarships and local verification checks might add 2 to 3 months of processing time, so early preparation is key.' },
  { q: 'What is the German APS Certificate, and is it mandatory?', a: 'The Academic Evaluation Centre (APS) certificate verifies the authenticity of academic records for students applying from India, China, and Vietnam. It is mandatory for German university admissions and VFS student visa applications.' },
];

const TOOLS = [
  { label: 'Cost Calculator', link: '/countries' },
  { label: 'Scholarship Finder', link: '/scholarships' },
  { label: 'University Matcher', link: '/universities' },
  { label: 'Admission Timeline', link: '/assessment' },
  { label: 'Visa Checker', link: '/assessment' },
  { label: 'Budget Estimator', link: '/countries' },
];

/* ─── UTILITY ─── */
const getVisitorId = (): string => {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('visitor_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('visitor_id', id);
  }
  return id;
};

/* ─── SKELETON COMPONENT ─── */
const SkeletonRow: React.FC = () => (
  <div className="animate-pulse flex items-center gap-4 py-3">
    <div className="h-4 bg-slate-100 rounded flex-1" />
    <div className="h-4 bg-slate-100 rounded w-20" />
    <div className="h-4 bg-slate-100 rounded w-16" />
    <div className="h-4 bg-slate-100 rounded w-12" />
    <div className="h-4 bg-slate-100 rounded w-14 ml-auto" />
  </div>
);

/* ─── MAIN COMPONENT ─── */
export const ResourcesHub: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [popularDownloads, setPopularDownloads] = useState<Resource[]>([]);
  const [loadingPopular, setLoadingPopular] = useState(true);

  /* ─── NEWSLETTER STATE ─── */
  const [emailInput, setEmailInput] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMsg, setSubscribeMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [activeTabCountry, setActiveTabCountry] = useState('germany');

  const userId = getVisitorId();

  /* ─── FETCH RESOURCES ─── */
  const fetchResources = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (categoryFilter !== 'all') params.set('category', categoryFilter);
      if (countryFilter !== 'all') params.set('country', countryFilter);
      if (levelFilter !== 'all') params.set('level', levelFilter);
      if (searchQuery.trim()) params.set('search', searchQuery.trim());

      const res = await fetch(`/api/resources?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch resources');
      const data = await res.json();
      setResources(data.data || []);
      setTotalCount(data.total || 0);
    } catch {
      setError('Failed to load resources. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [categoryFilter, countryFilter, levelFilter, searchQuery]);

  /* ─── FETCH POPULAR DOWNLOADS ─── */
  const fetchPopularDownloads = useCallback(async () => {
    setLoadingPopular(true);
    try {
      const res = await fetch('/api/popular-downloads');
      const data = await res.json();
      setPopularDownloads(data.data || []);
    } catch {
      // silently fail
    } finally {
      setLoadingPopular(false);
    }
  }, []);

  /* ─── FETCH SAVED RESOURCES ─── */
  const fetchSaved = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await fetch(`/api/resources/save?userId=${userId}`);
      const data = await res.json();
      if (data.data) setSavedIds(data.data);
    } catch {
      // silently fail
    }
  }, [userId]);

  /* ─── INIT ─── */
  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  useEffect(() => {
    fetchPopularDownloads();
    fetchSaved();
  }, [fetchPopularDownloads, fetchSaved]);

  /* ─── SAVE/UNSAVE ─── */
  const toggleSave = async (resourceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const isSaved = savedIds.includes(resourceId);
    try {
      const res = await fetch('/api/resources/save', {
        method: isSaved ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resourceId }),
      });
      if (res.ok) {
        setSavedIds(prev =>
          isSaved ? prev.filter(id => id !== resourceId) : [...prev, resourceId]
        );
      }
    } catch {
      // silently fail
    }
  };

  /* ─── NEWSLETTER ─── */
  const handleSubscribe = async () => {
    if (!emailInput.trim()) return;
    setSubscribing(true);
    setSubscribeMsg(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribeMsg({ type: 'success', text: data.message || 'Subscribed!' });
        setEmailInput('');
      } else {
        setSubscribeMsg({ type: 'error', text: data.error || 'Subscription failed' });
      }
    } catch {
      setSubscribeMsg({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSubscribing(false);
    }
  };

  const handleSearch = () => {
    fetchResources();
  };

  /* ─── RENDER ─── */
  return (
    <div className="bg-white min-h-screen text-[#0F172A]">

      {/* ─── HERO ─── */}
      <section className="bg-white border-b border-slate-100 relative overflow-hidden" style={{ paddingTop: '80px' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="res-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#res-grid)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-8">
            <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
            <span>/</span>
            <span className="text-[#0F172A] font-semibold">Resources</span>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1 mb-4 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[10px] font-bold text-slate-600">
                📚 STUDY ABROAD RESOURCE HUB
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight"
                style={{ fontSize: 'clamp(36px, 4.5vw, 54px)' }}
              >
                Everything You Need
                <br />
                To <span className="font-serif italic font-normal text-primary">Study Abroad</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-xl text-pretty"
              >
                Explore expert guides, country insights, visa resources, scholarship strategies and university planning tools in one place.
              </motion.p>

              {/* Search */}
              <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-200 shadow-md shadow-slate-100 hover:border-slate-300 transition-all max-w-xl mb-6">
                <Search className="absolute left-5 w-5 h-5 text-[#94A3B8] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search guides, visa, scholarships, universities..."
                  className="flex-1 pl-14 pr-4 py-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-transparent outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="m-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-primary hover:bg-secondary transition-colors shrink-0"
                >
                  Search
                </button>
              </div>

              <div className="flex items-center gap-2 flex-wrap text-xs font-semibold text-[#94A3B8]">
                <span>Popular:</span>
                {['Germany Visa Guide', 'APS Certificate', 'DAAD Scholarship', 'Study in Canada', 'IELTS'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      const str = chip === 'Germany Visa Guide' ? 'Visa' : chip === 'DAAD Scholarship' ? 'DAAD' : chip;
                      setSearchQuery(str);
                      setTimeout(handleSearch, 0);
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/12 hover:bg-primary/14 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Panel */}
            <div className="lg:w-[380px] bg-slate-50/70 border border-slate-100 rounded-3xl p-6 flex flex-col justify-center shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Resource Library Stats</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {[
                  { value: totalCount > 0 ? `${totalCount}+` : '...', label: 'Expert Guides' },
                  { value: '50+', label: 'Countries Covered' },
                  { value: '1,000+', label: 'University Resources' },
                  { value: '15,000+', label: 'Students Guided' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[25px] font-black text-primary leading-none tracking-tight">{stat.value}</span>
                    <span className="text-[11px] text-[#64748B] font-medium mt-1.5 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY CARDS ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-11 gap-4 text-center">
          {CATEGORY_CARDS.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <button
                key={idx}
                onClick={() => { setCategoryFilter(cat.label); fetchResources(); }}
                className={`bg-slate-50/50 border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all ${
                  categoryFilter === cat.label ? 'ring-2 ring-primary/30 border-primary/30' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <CatIcon className="w-5 h-5" />
                </div>
                <h4 className="text-[10px] font-bold text-slate-800 leading-tight">{cat.label}</h4>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── RESOURCE DIRECTORY ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">

            {/* Library Table */}
            <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Resource Library</h3>

                {/* Filters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-5 pb-4 border-b border-slate-100">
                  <select
                    value={categoryFilter}
                    onChange={(e) => { setCategoryFilter(e.target.value); }}
                    className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="Visa Guides">Visa Guides</option>
                    <option value="Scholarships">Scholarships</option>
                    <option value="Country Guides">Country Guides</option>
                    <option value="Applications">Applications</option>
                    <option value="IELTS">IELTS</option>
                    <option value="TOEFL">TOEFL</option>
                    <option value="GRE">GRE</option>
                    <option value="SOP Guides">SOP Guides</option>
                    <option value="LOR Guides">LOR Guides</option>
                    <option value="University Selection">University Selection</option>
                    <option value="Budget Planning">Budget Planning</option>
                  </select>

                  <select
                    value={countryFilter}
                    onChange={(e) => { setCountryFilter(e.target.value); }}
                    className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  >
                    <option value="all">All Countries</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="USA">USA</option>
                    <option value="Ireland">Ireland</option>
                  </select>

                  <select
                    value={levelFilter}
                    onChange={(e) => { setLevelFilter(e.target.value); }}
                    className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  >
                    <option value="all">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>

                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] text-slate-400 font-bold font-mono">
                      {loading ? '...' : `${totalCount} guides found`}
                    </span>
                    <button
                      onClick={fetchResources}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors"
                      title="Refresh"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Error State */}
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700 mb-4">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                    <button onClick={() => { setError(''); fetchResources(); }} className="ml-auto flex items-center gap-1 text-rose-500 hover:text-rose-700">
                      <RefreshCw className="w-3 h-3" /> Retry
                    </button>
                  </div>
                )}

                {/* Loading State */}
                {loading ? (
                  <div className="overflow-x-auto">
                    <div className="border-b border-slate-100 pb-2 mb-2 flex text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                      <div className="flex-1">Title</div>
                      <div className="w-20">Category</div>
                      <div className="w-16">Country</div>
                      <div className="w-14">Time</div>
                      <div className="w-16 text-right">Actions</div>
                    </div>
                    {[1,2,3,4,5].map(i => <SkeletonRow key={i} />)}
                  </div>
                ) : /* Empty State */ resources.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-7 h-7 text-slate-300" />
                    </div>
                    <p className="text-sm font-bold text-slate-400">No resources found</p>
                    <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or search query</p>
                    <button
                      onClick={() => { setSearchQuery(''); setCategoryFilter('all'); setCountryFilter('all'); setLevelFilter('all'); }}
                      className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  /* Resource Table */
                  <div className="overflow-x-auto text-[10px] font-semibold text-slate-600">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[8px] tracking-wider">
                          <th className="pb-2.5">Title</th>
                          <th className="pb-2.5">Category</th>
                          <th className="pb-2.5">Country</th>
                          <th className="pb-2.5">Read Time</th>
                          <th className="pb-2.5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800 font-bold">
                        {resources.map((res) => {
                          const saved = savedIds.includes(res.id);
                          return (
                            <tr key={res.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="py-3 pr-3">
                                <a
                                  href={`/resources/${res.slug}`}
                                  className="font-extrabold text-[#0f172a] hover:text-primary transition-colors max-w-[200px] truncate block"
                                >
                                  {res.title}
                                </a>
                              </td>
                              <td className="py-3 pr-3 text-primary">{res.category}</td>
                              <td className="py-3 pr-3">
                                <span className="flex items-center gap-1">
                                  {res.country && res.country !== 'All' ? res.country : '🌐 Global'}
                                </span>
                              </td>
                              <td className="py-3 pr-3">{res.readTime || '-'}</td>
                              <td className="py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  {res.fileUrl && (
                                    <DownloadButton resourceId={res.id} />
                                  )}
                                  <button
                                    onClick={(e) => toggleSave(res.id, e)}
                                    className={`p-1.5 rounded-lg border transition-all ${
                                      saved
                                        ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                        : 'border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary'
                                    }`}
                                    title={saved ? 'Unsave' : 'Save'}
                                  >
                                    {saved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                                  </button>
                                  <a
                                    href={`/resources/${res.slug}`}
                                    className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary transition-colors"
                                    title="View details"
                                  >
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[300px] shrink-0 space-y-6">
              {/* Newsletter */}
              <div className="bg-primary/6 border border-primary/10 rounded-3xl p-5">
                <div>
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-1.5">Stay Updated</h4>
                  <p className="text-[10px] text-slate-500 font-semibold mb-4 leading-normal">Get study abroad updates & timelines delivered to your inbox.</p>
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    placeholder="Enter email"
                    className="flex-1 text-xs font-semibold text-[#0F172A] placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={subscribing || !emailInput.trim()}
                    className="px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    {subscribing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Mail className="w-3 h-3" />}
                    Join
                  </button>
                </div>
                {subscribeMsg && (
                  <div className={`mt-2 text-[9px] font-bold flex items-center gap-1 ${
                    subscribeMsg.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {subscribeMsg.type === 'success' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                    {subscribeMsg.text}
                  </div>
                )}
              </div>

              {/* Popular Downloads */}
              <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Popular Downloads</h4>
                {loadingPopular ? (
                  <div className="space-y-3">
                    {[1,2,3].map(i => <div key={i} className="h-10 bg-slate-50 rounded-xl animate-pulse" />)}
                  </div>
                ) : popularDownloads.length === 0 ? (
                  <p className="text-[10px] text-slate-400 font-medium">No downloads yet.</p>
                ) : (
                  <div className="space-y-3 text-xs font-semibold text-slate-600">
                    {popularDownloads.map((item) => (
                      <div key={item.id} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="flex-1 min-w-0">
                          <a
                            href="/book-consultation"
                            className="text-[10px] text-slate-800 font-bold block leading-none hover:text-primary transition-colors truncate"
                          >
                            {item.title}
                          </a>
                          <span className="text-[8px] text-slate-400 mt-1 block leading-none flex items-center gap-1">
                            <Download className="w-2.5 h-2.5" />
                            {item.download_count} downloads
                            {item.fileType && <><span className="mx-1">&middot;</span>{item.fileType.toUpperCase()}</>}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COUNTRY KNOWLEDGE CENTER ─── */}
      <section className="py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">Country Knowledge Center</h2>
          <p className="text-xs text-slate-400 mt-1">Tuition averages, visa steps, and living costs at a glance</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-50 border border-slate-200/50 rounded-2xl p-1 max-w-xl mx-auto">
          {Object.keys(COUNTRY_GUIDES).map((code) => (
            <button
              key={code}
              onClick={() => setActiveTabCountry(code)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all focus:outline-none ${
                activeTabCountry === code ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-800'
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {COUNTRY_GUIDES[activeTabCountry] && (
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col lg:flex-row items-stretch gap-8 shadow-sm">
            <div className="flex-1 space-y-4">
              <h3 className="text-sm font-black text-slate-800 tracking-tight capitalize mb-2">
                Study in {activeTabCountry} Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Visa Process', val: COUNTRY_GUIDES[activeTabCountry].visaProcess },
                  { label: 'Tuition Fees', val: COUNTRY_GUIDES[activeTabCountry].tuition },
                  { label: 'Living Cost', val: COUNTRY_GUIDES[activeTabCountry].livingCost },
                  { label: 'Universities Count', val: COUNTRY_GUIDES[activeTabCountry].unisCount },
                  { label: 'Scholarships', val: COUNTRY_GUIDES[activeTabCountry].scholarships },
                  { label: 'Post Study Rights', val: COUNTRY_GUIDES[activeTabCountry].pswRights }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm font-semibold">
                    <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wider leading-none">{item.label}</span>
                    <span className="text-xs font-black text-slate-800 mt-2 block leading-none">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[300px] shrink-0 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Core Guidelines</h4>
                <div className="space-y-3">
                  {COUNTRY_GUIDES[activeTabCountry].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={`/countries`} className="mt-6 w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors">
                Explore {activeTabCountry} Guide
              </a>
            </div>
          </div>
        )}
      </section>

      {/* ─── TOOLS + TRENDING ─── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tools */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Planning Tools</h3>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {TOOLS.map((tool, idx) => (
                    <a
                      key={idx}
                      href={tool.link}
                      className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all shadow-sm"
                    >
                      {tool.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Trending Resources */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Most Downloaded</h3>
              {loadingPopular ? (
                <div className="space-y-3">
                  {[1,2,3].map(i => <div key={i} className="h-8 bg-slate-50 rounded-xl animate-pulse" />)}
                </div>
              ) : popularDownloads.length === 0 ? (
                <p className="text-xs text-slate-400 font-medium">No downloads yet.</p>
              ) : (
                <div className="space-y-3.5">
                  {popularDownloads.map((item, idx) => (
                    <a
                      key={item.id}
                      href="/book-consultation"
                      className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0 group"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-slate-800 font-bold block leading-none group-hover:text-primary transition-colors truncate">
                          {idx + 1}. {item.title}
                        </span>
                        <span className="text-[8px] text-slate-400 mt-1 block leading-none">
                          <Download className="w-2.5 h-2.5 inline mr-0.5" />
                          {item.download_count} downloads
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ Section */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 tracking-tight mb-4">Quick Answers</h3>
              <div className="space-y-2">
                {FAQS.slice(0, 4).map((faq, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex items-center justify-between text-[10px] font-bold text-slate-700 cursor-pointer py-2 border-b border-slate-50 list-none">
                      {faq.q}
                      <ChevronDown className="w-3 h-3 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <p className="text-[9px] text-slate-500 font-medium py-2 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="res-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#res-cta-grid)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Get Started
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight">
            Ready to Start Planning Smarter?<br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Unlock Expert Timelines & Tools
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty">
            Take our AI assessment evaluation, search matching scholarships, compare country tuition metrics, and schedule advice sessions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <a href="/assessment" className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Take Assessment</span>
            </a>
            <a href="/book-consultation" className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5">
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/universities" className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5">
              <GraduationCap className="w-4 h-4" />
              <span>Explore Universities</span>
            </a>
            <a href="/scholarships" className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5">
              <Award className="w-4 h-4" />
              <span>Explore Scholarships</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── DOWNLOAD BUTTON SUB-COMPONENT ─── */
const DownloadButton: React.FC<{ resourceId: string }> = ({ resourceId }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);
    try {
      const userId = getVisitorId();
      const res = await fetch('/api/resources/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resourceId }),
      });
      const data = await res.json();
      if (data.downloadUrl) {
        const a = document.createElement('a');
        a.href = data.downloadUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        const btn = e.currentTarget;
        btn.classList.add('text-rose-500');
        setTimeout(() => btn.classList.remove('text-rose-500'), 2000);
      }
    } catch {
      const btn = e.currentTarget;
      btn.classList.add('text-rose-500');
      setTimeout(() => btn.classList.remove('text-rose-500'), 2000);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary transition-all disabled:opacity-50"
      title="Download"
    >
      <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-pulse' : ''}`} />
    </button>
  );
};
