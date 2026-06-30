import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Award, BookOpen, Bookmark, BookmarkCheck, Calendar, CheckCircle, ChevronDown, DollarSign, Download, FileText, Globe, GraduationCap, Loader2, Mail, RefreshCw, Search, Sparkles } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ResourcesHub.tsx
var CATEGORY_CARDS = [
	{
		label: "Visa Guides",
		icon: FileText
	},
	{
		label: "Scholarships",
		icon: Award
	},
	{
		label: "Country Guides",
		icon: Globe
	},
	{
		label: "Applications",
		icon: FileText
	},
	{
		label: "IELTS",
		icon: FileText
	},
	{
		label: "TOEFL",
		icon: FileText
	},
	{
		label: "GRE",
		icon: FileText
	},
	{
		label: "SOP Guides",
		icon: BookOpen
	},
	{
		label: "LOR Guides",
		icon: BookOpen
	},
	{
		label: "University Selection",
		icon: GraduationCap
	},
	{
		label: "Budget Planning",
		icon: DollarSign
	}
];
var COUNTRY_GUIDES = {
	germany: {
		visaProcess: "8 Steps (6-8 Weeks)",
		tuition: "€0 - €3,000 / year (Public)",
		livingCost: "€10,200 - €12,000 / year",
		unisCount: "35+ Universities",
		scholarships: "DAAD, Heinrich Böll",
		pswRights: "18 Months Work Permit",
		bullets: [
			"Tuition-free public system",
			"Strong engineering & automotive sectors",
			"High visa approval rates",
			"Excellent career opportunities"
		]
	},
	canada: {
		visaProcess: "6 Steps (8-12 Weeks)",
		tuition: "CAD $16,000 - $35,000 / year",
		livingCost: "CAD $12,000 - $18,000 / year",
		unisCount: "28+ Universities",
		scholarships: "Vanier, OGS, Entrances",
		pswRights: "Up to 3 Years PGWP",
		bullets: [
			"Direct permanent residency path",
			"Postgraduate work permits",
			"Multicultural environment",
			"Top-tier tech research centers"
		]
	},
	australia: {
		visaProcess: "5 Steps (4-8 Weeks)",
		tuition: "AUD $25,000 - $45,000 / year",
		livingCost: "AUD $16,000 - $24,000 / year",
		unisCount: "37+ Universities",
		scholarships: "Australia Awards, Destination",
		pswRights: "2 - 4 Years PSW Visa",
		bullets: [
			"Top QS ranked institutions",
			"Warm climate, student friendly",
			"Substantial part-time wages",
			"Streamlined visa pathways"
		]
	},
	uk: {
		visaProcess: "4 Steps (3-6 Weeks)",
		tuition: "£14,000 - £26,000 / year",
		livingCost: "£12,000 - £16,000 / year",
		unisCount: "80+ Universities",
		scholarships: "Chevening, Commonwealth",
		pswRights: "2 Years Graduate Route",
		bullets: [
			"1-year fast Master programs",
			"Global business Hub",
			"Rich heritage, research-driven",
			"Simple visa submission"
		]
	},
	usa: {
		visaProcess: "5 Steps (4-12 Weeks)",
		tuition: "$25,000 - $60,000 / year",
		livingCost: "$12,000 - $20,000 / year",
		unisCount: "150+ Universities",
		scholarships: "Fulbright, Knight-Hennessy",
		pswRights: "1 - 3 Years OPT (STEM)",
		bullets: [
			"Global silicon valley tech hubs",
			"World-class academic rankings",
			"High starting packages",
			"Robust teaching assistants"
		]
	}
};
var FAQS = [{
	q: "How long does the university admission process take?",
	a: "University admissions generally take 4 to 8 weeks after document submission. Government scholarships and local verification checks might add 2 to 3 months of processing time, so early preparation is key."
}, {
	q: "What is the German APS Certificate, and is it mandatory?",
	a: "The Academic Evaluation Centre (APS) certificate verifies the authenticity of academic records for students applying from India, China, and Vietnam. It is mandatory for German university admissions and VFS student visa applications."
}];
var TOOLS = [
	{
		label: "Cost Calculator",
		link: "/countries"
	},
	{
		label: "Scholarship Finder",
		link: "/scholarships"
	},
	{
		label: "University Matcher",
		link: "/universities"
	},
	{
		label: "Admission Timeline",
		link: "/assessment"
	},
	{
		label: "Visa Checker",
		link: "/assessment"
	},
	{
		label: "Budget Estimator",
		link: "/countries"
	}
];
var getVisitorId = () => {
	if (typeof window === "undefined") return "";
	let id = localStorage.getItem("visitor_id");
	if (!id) {
		id = crypto.randomUUID();
		localStorage.setItem("visitor_id", id);
	}
	return id;
};
var SkeletonRow = () => /* @__PURE__ */ jsxs("div", {
	className: "animate-pulse flex items-center gap-4 py-3",
	children: [
		/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded flex-1" }),
		/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded w-20" }),
		/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded w-16" }),
		/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded w-12" }),
		/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded w-14 ml-auto" })
	]
});
var ResourcesHub = () => {
	const [resources, setResources] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [countryFilter, setCountryFilter] = useState("all");
	const [levelFilter, setLevelFilter] = useState("all");
	const [savedIds, setSavedIds] = useState([]);
	const [popularDownloads, setPopularDownloads] = useState([]);
	const [loadingPopular, setLoadingPopular] = useState(true);
	const [emailInput, setEmailInput] = useState("");
	const [subscribing, setSubscribing] = useState(false);
	const [subscribeMsg, setSubscribeMsg] = useState(null);
	const [activeTabCountry, setActiveTabCountry] = useState("germany");
	const userId = getVisitorId();
	const fetchResources = useCallback(async () => {
		setLoading(true);
		setError("");
		try {
			const params = new URLSearchParams();
			if (categoryFilter !== "all") params.set("category", categoryFilter);
			if (countryFilter !== "all") params.set("country", countryFilter);
			if (levelFilter !== "all") params.set("level", levelFilter);
			if (searchQuery.trim()) params.set("search", searchQuery.trim());
			const res = await fetch(`/api/resources?${params.toString()}`);
			if (!res.ok) throw new Error("Failed to fetch resources");
			const data = await res.json();
			setResources(data.data || []);
			setTotalCount(data.total || 0);
		} catch {
			setError("Failed to load resources. Please try again.");
		} finally {
			setLoading(false);
		}
	}, [
		categoryFilter,
		countryFilter,
		levelFilter,
		searchQuery
	]);
	const fetchPopularDownloads = useCallback(async () => {
		setLoadingPopular(true);
		try {
			setPopularDownloads((await (await fetch("/api/popular-downloads")).json()).data || []);
		} catch {} finally {
			setLoadingPopular(false);
		}
	}, []);
	const fetchSaved = useCallback(async () => {
		if (!userId) return;
		try {
			const data = await (await fetch(`/api/resources/save?userId=${userId}`)).json();
			if (data.data) setSavedIds(data.data);
		} catch {}
	}, [userId]);
	useEffect(() => {
		fetchResources();
	}, [fetchResources]);
	useEffect(() => {
		fetchPopularDownloads();
		fetchSaved();
	}, [fetchPopularDownloads, fetchSaved]);
	const toggleSave = async (resourceId, e) => {
		e.stopPropagation();
		e.preventDefault();
		const isSaved = savedIds.includes(resourceId);
		try {
			if ((await fetch("/api/resources/save", {
				method: isSaved ? "DELETE" : "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId,
					resourceId
				})
			})).ok) setSavedIds((prev) => isSaved ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]);
		} catch {}
	};
	const handleSubscribe = async () => {
		if (!emailInput.trim()) return;
		setSubscribing(true);
		setSubscribeMsg(null);
		try {
			const res = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: emailInput.trim() })
			});
			const data = await res.json();
			if (res.ok) {
				setSubscribeMsg({
					type: "success",
					text: data.message || "Subscribed!"
				});
				setEmailInput("");
			} else setSubscribeMsg({
				type: "error",
				text: data.error || "Subscription failed"
			});
		} catch {
			setSubscribeMsg({
				type: "error",
				text: "Network error. Please try again."
			});
		} finally {
			setSubscribing(false);
		}
	};
	const handleSearch = () => {
		fetchResources();
	};
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
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "res-grid",
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
								fill: "url(#res-grid)"
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
									children: "Resources"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "inline-flex items-center gap-1 mb-4 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[10px] font-bold text-slate-600",
										children: "📚 STUDY ABROAD RESOURCE HUB"
									}),
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
										className: "font-extrabold text-[#0F172A] leading-[1.06] mb-5 tracking-tight",
										style: { fontSize: "clamp(36px, 4.5vw, 54px)" },
										children: [
											"Everything You Need",
											/* @__PURE__ */ jsx("br", {}),
											"To ",
											/* @__PURE__ */ jsx("span", {
												className: "font-serif italic font-normal text-primary",
												children: "Study Abroad"
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
										className: "text-[15px] text-[#64748B] leading-relaxed mb-8 max-w-xl text-pretty",
										children: "Explore expert guides, country insights, visa resources, scholarship strategies and university planning tools in one place."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative flex items-center bg-white rounded-2xl border-2 border-slate-200 shadow-md shadow-slate-100 hover:border-slate-300 transition-all max-w-xl mb-6",
										children: [
											/* @__PURE__ */ jsx(Search, { className: "absolute left-5 w-5 h-5 text-[#94A3B8] pointer-events-none" }),
											/* @__PURE__ */ jsx("input", {
												type: "text",
												value: searchQuery,
												onChange: (e) => setSearchQuery(e.target.value),
												onKeyDown: (e) => e.key === "Enter" && handleSearch(),
												placeholder: "Search guides, visa, scholarships, universities...",
												className: "flex-1 pl-14 pr-4 py-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-transparent outline-none"
											}),
											/* @__PURE__ */ jsx("button", {
												onClick: handleSearch,
												className: "m-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-primary hover:bg-secondary transition-colors shrink-0",
												children: "Search"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 flex-wrap text-xs font-semibold text-[#94A3B8]",
										children: [/* @__PURE__ */ jsx("span", { children: "Popular:" }), [
											"Germany Visa Guide",
											"APS Certificate",
											"DAAD Scholarship",
											"Study in Canada",
											"IELTS"
										].map((chip) => /* @__PURE__ */ jsx("button", {
											onClick: () => {
												setSearchQuery(chip === "Germany Visa Guide" ? "Visa" : chip === "DAAD Scholarship" ? "DAAD" : chip);
												setTimeout(handleSearch, 0);
											},
											className: "px-3.5 py-1.5 rounded-full text-xs font-medium text-primary bg-primary/8 border border-primary/12 hover:bg-primary/14 transition-colors",
											children: chip
										}, chip))]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:w-[380px] bg-slate-50/70 border border-slate-100 rounded-3xl p-6 flex flex-col justify-center shrink-0 relative overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" }),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-6",
										children: "Resource Library Stats"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 gap-x-6 gap-y-7",
										children: [
											{
												value: totalCount > 0 ? `${totalCount}+` : "...",
												label: "Expert Guides"
											},
											{
												value: "50+",
												label: "Countries Covered"
											},
											{
												value: "1,000+",
												label: "University Resources"
											},
											{
												value: "15,000+",
												label: "Students Guided"
											}
										].map((stat, idx) => /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[25px] font-black text-primary leading-none tracking-tight",
												children: stat.value
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-[#64748B] font-medium mt-1.5 leading-snug",
												children: stat.label
											})]
										}, idx))
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-11 gap-4 text-center",
					children: CATEGORY_CARDS.map((cat, idx) => {
						const CatIcon = cat.icon;
						return /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								setCategoryFilter(cat.label);
								fetchResources();
							},
							className: `bg-slate-50/50 border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all ${categoryFilter === cat.label ? "ring-2 ring-primary/30 border-primary/30" : ""}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3",
								children: /* @__PURE__ */ jsx(CatIcon, { className: "w-5 h-5" })
							}), /* @__PURE__ */ jsx("h4", {
								className: "text-[10px] font-bold text-slate-800 leading-tight",
								children: cat.label
							})]
						}, idx);
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between",
							children: /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4",
									children: "Resource Library"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-5 pb-4 border-b border-slate-100",
									children: [
										/* @__PURE__ */ jsxs("select", {
											value: categoryFilter,
											onChange: (e) => {
												setCategoryFilter(e.target.value);
											},
											className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "all",
													children: "All Categories"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Visa Guides",
													children: "Visa Guides"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Scholarships",
													children: "Scholarships"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Country Guides",
													children: "Country Guides"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Applications",
													children: "Applications"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "IELTS",
													children: "IELTS"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "TOEFL",
													children: "TOEFL"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "GRE",
													children: "GRE"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "SOP Guides",
													children: "SOP Guides"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "LOR Guides",
													children: "LOR Guides"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "University Selection",
													children: "University Selection"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Budget Planning",
													children: "Budget Planning"
												})
											]
										}),
										/* @__PURE__ */ jsxs("select", {
											value: countryFilter,
											onChange: (e) => {
												setCountryFilter(e.target.value);
											},
											className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "all",
													children: "All Countries"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Germany",
													children: "Germany"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Canada",
													children: "Canada"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "United Kingdom",
													children: "United Kingdom"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Australia",
													children: "Australia"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "USA",
													children: "USA"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Ireland",
													children: "Ireland"
												})
											]
										}),
										/* @__PURE__ */ jsxs("select", {
											value: levelFilter,
											onChange: (e) => {
												setLevelFilter(e.target.value);
											},
											className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "all",
													children: "All Levels"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Beginner",
													children: "Beginner"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Intermediate",
													children: "Intermediate"
												}),
												/* @__PURE__ */ jsx("option", {
													value: "Advanced",
													children: "Advanced"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-end gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-slate-400 font-bold font-mono",
												children: loading ? "..." : `${totalCount} guides found`
											}), /* @__PURE__ */ jsx("button", {
												onClick: fetchResources,
												className: "p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors",
												title: "Refresh",
												children: /* @__PURE__ */ jsx(RefreshCw, { className: `w-3.5 h-3.5 ${loading ? "animate-spin" : ""}` })
											})]
										})
									]
								}),
								error && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-700 mb-4",
									children: [
										/* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4" }),
										error,
										/* @__PURE__ */ jsxs("button", {
											onClick: () => {
												setError("");
												fetchResources();
											},
											className: "ml-auto flex items-center gap-1 text-rose-500 hover:text-rose-700",
											children: [/* @__PURE__ */ jsx(RefreshCw, { className: "w-3 h-3" }), " Retry"]
										})
									]
								}),
								loading ? /* @__PURE__ */ jsxs("div", {
									className: "overflow-x-auto",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "border-b border-slate-100 pb-2 mb-2 flex text-[8px] font-bold text-slate-400 uppercase tracking-wider",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "flex-1",
												children: "Title"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-20",
												children: "Category"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-16",
												children: "Country"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-14",
												children: "Time"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "w-16 text-right",
												children: "Actions"
											})
										]
									}), [
										1,
										2,
										3,
										4,
										5
									].map((i) => /* @__PURE__ */ jsx(SkeletonRow, {}, i))]
								}) : resources.length === 0 ? /* @__PURE__ */ jsxs("div", {
									className: "text-center py-12",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4",
											children: /* @__PURE__ */ jsx(Search, { className: "w-7 h-7 text-slate-300" })
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm font-bold text-slate-400",
											children: "No resources found"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-slate-400 mt-1",
											children: "Try adjusting your filters or search query"
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => {
												setSearchQuery("");
												setCategoryFilter("all");
												setCountryFilter("all");
												setLevelFilter("all");
											},
											className: "mt-4 px-4 py-2 rounded-xl text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors",
											children: "Reset Filters"
										})
									]
								}) : /* @__PURE__ */ jsx("div", {
									className: "overflow-x-auto text-[10px] font-semibold text-slate-600",
									children: /* @__PURE__ */ jsxs("table", {
										className: "w-full text-left border-collapse",
										children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
											className: "border-b border-slate-100 text-slate-400 font-bold uppercase text-[8px] tracking-wider",
											children: [
												/* @__PURE__ */ jsx("th", {
													className: "pb-2.5",
													children: "Title"
												}),
												/* @__PURE__ */ jsx("th", {
													className: "pb-2.5",
													children: "Category"
												}),
												/* @__PURE__ */ jsx("th", {
													className: "pb-2.5",
													children: "Country"
												}),
												/* @__PURE__ */ jsx("th", {
													className: "pb-2.5",
													children: "Read Time"
												}),
												/* @__PURE__ */ jsx("th", {
													className: "pb-2.5 text-right",
													children: "Actions"
												})
											]
										}) }), /* @__PURE__ */ jsx("tbody", {
											className: "divide-y divide-slate-100 text-slate-800 font-bold",
											children: resources.map((res) => {
												const saved = savedIds.includes(res.id);
												return /* @__PURE__ */ jsxs("tr", {
													className: "hover:bg-slate-50/50 transition-colors",
													children: [
														/* @__PURE__ */ jsx("td", {
															className: "py-3 pr-3",
															children: /* @__PURE__ */ jsx("a", {
																href: `/resources/${res.slug}`,
																className: "font-extrabold text-[#0f172a] hover:text-primary transition-colors max-w-[200px] truncate block",
																children: res.title
															})
														}),
														/* @__PURE__ */ jsx("td", {
															className: "py-3 pr-3 text-primary",
															children: res.category
														}),
														/* @__PURE__ */ jsx("td", {
															className: "py-3 pr-3",
															children: /* @__PURE__ */ jsx("span", {
																className: "flex items-center gap-1",
																children: res.country && res.country !== "All" ? res.country : "🌐 Global"
															})
														}),
														/* @__PURE__ */ jsx("td", {
															className: "py-3 pr-3",
															children: res.readTime || "-"
														}),
														/* @__PURE__ */ jsx("td", {
															className: "py-3 text-right",
															children: /* @__PURE__ */ jsxs("div", {
																className: "flex items-center justify-end gap-1",
																children: [
																	res.fileUrl && /* @__PURE__ */ jsx(DownloadButton, { resourceId: res.id }),
																	/* @__PURE__ */ jsx("button", {
																		onClick: (e) => toggleSave(res.id, e),
																		className: `p-1.5 rounded-lg border transition-all ${saved ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary"}`,
																		title: saved ? "Unsave" : "Save",
																		children: saved ? /* @__PURE__ */ jsx(BookmarkCheck, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx(Bookmark, { className: "w-3.5 h-3.5" })
																	}),
																	/* @__PURE__ */ jsx("a", {
																		href: `/resources/${res.slug}`,
																		className: "p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary transition-colors",
																		title: "View details",
																		children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
																	})
																]
															})
														})
													]
												}, res.id);
											})
										})]
									})
								})
							] })
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full lg:w-[300px] shrink-0 space-y-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "bg-primary/6 border border-primary/10 rounded-3xl p-5",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-black text-primary uppercase tracking-widest mb-1.5",
										children: "Stay Updated"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-500 font-semibold mb-4 leading-normal",
										children: "Get study abroad updates & timelines delivered to your inbox."
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx("input", {
											type: "email",
											value: emailInput,
											onChange: (e) => setEmailInput(e.target.value),
											onKeyDown: (e) => e.key === "Enter" && handleSubscribe(),
											placeholder: "Enter email",
											className: "flex-1 text-xs font-semibold text-[#0F172A] placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl p-2.5 focus:outline-none"
										}), /* @__PURE__ */ jsxs("button", {
											onClick: handleSubscribe,
											disabled: subscribing || !emailInput.trim(),
											className: "px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
											children: [subscribing ? /* @__PURE__ */ jsx(Loader2, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsx(Mail, { className: "w-3 h-3" }), "Join"]
										})]
									}),
									subscribeMsg && /* @__PURE__ */ jsxs("div", {
										className: `mt-2 text-[9px] font-bold flex items-center gap-1 ${subscribeMsg.type === "success" ? "text-emerald-600" : "text-rose-600"}`,
										children: [subscribeMsg.type === "success" ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "w-3 h-3" }), subscribeMsg.text]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-4",
									children: "Popular Downloads"
								}), loadingPopular ? /* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										1,
										2,
										3
									].map((i) => /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-50 rounded-xl animate-pulse" }, i))
								}) : popularDownloads.length === 0 ? /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-400 font-medium",
									children: "No downloads yet."
								}) : /* @__PURE__ */ jsx("div", {
									className: "space-y-3 text-xs font-semibold text-slate-600",
									children: popularDownloads.map((item) => /* @__PURE__ */ jsx("div", {
										className: "flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("a", {
												href: "/book-consultation",
												className: "text-[10px] text-slate-800 font-bold block leading-none hover:text-primary transition-colors truncate",
												children: item.title
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-[8px] text-slate-400 mt-1 block leading-none flex items-center gap-1",
												children: [
													/* @__PURE__ */ jsx(Download, { className: "w-2.5 h-2.5" }),
													item.download_count,
													" downloads",
													item.fileType && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
														className: "mx-1",
														children: "·"
													}), item.fileType.toUpperCase()] })
												]
											})]
										})
									}, item.id))
								})]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-8",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-[#0F172A] tracking-tight",
							children: "Country Knowledge Center"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Tuition averages, visa steps, and living costs at a glance"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-50 border border-slate-200/50 rounded-2xl p-1 max-w-xl mx-auto",
						children: Object.keys(COUNTRY_GUIDES).map((code) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveTabCountry(code),
							className: `px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all focus:outline-none ${activeTabCountry === code ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-800"}`,
							children: code
						}, code))
					}),
					COUNTRY_GUIDES[activeTabCountry] && /* @__PURE__ */ jsxs("div", {
						className: "bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col lg:flex-row items-stretch gap-8 shadow-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex-1 space-y-4",
							children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight capitalize mb-2",
								children: [
									"Study in ",
									activeTabCountry,
									" Summary"
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-4",
								children: [
									{
										label: "Visa Process",
										val: COUNTRY_GUIDES[activeTabCountry].visaProcess
									},
									{
										label: "Tuition Fees",
										val: COUNTRY_GUIDES[activeTabCountry].tuition
									},
									{
										label: "Living Cost",
										val: COUNTRY_GUIDES[activeTabCountry].livingCost
									},
									{
										label: "Universities Count",
										val: COUNTRY_GUIDES[activeTabCountry].unisCount
									},
									{
										label: "Scholarships",
										val: COUNTRY_GUIDES[activeTabCountry].scholarships
									},
									{
										label: "Post Study Rights",
										val: COUNTRY_GUIDES[activeTabCountry].pswRights
									}
								].map((item, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm font-semibold",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[9px] font-bold text-slate-400 uppercase block tracking-wider leading-none",
										children: item.label
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-black text-slate-800 mt-2 block leading-none",
										children: item.val
									})]
								}, idx))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full lg:w-[300px] shrink-0 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-4",
								children: "Core Guidelines"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: COUNTRY_GUIDES[activeTabCountry].bullets.map((bullet, idx) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-2 text-xs font-semibold text-slate-600",
									children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-500 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: bullet })]
								}, idx))
							})] }), /* @__PURE__ */ jsxs("a", {
								href: `/countries`,
								className: "mt-6 w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
								children: [
									"Explore ",
									activeTabCountry,
									" Guide"
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4",
									children: "Planning Tools"
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-3 text-center",
									children: TOOLS.map((tool, idx) => /* @__PURE__ */ jsx("a", {
										href: tool.link,
										className: "p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all shadow-sm",
										children: tool.label
									}, idx))
								})] })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4",
									children: "Most Downloaded"
								}), loadingPopular ? /* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [
										1,
										2,
										3
									].map((i) => /* @__PURE__ */ jsx("div", { className: "h-8 bg-slate-50 rounded-xl animate-pulse" }, i))
								}) : popularDownloads.length === 0 ? /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-400 font-medium",
									children: "No downloads yet."
								}) : /* @__PURE__ */ jsx("div", {
									className: "space-y-3.5",
									children: popularDownloads.map((item, idx) => /* @__PURE__ */ jsx("a", {
										href: "/book-consultation",
										className: "flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0 group",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "text-[10px] text-slate-800 font-bold block leading-none group-hover:text-primary transition-colors truncate",
												children: [
													idx + 1,
													". ",
													item.title
												]
											}), /* @__PURE__ */ jsxs("span", {
												className: "text-[8px] text-slate-400 mt-1 block leading-none",
												children: [
													/* @__PURE__ */ jsx(Download, { className: "w-2.5 h-2.5 inline mr-0.5" }),
													item.download_count,
													" downloads"
												]
											})]
										})
									}, item.id))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4",
									children: "Quick Answers"
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-2",
									children: FAQS.slice(0, 4).map((faq, idx) => /* @__PURE__ */ jsxs("details", {
										className: "group",
										children: [/* @__PURE__ */ jsxs("summary", {
											className: "flex items-center justify-between text-[10px] font-bold text-slate-700 cursor-pointer py-2 border-b border-slate-50 list-none",
											children: [faq.q, /* @__PURE__ */ jsx(ChevronDown, { className: "w-3 h-3 text-slate-400 group-open:rotate-180 transition-transform shrink-0" })]
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[9px] text-slate-500 font-medium py-2 leading-relaxed",
											children: faq.a
										})]
									}, idx))
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-20 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-[0.02] pointer-events-none",
						children: /* @__PURE__ */ jsxs("svg", {
							width: "100%",
							height: "100%",
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "res-cta-grid",
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
								fill: "url(#res-cta-grid)"
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
								children: "Get Started"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight",
								children: [
									"Ready to Start Planning Smarter?",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
										children: "Unlock Expert Timelines & Tools"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty",
								children: "Take our AI assessment evaluation, search matching scholarships, compare country tuition metrics, and schedule advice sessions."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto",
								children: [
									/* @__PURE__ */ jsxs("a", {
										href: "/assessment",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-primary animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "Take Assessment" })]
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
										href: "/universities",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Explore Universities" })]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/scholarships",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Explore Scholarships" })]
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
var DownloadButton = ({ resourceId }) => {
	const [downloading, setDownloading] = useState(false);
	const handleDownload = async (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (downloading) return;
		setDownloading(true);
		try {
			const userId = getVisitorId();
			const data = await (await fetch("/api/resources/download", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId,
					resourceId
				})
			})).json();
			if (data.downloadUrl) {
				const a = document.createElement("a");
				a.href = data.downloadUrl;
				a.target = "_blank";
				a.rel = "noopener noreferrer";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} else {
				const btn = e.currentTarget;
				btn.classList.add("text-rose-500");
				setTimeout(() => btn.classList.remove("text-rose-500"), 2e3);
			}
		} catch {
			const btn = e.currentTarget;
			btn.classList.add("text-rose-500");
			setTimeout(() => btn.classList.remove("text-rose-500"), 2e3);
		} finally {
			setDownloading(false);
		}
	};
	return /* @__PURE__ */ jsx("button", {
		onClick: handleDownload,
		disabled: downloading,
		className: "p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary transition-all disabled:opacity-50",
		title: "Download",
		children: /* @__PURE__ */ jsx(Download, { className: `w-3.5 h-3.5 ${downloading ? "animate-pulse" : ""}` })
	});
};
//#endregion
//#region src/pages/resources.astro
var resources_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Resources,
	file: () => $$file,
	url: () => $$url
});
var $$Resources = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Resource Hub | AtlasPath — Comprehensive Study Abroad Knowledge Center",
		"description": "Access expert guides, visa process requirements, blocked accounts, SOP/LOR templates, cost calculators, and study abroad timeline planners in one place."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "ResourcesHub", ResourcesHub, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/ResourcesHub",
		"client:component-export": "ResourcesHub"
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/resources.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/resources.astro";
var $$url = "/resources";
//#endregion
//#region \0virtual:astro:page:src/pages/resources@_@astro
var page = () => resources_exports;
//#endregion
export { page };
