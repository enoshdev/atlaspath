import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building, Calendar, Check, CheckCircle, ChevronDown, Clock, Compass, DollarSign, Globe, Lock, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/AssessmentPlatform.tsx
var QUALIFICATIONS = [
	{
		value: "bachelors",
		label: "Bachelors Degree",
		desc: "Currently studying or graduated with an undergrad degree"
	},
	{
		value: "masters",
		label: "Masters Degree",
		desc: "Postgraduate or research-level profiles"
	},
	{
		value: "highschool",
		label: "High School / 12th Grade",
		desc: "Completed school and seeking undergrad entry"
	},
	{
		value: "diploma",
		label: "Diploma / Other",
		desc: "Vocational or customized academic backgrounds"
	}
];
var COURSES = [
	{
		value: "cs",
		label: "Computer Science",
		desc: "Software engineering, algorithms, architectures"
	},
	{
		value: "ai",
		label: "Artificial Intelligence & ML",
		desc: "Deep learning, neural nets, data analytics"
	},
	{
		value: "mba",
		label: "Business & MBA",
		desc: "Finance, leadership, corporate strategy"
	},
	{
		value: "ds",
		label: "Data Science & BI",
		desc: "Statistical models, pipeline analytics"
	},
	{
		value: "me",
		label: "Mechanical Engineering",
		desc: "Thermodynamics, CAD designing, material sciences"
	},
	{
		value: "bio",
		label: "Medicine & Health",
		desc: "Biomedical, pharmacy, healthcare structures"
	}
];
var BUDGETS = [
	{
		value: "low",
		label: "Under ₹10 Lakhs",
		desc: "Focus on public universities with low or zero tuition fees"
	},
	{
		value: "mid",
		label: "₹10–20 Lakhs",
		desc: "Moderate tuition fees or study destinations with moderate living costs"
	},
	{
		value: "high",
		label: "₹20–30 Lakhs",
		desc: "Public or private universities in major destinations"
	},
	{
		value: "premium",
		label: "₹30 Lakhs+",
		desc: "Private institutions or premium global universities"
	}
];
var COUNTRIES = [
	{
		value: "germany",
		label: "Germany",
		flag: "🇩🇪",
		desc: "Tuition-free public track, high engineering scope"
	},
	{
		value: "canada",
		label: "Canada",
		flag: "🇨🇦",
		desc: "Favorable PGWP, direct permanent residency pathways"
	},
	{
		value: "australia",
		label: "Australia",
		flag: "🇦🇺",
		desc: "Warm climate, 2-4 years post-study rights"
	},
	{
		value: "uk",
		label: "United Kingdom",
		flag: "🇬🇧",
		desc: "1-year fast master degrees, high graduate market"
	},
	{
		value: "usa",
		label: "United States",
		flag: "🇺🇸",
		desc: "Silicon valley tech hubs, premium university rankings"
	},
	{
		value: "ireland",
		label: "Ireland",
		flag: "🇮🇪",
		desc: "European tech HQ, student-friendly English core"
	}
];
var ENGLISH_TESTS = [
	{
		value: "ielts",
		label: "IELTS Academic",
		desc: "Standardized global English benchmark"
	},
	{
		value: "toeft",
		label: "TOEFL iBT",
		desc: "Internet-based English capability review"
	},
	{
		value: "pte",
		label: "PTE Academic",
		desc: "Computerized academic test"
	},
	{
		value: "not_taken",
		label: "Not Taken Yet",
		desc: "Planning to write or seeking English waivers"
	}
];
var UNIVERSITIES = [
	{
		name: "Technical University of Munich",
		qsRank: 28,
		matchScore: 95,
		programs: 150,
		avgTuition: "€0 - €3,000 / yr",
		shortName: "TUM",
		image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "RWTH Aachen University",
		qsRank: 99,
		matchScore: 92,
		programs: 130,
		avgTuition: "€0 - €1,500 / yr",
		shortName: "RWTH",
		image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "Karlsruhe Institute of Technology",
		qsRank: 107,
		matchScore: 91,
		programs: 120,
		avgTuition: "€0 - €1,500 / yr",
		shortName: "KIT",
		image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "Heidelberg University",
		qsRank: 87,
		matchScore: 90,
		programs: 180,
		avgTuition: "€1,000 - €3,000 / yr",
		shortName: "HD",
		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80"
	}
];
var SCHOLARSHIPS = [
	{
		name: "DAAD Scholarship",
		funding: "Up to €12,000 / year",
		status: "Highly Matched",
		country: "Germany"
	},
	{
		name: "Deutschlandstipendium",
		funding: "€300 / month stipend",
		status: "Highly Matched",
		country: "Germany"
	},
	{
		name: "Erasmus+ Scholarship",
		funding: "Up to €12,000 total",
		status: "Matched",
		country: "Europe"
	},
	{
		name: "Heinrich Böll Foundation",
		funding: "Up to €850 / month stipend",
		status: "Matched",
		country: "Germany"
	}
];
var FAQS = [
	{
		q: "How accurate is the AtlasPath assessment?",
		a: "Our matching engine yields a 95% success rate. The recommendations are generated by analyzing historical admission thresholds, visa guidelines, blocked account criteria, and real-time scholarship deadlines across 500+ global partner universities."
	},
	{
		q: "Will my assessment data be kept confidential?",
		a: "Yes. All data entered during the assessment is encrypted and securely processed in compliance with data privacy regulations. We never sell your personal profile data."
	},
	{
		q: "What if I haven't taken the IELTS or TOEFL exam yet?",
		a: "No problem! You can select \"Not Taken Yet\" in the English test step. Our engine will estimate your options using academic backgrounds (such as Medium of Instruction certificates) or direct pathways that accept waiver policies."
	},
	{
		q: "Is the assessment platform completely free to use?",
		a: "Yes! The multi-step assessment, live dashboard matching calculations, and core results display are 100% free to help students plan their roadmap."
	},
	{
		q: "Can I retake the assessment if my grades or budget change?",
		a: "Yes, you can retake the assessment as many times as you like. Toggling different options in the form recalculates your country and university matches instantly."
	},
	{
		q: "Can I speak to an expert after completing the assessment?",
		a: "Absolutely. On the results dashboard, you can click \"Book Consultation\" to speak with a study abroad advisor who can review your profile, verify requirements, and guide your application."
	},
	{
		q: "How long does the assessment take to complete?",
		a: "The assessment takes only 3 to 5 minutes. Answering all questions thoroughly helps our AI engine calculate the most precise matching scores."
	},
	{
		q: "Do I need to create an account to view my results?",
		a: "No, you can complete the questions and view your live matching overview instantly. To download the comprehensive PDF report detailing specific university guidelines, we require entering a valid email address."
	},
	{
		q: "Will the results suggest fully funded scholarships?",
		a: "Yes! Based on your academic record (CGPA), target country, and preferred course, our system displays matching scholarships (e.g. DAAD, Chevening, Fulbright) alongside their funding amounts."
	},
	{
		q: "Can the assessment predict my visa success rate?",
		a: "While we cannot guarantee approvals, our \"Visa Readiness\" score evaluates parameters like your blocked account coverage, target country success history, and test compliance to estimate your preparation rating."
	},
	{
		q: "What happens if my CGPA is below the requirement?",
		a: "If your CGPA is lower (e.g. below 7.0/10), our system will suggest study destinations or private universities that have flexible thresholds, rather than highly competitive public ones."
	},
	{
		q: "Does the calculator include living expenses?",
		a: "Yes, the budget matching logic factors in both university tuition fees and estimated local monthly living costs (housing, transport, utilities) to suggest suitable pathways."
	},
	{
		q: "Are research-based degrees like PhDs covered in this assessment?",
		a: "Yes, selecting \"Masters Degree\" or \"PhD/Research\" in the qualifications step activates specific PhD matching parameters, prioritizing institutions with research stipends."
	},
	{
		q: "Does the system suggest programs taught in English?",
		a: "Yes. The default parameters assume international tracks taught in English. If you have German language skills (A1-B2), you can configure those to unlock even more public university options."
	},
	{
		q: "How often are university rankings and tuition fees updated?",
		a: "Our databases are updated monthly. The tuition bands, QS world rankings, and scholarship deadlines are reviewed regularly to align with active 2026/2027 guidelines."
	}
];
var AssessmentPlatform = () => {
	const [activeStep, setActiveStep] = useState(1);
	const [qualification, setQualification] = useState("bachelors");
	const [fieldOfStudy, setFieldOfStudy] = useState("cs");
	const [cgpa, setCgpa] = useState("8.5");
	const [gradYear, setGradYear] = useState("2026");
	const [budget, setBudget] = useState("low");
	const [selectedCountries, setSelectedCountries] = useState(["germany"]);
	const [englishTest, setEnglishTest] = useState("ielts");
	const [emailInput, setEmailInput] = useState("");
	const [isUnlocked, setIsUnlocked] = useState(false);
	const formProgress = useMemo(() => {
		return Math.round((activeStep - 1) / 5 * 100);
	}, [activeStep]);
	const liveScores = useMemo(() => {
		const baseCgpa = parseFloat(cgpa) || 7;
		const universityMatch = Math.min(60 + Math.round(baseCgpa * 4), 98);
		const countryMatch = selectedCountries.length > 0 ? 80 + selectedCountries.length * 3 : 75;
		const scholarshipMatch = baseCgpa >= 8.5 ? 88 : baseCgpa >= 7.5 ? 65 : 40;
		const visaReadiness = englishTest !== "not_taken" ? 92 : 68;
		const careerPotential = fieldOfStudy === "cs" || fieldOfStudy === "ai" ? 95 : 85;
		return {
			overallScore: Math.round((universityMatch + countryMatch + scholarshipMatch + visaReadiness + careerPotential) / 5),
			universityMatch,
			countryMatch: Math.min(countryMatch, 99),
			scholarshipMatch,
			visaReadiness,
			careerPotential
		};
	}, [
		cgpa,
		selectedCountries,
		englishTest,
		fieldOfStudy
	]);
	const handleCountryToggle = (code) => {
		setSelectedCountries((prev) => {
			if (prev.includes(code)) return prev.filter((x) => x !== code);
			return [...prev, code];
		});
	};
	const handleNextStep = () => {
		if (activeStep < 5) setActiveStep((prev) => prev + 1);
		else {
			setIsUnlocked(true);
			setActiveStep(6);
		}
	};
	const handleBackStep = () => {
		if (activeStep > 1) setActiveStep((prev) => prev - 1);
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
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "assess-grid",
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
								fill: "url(#assess-grid)"
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
									children: "AI Assessment"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-8",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 flex flex-col justify-center",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 self-start mb-4 bg-primary/8 border border-primary/12 rounded-full px-3 py-1 text-[10px] font-bold text-primary",
											children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }), "AI-POWERED MATCHING"]
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
												"Discover Your Perfect",
												/* @__PURE__ */ jsx("br", {}),
												/* @__PURE__ */ jsx("span", {
													className: "font-serif italic font-normal text-primary",
													children: "Study Abroad Path"
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
											children: "Answer a few questions and receive personalized country, university and scholarship recommendations tailored just for you."
										}),
										/* @__PURE__ */ jsx(motion.div, {
											initial: { opacity: 0 },
											animate: { opacity: 1 },
											transition: { delay: .2 },
											className: "grid grid-cols-3 gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-md",
											children: [
												{
													value: "95%",
													label: "Success Rate"
												},
												{
													value: "15,000+",
													label: "Students Guided"
												},
												{
													value: "500+",
													label: "UniversitiesMatched"
												}
											].map(({ value, label }) => /* @__PURE__ */ jsxs("div", {
												className: "text-center",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-lg font-black text-primary leading-none block",
													children: value
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[9px] text-[#64748B] font-bold mt-1 block leading-snug",
													children: label
												})]
											}, label))
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "w-full lg:w-[350px] shrink-0 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden",
									children: [/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between mb-4 border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Assessment Preview"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-primary bg-primary/6 px-2 py-0.5 rounded",
												children: "60% Done"
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs font-bold text-[#0F172A] mb-3",
											children: "What is your preferred field of study?"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "grid grid-cols-2 gap-2",
											children: [
												"Computer Science",
												"Business & MBA",
												"Data Science",
												"Engineering"
											].map((opt) => /* @__PURE__ */ jsx("div", {
												className: `p-3 rounded-xl border text-center text-[10px] font-bold transition-all cursor-pointer ${opt === "Computer Science" ? "border-primary bg-primary/6 text-primary" : "border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100/60"}`,
												children: opt
											}, opt))
										})
									] }), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mt-5 pt-3 border-t border-slate-50",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[9px] font-bold text-slate-400 uppercase",
											children: "Step 2 of 5"
										}), /* @__PURE__ */ jsxs("a", {
											href: "/assessment",
											className: "text-[10px] font-bold text-primary flex items-center gap-0.5 hover:translate-x-0.5 transition-transform",
											children: ["Start Form ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "w-full lg:w-[260px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-4",
										children: "Live Matches"
									}), /* @__PURE__ */ jsx("div", {
										className: "space-y-3",
										children: [
											{
												country: "Germany",
												match: "92% Match",
												flag: "🇩🇪"
											},
											{
												country: "Canada",
												match: "88% Match",
												flag: "🇨🇦"
											},
											{
												country: "Australia",
												match: "83% Match",
												flag: "🇦🇺"
											},
											{
												country: "United Kingdom",
												match: "78% Match",
												flag: "🇬🇧"
											}
										].map((c) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-xs pb-1.5 border-b border-slate-200/50 last:border-0 last:pb-0",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "text-slate-800 font-extrabold flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx("span", { children: c.flag }), c.country]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-emerald-600 font-bold",
												children: c.match
											})]
										}, c.country))
									})] }), /* @__PURE__ */ jsxs("a", {
										href: "/assessment",
										className: "text-[10px] font-black text-primary hover:text-secondary mt-5 flex items-center gap-0.5",
										children: ["See Full Results ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "assessment-start",
				className: "py-14 bg-slate-50 border-t border-b border-slate-100 scroll-mt-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-full lg:w-[240px] shrink-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm sticky top-24",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "mb-5 pb-3 border-b border-slate-100",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-xs font-black text-slate-800 uppercase tracking-widest leading-none",
											children: "Assessment Journey"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[9px] text-[#64748B] font-bold mt-1.5 block",
											children: "Takes only 3-5 minutes"
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "space-y-4",
										children: [
											{
												id: 1,
												label: "Academic Background",
												desc: "Tell us about your education"
											},
											{
												id: 2,
												label: "Preferred Course",
												desc: "Choose your field of study"
											},
											{
												id: 3,
												label: "Budget Range",
												desc: "Select your budget range"
											},
											{
												id: 4,
												label: "Preferred Countries",
												desc: "Select your dream countries"
											},
											{
												id: 5,
												label: "English Proficiency",
												desc: "Your English test status"
											},
											{
												id: 6,
												label: "Additional Info",
												desc: "A few more details"
											}
										].map((step) => {
											const active = activeStep === step.id;
											const done = activeStep > step.id;
											return /* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${active ? "bg-primary text-white" : done ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`,
													children: done ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }) : step.id
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
													className: `text-[11px] font-bold leading-none ${active ? "text-primary" : done ? "text-slate-800" : "text-slate-400"}`,
													children: step.label
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[9px] text-slate-400 font-semibold mt-1 block leading-snug",
													children: step.desc
												})] })]
											}, step.id);
										})
									})]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-[400px]",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mb-6 pb-3.5 border-b border-slate-50",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-xs font-bold text-primary",
											children: [
												"Step ",
												activeStep,
												" of 6"
											]
										}), /* @__PURE__ */ jsx("div", {
											className: "w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden",
											children: /* @__PURE__ */ jsx("div", {
												className: "h-full bg-primary transition-all duration-300",
												style: { width: `${formProgress}%` }
											})
										})]
									}),
									activeStep === 1 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-sm font-black text-slate-800 tracking-tight",
											children: "Academic Background"
										}), /* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
											children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
													children: "Current Qualification"
												}), /* @__PURE__ */ jsx("select", {
													value: qualification,
													onChange: (e) => setQualification(e.target.value),
													className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-0",
													children: QUALIFICATIONS.map((opt) => /* @__PURE__ */ jsx("option", {
														value: opt.value,
														children: opt.label
													}, opt.value))
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
													children: "Field of Study"
												}), /* @__PURE__ */ jsx("select", {
													value: fieldOfStudy,
													onChange: (e) => setFieldOfStudy(e.target.value),
													className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-0",
													children: COURSES.map((opt) => /* @__PURE__ */ jsx("option", {
														value: opt.value,
														children: opt.label
													}, opt.value))
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [
													/* @__PURE__ */ jsx("label", {
														className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
														children: "CGPA / Percentage"
													}),
													/* @__PURE__ */ jsx("input", {
														type: "text",
														value: cgpa,
														onChange: (e) => setCgpa(e.target.value),
														placeholder: "e.g. 8.5",
														className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-[9px] text-slate-400 mt-1 block",
														children: "Specify out of 10.0 scale or percentage"
													})
												] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
													children: "Graduation Year"
												}), /* @__PURE__ */ jsx("input", {
													type: "text",
													value: gradYear,
													onChange: (e) => setGradYear(e.target.value),
													placeholder: "e.g. 2026",
													className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
												})] })
											]
										})]
									}),
									activeStep === 2 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-black text-slate-800 tracking-tight",
												children: "Preferred Course"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-500 font-semibold mb-4",
												children: "Select the discipline you plan to pursue abroad"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
												children: COURSES.map((opt) => /* @__PURE__ */ jsxs("div", {
													onClick: () => setFieldOfStudy(opt.value),
													className: `p-4 rounded-2xl border cursor-pointer transition-all ${fieldOfStudy === opt.value ? "border-primary bg-primary/6 text-primary" : "border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600"}`,
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-xs font-bold",
														children: opt.label
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-slate-400 font-semibold mt-1",
														children: opt.desc
													})]
												}, opt.value))
											})
										]
									}),
									activeStep === 3 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-black text-slate-800 tracking-tight",
												children: "Budget Capacity"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-500 font-semibold mb-4",
												children: "Estimate your total tuition & living budget per year"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
												children: BUDGETS.map((opt) => /* @__PURE__ */ jsxs("div", {
													onClick: () => setBudget(opt.value),
													className: `p-4 rounded-2xl border cursor-pointer transition-all ${budget === opt.value ? "border-primary bg-primary/6 text-primary" : "border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600"}`,
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-xs font-bold",
														children: opt.label
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-slate-400 font-semibold mt-1",
														children: opt.desc
													})]
												}, opt.value))
											})
										]
									}),
									activeStep === 4 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-black text-slate-800 tracking-tight",
												children: "Dream Countries"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-500 font-semibold mb-4",
												children: "Select all target study destinations you wish to analyze"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
												children: COUNTRIES.map((opt) => /* @__PURE__ */ jsxs("div", {
													onClick: () => handleCountryToggle(opt.value),
													className: `p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${selectedCountries.includes(opt.value) ? "border-primary bg-primary/6 text-primary" : "border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600"}`,
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3",
														children: [/* @__PURE__ */ jsx("span", {
															className: "text-2xl",
															children: opt.flag
														}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
															className: "text-xs font-bold",
															children: opt.label
														}), /* @__PURE__ */ jsx("p", {
															className: "text-[10px] text-slate-400 font-semibold mt-0.5",
															children: opt.desc
														})] })]
													}), /* @__PURE__ */ jsx("div", {
														className: `w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${selectedCountries.includes(opt.value) ? "bg-primary border-primary text-white" : "border-slate-200 bg-white"}`,
														children: selectedCountries.includes(opt.value) && /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" })
													})]
												}, opt.value))
											})
										]
									}),
									activeStep === 5 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-black text-slate-800 tracking-tight",
												children: "English Proficiency Test"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-500 font-semibold mb-4",
												children: "Let us know if you have written or planned language benchmarks"
											}),
											/* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
												children: ENGLISH_TESTS.map((opt) => /* @__PURE__ */ jsxs("div", {
													onClick: () => setEnglishTest(opt.value),
													className: `p-4 rounded-2xl border cursor-pointer transition-all ${englishTest === opt.value ? "border-primary bg-primary/6 text-primary" : "border-slate-100 bg-slate-50 hover:bg-slate-100/50 text-slate-600"}`,
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-xs font-bold",
														children: opt.label
													}), /* @__PURE__ */ jsx("p", {
														className: "text-[10px] text-slate-400 font-semibold mt-1",
														children: opt.desc
													})]
												}, opt.value))
											})
										]
									}),
									activeStep === 6 && /* @__PURE__ */ jsxs(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "text-sm font-black text-slate-800 tracking-tight",
												children: "Additional Details"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-xs text-slate-500 font-semibold mb-4",
												children: "A few final indicators to generate your study reports"
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
												children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
													children: "Work Experience Years"
												}), /* @__PURE__ */ jsxs("select", {
													className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none",
													children: [
														/* @__PURE__ */ jsx("option", { children: "None (Fresher)" }),
														/* @__PURE__ */ jsx("option", { children: "1–2 Years" }),
														/* @__PURE__ */ jsx("option", { children: "3+ Years" })
													]
												})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5",
													children: "Standardized Entrance (GRE/GMAT)"
												}), /* @__PURE__ */ jsxs("select", {
													className: "w-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none",
													children: [
														/* @__PURE__ */ jsx("option", { children: "Not Taken / Not Required" }),
														/* @__PURE__ */ jsx("option", { children: "Planning to take" }),
														/* @__PURE__ */ jsx("option", { children: "Score available" })
													]
												})] })]
											})
										]
									})
								] }), /* @__PURE__ */ jsxs("div", {
									className: "mt-8 pt-4 border-t border-slate-50 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("button", {
										onClick: handleBackStep,
										disabled: activeStep === 1,
										className: `px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors ${activeStep === 1 ? "border-slate-100 text-slate-300 cursor-not-allowed" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`,
										children: "Back"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-[10px] text-slate-400 font-bold flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5 text-emerald-500" }), " Answers secure"]
										}), /* @__PURE__ */ jsx("button", {
											onClick: handleNextStep,
											className: "px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
											children: activeStep === 6 ? "View Matching Dashboard" : "Continue"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "w-full lg:w-[280px] shrink-0",
								children: /* @__PURE__ */ jsx("div", {
									className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm sticky top-24 flex flex-col justify-between",
									children: /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-1.5",
											children: "Live Score Card"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-400 font-semibold mb-6",
											children: "Updates dynamically as you supply credentials"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative w-32 h-32 mx-auto mb-6 flex items-center justify-center",
											children: [/* @__PURE__ */ jsxs("svg", {
												className: "w-full h-full rotate-[-90deg]",
												children: [/* @__PURE__ */ jsx("circle", {
													cx: "64",
													cy: "64",
													r: "54",
													className: "stroke-slate-100 fill-none",
													strokeWidth: "8"
												}), /* @__PURE__ */ jsx("circle", {
													cx: "64",
													cy: "64",
													r: "54",
													className: "stroke-primary fill-none transition-all duration-500",
													strokeWidth: "8",
													strokeDasharray: 339.29,
													strokeDashoffset: 339.29 - 339.29 * liveScores.overallScore / 100
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "absolute text-center",
												children: [/* @__PURE__ */ jsxs("span", {
													className: "text-[25px] font-black text-slate-800 block leading-none",
													children: [liveScores.overallScore, "%"]
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[9px] font-bold text-emerald-500 uppercase tracking-wider mt-1 block",
													children: "Match Rating"
												})]
											})]
										}),
										/* @__PURE__ */ jsx("div", {
											className: "space-y-3.5",
											children: [
												{
													label: "Country Match",
													val: liveScores.countryMatch
												},
												{
													label: "University Match",
													val: liveScores.universityMatch
												},
												{
													label: "Scholarship Match",
													val: liveScores.scholarshipMatch
												},
												{
													label: "Visa Readiness",
													val: liveScores.visaReadiness
												},
												{
													label: "Career Potential",
													val: liveScores.careerPotential
												}
											].map((row) => /* @__PURE__ */ jsxs("div", {
												className: "text-xs font-semibold",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-slate-600 mb-1",
													children: [/* @__PURE__ */ jsx("span", { children: row.label }), /* @__PURE__ */ jsxs("span", {
														className: "text-[#0F172A] font-extrabold",
														children: [row.val, "%"]
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: "w-full h-1 bg-slate-100 rounded-full overflow-hidden",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full bg-emerald-500 transition-all duration-300",
														style: { width: `${row.val}%` }
													})
												})]
											}, row.label))
										})
									] })
								})
							})
						]
					})
				})
			}),
			isUnlocked && /* @__PURE__ */ jsxs(motion.section, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-8 pb-4 border-b border-slate-100",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "px-2.5 py-1 rounded-full bg-primary/8 text-[9px] font-bold text-primary uppercase tracking-wider",
							children: "Evaluation Portal"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-2.5",
							children: "Your Match Analytics Engine"
						})] }), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold text-slate-400",
							children: "Analysis completed 2026/2027"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-8 mb-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest",
										children: "Recommended Study Hub"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 mt-2 mb-4",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-3xl",
												children: "🇩🇪"
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-lg font-black text-[#0F172A]",
												children: "Germany"
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2",
												children: "92% Match"
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2 text-xs font-semibold text-slate-600",
										children: [
											/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-500 shrink-0" }), " Low tuition fees at public universities"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-500 shrink-0" }), " 18-month post-study work visa grant"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-500 shrink-0" }), " Strong industrial core (Automotive, AI)"]
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-500 shrink-0" }), " High visa success rates (94%+ for Germany)"]
											})
										]
									})
								] }), /* @__PURE__ */ jsx("a", {
									href: "/countries/germany",
									className: "mt-6 w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
									children: "Explore Germany"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-xs font-black text-slate-800 uppercase tracking-widest text-slate-400",
									children: "Why Germany fits?"
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-4",
									children: [
										{
											label: "Avg Tuition Fees",
											val: "€0 - €3,000 / year"
										},
										{
											label: "Living Costs",
											val: "€10,200 - €12,000 / year"
										},
										{
											label: "Visa Success Rate",
											val: "94%"
										},
										{
											label: "Post Study Work Rights",
											val: "18 Months"
										}
									].map((stat) => /* @__PURE__ */ jsxs("div", {
										className: "bg-white border border-slate-100 rounded-2xl p-4 shadow-sm text-center",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-slate-400 uppercase block tracking-wider leading-none",
											children: stat.label
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-black text-slate-800 mt-2 block leading-none",
											children: stat.val
										})]
									}, stat.label))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "w-full lg:w-[280px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-xs font-black text-slate-800 uppercase tracking-widest text-slate-400 mb-4",
									children: "Other Matches"
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3.5 text-xs font-semibold",
									children: [
										{
											flag: "🇨🇦",
											country: "Canada",
											match: "88% Match"
										},
										{
											flag: "🇦🇺",
											country: "Australia",
											match: "83% Match"
										},
										{
											flag: "🇬🇧",
											country: "United Kingdom",
											match: "78% Match"
										},
										{
											flag: "🇮🇪",
											country: "Ireland",
											match: "72% Match"
										}
									].map((item, idx) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between pb-2 border-b border-slate-200 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-slate-800 font-extrabold flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", { children: item.flag }), item.country]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-emerald-600 font-bold",
											children: item.match
										})]
									}, idx))
								})] }), /* @__PURE__ */ jsx("a", {
									href: "/countries",
									className: "text-xs font-bold text-primary hover:text-secondary text-center block mt-4",
									children: "View All Countries →"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "w-full lg:w-[300px] shrink-0 bg-primary/6 border border-primary/10 rounded-3xl p-6 flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-primary tracking-tight mb-3",
									children: "Unlock Full Report"
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2 text-[11px] text-slate-600 font-semibold mb-6",
									children: [
										/* @__PURE__ */ jsxs("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-primary shrink-0" }), " Detailed university matches"]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-primary shrink-0" }), " Tailored scholarship advice"]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-primary shrink-0" }), " Monthly expense budgets"]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-primary shrink-0" }), " Visa process timelines"]
										})
									]
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
									type: "email",
									value: emailInput,
									onChange: (e) => setEmailInput(e.target.value),
									placeholder: "Enter your email",
									className: "w-full text-xs font-bold text-[#0f172a] placeholder:text-slate-400 bg-white border border-slate-200 rounded-xl p-3 mb-2.5 focus:outline-none focus:border-[#6D4AFF] focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] transition-all duration-200"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => alert(`Full report sent to: ${emailInput}`),
									className: "w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
									children: "Unlock Report Brochure"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-3xl p-5",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-4",
								children: "University Placement Opportunities"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: UNIVERSITIES.map((uni, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2.5 mb-2.5",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-7 h-7 rounded-lg bg-primary/10 text-primary font-black text-[10px] flex items-center justify-center shrink-0",
											children: uni.shortName
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-[11px] font-bold text-slate-800 leading-none",
											children: uni.name
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-[9px] text-slate-400 font-semibold mt-1 block",
											children: ["QS Global Rank: #", uni.qsRank]
										})] })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold py-2 bg-slate-50/70 rounded-xl px-2.5 mb-3 border border-slate-100/50",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Match Score" }), /* @__PURE__ */ jsxs("span", {
											className: "font-extrabold text-emerald-600 block mt-0.5",
											children: [uni.matchScore, "%"]
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", { children: "Avg Tuition" }), /* @__PURE__ */ jsx("span", {
											className: "font-extrabold text-slate-700 block mt-0.5",
											children: uni.avgTuition.split(" ")[0]
										})] })]
									})] }), /* @__PURE__ */ jsx("a", {
										href: "/universities",
										className: "text-[10px] font-bold text-primary hover:text-secondary text-center block pt-2 border-t border-slate-50",
										children: "View Details →"
									})]
								}, idx))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-4",
								children: "Scholarship Opportunities"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3.5",
								children: SCHOLARSHIPS.map((schol, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-bold text-slate-800 leading-none",
										children: schol.name
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[9px] text-slate-400 font-semibold mt-1",
										children: ["Country Target: ", schol.country]
									})] }), /* @__PURE__ */ jsxs("div", {
										className: "text-right",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[9px] font-bold text-slate-400 block",
											children: schol.funding
										}), /* @__PURE__ */ jsx("span", {
											className: "inline-block text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1",
											children: schol.status
										})]
									})]
								}, idx))
							})] }), /* @__PURE__ */ jsx("a", {
								href: "/scholarships",
								className: "text-xs font-bold text-primary hover:text-secondary text-center mt-5",
								children: "Explore All Scholarships →"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-10 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-6 gap-6 text-center",
						children: [
							{
								value: "15,000+",
								label: "Students Guided",
								icon: Users
							},
							{
								value: "500+",
								label: "University Partners",
								icon: Building
							},
							{
								value: "95%",
								label: "Visa Success Rate",
								icon: CheckCircle
							},
							{
								value: "₹500Cr+",
								label: "Scholarships Secured",
								icon: DollarSign
							},
							{
								value: "50+",
								label: "Countries Covered",
								icon: Globe
							},
							{
								value: "4.9/5",
								label: "Student Satisfaction",
								icon: Star
							}
						].map(({ value, label, icon: Icon }, idx) => /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-1.5",
							children: [
								/* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary mb-0.5" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-lg font-black text-slate-800 leading-none",
									children: value
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-snug",
									children: label
								})
							]
						}, idx))
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-5",
								children: "Your Study Abroad Roadmap"
							}), /* @__PURE__ */ jsx("div", {
								className: "relative border-l border-slate-100 ml-2 pl-4 space-y-4 text-xs font-semibold text-slate-600",
								children: [
									{
										title: "Shortlist Universities",
										desc: "Identify target courses matching grade criteria"
									},
									{
										title: "Prepare & Apply",
										desc: "Write SOP, solicit academic references, submit dossier"
									},
									{
										title: "Secure Scholarships",
										desc: "Submit funding portfolios (like DAAD or university grants)"
									},
									{
										title: "Visa Preparation",
										desc: "Complete block account deposits, schedule interview slots"
									},
									{
										title: "Pre-Departure checks",
										desc: "Purchase air tickets, arrange student hostels"
									},
									{
										title: "Arrive & Thrive",
										desc: "Land in your destination and begin your classes"
									}
								].map((step, idx) => /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute -left-[22px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-white" }),
										/* @__PURE__ */ jsx("h4", {
											className: "text-[11px] font-bold text-slate-800 leading-none",
											children: step.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-400 font-semibold mt-1 leading-snug",
											children: step.desc
										})
									]
								}, idx))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-5",
								children: "Student Success Stories"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: [
									{
										name: "Arjun Patel",
										schol: "DAAD Scholar",
										text: "AtlasPath structured my admission documents and blocked account deposits. Today I'm studying engineering in Munich!",
										initials: "AP",
										color: "bg-[#6D4AFF]"
									},
									{
										name: "Sneha Kapoor",
										schol: "Vanier Scholar",
										text: "The mock interview guidance and profile evaluation helped me secure Canada's premier research grant.",
										initials: "SK",
										color: "bg-emerald-600"
									},
									{
										name: "Rohan Mehta",
										schol: "Chevening Scholar",
										text: "Highly structural guidance. My mentor helped refine my essays, which was critical for the UK interview success.",
										initials: "RM",
										color: "bg-amber-600"
									}
								].map((s, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-100 rounded-xl p-3.5 shadow-sm",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2.5 mb-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: `w-7 h-7 rounded-full ${s.color} text-white font-extrabold text-[10px] flex items-center justify-center shrink-0`,
											children: s.initials
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-[10px] font-bold text-slate-800 leading-none",
											children: s.name
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[8px] text-slate-400 font-semibold mt-0.5 block",
											children: s.schol
										})] })]
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-[10px] italic text-slate-500 font-semibold leading-relaxed",
										children: [
											"“",
											s.text,
											"”"
										]
									})]
								}, idx))
							})] })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-5",
								children: "Why Take AtlasPath Assessment?"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4 text-xs font-semibold text-slate-600",
								children: [
									{
										title: "AI-Powered Matching",
										desc: "Advanced algorithms parse through thousands of university guidelines to identify high-conversion matches.",
										icon: Sparkles
									},
									{
										title: "Transparent & Accurate",
										desc: "No biased recommendations. All scores align strictly with actual CGPA, budget, and test criteria.",
										icon: ShieldCheck
									},
									{
										title: "Save Time & Money",
										desc: "Avoid expensive consultancy fees and application mistakes. Know your path before spending a rupee.",
										icon: Clock
									},
									{
										title: "End-to-End Guidance",
										desc: "From the initial shortlist to visa approvals and flight booking support, we are with you.",
										icon: Compass
									}
								].map((item, idx) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ jsx(item.icon, { className: "w-4.5 h-4.5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-[11px] font-bold text-slate-800 leading-none",
										children: item.title
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-400 font-semibold mt-1 leading-snug",
										children: item.desc
									})] })]
								}, idx))
							})] })
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Get precise answers about match calculations, requirements, and advisors"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3.5",
						children: FAQS.map((faq, idx) => /* @__PURE__ */ jsxs("div", {
							className: "border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300",
							children: [
								/* @__PURE__ */ jsxs("label", {
									htmlFor: `assess-faq-${idx}`,
									className: "w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/20 hover:bg-slate-50 select-none",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-bold text-slate-800 leading-snug",
										children: faq.q
									}), /* @__PURE__ */ jsx("span", {
										className: "text-slate-400 shrink-0",
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
									})]
								}),
								/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									id: `assess-faq-${idx}`,
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
							xmlns: "http://www.w3.org/2000/svg",
							children: [/* @__PURE__ */ jsx("pattern", {
								id: "assess-cta-grid",
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
								fill: "url(#assess-cta-grid)"
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
								children: "Get Evaluated"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight",
								children: [
									"Ready to Take the Next Step?",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
										children: "Complete Your Profile Evaluation"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty",
								children: "Answer a few quick questions, compare matched public options, estimate your budget requirements, and map your study roadmap."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "/universities",
									className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5",
									children: [/* @__PURE__ */ jsx(Building, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Explore Universities" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/919876543210",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
									children: [
										/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
										/* @__PURE__ */ jsx("span", { children: "Book Free Consultation" }),
										/* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
									]
								})]
							})
						]
					})
				]
			})
		]
	});
};
//#endregion
//#region src/pages/assessment.astro
var assessment_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Assessment,
	file: () => $$file,
	url: () => $$url
});
var $$Assessment = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "AI-Powered Assessment | AtlasPath — Find Your Perfect Study Abroad Path",
		"description": "Answer a few simple questions and receive personalized country, university, and scholarship matches instantly using our AI planning engine."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "AssessmentPlatform", AssessmentPlatform, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AssessmentPlatform",
		"client:component-export": "AssessmentPlatform"
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/assessment.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/assessment.astro";
var $$url = "/assessment";
//#endregion
//#region \0virtual:astro:page:src/pages/assessment@_@astro
var page = () => assessment_exports;
//#endregion
export { page };
