import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { n as Navbar, t as Footer } from "./Footer_CsXyfZe7.mjs";
import { n as WhatsAppButton, t as AIAssistant } from "./AIAssistant_DVlD598_.mjs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, CheckCircle, ChevronDown, ChevronUp, Compass, Globe, Heart, Star, Users } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/TeamPage.tsx
var LEADERS = [
	{
		name: "Rahul Mehta",
		role: "Co-founder & CEO",
		exp: "12+ Years Exp.",
		specialized: ["Germany", "USA"],
		students: "8,500+",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "Priya Sharma",
		role: "Co-founder & COO",
		exp: "10+ Years Exp.",
		specialized: ["Canada", "UK"],
		students: "7,200+",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "Arjun Patel",
		role: "Head of Global Admissions",
		exp: "11+ Years Exp.",
		specialized: ["Australia", "Ireland"],
		students: "6,800+",
		img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
	},
	{
		name: "Neha Verma",
		role: "Head of Scholarships",
		exp: "9+ Years Exp.",
		specialized: ["Netherlands", "Singapore"],
		students: "5,500+",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
	}
];
var EXPERTS_BY_CATEGORY = {
	"Germany Experts": [{
		name: "Lisa Mueller",
		role: "Senior Germany Advisor",
		exp: "8 Yrs Exp",
		expertise: "APS Verification & TUM/LMU Admissions Specialist",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "Markus Weber",
		role: "Germany Visa Counsel",
		exp: "10 Yrs Exp",
		expertise: "Blocked Accounts & Sperrkonto Verification Specialist",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
	}],
	"Canada Experts": [{
		name: "Sarah Jenkins",
		role: "Canada Desk Specialist",
		exp: "7 Yrs Exp",
		expertise: "PGWP Guidelines & PR Pathways under CEC/PNP",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "David Miller",
		role: "Canada Admissions Officer",
		exp: "8 Yrs Exp",
		expertise: "Rotman School, McGill & UBC Admissions Specialist",
		img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
	}],
	"UK Experts": [{
		name: "Alistair Brown",
		role: "UK Senior Advisor",
		exp: "11 Yrs Exp",
		expertise: "Russell Group Admissions & CAS document validation",
		img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "Victoria Green",
		role: "UK Visa Specialist",
		exp: "9 Yrs Exp",
		expertise: "Student Visa Route guidance & BRP collection",
		img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80"
	}],
	"Australia Experts": [{
		name: "Oliver Smith",
		role: "Australia Specialist",
		exp: "8 Yrs Exp",
		expertise: "OSHC Setup, GTE Statement & Subclass 500 Visa",
		img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "Chloe Jones",
		role: "Go8 Admissions Lead",
		exp: "7 Yrs Exp",
		expertise: "UniMelb & USYD Entry Requirements counselor",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
	}],
	"Scholarship Experts": [{
		name: "James Carter",
		role: "Global Scholarship Lead",
		exp: "9 Yrs Exp",
		expertise: "Chevening, DAAD & Fulbright matching expert",
		img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "Megan Foster",
		role: "Fellowship Advisor",
		exp: "10 Yrs Exp",
		expertise: "SOP Essay Editing & Scholarship interview preps",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
	}],
	"Visa Experts": [{
		name: "Vikram Singh",
		role: "Head of Visa Compliance",
		exp: "12 Yrs Exp",
		expertise: "Consular mock prep & compliance checks lead",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
	}, {
		name: "Niamh Walsh",
		role: "EU Immigration Counsel",
		exp: "7 Yrs Exp",
		expertise: "Eurozone entry permits & blocked funds verifier",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
	}]
};
var FAQS = [
	{
		q: "Who are the experts at AtlasPath?",
		a: "Our network consists of certified study abroad advisors, former visa consular officers, scholarship analysts, and academic mentors with over 10+ average years of student counseling experience."
	},
	{
		q: "What is the experience level of your counselors?",
		a: "Every AtlasPath advisor has a minimum of 5 years of professional study abroad consulting experience, with senior leads having 10+ to 15+ years managing admissions and visas."
	},
	{
		q: "How do you ensure student visa success?",
		a: "We achieve our 95% visa success rate by thoroughly reviewing financial proofs, verifying academic transcript translation logs, confirming blocked account deposits, and conducting mock consular interviews."
	},
	{
		q: "Do you help with global scholarships?",
		a: "Yes! Our scholarship consultants match candidate profiles with active awards (like DAAD, Chevening, Fulbright) and guide students through draft essay edits and interviews."
	},
	{
		q: "How many students has AtlasPath guided?",
		a: "Over the past decade, our global advisor team has successfully guided over 15,000+ international students to secure admissions across top universities."
	},
	{
		q: "Which countries do your experts specialize in?",
		a: "We have dedicated country-specific expert desks for Germany, Canada, Australia, the United Kingdom, the United States, Ireland, and the Netherlands."
	}
];
var STUDENT_REVIEWS = [
	{
		name: "Arjun Patel",
		uni: "TUM, Germany",
		country: "Germany",
		rating: 5,
		review: "AtlasPath guided me at every step. From shortlisting universities to securing my German blocked account and visa. I couldn't have done it without them!",
		outcome: "Admitted: MSc In Data Science (TUM)",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
	},
	{
		name: "Sneha Kapoor",
		uni: "University of Toronto, Canada",
		country: "Canada",
		rating: 5,
		review: "The Canada desk helped me build a premium SOP that got me admitted with a merit scholarship. Simply the best consultants.",
		outcome: "Admitted: BEng Computer Science",
		img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
	},
	{
		name: "Aisha Khan",
		uni: "Imperial College London, UK",
		country: "UK",
		rating: 5,
		review: "Their scholarship advisory helped me structure a perfect application for the Chevening scholarship. Fully recommended!",
		outcome: "Admitted: MSc Health Policy (Chevening Winner)",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
	}
];
var TeamPage = () => {
	const [activeCategoryTab, setActiveCategoryTab] = useState("Germany Experts");
	const [openFaqIdx, setOpenFaqIdx] = useState(null);
	const handleImgError = (e) => {
		e.currentTarget.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80";
	};
	const toggleFaq = (idx) => {
		setOpenFaqIdx((prev) => prev === idx ? null : idx);
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
								id: "team-grid-pattern",
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
								fill: "url(#team-grid-pattern)"
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
									children: "Team & Experts"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "inline-flex items-center gap-1.5 self-start mb-5 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[11px] font-bold text-slate-600",
										children: "🌐 TEAM & GLOBAL SPECIALISTS"
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
											"Meet The Advisors Behind",
											/* @__PURE__ */ jsx("br", {}),
											"Your Global ",
											/* @__PURE__ */ jsx("span", {
												className: "font-serif italic font-normal text-primary",
												children: "Academic Future"
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
										children: "We are a network of certified consultants, former visa compliance officers, and university placement advisors working to make study abroad counseling transparent."
									}),
									/* @__PURE__ */ jsx(motion.div, {
										initial: {
											opacity: 0,
											y: 12
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											delay: .2,
											duration: .5
										},
										className: "grid grid-cols-3 gap-4 bg-slate-50/70 border border-slate-100 rounded-2xl p-5 mb-8 text-center max-w-lg",
										children: [
											{
												value: "15,000+",
												label: "Students Guided"
											},
											{
												value: "95%",
												label: "Visa Success"
											},
											{
												value: "500+",
												label: "University Partners"
											}
										].map(({ value, label }) => /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-lg font-black text-primary leading-none",
												children: value
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[10px] text-[#64748B] font-bold mt-1.5 leading-snug",
												children: label
											})]
										}, label))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col sm:flex-row items-center gap-3.5",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "#leadership",
											className: "flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-primary hover:bg-secondary transition-all shadow-md shadow-primary/10 hover:-translate-y-0.5",
											children: ["Meet Leadership ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
										}), /* @__PURE__ */ jsx("a", {
											href: "/book-consultation",
											className: "flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5",
											children: "Book Specialist Call"
										})]
									})
								]
							}), /* @__PURE__ */ jsx(motion.div, {
								initial: {
									opacity: 0,
									x: 20
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									delay: .25,
									duration: .5
								},
								className: "lg:w-[460px] flex flex-col justify-center shrink-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: "relative h-[250px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80",
											alt: "AtlasPath Team Collaborating",
											loading: "lazy",
											className: "w-full h-full object-cover"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" }),
										/* @__PURE__ */ jsxs("span", {
											className: "absolute bottom-3 left-4 text-xs font-bold text-white flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5 text-emerald-400" }), "AtlasPath Munich Office (Collaborating Advisors)"]
										})
									]
								})
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "leadership",
				className: "py-16 bg-slate-50 border-b border-slate-100 scroll-mt-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-12",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
								children: "Leadership"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
								children: "Core Leadership Team"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Directing study abroad compliance, admissions verification, and visa operations"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: LEADERS.map((leader, idx) => /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/50 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative h-[200px] w-full rounded-2xl overflow-hidden mb-4 border border-slate-50 shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: leader.img,
											alt: leader.name,
											loading: "lazy",
											className: "w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-350"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" }),
										/* @__PURE__ */ jsx("span", {
											className: "absolute bottom-3 left-4 text-[9px] font-bold text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: leader.exp
										})
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 leading-none",
									children: leader.name
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] text-primary font-bold mt-1.5 block leading-none",
									children: leader.role
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-semibold",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("span", { children: "Specialized Areas" }), /* @__PURE__ */ jsx("span", {
											className: "text-slate-800 font-bold",
											children: leader.specialized.join(", ")
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("span", { children: "Students Guided" }), /* @__PURE__ */ jsx("span", {
											className: "text-slate-800 font-bold",
											children: leader.students
										})]
									})]
								})
							] }), /* @__PURE__ */ jsx("div", {
								className: "mt-5 pt-3 border-t border-slate-100 flex items-center gap-2",
								children: /* @__PURE__ */ jsx("a", {
									href: "/book-consultation",
									className: "flex-grow py-2.5 rounded-xl text-center text-[10px] font-bold text-[#6D4AFF] bg-[#6D4AFF]/6 hover:bg-[#6D4AFF]/12 transition-colors border-0",
									children: "Schedule a Consultation"
								})
							})]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-white border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
								children: "Specialists Group"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
								children: "Global Experts Network"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Browse study abroad specialists by regional desks or compliance teams"
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row gap-8 items-start",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-full lg:w-[260px] flex flex-col gap-2 shrink-0",
							children: Object.keys(EXPERTS_BY_CATEGORY).map((catName) => /* @__PURE__ */ jsxs("button", {
								onClick: () => setActiveCategoryTab(catName),
								className: `w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${activeCategoryTab === catName ? "bg-primary text-white border-primary shadow-md shadow-primary/10" : "bg-slate-50 text-slate-600 border-slate-200/50 hover:bg-slate-100"}`,
								children: [/* @__PURE__ */ jsx("span", { children: catName }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
							}, catName))
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm min-h-[300px]",
							children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-xs font-black text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200/60",
								children: ["Active Specialists — ", activeCategoryTab]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: EXPERTS_BY_CATEGORY[activeCategoryTab]?.map((exp, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-200/60 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3.5",
										children: [/* @__PURE__ */ jsx("img", {
											src: exp.img,
											alt: exp.name,
											loading: "lazy",
											className: "w-10 h-10 rounded-full object-cover border border-slate-150"
										}), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("h4", {
												className: "text-xs font-extrabold text-slate-800 leading-none",
												children: exp.name
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[9px] text-primary font-bold mt-1.5 block leading-none",
												children: exp.role
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[9px] text-[#64748B] font-semibold mt-2 leading-relaxed max-w-[200px]",
												children: exp.expertise
											})
										] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "text-right text-[9px] font-bold text-slate-400 shrink-0 self-start",
										children: /* @__PURE__ */ jsx("span", { children: exp.exp })
									})]
								}, idx))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-white border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
								children: "Day In The Life"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
								children: "Moments at AtlasPath"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Summits, collaborations, events, and student visa success milestones"
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "relative h-[240px] rounded-3xl overflow-hidden shadow-sm group",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
										alt: "Student Consultations",
										loading: "lazy",
										onError: handleImgError,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-4 left-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-primary bg-primary/20 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: "Mentoring"
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-white text-xs font-black mt-1.5",
											children: "Student Consultations"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative h-[240px] rounded-3xl overflow-hidden shadow-sm group",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
										alt: "University meetings",
										loading: "lazy",
										onError: handleImgError,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-4 left-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-emerald-400 bg-emerald-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: "Partnerships"
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-white text-xs font-black mt-1.5",
											children: "University Summits"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative h-[240px] rounded-3xl overflow-hidden shadow-sm group",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80",
										alt: "Global Events & Networking",
										loading: "lazy",
										onError: handleImgError,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-4 left-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-amber-400 bg-amber-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: "Global Events"
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-white text-xs font-black mt-1.5",
											children: "International Education Expo & Networking"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative h-[240px] rounded-3xl overflow-hidden shadow-sm group lg:col-span-2",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
										alt: "Office Culture & Team Collaboration",
										loading: "lazy",
										onError: handleImgError,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-4 left-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-purple-400 bg-purple-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: "Office Culture"
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-white text-xs font-black mt-1.5",
											children: "Professional Team Collaboration"
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative h-[240px] rounded-3xl overflow-hidden shadow-sm group",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
										alt: "Visa success celebrations",
										loading: "lazy",
										onError: handleImgError,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-4 left-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-emerald-400 bg-emerald-950/40 backdrop-blur-md px-2 py-0.5 rounded uppercase",
											children: "Visa Success"
										}), /* @__PURE__ */ jsx("h3", {
											className: "text-white text-xs font-black mt-1.5",
											children: "Visa Success Celebrations"
										})]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-slate-50/50 border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600",
										children: /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-black text-slate-800 leading-none",
										children: "Placement Outcomes"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-slate-400 font-semibold mt-1.5 block",
										children: "International alumni securing corporate roles post graduation"
									})] })]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											role: "Software Engineer",
											pct: "32%",
											salary: "€62K/YR AVERAGE",
											img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
										},
										{
											role: "Data Scientist",
											pct: "21%",
											salary: "€65K/YR AVERAGE",
											img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80"
										},
										{
											role: "Research Scientist",
											pct: "16%",
											salary: "€58K/YR AVERAGE",
											img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&auto=format&fit=crop&q=80"
										},
										{
											role: "Product Manager",
											pct: "12%",
											salary: "€75K/YR AVERAGE",
											img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=120&auto=format&fit=crop&q=80"
										},
										{
											role: "AI/ML Engineer",
											pct: "12%",
											salary: "€70K/YR AVERAGE",
											img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80"
										}
									].map((item, idx) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between gap-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-3",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-grow",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5",
													children: [/* @__PURE__ */ jsx("span", { children: item.role }), /* @__PURE__ */ jsx("span", { children: item.pct })]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden mb-1",
													children: /* @__PURE__ */ jsx("div", {
														className: "bg-primary h-1.5 rounded-full",
														style: { width: item.pct }
													})
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-[9px] text-slate-400 font-bold uppercase",
													children: item.salary
												})
											]
										}), /* @__PURE__ */ jsx("img", {
											src: item.img,
											alt: item.role,
											loading: "lazy",
											className: "w-12 h-12 rounded-xl object-cover border border-slate-150 shrink-0"
										})]
									}, idx))
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 bg-primary/6 border border-primary/10 rounded-2xl p-3.5 mt-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" })
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-slate-700 font-extrabold",
										children: "85%+ Alumni placed in top global companies"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600",
										children: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-black text-slate-800 leading-none",
										children: "Gallery Network"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-slate-400 font-semibold mt-1.5 block",
										children: "Campus celebrations, university events, student success stories and global education milestones"
									})] })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "col-span-2 relative h-[160px] rounded-2xl overflow-hidden shadow-sm group",
											children: [
												/* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&auto=format&fit=crop&q=80",
													alt: "Convocation Day",
													loading: "lazy",
													onError: handleImgError,
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												}),
												/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
												/* @__PURE__ */ jsx("span", {
													className: "absolute bottom-3 left-4 text-[9px] font-bold text-white flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded",
													children: "🎓 Convocation Day"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative h-[110px] rounded-2xl overflow-hidden shadow-sm group",
											children: [
												/* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&auto=format&fit=crop&q=80",
													alt: "Campus Life",
													loading: "lazy",
													onError: handleImgError,
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												}),
												/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
												/* @__PURE__ */ jsx("span", {
													className: "absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded",
													children: "🏛️ Campus Life"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative h-[110px] rounded-2xl overflow-hidden shadow-sm group",
											children: [
												/* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&auto=format&fit=crop&q=80",
													alt: "University Fairs",
													loading: "lazy",
													onError: handleImgError,
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												}),
												/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
												/* @__PURE__ */ jsx("span", {
													className: "absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded",
													children: "🎪 University Fairs"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative h-[110px] rounded-2xl overflow-hidden shadow-sm group",
											children: [
												/* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&auto=format&fit=crop&q=80",
													alt: "Alumni Meetups",
													loading: "lazy",
													onError: handleImgError,
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												}),
												/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
												/* @__PURE__ */ jsx("span", {
													className: "absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded",
													children: "🤝 Alumni Meetups"
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative h-[110px] rounded-2xl overflow-hidden shadow-sm group",
											children: [
												/* @__PURE__ */ jsx("img", {
													src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&auto=format&fit=crop&q=80",
													alt: "Visa Approvals",
													loading: "lazy",
													onError: handleImgError,
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
												}),
												/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
												/* @__PURE__ */ jsx("span", {
													className: "absolute bottom-2.5 left-3.5 text-[8px] font-bold text-white flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded",
													children: "✓ Visa Approvals"
												})
											]
										})
									]
								})] }), /* @__PURE__ */ jsx("div", {
									className: "mt-6 pt-4 border-t border-slate-100",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center gap-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex -space-x-2.5 overflow-hidden",
											children: [[
												"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
												"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
												"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
												"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80"
											].map((avatar, i) => /* @__PURE__ */ jsx("img", {
												className: "inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover shrink-0",
												src: avatar,
												alt: "Student avatar",
												loading: "lazy"
											}, i)), /* @__PURE__ */ jsx("div", {
												className: "flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary ring-2 ring-white text-[9px] font-black shrink-0",
												children: "+1200"
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[10px] text-slate-500 font-semibold",
											children: "Join 15,000+ successful students worldwide"
										})]
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600",
										children: /* @__PURE__ */ jsx(Compass, { className: "w-5 h-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-sm font-black text-slate-800 leading-none",
										children: "Journey Comparison"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-slate-400 font-semibold mt-1.5 block",
										children: "Real transformations. Real results."
									})] })]
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3.5",
									children: [
										{
											before: "Confused & Lost",
											after: "Clear target shortlists",
											desc: "Students move from uncertainty to having a clear list of best-fit universities."
										},
										{
											before: "No Scholarship Plan",
											after: "Full DAAD/Chevening support",
											desc: "We help students secure scholarships worth €10K - €50K."
										},
										{
											before: "Complex Document Checklist",
											after: "Structured LOR/SOP dossiers",
											desc: "We transform confusing requirements into strong, organized applications."
										},
										{
											before: "Unstable Visa Ratios",
											after: "95% visa success approval",
											desc: "Our experts ensure a smooth visa process with maximum success."
										},
										{
											before: "Unclear Job Endpoints",
											after: "Post-study roles at ASML/BMW",
											desc: "Students graduate with clarity and land roles in top global companies."
										}
									].map((item, idx) => /* @__PURE__ */ jsxs("div", {
										className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-3 flex flex-col gap-1.5",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-[9px] font-bold tracking-wider leading-none",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ jsxs("span", {
														className: "text-indigo-600 uppercase",
														children: ["BEFORE: ", item.before]
													}),
													/* @__PURE__ */ jsx("span", {
														className: "text-slate-400 font-light",
														children: "→"
													}),
													/* @__PURE__ */ jsxs("span", {
														className: "text-emerald-600 uppercase",
														children: ["AFTER: ", item.after]
													})
												]
											}), /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" })]
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-500 font-semibold leading-relaxed",
											children: item.desc
										})]
									}, idx))
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3 mt-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-current" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-1",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-sm font-black text-primary leading-none",
											children: "95%"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[9px] text-slate-500 font-bold",
											children: "Overall student success rate"
										})]
									})]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-slate-50 border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
								children: "Testimonials"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
								children: "Student Placements"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Verification transcripts showing candidate university entries"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: STUDENT_REVIEWS.map((review, idx) => /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/50 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ jsx("img", {
									src: review.img,
									alt: review.name,
									loading: "lazy",
									className: "w-9 h-9 rounded-full object-cover border border-slate-200"
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 leading-none",
									children: review.name
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[8px] text-slate-400 font-semibold mt-1 block leading-none",
									children: review.uni
								})] })]
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[10px] italic text-slate-500 leading-relaxed font-semibold mb-4",
								children: [
									"“",
									review.review,
									"”"
								]
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "border-t border-slate-100 pt-3 text-[9px] text-[#64748B] font-bold space-y-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Country" }), /* @__PURE__ */ jsx("span", {
										className: "text-slate-800",
										children: review.country
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Outcome" }), /* @__PURE__ */ jsx("span", {
										className: "text-emerald-600",
										children: review.outcome.split(" (")[0]
									})]
								})]
							})]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-white border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
								children: "Partnerships"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
								children: "University Logo Wall"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Accredited student placement pathways inside leading global institutes"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 sm:grid-cols-5 gap-4",
						children: [
							{
								name: "MIT",
								location: "USA",
								color: "border-red-100 hover:border-red-400 hover:text-red-600"
							},
							{
								name: "Stanford",
								location: "USA",
								color: "border-rose-100 hover:border-rose-400 hover:text-rose-600"
							},
							{
								name: "Oxford",
								location: "UK",
								color: "border-blue-100 hover:border-blue-400 hover:text-blue-600"
							},
							{
								name: "Cambridge",
								location: "UK",
								color: "border-sky-100 hover:border-sky-400 hover:text-sky-600"
							},
							{
								name: "TUM",
								location: "Germany",
								color: "border-indigo-100 hover:border-indigo-400 hover:text-indigo-600"
							},
							{
								name: "Toronto",
								location: "Canada",
								color: "border-red-100 hover:border-red-400 hover:text-red-600"
							},
							{
								name: "Waterloo",
								location: "Canada",
								color: "border-amber-100 hover:border-amber-400 hover:text-amber-600"
							},
							{
								name: "Melbourne",
								location: "Australia",
								color: "border-blue-100 hover:border-blue-400 hover:text-blue-600"
							},
							{
								name: "NUS",
								location: "Singapore",
								color: "border-orange-100 hover:border-orange-400 hover:text-orange-600"
							},
							{
								name: "ETH Zurich",
								location: "Switzerland",
								color: "border-slate-100 hover:border-slate-400 hover:text-slate-800"
							}
						].map((uni, idx) => /* @__PURE__ */ jsxs("div", {
							className: `bg-slate-50/50 border rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all cursor-default shadow-sm ${uni.color}`,
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-black tracking-tight",
								children: uni.name
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[8px] text-slate-400 font-bold uppercase mt-1 tracking-wider leading-none",
								children: uni.location
							})]
						}, idx))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-slate-50",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
									children: "Careers"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3 mb-5",
									children: "Join Our Startup Culture"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-500 font-semibold leading-relaxed mb-6",
									children: "We are reshaping study abroad counseling. Join a remote-first, energetic team driven by compliance, data transparency, and student outcome success."
								}),
								/* @__PURE__ */ jsx("div", {
									className: "space-y-4",
									children: [
										{
											title: "Remote-First Flexibility",
											desc: "Work from anywhere with core synchronized hours."
										},
										{
											title: "Continuous Growth Stipend",
											desc: "Annual education budget for certifications or courses."
										},
										{
											title: "Comprehensive Medical Coverage",
											desc: "Health benefits coverage for team members and dependents."
										},
										{
											title: "Annual Global Retreats",
											desc: "We gather once a year to align plans, hike, and celebrate."
										}
									].map((benefit, idx) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-start gap-3 text-xs font-semibold text-slate-600",
										children: [/* @__PURE__ */ jsx(Heart, { className: "w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-[11px] font-bold text-slate-800 leading-none",
											children: benefit.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-slate-400 font-semibold mt-1 leading-snug",
											children: benefit.desc
										})] })]
									}, idx))
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "w-full lg:w-[480px] shrink-0 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm",
							children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-5 flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Briefcase, { className: "w-4.5 h-4.5 text-primary" }), "Open Positions"]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3.5",
								children: [
									{
										title: "Senior Study Advisor",
										loc: "Remote &bull; Full-time",
										action: "Apply Now"
									},
									{
										title: "Visa Operations Lead",
										loc: "New Delhi (Hybrid) &bull; Full-time",
										action: "Apply Now"
									},
									{
										title: "Scholarship Researcher",
										loc: "Munich (Hybrid) &bull; Part-time",
										action: "Apply Now"
									}
								].map((pos, idx) => /* @__PURE__ */ jsxs("div", {
									className: "bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-primary/30 transition-colors",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-extrabold text-slate-800 leading-none",
										children: pos.title
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[8px] text-slate-400 font-semibold mt-1.5 block leading-none",
										dangerouslySetInnerHTML: { __html: pos.loc }
									})] }), /* @__PURE__ */ jsx("span", {
										className: "px-3 py-1.5 rounded-lg text-[9px] font-black text-white bg-primary/60 cursor-not-allowed inline-block",
										children: pos.action
									})]
								}, idx))
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-white border-t border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Answers regarding expert consultants, profile evaluations, and visa checks"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3 font-sans",
						children: FAQS.map((faq, idx) => {
							const isOpen = openFaqIdx === idx;
							return /* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: () => toggleFaq(idx),
									className: "w-full flex items-center justify-between px-5 py-4 text-left font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none",
									children: [/* @__PURE__ */ jsx("span", { children: faq.q }), /* @__PURE__ */ jsx("span", {
										className: "ml-4 shrink-0 p-1 bg-slate-100 rounded-lg",
										children: isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-3.5 h-3.5 text-slate-500" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5 text-slate-500" })
									})]
								}), /* @__PURE__ */ jsx(AnimatePresence, {
									initial: false,
									children: isOpen && /* @__PURE__ */ jsx(motion.div, {
										initial: { height: 0 },
										animate: { height: "auto" },
										exit: { height: 0 },
										transition: {
											duration: .25,
											ease: "easeInOut"
										},
										className: "overflow-hidden",
										children: /* @__PURE__ */ jsx("div", {
											className: "px-5 pb-5 pt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed font-semibold bg-white border-t border-slate-50",
											children: faq.a
										})
									})
								})]
							}, idx);
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-16 bg-[#6D4AFF] text-white relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-[0.02] pointer-events-none",
					children: /* @__PURE__ */ jsxs("svg", {
						width: "100%",
						height: "100%",
						xmlns: "http://www.w3.org/2000/svg",
						children: [/* @__PURE__ */ jsx("pattern", {
							id: "team-cta-grid-pattern",
							width: "30",
							height: "30",
							patternUnits: "userSpaceOnUse",
							children: /* @__PURE__ */ jsx("path", {
								d: "M 30 0 L 0 0 0 30",
								fill: "none",
								stroke: "#FFF",
								strokeWidth: "0.5"
							})
						}), /* @__PURE__ */ jsx("rect", {
							width: "100%",
							height: "100%",
							fill: "url(#team-cta-grid-pattern)"
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-4 text-center relative z-10",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl sm:text-3xl font-black tracking-tight mb-4 text-pretty",
							children: "Ready to Begin Your Journey with Certified Advisors?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8 font-medium",
							children: "Join thousands of successful students who aligned their documentation with expert compliance reviews."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row items-center justify-center gap-4",
							children: [/* @__PURE__ */ jsx("a", {
								href: "/book-consultation",
								className: "w-full sm:w-auto px-8 py-4 rounded-full text-xs font-extrabold text-[#6D4AFF] bg-white hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-0.5",
								children: "Book Strategy Session"
							}), /* @__PURE__ */ jsx("a", {
								href: "/assessment",
								className: "w-full sm:w-auto px-8 py-4 rounded-full text-xs font-extrabold text-white border border-white/30 hover:bg-white/10 transition-all hover:-translate-y-0.5",
								children: "Start Profile Assessment"
							})]
						})
					]
				})]
			})
		]
	});
};
//#endregion
//#region src/pages/team.astro
var team_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Team,
	file: () => $$file,
	url: () => $$url
});
var $$Team = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Our Team & Experts | AtlasPath — Professional Study Abroad Guides",
		"description": "Meet the core leadership team, visa officers, scholarship consultants, and global study abroad advisors behind thousands of student success stories."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "TeamPage", TeamPage, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/TeamPage",
		"client:component-export": "TeamPage"
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/team.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/team.astro";
var $$url = "/team";
//#endregion
//#region \0virtual:astro:page:src/pages/team@_@astro
var page = () => team_exports;
//#endregion
export { page };
