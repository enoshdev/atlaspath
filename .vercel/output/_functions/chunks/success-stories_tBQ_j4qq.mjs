import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Calendar, Camera, Check, ChevronDown, Clock, Globe, GraduationCap, Play, Search } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/SuccessStories.tsx
var STORIES = [
	{
		id: "arjun",
		name: "Arjun Patel",
		course: "MSc in Data Science",
		university: "Technical University of Munich",
		country: "Germany",
		flag: "🇩🇪",
		scholarship: "DAAD Scholarship",
		amount: "€12,000 / year",
		currentRole: "Data Scientist at BMW Group",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "AP",
		color: "bg-indigo-600",
		challenges: "Finding tuition-free English programs and understanding APS certificate timeline.",
		howHelped: "AtlasPath structured the document check, verified translation logs, and structured the DAAD essay.",
		outcome: "100% tuition-free admission at TUM and €1,200/mo living allowance.",
		image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "sneha",
		name: "Sneha Kapoor",
		course: "MSc in Computer Science",
		university: "University of Toronto",
		country: "Canada",
		flag: "🇨🇦",
		scholarship: "Vanier Canada Scholarship",
		amount: "CAD $50,000 / year",
		currentRole: "AI Research Intern at Vector Institute",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "SK",
		color: "bg-[#6D4AFF]",
		challenges: "Writing complex research proposals and soliciting academic letters of recommendation (LORs).",
		howHelped: "AtlasPath research mentors edited the scientific draft and organized mock LOR samples.",
		outcome: "Secured full PhD/Masters track funding and direct student visa approval.",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "rohan",
		name: "Rohan Mehta",
		course: "MEng in Mechanical Eng.",
		university: "University of Melbourne",
		country: "Australia",
		flag: "🇦🇺",
		scholarship: "Australia Awards",
		amount: "AUD $37,000 / year",
		currentRole: "Robotics Engineer at Cochlear",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "RM",
		color: "bg-emerald-600",
		challenges: "High living costs in Melbourne and structured requirements for Australia Awards applications.",
		howHelped: "Created itemized budget plan, mapped local housing groups, and verified visa checklists.",
		outcome: "Full tuition waiver and living stipend cover, visa stamped in 12 days.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "aisha",
		name: "Aisha Khan",
		course: "MSc in Public Health",
		university: "London School of Hygiene & Tropical Medicine",
		country: "United Kingdom",
		flag: "🇬🇧",
		scholarship: "Chevening Scholarship",
		amount: "£18,000 / year",
		currentRole: "Health Consultant at NHS England",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "AK",
		color: "bg-purple-600",
		challenges: "Drafting leadership-focused essays for the UK Foreign Office and handling strict reference timelines.",
		howHelped: "Personal mock interviews, Chevening alumni essay review cycles, and VFS slots booking assistance.",
		outcome: "Fully funded scholarship, air travel tickets covered, and LSHTM admission.",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "vikram",
		name: "Vikram Singh",
		course: "MS in Computer Science",
		university: "University of California, San Diego",
		country: "United States",
		flag: "🇺🇸",
		scholarship: "Fulbright Scholarship",
		amount: "USD $25,000 / year",
		currentRole: "Software Engineer at Google Cloud",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "VS",
		color: "bg-amber-600",
		challenges: "Extremely high tuition rates and preparing for the competitive Fulbright interview rounds.",
		howHelped: "Matched with US-based Fulbright alumni mentors and designed comprehensive academic portfolio sheets.",
		outcome: "Secured full funding package, visa stamped, and placed at UCSD.",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "meera",
		name: "Meera Nair",
		course: "MSc in AI & Robotics",
		university: "TU Delft",
		country: "Netherlands",
		flag: "🇳🇱",
		scholarship: "Erasmus+ Scholarship",
		amount: "€18,000 / year",
		currentRole: "AI Research Engineer at ASML",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "MN",
		color: "bg-rose-600",
		challenges: "Applying to multiple European universities and coordinating joint degree admissions.",
		howHelped: "Unified portal application tracking, essay edits, and translation checklist checks.",
		outcome: "Erasmus Joint Master Degree placement with full travel & monthly allowances.",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "priya",
		name: "Priya Sharma",
		course: "MSc in Data Science",
		university: "University of Edinburgh",
		country: "United Kingdom",
		flag: "🇬🇧",
		scholarship: "Commonwealth Scholarship",
		amount: "£15,000 / year",
		currentRole: "Data Analyst at Lloyds Banking Group",
		visaStatus: "Visa Approved",
		year: "2025 Intake",
		initials: "PS",
		color: "bg-indigo-600",
		challenges: "Applying with a low GPA and preparing a strong personal statement.",
		howHelped: "AtlasPath mentors focused on highlighting her practical work experience and coding achievements.",
		outcome: "Received admission with a full tuition scholarship.",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "karthik",
		name: "Karthik Reddy",
		course: "MS in Computer Science",
		university: "University of Waterloo",
		country: "Canada",
		flag: "🇨🇦",
		scholarship: "Waterloo Graduate Scholarship",
		amount: "CAD $10,000 / year",
		currentRole: "Software Engineer at Shopify",
		visaStatus: "Visa Approved",
		year: "2025 Intake",
		initials: "KR",
		color: "bg-emerald-600",
		challenges: "Understanding the supervisor search process for research masters.",
		howHelped: "Guided cold email drafts to Waterloo professors, matching research focus areas.",
		outcome: "Secured research supervisor acceptance and Waterloo entrance funding.",
		image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "neha_v",
		name: "Neha Verma",
		course: "MSc in AI & Robotics",
		university: "TU Munich",
		country: "Germany",
		flag: "🇩🇪",
		scholarship: "Heinrich Böll Scholarship",
		amount: "€850 / month",
		currentRole: "Research Scientist at BioNTech SE",
		visaStatus: "Visa Approved",
		year: "2025 Intake",
		initials: "NV",
		color: "bg-rose-600",
		challenges: "Social-political commitment requirements of German foundations.",
		howHelped: "AtlasPath helped structure her social projects and prepare for political foundation interviews.",
		outcome: "Secured full living stipend foundation scholarship.",
		image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "aditya",
		name: "Aditya Nair",
		course: "MBA",
		university: "NUS Business School",
		country: "Singapore",
		flag: "🇸🇬",
		scholarship: "NUS Dean's Fellowship",
		amount: "SGD $20,000 total",
		currentRole: "Associate at McKinsey & Company",
		visaStatus: "Visa Approved",
		year: "2025 Intake",
		initials: "AN",
		color: "bg-amber-600",
		challenges: "High GMAT benchmarks and Singapore MBA admission essays.",
		howHelped: "Conducted structural resume redesign and matched with post-MBA consulting mentors.",
		outcome: "Secured NUS admission with merit scholarship.",
		image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "sophia",
		name: "Sophia Loren",
		course: "MSc in Finance",
		university: "Erasmus University Rotterdam",
		country: "Netherlands",
		flag: "🇳🇱",
		scholarship: "Orange Tulip Scholarship",
		amount: "€15,000 / year",
		currentRole: "Risk Analyst at ING Bank",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "SL",
		color: "bg-indigo-600",
		challenges: "Strict application deadlines and GMAT requirements.",
		howHelped: "Coordinated early portal application and structured OTS scholarship essays.",
		outcome: "Admission at Rotterdam School of Management with OTS fee waiver.",
		image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=80"
	},
	{
		id: "daniels",
		name: "Daniel Smith",
		course: "MS in Biotechnology",
		university: "Heidelberg University",
		country: "Germany",
		flag: "🇩🇪",
		scholarship: "DAAD Scholarship",
		amount: "€1,200 / month",
		currentRole: "PhD Candidate at Max Planck Institute",
		visaStatus: "Visa Approved",
		year: "2026 Intake",
		initials: "DS",
		color: "bg-[#6D4AFF]",
		challenges: "Academics transcripts formatting and finding research labs.",
		howHelped: "Document compilation assistance, translation checks, and research plan design.",
		outcome: "Admission to Heidelberg with DAAD support.",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
	}
];
var SUCCESS_BY_DESTINATION = {
	germany: {
		desc: "Thousands of students have achieved their dreams in Germany with world-class education, scholarships and great career opportunities.",
		students: "3,450+",
		visaRate: "96%",
		funding: "€85M+",
		unis: 78,
		salary: "€58K",
		courses: [
			{
				label: "Computer Science",
				pct: 32
			},
			{
				label: "Mechanical Engineering",
				pct: 21
			},
			{
				label: "Data Science",
				pct: 18
			},
			{
				label: "Electrical Engineering",
				pct: 12
			},
			{
				label: "Other Programs",
				pct: 17
			}
		]
	},
	canada: {
		desc: "Canada offers excellent postgraduate work rights and direct PR pathways, making it a top choice for computer science and business graduates.",
		students: "2,850+",
		visaRate: "90%",
		funding: "CAD $42M+",
		unis: 64,
		salary: "CAD $68K",
		courses: [
			{
				label: "Computer Science",
				pct: 35
			},
			{
				label: "Business Administration",
				pct: 25
			},
			{
				label: "Data Science",
				pct: 15
			},
			{
				label: "Civil Engineering",
				pct: 10
			},
			{
				label: "Other Programs",
				pct: 15
			}
		]
	},
	australia: {
		desc: "With beautiful student-friendly cities and extensive post-study rights, Australia attracts researchers and medical professionals.",
		students: "2,200+",
		visaRate: "91%",
		funding: "AUD $30M+",
		unis: 45,
		salary: "AUD $72K",
		courses: [
			{
				label: "Information Technology",
				pct: 30
			},
			{
				label: "Nursing & Health Science",
				pct: 22
			},
			{
				label: "Business Analytics",
				pct: 18
			},
			{
				label: "Civil Engineering",
				pct: 15
			},
			{
				label: "Other Programs",
				pct: 15
			}
		]
	},
	uk: {
		desc: "One-year fast-track Master programs in the United Kingdom allow students to start working and earn ROI quickly.",
		students: "2,100+",
		visaRate: "93%",
		funding: "£28M+",
		unis: 90,
		salary: "£45K",
		courses: [
			{
				label: "Business Administration",
				pct: 30
			},
			{
				label: "Computer Science",
				pct: 28
			},
			{
				label: "Finance & Banking",
				pct: 18
			},
			{
				label: "Public Health",
				pct: 12
			},
			{
				label: "Other Programs",
				pct: 12
			}
		]
	},
	usa: {
		desc: "The United States remains the global hub for technology startups, financial centers, and top-tier QS ranked universities.",
		students: "1,890+",
		visaRate: "92%",
		funding: "USD $52M+",
		unis: 110,
		salary: "USD $82K",
		courses: [
			{
				label: "Computer Science",
				pct: 40
			},
			{
				label: "Data Science & BI",
				pct: 20
			},
			{
				label: "Business & Finance",
				pct: 15
			},
			{
				label: "Electrical Engineering",
				pct: 13
			},
			{
				label: "Other Programs",
				pct: 12
			}
		]
	}
};
var TIMELINES = [
	{
		student: "Arjun Patel",
		uni: "TUM",
		applied: "Dec '25",
		admitted: "Mar '26",
		visa: "May '26",
		departed: "Sep '26",
		status: "Departed"
	},
	{
		student: "Sneha Kapoor",
		uni: "UoT",
		applied: "Jan '26",
		admitted: "Apr '26",
		visa: "Jun '26",
		departed: "Sep '26",
		status: "Departed"
	},
	{
		student: "Rohan Mehta",
		uni: "Melbourne",
		applied: "Nov '25",
		admitted: "Feb '26",
		visa: "Apr '26",
		departed: "Jul '26",
		status: "Departed"
	},
	{
		student: "Aisha Khan",
		uni: "LSHTM",
		applied: "Dec '25",
		admitted: "Mar '26",
		visa: "May '26",
		departed: "Sep '26",
		status: "Departed"
	},
	{
		student: "Vikram Singh",
		uni: "UC San Diego",
		applied: "Jan '26",
		admitted: "Apr '26",
		visa: "Jun '26",
		departed: "Sep '26",
		status: "Departed"
	}
];
var FAQS = [
	{
		q: "How long does the university admission process take?",
		a: "On average, university admissions take 4 to 8 weeks after document submission. Government scholarships and APS verification might add 2 to 3 months of processing time, so applying early is crucial."
	},
	{
		q: "How are scholarships secured through AtlasPath?",
		a: "Our mentors match your academic profile, CGPA, and goals to active scholarships. We then guide you through essay drafting, personal statements (SOPs), soliciting reference letters, and scholarship interview preparation."
	},
	{
		q: "Can average students with a low CGPA get admissions or scholarships?",
		a: "Yes! While fully funded government scholarships are highly competitive, average students can secure admissions and partial tuition waivers by highlighting robust work experience, coding profiles, portfolios, and writing high-impact SOPs."
	},
	{
		q: "What CGPA is required to study in public German universities?",
		a: "German public universities are competitive, usually requiring a minimum CGPA of 7.5/10 (roughly 2.5 on the German scale). However, top universities like TUM or RWTH Aachen might require 8.5+ along with specific course credits."
	},
	{
		q: "How much does AtlasPath help throughout the process?",
		a: "AtlasPath offers end-to-end guidance: university selection, profile structuring, SOP and LOR reviews, blocked account setup, APS certificate processing, mock visa interviews, and pre-departure accommodation networking."
	},
	{
		q: "When should I start preparing my application?",
		a: "You should start preparing your profile 10 to 12 months before your planned intake. This gives you enough time to write tests (IELTS/TOEFL/GRE), request LORs, and apply before early scholarship deadlines close."
	},
	{
		q: "Can I get a student visa if I have a gap year?",
		a: "Yes. Educational or career gaps do not impact your visa success if explained correctly. Doing internships, certifications, or jobs during the gap strengthens your visa statement."
	},
	{
		q: "Do I need a block account for Canada or other countries?",
		a: "Canada requires the GIC (Guaranteed Investment Certificate) which functions similarly to Germany's blocked account, costing around CAD $20,635. Other countries like Australia or the UK require proof of liquid bank funds."
	},
	{
		q: "Is learning the local language mandatory before traveling?",
		a: "If your course is taught in English, local language skills are not mandatory for admissions. However, having basic skills (A1/A2 German or French) is highly helpful for local student jobs and integration."
	},
	{
		q: "Are health insurances covered in the fees?",
		a: "In public universities (like Germany), health insurance is separate and mandatory (around €120/mo). For countries like the UK or Australia, students pay an upfront Overseas Student Health Cover (OSHC) or IHS fee during visa submission."
	},
	{
		q: "Can I change my course after arriving at the university?",
		a: "Yes, but it depends on university regulations and visa compliance. Changing courses in the same domain is easier, but shifting domains might require a new university offer and visa adjustment."
	},
	{
		q: "How does AtlasPath achieve a 95% visa success rate?",
		a: "We achieve this by verifying your financial documents, ensuring all transcripts are properly translated, double-checking blocked account compliance, and preparing candidates through rigorous mock interview rounds."
	},
	{
		q: "What are the part-time work caps for international students?",
		a: "Most countries (UK, Canada, Germany, Australia) limit international students to 20 hours of work per week during active semesters, and full-time work during official vacations."
	},
	{
		q: "How can I get reference letters (LORs) if I graduated years ago?",
		a: "You can request LORs from your university professors or academic departments. If you have been working, professional reference letters from current or past employers are also accepted."
	},
	{
		q: "Can I apply for PR directly after graduation?",
		a: "Most countries offer post-study work rights (1 to 3 years) during which you can secure a job. Once you complete the required employment years (e.g. 2 years in Germany, 1 year in Canada), you can apply for Permanent Residency."
	}
];
var SuccessStories = () => {
	const [searchName, setSearchName] = useState("");
	const [countryFilter, setCountryFilter] = useState("all");
	const [courseFilter, setCourseFilter] = useState("all");
	const [scholFilter, setScholFilter] = useState("all");
	const [activeTabCountry, setActiveTabCountry] = useState("germany");
	const [limit, setLimit] = useState(6);
	const scrollContainerRef = React.useRef(null);
	const filteredStories = useMemo(() => {
		return STORIES.filter((s) => {
			if (searchName.trim() !== "") {
				const query = searchName.toLowerCase();
				const matchesName = s.name.toLowerCase().includes(query);
				const matchesUni = s.university.toLowerCase().includes(query);
				if (!matchesName && !matchesUni) return false;
			}
			if (countryFilter !== "all" && s.country !== countryFilter) return false;
			if (courseFilter !== "all" && !s.course.toLowerCase().includes(courseFilter)) return false;
			if (scholFilter !== "all") {
				if (scholFilter === "yes" && s.scholarship === "None") return false;
				if (scholFilter === "no" && s.scholarship !== "None") return false;
			}
			return true;
		});
	}, [
		searchName,
		countryFilter,
		courseFilter,
		scholFilter
	]);
	const displayedStories = useMemo(() => {
		return filteredStories.slice(0, limit);
	}, [filteredStories, limit]);
	const handleSliderScroll = (direction) => {
		if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({
			left: direction === "left" ? -340 : 340,
			behavior: "smooth"
		});
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
								id: "success-grid",
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
								fill: "url(#success-grid)"
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
									children: "Success Stories"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "inline-flex items-center gap-1 mb-4 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[10px] font-bold text-slate-600",
										children: "🎓 REAL STORIES, REAL IMPACT"
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
											"Real Students.",
											/* @__PURE__ */ jsx("br", {}),
											"Real Universities.",
											/* @__PURE__ */ jsx("br", {}),
											"Real ",
											/* @__PURE__ */ jsx("span", {
												className: "font-serif italic font-normal text-primary",
												children: "Success Stories"
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
										children: "Discover how students from different academic backgrounds achieved their global education goals through AtlasPath."
									}),
									/* @__PURE__ */ jsx("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center max-w-lg",
										children: [
											{
												value: "15,000+",
												label: "Students Guided"
											},
											{
												value: "95%",
												label: "Visa Success Rate"
											},
											{
												value: "500+",
												label: "University Partners"
											},
											{
												value: "₹250Cr+",
												label: "Scholarships Secured"
											}
										].map((stat, idx) => /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-lg font-black text-primary leading-none",
												children: stat.value
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[9px] text-[#64748B] font-bold mt-1.5 leading-snug",
												children: stat.label
											})]
										}, idx))
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:w-[480px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm",
								children: [
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#6D4AFF_10%,transparent_10%)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-4",
											children: "Our Global Impact Map"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-400 font-semibold mb-4 leading-normal",
											children: "AtlasPath candidates successfully studying across major international universities"
										}),
										/* @__PURE__ */ jsx("div", {
											className: "space-y-2.5",
											children: [
												{
													country: "Germany",
													count: "3,450+ Students",
													visa: "96% Visa Success",
													flag: "🇩🇪"
												},
												{
													country: "Canada",
													count: "2,850+ Students",
													visa: "90% Visa Success",
													flag: "🇨🇦"
												},
												{
													country: "Australia",
													count: "2,200+ Students",
													visa: "91% Visa Success",
													flag: "🇦🇺"
												},
												{
													country: "United Kingdom",
													count: "2,100+ Students",
													visa: "93% Visa Success",
													flag: "🇬🇧"
												},
												{
													country: "United States",
													count: "1,890+ Students",
													visa: "92% Visa Success",
													flag: "🇺🇸"
												}
											].map((callout) => /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between text-xs bg-white border border-slate-100/50 rounded-xl p-2.5 shadow-sm",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-base",
														children: callout.flag
													}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
														className: "font-extrabold text-slate-800 block leading-none",
														children: callout.country
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[9px] text-slate-400 font-semibold mt-1 block leading-none",
														children: callout.count
													})] })]
												}), /* @__PURE__ */ jsx("span", {
													className: "text-emerald-600 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded",
													children: callout.visa
												})]
											}, callout.country))
										})
									] }),
									/* @__PURE__ */ jsx("a", {
										href: "/countries",
										className: "text-xs font-bold text-primary hover:text-secondary mt-5 flex items-center gap-0.5 self-start",
										children: "Explore All Countries →"
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
						children: "Featured Success Stories"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-1",
						children: "Real academic placements and visa completions"
					})] }), /* @__PURE__ */ jsxs("div", {
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
				}), /* @__PURE__ */ jsx("div", {
					ref: scrollContainerRef,
					className: "flex items-stretch gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0",
					children: STORIES.slice(0, 6).map((story) => /* @__PURE__ */ jsxs("div", {
						className: "w-[280px] sm:w-[310px] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-100/70 hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0 group",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-[150px] w-full overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: story.image,
									alt: story.name,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
									onError: (e) => {
										e.currentTarget.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80";
									}
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-3 left-4 flex items-center gap-2.5",
									children: [/* @__PURE__ */ jsx("div", {
										className: `w-8 h-8 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center`,
										children: story.initials
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-white text-xs font-bold leading-none",
										children: story.name
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[9px] text-white/70 font-semibold mt-1 block",
										children: [
											story.flag,
											" ",
											story.country
										]
									})] })]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase",
									children: story.year
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-4 flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-3.5 mb-4",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
									children: "University"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs font-black text-slate-800 mt-1 leading-snug line-clamp-1",
									children: story.university
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold pt-1 border-t border-slate-50",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Course"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1 truncate block",
										children: story.course.split(" in ")[1] || story.course
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none",
										children: "Funding"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-slate-700 font-bold mt-1 truncate block",
										children: story.amount.split(" / ")[0]
									})] })]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border-t border-slate-50 pt-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded",
									children: story.visaStatus
								}), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-1 transition-transform",
									children: "Explore Journey →"
								})]
							})]
						})]
					}, story.id))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 border-t border-slate-100 bg-slate-50/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-4 justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 w-full md:w-auto flex-1 border border-slate-200/60 bg-slate-50/30 rounded-xl px-3.5 py-2.5 hover:border-slate-350 transition-all duration-200 ease-in-out focus-within:ring-0 focus-within:border-current focus-within:shadow-none",
								children: [/* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-slate-400 shrink-0" }), /* @__PURE__ */ jsx("input", {
									type: "text",
									value: searchName,
									onChange: (e) => setSearchName(e.target.value),
									placeholder: "Search by name or university...",
									className: "w-full text-xs font-bold text-[#0F172A] placeholder:text-slate-400 bg-transparent outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-transparent"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-3 w-full md:w-auto",
								children: [
									/* @__PURE__ */ jsxs("select", {
										value: countryFilter,
										onChange: (e) => setCountryFilter(e.target.value),
										className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none",
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
												value: "Australia",
												children: "Australia"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "United Kingdom",
												children: "United Kingdom"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "United States",
												children: "United States"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "Netherlands",
												children: "Netherlands"
											})
										]
									}),
									/* @__PURE__ */ jsxs("select", {
										value: courseFilter,
										onChange: (e) => setCourseFilter(e.target.value),
										className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "all",
												children: "All Courses"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "computer science",
												children: "Computer Science"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "mechanical",
												children: "Mechanical"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "data science",
												children: "Data Science"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "public health",
												children: "Public Health"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "ai",
												children: "AI & Robotics"
											})
										]
									}),
									/* @__PURE__ */ jsxs("select", {
										value: scholFilter,
										onChange: (e) => setScholFilter(e.target.value),
										className: "text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none",
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "all",
												children: "All Scholarships"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "yes",
												children: "Scholarship Winner"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "no",
												children: "Self-Funded / None"
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
							children: displayedStories.map((story) => /* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3.5 mb-4",
										children: [/* @__PURE__ */ jsx("img", {
											src: story.image,
											alt: story.name,
											className: "w-10 h-10 rounded-full object-cover border border-slate-100"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-xs font-bold text-slate-800 leading-none",
											children: story.name
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[9px] text-slate-400 font-semibold mt-1",
											children: story.university
										})] })]
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-[10px] text-slate-500 font-semibold leading-relaxed mb-4",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-700",
												children: "Journey:"
											}),
											" “",
											story.challenges,
											" ",
											story.howHelped,
											" ",
											story.outcome,
											"”"
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-2 text-[9px] text-slate-500 font-semibold py-2.5 bg-slate-50 rounded-xl px-3 border border-slate-100 mb-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-slate-400 uppercase text-[7px] tracking-wider block",
											children: "Course"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-extrabold text-slate-700 truncate block",
											children: story.course
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-slate-400 uppercase text-[7px] tracking-wider block",
											children: "Award"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-extrabold text-slate-700 truncate block",
											children: story.scholarship
										})] })]
									})
								] }), /* @__PURE__ */ jsxs("div", {
									className: "border-t border-slate-50 pt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-[9px] font-bold text-slate-700",
										children: [
											story.flag,
											" ",
											story.country,
											" • ",
											story.year
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Check, { className: "w-2.5 h-2.5 text-emerald-500" }),
											" ",
											story.visaStatus
										]
									})]
								})]
							}, story.id))
						}),
						filteredStories.length > limit && /* @__PURE__ */ jsx("div", {
							className: "text-center",
							children: /* @__PURE__ */ jsx("button", {
								onClick: () => setLimit((prev) => prev + 6),
								className: "px-5 py-3 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm focus:outline-none",
								children: "Load More Stories"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-8",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-[#0F172A] tracking-tight",
							children: "Success by Destination"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Detailed country metrics, placement volume, and salary outcomes"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-50 border border-slate-200/50 rounded-2xl p-1 max-w-xl mx-auto",
						children: Object.keys(SUCCESS_BY_DESTINATION).map((code) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveTabCountry(code),
							className: `px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all focus:outline-none ${activeTabCountry === code ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-800"}`,
							children: code === "uk" ? "United Kingdom" : code === "usa" ? "United States" : code
						}, code))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col lg:flex-row items-stretch gap-8 shadow-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ jsxs("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-3",
									children: [activeTabCountry.toUpperCase(), " Success Stories Overview"]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 font-semibold leading-relaxed mb-6",
									children: SUCCESS_BY_DESTINATION[activeTabCountry].desc
								}),
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
									children: [
										{
											label: "Students Placed",
											val: SUCCESS_BY_DESTINATION[activeTabCountry].students
										},
										{
											label: "Visa Approvals",
											val: SUCCESS_BY_DESTINATION[activeTabCountry].visaRate
										},
										{
											label: "Funding Secured",
											val: SUCCESS_BY_DESTINATION[activeTabCountry].funding
										},
										{
											label: "Partner Universities",
											val: SUCCESS_BY_DESTINATION[activeTabCountry].unis
										}
									].map((row) => /* @__PURE__ */ jsxs("div", {
										className: "bg-white border border-slate-100/50 rounded-2xl p-4 shadow-sm text-center",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block leading-none",
											children: row.label
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-black text-slate-800 mt-2 block leading-none",
											children: row.val
										})]
									}, row.label))
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full lg:w-[320px] shrink-0 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-4",
								children: "Popular Disciplines"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3.5",
								children: SUCCESS_BY_DESTINATION[activeTabCountry].courses.map((bar) => /* @__PURE__ */ jsxs("div", {
									className: "text-xs font-semibold",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between text-slate-600 mb-1",
										children: [/* @__PURE__ */ jsx("span", { children: bar.label }), /* @__PURE__ */ jsxs("span", {
											className: "text-slate-800 font-extrabold",
											children: [bar.pct, "%"]
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "w-full h-1 bg-slate-100 rounded-full overflow-hidden",
										children: /* @__PURE__ */ jsx("div", {
											className: "h-full bg-primary",
											style: { width: `${bar.pct}%` }
										})
									})]
								}, bar.label))
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold text-[#0F172A] tracking-tight",
							children: "Scholarship Winners Spotlight"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Highlighting candidates placed on fully funded global grants"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5",
						children: [
							{
								type: "DAAD Scholars",
								count: "500+ Winners",
								stipend: "Up to €12,000 / year"
							},
							{
								type: "Chevening Scholars",
								count: "680+ Winners",
								stipend: "Full tuition + living"
							},
							{
								type: "Fulbright Scholars",
								count: "450+ Winners",
								stipend: "Up to $70,000 / year"
							},
							{
								type: "Vanier Scholars",
								count: "220+ Winners",
								stipend: "Up to CAD $50,000 / year"
							},
							{
								type: "Erasmus+ Scholars",
								count: "780+ Winners",
								stipend: "Up to €15,000 / year"
							}
						].map((win, idx) => /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3",
									children: /* @__PURE__ */ jsx(Award, { className: "w-5.5 h-5.5" })
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 leading-none",
									children: win.type
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[9px] text-[#64748B] font-bold mt-1.5 leading-none",
									children: win.count
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mt-3 inline-block font-bold",
									children: win.stipend
								})
							]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row items-stretch gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsx(Clock, { className: "w-4.5 h-4.5 text-primary" }), "Admission Timelines"]
						}), /* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto text-[10px] font-semibold text-slate-600",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full text-left border-collapse",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
									className: "border-b border-slate-200/80 text-slate-400 font-bold uppercase text-[8px] tracking-wider",
									children: [
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "Student"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "University"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "Applied"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "Admitted"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "Visa Approved"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "pb-2.5",
											children: "Departed"
										})
									]
								}) }), /* @__PURE__ */ jsx("tbody", {
									className: "divide-y divide-slate-100 text-slate-800 font-bold",
									children: TIMELINES.map((t, idx) => /* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-slate-100/50 transition-colors",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-3 font-extrabold text-[#0f172a]",
												children: t.student
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 text-primary",
												children: t.uni
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3",
												children: t.applied
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3",
												children: t.admitted
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3 text-emerald-600",
												children: t.visa
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-3",
												children: t.departed
											})
										]
									}, idx))
								})]
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "w-full lg:w-[480px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-black text-slate-800 tracking-tight mb-4",
							children: "Video Testimonials"
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-3.5",
							children: [
								{
									name: "Priya Sharma",
									uni: "UoE Edinburgh",
									cover: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&auto=format&fit=crop&q=80"
								},
								{
									name: "Karthik Reddy",
									uni: "Waterloo Canada",
									cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&auto=format&fit=crop&q=80"
								},
								{
									name: "Neha Verma",
									uni: "TUM Munich",
									cover: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&auto=format&fit=crop&q=80"
								},
								{
									name: "Aditya Nair",
									uni: "NUS Singapore",
									cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80"
								}
							].map((video, idx) => /* @__PURE__ */ jsxs("div", {
								className: "relative h-[90px] rounded-xl overflow-hidden shadow-sm group cursor-pointer",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: video.cover,
										alt: video.name,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "absolute inset-0 bg-black/40 flex items-center justify-center",
										children: /* @__PURE__ */ jsx("div", {
											className: "w-7 h-7 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white/50 transition-all",
											children: /* @__PURE__ */ jsx(Play, { className: "w-3 h-3 fill-current ml-0.5" })
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-2 left-2 text-[9px] font-bold text-white leading-none",
										children: [/* @__PURE__ */ jsx("p", { children: video.name }), /* @__PURE__ */ jsx("span", {
											className: "text-white/75 text-[8px] font-semibold mt-0.5 block",
											children: video.uni
										})]
									})
								]
							}, idx))
						})]
					})]
				})
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
								children: /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-black text-slate-800 tracking-tight mb-4",
										children: "Placement Outcomes"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-400 font-semibold mb-4 leading-normal",
										children: "International alumni securing corporate roles post graduation"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-3.5",
										children: [
											{
												role: "Software Engineer",
												pct: 32,
												salary: "€62K/yr average"
											},
											{
												role: "Data Scientist",
												pct: 21,
												salary: "€65K/yr average"
											},
											{
												role: "Research Scientist",
												pct: 16,
												salary: "€58K/yr average"
											},
											{
												role: "Product Manager",
												pct: 12,
												salary: "€75K/yr average"
											},
											{
												role: "AI/ML Engineer",
												pct: 12,
												salary: "€70K/yr average"
											}
										].map((bar, idx) => /* @__PURE__ */ jsxs("div", {
											className: "text-xs font-semibold",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-slate-600 mb-1",
													children: [/* @__PURE__ */ jsx("span", { children: bar.role }), /* @__PURE__ */ jsxs("span", {
														className: "text-slate-800 font-extrabold",
														children: [bar.pct, "%"]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-1",
													children: /* @__PURE__ */ jsx("div", {
														className: "h-full bg-primary",
														style: { width: `${bar.pct}%` }
													})
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-[8px] text-[#64748B] font-bold uppercase tracking-wider",
													children: bar.salary
												})
											]
										}, idx))
									})
								] })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Camera, { className: "w-4.5 h-4.5 text-primary" }), "Gallery Network"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-400 font-semibold mb-4 leading-normal",
										children: "Campus celebrations, convocations, and visa approvals"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-2",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "h-[70px] rounded-xl overflow-hidden",
												children: /* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&auto=format&fit=crop&q=80",
													alt: "Campus Life",
													className: "w-full h-full object-cover"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "h-[70px] rounded-xl overflow-hidden",
												children: /* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&auto=format&fit=crop&q=80",
													alt: "Graduation",
													className: "w-full h-full object-cover"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "h-[70px] rounded-xl overflow-hidden",
												children: /* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=80",
													alt: "Study Group",
													className: "w-full h-full object-cover"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: "h-[70px] rounded-xl overflow-hidden",
												children: /* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&auto=format&fit=crop&q=80",
													alt: "Admissions",
													className: "w-full h-full object-cover"
												})
											})
										]
									})
								] })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4",
									children: "Journey Comparison"
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3.5 text-xs font-semibold",
									children: [
										{
											before: "Confused & lost",
											after: "Clear target shortlists"
										},
										{
											before: "No scholarship plan",
											after: "Full DAAD/Chevening support"
										},
										{
											before: "Complex document checklist",
											after: "Structured LOR/SOP dossiers"
										},
										{
											before: "Unstable visa ratios",
											after: "95% visa success approval"
										},
										{
											before: "Unclear job endpoints",
											after: "Post-study roles at ASML/BMW"
										}
									].map((row, idx) => /* @__PURE__ */ jsxs("div", {
										className: "p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1 text-[9px] text-[#8b5cf6] font-extrabold uppercase",
											children: [/* @__PURE__ */ jsx("span", { children: "Before:" }), /* @__PURE__ */ jsx("span", {
												className: "text-slate-500 font-semibold capitalize",
												children: row.before
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5 text-emerald-600 font-extrabold",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ jsxs("span", { children: ["After: ", row.after] })]
										})]
									}, idx))
								})]
							})
						]
					})
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
						children: "Get precise answers about admissions, CGPA caps, and support channels"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-3.5",
					children: FAQS.map((faq, idx) => /* @__PURE__ */ jsxs("div", {
						className: "border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300",
						children: [
							/* @__PURE__ */ jsxs("label", {
								htmlFor: `success-faq-${idx}`,
								className: "w-full flex items-center justify-between text-left p-4 cursor-pointer bg-slate-50/50 hover:bg-slate-50 select-none",
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
								id: `success-faq-${idx}`,
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
								id: "success-cta-grid",
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
								fill: "url(#success-cta-grid)"
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
								children: "Join Our Network"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5 text-pretty leading-tight",
								children: [
									"Ready to Become Our Next Success Story?",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
										children: "Evaluate Your Study Abroad Options"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs sm:text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed text-pretty",
								children: "Take our AI assessment, shortlist matched university courses, coordinate LOR reference checks, and get visa slots."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto",
								children: [
									/* @__PURE__ */ jsxs("a", {
										href: "/assessment",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Take Assessment" })]
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
										children: [/* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Explore Universities" })]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/scholarships",
										className: "flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5",
										children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Explore Scholarships" })]
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
//#region src/pages/success-stories.astro
var success_stories_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SuccessStories,
	file: () => $$file,
	url: () => $$url
});
var $$SuccessStories = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Success Stories | AtlasPath — Real Students, Real Universities",
		"description": "Discover how thousands of international students achieved their global education goals, secured full scholarships, and received visa approvals through AtlasPath."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "SuccessStories", SuccessStories, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/SuccessStories",
		"client:component-export": "SuccessStories"
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/success-stories.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/success-stories.astro";
var $$url = "/success-stories";
//#endregion
//#region \0virtual:astro:page:src/pages/success-stories@_@astro
var page = () => success_stories_exports;
//#endregion
export { page };
