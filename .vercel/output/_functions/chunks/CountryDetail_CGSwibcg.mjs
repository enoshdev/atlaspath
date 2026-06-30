import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, Check, CheckCircle, ChevronDown, ChevronUp, Clock, Compass, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/CountryDetail.tsx
var RELATED_COUNTRIES = {
	germany: [
		{
			name: "Netherlands",
			flag: "🇳🇱",
			slug: "netherlands"
		},
		{
			name: "Austria",
			flag: "🇦🇹",
			slug: "netherlands"
		},
		{
			name: "Switzerland",
			flag: "🇨🇭",
			slug: "netherlands"
		}
	],
	canada: [
		{
			name: "Australia",
			flag: "🇦🇺",
			slug: "australia"
		},
		{
			name: "UK",
			flag: "🇬🇧",
			slug: "united-kingdom"
		},
		{
			name: "Ireland",
			flag: "🇮🇪",
			slug: "ireland"
		}
	],
	australia: [
		{
			name: "Canada",
			flag: "🇨🇦",
			slug: "canada"
		},
		{
			name: "New Zealand",
			flag: "🇳🇿",
			slug: "netherlands"
		},
		{
			name: "Ireland",
			flag: "🇮🇪",
			slug: "ireland"
		}
	],
	"united-kingdom": [
		{
			name: "Ireland",
			flag: "🇮🇪",
			slug: "ireland"
		},
		{
			name: "Canada",
			flag: "🇨🇦",
			slug: "canada"
		},
		{
			name: "USA",
			flag: "🇺🇸",
			slug: "united-states"
		}
	],
	"united-states": [
		{
			name: "Canada",
			flag: "🇨🇦",
			slug: "canada"
		},
		{
			name: "UK",
			flag: "🇬🇧",
			slug: "united-kingdom"
		},
		{
			name: "Australia",
			flag: "🇦🇺",
			slug: "australia"
		}
	],
	ireland: [
		{
			name: "UK",
			flag: "🇬🇧",
			slug: "united-kingdom"
		},
		{
			name: "Netherlands",
			flag: "🇳🇱",
			slug: "netherlands"
		},
		{
			name: "Canada",
			flag: "🇨🇦",
			slug: "canada"
		}
	],
	netherlands: [
		{
			name: "Germany",
			flag: "🇩🇪",
			slug: "germany"
		},
		{
			name: "Ireland",
			flag: "🇮🇪",
			slug: "ireland"
		},
		{
			name: "UK",
			flag: "🇬🇧",
			slug: "united-kingdom"
		}
	],
	singapore: [
		{
			name: "Australia",
			flag: "🇦🇺",
			slug: "australia"
		},
		{
			name: "Canada",
			flag: "🇨🇦",
			slug: "canada"
		},
		{
			name: "Netherlands",
			flag: "🇳🇱",
			slug: "netherlands"
		}
	]
};
var COUNTRY_DATA = {
	germany: {
		name: "Germany",
		flag: "🇩🇪",
		badgeText: "EUROPE'S TOP STUDY DESTINATION",
		whyTitle: "Why Study in Germany?",
		whyDesc: "Unlock unparalleled institutional value and career advantages in Europe.",
		landmarkImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "Bavaria, Germany",
		stats: [
			{
				value: "400K+",
				label: "Intl. Students"
			},
			{
				value: "18 Month",
				label: "Post Study Visa"
			},
			{
				value: "€0 - €3K",
				label: "Avg Public Fees"
			},
			{
				value: "#1",
				label: "Preferred in EU"
			}
		],
		highlights: [
			"Low or no tuition fees at public universities",
			"Top-ranked technical universities (TU9)",
			"Strong economy & robust job market",
			"High visa success rate (94%+)",
			"18-month post-study job seeker visa"
		],
		facts: [
			{
				label: "Capital",
				value: "Berlin"
			},
			{
				label: "Language",
				value: "German (English spoken)"
			},
			{
				label: "Currency",
				value: "Euro (€)"
			},
			{
				label: "Avg. Tuition",
				value: "€0 - €3,000 / yr (Public)"
			},
			{
				label: "Avg. Living Cost",
				value: "€850 - €1,200 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 20 hrs/week"
			},
			{
				label: "Post Study Visa",
				value: "18 Months"
			},
			{
				label: "Visa Process",
				value: "6 - 8 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "€48,000 - €56,000 / yr"
			}
		],
		universities: [
			{
				name: "Technical University of Munich",
				qsRank: 37,
				tuition: "Free (Semester fees €150)",
				scholarships: "DAAD, Heinrich Böll",
				programs: 220,
				color: "#3070B3",
				shortName: "TUM",
				image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Computer Science",
					"Data Science",
					"Automotive Engineering"
				]
			},
			{
				name: "RWTH Aachen University",
				qsRank: 106,
				tuition: "Free (Semester fees €300)",
				scholarships: "Deutschlandstipendium",
				programs: 160,
				color: "#006AB3",
				shortName: "RWTH",
				image: "https://placehold.co/600x400/006AB3/white?text=RWTH%20Aachen",
				popularCourses: [
					"Mechanical Engineering",
					"Electrical Engineering",
					"Computer Science"
				]
			},
			{
				name: "Heidelberg University",
				qsRank: 87,
				tuition: "Free (Semester fees €180)",
				scholarships: "Erasmus+, University Grants",
				programs: 140,
				color: "#9B1C1C",
				shortName: "HD",
				image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Medicine",
					"Natural Sciences",
					"Law"
				]
			},
			{
				name: "LMU Munich",
				qsRank: 54,
				tuition: "Free (Semester fees €150)",
				scholarships: "DAAD, LMU Merit",
				programs: 190,
				color: "#008C3A",
				shortName: "LMU",
				image: "https://placehold.co/600x400/008C3A/white?text=LMU%20Munich",
				popularCourses: [
					"Business Administration",
					"Law",
					"Psychology"
				]
			}
		],
		courses: [
			{
				name: "Computer Science",
				demand: "Very High Demand",
				avgSalary: "€58,000 / year",
				topUnis: "TUM, RWTH, LMU",
				scholarships: "DAAD, Deutschlandstipendium"
			},
			{
				name: "Mechanical Eng.",
				demand: "Very High Demand",
				avgSalary: "€56,200 / year",
				topUnis: "TUM, RWTH, Stuttgart",
				scholarships: "DAAD, Heinrich Böll"
			},
			{
				name: "AI & Data Science",
				demand: "Very High Demand",
				avgSalary: "€60,000 / year",
				topUnis: "TUM, Heidelberg, LMU",
				scholarships: "Deutschlandstipendium"
			},
			{
				name: "Electrical Eng.",
				demand: "High Demand",
				avgSalary: "€55,000 / year",
				topUnis: "RWTH, TUM",
				scholarships: "Erasmus+, University Grants"
			}
		],
		scholarships: [
			{
				name: "DAAD Scholarship",
				funding: "Up to €1,200 / month",
				eligibility: "Graduates with 2+ years of professional work experience",
				deadline: "Varies by region (usually Oct-Dec)"
			},
			{
				name: "Deutschlandstipendium",
				funding: "€300 / month",
				eligibility: "Outstanding academic record, open to all nationalities",
				deadline: "Varies by university (June-Aug)"
			},
			{
				name: "Erasmus+ Scholarship",
				funding: "Up to €10,000",
				eligibility: "Students enrolled in Erasmus joint master degrees",
				deadline: "Varies by course"
			},
			{
				name: "Heinrich Böll Foundation",
				funding: "Up to €850 / month",
				eligibility: "Outstanding academic record, commitment to social-democratic values",
				deadline: "March 1 & Sept 1"
			}
		],
		cities: [
			{
				name: "Munich",
				cost: "€1,200 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Munich"
			},
			{
				name: "Frankfurt",
				cost: "€1,150 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Frankfurt"
			},
			{
				name: "Berlin",
				cost: "€1,050 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Berlin"
			},
			{
				name: "Stuttgart",
				cost: "€1,000 / month",
				image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&auto=format&fit=crop&q=80"
			}
		],
		successStories: [{
			name: "Arjun Reddy",
			course: "MS in Data Science",
			university: "Technical University of Munich",
			outcome: "Placed as Data Scientist at BMW Group",
			quote: "AtlasPath guided me through university shortlisting, APS, and visa. Today I'm studying at one of Germany's top universities.",
			initials: "AR",
			color: "bg-indigo-600"
		}, {
			name: "Sneha Kapoor",
			course: "MS in Computer Science",
			university: "RWTH Aachen University",
			outcome: "Software Engineer at Siemens AG",
			quote: "The team helped me secure DAAD scholarship and smooth visa process. Highly recommended!",
			initials: "SK",
			color: "bg-[#6D4AFF]"
		}],
		faqs: [
			{
				q: "Can I study in Germany without IELTS or TOEFL?",
				a: "Yes, if your previous degree (e.g. Bachelor's) was taught entirely in English, many universities accept a Medium of Instruction (MOI) certificate. However, top-ranked public universities and standard visa guidelines strongly recommend submitting an IELTS (6.5+) score."
			},
			{
				q: "How much money is required for the German Blocked Account (Sperrkonto)?",
				a: "As of 2026/2027 guidelines, international students must deposit €11,904 inside a blocked account. This amount covers living costs for one full year, allowing you to withdraw €992 per month."
			},
			{
				q: "What is the APS Certificate, and is it mandatory?",
				a: "Yes! The Academic Evaluation Centre (APS) certificate verifies the authenticity of academic documents for students from India, China, and Vietnam. It is mandatory for securing university admission and booking a student visa appointment."
			},
			{
				q: "Can I work while studying in Germany?",
				a: "Yes, international students are legally allowed to work up to 140 full days or 280 half days per calendar year (roughly equivalent to 20 hours per week)."
			},
			{
				q: "Is learning the German language mandatory to study in Germany?",
				a: "If your program is English-taught, German language proficiency is not mandatory for admission. However, learning basic German (A1/A2 level) is highly recommended for daily life and securing local student jobs."
			}
		],
		visaSteps: [
			{
				title: "Receive Admission Letter",
				desc: "Get accepted from a recognized German university"
			},
			{
				title: "Blocked Account",
				desc: "Deposit €11,904 inside a registered Sperrkonto"
			},
			{
				title: "APS Certificate",
				desc: "Verify academic documents (mandatory for Indian students)"
			},
			{
				title: "Student Visa Appointment",
				desc: "Attend your visa interview at VFS/Consulate"
			},
			{
				title: "Travel & Arrival",
				desc: "Arrange flights and health insurance cover"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "€0 - €3,000",
				private: "€10,000 - €20,000"
			},
			{
				label: "Living Expenses",
				public: "€10,200 - €14,400",
				private: "€10,200 - €14,400"
			},
			{
				label: "Accommodation",
				public: "€4,200 - €6,000",
				private: "€4,200 - €6,000"
			},
			{
				label: "Food",
				public: "€2,500 - €3,600",
				private: "€2,500 - €3,600"
			},
			{
				label: "Health Insurance",
				public: "€1,200 - €1,500",
				private: "€1,200 - €1,500"
			},
			{
				label: "Transport",
				public: "€500 - €900",
				private: "€500 - €900"
			}
		],
		totalBudgetPublic: "€19,200 - €30,660",
		totalBudgetPrivate: "€29,200 - €47,660",
		workImpactNote: "You can work up to 20 hours / week (typical wage €13 - €18/hr) to easily offset your monthly living costs."
	},
	canada: {
		name: "Canada",
		flag: "🇨🇦",
		badgeText: "800,000+ INTERNATIONAL STUDENTS",
		whyTitle: "Why Study in Canada?",
		whyDesc: "Experience highly ranked universities, flexible post-grad work permits, and welcoming PR pathways.",
		landmarkImage: "https://placehold.co/800x400/002A5C/white?text=Toronto%2C%20Ontario",
		landmarkLabel: "Toronto, Ontario",
		stats: [
			{
				value: "800K+",
				label: "Intl. Students"
			},
			{
				value: "3 Years",
				label: "Post Study Visa"
			},
			{
				value: "CAD $16K+",
				label: "Avg Tuition"
			},
			{
				value: "Direct",
				label: "PR Pathways"
			}
		],
		highlights: [
			"Up to 3-Year Post Graduation Work Permit (PGWP)",
			"Straightforward Permanent Residency (PR) pathways",
			"World-class academic standards and campus resources",
			"Multicultural, highly safe student environments",
			"Ample research opportunities and high starting salaries"
		],
		facts: [
			{
				label: "Capital",
				value: "Ottawa"
			},
			{
				label: "Language",
				value: "English & French"
			},
			{
				label: "Currency",
				value: "Canadian Dollar (CAD)"
			},
			{
				label: "Avg. Tuition",
				value: "CAD $16,000 - $35,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "CAD $1,200 - $1,800 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 20 hrs/week"
			},
			{
				label: "Post Study Visa",
				value: "Up to 3 Years"
			},
			{
				label: "Visa Process",
				value: "4 - 8 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "CAD $55,000 - $75,000 / yr"
			}
		],
		universities: [
			{
				name: "University of Toronto",
				qsRank: 25,
				tuition: "CAD $45,690/yr",
				scholarships: "Lester B. Pearson",
				programs: 700,
				color: "#002A5C",
				shortName: "UofT",
				image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Computer Science",
					"MBA",
					"Data Science"
				]
			},
			{
				name: "University of British Columbia",
				qsRank: 34,
				tuition: "CAD $35,280/yr",
				scholarships: "UBC International Scholars",
				programs: 500,
				color: "#002145",
				shortName: "UBC",
				image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Engineering",
					"Business",
					"Forestry"
				]
			},
			{
				name: "McGill University",
				qsRank: 30,
				tuition: "CAD $32,000/yr",
				scholarships: "McGill Merit",
				programs: 400,
				color: "#ED1B2F",
				shortName: "McGill",
				image: "https://placehold.co/600x400/ED1B2F/white?text=McGill%20University",
				popularCourses: [
					"Medicine",
					"Law",
					"Computer Science"
				]
			},
			{
				name: "University of Waterloo",
				qsRank: 112,
				tuition: "CAD $42,000/yr",
				scholarships: "Waterloo Presidents",
				programs: 180,
				color: "#FFD54F",
				shortName: "UW",
				image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Computer Science",
					"Mathematics",
					"Co-op Engineering"
				]
			}
		],
		courses: [
			{
				name: "Computer Science",
				demand: "Very High Demand",
				avgSalary: "CAD $78,000 / year",
				topUnis: "UofT, Waterloo, UBC",
				scholarships: "Ontario Graduate"
			},
			{
				name: "MBA & Business",
				demand: "Very High Demand",
				avgSalary: "CAD $85,000 / year",
				topUnis: "Rotman, McGill, Ivey",
				scholarships: "Pearson Scholars"
			},
			{
				name: "AI & Data Science",
				demand: "Very High Demand",
				avgSalary: "CAD $82,000 / year",
				topUnis: "Waterloo, Toronto, UBC",
				scholarships: "Vanier CGS"
			},
			{
				name: "Healthcare & Pharma",
				demand: "High Demand",
				avgSalary: "CAD $72,000 / year",
				topUnis: "McGill, McMaster",
				scholarships: "UBC Scholars"
			}
		],
		scholarships: [
			{
				name: "Vanier CGS",
				funding: "CAD $50,000 / year",
				eligibility: "Doctoral candidates with stellar academic and research potential",
				deadline: "November 1"
			},
			{
				name: "Lester B. Pearson",
				funding: "Fully Funded (4 Years)",
				eligibility: "Outstanding international undergraduate applicants to UofT",
				deadline: "January 15"
			},
			{
				name: "Ontario Graduate Scholarship",
				funding: "CAD $15,000 / year",
				eligibility: "Master's or Doctoral students enrolled in Ontario universities",
				deadline: "Varies by university"
			},
			{
				name: "UBC International Scholars",
				funding: "Up to CAD $25,000 / year",
				eligibility: "Undergraduates demonstrating outstanding academic achievement",
				deadline: "January 15"
			}
		],
		cities: [
			{
				name: "Toronto",
				cost: "CAD $1,400 / month",
				image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Vancouver",
				cost: "CAD $1,500 / month",
				image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Montreal",
				cost: "CAD $1,100 / month",
				image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Ottawa",
				cost: "CAD $1,200 / month",
				image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80"
			}
		],
		successStories: [{
			name: "Sarah Jenkins",
			course: "Master of Business Administration",
			university: "University of Toronto",
			outcome: "Strategic Consultant at RBC Capital",
			quote: "The interactive comparison tool was crucial in helping me choose Canada over the UK based on post-study work paths.",
			initials: "SJ",
			color: "bg-[#6D4AFF]"
		}],
		faqs: [
			{
				q: "What is the PGWP, and how do I qualify?",
				a: "The Post-Graduation Work Permit (PGWP) allows students who graduated from eligible Canadian designated learning institutions (DLIs) to obtain an open work permit. The duration matches your program of study, up to a maximum of 3 years."
			},
			{
				q: "How much funds are required for the Canadian GIC?",
				a: "To demonstrate financial sufficiency for a student visa, applicants must buy a Guaranteed Investment Certificate (GIC) from a participating bank. Currently, the minimum required deposit is CAD $20,635."
			},
			{
				q: "Can I work off-campus while studying in Canada?",
				a: "Yes, international students with a valid study permit are legally allowed to work off-campus for up to 20 hours per week during academic terms, and full-time during official scheduled breaks."
			},
			{
				q: "What are the main pathways to Permanent Residency in Canada?",
				a: "Canada offers excellent PR routes like Express Entry (specifically the Canadian Experience Class), the Provincial Nominee Program (PNP), and the Federal Skilled Worker Program."
			}
		],
		visaSteps: [
			{
				title: "Secure DLI Letter",
				desc: "Receive an official Letter of Acceptance from a Canadian DLI"
			},
			{
				title: "Purchase GIC Account",
				desc: "Deposit CAD $20,635 into a GIC for proof of funds"
			},
			{
				title: "Pass Medical Exam",
				desc: "Undergo a medical examination by an approved panel physician"
			},
			{
				title: "Submit Study Permit",
				desc: "File your application online via the IRCC portal"
			},
			{
				title: "Biometrics & Visa Issuance",
				desc: "Complete biometric scans at VFS and receive passport stamp"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "CAD $16,000 - $35,000",
				private: "CAD $25,000 - $45,000"
			},
			{
				label: "Living Expenses",
				public: "CAD $12,000 - $18,000",
				private: "CAD $12,000 - $18,000"
			},
			{
				label: "Accommodation",
				public: "CAD $6,000 - $9,000",
				private: "CAD $6,000 - $9,000"
			},
			{
				label: "Food",
				public: "CAD $3,000 - $4,200",
				private: "CAD $3,000 - $4,200"
			},
			{
				label: "Health Insurance",
				public: "CAD $800 - $1,200",
				private: "CAD $800 - $1,200"
			},
			{
				label: "Transport",
				public: "CAD $1,000 - $1,500",
				private: "CAD $1,000 - $1,500"
			}
		],
		totalBudgetPublic: "CAD $28,000 - $53,000 / yr",
		totalBudgetPrivate: "CAD $37,000 - $63,000 / yr",
		workImpactNote: "You can work up to 20 hours / week (average wages CAD $16 - $22/hr) to support yourself during your stay."
	},
	australia: {
		name: "Australia",
		flag: "🇦🇺",
		badgeText: "TOP RANKED UNIVERSITIES & GRADUATE SALARIES",
		whyTitle: "Why Study in Australia?",
		whyDesc: "Immerse yourself in world-class research institutes, high graduate starting packages, and a vibrant lifestyle.",
		landmarkImage: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "Sydney Harbor, NSW",
		stats: [
			{
				value: "450K+",
				label: "Intl. Students"
			},
			{
				value: "2-4 Years",
				label: "Post Study Visa"
			},
			{
				value: "AUD $25K+",
				label: "Avg Tuition"
			},
			{
				value: "#3",
				label: "Preferred Globally"
			}
		],
		highlights: [
			"Post Study Work Visas allowing extended stay",
			"Highly ranked Group of Eight (Go8) research universities",
			"Attractive average graduate starting salaries",
			"Comprehensive student support and safe cities",
			"Perfect balance of academic work and beachside lifestyle"
		],
		facts: [
			{
				label: "Capital",
				value: "Canberra"
			},
			{
				label: "Language",
				value: "English"
			},
			{
				label: "Currency",
				value: "Australian Dollar (AUD)"
			},
			{
				label: "Avg. Tuition",
				value: "AUD $25,000 - $45,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "AUD $1,400 - $2,000 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 48 hrs/fortnight"
			},
			{
				label: "Post Study Visa",
				value: "2 - 4 Years"
			},
			{
				label: "Visa Process",
				value: "4 - 6 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "AUD $65,000 - $85,000 / yr"
			}
		],
		universities: [
			{
				name: "University of Melbourne",
				qsRank: 33,
				tuition: "AUD $36,000–$46,000/yr",
				scholarships: "Melbourne Graduate Scholarship",
				programs: 380,
				color: "#003087",
				shortName: "UniMelb",
				image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Medicine",
					"Law",
					"Engineering"
				]
			},
			{
				name: "UNSW Sydney",
				qsRank: 19,
				tuition: "AUD $41,000/yr",
				scholarships: "UNSW Merit Award",
				programs: 390,
				color: "#F0B323",
				shortName: "UNSW",
				image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Engineering",
					"Computer Science",
					"Business"
				]
			},
			{
				name: "University of Sydney",
				qsRank: 18,
				tuition: "AUD $28,000–$52,000/yr",
				scholarships: "USYD VC Scholarship",
				programs: 400,
				color: "#002366",
				shortName: "USYD",
				image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Medicine",
					"Law",
					"Arts"
				]
			},
			{
				name: "Australian National University",
				qsRank: 34,
				tuition: "AUD $39,000/yr",
				scholarships: "ANU Chancellor Scholarship",
				programs: 320,
				color: "#BE1E2D",
				shortName: "ANU",
				image: "https://placehold.co/600x400/BE1E2D/white?text=Australian%20National%20University",
				popularCourses: [
					"Sciences",
					"International Relations",
					"CS"
				]
			}
		],
		courses: [
			{
				name: "Information Technology",
				demand: "Very High Demand",
				avgSalary: "AUD $75,000 / year",
				topUnis: "UNSW, Melbourne, USYD",
				scholarships: "Melbourne Graduate"
			},
			{
				name: "Civil Engineering",
				demand: "High Demand",
				avgSalary: "AUD $78,000 / year",
				topUnis: "UNSW, ANU, RMIT",
				scholarships: "Australia Awards"
			},
			{
				name: "Nursing & Health",
				demand: "Very High Demand",
				avgSalary: "AUD $70,000 / year",
				topUnis: "Sydney, Melbourne",
				scholarships: "Destination Australia"
			},
			{
				name: "Data Science & CS",
				demand: "Very High Demand",
				avgSalary: "AUD $82,000 / year",
				topUnis: "Melbourne, UNSW",
				scholarships: "RTP Scholarships"
			}
		],
		scholarships: [
			{
				name: "Australia Awards",
				funding: "Fully Funded (Tuition & Living)",
				eligibility: "International applicants from developing countries",
				deadline: "April 30"
			},
			{
				name: "Destination Australia",
				funding: "AUD $15,000 / year",
				eligibility: "Students studying in regional Australia campuses",
				deadline: "Varies by university"
			},
			{
				name: "Research Training Program",
				funding: "Full Tuition & Stipend",
				eligibility: "Domestic and international research master/PhD students",
				deadline: "Varies"
			},
			{
				name: "Melbourne Graduate Scholarship",
				funding: "Up to AUD $20,000",
				eligibility: "Outstanding graduates applying to graduate coursework programs",
				deadline: "Automatic assessment"
			}
		],
		cities: [
			{
				name: "Melbourne",
				cost: "AUD $1,500 / month",
				image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Sydney",
				cost: "AUD $1,600 / month",
				image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Brisbane",
				cost: "AUD $1,300 / month",
				image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Perth",
				cost: "AUD $1,250 / month",
				image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&auto=format&fit=crop&q=80"
			}
		],
		successStories: [{
			name: "Rohan Patel",
			course: "MS in Computer Science",
			university: "University of Melbourne",
			outcome: "Software Engineer at Atlassian",
			quote: "Getting a fully funded scholarship in Australia felt impossible until AtlasPath streamlined my profile and application.",
			initials: "RP",
			color: "bg-emerald-600"
		}],
		faqs: [
			{
				q: "What are the post-study work rights in Australia?",
				a: "Typically, graduates are granted a Temporary Graduate Visa (Subclass 485) allowing stay-back of 2 to 4 years based on whether they completed a Bachelor, Master, or PhD program."
			},
			{
				q: "What is the GTE (Genuine Temporary Entrant) requirement?",
				a: "The GTE is a mandatory assessment statement demonstrating that you genuinely intend to study in Australia temporarily and have clear pathways back to your home country."
			},
			{
				q: "How much are the living expenses for an Australian Visa?",
				a: "As per immigration guidelines, you must show financial capacity of AUD $29,710 per year to cover living expenses."
			},
			{
				q: "Can I work part-time in Australia?",
				a: "Yes, international students are legally allowed to work up to 48 hours per fortnight while study is in session, and unlimited hours during semester breaks."
			}
		],
		visaSteps: [
			{
				title: "Secure CoE document",
				desc: "Get Confirmation of Enrolment from an Australian university"
			},
			{
				title: "Show Financial Capacity",
				desc: "Prove you hold at least AUD $29,710 in liquid assets"
			},
			{
				title: "Purchase OSHC",
				desc: "Obtain Overseas Student Health Cover for your stay duration"
			},
			{
				title: "Submit Visa Subclass 500",
				desc: "Apply online through the ImmiAccount portal"
			},
			{
				title: "Attend Health Check",
				desc: "Undergo a mandatory health assessment at a panel clinic"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "AUD $25,000 - $45,000",
				private: "AUD $30,000 - $50,000"
			},
			{
				label: "Living Expenses",
				public: "AUD $16,800 - $24,000",
				private: "AUD $16,800 - $24,000"
			},
			{
				label: "Accommodation",
				public: "AUD $7,200 - $11,000",
				private: "AUD $7,200 - $11,000"
			},
			{
				label: "Food",
				public: "AUD $3,600 - $4,800",
				private: "AUD $3,600 - $4,800"
			},
			{
				label: "OSHC Health Insurance",
				public: "AUD $600 - $900",
				private: "AUD $600 - $900"
			},
			{
				label: "Transport",
				public: "AUD $1,200 - $1,800",
				private: "AUD $1,200 - $1,800"
			}
		],
		totalBudgetPublic: "AUD $38,000 - $69,000 / yr",
		totalBudgetPrivate: "AUD $46,000 - $79,000 / yr",
		workImpactNote: "You can work up to 24 hours / week (average wages AUD $22 - $28/hr) to easily offset your costs."
	},
	uk: {
		name: "United Kingdom",
		flag: "🇬🇧",
		badgeText: "GRADUATE ROUTE VISA & WORLD LEADING UNIVERSITIES",
		whyTitle: "Why Study in the UK?",
		whyDesc: "Benefit from global prestige, highly recognized degrees, and fast-track one-year Master’s courses.",
		landmarkImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "London, England",
		stats: [
			{
				value: "600K+",
				label: "Intl. Students"
			},
			{
				value: "2 Years",
				label: "Graduate Route Visa"
			},
			{
				value: "£15K+",
				label: "Avg Tuition"
			},
			{
				value: "1 Year",
				label: "Masters Track"
			}
		],
		highlights: [
			"2-Year Graduate Route Visa (Stay-Back option)",
			"World-famous historic universities (Russell Group)",
			"Intense, cost-effective 1-year Master’s options",
			"Strong global employer networks and finance hubs",
			"English-speaking culture with rich heritage"
		],
		facts: [
			{
				label: "Capital",
				value: "London"
			},
			{
				label: "Language",
				value: "English"
			},
			{
				label: "Currency",
				value: "British Pound (GBP)"
			},
			{
				label: "Avg. Tuition",
				value: "£15,000 - £35,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "£1,100 - £1,600 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 20 hrs/week"
			},
			{
				label: "Post Study Visa",
				value: "2 Years"
			},
			{
				label: "Visa Process",
				value: "3 - 4 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "£40,000 - £60,000 / yr"
			}
		],
		universities: [
			{
				name: "University of Oxford",
				qsRank: 3,
				tuition: "£9,250–£43,050/yr",
				scholarships: "Clarendon Fund",
				programs: 300,
				color: "#002147",
				shortName: "Oxon",
				image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"PPE",
					"Medicine",
					"Law"
				]
			},
			{
				name: "University of Cambridge",
				qsRank: 2,
				tuition: "£9,250–£58,038/yr",
				scholarships: "Gates Cambridge",
				programs: 280,
				color: "#003B71",
				shortName: "Cantab",
				image: "https://placehold.co/600x400/003B71/white?text=University%20of%20Cambridge",
				popularCourses: [
					"Mathematics",
					"Law",
					"Engineering"
				]
			},
			{
				name: "Imperial College London",
				qsRank: 6,
				tuition: "£9,250–£38,000/yr",
				scholarships: "Imperial Presidents",
				programs: 160,
				color: "#003E74",
				shortName: "Imperial",
				image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Engineering",
					"Medicine",
					"CS"
				]
			},
			{
				name: "University College London",
				qsRank: 9,
				tuition: "£9,250–£35,000/yr",
				scholarships: "UCL Global Excellence",
				programs: 450,
				color: "#500778",
				shortName: "UCL",
				image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Law",
					"Architecture",
					"CS"
				]
			}
		],
		courses: [
			{
				name: "Corporate Finance",
				demand: "Very High Demand",
				avgSalary: "£55,000 / year",
				topUnis: "LSE, Oxford, London Business School",
				scholarships: "Chevening"
			},
			{
				name: "International Law",
				demand: "High Demand",
				avgSalary: "£52,000 / year",
				topUnis: "Oxford, Cambridge, UCL",
				scholarships: "Commonwealth"
			},
			{
				name: "Business Management",
				demand: "Very High Demand",
				avgSalary: "£48,000 / year",
				topUnis: "Manchester, Warwick",
				scholarships: "GREAT Scholarships"
			},
			{
				name: "Computer Science",
				demand: "Very High Demand",
				avgSalary: "£56,000 / year",
				topUnis: "Imperial, Cambridge, Oxford",
				scholarships: "Gates Cambridge"
			}
		],
		scholarships: [
			{
				name: "Chevening Scholarships",
				funding: "Fully Funded",
				eligibility: "Outstanding leaders applying for 1-year Master's degrees",
				deadline: "November 4"
			},
			{
				name: "Commonwealth Scholarships",
				funding: "Fully Funded",
				eligibility: "Students from Commonwealth nations showing high developmental impact",
				deadline: "Varies by country"
			},
			{
				name: "GREAT Scholarships",
				funding: "Up to £10,000",
				eligibility: "International applicants enrolled in UK universities",
				deadline: "Varies by course"
			},
			{
				name: "Gates Cambridge",
				funding: "Fully Funded",
				eligibility: "Excellent academic profiles applying to University of Cambridge",
				deadline: "October 15"
			}
		],
		cities: [
			{
				name: "London",
				cost: "£1,400 / month",
				image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Manchester",
				cost: "£1,100 / month",
				image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Edinburgh",
				cost: "£1,150 / month",
				image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Birmingham",
				cost: "£1,050 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Birmingham"
			}
		],
		successStories: [{
			name: "Priya Nair",
			course: "M.Sc. Mathematical Finance",
			university: "University of Oxford",
			outcome: "Investment Analyst at Goldman Sachs",
			quote: "From Chevening essay reviews to interview practice, the mentors at AtlasPath were with me at every stage.",
			initials: "PN",
			color: "bg-amber-600"
		}],
		faqs: [
			{
				q: "What is the Graduate Route Visa?",
				a: "It allows graduates of UK higher education providers to stay and work, or look for work, for 2 years (3 years for PhD) after completing their course."
			},
			{
				q: "How much does a one-year Master’s cost in the UK?",
				a: "Typically tuition ranges from £15,000 to £35,000 depending on the course. Living costs require showing £12,006 (£15,990 in London) for visa purposes."
			},
			{
				q: "What is the CAS and why is it required?",
				a: "A CAS (Confirmation of Acceptance for Studies) is an electronic document issued by your UK university sponsorship. It contains a unique CAS reference number needed for your student visa application."
			}
		],
		visaSteps: [
			{
				title: "Secure CAS Document",
				desc: "Accept your unconditional offer and receive your CAS number"
			},
			{
				title: "Prove Financial Support",
				desc: "Show you have money to pay tuition plus £1,023/mo living fees"
			},
			{
				title: "Submit Student Visa (Tier 4)",
				desc: "File your application online via the UKVI government website"
			},
			{
				title: "Biometrics Appointment",
				desc: "Attend a VFS center to record fingerprints and face scans"
			},
			{
				title: "BRP Collection",
				desc: "Upon arrival, pick up your Biometric Residence Permit from a local post office"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "£15,000 - £35,000",
				private: "£22,000 - £45,000"
			},
			{
				label: "Living Expenses",
				public: "£11,000 - £15,000",
				private: "£11,000 - £15,000"
			},
			{
				label: "Accommodation",
				public: "£5,400 - £7,200",
				private: "£5,400 - £7,200"
			},
			{
				label: "Food",
				public: "£2,800 - £3,600",
				private: "£2,800 - £3,600"
			},
			{
				label: "Health Surcharge (IHS)",
				public: "£776 - £776",
				private: "£776 - £776"
			},
			{
				label: "Transport",
				public: "£600 - £1,000",
				private: "£600 - £1,000"
			}
		],
		totalBudgetPublic: "£26,000 - £50,000 / yr",
		totalBudgetPrivate: "£33,000 - £60,000 / yr",
		workImpactNote: "You can work up to 20 hours / week (average wages £11 - £16/hr) during term time to offset your expenses."
	},
	usa: {
		name: "United States",
		flag: "🇺🇸",
		badgeText: "WORLD'S LARGEST HIGHER EDUCATION SYSTEM",
		whyTitle: "Why Study in the US?",
		whyDesc: "Unleash your potential in a system defined by massive research budgets, tech hubs, and up to 3 years STEM OPT.",
		landmarkImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "MIT Campus, Boston",
		stats: [
			{
				value: "1M+",
				label: "Intl. Students"
			},
			{
				value: "1-3 Years",
				label: "OPT Work Rights"
			},
			{
				value: "$25K+",
				label: "Avg Tuition"
			},
			{
				value: "#1",
				label: "Research Output"
			}
		],
		highlights: [
			"Huge network of Ivy Leagues and research institutes",
			"Up to 3-Year STEM OPT (Optional Practical Training)",
			"Direct pipelines into Silicon Valley, Wall Street, and tech hubs",
			"Extremely flexible, credit-based academic curriculums",
			"Prestigious funding options and fellowships"
		],
		facts: [
			{
				label: "Capital",
				value: "Washington D.C."
			},
			{
				label: "Language",
				value: "English"
			},
			{
				label: "Currency",
				value: "US Dollar (USD)"
			},
			{
				label: "Avg. Tuition",
				value: "$25,000 - $55,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "$1,200 - $2,200 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 20 hrs/week (On-Campus)"
			},
			{
				label: "Post Study Visa",
				value: "1 - 3 Years (OPT)"
			},
			{
				label: "Visa Process",
				value: "3 - 6 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "$70,000 - $95,000 / yr"
			}
		],
		universities: [
			{
				name: "Massachusetts Institute of Technology",
				qsRank: 1,
				tuition: "$57,986/yr",
				scholarships: "MIT Fellowship",
				programs: 350,
				color: "#8C1515",
				shortName: "MIT",
				image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Computer Science",
					"AI",
					"Engineering"
				]
			},
			{
				name: "Stanford University",
				qsRank: 5,
				tuition: "$56,169/yr",
				scholarships: "Knight-Hennessy Scholars",
				programs: 420,
				color: "#8C1515",
				shortName: "Stanford",
				image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Computer Science",
					"Business Management",
					"Medicine"
				]
			},
			{
				name: "Harvard University",
				qsRank: 4,
				tuition: "$57,261/yr",
				scholarships: "Harvard Merit Fellowship",
				programs: 500,
				color: "#A51C30",
				shortName: "Harvard",
				image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Business Administration",
					"Law",
					"CS"
				]
			},
			{
				name: "Princeton University",
				qsRank: 17,
				tuition: "$59,710/yr",
				scholarships: "Princeton Fellowship",
				programs: 290,
				color: "#EE7624",
				shortName: "Princeton",
				image: "https://placehold.co/600x400/EE7624/white?text=Princeton%20University",
				popularCourses: [
					"Mathematics",
					"CS",
					"Arts"
				]
			}
		],
		courses: [
			{
				name: "Computer Science & AI",
				demand: "Very High Demand",
				avgSalary: "$98,000 / year",
				topUnis: "MIT, Stanford, Berkeley, CMU",
				scholarships: "Fulbright Scholars"
			},
			{
				name: "Finance & MBA",
				demand: "Very High Demand",
				avgSalary: "$110,000 / year",
				topUnis: "Harvard, Stanford, Columbia",
				scholarships: "Knight-Hennessy"
			},
			{
				name: "Aerospace Eng.",
				demand: "High Demand",
				avgSalary: "$90,000 / year",
				topUnis: "MIT, Caltech, Georgia Tech",
				scholarships: "AAUW Fellowships"
			},
			{
				name: "Data Science",
				demand: "Very High Demand",
				avgSalary: "$92,000 / year",
				topUnis: "Stanford, MIT, Berkeley",
				scholarships: "Yale Scholarships"
			}
		],
		scholarships: [
			{
				name: "Fulbright Program",
				funding: "Fully Funded",
				eligibility: "Outstanding international students with completed Bachelor's degrees",
				deadline: "October 15"
			},
			{
				name: "AAUW Fellowships",
				funding: "Up to $30,000 / year",
				eligibility: "International women pursuing full-time graduate degrees in the US",
				deadline: "November 15"
			},
			{
				name: "Knight-Hennessy Scholars",
				funding: "Fully Funded",
				eligibility: "Exceptional graduate students studying at Stanford University",
				deadline: "October 15"
			},
			{
				name: "Yale Scholarships",
				funding: "Up to $70,000 / year",
				eligibility: "Financial-need based scholarships for Yale undergrads",
				deadline: "Varies by intake"
			}
		],
		cities: [
			{
				name: "Boston",
				cost: "$1,600 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Boston"
			},
			{
				name: "New York",
				cost: "$1,800 / month",
				image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "San Francisco",
				cost: "$1,750 / month",
				image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Los Angeles",
				cost: "$1,500 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Los%20Angeles"
			}
		],
		successStories: [{
			name: "Kartik Rao",
			course: "MS in Artificial Intelligence",
			university: "Stanford University",
			outcome: "AI Researcher at OpenAI",
			quote: "Studying in Silicon Valley was my dream. AtlasPath helped me present a stellar profile that secured my admission.",
			initials: "KR",
			color: "bg-indigo-600"
		}],
		faqs: [
			{
				q: "What is STEM OPT in the USA?",
				a: "Under the Optional Practical Training (OPT) program, graduates with STEM degrees can apply for a 24-month extension of their 12-month post-completion OPT, allowing a total of 36 months of stay-back work permit."
			},
			{
				q: "How do I prove financial support for the I-20 form?",
				a: "You must show liquid bank balance statements matching the total estimated costs (tuition, fees, and living fees) for at least the first academic year of your program."
			},
			{
				q: "Can F-1 visa students work off-campus?",
				a: "Off-campus work is not permitted during the first year of study, and requires authorization thereafter through CPT (Curricular Practical Training) or OPT. On-campus employment is allowed up to 20 hours per week."
			}
		],
		visaSteps: [
			{
				title: "Secure Form I-20",
				desc: "Receive your official certificate of eligibility from your SEVP school"
			},
			{
				title: "Pay SEVIS I-901 Fee",
				desc: "Pay the mandatory government tracking system fee ($350)"
			},
			{
				title: "File DS-160 Form",
				desc: "Complete your online nonimmigrant visa application and upload photo"
			},
			{
				title: "Schedule Interview",
				desc: "Book your interview date at the nearest US Embassy/Consulate"
			},
			{
				title: "Attend Visa Interview",
				desc: "Bring passport, I-20, financial statements, and pass the officer interview"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "$25,000 - $45,000",
				private: "$35,000 - $55,000"
			},
			{
				label: "Living Expenses",
				public: "$14,400 - $22,000",
				private: "$14,400 - $22,000"
			},
			{
				label: "Accommodation",
				public: "$7,200 - $11,000",
				private: "$7,200 - $11,000"
			},
			{
				label: "Food",
				public: "$3,600 - $4,800",
				private: "$3,600 - $4,800"
			},
			{
				label: "SEVIS & Visa Fees",
				public: "$535 - $535",
				private: "$535 - $535"
			},
			{
				label: "Transport",
				public: "$1,200 - $1,800",
				private: "$1,200 - $1,800"
			}
		],
		totalBudgetPublic: "$39,400 - $67,000 / yr",
		totalBudgetPrivate: "$49,400 - $77,000 / yr",
		workImpactNote: "On-campus jobs pay average wages of $15 - $20/hr, helping offset basic monthly pocket expenses."
	},
	ireland: {
		name: "Ireland",
		flag: "🇮🇪",
		badgeText: "EUROPE'S MULTINATIONAL TECH HUB",
		whyTitle: "Why Study in Ireland?",
		whyDesc: "Achieve highly recognized degrees in an English-speaking country with a 2-year stay back work permit.",
		landmarkImage: "https://placehold.co/800x400/0A3161/white?text=Trinity%20College%2C%20Dublin",
		landmarkLabel: "Trinity College, Dublin",
		stats: [
			{
				value: "35K+",
				label: "Intl. Students"
			},
			{
				value: "2 Years",
				label: "Stay Back Visa"
			},
			{
				value: "€10K+",
				label: "Avg Tuition"
			},
			{
				value: "#1",
				label: "EU Tech Hub"
			}
		],
		highlights: [
			"Vibrant European Technology Hub (Google, Meta, Apple)",
			"2-Year Graduate stay-back work visa",
			"High-quality, English-speaking educational routes",
			"Warm, friendly, and student-focused culture",
			"Strong pathways to secure employment in the EU"
		],
		facts: [
			{
				label: "Capital",
				value: "Dublin"
			},
			{
				label: "Language",
				value: "English"
			},
			{
				label: "Currency",
				value: "Euro (€)"
			},
			{
				label: "Avg. Tuition",
				value: "€10,000 - €22,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "€1,000 - €1,500 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 20 hrs/week"
			},
			{
				label: "Post Study Visa",
				value: "2 Years"
			},
			{
				label: "Visa Process",
				value: "4 - 8 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "€45,000 - €60,000 / yr"
			}
		],
		universities: [{
			name: "Trinity College Dublin",
			qsRank: 81,
			tuition: "€18,860/yr",
			scholarships: "Global Excellence",
			programs: 240,
			color: "#0A3161",
			shortName: "TCD",
			image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80",
			popularCourses: [
				"Arts",
				"Medicine",
				"Computer Science"
			]
		}, {
			name: "University College Dublin",
			qsRank: 126,
			tuition: "€19,500/yr",
			scholarships: "UCD Global Excellence",
			programs: 270,
			color: "#004A97",
			shortName: "UCD",
			image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=600&auto=format&fit=crop&q=80",
			popularCourses: [
				"Business",
				"CS",
				"Engineering"
			]
		}],
		courses: [
			{
				name: "Data Science & CS",
				demand: "Very High Demand",
				avgSalary: "€55,000 / year",
				topUnis: "TCD, UCD, Galway",
				scholarships: "Government of Ireland"
			},
			{
				name: "Software Engineering",
				demand: "Very High Demand",
				avgSalary: "€58,000 / year",
				topUnis: "TCD, UCD, UCC",
				scholarships: "UCD Excellence"
			},
			{
				name: "Pharma & Biotech",
				demand: "High Demand",
				avgSalary: "€52,000 / year",
				topUnis: "UCD, TCD, Cork",
				scholarships: "TCD Global"
			},
			{
				name: "Business & Finance",
				demand: "Very High Demand",
				avgSalary: "€50,000 / year",
				topUnis: "Smurfit, Trinity",
				scholarships: "UCD Excellence"
			}
		],
		scholarships: [
			{
				name: "Government of Ireland Scholarship",
				funding: "€10,000 stipend + Fee Waiver",
				eligibility: "Outstanding students from non-EU countries",
				deadline: "March 27"
			},
			{
				name: "UCD Global Excellence",
				funding: "Up to 100% Tuition Waiver",
				eligibility: "Excellent academic profile applying to UCD",
				deadline: "March 31"
			},
			{
				name: "TCD Global Study",
				funding: "Up to €5,000 reduction",
				eligibility: "Non-EU students demonstrating high academic achievement",
				deadline: "Varies by course"
			}
		],
		cities: [{
			name: "Dublin",
			cost: "€1,300 / month",
			image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&auto=format&fit=crop&q=80"
		}, {
			name: "Cork",
			cost: "€1,100 / month",
			image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=400&auto=format&fit=crop&q=80"
		}],
		successStories: [{
			name: "Liam O'Connor",
			course: "MSc in Data Analytics",
			university: "Trinity College Dublin",
			outcome: "Data Engineer at Google Dublin",
			quote: "Ireland is a tech goldmine. AtlasPath helped me target TCD and guided my visa block account requirements flawlessly.",
			initials: "LO",
			color: "bg-teal-600"
		}],
		faqs: [
			{
				q: "What is the stay-back visa option for Ireland?",
				a: "Under the Third Level Graduate Scheme, Master's graduates from Irish universities are granted a 24-month post-study work visa to find employment."
			},
			{
				q: "Is Ireland a good hub for tech and finance careers?",
				a: "Yes! Dublin is often called the Silicon Valley of Europe, hosting headquarters for Google, Meta, Apple, Salesforce, and top investment firms."
			},
			{
				q: "Is IELTS mandatory for an Irish student visa?",
				a: "Yes, international students from non-English speaking countries must submit an IELTS score of 6.0 to 6.5 minimum to get their visa approved."
			}
		],
		visaSteps: [
			{
				title: "Secure Offer Letter",
				desc: "Gain admission to an approved higher education program"
			},
			{
				title: "Pay Tuition Fees",
				desc: "Pay tuition fees in full to the university and secure receipt"
			},
			{
				title: "Get Health Cover",
				desc: "Buy private medical insurance cover valid for your stay"
			},
			{
				title: "Submit Visa Online",
				desc: "Apply through the AVATS portal and pay visa fee"
			},
			{
				title: "Register with GNIB",
				desc: "Upon arrival, register with the Irish Immigration Service (GNIB)"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "€10,000 - €22,000",
				private: "€18,000 - €28,000"
			},
			{
				label: "Living Expenses",
				public: "€12,000 - €16,000",
				private: "€12,000 - €16,000"
			},
			{
				label: "Accommodation",
				public: "€6,000 - €9,000",
				private: "€6,000 - €9,000"
			},
			{
				label: "Food",
				public: "€3,000 - $4,200",
				private: "€3,000 - $4,200"
			},
			{
				label: "Health Insurance",
				public: "€600 - €900",
				private: "€600 - €900"
			},
			{
				label: "Transport",
				public: "€1,000 - €1,500",
				private: "€1,000 - €1,500"
			}
		],
		totalBudgetPublic: "€22,000 - €38,000 / yr",
		totalBudgetPrivate: "€30,000 - €44,000 / yr",
		workImpactNote: "You can work up to 20 hours / week (average wages €12 - €16/hr) during academic terms."
	},
	netherlands: {
		name: "Netherlands",
		flag: "🇳🇱",
		badgeText: "INNOVATIVE SYSTEMS & ENGLISH-TAUGHT DEGREES",
		whyTitle: "Why Study in the Netherlands?",
		whyDesc: "Experience highly progressive, English-taught degree options and a top-tier high-tech job market.",
		landmarkImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "Canals of Amsterdam",
		stats: [
			{
				value: "115K+",
				label: "Intl. Students"
			},
			{
				value: "1 Year",
				label: "Orientation Visa"
			},
			{
				value: "€10K+",
				label: "Avg Tuition"
			},
			{
				value: "#1",
				label: "English Skills"
			}
		],
		highlights: [
			"Over 2,100+ English-taught degree options",
			"Strong Focus on active, problem-based learning methods",
			"Highly innovative high-tech engineering ecosystem (ASML, Philips)",
			"1-year \"Orientation Year\" (zoekjaar) post-grad stay-back permit",
			"Excellent work-life balance and biking culture"
		],
		facts: [
			{
				label: "Capital",
				value: "Amsterdam"
			},
			{
				label: "Language",
				value: "Dutch (English widely spoken)"
			},
			{
				label: "Currency",
				value: "Euro (€)"
			},
			{
				label: "Avg. Tuition",
				value: "€10,000 - €20,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "€1,000 - €1,600 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 16 hrs/week (requires permit)"
			},
			{
				label: "Post Study Visa",
				value: "1 Year (Orientation Year)"
			},
			{
				label: "Visa Process",
				value: "3 - 6 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "€42,000 - €58,000 / yr"
			}
		],
		universities: [
			{
				name: "TU Delft",
				qsRank: 47,
				tuition: "€15,000/yr",
				scholarships: "Justus & Louise van Effen",
				programs: 40,
				color: "#00A6D6",
				shortName: "TUDelft",
				image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=80",
				popularCourses: [
					"Engineering",
					"Architecture",
					"Aerospace"
				]
			},
			{
				name: "Eindhoven University of Technology",
				qsRank: 124,
				tuition: "€16,000/yr",
				scholarships: "Amandus H. Lundqvist Scholars",
				programs: 30,
				color: "#E2001A",
				shortName: "TUe",
				image: "https://placehold.co/600x400/E2001A/white?text=Eindhoven%20University%20of%20Technology",
				popularCourses: [
					"Computer Science",
					"Data Science",
					"Electrical Engineering"
				]
			},
			{
				name: "Utrecht University",
				qsRank: 107,
				tuition: "€14,000/yr",
				scholarships: "Utrecht Excellence Scholars",
				programs: 80,
				color: "#FFCD00",
				shortName: "UU",
				image: "https://placehold.co/600x400/FFCD00/003D7C?text=Utrecht%20University",
				popularCourses: [
					"Sciences",
					"Psychology",
					"Economics"
				]
			}
		],
		courses: [
			{
				name: "Psychology",
				demand: "High Demand",
				avgSalary: "€45,000 / year",
				topUnis: "Utrecht, Amsterdam, Leiden",
				scholarships: "Holland Scholarship"
			},
			{
				name: "Sustainable Energy",
				demand: "Very High Demand",
				avgSalary: "€48,000 / year",
				topUnis: "TU Delft, Eindhoven",
				scholarships: "Orange Tulip"
			},
			{
				name: "Data Science",
				demand: "Very High Demand",
				avgSalary: "€52,000 / year",
				topUnis: "Eindhoven, Utrecht",
				scholarships: "Holland Scholarship"
			},
			{
				name: "Civil Engineering",
				demand: "Very High Demand",
				avgSalary: "€50,000 / year",
				topUnis: "TU Delft",
				scholarships: "TU Delft Excellence"
			}
		],
		scholarships: [
			{
				name: "Orange Tulip Scholarship",
				funding: "Up to €15,000",
				eligibility: "Outstanding international students from selected countries",
				deadline: "April 1"
			},
			{
				name: "Holland Scholarship",
				funding: "€5,000 Grant",
				eligibility: "Non-EEA student applying for Bachelor's or Master's degrees",
				deadline: "May 1"
			},
			{
				name: "TU Delft Excellence",
				funding: "Fully Funded",
				eligibility: "Top academic performers applying for MSc in TU Delft",
				deadline: "December 1"
			}
		],
		cities: [
			{
				name: "Amsterdam",
				cost: "€1,450 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Amsterdam"
			},
			{
				name: "Rotterdam",
				cost: "€1,200 / month",
				image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop&q=80"
			},
			{
				name: "Delft",
				cost: "€1,050 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Delft"
			},
			{
				name: "Eindhoven",
				cost: "€1,100 / month",
				image: "https://placehold.co/400x300/1a1a2e/white?text=Eindhoven"
			}
		],
		successStories: [{
			name: "Emma de Jong",
			course: "MS in Sustainable Energy",
			university: "TU Delft",
			outcome: "Project Lead at Shell",
			quote: "Studying in Delft was life-changing. The support I received for my orientation year visa was incredibly detailed.",
			initials: "EJ",
			color: "bg-orange-600"
		}],
		faqs: [
			{
				q: "What is the Orientation Year in the Netherlands?",
				a: "It allows graduates of Dutch universities to spend 1 year finding a job as a highly skilled migrant, without needing an initial sponsorship permit."
			},
			{
				q: "Are English-taught courses widely available?",
				a: "Yes! The Netherlands is one of the leading countries in continental Europe for offering fully English-taught programs, across almost all disciplines."
			},
			{
				q: "Can I work part-time while studying?",
				a: "Yes, up to 16 hours per week, but your employer must apply for a work permit on your behalf."
			}
		],
		visaSteps: [
			{
				title: "Secure Admission",
				desc: "Accept your offer from a Dutch higher education institution"
			},
			{
				title: "Visa Applied by School",
				desc: "Your university applies for your MVV visa on your behalf"
			},
			{
				title: "Show Financial Sufficiency",
				desc: "Prove you hold at least €12,000 for living fees"
			},
			{
				title: "Collect MVV stamp",
				desc: "Pick up your entry visa stamp at the nearest Embassy/Consulate"
			},
			{
				title: "Get Residence Permit",
				desc: "Collect your VVR residence card from the IND office on arrival"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "€10,000 - €20,000",
				private: "€15,000 - €25,000"
			},
			{
				label: "Living Expenses",
				public: "€12,000 - €18,000",
				private: "€12,000 - €18,000"
			},
			{
				label: "Accommodation",
				public: "€6,000 - €8,400",
				private: "€6,000 - €8,400"
			},
			{
				label: "Food",
				public: "€3,000 - €4,200",
				private: "€3,000 - €4,200"
			},
			{
				label: "Health Insurance",
				public: "€800 - €1,200",
				private: "€800 - €1,200"
			},
			{
				label: "Transport & Biking",
				public: "€400 - €700",
				private: "€400 - €700"
			}
		],
		totalBudgetPublic: "€22,000 - €38,000 / yr",
		totalBudgetPrivate: "€27,000 - €43,000 / yr",
		workImpactNote: "Part-time jobs require work permits but pay about €11 - €15/hr, which helps with pocket expenses."
	},
	singapore: {
		name: "Singapore",
		flag: "🇸🇬",
		badgeText: "ASIA'S PREMIER EDUCATION & FINANCIAL NEXUS",
		whyTitle: "Why Study in Singapore?",
		whyDesc: "Secure your future at top Asian institutes while positioning yourself inside a massive international financial network.",
		landmarkImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=80",
		landmarkLabel: "Marina Bay Sands",
		stats: [
			{
				value: "50K+",
				label: "Intl. Students"
			},
			{
				value: "6 Months",
				label: "Post Study Visa"
			},
			{
				value: "SGD $17K+",
				label: "Avg Tuition"
			},
			{
				value: "#1",
				label: "Safety Index"
			}
		],
		highlights: [
			"Global financial hub hosting thousands of multinationals",
			"Top-tier Asian universities ranking in the QS Top 20 (NUS, NTU)",
			"Highly competitive starting salaries for tech & finance grads",
			"Exceedingly safe, clean, and highly connected environment",
			"Subsidized tuition opportunities under government bond schemes"
		],
		facts: [
			{
				label: "Capital",
				value: "Singapore"
			},
			{
				label: "Language",
				value: "English (official)"
			},
			{
				label: "Currency",
				value: "Singapore Dollar (SGD)"
			},
			{
				label: "Avg. Tuition",
				value: "SGD $17,000 - $35,000 / yr"
			},
			{
				label: "Avg. Living Cost",
				value: "SGD $1,200 - $2,200 / mo"
			},
			{
				label: "Part-Time Work",
				value: "Up to 16 hrs/week (approved list only)"
			},
			{
				label: "Post Study Visa",
				value: "Up to 1 Year (LTVP)"
			},
			{
				label: "Visa Process",
				value: "2 - 4 Weeks"
			},
			{
				label: "Avg Graduate Salary",
				value: "SGD $55,000 - $80,000 / yr"
			}
		],
		universities: [{
			name: "National University of Singapore",
			qsRank: 8,
			tuition: "SGD $17,550–$37,550/yr",
			scholarships: "ASEAN Undergraduate Scholarship",
			programs: 280,
			color: "#003D7C",
			shortName: "NUS",
			image: "https://placehold.co/600x400/003D7C/white?text=National%20University%20of%20Singapore",
			popularCourses: [
				"Business",
				"Computer Science",
				"Engineering"
			]
		}, {
			name: "Nanyang Technological University",
			qsRank: 15,
			tuition: "SGD $17,550/yr",
			scholarships: "Nanyang Scholarship",
			programs: 210,
			color: "#C00000",
			shortName: "NTU",
			image: "https://placehold.co/600x400/C00000/white?text=Nanyang%20Technological%20University",
			popularCourses: [
				"Computer Science",
				"Business",
				"Aerospace Engineering"
			]
		}],
		courses: [
			{
				name: "Corporate Finance",
				demand: "Very High Demand",
				avgSalary: "SGD $65,000 / year",
				topUnis: "NUS, NTU, SMU",
				scholarships: "ASEAN Undergrad"
			},
			{
				name: "Computer Science",
				demand: "Very High Demand",
				avgSalary: "SGD $72,000 / year",
				topUnis: "NUS, NTU",
				scholarships: "Nanyang Scholar"
			},
			{
				name: "Supply Chain",
				demand: "High Demand",
				avgSalary: "SGD $58,000 / year",
				topUnis: "NUS, NTU",
				scholarships: "SMU Merit"
			},
			{
				name: "FinTech",
				demand: "Very High Demand",
				avgSalary: "SGD $68,000 / year",
				topUnis: "NUS, NTU, SMU",
				scholarships: "Nanyang Scholar"
			}
		],
		scholarships: [
			{
				name: "ASEAN Undergraduate Scholarship",
				funding: "Fully Funded",
				eligibility: "ASEAN member state students showing leadership and grades",
				deadline: "Varies"
			},
			{
				name: "Nanyang Scholarship",
				funding: "Fully Funded",
				eligibility: "Outstanding international students enrolled in NTU undergrad",
				deadline: "Varies"
			},
			{
				name: "SMU Merit Scholarship",
				funding: "Up to SGD $20,000 / year",
				eligibility: "Exceptional applicants enrolled in SMU programs",
				deadline: "Varies"
			}
		],
		cities: [{
			name: "Singapore Central",
			cost: "SGD $1,800 / month",
			image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80"
		}, {
			name: "Jurong",
			cost: "SGD $1,400 / month",
			image: "https://placehold.co/400x300/1a1a2e/white?text=Jurong"
		}],
		successStories: [{
			name: "Lin Wei",
			course: "MSc in Financial Technology",
			university: "National University of Singapore",
			outcome: "FinTech Analyst at DBS Bank",
			quote: "Singapore is the best of both worlds in terms of quality of life and career. AtlasPath helped me secure my ASEAN scholarship.",
			initials: "LW",
			color: "bg-red-600"
		}],
		faqs: [
			{
				q: "What are the post-study work rights in Singapore?",
				a: "International graduates can apply for a Long-Term Visit Pass (LTVP) of up to 1 year to search for employment in Singapore."
			},
			{
				q: "What is the Tuition Grant Scheme?",
				a: "It is a subsidy provided by the government to offset tuition. In exchange, students must work for a Singapore-registered firm for 3 years post-graduation."
			},
			{
				q: "Can I work part-time while studying in Singapore?",
				a: "Yes, but only if you attend an approved institution, up to 16 hours per week during term time."
			}
		],
		visaSteps: [
			{
				title: "Secure University Acceptance",
				desc: "Accept admission and receive confirmation"
			},
			{
				title: "Register with SOLAR",
				desc: "Your university initiates registration on the SOLAR visa system"
			},
			{
				title: "Submit eForm 16",
				desc: "Apply online and pay the application fee of SGD $30"
			},
			{
				title: "Receive IPA Letter",
				desc: "Receive your In-Principle Approval letter to enter Singapore"
			},
			{
				title: "Medical Exam & STP Issue",
				desc: "Complete health scans on arrival and pick up Student Pass card"
			}
		],
		calculatorCosts: [
			{
				label: "Tuition Fees",
				public: "SGD $17,000 - $35,000",
				private: "SGD $22,000 - $40,000"
			},
			{
				label: "Living Expenses",
				public: "SGD $14,400 - $26,400",
				private: "SGD $14,400 - $26,400"
			},
			{
				label: "Accommodation",
				public: "SGD $8,400 - $12,000",
				private: "SGD $8,400 - $12,000"
			},
			{
				label: "Food",
				public: "SGD $3,600 - $4,800",
				private: "SGD $3,600 - $4,800"
			},
			{
				label: "Health Insurance",
				public: "SGD $400 - $600",
				private: "SGD $400 - $600"
			},
			{
				label: "Transport",
				public: "SGD $800 - $1,200",
				private: "SGD $800 - $1,200"
			}
		],
		totalBudgetPublic: "SGD $31,400 - $61,400 / yr",
		totalBudgetPrivate: "SGD $36,400 - $66,400 / yr",
		workImpactNote: "Part-time jobs pay average wages of SGD $10 - $14/hr, helping offset basic pocket expenses."
	}
};
var CountryDetail = ({ countryId }) => {
	const config = COUNTRY_DATA[countryId] || COUNTRY_DATA.germany;
	const [activeUniIdx, setActiveUniIdx] = useState(0);
	const [calcTab, setCalcTab] = useState("public");
	const [openFaqIdx, setOpenFaqIdx] = useState(null);
	const handleUniScroll = (direction) => {
		if (direction === "left") setActiveUniIdx((prev) => prev === 0 ? config.universities.length - 1 : prev - 1);
		else setActiveUniIdx((prev) => prev === config.universities.length - 1 ? 0 : prev + 1);
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
								id: "country-grid",
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
								fill: "url(#country-grid)"
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
								/* @__PURE__ */ jsx("a", {
									href: "/countries",
									className: "hover:text-primary transition-colors font-medium",
									children: "Countries"
								}),
								/* @__PURE__ */ jsx("span", { children: "/" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-[#0F172A] font-semibold",
									children: config.name
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-1.5 self-start mb-5 bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1 text-[11px] font-bold text-slate-600",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-sm",
											children: config.flag
										}), /* @__PURE__ */ jsx("span", { children: config.badgeText })]
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
										children: ["Study in ", /* @__PURE__ */ jsx("span", {
											className: "font-serif italic font-normal text-primary",
											children: config.name
										})]
									}),
									/* @__PURE__ */ jsxs(motion.p, {
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
										children: [
											"Discover top university ranks, tuition cost frameworks, local living parameters, work permits and pathways in ",
											config.name,
											"."
										]
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
										className: "grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50/70 border border-slate-100 rounded-2xl p-5 mb-8 text-center",
										children: config.stats.map(({ value, label }) => /* @__PURE__ */ jsxs("div", {
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
											href: "#universities",
											className: "flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-primary hover:bg-secondary transition-all shadow-md shadow-primary/10 hover:-translate-y-0.5",
											children: ["Explore Universities ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
										}), /* @__PURE__ */ jsx("a", {
											href: "/book-consultation",
											className: "flex items-center justify-center gap-1.5 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5",
											children: "Book Free Consultation"
										})]
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
									delay: .25,
									duration: .5
								},
								className: "lg:w-[420px] flex flex-col gap-5 justify-between shrink-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative h-[200px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: config.landmarkImage,
											alt: config.landmarkLabel,
											className: "w-full h-full object-cover"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" }),
										/* @__PURE__ */ jsxs("span", {
											className: "absolute bottom-3 left-4 text-xs font-bold text-white flex items-center gap-1",
											children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-red-500" }), config.landmarkLabel]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3.5",
									children: [/* @__PURE__ */ jsxs("h3", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5",
										children: [
											"Why ",
											config.name,
											"?"
										]
									}), config.highlights.map((item) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2.5 text-xs text-[#0F172A] font-bold",
										children: [/* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: item })]
									}, item))]
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
						children: config.whyTitle
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mt-1",
						children: config.whyDesc
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						config.highlights.slice(0, 3).map((item, idx) => /* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(GraduationCap, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 tracking-tight",
									children: item
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-[#64748B] font-medium mt-2 leading-relaxed",
									children: "Enjoy excellent post-study stays, world-class teaching faculties, and strong support mechanisms tailored for foreign candidates."
								})
							]
						}, idx)),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-emerald-50 text-emerald-600",
									children: /* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 tracking-tight",
									children: "Strong Industry Integration"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-[#64748B] font-medium mt-2 leading-relaxed",
									children: "Vast network connections linking campuses to corporate headquarters, high-technology labs, and hiring firms."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-amber-50 text-amber-600",
									children: /* @__PURE__ */ jsx(Award, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 tracking-tight",
									children: "Prestigious Scholarships"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-[#64748B] font-medium mt-2 leading-relaxed",
									children: "Access funded government grants, corporate fellowships, and institutional tuition waivers to ease financial strain."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-purple-50 text-purple-600",
									children: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-bold text-slate-800 tracking-tight",
									children: "Simplified Stay Back Visas"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[11px] text-[#64748B] font-medium mt-2 leading-relaxed",
									children: "Transition seamlessly from academic study slots to local corporate employment options via streamlined work routes."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "universities",
				className: "py-14 bg-slate-50 border-t border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row items-stretch gap-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "w-full lg:w-[320px] shrink-0 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-sm font-black text-slate-800 tracking-tight mb-5 flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ jsx(Compass, { className: "w-4 h-4 text-primary" }),
									config.name,
									" Quick Facts"
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3.5",
								children: config.facts.map(({ label, value }) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-50 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[#64748B] font-semibold",
										children: label
									}), /* @__PURE__ */ jsx("span", {
										className: "text-slate-800 font-extrabold",
										children: value
									})]
								}, label))
							})] }), /* @__PURE__ */ jsx("div", {
								className: "mt-8 opacity-25",
								children: /* @__PURE__ */ jsx("svg", {
									viewBox: "0 0 300 60",
									className: "w-full h-auto text-primary fill-current",
									children: /* @__PURE__ */ jsx("path", { d: "M0,60 L300,60 L300,45 L290,45 L290,20 L280,20 L280,45 L270,45 L270,30 L260,30 L260,45 L230,45 L230,10 L220,10 L220,5 L215,5 L215,10 L205,10 L205,45 L180,45 L180,25 L170,25 L170,15 L165,5 L160,15 L160,25 L150,25 L150,45 L130,45 L130,20 L120,20 L120,45 L90,45 L90,30 L80,30 L80,45 L60,45 L60,15 L50,15 L50,45 L25,45 L25,5 L15,5 L15,45 L0,45 Z" })
								})
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-6 shadow-sm",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between mb-6",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight",
									children: ["Top Universities in ", config.name]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-slate-400 mt-1",
									children: "Direct academic placements & fully accredited tracks"
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 border border-slate-100 rounded-full p-1 bg-slate-50",
									children: [/* @__PURE__ */ jsx("button", {
										onClick: () => handleUniScroll("left"),
										className: "p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none",
										"aria-label": "Previous University",
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5 rotate-90" })
									}), /* @__PURE__ */ jsx("button", {
										onClick: () => handleUniScroll("right"),
										className: "p-1 rounded-full text-slate-600 hover:bg-white hover:shadow-sm transition-all focus:outline-none",
										"aria-label": "Next University",
										children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5 -rotate-90" })
									})]
								})]
							}), /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -10
									},
									transition: { duration: .2 },
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative h-[220px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: config.universities[activeUniIdx]?.image,
												alt: config.universities[activeUniIdx]?.name,
												className: "w-full h-full object-cover"
											}),
											/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" }),
											/* @__PURE__ */ jsxs("div", {
												className: "absolute bottom-4 left-4 flex items-center gap-2.5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0",
													style: { backgroundColor: config.universities[activeUniIdx]?.color },
													children: config.universities[activeUniIdx]?.shortName
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
													className: "text-white text-xs font-bold leading-none",
													children: config.universities[activeUniIdx]?.name
												}), /* @__PURE__ */ jsxs("span", {
													className: "text-[10px] text-white/70 font-semibold mt-1 block",
													children: ["QS Global Rank: #", config.universities[activeUniIdx]?.qsRank]
												})] })]
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col justify-between font-sans",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "space-y-4",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "grid grid-cols-2 gap-4",
												children: [
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
														className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest",
														children: "Tuition"
													}), /* @__PURE__ */ jsx("p", {
														className: "text-xs font-extrabold text-slate-800 mt-1 leading-snug",
														children: config.universities[activeUniIdx]?.tuition
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
														className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest",
														children: "Scholarships"
													}), /* @__PURE__ */ jsx("p", {
														className: "text-xs font-extrabold text-slate-800 mt-1 leading-snug",
														children: config.universities[activeUniIdx]?.scholarships
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
														className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest",
														children: "Degree Count"
													}), /* @__PURE__ */ jsxs("p", {
														className: "text-xs font-extrabold text-slate-800 mt-1 leading-snug",
														children: [config.universities[activeUniIdx]?.programs, "+ Programs"]
													})] }),
													/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
														className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest",
														children: "Intake Period"
													}), /* @__PURE__ */ jsx("p", {
														className: "text-xs font-extrabold text-slate-800 mt-1 leading-snug",
														children: "Fall & Spring"
													})] })
												]
											}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2",
												children: "Popular Courses"
											}), /* @__PURE__ */ jsx("div", {
												className: "flex items-center gap-2 flex-wrap",
												children: config.universities[activeUniIdx]?.popularCourses.map((course, idx) => /* @__PURE__ */ jsx("span", {
													className: "px-2.5 py-1 rounded bg-slate-50 text-[10px] font-bold text-slate-700 border border-slate-200/50",
													children: course
												}, idx))
											})] })]
										}), /* @__PURE__ */ jsxs("div", {
											className: "mt-6 pt-4 border-t border-slate-100 flex items-center justify-between",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded flex items-center gap-1",
												children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5" }), " Fully Accredited"]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ jsxs("a", {
													href: "/universities",
													className: "text-[10px] font-bold text-primary hover:text-secondary flex items-center gap-0.5",
													children: ["View All ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
												}), /* @__PURE__ */ jsxs("a", {
													href: "/book-consultation",
													className: "text-[10px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5",
													children: ["Apply Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
												})]
											})]
										})]
									})]
								}, activeUniIdx)
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row items-stretch gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "text-sm font-black text-slate-800 tracking-tight mb-5",
							children: ["Popular Courses in ", config.name]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: config.courses.map((course, idx) => /* @__PURE__ */ jsx("div", {
								className: "bg-slate-50/50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between",
								children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-2 mb-2",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-bold text-slate-800 leading-snug",
										children: course.name
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[8px] font-bold text-primary bg-primary/6 px-2 py-0.5 rounded-full shrink-0",
										children: course.demand
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-2 text-[10px] text-slate-600 mt-3 pt-2 border-t border-slate-100/50",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-slate-400 font-bold uppercase text-[8px] tracking-wider block",
										children: "Avg Salary"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-extrabold text-slate-700",
										children: course.avgSalary
									})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-slate-400 font-bold uppercase text-[8px] tracking-wider block",
										children: "Top Universities"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-extrabold text-slate-700 truncate block",
										children: course.topUnis
									})] })]
								})] })
							}, idx))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "w-full lg:w-[380px] shrink-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight",
									children: "Tuition & Cost Calculator"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold text-[#64748B]",
									children: "Annual Cost"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 p-0.5 bg-slate-200/50 rounded-xl mb-5",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => setCalcTab("public"),
									className: `py-2 rounded-lg text-xs font-bold transition-all focus:outline-none ${calcTab === "public" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-800"}`,
									children: "Public Tracks"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => setCalcTab("private"),
									className: `py-2 rounded-lg text-xs font-bold transition-all focus:outline-none ${calcTab === "private" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-800"}`,
									children: "Private Tracks"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-2.5 text-xs font-sans",
								children: config.calculatorCosts.map(({ label, public: pVal, private: prVal }) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between pb-1 border-b border-slate-200/50 last:border-0 last:pb-0 font-medium",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[#64748B]",
										children: label
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[#0F172A] font-extrabold",
										children: calcTab === "public" ? pVal : prVal
									})]
								}, label))
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 pt-5 border-t border-slate-200/80",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between bg-primary/6 rounded-2xl px-4 py-3.5 mb-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-slate-600",
									children: "Total Budget / Year"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-black text-primary",
									children: calcTab === "public" ? config.totalBudgetPublic : config.totalBudgetPrivate
								})]
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[10px] text-[#64748B] font-medium leading-normal flex items-start gap-1.5",
								children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", { children: config.workImpactNote })]
							})]
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
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5",
										children: [/* @__PURE__ */ jsx(Award, { className: "w-4.5 h-4.5 text-primary" }), "Top Scholarships"]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "space-y-4",
										children: config.scholarships.map((scholar, idx) => /* @__PURE__ */ jsxs("div", {
											className: "pb-3 border-b border-slate-50 last:border-0 last:pb-0",
											children: [/* @__PURE__ */ jsx("h4", {
												className: "text-xs font-bold text-slate-800 leading-snug",
												children: scholar.name
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col text-[10px] text-slate-500 font-semibold mt-1 space-y-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-primary font-bold",
													children: scholar.funding
												}), /* @__PURE__ */ jsxs("span", { children: ["Eligibility: ", scholar.eligibility] })]
											})]
										}, idx))
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "/scholarships",
										className: "mt-4 text-[10px] font-bold text-primary hover:text-secondary flex items-center gap-1",
										children: ["View All Scholarships ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm",
								children: [/* @__PURE__ */ jsxs("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4.5 h-4.5 text-primary" }), "Top Student Cities"]
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-3.5",
									children: config.cities.map((city, idx) => /* @__PURE__ */ jsxs("div", {
										className: "relative h-[80px] rounded-xl overflow-hidden shadow-sm group",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: city.image,
												alt: city.name,
												className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
											}),
											/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
											/* @__PURE__ */ jsxs("div", {
												className: "absolute bottom-2.5 left-2.5 text-white font-bold leading-none",
												children: [/* @__PURE__ */ jsx("p", {
													className: "text-[11px]",
													children: city.name
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[8px] text-white/85 font-semibold mt-1 block",
													children: city.cost
												})]
											})
										]
									}, idx))
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-slate-100 rounded-3xl p-5 shadow-sm font-sans",
								children: [/* @__PURE__ */ jsxs("h3", {
									className: "text-sm font-black text-slate-800 tracking-tight mb-4 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(CheckCircle, { className: "w-4.5 h-4.5 text-primary" }), "Student Visa Guide"]
								}), /* @__PURE__ */ jsx("div", {
									className: "relative border-l border-slate-100 ml-2.5 pl-4 space-y-4",
									children: config.visaSteps.map((step, idx) => /* @__PURE__ */ jsxs("div", {
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
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white border-b border-slate-100",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "text-center max-w-2xl mx-auto mb-10",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "px-3 py-1.5 rounded-full bg-primary/8 text-xs font-bold text-primary uppercase tracking-wider border border-primary/10",
									children: "Testimonials"
								}),
								/* @__PURE__ */ jsxs("h2", {
									className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-3",
									children: [config.name, " Success Stories"]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-400 mt-1",
									children: "Real academic paths and career endpoints"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-col md:flex-row gap-6 justify-center",
							children: config.successStories.map((story, idx) => /* @__PURE__ */ jsxs("div", {
								className: "bg-slate-50/60 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex-1 max-w-md flex flex-col justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mb-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: `w-8 h-8 rounded-full ${story.color} text-white font-extrabold text-xs flex items-center justify-center`,
										children: story.initials
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-bold text-slate-800 leading-none",
										children: story.name
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[9px] text-slate-400 font-semibold mt-1 truncate",
										children: story.university
									})] })]
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-[11px] italic text-slate-500 font-semibold leading-relaxed mb-4",
									children: [
										"“",
										story.quote,
										"”"
									]
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "border-t border-slate-150 pt-3 text-[10px] text-slate-600 font-medium space-y-1",
									children: [
										/* @__PURE__ */ jsxs("p", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-400 font-bold uppercase text-[8px] tracking-wider block",
												children: "Course"
											}),
											" ",
											story.course
										] }),
										/* @__PURE__ */ jsxs("p", { children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-slate-400 font-bold uppercase text-[8px] tracking-wider block",
												children: "Outcome"
											}),
											" ",
											story.outcome
										] }),
										/* @__PURE__ */ jsxs("div", {
											className: "inline-flex mt-2 bg-emerald-50 text-emerald-600 text-[8px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1.5 self-start",
											children: [/* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Visa Approved" })]
										})
									]
								})]
							}, idx))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-center mt-8",
							children: /* @__PURE__ */ jsxs("a", {
								href: "/success-stories",
								className: "inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-secondary transition-colors",
								children: ["View All Success Stories ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-white border-b border-slate-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-5xl mx-auto",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-lg font-bold text-slate-900 tracking-tight mb-6",
							children: "You May Also Like"
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
							children: [RELATED_COUNTRIES[countryId]?.map((rc, idx) => /* @__PURE__ */ jsxs("a", {
								href: `/countries/${rc.slug}`,
								className: "flex items-center gap-2.5 bg-white border border-slate-200/70 rounded-2xl p-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xl",
									children: rc.flag
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-bold text-slate-700 group-hover:text-primary transition-colors",
									children: rc.name
								})]
							}, idx)), /* @__PURE__ */ jsxs("a", {
								href: "/assessment",
								className: "flex items-center gap-2.5 bg-primary/[0.04] border border-primary/10 rounded-2xl p-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center",
									children: /* @__PURE__ */ jsx(Compass, { className: "w-4 h-4 text-primary" })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-bold text-primary group-hover:text-secondary transition-colors",
									children: "Take Assessment"
								})]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-slate-50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-slate-400 mt-1",
							children: ["Get instant answers regarding studying in ", config.name]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-3 font-sans",
						children: config.faqs.map((faq, idx) => {
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
							id: "cta-grid",
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
							fill: "url(#cta-grid)"
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-4 text-center relative z-10",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl sm:text-3xl font-black tracking-tight mb-4 text-pretty",
							children: [
								"Ready to Begin Your Study Journey in ",
								config.name,
								"?"
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8 font-medium",
							children: "Join thousands of successful candidates who used our platform to build documentation, match universities, and secure visas."
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
								children: "Start Free Profile Assessment"
							})]
						})
					]
				})]
			})
		]
	});
};
//#endregion
export { CountryDetail as t };
