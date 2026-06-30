import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { n as Navbar, t as Footer } from "./Footer_CsXyfZe7.mjs";
import { n as WhatsAppButton, t as AIAssistant } from "./AIAssistant_DVlD598_.mjs";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Award, Calculator, Calendar, Check, ClipboardCheck, ClipboardList, Compass, Download, Globe, RefreshCw, Search, ShieldCheck, Sparkles, Star, UserCheck, Users2 } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Hero.tsx
var Hero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .1,
				delayChildren: .1
			}
		}
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 24,
				stiffness: 90
			}
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "bg-white w-full overflow-hidden",
		style: { paddingTop: "64px" },
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:grid lg:grid-cols-[1fr_420px_220px] lg:items-stretch",
				style: { minHeight: "calc(100vh - 64px)" },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "lg:hidden -mx-4 sm:-mx-6 mb-6",
						children: /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								scale: 1.04
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								duration: .9,
								ease: [
									.25,
									.46,
									.45,
									.94
								],
								delay: .2
							},
							className: "relative w-full overflow-hidden",
							style: { maxHeight: "45vh" },
							children: [/* @__PURE__ */ jsx("img", {
								src: "/assets/student-hero.png",
								alt: "AtlasPath student smiling on campus",
								className: "w-full h-full object-cover object-top",
								loading: "eager",
								style: { maxHeight: "45vh" }
							}), /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" })]
						})
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						className: "flex flex-col justify-center py-8 sm:py-12",
						variants: containerVariants,
						initial: "hidden",
						animate: "visible",
						children: [
							/* @__PURE__ */ jsx(motion.div, {
								variants: itemVariants,
								className: "inline-flex items-center gap-1.5 self-start mb-5 sm:mb-7",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6D4AFF]/8 border border-[#6D4AFF]/15",
									children: [/* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-[#6D4AFF] fill-[#6D4AFF]" }), /* @__PURE__ */ jsx("span", {
										className: "text-[10px] sm:text-[11px] font-semibold text-[#6D4AFF] tracking-wide",
										children: "Trusted by 15,000+ Students Worldwide"
									})]
								})
							}),
							/* @__PURE__ */ jsxs(motion.h1, {
								variants: itemVariants,
								className: "font-extrabold text-[#0F172A] leading-[1.07] mb-4 sm:mb-5",
								style: { fontSize: "clamp(32px, 5vw, 54px)" },
								children: [
									"Global Education.",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("em", {
										className: "font-serif not-italic text-[#6D4AFF]",
										style: {
											fontStyle: "italic",
											fontWeight: 400
										},
										children: "Personalized for You."
									})
								]
							}),
							/* @__PURE__ */ jsx(motion.p, {
								variants: itemVariants,
								className: "text-[14px] sm:text-[15px] leading-[1.7] text-[#64748B] mb-6 sm:mb-8 max-w-[420px]",
								children: "Discover top universities, compare countries, explore scholarships, and connect with experts — all in one intelligent platform."
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								variants: itemVariants,
								className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-12",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "/assessment",
									className: "inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-[13px] font-semibold text-white bg-[#6D4AFF] hover:bg-[#5B3BE0] transition-all duration-200 shadow-lg shadow-[#6D4AFF]/25 hover:-translate-y-0.5",
									children: ["Start Free Assessment", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "/book-consultation",
									className: "inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-[13px] font-semibold text-[#0F172A] bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }), "Book Consultation"]
								})]
							}),
							/* @__PURE__ */ jsx(motion.div, {
								variants: itemVariants,
								className: "grid grid-cols-4 gap-3 sm:gap-5 pt-6 sm:pt-8 border-t border-slate-100",
								children: [
									{
										value: "500+",
										label: "Universities"
									},
									{
										value: "95%",
										label: "Visa Success"
									},
									{
										value: "₹250Cr+",
										label: "Scholarships"
									},
									{
										value: "15,000+",
										label: "Students"
									}
								].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "text-[18px] sm:text-[20px] font-extrabold text-[#0F172A] leading-none",
									children: s.value
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[9px] sm:text-[10px] font-medium text-[#64748B] mt-1 leading-tight",
									children: s.label
								})] }, s.label))
							})
						]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						className: "hidden lg:block relative self-stretch overflow-hidden",
						initial: {
							opacity: 0,
							scale: 1.04
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .9,
							ease: [
								.25,
								.46,
								.45,
								.94
							],
							delay: .2
						},
						children: [/* @__PURE__ */ jsx("img", {
							src: "/assets/student-hero.png",
							alt: "AtlasPath student smiling on campus",
							className: "w-full h-full object-cover object-top",
							loading: "eager"
						}), /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden lg:flex flex-col justify-center gap-3 py-12",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							variants: itemVariants,
							initial: "hidden",
							animate: "visible",
							transition: { delay: .55 },
							whileHover: {
								y: -3,
								transition: { duration: .18 }
							},
							className: "bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-7 h-7 rounded-lg bg-[#6D4AFF]/10 flex items-center justify-center flex-shrink-0",
									children: /* @__PURE__ */ jsx(ClipboardCheck, { className: "w-3.5 h-3.5 text-[#6D4AFF]" })
								}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", {
									className: "text-[10px] font-bold text-[#0F172A] uppercase tracking-wide leading-none",
									children: "Quick Actions"
								}) })]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-2",
								children: [
									/* @__PURE__ */ jsxs("a", {
										href: "/assessment",
										className: "text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1",
										children: [/* @__PURE__ */ jsx(ArrowRight, { className: "w-2.5 h-2.5" }), " Take Free Assessment"]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/book-consultation",
										className: "text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1",
										children: [/* @__PURE__ */ jsx(ArrowRight, { className: "w-2.5 h-2.5" }), " Book Consultation"]
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/universities",
										className: "text-[11px] font-semibold text-[#6D4AFF] hover:underline flex items-center gap-1",
										children: [/* @__PURE__ */ jsx(ArrowRight, { className: "w-2.5 h-2.5" }), " Explore Universities"]
									})
								]
							})]
						}), /* @__PURE__ */ jsxs(motion.div, {
							variants: itemVariants,
							initial: "hidden",
							animate: "visible",
							transition: { delay: .7 },
							whileHover: {
								y: -3,
								transition: { duration: .18 }
							},
							className: "bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/80 p-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0",
										children: /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 text-emerald-600" })
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-[#0F172A]",
										children: "Student Success"
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-[#94A3B8]",
									children: "Visa Success Rate"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[30px] font-extrabold text-emerald-600 leading-tight",
									children: "95%"
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "/success-stories",
									className: "flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-600 hover:underline",
									children: ["View Success Stories ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-2.5 h-2.5" })]
								})
							]
						})]
					})
				]
			})
		})
	});
};
//#endregion
//#region src/components/UniversityPartners.tsx
var UniversityPartners = () => {
	const partners = [
		{
			name: "MIT",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "0",
						y: "20",
						width: "12",
						height: "60",
						fill: "#A31F34"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "20",
						y: "20",
						width: "12",
						height: "60",
						fill: "#A31F34"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "40",
						y: "20",
						width: "12",
						height: "36",
						fill: "#A31F34"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "60",
						y: "20",
						width: "18",
						height: "60",
						fill: "#8A8B8C"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "86",
						y: "20",
						width: "12",
						height: "60",
						fill: "#A31F34"
					})
				]
			}),
			fullName: "Massachusetts Institute of Technology"
		},
		{
			name: "Stanford University",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "10",
						y: "10",
						width: "80",
						height: "80",
						rx: "20",
						fill: "#8C1515"
					}),
					/* @__PURE__ */ jsx("text", {
						x: "50%",
						y: "72%",
						textAnchor: "middle",
						fontSize: "56",
						fontFamily: "Georgia, serif",
						fontWeight: "black",
						fill: "#FFFFFF",
						children: "S"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M50 18 L43 45 L48 45 L46 54 L50 54 L49 62 L51 62 L50 54 L54 54 L52 45 L57 45 Z",
						fill: "#007C56"
					})
				]
			}),
			fullName: "Stanford University"
		},
		{
			name: "NUS",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "10",
						y: "10",
						width: "80",
						height: "80",
						rx: "20",
						fill: "#003D7C"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M30 40 L50 25 L70 40 L70 60 C70 70 50 80 50 80 C50 80 30 70 30 60 Z",
						fill: "#EF7C00"
					}),
					/* @__PURE__ */ jsx("text", {
						x: "50%",
						y: "62%",
						textAnchor: "middle",
						fontSize: "18",
						fontFamily: "sans-serif",
						fontWeight: "black",
						fill: "#FFFFFF",
						children: "NUS"
					})
				]
			}),
			fullName: "National University of Singapore"
		},
		{
			name: "Melbourne",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				fill: "none",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "10",
						y: "10",
						width: "80",
						height: "80",
						rx: "40",
						fill: "#092B5C"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M50 30 L43 45 L57 45 Z",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "52",
						r: "1.5",
						fill: "#FFD700"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "43",
						cy: "58",
						r: "1.5",
						fill: "#FFD700"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "57",
						cy: "58",
						r: "1.5",
						fill: "#FFD700"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "65",
						r: "1.5",
						fill: "#FFD700"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "46",
						r: "3.5",
						fill: "#FFD700"
					})
				]
			}),
			fullName: "The University of Melbourne"
		},
		{
			name: "Toronto",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M15 15 L85 15 L85 55 C85 75 50 88 50 88 C50 88 15 75 15 55 Z",
						fill: "#002A5C"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M40 38 L50 28 L60 38 L50 48 Z",
						fill: "#EAAA00"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M50 48 L50 68",
						stroke: "#EAAA00",
						strokeWidth: "4"
					})
				]
			}),
			fullName: "University of Toronto"
		},
		{
			name: "Kings College",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "10",
						y: "10",
						width: "80",
						height: "80",
						rx: "20",
						fill: "#ED1B2E"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M30 65 L35 45 L50 55 L65 45 L70 65 Z",
						fill: "#FFD700"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "38",
						r: "4",
						fill: "#FFD700"
					})
				]
			}),
			fullName: "King's College London"
		},
		{
			name: "Sydney",
			icon: /* @__PURE__ */ jsxs("svg", {
				className: "w-8 h-8 shrink-0",
				viewBox: "0 0 100 100",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M15 15 L85 15 L85 60 C85 78 50 88 50 88 C50 88 15 78 15 60 Z",
						fill: "#D62246"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M32 32 H68 V52 H32 Z",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "38",
						y1: "38",
						x2: "62",
						y2: "38",
						stroke: "#012169",
						strokeWidth: "2.5"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: "38",
						y1: "45",
						x2: "62",
						y2: "45",
						stroke: "#012169",
						strokeWidth: "2.5"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "50",
						cy: "70",
						r: "5.5",
						fill: "#FFD700"
					})
				]
			}),
			fullName: "The University of Sydney"
		}
	];
	return /* @__PURE__ */ jsxs("section", {
		id: "universities",
		className: "py-12 bg-slate-50 border-y border-slate-100 overflow-hidden relative",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-[11px] font-bold tracking-widest text-[#64748B] uppercase",
					children: "Our University Partners"
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-[#64748B] font-semibold",
					children: "Connecting you with top-tier global institutions"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex w-full overflow-hidden mask-gradient",
				children: /* @__PURE__ */ jsx("div", {
					className: "animate-marquee [--marquee-duration:35s] flex gap-16 items-center shrink-0",
					children: [...partners, ...partners].map((partner, index) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 shrink-0 hover:scale-105 transition-all duration-300 select-none cursor-pointer",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-text",
							children: partner.icon
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-sans font-bold text-sm tracking-tight text-slate-800 leading-none",
								children: partner.name
							}), /* @__PURE__ */ jsx("span", {
								className: "font-sans text-[8px] text-[#64748B] font-bold mt-0.5 max-w-[150px] truncate",
								children: partner.fullName
							})]
						})]
					}, `${partner.name}-${index}`))
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      ` })
		]
	});
};
//#endregion
//#region src/components/PlatformOverview.tsx
var PlatformOverview = () => {
	const cards = [
		{
			title: "University Discovery",
			description: "Find and compare top universities worldwide that match your profile.",
			icon: /* @__PURE__ */ jsx(Search, { className: "w-5 h-5" }),
			colorClass: "text-primary bg-primary/5 border-primary/10",
			href: "#discovery"
		},
		{
			title: "Country Insights",
			description: "Compare countries based on cost, visas, jobs, and lifestyle.",
			icon: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5" }),
			colorClass: "text-indigo-600 bg-indigo-50 border-indigo-100",
			href: "#countries"
		},
		{
			title: "Scholarship Finder",
			description: "Discover scholarships worth lakhs and maximize funding.",
			icon: /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" }),
			colorClass: "text-amber-600 bg-amber-50 border-amber-100",
			href: "#scholarships"
		},
		{
			title: "Cost Calculator",
			description: "Estimate your total cost of study, living expenses, and currency conversions.",
			icon: /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5" }),
			colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
			href: "#calculator"
		},
		{
			title: "Expert Guidance",
			description: "Connect with certified counselors and visa experts whenever you need.",
			icon: /* @__PURE__ */ jsx(Users2, { className: "w-5 h-5" }),
			colorClass: "text-violet-600 bg-violet-50 border-violet-100",
			href: "#guidance"
		},
		{
			title: "Application Support",
			description: "End-to-end guidance for applications, document review, and visa processing.",
			icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }),
			colorClass: "text-rose-600 bg-rose-50 border-rose-100",
			href: "#support"
		}
	];
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: .08 } }
	};
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 30
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 100
			}
		}
	};
	return /* @__PURE__ */ jsx("section", {
		id: "platform-overview",
		className: "py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-primary mb-3 block",
						children: "All-In-One Platform"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty leading-tight",
						children: [
							"Everything You Need,",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "font-serif italic font-normal text-slate-500",
								children: "To Study Abroad."
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("a", {
					href: "#all-features",
					className: "group flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 self-start md:self-end",
					children: [/* @__PURE__ */ jsx("span", { children: "Explore All Features" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ jsx(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-100px"
				},
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
				children: cards.map((card, index) => /* @__PURE__ */ jsxs(motion.div, {
					variants: cardVariants,
					whileHover: { y: -6 },
					className: "group relative bg-surface border border-slate-200/50 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 hover:bg-white flex flex-col justify-between min-h-[220px]",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: `w-10 h-10 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-105 ${card.colorClass}`,
							children: card.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold text-text mb-3 tracking-tight",
							children: card.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-muted mb-6",
							children: card.description
						})
					] }), /* @__PURE__ */ jsxs("a", {
						href: card.href,
						className: "inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-all duration-300",
						children: [/* @__PURE__ */ jsx("span", { children: "Explore" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" })]
					})]
				}, index))
			})]
		})
	});
};
//#endregion
//#region src/components/AssessmentShowcase.tsx
var AssessmentShowcase = () => {
	const [step, setStep] = useState(1);
	const [degree, setDegree] = useState("Master");
	const [field, setField] = useState("Computer Science");
	const [gpa, setGpa] = useState(8.8);
	const [englishScore, setEnglishScore] = useState(7.5);
	const [budget, setBudget] = useState("Medium");
	const [readinessScore, setReadinessScore] = useState(0);
	const [isCalculating, setIsCalculating] = useState(false);
	const [downloadState, setDownloadState] = useState("idle");
	useEffect(() => {
		setIsCalculating(true);
		const timer = setTimeout(() => {
			let score = 60;
			if (degree === "Master") score += 5;
			if (field === "Computer Science") score += 5;
			score += Math.round(gpa / 10 * 20);
			score += Math.round(englishScore / 9 * 10);
			if (budget === "Medium" || budget === "High") score += 5;
			setReadinessScore(Math.min(score, 99));
			setIsCalculating(false);
		}, 600);
		return () => clearTimeout(timer);
	}, [
		degree,
		field,
		gpa,
		englishScore,
		budget
	]);
	const handleDownload = () => {
		setDownloadState("loading");
		setTimeout(() => {
			setDownloadState("success");
			setTimeout(() => setDownloadState("idle"), 3e3);
		}, 1500);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "assessment",
		className: "py-24 bg-surface px-4 sm:px-6 lg:px-8 border-y border-slate-200/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center max-w-3xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3" }), "Interactive Assessment Showcase"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty mb-4",
						children: "Evaluate Your Global Readiness."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-lg text-muted text-pretty",
						children: "Answer a few key profile questions to simulate your matching rate, calculate readiness metrics, and see matching destinations instantly."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200 rounded-[24px] shadow-2xl overflow-hidden max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2 select-none",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-red-400 block" }),
							/* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-amber-400 block" }),
							/* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-emerald-400 block" })
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mx-auto bg-white border border-slate-200 text-xs text-muted font-medium py-1 px-12 rounded-lg truncate w-full max-w-sm text-center",
						children: "app.atlaspath.com/assessment/readiness-evaluator"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 min-h-[500px]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between text-xs text-muted font-bold mb-4 uppercase tracking-wider",
								children: [/* @__PURE__ */ jsxs("span", { children: [
									"Step ",
									step,
									" of 3"
								] }), /* @__PURE__ */ jsx("span", { children: step === 1 ? "Academic Level" : step === 2 ? "Test Scores" : "Preferences" })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "w-full h-1.5 bg-slate-100 rounded-full mb-8",
								children: /* @__PURE__ */ jsx("div", {
									className: "h-full bg-primary rounded-full transition-all duration-500 ease-out",
									style: { width: `${step / 3 * 100}%` }
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "min-h-[220px]",
								children: /* @__PURE__ */ jsxs(AnimatePresence, {
									mode: "wait",
									children: [
										step === 1 && /* @__PURE__ */ jsxs(motion.div, {
											initial: {
												opacity: 0,
												x: -10
											},
											animate: {
												opacity: 1,
												x: 0
											},
											exit: {
												opacity: 0,
												x: 10
											},
											className: "flex flex-col gap-4",
											children: [
												/* @__PURE__ */ jsx("h4", {
													className: "text-sm font-bold text-text mb-2",
													children: "What is your academic profile?"
												}),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "block text-xs font-semibold text-muted mb-2 uppercase tracking-wide",
													children: "Target Degree"
												}), /* @__PURE__ */ jsx("div", {
													className: "grid grid-cols-2 gap-3",
													children: ["Bachelor", "Master"].map((d) => /* @__PURE__ */ jsx("button", {
														onClick: () => setDegree(d),
														className: `py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${degree === d ? "border-primary bg-primary/5 text-primary" : "border-slate-200 hover:border-slate-300 text-text"}`,
														children: d
													}, d))
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "block text-xs font-semibold text-muted mb-2 uppercase tracking-wide",
													children: "Field of Study"
												}), /* @__PURE__ */ jsxs("select", {
													value: field,
													onChange: (e) => setField(e.target.value),
													className: "w-full p-3 rounded-xl border border-slate-200 text-sm font-bold text-text focus:ring-0 focus:border-transparent outline-none",
													children: [
														/* @__PURE__ */ jsx("option", {
															value: "Computer Science",
															children: "Computer Science"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Business Administration",
															children: "Business Administration"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Mechanical Engineering",
															children: "Mechanical Engineering"
														}),
														/* @__PURE__ */ jsx("option", {
															value: "Biomedical Science",
															children: "Biomedical Science"
														})
													]
												})] })
											]
										}, "step1"),
										step === 2 && /* @__PURE__ */ jsxs(motion.div, {
											initial: {
												opacity: 0,
												x: -10
											},
											animate: {
												opacity: 1,
												x: 0
											},
											exit: {
												opacity: 0,
												x: 10
											},
											className: "flex flex-col gap-4",
											children: [
												/* @__PURE__ */ jsx("h4", {
													className: "text-sm font-bold text-text mb-2",
													children: "Enter your academic scores"
												}),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between text-xs font-semibold text-muted mb-2 uppercase tracking-wide",
													children: [/* @__PURE__ */ jsx("span", { children: "GPA / Percentage Score" }), /* @__PURE__ */ jsxs("span", {
														className: "text-primary font-bold",
														children: [gpa, " / 10.0"]
													})]
												}), /* @__PURE__ */ jsx("input", {
													type: "range",
													min: "6.0",
													max: "10.0",
													step: "0.1",
													value: gpa,
													onChange: (e) => setGpa(parseFloat(e.target.value)),
													className: "w-full h-1.5 bg-slate-100 accent-primary rounded-lg appearance-none cursor-pointer"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between text-xs font-semibold text-muted mb-2 uppercase tracking-wide",
													children: [/* @__PURE__ */ jsx("span", { children: "IELTS / Equivalent Score" }), /* @__PURE__ */ jsxs("span", {
														className: "text-primary font-bold",
														children: [englishScore, " / 9.0"]
													})]
												}), /* @__PURE__ */ jsx("input", {
													type: "range",
													min: "5.5",
													max: "9.0",
													step: "0.5",
													value: englishScore,
													onChange: (e) => setEnglishScore(parseFloat(e.target.value)),
													className: "w-full h-1.5 bg-slate-100 accent-primary rounded-lg appearance-none cursor-pointer"
												})] })
											]
										}, "step2"),
										step === 3 && /* @__PURE__ */ jsxs(motion.div, {
											initial: {
												opacity: 0,
												x: -10
											},
											animate: {
												opacity: 1,
												x: 0
											},
											exit: {
												opacity: 0,
												x: 10
											},
											className: "flex flex-col gap-4",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-sm font-bold text-text mb-2",
												children: "Configure budget limits"
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-xs font-semibold text-muted mb-2 uppercase tracking-wide",
												children: "Financial Budget Priority"
											}), /* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-3 gap-2",
												children: [
													"Low",
													"Medium",
													"High"
												].map((b) => /* @__PURE__ */ jsx("button", {
													onClick: () => setBudget(b),
													className: `py-3.5 px-2 rounded-xl border text-xs font-bold transition-all ${budget === b ? "border-primary bg-primary/5 text-primary" : "border-slate-200 hover:border-slate-300 text-text"}`,
													children: b
												}, b))
											})] })]
										}, "step3")
									]
								})
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mt-8 border-t border-slate-100 pt-6",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => setStep((prev) => Math.max(1, prev - 1)),
								disabled: step === 1,
								className: `text-xs font-bold px-4 py-2.5 rounded-full border transition-all ${step === 1 ? "border-slate-100 text-slate-300 cursor-not-allowed" : "border-slate-200 hover:bg-slate-50 text-text"}`,
								children: "Back"
							}), step < 3 ? /* @__PURE__ */ jsxs("button", {
								onClick: () => setStep((prev) => Math.min(3, prev + 1)),
								className: "flex items-center gap-1.5 text-xs font-bold bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-primary/10",
								children: [/* @__PURE__ */ jsx("span", { children: "Next step" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
							}) : /* @__PURE__ */ jsxs("a", {
								href: "/book-consultation",
								className: "flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-500/10",
								children: [/* @__PURE__ */ jsx("span", { children: "Book Free Consultation" }), /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" })]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-6",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold text-muted uppercase tracking-wider",
								children: "Live Evaluation Report"
							}), isCalculating ? /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1.5 text-xs text-primary font-bold",
								children: [/* @__PURE__ */ jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }), "Recalculating…"]
							}) : /* @__PURE__ */ jsx("span", {
								className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100",
								children: "Active"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-12 gap-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-5 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase text-muted tracking-wider mb-4",
									children: "Readiness Score"
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative w-28 h-28 flex items-center justify-center",
									children: [/* @__PURE__ */ jsxs("svg", {
										className: "w-full h-full transform -rotate-95",
										viewBox: "0 0 36 36",
										children: [/* @__PURE__ */ jsx("path", {
											className: "text-slate-100",
											strokeWidth: "2.5",
											stroke: "currentColor",
											fill: "none",
											d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
										}), /* @__PURE__ */ jsx(motion.path, {
											className: "text-primary",
											strokeWidth: "2.5",
											strokeDasharray: `${readinessScore}, 100`,
											strokeLinecap: "round",
											stroke: "currentColor",
											fill: "none",
											d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",
											initial: { strokeDasharray: "0, 100" },
											animate: { strokeDasharray: `${readinessScore}, 100` },
											transition: { duration: .5 }
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "absolute flex flex-col items-center justify-center",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-2xl font-extrabold tracking-tight text-text",
											children: [readinessScore, "%"]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-[8px] text-emerald-600 font-bold uppercase",
											children: "Qualified"
										})]
									})]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-7 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold uppercase text-muted tracking-wider mb-3",
									children: "Country Recommendations"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-col gap-3",
									children: [
										{
											name: "Germany",
											baseMatch: 96,
											flag: "🇩🇪",
											intake: "Winter/Summer",
											visaTime: "6-8 weeks"
										},
										{
											name: "Canada",
											baseMatch: 92,
											flag: "🇨🇦",
											intake: "Fall/Winter",
											visaTime: "4-6 weeks"
										},
										{
											name: "Ireland",
											baseMatch: 88,
											flag: "🇮🇪",
											intake: "Autumn/Spring",
											visaTime: "8-10 weeks"
										}
									].map((c, idx) => {
										const offset = Math.round((gpa - 8.5) * 4 + (englishScore - 7.5) * 5);
										const matchRate = Math.min(Math.max(c.baseMatch + offset, 45), 99);
										return /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between text-xs font-semibold text-text",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-sm",
														"aria-hidden": "true",
														children: c.flag
													}), /* @__PURE__ */ jsx("span", { children: c.name })]
												}), /* @__PURE__ */ jsxs("span", {
													className: "text-primary font-bold",
													children: [matchRate, "% match"]
												})]
											}), /* @__PURE__ */ jsx("div", {
												className: "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden",
												children: /* @__PURE__ */ jsx(motion.div, {
													className: "h-full bg-gradient-to-r from-primary to-accent rounded-full",
													initial: { width: 0 },
													animate: { width: `${matchRate}%` },
													transition: {
														duration: .5,
														delay: idx * .1
													}
												})
											})]
										}, c.name);
									})
								})]
							})]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 flex-shrink-0",
									children: /* @__PURE__ */ jsx(ClipboardList, { className: "w-5 h-5" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h5", {
									className: "text-xs font-bold text-text",
									children: "Full Evaluation Report.pdf"
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[10px] text-muted",
									children: [
										"Complete breakdown of ",
										degree,
										" matched courses"
									]
								})] })]
							}), /* @__PURE__ */ jsx("button", {
								onClick: handleDownload,
								disabled: downloadState !== "idle",
								className: `flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all w-full sm:w-auto justify-center ${downloadState === "loading" ? "bg-slate-100 text-slate-400 cursor-wait" : downloadState === "success" ? "bg-emerald-600 text-white" : "bg-text hover:bg-slate-800 text-white shadow-md"}`,
								children: downloadState === "loading" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }), /* @__PURE__ */ jsx("span", { children: "Generating…" })] }) : downloadState === "success" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Downloaded!" })] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "Download Report" })] })
							})]
						})]
					})]
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/ImpactSection.tsx
var MetricCounter = ({ value, suffix, duration = 1.5 }) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-100px"
	});
	useEffect(() => {
		if (!isInView) return;
		let start = 0;
		const end = value;
		const totalMiliseconds = duration * 1e3;
		const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
		const timer = setInterval(() => {
			start += Math.ceil(end / (totalMiliseconds / incrementTime));
			if (start >= end) {
				clearInterval(timer);
				setCount(end);
			} else setCount(start);
		}, incrementTime);
		return () => clearInterval(timer);
	}, [
		isInView,
		value,
		duration
	]);
	const formatNumber = (num) => {
		return num.toLocaleString("en-IN");
	};
	return /* @__PURE__ */ jsxs("span", {
		ref,
		className: "font-sans font-bold tracking-tight text-white",
		children: [formatNumber(count), suffix]
	});
};
var ImpactSection = () => {
	return /* @__PURE__ */ jsxs("section", {
		id: "impact",
		className: "py-24 bg-[#090D1A] text-white relative overflow-hidden border-t border-slate-800",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-[0.02] pointer-events-none",
				children: /* @__PURE__ */ jsxs("svg", {
					width: "100%",
					height: "100%",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
						id: "grid-dark",
						width: "60",
						height: "60",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ jsx("path", {
							d: "M 60 0 L 0 0 0 60",
							fill: "none",
							stroke: "#FFFFFF",
							strokeWidth: "1"
						})
					}) }), /* @__PURE__ */ jsx("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#grid-dark)"
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 text-left",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold uppercase tracking-widest text-primary mb-3 block",
								children: "Our Impact In Numbers"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 text-pretty leading-tight",
								children: [
									"We don’t just promise,",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "font-serif italic font-normal text-slate-400",
										children: "We deliver results."
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base text-slate-400 leading-relaxed text-pretty",
								children: "AtlasPath connects dream academic pathways with structured realities. Our statistics reflect years of commitment, expert visa guidance, and verified financial packages."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7 grid grid-cols-2 gap-6 sm:gap-8",
						children: [
							{
								label: "Students Guided",
								value: 15e3,
								suffix: "+"
							},
							{
								label: "University Partners",
								value: 500,
								suffix: "+"
							},
							{
								label: "Visa Success Rate",
								value: 95,
								suffix: "%"
							},
							{
								label: "Scholarships Secured",
								value: 250,
								suffix: "Cr+",
								prefix: "₹"
							}
						].map((metric, index) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								delay: index * .1
							},
							className: "bg-white/[0.02] border border-white/[0.06] p-6 sm:p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-center min-h-[140px]",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 flex items-center",
								children: [metric.prefix && /* @__PURE__ */ jsx("span", {
									className: "mr-0.5",
									children: metric.prefix
								}), /* @__PURE__ */ jsx(MetricCounter, {
									value: metric.value,
									suffix: metric.suffix
								})]
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider",
								children: metric.label
							})]
						}, index))
					})]
				})
			})
		]
	});
};
//#endregion
//#region src/components/JourneySection.tsx
var JourneySection = () => {
	return /* @__PURE__ */ jsx("section", {
		id: "journey",
		className: "py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 relative",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-primary mb-3 block",
						children: "How It Works"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text text-pretty leading-tight",
						children: [
							"Your Study Abroad Journey,",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "font-serif italic font-normal text-slate-500",
								children: "Simplified in 4 Steps."
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("a", {
					href: "#assessment",
					className: "group flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-all duration-300 self-start md:self-end",
					children: [/* @__PURE__ */ jsx("span", { children: "See Full Process" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10",
					children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-emerald-500 w-[75%] h-full rounded-full" })
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",
					children: [
						{
							number: "01",
							title: "Take Assessment",
							description: "Answer simple questions about your goals, academics, and preferences to start your profile evaluation.",
							icon: /* @__PURE__ */ jsx(ClipboardCheck, { className: "w-5 h-5" }),
							colorClass: "text-primary bg-primary/5 border-primary/10"
						},
						{
							number: "02",
							title: "Get Personalized Results",
							description: "Receive university matches, scholarship options, budget estimations, and country recommendations.",
							icon: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5" }),
							colorClass: "text-indigo-600 bg-indigo-50 border-indigo-100"
						},
						{
							number: "03",
							title: "Connect with Experts",
							description: "Book a free strategy session with expert advisors to align on your choices and visa requirements.",
							icon: /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5" }),
							colorClass: "text-violet-600 bg-violet-50 border-violet-100"
						},
						{
							number: "04",
							title: "Start Your Journey",
							description: "We help you with everything from initial documentation and essays to mock visa interviews.",
							icon: /* @__PURE__ */ jsx(Compass, { className: "w-5 h-5" }),
							colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100"
						}
					].map((step, idx) => /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .5,
							delay: idx * .1
						},
						className: "flex flex-col relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-4 mb-6",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-xs font-extrabold text-muted tracking-widest bg-slate-50 border border-slate-200/50 px-3 py-1 rounded-full shadow-sm",
								children: step.number
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-surface border border-slate-200/50 p-6 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:bg-white flex flex-col flex-grow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `w-10 h-10 rounded-2xl flex items-center justify-center border mb-6 ${step.colorClass}`,
									children: step.icon
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-base font-bold text-text mb-2.5 tracking-tight",
									children: step.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs leading-relaxed text-muted flex-grow",
									children: step.description
								})
							]
						})]
					}, idx))
				})]
			})]
		})
	});
};
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "Hero", Hero, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Hero",
		"client:component-export": "Hero"
	})}${maybeRenderHead($$result)}<div id="universities" class="scroll-mt-24">${renderComponent($$result, "UniversityPartners", UniversityPartners, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/UniversityPartners",
		"client:component-export": "UniversityPartners"
	})}</div><div id="countries" class="scroll-mt-24"></div><div id="scholarships" class="scroll-mt-24"></div><div id="resources" class="scroll-mt-24"></div>${renderComponent($$result, "PlatformOverview", PlatformOverview, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/PlatformOverview",
		"client:component-export": "PlatformOverview"
	})}${renderComponent($$result, "AssessmentShowcase", AssessmentShowcase, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AssessmentShowcase",
		"client:component-export": "AssessmentShowcase"
	})}<div id="success" class="scroll-mt-24">${renderComponent($$result, "ImpactSection", ImpactSection, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/ImpactSection",
		"client:component-export": "ImpactSection"
	})}</div><div id="about" class="scroll-mt-24">${renderComponent($$result, "JourneySection", JourneySection, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/JourneySection",
		"client:component-export": "JourneySection"
	})}</div><section id="final-cta" class="py-24 bg-gradient-to-b from-[#090D1A] via-slate-950 to-slate-950 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-slate-900"><!-- Grid overlay background --><div class="absolute inset-0 opacity-[0.02] pointer-events-none"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="0.5"></path></pattern><rect width="100%" height="100%" fill="url(#cta-grid)"></rect></svg></div><div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div><div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none"></div><div class="max-w-4xl mx-auto text-center relative z-10"><span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">Let&rsquo;s Plan Your Future</span><h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 text-pretty leading-tight">Ready to Start Your<br><span class="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Global Journey?</span></h2><p class="text-sm sm:text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed text-pretty">Book a free strategy session with our expert advisors today, or complete our quick profile evaluation online to see university recommendations.</p><div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto"><a href="/book-consultation" class="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-[#090D1A] bg-white hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5">${renderComponent($$result, "Calendar", Calendar, { "className": "w-4.5 h-4.5" })}<span>Book Consultation</span></a><a href="/assessment" class="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-0.5">${renderComponent($$result, "ClipboardCheck", ClipboardCheck, { "className": "w-4.5 h-4.5" })}<span>Start Assessment</span>${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "w-4 h-4" })}</a></div></div></section>${renderComponent($$result, "Footer", Footer, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Footer",
		"client:component-export": "Footer"
	})}${renderComponent($$result, "WhatsAppButton", WhatsAppButton, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/WhatsAppButton",
		"client:component-export": "WhatsAppButton"
	})}${renderComponent($$result, "AIAssistant", AIAssistant, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AIAssistant",
		"client:component-export": "AIAssistant"
	})}` })}`;
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/index.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
