import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Calendar, Check, Menu, MessageCircle, MessageSquare, RefreshCw, Send, Sparkles, X } from "lucide-react";
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
//#region src/components/WhatsAppButton.tsx
var WhatsAppButton = () => {
	return /* @__PURE__ */ jsxs("a", {
		href: "https://wa.me/919876543210",
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-6 left-6 z-30 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-emerald-400 group focus-visible:ring-offset-2 animate-bounce-slow",
		"aria-label": "Contact us on WhatsApp",
		children: [
			/* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none pointer-events-none" }),
			/* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 relative z-10" }),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      ` })
		]
	});
};
//#endregion
//#region src/components/AIAssistant.tsx
var KNOWLEDGE = [
	{
		keywords: ["germany", "deutschland"],
		response: "Germany is a top destination with tuition-free public universities! Key points:\n\n• Tuition: €0–€3,000/year (public)\n• Living cost: €10,200–€12,000/year\n• APS certificate is mandatory for students from India, China, Vietnam\n• DAAD and Heinrich Böll scholarships available\n• 18 months post-study work permit\n• Strong engineering and automotive sectors",
		followUp: [
			"How do I apply to Germany?",
			"What is APS?",
			"DAAD scholarship details"
		]
	},
	{
		keywords: ["canada"],
		response: "Canada is one of the most popular study destinations:\n\n• Tuition: CAD $16,000–$35,000/year\n• Living cost: CAD $12,000–$18,000/year\n• Up to 3 years PGWP (Post-Graduation Work Permit)\n• SDS stream for faster visa processing\n• Direct PR pathway through Express Entry\n• Vanier, OGS, and entrance scholarships available",
		followUp: [
			"Canada visa process",
			"SDS vs non-SDS",
			"PGWP details"
		]
	},
	{
		keywords: ["australia"],
		response: "Australia offers world-class education with great post-study options:\n\n• Tuition: AUD $25,000–$45,000/year\n• Living cost: AUD $16,000–$24,000/year\n• 2–4 years PSW (Post-Study Work) visa\n• Subclass 500 student visa\n• Australia Awards and Destination Australia scholarships\n• Strong part-time work opportunities (up to 48 hrs/fortnight)",
		followUp: [
			"Australia visa step-by-step",
			"PSW visa details",
			"Part-time work rules"
		]
	},
	{
		keywords: ["uk", "united kingdom"],
		response: "The UK is a global education hub with rich heritage:\n\n• Tuition: £14,000–£26,000/year\n• Living cost: £12,000–£16,000/year\n• 2-year Graduate Route visa\n• 1-year fast Master programs available\n• Chevening and Commonwealth scholarships\n• 80+ universities to choose from",
		followUp: [
			"UK visa process",
			"Chevening scholarship",
			"1-year Masters"
		]
	},
	{
		keywords: [
			"usa",
			"united states",
			"america"
		],
		response: "The USA offers unparalleled academic opportunities:\n\n• Tuition: $25,000–$60,000/year\n• Living cost: $12,000–$20,000/year\n• 1–3 years OPT (STEM students get 3 years)\n• F-1 student visa process\n• Fulbright and Knight-Hennessy scholarships\n• 150+ universities with global rankings\n• High starting packages in tech and finance",
		followUp: [
			"F-1 visa process",
			"OPT details",
			"Fulbright scholarship"
		]
	},
	{
		keywords: ["ireland"],
		response: "Ireland is a fast-growing study destination:\n\n• Tuition: €12,000–€25,000/year\n• Living cost: €10,000–€14,000/year\n• 2-year stay-back visa for Master graduates\n• Strong tech sector (Google, Apple, Meta HQs)\n• Post-study work options excellent\n• Friendly, English-speaking environment",
		followUp: [
			"Ireland visa process",
			"Stay-back visa",
			"Tech jobs in Ireland"
		]
	},
	{
		keywords: ["singapore"],
		response: "Singapore is Asias education hub:\n\n• Tuition: SGD $15,000–$40,000/year\n• Living cost: SGD $10,000–$16,000/year\n• NUS and NTU ranked among top global universities\n• Strong scholarships like SINGA\n• Strategic location for Asian careers\n• High employment rate post-graduation",
		followUp: [
			"SINGA scholarship",
			"NUS admission",
			"Singapore visa"
		]
	},
	{
		keywords: ["netherlands", "holland"],
		response: "The Netherlands offers high-quality English-taught programs:\n\n• Tuition: €8,000–€20,000/year\n• Living cost: €10,000–€14,000/year\n• 1-year orientation year visa after studies\n• Holland Scholarship and Orange Tulip available\n• Strong in engineering, business, and social sciences\n• Excellent international student support",
		followUp: [
			"Holland Scholarship",
			"Orientation year visa",
			"Dutch university ranking"
		]
	},
	{
		keywords: [
			"scholarship",
			"scholarships",
			"funding",
			"financial aid",
			"fee waiver"
		],
		response: "We help you find the right scholarships! Here are major options:\n\n• DAAD (Germany) — fully funded\n• Fulbright (USA) — fully funded\n• Chevening (UK) — fully funded\n• Australia Awards — fully funded\n• Vanier Canada — fully funded\n• SINGA (Singapore) — fully funded\n• Erasmus Mundus — EU joint programs\n\nAtlasPath has helped students secure over ₹250Cr in scholarships!",
		followUp: [
			"DAAD scholarship",
			"Fulbright scholarship",
			"Chevening scholarship"
		]
	},
	{
		keywords: [
			"visa",
			"student visa",
			"visa process"
		],
		response: "The student visa process varies by country but generally involves:\n\n1. Get acceptance letter from university\n2. Pay tuition deposit (if required)\n3. Open blocked account (Germany: €11,904)\n4. Get health insurance\n5. Book visa appointment\n6. Prepare documents (financial proof, SOP, etc.)\n7. Attend visa interview\n8. Wait for processing (4–12 weeks depending on country)\n\nAtlasPath provides mock visa interviews and document checklists!",
		followUp: [
			"Germany visa steps",
			"Canada SDS visa",
			"USA F-1 visa"
		]
	},
	{
		keywords: ["ielts"],
		response: "IELTS (International English Language Testing System):\n\n• Required for most English-speaking countries\n• Band 6.5–7.5 typically needed for universities\n• 4 sections: Listening, Reading, Writing, Speaking\n• Score valid for 2 years\n• Both Academic and General Training available\n• Our IELTS Band 7+ Strategy Guide available in Resources!\n• Tip: Practice with timed mock tests regularly",
		followUp: [
			"IELTS vs TOEFL",
			"Improve IELTS score",
			"IELTS resources"
		]
	},
	{
		keywords: ["toefl"],
		response: "TOEFL iBT (Test of English as a Foreign Language):\n\n• Preferred by US and Canadian universities\n• Score range: 0–120 (80–100 typically required)\n• 4 sections: Reading, Listening, Speaking, Writing\n• Score valid for 2 years\n• Internet-based test (iBT)\n• Our TOEFL iBT Complete Preparation guide is available!\n• Tip: Focus on note-taking during Listening section",
		followUp: [
			"TOEFL vs IELTS",
			"TOEFL score requirements",
			"TOEFL resources"
		]
	},
	{
		keywords: ["gre"],
		response: "GRE (Graduate Record Examination):\n\n• Required for many US graduate programs\n• 3 sections: Verbal Reasoning, Quantitative Reasoning, Analytical Writing\n• Score range: 260–340 (Verbal + Quant)\n• Analytical Writing scored 0–6\n• Valid for 5 years\n• Our GRE 330+ Study Plan available!\n• Tip: Focus on vocabulary for Verbal and problem-solving speed for Quant",
		followUp: [
			"GRE vs GMAT",
			"GRE study plan",
			"GRE score for top universities"
		]
	},
	{
		keywords: ["sop", "statement of purpose"],
		response: "A strong Statement of Purpose (SOP) is crucial:\n\n• Usually 800–1000 words\n• Should explain: Why this program? Why this university? Why you?\n• Be specific about your career goals\n• Connect your past experiences to the program\n• Show you have researched the university\n• Avoid generic statements\n\nOur SOP Writing Masterclass in Resources has templates and expert tips!",
		followUp: [
			"SOP format",
			"SOP mistakes to avoid",
			"SOP samples"
		]
	},
	{
		keywords: [
			"lor",
			"recommendation",
			"letter of recommendation"
		],
		response: "Letters of Recommendation (LORs):\n\n• Typically 2–3 LORs required\n• Can be academic (professors) or professional (employers)\n• Should highlight your skills, achievements, and potential\n• Choose recommenders who know you well\n• Give them at least 2–3 weeks notice\n• Share your CV and SOP with them for context\n\nCheck our LOR Request Guide in Resources!",
		followUp: [
			"How to request LOR",
			"LOR vs SOP",
			"LOR samples"
		]
	},
	{
		keywords: [
			"application",
			"admission",
			"apply",
			"deadline"
		],
		response: "The university application process typically:\n\n1. Research universities and programs (4–6 months before deadline)\n2. Prepare for tests (IELTS/TOEFL/GRE)\n3. Get documents ready (transcripts, SOP, LORs)\n4. Submit applications (usually Oct–Jan for Fall intake)\n5. Wait for decisions (4–8 weeks)\n6. Accept offer and pay deposit\n7. Apply for visa\n\nAtlasPath guides you through every step! Start with our free Readiness Assessment.",
		followUp: [
			"Application timeline",
			"Document checklist",
			"Book consultation"
		]
	},
	{
		keywords: [
			"university",
			"universities",
			"college"
		],
		response: "Choosing the right university is key. Consider:\n\n• Academic reputation and rankings\n• Program curriculum and faculty\n• Location and cost of living\n• Scholarship opportunities\n• Career services and alumni network\n• Intake options (Fall/Spring/Summer)\n\nUse our University Matcher tool to find your best-fit universities based on your profile!",
		followUp: [
			"University rankings",
			"University selection tips",
			"Use University Matcher"
		]
	},
	{
		keywords: [
			"budget",
			"cost",
			"tuition",
			"expenses",
			"expensive"
		],
		response: "Study abroad costs vary by country. Here is a quick comparison:\n\n🇩🇪 Germany: €10,200–€15,000/yr\n🇨🇦 Canada: CAD $28,000–$53,000/yr\n🇦🇺 Australia: AUD $41,000–$69,000/yr\n🇬🇧 UK: £26,000–£42,000/yr\n🇺🇸 USA: $37,000–$80,000/yr\n🇮🇪 Ireland: €22,000–€39,000/yr\n\nUse our Budget Calculator and Scholarship Finder to reduce costs!",
		followUp: [
			"Scholarship options",
			"Cost comparison",
			"Budget planner"
		]
	},
	{
		keywords: [
			"timeline",
			"when",
			"how long",
			"duration",
			"intake"
		],
		response: "Typical study abroad timeline:\n\n📅 12–18 months before: Research & test prep\n📅 10–12 months before: Take IELTS/TOEFL/GRE\n📅 8–10 months before: Shortlist universities\n📅 6–8 months before: Submit applications\n📅 4–6 months before: Apply for scholarships\n📅 3–4 months before: Apply for visa\n📅 1–2 months before: Travel preparations\n\nMain intakes: Fall (Sep/Oct), Spring (Jan/Feb), Summer (May/Jun)",
		followUp: [
			"Application deadlines",
			"Fall vs Spring intake",
			"Book consultation"
		]
	},
	{
		keywords: [
			"assessment",
			"readiness",
			"evaluate",
			"profile"
		],
		response: "Our Readiness Assessment is a free 3-step online evaluation:\n\n1. Share your academic profile and preferences\n2. Get a personalized readiness score\n3. Receive tailored university and scholarship recommendations\n\nIt takes just 10 minutes and gives you a clear roadmap for your study abroad journey!",
		followUp: [
			"Take assessment now",
			"Consultation after assessment",
			"How it works"
		]
	},
	{
		keywords: [
			"consultation",
			"consult",
			"advisor",
			"counselor",
			"expert"
		],
		response: "Book a free strategy consultation with our experts:\n\n• Personalized university shortlist\n• Scholarship matching\n• Application strategy\n• Visa guidance\n• Timeline planning\n\nOur consultants have helped 15,000+ students achieve their study abroad dreams!",
		followUp: [
			"Book consultation",
			"Assessment first",
			"What to prepare"
		]
	},
	{
		keywords: ["aps", "aps certificate"],
		response: "The APS (Academic Evaluation Centre) certificate:\n\n• Mandatory for students from India, China, Vietnam applying to Germany\n• Verifies authenticity of academic documents\n• Takes about 2–3 months to process\n• Must be done BEFORE applying for student visa\n• Required for both university admission and visa\n\nStart your APS process early — it is a critical step!",
		followUp: [
			"APS process steps",
			"Germany visa",
			"Germany universities"
		]
	},
	{
		keywords: ["blocked account", "block account"],
		response: "A blocked account (Sperrkonto) is required for German student visas:\n\n• Current amount: €11,904 (2024)\n• You can only access €992 per month\n• Options: Deutsche Bank, Fintiba, Expatrio, Coracle\n• Must be opened before visa application\n• Proof of blocked account is mandatory for visa\n\nWe can guide you through the process!",
		followUp: [
			"Germany visa",
			"Living cost in Germany",
			"Book consultation"
		]
	},
	{
		keywords: [
			"hello",
			"hi",
			"hey",
			"greetings",
			"good morning",
			"good evening"
		],
		response: "Hello! 👋 Welcome to AtlasPath. I am your study abroad planning assistant. Ask me anything about:\n\n• Study destinations (Germany, Canada, Australia, UK, USA, and more)\n• Scholarships and funding\n• Visa processes\n• Tests (IELTS, TOEFL, GRE)\n• Applications and deadlines\n• Budget and cost planning",
		followUp: [
			"Popular destinations",
			"Scholarship options",
			"Take assessment"
		]
	},
	{
		keywords: [
			"thanks",
			"thank you",
			"thanks!",
			"thank"
		],
		response: "You are very welcome! 😊 If you have more questions, just ask. When you are ready, take our free Readiness Assessment or book a consultation to get personalized guidance. Good luck with your study abroad journey! 🎓",
		followUp: [
			"Take assessment",
			"Book consultation",
			"Popular destinations"
		]
	}
];
var FALLBACKS = [
	"I am not sure about that specific query. However, I can help you with:\n\n• Study destinations and universities\n• Scholarships and funding\n• Visa processes\n• Tests (IELTS, TOEFL, GRE)\n• Applications and deadlines\n• Budget planning\n\nCould you try rephrasing your question?",
	"That is a great question! While I do not have the exact details right now, here is what I recommend:\n\n1. Take our free Readiness Assessment for personalized guidance\n2. Book a consultation with our experts\n3. Check our Resources Hub for comprehensive guides\n\nWhat would you like to know more about?",
	"Hmm, I could not find a direct match for that. Try asking about:\n\n• A specific country (Germany, Canada, Australia, etc.)\n• Scholarships and financial aid\n• Visa requirements\n• IELTS/TOEFL/GRE preparation\n• Application timelines"
];
var AIAssistant = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [suggestions, setSuggestions] = useState([]);
	const scrollRef = useRef(null);
	const inputRef = useRef(null);
	useEffect(() => {
		setMessages([{
			sender: "bot",
			text: "Hi there! I am **Atlas AI**, your global education planner. 🎓\n\nAsk me anything about studying abroad — destinations, scholarships, visas, tests, applications, and more!",
			timestamp: /* @__PURE__ */ new Date()
		}]);
		setSuggestions([
			"Popular destinations",
			"Scholarship options",
			"Take assessment"
		]);
	}, []);
	useEffect(() => {
		if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}, [messages, isTyping]);
	useEffect(() => {
		if (isOpen && inputRef.current) inputRef.current.focus();
	}, [isOpen]);
	const findResponse = useCallback((query) => {
		const lower = query.toLowerCase();
		for (const entry of KNOWLEDGE) if (entry.keywords.some((kw) => lower.includes(kw))) return {
			text: entry.response,
			followUp: entry.followUp
		};
		return null;
	}, []);
	const addBotMessage = useCallback((text, followUp) => {
		setIsTyping(true);
		setSuggestions([]);
		setTimeout(() => {
			setIsTyping(false);
			setMessages((prev) => [...prev, {
				sender: "bot",
				text,
				timestamp: /* @__PURE__ */ new Date()
			}]);
			if (followUp && followUp.length > 0) setSuggestions(followUp);
		}, 800 + Math.random() * 600);
	}, []);
	const handleSend = useCallback((text) => {
		const trimmed = text.trim();
		if (!trimmed || isTyping) return;
		setMessages((prev) => [...prev, {
			sender: "user",
			text: trimmed,
			timestamp: /* @__PURE__ */ new Date()
		}]);
		setInput("");
		setSuggestions([]);
		const match = findResponse(trimmed);
		if (match) addBotMessage(match.text, match.followUp);
		else {
			const fallback = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
			addBotMessage(fallback, [
				"Popular destinations",
				"Scholarship options",
				"Take assessment"
			]);
		}
	}, [
		isTyping,
		findResponse,
		addBotMessage
	]);
	const handleKeyDown = (e) => {
		if (e.key === "Enter") handleSend(input);
	};
	const handleSuggestionClick = (suggestion) => {
		handleSend(suggestion);
	};
	const formatText = (text) => {
		return text.split("\n").map((line, i) => {
			if (line.startsWith("•") || line.startsWith("-")) return /* @__PURE__ */ jsx("span", {
				className: "block ml-1",
				children: line
			}, i);
			if (line.startsWith("📅") || line.startsWith("🇩") || line.startsWith("🇨") || line.startsWith("🇦") || line.startsWith("🇬") || line.startsWith("🇺") || line.startsWith("🇮")) return /* @__PURE__ */ jsx("span", {
				className: "block",
				children: line
			}, i);
			if (/^\d+\./.test(line)) return /* @__PURE__ */ jsx("span", {
				className: "block ml-1",
				children: line
			}, i);
			if (line.trim() === "") return /* @__PURE__ */ jsx("br", {}, i);
			return /* @__PURE__ */ jsx("span", {
				className: "block",
				children: line
			}, i);
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-6 z-50",
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, { children: !isOpen && /* @__PURE__ */ jsxs(motion.button, {
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .8,
					opacity: 0
				},
				onClick: () => setIsOpen(true),
				className: "p-4 bg-primary hover:bg-secondary text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
				"aria-label": "Open Atlas AI assistant",
				children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none pointer-events-none" }), /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 relative z-10" })]
			}) }),
			/* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					y: 80,
					scale: .9,
					opacity: 0
				},
				animate: {
					y: 0,
					scale: 1,
					opacity: 1
				},
				exit: {
					y: 80,
					scale: .9,
					opacity: 0
				},
				transition: {
					type: "spring",
					damping: 25,
					stiffness: 220
				},
				className: "w-[calc(100vw-32px)] sm:w-[400px] h-[520px] bg-white border border-slate-200/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "bg-[#090D1A] text-white p-4 flex items-center justify-between shrink-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-xs font-extrabold tracking-tight block",
								children: "Atlas AI"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[9px] text-emerald-400 font-bold uppercase leading-none",
								children: "Online & Active"
							})] })]
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setIsOpen(false),
							className: "p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors",
							"aria-label": "Close",
							children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						ref: scrollRef,
						className: "flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-slate-50/50 scroll-smooth",
						children: [messages.map((msg, idx) => /* @__PURE__ */ jsxs("div", {
							className: `flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: `p-3 text-xs leading-relaxed rounded-2xl ${msg.sender === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white text-slate-800 border border-slate-100 shadow-sm rounded-tl-none"}`,
								children: msg.sender === "bot" ? formatText(msg.text) : msg.text
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[8px] text-slate-400 mt-1 px-1",
								children: msg.timestamp.toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit"
								})
							})]
						}, idx)), isTyping && /* @__PURE__ */ jsx("div", {
							className: "flex flex-col max-w-[80%] self-start items-start",
							children: /* @__PURE__ */ jsxs("div", {
								className: "p-3 bg-white text-slate-500 border border-slate-100 shadow-sm rounded-2xl rounded-tl-none flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }), /* @__PURE__ */ jsx("span", {
									className: "text-xs font-medium",
									children: "Thinking…"
								})]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-4 border-t border-slate-100 bg-white shrink-0",
						children: [
							suggestions.length > 0 && !isTyping && /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5 mb-3",
								children: suggestions.map((s, i) => /* @__PURE__ */ jsxs("button", {
									onClick: () => handleSuggestionClick(s),
									className: "px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-bold text-primary hover:bg-primary/10 transition-all",
									children: [
										s,
										" ",
										/* @__PURE__ */ jsx(ArrowRight, { className: "w-2.5 h-2.5 inline ml-0.5" })
									]
								}, i))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 bg-slate-50 border border-slate-200/60 rounded-xl px-3 py-1.5 focus-within:border-primary/40 focus-within:bg-white transition-all",
								children: [/* @__PURE__ */ jsx("input", {
									ref: inputRef,
									type: "text",
									value: input,
									onChange: (e) => setInput(e.target.value),
									onKeyDown: handleKeyDown,
									placeholder: "Type your question…",
									disabled: isTyping,
									className: "bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none w-full disabled:opacity-50"
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => handleSend(input),
									disabled: !input.trim() || isTyping,
									className: "p-1.5 rounded-lg bg-primary text-white hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
									"aria-label": "Send",
									children: /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" })
								})]
							}),
							messages.length === 1 && /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5 mt-2",
								children: [
									"Germany",
									"Canada",
									"Australia",
									"UK",
									"USA",
									"Scholarships",
									"Visa process",
									"IELTS"
								].map((q) => /* @__PURE__ */ jsx("button", {
									onClick: () => handleSend(q),
									disabled: isTyping,
									className: "px-2 py-1 bg-slate-100 rounded-lg text-[9px] font-bold text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all disabled:opacity-50",
									children: q
								}, q))
							})
						]
					})
				]
			}) }),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes bounce-slow-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      ` })
		]
	});
};
//#endregion
export { Navbar as i, WhatsAppButton as n, Footer as r, AIAssistant as t };
