import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { i as Navbar, n as WhatsAppButton, r as Footer, t as AIAssistant } from "./AIAssistant_CXcAPky0.mjs";
import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Award, BadgeCheck, Briefcase, Calendar, Check, CheckCircle, ChevronLeft, ChevronRight, Clock, FileText, Loader2, Lock, MapPin, ShieldCheck, Sparkle, Sparkles, Star, Sun, Sunrise, Sunset, Trophy, University, Users, Video } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/BookConsultation.tsx
var GOALS = [
	{
		id: "germany",
		label: "Study in Germany",
		desc: "Tuition-free public universities & DAAD opportunities",
		icon: MapPin,
		flag: "🇩🇪",
		gradient: "from-blue-500 to-cyan-400",
		successRate: "92% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "rahul",
		countries: ["Germany"]
	},
	{
		id: "canada",
		label: "Study in Canada",
		desc: "PGWP opportunities & SDS pathway",
		icon: MapPin,
		flag: "🇨🇦",
		gradient: "from-red-500 to-orange-400",
		successRate: "94% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "ananya",
		countries: ["Canada"]
	},
	{
		id: "uk",
		label: "Study in UK",
		desc: "Russell Group universities & scholarships",
		icon: MapPin,
		flag: "🇬🇧",
		gradient: "from-blue-600 to-blue-400",
		successRate: "91% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "ananya",
		countries: ["UK"]
	},
	{
		id: "usa",
		label: "Study in USA",
		desc: "STEM programs & OPT pathway",
		icon: MapPin,
		flag: "🇺🇸",
		gradient: "from-indigo-600 to-blue-500",
		successRate: "92% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "ananya",
		countries: ["USA"]
	},
	{
		id: "australia",
		label: "Study in Australia",
		desc: "Post-study work rights & top universities",
		icon: MapPin,
		flag: "🇦🇺",
		gradient: "from-green-500 to-emerald-400",
		successRate: "92% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "ananya",
		countries: ["Australia"]
	},
	{
		id: "ireland",
		label: "Study in Ireland",
		desc: "Tech industry opportunities & PR pathway",
		icon: MapPin,
		flag: "🇮🇪",
		gradient: "from-green-600 to-lime-500",
		successRate: "90% Success",
		duration: "60 min",
		price: "₹2,499",
		expertId: "rahul",
		countries: ["Ireland"]
	},
	{
		id: "scholarship",
		label: "Scholarship Assistance",
		desc: "DAAD, Chevening, Erasmus & full funding strategy",
		icon: Award,
		flag: "🏆",
		gradient: "from-amber-500 to-yellow-400",
		successRate: "95% Success",
		duration: "45 min",
		price: "₹1,999",
		expertId: "vikram",
		countries: ["Multiple"]
	},
	{
		id: "university",
		label: "University Selection",
		desc: "Shortlist best universities based on your profile",
		icon: University,
		flag: "🎯",
		gradient: "from-purple-500 to-violet-400",
		successRate: "93% Success",
		duration: "45 min",
		price: "₹1,999",
		expertId: "rahul",
		countries: ["Multiple"]
	},
	{
		id: "visa",
		label: "Visa Guidance",
		desc: "Document guidance & visa success strategy",
		icon: FileText,
		flag: "🛂",
		gradient: "from-sky-500 to-blue-400",
		successRate: "92% Success",
		duration: "45 min",
		price: "₹2,499",
		expertId: "vikram",
		countries: ["Multiple"]
	},
	{
		id: "career",
		label: "Career Planning",
		desc: "Post-study work rights & career roadmap",
		icon: Briefcase,
		flag: "💼",
		gradient: "from-rose-500 to-pink-400",
		successRate: "91% Success",
		duration: "45 min",
		price: "₹1,999",
		expertId: "ananya",
		countries: ["Global"]
	}
];
var EXPERTS = [
	{
		id: "rahul",
		name: "Rahul Mehta",
		role: "Sr. Education Expert & Germany Specialist",
		exp: "8+ Years",
		students: "2,500+",
		successRate: "92%",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
		languages: "English, Hindi, German",
		specialties: [
			"TUM & LMU Admissions",
			"APS Certificate",
			"Blocked Account Setup",
			"DAAD Scholarship Strategy"
		],
		flags: ["🇩🇪", "🇦🇺"],
		achievements: [
			"98% visa success rate",
			"Placed 500+ at TUM",
			"DAAD mentor since 2019"
		],
		rating: "4.9",
		reviews: "1,247"
	},
	{
		id: "ananya",
		name: "Ananya Sharma",
		role: "Senior Admissions Consultant & Europe Specialist",
		exp: "8+ Years",
		students: "2,100+",
		successRate: "90%",
		img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
		languages: "English, Hindi, Spanish",
		specialties: [
			"Russell Group Admissions",
			"Canada SDS Pathway",
			"Europe Public Unis",
			"SOP & LOR Writing"
		],
		flags: [
			"🇨🇦",
			"🇬🇧",
			"🇪🇺"
		],
		achievements: [
			"90% Success Rate",
			"Placed 300+ in UK/Canada",
			"SOP drafting expert"
		],
		rating: "4.8",
		reviews: "980"
	},
	{
		id: "vikram",
		name: "Vikram Singh",
		role: "Global Scholarship & Visa Expert",
		exp: "10+ Years",
		students: "1,800+",
		successRate: "94%",
		img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
		languages: "English, Hindi",
		specialties: [
			"Chevening Scholarships",
			"Erasmus Mundus Grants",
			"Commonwealth Awards",
			"Consulate Visa Mock Interviews"
		],
		flags: [
			"🇺🇸",
			"🇬🇧",
			"🇮🇳"
		],
		achievements: [
			"₹250Cr+ Scholarships secured",
			"94% success rate",
			"60+ Chevening winners"
		],
		rating: "4.9",
		reviews: "1,102"
	}
];
var AI_MATCH_PREVIEW = {
	germany: {
		universities: [
			"TUM Munich (QS #28)",
			"RWTH Aachen (QS #147)",
			"LMU Munich (QS #54)"
		],
		scholarshipPotential: "DAAD Scholarship, Deutschlandstipendium, Erasmus+",
		successRate: "92%",
		timeline: "6 – 8 Months",
		visaDifficulty: "Moderate",
		avgCosts: "€11,208/yr + €0 tuition"
	},
	canada: {
		universities: [
			"U of Toronto (QS #21)",
			"UBC (QS #38)",
			"McGill (QS #29)"
		],
		scholarshipPotential: "SDS Canada Merit, Entrance Bursaries",
		successRate: "94%",
		timeline: "4 – 6 Months",
		visaDifficulty: "Easy (SDS)",
		avgCosts: "CAD ~30,000/yr"
	},
	uk: {
		universities: [
			"Imperial College (QS #2)",
			"UCL (QS #9)",
			"Edinburgh (QS #27)"
		],
		scholarshipPotential: "Chevening, Commonwealth, GREAT Grants",
		successRate: "91%",
		timeline: "4 – 8 Months",
		visaDifficulty: "Moderate",
		avgCosts: "£25K – 35K/yr"
	},
	usa: {
		universities: [
			"MIT (QS #1)",
			"Stanford (QS #6)",
			"Harvard (QS #4)"
		],
		scholarshipPotential: "University Merit Aid, Fulbright Grant",
		successRate: "89%",
		timeline: "6 – 12 Months",
		visaDifficulty: "Challenging",
		avgCosts: "$35K – 60K/yr"
	},
	australia: {
		universities: [
			"Melbourne (QS #14)",
			"UNSW (QS #19)",
			"Sydney (QS #18)"
		],
		scholarshipPotential: "Australia Awards, RTP Scholarships",
		successRate: "92%",
		timeline: "3 – 6 Months",
		visaDifficulty: "Easy (GTE)",
		avgCosts: "AUD 33K – 45K/yr"
	},
	ireland: {
		universities: [
			"Trinity College (QS #98)",
			"UCD (QS #126)",
			"Dublin City Uni"
		],
		scholarshipPotential: "Government of Ireland, UCD Global Merit",
		successRate: "90%",
		timeline: "3 – 5 Months",
		visaDifficulty: "Moderate",
		avgCosts: "€18K – 25K/yr"
	},
	scholarship: {
		universities: [
			"Russell Group",
			"European Public Universities",
			"US Ivy Leagues"
		],
		scholarshipPotential: "Up to 100% Tuition + Monthly Stipend",
		successRate: "95%",
		timeline: "6 – 12 Months",
		visaDifficulty: "Moderate",
		avgCosts: "N/A (Fully Funded)"
	},
	university: {
		universities: ["Custom Shortlist (8 Matches)", "Reach, Target & Safe Unis"],
		scholarshipPotential: "Profile-dependent Merit Grants",
		successRate: "93%",
		timeline: "1 – 2 Months",
		visaDifficulty: "Post-Admission support",
		avgCosts: "Matched to your budget"
	},
	visa: {
		universities: ["Partner Academic Institutions"],
		scholarshipPotential: "Visa-specific Fee Waivers (where applicable)",
		successRate: "92%",
		timeline: "1 – 3 Months",
		visaDifficulty: "Managed / Direct Guidance",
		avgCosts: "Standard consulate fees"
	},
	career: {
		universities: ["Global Top Tier Corporate Partners"],
		scholarshipPotential: "Corporate placement sponsorships",
		successRate: "91%",
		timeline: "1 – 3 Sessions",
		visaDifficulty: "Transition guidance",
		avgCosts: "Coaching Included"
	}
};
var TIMEZONE_SLOTS = {
	IST: {
		suffix: "IST",
		label: "Asia/Kolkata"
	},
	EST: {
		suffix: "EST",
		label: "US/Eastern"
	},
	GMT: {
		suffix: "GMT",
		label: "Europe/London"
	},
	PST: {
		suffix: "PST",
		label: "US/Pacific"
	},
	AEDT: {
		suffix: "AEDT",
		label: "Australia/Sydney"
	}
};
var MORNING_SLOTS = [
	{
		time: "09:00 AM",
		label: "Early Bird Slot",
		popular: false,
		recommended: false
	},
	{
		time: "10:00 AM",
		label: "Morning Prime",
		popular: true,
		recommended: false
	},
	{
		time: "11:00 AM",
		label: "Late Morning",
		popular: false,
		recommended: true
	}
];
var AFTERNOON_SLOTS = [
	{
		time: "02:00 PM",
		label: "Mid-Day Slot",
		popular: false,
		recommended: false
	},
	{
		time: "03:00 PM",
		label: "Afternoon Prime",
		popular: true,
		recommended: false
	},
	{
		time: "04:00 PM",
		label: "Late Afternoon",
		popular: false,
		recommended: false
	}
];
var EVENING_SLOTS = [
	{
		time: "05:00 PM",
		label: "Early Evening",
		popular: false,
		recommended: true
	},
	{
		time: "06:00 PM",
		label: "Evening Prime",
		popular: true,
		recommended: false
	},
	{
		time: "07:00 PM",
		label: "Night Owl Slot",
		popular: false,
		recommended: false
	}
];
var BookConsultation = () => {
	const [selectedGoal, setSelectedGoal] = useState(null);
	const [selectedExpert, setSelectedExpert] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [timezone, setTimezone] = useState("IST");
	const [customerName, setCustomerName] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");
	const [customerPhone, setCustomerPhone] = useState("");
	const [isAnalyzing, setIsAnalyzing] = useState(false);
	const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [bookingError, setBookingError] = useState("");
	const [bookingId, setBookingId] = useState("");
	const goalSectionRef = useRef(null);
	const aiMatchSectionRef = useRef(null);
	const expertSectionRef = useRef(null);
	const dateTimeSectionRef = useRef(null);
	const confirmationSectionRef = useRef(null);
	const datesContainerRef = useRef(null);
	const selectedGoalData = useMemo(() => {
		return GOALS.find((g) => g.id === selectedGoal) || null;
	}, [selectedGoal]);
	const matchedExpert = useMemo(() => {
		if (!selectedGoalData) return null;
		return EXPERTS.find((e) => e.id === selectedGoalData.expertId) || null;
	}, [selectedGoalData]);
	const aiMatchData = useMemo(() => {
		if (!selectedGoal) return null;
		return AI_MATCH_PREVIEW[selectedGoal] || null;
	}, [selectedGoal]);
	const handleGoalSelect = (goalId) => {
		setSelectedGoal(goalId);
		const targetGoal = GOALS.find((g) => g.id === goalId);
		if (targetGoal) {
			const match = EXPERTS.find((e) => e.id === targetGoal.expertId);
			if (match) setSelectedExpert(match);
		}
		setIsAnalyzing(true);
		setTimeout(() => {
			setIsAnalyzing(false);
			setTimeout(() => {
				expertSectionRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}, 100);
		}, 750);
	};
	const handleExpertSelect = (expert) => {
		setSelectedExpert(expert);
		setTimeout(() => {
			dateTimeSectionRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 150);
	};
	const handleDateSelect = (date) => {
		setSelectedDate(date);
		if (selectedTime) setTimeout(() => {
			confirmationSectionRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}, 150);
	};
	const handleTimeSelect = (time) => {
		setSelectedTime(time);
		if (selectedDate) setTimeout(() => {
			confirmationSectionRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}, 150);
	};
	const handleConfirmBooking = async () => {
		if (!selectedGoal || !selectedExpert || !selectedDate || !selectedTime) return;
		if (!customerName.trim() || !customerEmail.trim()) {
			setBookingError("Please enter your name and email");
			return;
		}
		setIsSubmitting(true);
		setBookingError("");
		setBookingId("");
		try {
			const res = await fetch("/api/consultation/book", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					goalId: selectedGoal,
					goalLabel: selectedGoalData?.label || "",
					expertId: selectedExpert.id,
					expertName: selectedExpert.name,
					customerName: customerName.trim(),
					customerEmail: customerEmail.trim(),
					customerPhone: customerPhone.trim(),
					selectedDate: selectedDate.toISOString().split("T")[0],
					selectedTime,
					timezone,
					price: selectedGoalData?.price || "",
					duration: selectedGoalData?.duration || ""
				})
			});
			const data = await res.json();
			if (res.ok) {
				setBookingId(data.bookingId || "");
				setShowSuccessOverlay(true);
			} else setBookingError(data.error || "Booking failed. Please try again.");
		} catch {
			setBookingError("Network error. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleReset = () => {
		setSelectedGoal(null);
		setSelectedExpert(null);
		setSelectedDate(null);
		setSelectedTime(null);
		setShowSuccessOverlay(false);
		setCustomerName("");
		setCustomerEmail("");
		setCustomerPhone("");
		setBookingError("");
		setBookingId("");
		goalSectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const activeStep = useMemo(() => {
		if (!selectedGoal) return 1;
		if (!selectedExpert) return 2;
		if (!selectedDate || !selectedTime) return 3;
		if (!customerName.trim() || !customerEmail.trim()) return 3;
		return 4;
	}, [
		selectedGoal,
		selectedExpert,
		selectedDate,
		selectedTime,
		customerName,
		customerEmail
	]);
	const horizontalDates = useMemo(() => {
		const dates = [];
		const today = /* @__PURE__ */ new Date();
		for (let i = 0; i < 14; i++) {
			const d = new Date(today);
			d.setDate(today.getDate() + i);
			dates.push(d);
		}
		return dates;
	}, []);
	const scrollDates = (direction) => {
		if (datesContainerRef.current) datesContainerRef.current.scrollBy({
			left: direction === "left" ? -240 : 240,
			behavior: "smooth"
		});
	};
	const formatDateString = (date) => {
		if (!date) return "Select Date";
		return date.toLocaleDateString("en-US", {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
	};
	const handleStickyCardCTA = () => {
		if (activeStep === 1 && goalSectionRef.current) goalSectionRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		else if (activeStep === 2 && expertSectionRef.current) expertSectionRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		else if (activeStep === 3 && dateTimeSectionRef.current) dateTimeSectionRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		else if (activeStep === 4 && confirmationSectionRef.current) confirmationSectionRef.current.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans antialiased relative selection:bg-primary/10 selection:text-primary pb-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 relative z-10",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-8 flex flex-col justify-start",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-4 hover:bg-primary/15 transition-all",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }), "Premium Education Strategy Session"]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "max-w-[700px]",
								children: /* @__PURE__ */ jsxs("h1", {
									className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4",
									children: [
										"Book Your Personalized ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent italic font-serif pr-2",
											children: "Global Education"
										}),
										" ",
										/* @__PURE__ */ jsx("br", {}),
										"Strategy Session"
									]
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed mb-6",
								children: "Receive a personalized roadmap covering universities, scholarships, admissions, visas and career opportunities — crafted by senior country experts."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
								children: [
									{
										label: "15,000+",
										desc: "Students Guided",
										icon: Users,
										color: "bg-primary/10 text-primary border-primary/5"
									},
									{
										label: "95%",
										desc: "Visa Success",
										icon: ShieldCheck,
										color: "bg-emerald-50 text-emerald-600 border-emerald-100"
									},
									{
										label: "₹250Cr+",
										desc: "Scholarships Won",
										icon: Trophy,
										color: "bg-amber-50 text-amber-600 border-amber-100"
									},
									{
										label: "500+",
										desc: "University Partners",
										icon: University,
										color: "bg-blue-50 text-blue-600 border-blue-100"
									}
								].map((metric, i) => {
									const Icon = metric.icon;
									return /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col bg-white border border-slate-100 p-4 rounded-2xl shadow-xs transition-transform duration-300 hover:-translate-y-0.5",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: `w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${metric.color}`,
												children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-base sm:text-lg font-extrabold text-slate-900 leading-tight",
												children: metric.label
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5",
												children: metric.desc
											})
										]
									}, i);
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-400 border-t border-slate-100 pt-4",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-amber-400 fill-amber-400" }), "4.9/5 Google Rating"]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-slate-200",
										children: "|"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "w-4 h-4 text-primary" }), "ISO 27001 Certified"]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-slate-200",
										children: "|"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5 text-slate-400" }), "Data Protected & Secure"]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-4 flex justify-center lg:justify-end lg:sticky lg:top-[120px] z-20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full max-w-[340px] bg-white border border-slate-200/80 rounded-3xl p-5 shadow-xl shadow-slate-200/40 relative overflow-hidden transition-all duration-300",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-4 border-b border-slate-100 pb-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-bold text-slate-800 tracking-tight uppercase",
										children: "Your Consultation"
									}), /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 rounded-full px-2 py-0.5",
										children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" }), "23 bookings today"]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between gap-1 mb-5 relative px-1",
									children: [
										{
											stepNum: 1,
											label: "Goal"
										},
										{
											stepNum: 2,
											label: "Expert"
										},
										{
											stepNum: 3,
											label: "Date/Time"
										},
										{
											stepNum: 4,
											label: "Review"
										}
									].map((s, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsxs("div", {
										className: "flex flex-col items-center z-10",
										children: [/* @__PURE__ */ jsx("div", {
											className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeStep > s.stepNum ? "bg-primary text-white" : activeStep === s.stepNum ? "bg-primary text-white shadow-md shadow-primary/20 ring-4 ring-primary/10" : "bg-slate-100 text-slate-400"}`,
											children: activeStep > s.stepNum ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }) : s.stepNum
										}), /* @__PURE__ */ jsx("span", {
											className: `text-[8px] font-bold mt-1 tracking-tight ${activeStep >= s.stepNum ? "text-primary" : "text-slate-400"}`,
											children: s.label
										})]
									}), i < 3 && /* @__PURE__ */ jsx("div", {
										className: "flex-1 h-[2px] -mt-5 bg-slate-100 relative",
										children: /* @__PURE__ */ jsx("div", {
											className: `absolute inset-y-0 left-0 bg-primary transition-all duration-500`,
											style: { width: activeStep > s.stepNum ? "100%" : "0%" }
										})
									})] }, s.stepNum))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mb-4 bg-slate-50 border border-slate-100/50 rounded-2xl p-3",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block",
										children: [
											"STEP ",
											activeStep,
											" OF 4"
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-xs font-bold text-slate-800 mt-0.5 block",
										children: [
											activeStep === 1 && "Select Your Goal",
											activeStep === 2 && "Choose Your Expert",
											activeStep === 3 && "Date, Time & Contact",
											activeStep === 4 && "Review & Confirm"
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2 mb-4 border-b border-slate-100 pb-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-base leading-none",
													children: selectedGoalData?.flag || "🎯"
												}), /* @__PURE__ */ jsx("span", {
													className: `font-semibold ${selectedGoalData ? "text-slate-800" : "text-slate-400"}`,
													children: selectedGoalData ? selectedGoalData.label : "Choose goal..."
												})]
											}), selectedGoalData && /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-500 shrink-0" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [selectedExpert ? /* @__PURE__ */ jsx("div", {
													className: "w-5 h-5 rounded-full overflow-hidden border border-white shadow-xs",
													children: /* @__PURE__ */ jsx("img", {
														src: selectedExpert.img,
														className: "w-full h-full object-cover"
													})
												}) : /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ jsx("span", {
													className: `font-semibold ${selectedExpert ? "text-slate-800" : "text-slate-400"}`,
													children: selectedExpert ? selectedExpert.name : "Choose expert..."
												})]
											}), selectedExpert && /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-500 shrink-0" })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between text-xs p-2.5 rounded-xl border border-slate-100/80 bg-slate-50/50",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ jsx("span", {
													className: `font-semibold ${selectedDate ? "text-slate-800" : "text-slate-400"}`,
													children: selectedDate ? `${formatDateString(selectedDate)} ${selectedTime ? `@ ${selectedTime}` : ""}` : "Choose date & time..."
												})]
											}), selectedDate && selectedTime && /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-emerald-500 shrink-0" })]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mb-4 space-y-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "bg-emerald-50/80 border border-emerald-100 rounded-xl p-2.5 text-center",
										children: /* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold text-emerald-800 leading-snug block",
											children: "🛡️ 100% Money-Back Guarantee"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center gap-3 text-[8px] text-slate-400 font-bold uppercase tracking-wider pt-1",
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-0.5",
												children: [/* @__PURE__ */ jsx(Lock, { className: "w-2.5 h-2.5" }), " 256-bit Encrypted"]
											}),
											/* @__PURE__ */ jsx("span", { children: "•" }),
											/* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-0.5",
												children: [/* @__PURE__ */ jsx(Video, { className: "w-2.5 h-2.5" }), " Video Consultation"]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-0.5 text-amber-400 mb-1",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400" }, i))
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[10px] text-slate-500 leading-relaxed italic",
										children: "“Rahul Mehta provided incredible guidance — helped me secure admission to my dream university!”"
									})]
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: handleStickyCardCTA,
									disabled: activeStep === 1 && !selectedGoal,
									className: `w-full py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${activeStep === 1 ? selectedGoal ? "bg-primary text-white hover:bg-secondary shadow-primary/10" : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" : activeStep === 2 ? "bg-primary text-white hover:bg-secondary shadow-primary/10" : activeStep === 3 ? selectedDate && selectedTime ? "bg-primary text-white hover:bg-secondary shadow-primary/10" : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" : "bg-primary text-white hover:bg-secondary shadow-primary/10"}`,
									children: [
										activeStep === 1 && "Select a Goal below to Continue",
										activeStep === 2 && "Proceed to Select Expert",
										activeStep === 3 && (selectedDate && selectedTime ? "Review Booking" : "Select Date & Time"),
										activeStep === 4 && "Review Selections Below",
										/* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
									]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					ref: goalSectionRef,
					id: "goal-section",
					className: "scroll-mt-28 mb-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
							children: "1. Choose Your Goal"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-slate-500 mt-1",
							children: "Select the area you need expert guidance in"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: GOALS.map((goal) => {
							const Icon = goal.icon;
							const isSelected = selectedGoal === goal.id;
							return /* @__PURE__ */ jsxs("button", {
								onClick: () => handleGoalSelect(goal.id),
								className: `group relative text-left p-5 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between h-[220px] overflow-hidden ${isSelected ? "border-primary ring-2 ring-primary/10 shadow-lg shadow-primary/5 bg-primary/[0.01]" : "border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md"}`,
								children: [
									isSelected && /* @__PURE__ */ jsx("span", {
										className: "absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-md",
										children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-white" })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "flex items-start justify-between",
										children: /* @__PURE__ */ jsx("div", {
											className: `w-10 h-10 rounded-xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center text-white shadow-xs`,
											children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "my-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5 mb-1.5 flex-wrap",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-base leading-none",
												children: goal.flag
											}), /* @__PURE__ */ jsx("span", {
												className: "font-extrabold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-base truncate max-w-[80%]",
												children: goal.label
											})]
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs text-slate-400 font-medium line-clamp-2 leading-relaxed",
											children: goal.desc
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between border-t border-slate-100 pt-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[9px] font-extrabold text-emerald-600 bg-emerald-50/80 rounded px-1.5 py-0.5 uppercase tracking-wide",
											children: goal.successRate
										}), /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-0.5 text-[9px] text-slate-400 font-bold uppercase tracking-wider",
											children: [
												/* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }),
												" ",
												goal.duration
											]
										})]
									})
								]
							}, goal.id);
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					ref: aiMatchSectionRef,
					className: "scroll-mt-28 mb-12",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: selectedGoal && /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: { duration: .4 },
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-3",
										children: [/* @__PURE__ */ jsx(Sparkle, { className: "w-3.5 h-3.5 fill-indigo-100" }), "AI Profiler Engine Active"]
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
										children: "2. AI Match Preview"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-slate-500 mt-1",
										children: "Matched details based on your chosen strategy"
									})
								]
							}), isAnalyzing ? /* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-200/80 rounded-3xl p-10 text-center shadow-lg relative overflow-hidden",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden",
									children: /* @__PURE__ */ jsx(motion.div, {
										initial: { width: "0%" },
										animate: { width: "100%" },
										transition: {
											duration: .7,
											ease: "easeInOut"
										},
										className: "h-full bg-gradient-to-r from-primary to-accent"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center justify-center gap-4",
									children: [/* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", {
										className: "text-sm font-extrabold text-slate-900 uppercase tracking-wider",
										children: "Analyzing Profile Database..."
									}) })]
								})]
							}) : /* @__PURE__ */ jsxs("div", {
								className: "bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row items-center gap-6 justify-between",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 shrink-0 min-w-[220px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-14 h-14 rounded-2xl overflow-hidden shadow-md border-2 border-white shrink-0",
											children: /* @__PURE__ */ jsx("img", {
												src: matchedExpert?.img,
												className: "w-full h-full object-cover"
											})
										}), /* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
												children: "Recommended Expert"
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "font-extrabold text-slate-900 text-sm mt-0.5",
												children: matchedExpert?.name
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-[10px] text-primary font-bold",
												children: matchedExpert?.role
											})
										] })]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden lg:block w-px h-10 bg-slate-200" }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 shrink-0",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "relative w-14 h-14 flex items-center justify-center",
											children: [/* @__PURE__ */ jsxs("svg", {
												className: "w-full h-full transform -rotate-90",
												children: [/* @__PURE__ */ jsx("circle", {
													cx: "28",
													cy: "28",
													r: "22",
													className: "stroke-slate-200",
													strokeWidth: "4",
													fill: "transparent"
												}), /* @__PURE__ */ jsx("circle", {
													cx: "28",
													cy: "28",
													r: "22",
													className: "stroke-primary",
													strokeWidth: "4",
													fill: "transparent",
													strokeDasharray: 2 * Math.PI * 22,
													strokeDashoffset: 2 * Math.PI * 22 * (1 - parseInt(aiMatchData?.successRate || "90") / 100)
												})]
											}), /* @__PURE__ */ jsx("span", {
												className: "absolute text-xs font-extrabold text-slate-900",
												children: aiMatchData?.successRate
											})]
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
											children: "Success Probability"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-emerald-600 uppercase tracking-wide block mt-0.5",
											children: "High Chance"
										})] })]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden lg:block w-px h-10 bg-slate-200" }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-[200px]",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1",
											children: "Top Universities"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex flex-wrap gap-1.5",
											children: aiMatchData?.universities.map((uni, i) => /* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-800 bg-white border border-slate-200/50 rounded-md px-2 py-0.5",
												children: uni
											}, i))
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden lg:block w-px h-10 bg-slate-200" }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-[180px]",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
											children: "Scholarship Opportunities"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs font-bold text-slate-800 leading-snug truncate mt-1",
											children: aiMatchData?.scholarshipPotential
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden lg:block w-px h-10 bg-slate-200" }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2.5 shrink-0",
										children: [/* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-slate-400 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
											children: "Estimated Timeline"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-bold text-slate-800 block mt-0.5",
											children: aiMatchData?.timeline
										})] })]
									})
								]
							})]
						})
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					ref: expertSectionRef,
					className: "scroll-mt-28 mb-12",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-between mb-6 flex-wrap gap-2",
						children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
							children: "3. Choose Your Expert"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-slate-500 mt-1",
							children: "Book a session with one of our top-rated advisors"
						})] })
					}), !selectedGoal ? /* @__PURE__ */ jsxs("div", {
						className: "bg-slate-50/50 border border-slate-100 rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[300px] mb-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center mb-4 text-slate-400 border border-slate-200/55",
								children: /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-bold text-slate-800 mb-2",
								children: "Select your goal to start booking."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed",
								children: "You must first select a strategy goal before matching with an expert advisor."
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: (e) => {
									e.preventDefault();
									document.getElementById("goal-section")?.scrollIntoView({ behavior: "smooth" });
								},
								className: "px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors cursor-pointer border-0 outline-none",
								children: "Choose Goal"
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch animate-fadeIn",
						children: EXPERTS.map((expert) => {
							const isMatch = matchedExpert?.id === expert.id;
							const isSelected = selectedExpert?.id === expert.id;
							return /* @__PURE__ */ jsxs("div", {
								className: `bg-white border rounded-3xl p-5 shadow-xs transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full ${isSelected ? "border-primary ring-2 ring-primary/10 shadow-lg shadow-primary/5 bg-primary/[0.005]" : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"}`,
								children: [
									isMatch && /* @__PURE__ */ jsx("span", {
										className: "absolute top-4 right-4 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider",
										children: "Top Match"
									}),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-4 mb-4",
											children: [/* @__PURE__ */ jsx("div", {
												className: "w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm shrink-0",
												children: /* @__PURE__ */ jsx("img", {
													src: expert.img,
													alt: expert.name,
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ jsx("h3", {
														className: "font-extrabold text-slate-900 text-sm",
														children: expert.name
													}), /* @__PURE__ */ jsx(BadgeCheck, { className: "w-4 h-4 text-primary shrink-0" })]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[10px] text-slate-500 mt-0.5 leading-snug",
													children: expert.role
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-1 text-[9px] text-slate-400 font-bold mt-1",
													children: [
														/* @__PURE__ */ jsx(Star, { className: "w-3 h-3 text-amber-400 fill-amber-400" }),
														/* @__PURE__ */ jsx("span", {
															className: "text-slate-700",
															children: expert.rating
														}),
														/* @__PURE__ */ jsxs("span", { children: [
															"(",
															expert.reviews,
															")"
														] })
													]
												})
											] })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-3 gap-2 bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-4 text-center",
											children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
													className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
													children: "Experience"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[10px] font-extrabold text-slate-700 mt-0.5 block",
													children: expert.exp
												})] }),
												/* @__PURE__ */ jsxs("div", {
													className: "border-l border-slate-200",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
														children: "Students"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[10px] font-extrabold text-slate-700 mt-0.5 block",
														children: expert.students
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "border-l border-slate-200",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block",
														children: "Success"
													}), /* @__PURE__ */ jsx("span", {
														className: "text-[10px] font-extrabold text-slate-700 mt-0.5 block",
														children: expert.successRate
													})]
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mb-4",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[8px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5",
												children: "Specialization"
											}), /* @__PURE__ */ jsx("div", {
												className: "flex flex-wrap gap-1",
												children: expert.specialties.map((spec, i) => /* @__PURE__ */ jsx("span", {
													className: "text-[9px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/50 rounded-md px-1.5 py-0.5",
													children: spec
												}, i))
											})]
										})
									] }),
									/* @__PURE__ */ jsx("button", {
										onClick: () => handleExpertSelect(expert),
										className: `w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer mt-auto ${isSelected ? "bg-primary text-white hover:bg-secondary" : "bg-white border border-slate-200 text-slate-700 hover:border-primary hover:text-primary"}`,
										children: isSelected ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }), " Booked"] }) : "Book Expert"
									})
								]
							}, expert.id);
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
					children: [/* @__PURE__ */ jsxs("div", {
						ref: dateTimeSectionRef,
						className: "lg:col-span-8 scroll-mt-28",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-6 flex-wrap gap-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
								children: "4. Pick Date & Time"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-500 mt-1",
								children: "Select a date and a slot in your timezone"
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs text-slate-400 font-bold uppercase tracking-wider",
									children: "Timezone:"
								}), /* @__PURE__ */ jsx("select", {
									value: timezone,
									onChange: (e) => setTimezone(e.target.value),
									className: "bg-white border border-slate-200/80 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 shadow-xs focus:ring-1 focus:ring-primary focus:outline-none",
									children: Object.entries(TIMEZONE_SLOTS).map(([key, value]) => /* @__PURE__ */ jsxs("option", {
										value: key,
										children: [
											key,
											" (",
											value.label,
											")"
										]
									}, key))
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-6 relative",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "font-extrabold text-slate-900 text-xs uppercase tracking-wider",
										children: "Select Date"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ jsx("button", {
											onClick: () => scrollDates("left"),
											className: "p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 cursor-pointer",
											children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
										}), /* @__PURE__ */ jsx("button", {
											onClick: () => scrollDates("right"),
											className: "p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500 cursor-pointer",
											children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
										})]
									})]
								}), /* @__PURE__ */ jsx("div", {
									ref: datesContainerRef,
									className: "flex gap-3 overflow-x-auto pb-2.5 hide-scrollbar scroll-smooth snap-x",
									children: horizontalDates.map((date, idx) => {
										const isSelected = selectedDate ? selectedDate.toDateString() === date.toDateString() : false;
										return /* @__PURE__ */ jsxs("button", {
											onClick: () => handleDateSelect(date),
											className: `flex flex-col items-center justify-center min-w-[70px] py-3 rounded-2xl border text-center transition-all cursor-pointer snap-start ${isSelected ? "bg-primary border-primary text-white shadow-md shadow-primary/20" : "border-slate-200/80 bg-white hover:border-slate-300 text-slate-700"}`,
											children: [
												/* @__PURE__ */ jsx("span", {
													className: `text-[9px] font-extrabold uppercase tracking-wide ${isSelected ? "text-white/80" : "text-slate-400"}`,
													children: date.toLocaleDateString("en-US", { weekday: "short" })
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-base font-extrabold mt-0.5",
													children: date.getDate()
												}),
												/* @__PURE__ */ jsx("span", {
													className: `text-[8px] font-bold ${isSelected ? "text-white/60" : "text-slate-400"}`,
													children: date.toLocaleDateString("en-US", { month: "short" })
												})
											]
										}, idx);
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "border-t border-slate-100 pt-6",
								children: [/* @__PURE__ */ jsxs("h4", {
									className: "font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-slate-400" }), "Available Slots"]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 md:grid-cols-3 gap-6",
									children: [
										{
											title: "Morning",
											icon: Sunrise,
											slots: MORNING_SLOTS
										},
										{
											title: "Afternoon",
											icon: Sun,
											slots: AFTERNOON_SLOTS
										},
										{
											title: "Evening",
											icon: Sunset,
											slots: EVENING_SLOTS
										}
									].map((group) => {
										const SlotIcon = group.icon;
										return /* @__PURE__ */ jsxs("div", {
											className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-4",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "text-[9px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3 border-b border-slate-100 pb-1.5",
												children: [/* @__PURE__ */ jsx(SlotIcon, { className: "w-3.5 h-3.5 text-slate-400" }), group.title]
											}), /* @__PURE__ */ jsx("div", {
												className: "flex flex-col gap-2",
												children: group.slots.map((slot) => {
													const isTimeSelected = selectedTime === slot.time;
													const tzoneSuffix = TIMEZONE_SLOTS[timezone].suffix;
													return /* @__PURE__ */ jsxs("button", {
														onClick: () => handleTimeSelect(slot.time),
														className: `w-full py-2 px-3 text-left rounded-xl border text-[10px] font-bold transition-all relative cursor-pointer flex items-center justify-between ${isTimeSelected ? "border-primary bg-primary text-white shadow-md shadow-primary/10" : "border-slate-200/80 bg-white hover:border-slate-300 text-slate-700"}`,
														children: [
															/* @__PURE__ */ jsxs("span", { children: [
																slot.time,
																" ",
																/* @__PURE__ */ jsx("span", {
																	className: `text-[8px] ml-0.5 uppercase tracking-wide font-medium ${isTimeSelected ? "text-white/80" : "text-slate-400"}`,
																	children: tzoneSuffix
																})
															] }),
															slot.popular && /* @__PURE__ */ jsx("span", {
																className: `px-1.5 py-0.5 rounded text-[5px] font-extrabold uppercase ${isTimeSelected ? "bg-white/20 text-white" : "bg-primary text-white"}`,
																children: "Popular"
															}),
															slot.recommended && /* @__PURE__ */ jsx("span", {
																className: `px-1.5 py-0.5 rounded text-[5px] font-extrabold uppercase ${isTimeSelected ? "bg-white/20 text-white" : "bg-emerald-500 text-white"}`,
																children: "Best"
															})
														]
													}, slot.time);
												})
											})]
										}, group.title);
									})
								})]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						ref: confirmationSectionRef,
						className: "lg:col-span-4 scroll-mt-28",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight",
								children: "5. Review & Confirm"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-500 mt-1",
								children: "Live updates based on selections"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/80 rounded-3xl p-5 shadow-lg shadow-slate-200/20",
							children: [
								/* @__PURE__ */ jsx("h4", {
									className: "font-extrabold text-slate-950 text-xs uppercase tracking-wider mb-4 border-b border-slate-100 pb-3",
									children: "Live Confirmation Summary"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-3.5 mb-5 text-xs",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Goal"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900",
												children: selectedGoalData ? `${selectedGoalData.flag} ${selectedGoalData.label}` : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "Not Selected"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Expert"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900 flex items-center gap-1.5",
												children: selectedExpert ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
													className: "w-4 h-4 rounded-full overflow-hidden inline-block border border-slate-100",
													children: /* @__PURE__ */ jsx("img", {
														src: selectedExpert.img,
														className: "w-full h-full object-cover"
													})
												}), /* @__PURE__ */ jsx("span", { children: selectedExpert.name })] }) : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "Not Assigned"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Country"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900",
												children: selectedGoalData ? selectedGoalData.countries.join(", ") : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "N/A"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Date"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900",
												children: selectedDate ? formatDateString(selectedDate) : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "Not Selected"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Time Slot"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900",
												children: selectedTime ? `${selectedTime} (${timezone})` : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "Not Selected"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between border-b border-slate-50 pb-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Duration"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-bold text-slate-900",
												children: selectedGoalData ? selectedGoalData.duration : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "N/A"
												})
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between pt-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
												children: "Price"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-sm font-extrabold text-primary",
												children: selectedGoalData ? selectedGoalData.price : /* @__PURE__ */ jsx("span", {
													className: "text-slate-300 font-medium italic",
													children: "N/A"
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2.5 mb-4 border-b border-slate-100 pb-4",
									children: [
										/* @__PURE__ */ jsx("input", {
											type: "text",
											value: customerName,
											onChange: (e) => setCustomerName(e.target.value),
											placeholder: "Your full name *",
											className: "w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
										}),
										/* @__PURE__ */ jsx("input", {
											type: "email",
											value: customerEmail,
											onChange: (e) => setCustomerEmail(e.target.value),
											placeholder: "Your email *",
											className: "w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
										}),
										/* @__PURE__ */ jsx("input", {
											type: "tel",
											value: customerPhone,
											onChange: (e) => setCustomerPhone(e.target.value),
											placeholder: "Phone (optional)",
											className: "w-full text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-primary"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bg-emerald-50/80 border border-emerald-100 rounded-2xl p-3 mb-5",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold text-emerald-800 flex items-center gap-1",
										children: "🛡️ Satisfaction Guarantee"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[9px] text-emerald-600 mt-1 leading-normal font-semibold",
										children: "Not completely satisfied with your roadmap? Get a full refund within 24 hours of your call."
									})]
								}),
								bookingError && /* @__PURE__ */ jsxs("div", {
									className: "mb-4 p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-[10px] font-bold text-rose-600 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5 shrink-0" }), bookingError]
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: handleConfirmBooking,
									disabled: !selectedGoal || !selectedExpert || !selectedDate || !selectedTime || isSubmitting,
									className: `w-full py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${selectedGoal && selectedExpert && selectedDate && selectedTime && !isSubmitting ? "bg-primary text-white hover:bg-secondary hover:scale-[1.01] shadow-primary/20 cursor-pointer" : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none border border-slate-200"}`,
									children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Loader2, { className: "w-3.5 h-3.5 animate-spin" }), " Submitting..."] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5" }), " Confirm Booking"] })
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[9px] text-slate-400 font-bold uppercase tracking-wider text-center block mt-3 flex items-center justify-center gap-1",
									children: "🔒 Secure & Encrypted Payments"
								})
							]
						})]
					})]
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: showSuccessOverlay && /* @__PURE__ */ jsx(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4",
			children: /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					scale: .95,
					y: 20
				},
				animate: {
					scale: 1,
					y: 0
				},
				exit: {
					scale: .95,
					y: 20
				},
				className: "bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 shadow-md",
						children: /* @__PURE__ */ jsx(Check, { className: "w-8 h-8 text-emerald-500" })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-2",
						children: "Booking Confirmed!"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs sm:text-sm text-slate-400 text-center mb-6",
						children: "Your global education strategy session is scheduled. Check your email for access links."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3 mb-6 text-xs text-slate-700",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
									children: "Goal"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-slate-900",
									children: selectedGoalData?.label
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
									children: "Expert"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-slate-900",
									children: selectedExpert?.name
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
									children: "Time"
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-bold text-slate-900",
									children: [
										selectedTime,
										" (",
										timezone,
										")"
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
									children: "Date"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-bold text-slate-900",
									children: formatDateString(selectedDate)
								})]
							}),
							bookingId && /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-slate-400 uppercase tracking-wider text-[9px]",
									children: "Booking ID"
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-bold text-primary text-[9px] font-mono",
									children: [bookingId.slice(0, 8), "..."]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "bg-indigo-50 border border-indigo-100/50 rounded-2xl p-3.5 mb-8 flex items-start gap-3",
						children: [/* @__PURE__ */ jsx(Video, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h5", {
							className: "font-bold text-slate-900 text-xs",
							children: "Video Meet Access Link"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[10px] text-slate-500 leading-normal font-semibold mt-0.5",
							children: "A private Google Meet link has been generated and sent to you along with the session preparation guide."
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row gap-3",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: handleReset,
							className: "flex-1 py-3 bg-primary text-white font-bold rounded-2xl text-xs shadow-md shadow-primary/20 hover:bg-secondary hover:scale-[1.01] transition-all cursor-pointer text-center",
							children: "Book Another Session"
						}), /* @__PURE__ */ jsx("a", {
							href: "/",
							className: "flex-1 py-3 bg-slate-50 text-slate-700 font-bold border border-slate-200 rounded-2xl text-xs hover:bg-slate-100 transition-all text-center",
							children: "Return Home"
						})]
					})
				]
			})
		}) })]
	});
};
//#endregion
//#region src/pages/book-consultation.astro
var book_consultation_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BookConsultation,
	file: () => $$file,
	url: () => $$url
});
var $$BookConsultation = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Book Study Abroad Consultation | AtlasPath — Expert Roadmap Strategy Session",
		"description": "Schedule a personalized 1-on-1 strategy session with AtlasPath advisors. Shortlist universities, map budgets, verify scholarships, and review visa guidelines."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", Navbar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/Navbar",
		"client:component-export": "Navbar"
	})}${renderComponent($$result, "BookConsultation", BookConsultation, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/BookConsultation",
		"client:component-export": "BookConsultation"
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
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/book-consultation.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/book-consultation.astro";
var $$url = "/book-consultation";
//#endregion
//#region \0virtual:astro:page:src/pages/book-consultation@_@astro
var page = () => book_consultation_exports;
//#endregion
export { page };
