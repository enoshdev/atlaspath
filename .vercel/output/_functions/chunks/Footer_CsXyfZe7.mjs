import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Calendar, Check, Menu, MessageSquare, Send, X } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Logo.tsx
var Logo = ({ className = "", iconOnly = false }) => {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex items-center gap-2.5 select-none ${className}`,
		children: [/* @__PURE__ */ jsxs("svg", {
			width: "32",
			height: "32",
			viewBox: "0 0 40 40",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			"aria-hidden": "true",
			style: { flexShrink: 0 },
			children: [
				/* @__PURE__ */ jsx("path", {
					d: "M20 1L22.2 18L20 21L17.8 18L20 1Z",
					fill: "#1E2D4A"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M20 39L17.8 22L20 19L22.2 22L20 39Z",
					fill: "#1E2D4A"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M39 20L22 22.2L19 20L22 17.8L39 20Z",
					fill: "#1E2D4A"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M1 20L18 17.8L21 20L18 22.2L1 20Z",
					fill: "#1E2D4A"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M33 7L25.5 17L24 15.5L33 7Z",
					fill: "#1E2D4A",
					opacity: "0.55"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M7 7L16 15.5L14.5 17L7 7Z",
					fill: "#1E2D4A",
					opacity: "0.55"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M33 33L24 25L25.5 23.5L33 33Z",
					fill: "#1E2D4A",
					opacity: "0.55"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M7 33L14.5 23.5L16 25L7 33Z",
					fill: "#1E2D4A",
					opacity: "0.55"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "20",
					cy: "20",
					r: "2",
					fill: "#1E2D4A"
				})
			]
		}), !iconOnly && /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-bold tracking-tight text-[#0F172A]",
				style: {
					fontSize: "17px",
					letterSpacing: "-0.3px"
				},
				children: "AtlasPath"
			}), /* @__PURE__ */ jsx("span", {
				className: "font-semibold uppercase text-[#64748B]",
				style: {
					fontSize: "7px",
					letterSpacing: "1.2px",
					marginTop: "2px"
				},
				children: "Your Global Future, Planned."
			})]
		})]
	});
};
//#endregion
//#region src/components/Navbar.tsx
var Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hoveredIdx, setHoveredIdx] = useState(null);
	const [currentPath, setCurrentPath] = useState("");
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) setIsScrolled(true);
			else setIsScrolled(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);
	const navLinks = [
		{
			name: "Universities",
			href: "/universities"
		},
		{
			name: "Countries",
			href: "/countries"
		},
		{
			name: "Scholarships",
			href: "/scholarships"
		},
		{
			name: "Resources",
			href: "/resources"
		},
		{
			name: "Success Stories",
			href: "/success-stories"
		},
		{
			name: "Team",
			href: "/team"
		},
		{
			name: "About Us",
			href: "/#about"
		}
	];
	const isActive = (href) => {
		if (href === "/countries" && currentPath.startsWith("/countries")) return true;
		if (href === "/universities" && currentPath.startsWith("/universities")) return true;
		if (href === "/scholarships" && currentPath.startsWith("/scholarships")) return true;
		if (href === "/success-stories" && currentPath.startsWith("/success-stories")) return true;
		if (href === "/resources" && currentPath.startsWith("/resources")) return true;
		if (href === "/team" && currentPath.startsWith("/team")) return true;
		if (href === "/" && currentPath === "/") return true;
		return false;
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("header", {
		className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1280px] w-full h-full mx-auto flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex-1 flex justify-start",
					children: /* @__PURE__ */ jsx("a", {
						href: "/",
						"aria-label": "AtlasPath Homepage",
						className: "focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0",
						children: /* @__PURE__ */ jsx(Logo, {})
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center justify-center gap-1 xl:gap-2 h-full relative",
					children: navLinks.map((link, idx) => {
						const active = isActive(link.href);
						const isHovered = hoveredIdx === idx;
						return /* @__PURE__ */ jsxs("a", {
							href: link.href,
							onMouseEnter: () => setHoveredIdx(idx),
							onMouseLeave: () => setHoveredIdx(null),
							className: `relative h-full flex items-center px-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${active ? "text-primary font-bold" : "text-slate-600 hover:text-primary"}`,
							children: [
								isHovered && /* @__PURE__ */ jsx(motion.span, {
									layoutId: "hoverNavPill",
									className: "absolute inset-y-4 inset-x-0.5 rounded-lg bg-slate-100/60 -z-10",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: {
										type: "spring",
										stiffness: 350,
										damping: 30
									}
								}),
								/* @__PURE__ */ jsx("span", {
									className: "relative z-10",
									children: link.name
								}),
								active && /* @__PURE__ */ jsx(motion.span, {
									layoutId: "activeNavTab",
									className: "absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-10",
									transition: {
										type: "spring",
										stiffness: 380,
										damping: 30
									}
								})
							]
						}, link.name);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1 flex justify-end items-center gap-3 h-full",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "hidden lg:flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/919876543210",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500 shrink-0",
							children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: "WhatsApp" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "/book-consultation",
							className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-secondary/20 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary shrink-0",
							children: [
								/* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
								/* @__PURE__ */ jsx("span", { children: "Book Consultation" }),
								/* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" })
							]
						})]
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setIsMobileMenuOpen(true),
						className: "lg:hidden p-2 rounded-full text-text hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary",
						"aria-label": "Open mobile navigation menu",
						"aria-expanded": isMobileMenuOpen,
						children: /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
					})]
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md lg:hidden",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 200
			},
			className: "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-8",
				children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("button", {
					onClick: () => setIsMobileMenuOpen(false),
					className: "p-2 rounded-full text-text hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary",
					"aria-label": "Close mobile navigation menu",
					children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
				})]
			}), /* @__PURE__ */ jsx("nav", {
				className: "flex flex-col gap-4",
				children: navLinks.map((link, idx) => {
					const active = isActive(link.href);
					return /* @__PURE__ */ jsx(motion.a, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: idx * .05 },
						href: link.href,
						onClick: () => setIsMobileMenuOpen(false),
						className: `text-lg font-semibold transition-all duration-300 ${active ? "text-primary" : "text-text hover:text-primary"}`,
						children: link.name
					}, link.name);
				})
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 mt-8",
				children: [/* @__PURE__ */ jsxs("a", {
					href: "https://wa.me/919876543210",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300",
					children: [/* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Connect via WhatsApp" })]
				}), /* @__PURE__ */ jsxs("a", {
					href: "/book-consultation",
					onClick: () => setIsMobileMenuOpen(false),
					className: "flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20",
					children: [
						/* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
						/* @__PURE__ */ jsx("span", { children: "Book Consultation" }),
						/* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
					]
				})]
			})]
		})
	}) })] });
};
//#endregion
//#region src/components/Footer.tsx
var Footer = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		setStatus("loading");
		setTimeout(() => {
			if (email.includes("@")) {
				setStatus("success");
				setEmail("");
				setTimeout(() => setStatus("idle"), 3e3);
			} else {
				setStatus("error");
				setTimeout(() => setStatus("idle"), 3e3);
			}
		}, 1200);
	};
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-4 flex flex-col gap-6",
					children: [
						/* @__PURE__ */ jsx(Logo, { className: "text-white" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-slate-500 leading-relaxed max-w-sm text-pretty",
							children: "Empowering students to achieve their global education dreams with clarity, precision, and verified matching systems."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "https://linkedin.com/company/atlaspath",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary",
									"aria-label": "AtlasPath LinkedIn Page",
									children: /* @__PURE__ */ jsxs("svg", {
										className: "w-4 h-4",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [
											/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
											/* @__PURE__ */ jsx("rect", {
												x: "2",
												y: "9",
												width: "4",
												height: "12"
											}),
											/* @__PURE__ */ jsx("circle", {
												cx: "4",
												cy: "4",
												r: "2"
											})
										]
									})
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://instagram.com/atlaspath",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary",
									"aria-label": "AtlasPath Instagram Page",
									children: /* @__PURE__ */ jsxs("svg", {
										className: "w-4 h-4",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [
											/* @__PURE__ */ jsx("rect", {
												x: "2",
												y: "2",
												width: "20",
												height: "20",
												rx: "5",
												ry: "5"
											}),
											/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
											/* @__PURE__ */ jsx("line", {
												x1: "17.5",
												y1: "6.5",
												x2: "17.51",
												y2: "6.5"
											})
										]
									})
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://facebook.com/atlaspath",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary",
									"aria-label": "AtlasPath Facebook Page",
									children: /* @__PURE__ */ jsx("svg", {
										className: "w-4 h-4",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
									})
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://youtube.com/@atlaspath",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "p-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-primary",
									"aria-label": "AtlasPath YouTube Page",
									children: /* @__PURE__ */ jsxs("svg", {
										className: "w-4 h-4",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }), /* @__PURE__ */ jsx("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" })]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 grid grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold text-white uppercase tracking-wider",
								children: "Quick Links"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "flex flex-col gap-2.5 text-xs",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/universities",
										className: "hover:text-white transition-colors",
										children: "Universities"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries",
										className: "hover:text-white transition-colors",
										children: "Countries"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/scholarships",
										className: "hover:text-white transition-colors",
										children: "Scholarships"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/assessment",
										className: "hover:text-white transition-colors",
										children: "Assessment"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/book-consultation",
										className: "hover:text-white transition-colors",
										children: "Book Consultation"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "Resources"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/success-stories",
										className: "hover:text-white transition-colors",
										children: "Success Stories"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/#about",
										className: "hover:text-white transition-colors",
										children: "About Us"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold text-white uppercase tracking-wider",
								children: "Study Countries"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "flex flex-col gap-2.5 text-xs",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/germany",
										className: "hover:text-white transition-colors",
										children: "Study in Germany"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/canada",
										className: "hover:text-white transition-colors",
										children: "Study in Canada"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/australia",
										className: "hover:text-white transition-colors",
										children: "Study in Australia"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/united-kingdom",
										className: "hover:text-white transition-colors",
										children: "Study in UK"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/united-states",
										className: "hover:text-white transition-colors",
										children: "Study in USA"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/ireland",
										className: "hover:text-white transition-colors",
										children: "Study in Ireland"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/netherlands",
										className: "hover:text-white transition-colors",
										children: "Study in Netherlands"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/countries/singapore",
										className: "hover:text-white transition-colors",
										children: "Study in Singapore"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold text-white uppercase tracking-wider",
								children: "Resources"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "flex flex-col gap-2.5 text-xs",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "Visa Guide"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "SOP Guide"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "Scholarship Guide"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "IELTS Guide"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "Education Loans"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "/resources",
										className: "hover:text-white transition-colors",
										children: "All Resources"
									}) })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-3 flex flex-col gap-4",
					children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-xs font-bold text-white uppercase tracking-wider",
							children: "Newsletter"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-slate-500 leading-relaxed text-pretty",
							children: "Get the latest updates and study abroad guidance directly to your inbox."
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "flex flex-col gap-2 relative",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center bg-slate-900 border border-slate-800 rounded-full py-1.5 pl-4 pr-1.5 focus-within:border-[#6D4AFF] focus-within:shadow-[0_0_0_4px_rgba(109,74,255,0.12)] hover:border-slate-700 transition-all duration-200 ease-in-out",
									children: [/* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: "Enter your email address…",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										disabled: status === "loading",
										className: "bg-transparent text-xs text-white placeholder-slate-600 outline-none w-full mr-2",
										required: true
									}), /* @__PURE__ */ jsx("button", {
										type: "submit",
										disabled: status === "loading",
										className: "p-2.5 rounded-full bg-primary hover:bg-secondary text-white transition-all shadow-md shadow-primary/10 flex-shrink-0",
										"aria-label": "Submit newsletter email",
										children: status === "loading" ? /* @__PURE__ */ jsxs("svg", {
											className: "w-3.5 h-3.5 animate-spin",
											viewBox: "0 0 24 24",
											fill: "none",
											children: [/* @__PURE__ */ jsx("circle", {
												cx: "12",
												cy: "12",
												r: "10",
												stroke: "currentColor",
												strokeWidth: "4",
												className: "opacity-25"
											}), /* @__PURE__ */ jsx("path", {
												fill: "currentColor",
												d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											})]
										}) : status === "success" ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" })
									})]
								}),
								status === "success" && /* @__PURE__ */ jsxs("p", {
									className: "text-[10px] text-emerald-500 font-semibold flex items-center gap-1 mt-1",
									children: [/* @__PURE__ */ jsx(Check, { className: "w-3 h-3" }), " Successfully subscribed!"]
								}),
								status === "error" && /* @__PURE__ */ jsxs("p", {
									className: "text-[10px] text-rose-500 font-semibold flex items-center gap-1 mt-1",
									children: [/* @__PURE__ */ jsx(AlertCircle, { className: "w-3 h-3" }), " Please enter a valid email address."]
								})
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600",
			children: /* @__PURE__ */ jsxs("span", { children: [
				"© ",
				currentYear,
				" AtlasPath. All rights reserved."
			] })
		})]
	});
};
//#endregion
export { Navbar as n, Footer as t };
