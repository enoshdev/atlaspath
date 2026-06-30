import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { n as Navbar, t as Footer } from "./Footer_CsXyfZe7.mjs";
import { n as WhatsAppButton, t as AIAssistant } from "./AIAssistant_DVlD598_.mjs";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, BarChart2, BookOpen, Bookmark, Briefcase, Calendar, Check, CheckCircle, ChevronDown, ChevronUp, FileText, Filter, Globe, GraduationCap, RefreshCw, Search, Users } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ScholarshipExplorer.tsx
var SCHOLARSHIPS = [
	{
		id: "daad",
		name: "DAAD Scholarship",
		country: "Germany",
		flag: "🇩🇪",
		provider: "German Academic Exchange Service",
		providerType: "Government",
		amount: "Up to €12,000 / year",
		amountNumeric: 12e3,
		coverage: "Tuition + Living Stipend + Health Insurance",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Graduates with 2+ years of professional work experience",
		deadline: "Varies (usually Oct-Dec)",
		successRate: "90%",
		successRateNumeric: 90,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "chevening",
		name: "Chevening Scholarship",
		country: "United Kingdom",
		flag: "🇬🇧",
		provider: "UK Foreign, Commonwealth & Development Office",
		providerType: "Government",
		amount: "£18,000 - £30,000 / year",
		amountNumeric: 24e3,
		coverage: "Tuition Fees + Monthly Stipend + Travel Costs",
		fundingType: "Fully Funded",
		degrees: ["Masters"],
		eligibility: "Bachelor's degree, 2 years work experience, leadership potential",
		deadline: "Nov 07, 2026",
		successRate: "88%",
		successRateNumeric: 88,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "fulbright",
		name: "Fulbright Foreign Student Program",
		country: "United States",
		flag: "🇺🇸",
		provider: "US Department of State",
		providerType: "Government",
		amount: "Up to $70,000 / year",
		amountNumeric: 7e4,
		coverage: "Full Tuition + Airfare + Living Stipend + Health Cover",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Completed Bachelor's, strong academic record & leadership",
		deadline: "Oct 15, 2026",
		successRate: "92%",
		successRateNumeric: 92,
		ieltsMin: 7,
		image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "erasmus",
		name: "Erasmus+ Scholarship",
		country: "Europe",
		flag: "🇪🇺",
		provider: "European Commission",
		providerType: "Government",
		amount: "€5,000 - €15,000 / year",
		amountNumeric: 1e4,
		coverage: "Tuition Fees + Participation Cost + Travel Stipend",
		fundingType: "Partially Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Excellent academic record, admitted to Erasmus Joint degree",
		deadline: "Feb 28, 2027",
		successRate: "85%",
		successRateNumeric: 85,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "australia-awards",
		name: "Australia Awards",
		country: "Australia",
		flag: "🇦🇺",
		provider: "Department of Foreign Affairs and Trade",
		providerType: "Government",
		amount: "AUD $25,000 - $50,000 / year",
		amountNumeric: 37e3,
		coverage: "Full Tuition + Return Air Travel + Living Stipend",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Admissible to Australian universities, home return policy",
		deadline: "Apr 30, 2027",
		successRate: "89%",
		successRateNumeric: 89,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "vanier",
		name: "Vanier Canada Graduate Scholarships",
		country: "Canada",
		flag: "🇨🇦",
		provider: "Government of Canada",
		providerType: "Government",
		amount: "CAD $50,000 / year",
		amountNumeric: 36e3,
		coverage: "Full PhD Funding & Research Stipend",
		fundingType: "Fully Funded",
		degrees: ["PhD"],
		eligibility: "Exceptional academic success, research potential, leadership",
		deadline: "Nov 01, 2026",
		successRate: "92%",
		successRateNumeric: 92,
		ieltsMin: 7,
		image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "rhodes",
		name: "Rhodes Scholarship",
		country: "United Kingdom",
		flag: "🇬🇧",
		provider: "The Rhodes Trust",
		providerType: "Merit-based",
		amount: "Full Funding + £18,180 / year",
		amountNumeric: 4e4,
		coverage: "Full Tuition Fees + Living Stipend + Health Insurance",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Outstanding intellect, character, leadership, GPA 3.7+",
		deadline: "Oct 01, 2026",
		successRate: "84%",
		successRateNumeric: 84,
		ieltsMin: 7.5,
		image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "mext",
		name: "MEXT Scholarship",
		country: "Japan",
		flag: "🇯🇵",
		provider: "Government of Japan",
		providerType: "Government",
		amount: "JPY 117,000 - 145,000 / month",
		amountNumeric: 13e3,
		coverage: "Full Tuition + Roundtrip Airfare + Monthly Stipend",
		fundingType: "Fully Funded",
		degrees: [
			"Bachelors",
			"Masters",
			"PhD"
		],
		eligibility: "Under 35, willing to learn basic Japanese language",
		deadline: "May 15, 2027",
		successRate: "90%",
		successRateNumeric: 90,
		ieltsMin: 6,
		image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "gates-cambridge",
		name: "Gates Cambridge Scholarship",
		country: "United Kingdom",
		flag: "🇬🇧",
		provider: "Bill & Melinda Gates Foundation",
		providerType: "Private",
		amount: "Full Funding + £18,744 / year",
		amountNumeric: 42e3,
		coverage: "Full Tuition + Airfare + Discretionary Funding",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Outstanding intellectual ability, leadership, commitment to helping others",
		deadline: "Dec 05, 2026",
		successRate: "84%",
		successRateNumeric: 84,
		ieltsMin: 7.5,
		image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "eiffel",
		name: "Eiffel Excellence Scholarship",
		country: "France",
		flag: "🇫🇷",
		provider: "Ministry for Europe and Foreign Affairs",
		providerType: "Government",
		amount: "Up to €1,400 / month",
		amountNumeric: 16800,
		coverage: "Living Stipend + Return Airfare + Local Transport",
		fundingType: "Fully Funded",
		degrees: ["Masters", "PhD"],
		eligibility: "Up to 25 yrs (Master's) or 30 yrs (PhD), excellence profile",
		deadline: "Jan 10, 2027",
		successRate: "88%",
		successRateNumeric: 88,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "orange-tulip",
		name: "Orange Tulip Scholarship",
		country: "Netherlands",
		flag: "🇳🇱",
		provider: "Nuffic Neso",
		providerType: "University",
		amount: "€10,000 - €22,000 / year",
		amountNumeric: 18e3,
		coverage: "Partial or Full Tuition Fee waivers",
		fundingType: "Partially Funded",
		degrees: ["Bachelors", "Masters"],
		eligibility: "High GPA, admitted to participating Dutch universities",
		deadline: "Apr 01, 2027",
		successRate: "89%",
		successRateNumeric: 89,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop&q=80"
	},
	{
		id: "singapore-singa",
		name: "SINGA Graduate Award",
		country: "Singapore",
		flag: "🇸🇬",
		provider: "Agency for Science, Technology and Research",
		providerType: "Research",
		amount: "SGD $2,200 - $2,700 / month",
		amountNumeric: 25e3,
		coverage: "Full Tuition + Monthly Stipend + Settling-In Grant",
		fundingType: "Fully Funded",
		degrees: ["PhD"],
		eligibility: "Strong interest in research, excellent academic record",
		deadline: "Jun 01, 2026",
		successRate: "91%",
		successRateNumeric: 91,
		ieltsMin: 6.5,
		image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop&q=80"
	}
];
var SCHOLARSHIPS_BY_COUNTRY = {
	germany: [
		{
			name: "DAAD Scholarship",
			amount: "Up to €1,200/mo + full fees"
		},
		{
			name: "Deutschlandstipendium",
			amount: "€300 / month merit award"
		},
		{
			name: "Heinrich Böll Foundation",
			amount: "Up to €850/mo + study grant"
		},
		{
			name: "Konrad-Adenauer-Stiftung",
			amount: "Up to €861/mo for Master's"
		},
		{
			name: "Friedrich Ebert Stiftung",
			amount: "Comprehensive living stipend"
		}
	],
	canada: [
		{
			name: "Vanier Canada Graduate Scholarships",
			amount: "CAD $50,000 / year"
		},
		{
			name: "Banting Postdoctoral Fellowships",
			amount: "CAD $70,000 / year"
		},
		{
			name: "Ontario Graduate Scholarship (OGS)",
			amount: "CAD $15,000 / year"
		},
		{
			name: "UBC International Major Entrance",
			amount: "Up to CAD $40,000 total"
		},
		{
			name: "University of Waterloo Entrance Awards",
			amount: "Up to CAD $10,000"
		}
	],
	australia: [
		{
			name: "Australia Awards Scholarships",
			amount: "Fully Funded + Stipend"
		},
		{
			name: "Destination Australia Scholarship",
			amount: "AUD $15,000 / year"
		},
		{
			name: "University of Sydney Research Training",
			amount: "AUD $37,207 / year"
		},
		{
			name: "Melbourne Research Scholarship",
			amount: "Full fee offset + stipend"
		},
		{
			name: "UNSW International Scientia Coursework",
			amount: "Full tuition coverage"
		}
	],
	uk: [
		{
			name: "Chevening Scholarships",
			amount: "Fully Funded + Airfare"
		},
		{
			name: "Rhodes Scholarship at Oxford",
			amount: "Full tuition + £18,180/yr"
		},
		{
			name: "Gates Cambridge Scholarship",
			amount: "Full tuition + £18,744/yr"
		},
		{
			name: "Commonwealth Master's Scholarships",
			amount: "Fully Funded"
		},
		{
			name: "Great Scholarships",
			amount: "Minimum £10,000 tuition waiver"
		}
	],
	usa: [
		{
			name: "Fulbright Student Program",
			amount: "Fully Funded + Flights"
		},
		{
			name: "Hubert H. Humphrey Fellowship",
			amount: "Tuition + Living allowances"
		},
		{
			name: "AAUW International Fellowships",
			amount: "Up to $50,000 for PhD"
		},
		{
			name: "Knight-Hennessy Scholars at Stanford",
			amount: "Full funding + stipend"
		},
		{
			name: "Harvard University Academy Scholars",
			amount: "Up to $75,000 / year"
		}
	]
};
var SUCCESS_STORIES = [
	{
		student: "Priya Sharma",
		country: "Germany",
		flag: "🇩🇪",
		scholarship: "DAAD Scholarship",
		university: "Technical University of Munich",
		amount: "€1,200 / month",
		story: "AtlasPath helped me secure the DAAD scholarship by providing detailed SOP checklists and reviewing my engineering research draft.",
		initials: "PS",
		color: "bg-indigo-600"
	},
	{
		student: "Arjun Patel",
		country: "United Kingdom",
		flag: "🇬🇧",
		scholarship: "Chevening Scholarship",
		university: "University of London",
		amount: "Fully Funded",
		story: "The mock interviews and leadership essay guidance from AtlasPath mentors were the keys to my Chevening success.",
		initials: "AP",
		color: "bg-[#6D4AFF]"
	},
	{
		student: "Neha Verma",
		country: "United States",
		flag: "🇺🇸",
		scholarship: "Fulbright Scholarship",
		university: "Stanford University",
		amount: "Fully Funded",
		story: "From profile review to visa support, AtlasPath turned my dream of studying at Stanford on a Fulbright into reality.",
		initials: "NV",
		color: "bg-emerald-600"
	},
	{
		student: "Rohan Mehta",
		country: "Australia",
		flag: "🇦🇺",
		scholarship: "Australia Awards",
		university: "University of Melbourne",
		amount: "AUD $30,000 / year",
		story: "I was lost with Australia Awards requirements. AtlasPath structured my credentials and guided me through each step.",
		initials: "RM",
		color: "bg-amber-600"
	}
];
var FilterAccordion = ({ title, children, defaultOpen = false }) => {
	const [open, setOpen] = useState(defaultOpen);
	return /* @__PURE__ */ jsxs("div", {
		className: "border-b border-slate-100 py-3.5",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between text-sm font-semibold text-[#0F172A] mb-1 focus:outline-none",
			children: [title, open ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4 text-slate-400" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-slate-400" })]
		}), /* @__PURE__ */ jsx(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ jsx(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: { duration: .2 },
				className: "overflow-hidden mt-2.5",
				children
			})
		})]
	});
};
var ScholarshipExplorer = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCountries, setSelectedCountries] = useState([]);
	const [selectedDegrees, setSelectedDegrees] = useState([]);
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [selectedFundings, setSelectedFundings] = useState([]);
	const [ieltsFilter, setIeltsFilter] = useState("any");
	const [savedScholarships, setSavedScholarships] = useState([]);
	const [compareList, setCompareList] = useState(["daad", "chevening"]);
	const [activeTabCountry, setActiveTabCountry] = useState("germany");
	const [limit, setLimit] = useState(5);
	const scrollContainerRef = React.useRef(null);
	const toggleCountry = (c) => setSelectedCountries((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
	const toggleDegree = (d) => setSelectedDegrees((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
	const toggleType = (t) => setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
	const toggleFunding = (f) => setSelectedFundings((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
	const toggleSave = (id, e) => {
		e.stopPropagation();
		setSavedScholarships((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
	};
	const toggleCompareSelection = (id, e) => {
		e.stopPropagation();
		setCompareList((prev) => {
			if (prev.includes(id)) return prev.filter((x) => x !== id);
			if (prev.length < 3) return [...prev, id];
			return prev;
		});
	};
	const clearAllFilters = () => {
		setSelectedCountries([]);
		setSelectedDegrees([]);
		setSelectedTypes([]);
		setSelectedFundings([]);
		setIeltsFilter("any");
		setSearchQuery("");
	};
	const handleSliderScroll = (direction) => {
		if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({
			left: direction === "left" ? -340 : 340,
			behavior: "smooth"
		});
	};
	const filteredScholarships = useMemo(() => {
		return SCHOLARSHIPS.filter((s) => {
			if (searchQuery.trim() !== "") {
				const query = searchQuery.toLowerCase();
				const matchesName = s.name.toLowerCase().includes(query);
				const matchesProvider = s.provider.toLowerCase().includes(query);
				const matchesCountry = s.country.toLowerCase().includes(query);
				if (!matchesName && !matchesProvider && !matchesCountry) return false;
			}
			if (selectedCountries.length > 0 && !selectedCountries.includes(s.country)) return false;
			if (selectedDegrees.length > 0 && !s.degrees.some((d) => selectedDegrees.includes(d))) return false;
			if (selectedTypes.length > 0 && !selectedTypes.includes(s.providerType)) return false;
			if (selectedFundings.length > 0 && !selectedFundings.includes(s.fundingType)) return false;
			if (ieltsFilter !== "any") {
				const score = parseFloat(ieltsFilter);
				if (s.ieltsMin > score) return false;
			}
			return true;
		});
	}, [
		searchQuery,
		selectedCountries,
		selectedDegrees,
		selectedTypes,
		selectedFundings,
		ieltsFilter
	]);
	const displayedScholarships = useMemo(() => {
		return filteredScholarships.slice(0, limit);
	}, [filteredScholarships, limit]);
	const comparisonMatrix = useMemo(() => {
		const s1 = SCHOLARSHIPS.find((s) => s.id === compareList[0]) || SCHOLARSHIPS[0];
		const s2 = SCHOLARSHIPS.find((s) => s.id === (compareList[1] || compareList[0])) || SCHOLARSHIPS[1];
		return {
			s1,
			s2,
			rows: [
				{
					label: "Coverage",
					val1: s1.coverage,
					val2: s2.coverage
				},
				{
					label: "Funding Amount",
					val1: s1.amount,
					val2: s2.amount
				},
				{
					label: "Duration / Degree",
					val1: s1.degrees.join(", "),
					val2: s2.degrees.join(", ")
				},
				{
					label: "Provider Type",
					val1: s1.providerType,
					val2: s2.providerType
				},
				{
					label: "Visa & Health Cover",
					val1: s1.id === "daad" || s1.id === "chevening" ? "Included" : "Partial Offset",
					val2: s2.id === "daad" || s2.id === "chevening" ? "Included" : "Partial Offset"
				},
				{
					label: "Min IELTS Req.",
					val1: s1.ieltsMin === 0 ? "Not Mandatory" : `${s1.ieltsMin}+`,
					val2: s2.ieltsMin === 0 ? "Not Mandatory" : `${s2.ieltsMin}+`
				},
				{
					label: "Success Rate",
					val1: s1.successRate,
					val2: s2.successRate
				},
				{
					label: "Deadline Date",
					val1: s1.deadline,
					val2: s2.deadline
				}
			]
		};
	}, [compareList]);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-white min-h-screen text-[#0F172A]",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "bg-white border-b border-slate-100 relative overflow-hidden",
				style: { paddingTop: "80px" },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-[0.03] pointer-events-none",
						children: /* @__PURE__ */ jsxs("svg", {
							width: "100%",
							height: "100%",
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "schol-grid",
								width: "40",
								height: "40",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ jsx("path", {
									d: "M 40 0 L 0 0 0 40",
									fill: "none",
									stroke: "#000",
									strokeWidth: "0.5"
								})
							}), /* @__PURE__ */ jsx("rect", {
								width: "100%",
								height: "100%",
								fill: "url(#schol-grid)"
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5 text-xs text-slate-400 mb-8",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "/",
									className: "hover:text-primary transition-colors font-medium",
									children: "Home"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[#0F172A] font-semibold",
									children: "Scholarships"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsxs(motion.h1, {
										initial: {
											opacity: 0,
											y: 22
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: { duration: .5 },
										className: "font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight animate-float",
										style: { fontSize: "clamp(36px, 4.5vw, 54px)" },
										children: [
											"Find Scholarships That",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "font-serif italic font-normal text-primary",
												children: "Fund Your Future"
											})
										]
									}),
									/* @__PURE__ */ jsx(motion.p, {
										initial: {
											opacity: 0,
											y: 16
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											delay: .1,
											duration: .5
										},
										className: "text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-2xl text-pretty",
										children: "Explore global scholarships, grants and funding opportunities from universities, governments and international organizations."
									}),
									/* @__PURE__ */ jsx(motion.div, {
										initial: {
											opacity: 0,
											y: 16
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											delay: .18,
											duration: .5
										},
										className: "relative mb-6",
										children: /* @__PURE__ */ jsxs("div", {
											className: "relative flex items-center bg-white rounded-2xl border-2 border-slate-200 shadow-md shadow-slate-100 hover:border-slate-300 transition-all duration-200 ease-in-out focus-within:ring-0 focus-within:border-current focus-within:shadow-none",
											children: [
												/* @__PURE__ */ jsx(Search, { className: "absolute left-5 w-5 h-5 text-[#94A3B8] pointer-events-none" }),
												/* @__PURE__ */ jsx("input", {
													type: "text",
													value: searchQuery,
													onChange: (e) => setSearchQuery(e.target.value),
													placeholder: "Search scholarships, e.g. DAAD, Chevening, Computer Science...",
													className: "flex-1 pl-14 pr-4 py-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-transparent outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent"
												}),
												/* @__PURE__ */ jsx("button", {
													type: "button",
													className: "m-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-primary hover:bg-secondary transition-colors shrink-0 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
													children: "Search"
												})
											]
										})
									}),
									/* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										transition: { delay: .28 },
										className: "flex items-center gap-2 flex-wrap",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-xs font-semibold text-[#94A3B8]",
											children: "Popular:"
										}), [
											"Fully-funded",
											"Masters in Canada",
											"DAAD Germany",
											"MBA Scholarships",
											"Erasmus+"
										].map((c) => /* @__PURE__ */ jsx("button", {
											onClick: () => {
												setSearchQuery(c === "Fully-funded" ? "Fully Funded" : c === "DAAD Germany" ? "DAAD" : c);
											},
											className: "px-3.5 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/12 hover:bg-primary/14 transition-colors",
											children: c
										}, c))]
									})
								]
							}), /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									delay: .3,
									duration: .5
								},
								className: "lg:w-[380px] bg-slate-50/70 border border-slate-100 rounded-3xl p-6 flex flex-col justify-center shrink-0 relative overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" }),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-6",
										children: "AtlasPath Metrics"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 gap-x-6 gap-y-7",
										children: [
											{
												value: "5,000+",
												label: "Scholarships Available",
												color: "text-primary"
											},
											{
												value: "50+",
												label: "Countries Supported",
												color: "text-[#8B5CF6]"
											},
											{
												value: "₹500Cr+",
												label: "Funding Opportunity",
												color: "text-emerald-600"
											},
											{
												value: "1,000+",
												label: "University Grants",
												color: "text-indigo-600"
											}
										].map(({ value, label, color }) => /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("p", {
												className: `text-[25px] font-black leading-none tracking-tight ${color}`,
												children: value
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[11px] text-[#64748B] font-medium mt-1.5 leading-snug",
												children: label
											})]
										}, label))
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-7",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-bold text-[#0F172A] tracking-tight",
						children: "Featured Scholarships"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-1",
						children: "Premier government and global foundation grants"
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#explorer-grid",
							className: "text-xs font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1",
							children: ["View all scholarships ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5 border border-slate-100 rounded-full p-1 bg-slate-50",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => handleSliderScroll("left"),
								className: "p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none",
								"aria-label": "Previous Featured",
								children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 rotate-90" })
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => handleSliderScroll("right"),
								className: "p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none",
								"aria-label": "Next Featured",
								children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 -rotate-90" })
							})]
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					ref: scrollContainerRef,
					className: "flex items-stretch gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0",
					children: SCHOLARSHIPS.slice(0, 5).map((schol) => /* @__PURE__ */ jsxs("div", {
						className: "w-[280px] sm:w-[310px] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-100/70 hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0 group",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-[130px] w-full overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: schol.image,
									alt: schol.name,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
									onError: (e) => {
										e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80";
									}
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-3 left-4 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-lg",
										children: schol.flag
									}), /* @__PURE__ */ jsx("span", {
										className: "text-white text-xs font-bold",
										children: schol.country
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 text-[9px] font-bold text-white uppercase tracking-wider",
									children: schol.fundingType
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-4 flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xs font-black text-slate-800 tracking-tight leading-snug line-clamp-1 mb-2",
								children: schol.name
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-x-2 gap-y-3.5 text-[10px] text-slate-500 font-semibold mb-4 pt-1",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Funding"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1.5 leading-snug",
										children: schol.amount.split(" / ")[0]
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Coverage"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1.5 leading-snug truncate",
										children: schol.coverage.split(" + ")[0]
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Eligible Degrees"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1.5 leading-snug",
										children: schol.degrees.join(", ")
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Deadline"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1.5 leading-snug",
										children: schol.deadline
									})] })
								]
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-t border-slate-50 pt-3",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-[9px] font-bold text-slate-400 uppercase tracking-wider",
									children: [schol.successRate, " Success Rate"]
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform",
									children: ["Explore ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
								})]
							})]
						})]
					}, schol.id))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "explorer-grid",
				className: "py-14 border-t border-slate-100 scroll-mt-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-full lg:w-[260px] shrink-0",
							children: /* @__PURE__ */ jsxs("div", {
								className: "sticky top-24 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between pb-3.5 border-b border-slate-100",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5 text-sm font-bold text-[#0F172A]",
											children: [/* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Filter Scholarships" })]
										}), /* @__PURE__ */ jsx("button", {
											onClick: clearAllFilters,
											className: "text-xs font-bold text-primary hover:text-[#5B3BE0] transition-colors",
											children: "Clear All"
										})]
									}),
									/* @__PURE__ */ jsx(FilterAccordion, {
										title: "Study Destination",
										defaultOpen: true,
										children: /* @__PURE__ */ jsx("div", {
											className: "flex flex-col gap-2.5",
											children: [
												"Germany",
												"Canada",
												"Australia",
												"United Kingdom",
												"United States",
												"France",
												"Singapore"
											].map((c) => /* @__PURE__ */ jsxs("label", {
												className: "flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer",
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: selectedCountries.includes(c),
													onChange: () => toggleCountry(c),
													className: "w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
												}), /* @__PURE__ */ jsx("span", { children: c })]
											}, c))
										})
									}),
									/* @__PURE__ */ jsx(FilterAccordion, {
										title: "Degree Level",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex flex-col gap-2.5",
											children: [
												"Bachelors",
												"Masters",
												"PhD"
											].map((d) => /* @__PURE__ */ jsxs("label", {
												className: "flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer",
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: selectedDegrees.includes(d),
													onChange: () => toggleDegree(d),
													className: "w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
												}), /* @__PURE__ */ jsx("span", { children: d })]
											}, d))
										})
									}),
									/* @__PURE__ */ jsx(FilterAccordion, {
										title: "Scholarship Type",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex flex-col gap-2.5",
											children: [
												"Government",
												"University",
												"Private",
												"Research",
												"Merit-based"
											].map((type) => /* @__PURE__ */ jsxs("label", {
												className: "flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer",
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: selectedTypes.includes(type),
													onChange: () => toggleType(type),
													className: "w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
												}), /* @__PURE__ */ jsx("span", { children: type })]
											}, type))
										})
									}),
									/* @__PURE__ */ jsx(FilterAccordion, {
										title: "Funding Type",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex flex-col gap-2.5",
											children: ["Fully Funded", "Partially Funded"].map((funding) => /* @__PURE__ */ jsxs("label", {
												className: "flex items-center gap-2.5 text-xs text-slate-600 font-semibold cursor-pointer",
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													checked: selectedFundings.includes(funding),
													onChange: () => toggleFunding(funding),
													className: "w-4 h-4 rounded text-primary focus:ring-0 border-slate-300"
												}), /* @__PURE__ */ jsx("span", { children: funding })]
											}, funding))
										})
									}),
									/* @__PURE__ */ jsx(FilterAccordion, {
										title: "IELTS Requirement",
										children: /* @__PURE__ */ jsxs("select", {
											value: ieltsFilter,
											onChange: (e) => setIeltsFilter(e.target.value),
											className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-2 focus:outline-none",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "any",
													children: "No Minimum IELTS Score"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "6.0",
													children: "Under 6.0"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "6.5",
													children: "6.5 and above"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "7.0",
													children: "7.0 and above"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "7.5",
													children: "7.5 and above"
												})
											]
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-5 text-center",
										children: /* @__PURE__ */ jsxs("p", {
											className: "text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1",
											children: [filteredScholarships.length, " scholarships found"]
										})
									})
								]
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ jsxs("h3", {
										className: "text-lg font-bold text-slate-900 tracking-tight",
										children: ["Scholarships ", /* @__PURE__ */ jsxs("span", {
											className: "text-slate-400 font-medium",
											children: [
												"(",
												filteredScholarships.length,
												")"
											]
										})]
									}), selectedCountries.length > 0 && /* @__PURE__ */ jsx("button", {
										onClick: clearAllFilters,
										className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
										children: "Clear filters"
									})]
								}),
								filteredScholarships.length === 0 ? /* @__PURE__ */ jsxs("div", {
									className: "text-center py-20 bg-gradient-to-br from-slate-50 to-white border border-dashed border-slate-200 rounded-3xl",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4",
											children: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-slate-300" })
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-base font-bold text-slate-600",
											children: "No scholarships found."
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-slate-400 mt-1",
											children: "Try adjusting your filters above"
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: clearAllFilters,
											className: "mt-4 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20",
											children: "Explore Scholarships"
										})
									]
								}) : /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-8",
									children: displayedScholarships.map((schol) => {
										const saved = savedScholarships.includes(schol.id);
										const comparing = compareList.includes(schol.id);
										return /* @__PURE__ */ jsxs(motion.div, {
											layout: true,
											initial: {
												opacity: 0,
												y: 20
											},
											animate: {
												opacity: 1,
												y: 0
											},
											className: "group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "relative h-44 overflow-hidden",
												children: [
													/* @__PURE__ */ jsx("img", {
														src: schol.image,
														alt: schol.name,
														loading: "lazy",
														className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
														onError: (e) => {
															e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80";
														}
													}),
													/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" }),
													/* @__PURE__ */ jsxs("div", {
														className: "absolute top-3 left-3 right-3 flex items-start justify-between",
														children: [/* @__PURE__ */ jsxs("span", {
															className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/20",
															children: [/* @__PURE__ */ jsx("span", { children: schol.flag }), /* @__PURE__ */ jsx("span", { children: schol.country })]
														}), /* @__PURE__ */ jsx("span", {
															className: `px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${schol.fundingType === "Fully Funded" ? "bg-emerald-500/80 text-white" : "bg-amber-500/80 text-white"}`,
															children: schol.fundingType === "Fully Funded" ? "Full" : "Partial"
														})]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "absolute bottom-3 left-4 right-4",
														children: [/* @__PURE__ */ jsx("h4", {
															className: "text-sm font-bold text-white leading-tight drop-shadow-sm",
															children: schol.name
														}), /* @__PURE__ */ jsx("p", {
															className: "text-[10px] text-white/70 font-medium mt-0.5",
															children: schol.provider
														})]
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: "p-4 flex-1 flex flex-col gap-3",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "grid grid-cols-3 gap-3",
														children: [
															/* @__PURE__ */ jsxs("div", {
																className: "bg-slate-50 rounded-xl p-2.5 text-center",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[8px] font-bold text-slate-400 uppercase tracking-wider",
																	children: "Amount"
																}), /* @__PURE__ */ jsx("p", {
																	className: "text-[11px] font-extrabold text-slate-800 mt-0.5 truncate",
																	children: schol.amount.split(" / ")[0]
																})]
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "bg-slate-50 rounded-xl p-2.5 text-center",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[8px] font-bold text-slate-400 uppercase tracking-wider",
																	children: "Success"
																}), /* @__PURE__ */ jsx("p", {
																	className: "text-[11px] font-extrabold text-emerald-600 mt-0.5",
																	children: schol.successRate
																})]
															}),
															/* @__PURE__ */ jsxs("div", {
																className: "bg-slate-50 rounded-xl p-2.5 text-center",
																children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[8px] font-bold text-slate-400 uppercase tracking-wider",
																	children: "IELTS"
																}), /* @__PURE__ */ jsxs("p", {
																	className: "text-[11px] font-extrabold text-slate-800 mt-0.5",
																	children: [schol.ieltsMin, "+"]
																})]
															})
														]
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-slate-500 leading-relaxed line-clamp-2",
														children: schol.eligibility
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex flex-wrap items-center gap-1.5",
														children: [schol.degrees.map((d) => /* @__PURE__ */ jsx("span", {
															className: "px-2 py-0.5 rounded-md bg-primary/6 text-[9px] font-semibold text-primary border border-primary/10",
															children: d
														}, d)), /* @__PURE__ */ jsx("span", {
															className: "text-[9px] text-slate-400 font-medium ml-auto",
															children: schol.deadline
														})]
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-2 pt-2 border-t border-slate-100 mt-auto",
														children: [
															/* @__PURE__ */ jsx("button", {
																onClick: (e) => toggleCompareSelection(schol.id, e),
																className: `w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${comparing ? "bg-primary border-primary text-white shadow-sm shadow-primary/20" : "border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"}`,
																title: "Compare",
																children: /* @__PURE__ */ jsx(BarChart2, { className: "w-4 h-4" })
															}),
															/* @__PURE__ */ jsx("button", {
																onClick: (e) => toggleSave(schol.id, e),
																className: `w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${saved ? "bg-emerald-500 border-emerald-500 text-white shadow-sm shadow-emerald-500/20" : "border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"}`,
																title: "Save",
																children: /* @__PURE__ */ jsx(Bookmark, { className: `w-4 h-4 ${saved ? "fill-white" : ""}` })
															}),
															/* @__PURE__ */ jsxs("a", {
																href: "https://wa.me/919876543210",
																target: "_blank",
																rel: "noopener noreferrer",
																onClick: (e) => e.stopPropagation(),
																className: "flex-1 h-9 rounded-xl text-center text-xs font-extrabold text-white bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-1.5 group/btn",
																children: [/* @__PURE__ */ jsx("span", { children: "Apply Now" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" })]
															})
														]
													})
												]
											})]
										}, schol.id);
									})
								}),
								filteredScholarships.length > limit && /* @__PURE__ */ jsx("div", {
									className: "text-center",
									children: /* @__PURE__ */ jsxs("button", {
										onClick: () => setLimit((prev) => prev + 5),
										className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20",
										children: [/* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Load More" })]
									})
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-primary" })
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-xs font-bold text-slate-800",
											children: "By Country"
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-1 mb-4",
										children: [
											"germany",
											"canada",
											"australia",
											"uk",
											"usa"
										].map((tab) => /* @__PURE__ */ jsx("button", {
											onClick: () => setActiveTabCountry(tab),
											className: `px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${activeTabCountry === tab ? "bg-primary text-white shadow-sm" : "bg-slate-50 text-slate-500 hover:text-slate-700"}`,
											children: tab
										}, tab))
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-2.5",
										children: SCHOLARSHIPS_BY_COUNTRY[activeTabCountry]?.map((schol, idx) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[11px] font-semibold text-slate-700 truncate",
												children: schol.name
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[9px] font-bold text-primary shrink-0 ml-2",
												children: schol.amount
											})]
										}, idx))
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mb-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
											children: /* @__PURE__ */ jsx(BarChart2, { className: "w-4 h-4 text-primary" })
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-xs font-bold text-slate-800",
											children: "Compare"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-[90px_1fr_1fr] gap-1 pb-3 border-b border-slate-100",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[8px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Feature"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-black text-slate-800 truncate text-center",
												children: comparisonMatrix.s1.name.split(" ")[0]
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-black text-slate-800 truncate text-center",
												children: comparisonMatrix.s2.name.split(" ")[0]
											})
										]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "divide-y divide-slate-50",
										children: comparisonMatrix.rows.slice(0, 5).map((row) => /* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-[90px_1fr_1fr] gap-1 py-2 items-center text-[9px] font-semibold",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-slate-500 truncate",
													children: row.label
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-slate-800 text-center truncate",
													children: row.val1
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-slate-800 text-center truncate",
													children: row.val2
												})
											]
										}, row.label))
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center",
										children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-600" })
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-slate-800",
										children: "Fully Funded"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-2.5",
									children: SCHOLARSHIPS.filter((s) => s.fundingType === "Fully Funded").slice(0, 5).map((schol) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: schol.flag
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] font-semibold text-slate-700 truncate max-w-[110px]",
												children: schol.name
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded",
											children: "Full"
										})]
									}, schol.id))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center",
										children: /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-amber-600" })
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-slate-800",
										children: "Deadlines"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-2.5",
									children: [
										{
											month: "May 2027",
											name: "MEXT Scholarship",
											flag: "🇯🇵"
										},
										{
											month: "Jun 2026",
											name: "SINGA Graduate Award",
											flag: "🇸🇬"
										},
										{
											month: "Oct 2026",
											name: "Fulbright Program",
											flag: "🇺🇸"
										},
										{
											month: "Nov 2026",
											name: "Chevening Scholarship",
											flag: "🇬🇧"
										},
										{
											month: "Dec 2026",
											name: "Gates Cambridge",
											flag: "🇬🇧"
										}
									].map((item, idx) => /* @__PURE__ */ jsx("div", {
										className: "flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-sm",
												children: item.flag
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[11px] font-semibold text-slate-700",
												children: item.name
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[8px] font-bold text-slate-400 uppercase tracking-wider",
												children: item.month
											})] })]
										})
									}, idx))
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex-1 bg-slate-50/70 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between",
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-2.5 py-1 rounded-full bg-primary/8 text-[9px] font-bold text-primary uppercase tracking-wider",
								children: "Student Impact"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mt-3 mb-5",
								children: "Scholarship Success Stories"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
								children: SUCCESS_STORIES.slice(0, 2).map((story, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm flex flex-col justify-between",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mb-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: `w-8 h-8 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center shrink-0`,
											children: story.initials
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-xs font-bold text-slate-800 leading-none",
											children: story.student
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[9px] text-slate-400 font-semibold mt-1 block truncate max-w-[140px]",
											children: story.university
										})] })]
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[10px] italic text-slate-500 font-semibold leading-relaxed mb-4",
										children: [
											"“",
											story.story,
											"”"
										]
									})] }), /* @__PURE__ */ jsxs("div", {
										className: "border-t border-slate-50 pt-2 flex items-center justify-between text-[9px] font-bold",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-slate-800",
											children: [
												story.flag,
												" ",
												story.scholarship
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-1.5 self-start",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-2.5 h-2.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Awarded" })]
										})]
									})]
								}, idx))
							})
						] })
					}), /* @__PURE__ */ jsxs("div", {
						className: "w-full lg:w-[380px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-black text-slate-800 tracking-tight mb-5",
							children: "Application Roadmap"
						}), /* @__PURE__ */ jsx("div", {
							className: "relative border-l border-slate-100 ml-2.5 pl-4 space-y-4 text-xs font-medium text-slate-600",
							children: [
								{
									title: "Find Scholarship",
									desc: "Identify matching opportunities via explorer grid filters"
								},
								{
									title: "Check Eligibility",
									desc: "Confirm academic records, CGPA, and country bounds"
								},
								{
									title: "Prepare Documents",
									desc: "Write SOP draft, solicit LOR references, and verify scores"
								},
								{
									title: "Submit Application",
									desc: "Submit dossiers to university or portal before deadline"
								},
								{
									title: "Receive Funding",
									desc: "Formalize blocked accounts, visa appointments, and fly out"
								}
							].map((step, idx) => /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute -left-[22px] top-0 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white" }),
									/* @__PURE__ */ jsxs("h4", {
										className: "text-[11px] font-bold text-slate-800 leading-none",
										children: [
											idx + 1,
											". ",
											step.title
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-500 font-semibold mt-1 leading-snug",
										children: step.desc
									})
								]
							}, idx))
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
							children: "Required Documentation Checklist"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Make sure you have these key files prepared for submission"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6",
						children: [
							{
								title: "Statement of Purpose (SOP)",
								desc: "Detailed essay showcasing academic intent, goals, and why you deserve funding support.",
								icon: FileText
							},
							{
								title: "Letters of Recommendation (LOR)",
								desc: "Academic or professional references backing your character, intellect, and capabilities.",
								icon: Users
							},
							{
								title: "Curriculum Vitae (CV)",
								desc: "1-2 page structural summary of career milestones, leadership, publications, and skills.",
								icon: Briefcase
							},
							{
								title: "Academic Transcripts",
								desc: "Original certificates, mark sheets, and CGPA reports from school & undergraduate colleges.",
								icon: BookOpen
							},
							{
								title: "IELTS / TOEFL Reports",
								desc: "Valid standardized English capability scorecards (typical minimum targets 6.5+).",
								icon: CheckCircle
							},
							{
								title: "Research Proposals",
								desc: "Dossier presenting research questions and methodology (essential for PhD applications).",
								icon: GraduationCap
							},
							{
								title: "Creative Portfolio",
								desc: "Showcase compilation of designs, codes, writing samples, or projects (field-specific).",
								icon: Award
							}
						].map((doc, idx) => /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ jsx(doc.icon, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold text-slate-800",
								children: doc.title
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[10px] text-slate-500 font-semibold mt-1 leading-snug",
								children: doc.desc
							})] })]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-14 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-1",
						children: "Get precise answers about deadlines, CGPA caps, and funding coverages"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-3.5",
					children: [
						{
							q: "How do fully funded scholarships work?",
							a: "Fully funded scholarships cover your entire cost of education. This typically includes 100% of your university tuition fees, a monthly living stipend (ranging from €900 to €2,000 depending on the country), roundtrip flight airfares, health insurance, and sometimes settling-in allowances."
						},
						{
							q: "Can I get a global scholarship without IELTS or TOEFL?",
							a: "Yes! Some scholarships (like the CSC in China, MEXT in Japan, or specific European university grants) accept a Medium of Instruction (MOI) certificate confirming your previous degree was taught in English. However, major government awards like Chevening, Fulbright, and Commonwealth require standardized IELTS/TOEFL scores."
						},
						{
							q: "Do scholarships cover my living expenses?",
							a: "Fully funded scholarships do cover living expenses through monthly stipends. Partially funded scholarships typically offset tuition fees only, meaning you must fund your own living expenses (e.g. via blocked accounts or part-time student jobs)."
						},
						{
							q: "What CGPA is required to be competitive for top scholarships?",
							a: "For highly competitive global scholarships (like Rhodes, Gates Cambridge, or Vanier), a minimum CGPA of 3.5/4.0 (roughly 85% or first-class degree) is standard. For government scholarships (DAAD, Australia Awards), a solid first-class academic profile along with 2+ years of professional experience is highly valued."
						},
						{
							q: "When is the best time to apply for global scholarships?",
							a: "Most scholarships have deadlines 8 to 12 months before the program begins. For Fall intake (September/October), scholarship deadlines generally run from October of the previous year to February of the entry year."
						},
						{
							q: "Can I apply for multiple scholarships at the same time?",
							a: "Absolutely. You are encouraged to apply for multiple university-specific and government scholarships to maximize your funding chances. Just make sure to read the terms, as some scholarships cannot be combined concurrently."
						},
						{
							q: "Are scholarships available for undergraduate (Bachelor's) degrees?",
							a: "Yes, but fully funded undergraduate scholarships are rarer than master's and PhD options. Opportunities like Japan's MEXT, Turkey Burslari, and university merit entrance awards offer full funding for outstanding school graduates."
						},
						{
							q: "Can I legally work while holding a scholarship?",
							a: "This depends on the scholarship rules. Some government scholarships (like Chevening) allow part-time work within standard visa limits (20 hours/week). Others (like Fulbright or specific research grants) explicitly forbid working during semesters to ensure you focus entirely on your studies."
						},
						{
							q: "Do I need a university admission offer letter before applying for a scholarship?",
							a: "For university-specific scholarships, yes—you usually need to be admitted first. For major government scholarships (like Chevening, Fulbright, DAAD), the scholarship application window opens early, allowing you to apply before securing an official offer letter."
						},
						{
							q: "What is a SOP, and why is it critical for scholarships?",
							a: "The Statement of Purpose (SOP) is an essay that presents your goals, qualifications, why you chose the course, and why you are a deserving candidate. For scholarships, a strong SOP that highlights leadership, academic merit, and community contribution is often the deciding factor."
						},
						{
							q: "How long do LORs (Letters of Recommendation) need to be?",
							a: "LORs should be 1 page (about 300-500 words) written on official institutional letterheads. They should be written by university professors or workplace supervisors who can vouch for your intellect, character, and work ethic."
						},
						{
							q: "Do scholarships cover the cost of study visa processing?",
							a: "Most fully funded government scholarships cover visa application fees and travel fares. However, partially funded university waivers usually do not, meaning you must cover your own visa fees and flight tickets."
						},
						{
							q: "What happens if I fail a course while on a scholarship?",
							a: "Most scholarship providers require you to maintain a minimum GPA (e.g. 3.0/4.0 or equivalent) every semester. If you fail a course or fall below the target GPA, the scholarship may be put on probation or cancelled."
						},
						{
							q: "Can I get a scholarship if I have a gap year in my education?",
							a: "Yes! A gap year is not a barrier if you can explain it constructively. If you spent the gap year gaining relevant work experience, completing certifications, or working on research, it can actually strengthen your profile."
						},
						{
							q: "How are scholarship stipends disbursed to students?",
							a: "Once you arrive in the destination country, you will open a local bank account. The scholarship administration office will disburse your monthly stipend directly into your account, usually during the first week of every month."
						}
					].map((faq, idx) => /* @__PURE__ */ jsxs("div", {
						className: "border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300",
						children: [
							/* @__PURE__ */ jsxs("label", {
								htmlFor: `faq-toggle-${idx}`,
								className: "w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 select-none",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-slate-800 leading-snug",
									children: faq.q
								}), /* @__PURE__ */ jsx("span", {
									className: "text-slate-400 shrink-0 select-none",
									children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
								})]
							}),
							/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								id: `faq-toggle-${idx}`,
								className: "peer hidden"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "max-h-0 overflow-hidden peer-checked:max-h-96 transition-all duration-300 bg-white border-t border-slate-100",
								children: /* @__PURE__ */ jsx("p", {
									className: "p-4 text-xs leading-relaxed text-[#64748B] font-medium text-pretty",
									children: faq.a
								})
							})
						]
					}, idx))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-[0.02] pointer-events-none",
						children: /* @__PURE__ */ jsxs("svg", {
							width: "100%",
							height: "100%",
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "schol-cta-grid",
								width: "40",
								height: "40",
								patternUnits: "userSpaceOnUse",
								children: /* @__PURE__ */ jsx("path", {
									d: "M 40 0 L 0 0 0 40",
									fill: "none",
									stroke: "#FFFFFF",
									strokeWidth: "0.5"
								})
							}), /* @__PURE__ */ jsx("rect", {
								width: "100%",
								height: "100%",
								fill: "url(#schol-cta-grid)"
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-4xl mx-auto text-center relative z-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6",
								children: "Find Funding"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight",
								children: [
									"Ready to Fund Your Global Education?",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
										children: "Get Expert Guidance Today"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty",
								children: "Coordinate profile reviews, academic document checks, essay editing, and interview preparations with certified mentors."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto",
								children: [
									/* @__PURE__ */ jsxs("a", {
										href: "#explorer-grid",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(Search, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Find Scholarships" })]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/book-consultation",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [
											/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
											/* @__PURE__ */ jsx("span", { children: "Book Consultation" }),
											/* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
										]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/assessment",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Take Assessment" })]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/universities",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Explore Universities" })]
									})
								]
							})
						]
					})
				]
			})
		]
	});
};
//#endregion
//#region src/pages/scholarships.astro
var scholarships_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Scholarships,
	file: () => $$file,
	url: () => $$url
});
var $$Scholarships = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Scholarships | AtlasPath — Find Scholarships That Fund Your Future",
		"description": "Search and compare 5000+ global scholarships, university grants, and funding opportunities from governments and organizations worldwide."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "ScholarshipExplorer", ScholarshipExplorer, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/ScholarshipExplorer",
		"client:component-export": "ScholarshipExplorer"
	})}${renderComponent($$result, "Footer", Footer, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Footer",
		"client:component-export": "Footer"
	})}${renderComponent($$result, "WhatsAppButton", WhatsAppButton, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/WhatsAppButton",
		"client:component-export": "WhatsAppButton"
	})}${renderComponent($$result, "AIAssistant", AIAssistant, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AIAssistant",
		"client:component-export": "AIAssistant"
	})}` })}`;
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/scholarships.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/scholarships.astro";
var $$url = "/scholarships";
//#endregion
//#region \0virtual:astro:page:src/pages/scholarships@_@astro
var page = () => scholarships_exports;
//#endregion
export { page };
