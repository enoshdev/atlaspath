import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate, x as createAstro } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CgvCVNxy.mjs";
import { t as supabase } from "./supabase_B733jFR2.mjs";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, BarChart3, Bookmark, BookmarkCheck, Clock, Download, FileText, Globe } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ResourceDetail.tsx
var CATEGORY_ICONS = {
	"Visa Guides": FileText,
	"Scholarships": Award,
	"Country Guides": Globe,
	"Applications": FileText,
	"IELTS": FileText,
	"TOEFL": FileText,
	"GRE": FileText,
	"SOP Guides": FileText,
	"LOR Guides": FileText,
	"University Selection": Award,
	"Budget Planning": BarChart3
};
var getVisitorId = () => {
	let id = localStorage.getItem("visitor_id");
	if (!id) {
		id = crypto.randomUUID();
		localStorage.setItem("visitor_id", id);
	}
	return id;
};
var ResourceDetail = ({ resource }) => {
	const [isSaved, setIsSaved] = useState(false);
	const [isDownloading, setIsDownloading] = useState(false);
	const [relatedResources, setRelatedResources] = useState([]);
	const [loadingRelated, setLoadingRelated] = useState(true);
	const userId = getVisitorId();
	useEffect(() => {
		fetch(`/api/resources/save?userId=${userId}`).then((r) => r.json()).then((data) => {
			if (data.data?.includes(resource.id)) setIsSaved(true);
		}).catch(() => {});
	}, [resource.id, userId]);
	useEffect(() => {
		setLoadingRelated(true);
		fetch(`/api/related-resources?slug=${resource.slug}&limit=4`).then((r) => r.json()).then((data) => setRelatedResources(data.data || [])).catch(() => {}).finally(() => setLoadingRelated(false));
	}, [resource.slug]);
	const handleSave = useCallback(async () => {
		if (isSaved) {
			if ((await fetch("/api/resources/save", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId,
					resourceId: resource.id
				})
			})).ok) setIsSaved(false);
		} else if ((await fetch("/api/resources/save", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId,
				resourceId: resource.id
			})
		})).ok) setIsSaved(true);
	}, [
		isSaved,
		resource.id,
		userId
	]);
	const handleDownload = useCallback(async () => {
		if (isDownloading || !resource.fileUrl) return;
		setIsDownloading(true);
		try {
			const data = await (await fetch("/api/resources/download", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					userId,
					resourceId: resource.id
				})
			})).json();
			if (data.downloadUrl) {
				const a = document.createElement("a");
				a.href = data.downloadUrl;
				a.download = data.fileName || resource.title;
				a.target = "_blank";
				a.rel = "noopener noreferrer";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} else alert(data.error || "Download failed");
		} catch {
			alert("Network error. Please try again.");
		} finally {
			setIsDownloading(false);
		}
	}, [
		isDownloading,
		resource,
		userId
	]);
	const CatIcon = CATEGORY_ICONS[resource.category] || FileText;
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#FAFAFA] text-[#0F172A]",
		style: { paddingTop: "80px" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 text-xs text-slate-400 mb-6",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "/",
							className: "hover:text-primary transition-colors font-medium",
							children: "Home"
						}),
						/* @__PURE__ */ jsx("span", { children: "/" }),
						/* @__PURE__ */ jsx("a", {
							href: "/resources",
							className: "hover:text-primary transition-colors font-medium",
							children: "Resources"
						}),
						/* @__PURE__ */ jsx("span", { children: "/" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-[#0F172A] font-semibold truncate max-w-[200px]",
							children: resource.title
						})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "/resources",
					className: "inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-primary transition-colors mb-6",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }), "Back to Resources"]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .4 },
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/70 rounded-3xl p-6 sm:p-8 shadow-sm mb-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-2 mb-4",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary",
											children: [/* @__PURE__ */ jsx(CatIcon, { className: "w-3 h-3" }), resource.category]
										}),
										resource.country && resource.country !== "All" && /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-[10px] font-bold text-sky-600",
											children: [/* @__PURE__ */ jsx(Globe, { className: "w-3 h-3" }), resource.country]
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-bold text-amber-600",
											children: [/* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }), resource.readTime || "N/A"]
										}),
										resource.level && /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600",
											children: [/* @__PURE__ */ jsx(BarChart3, { className: "w-3 h-3" }), resource.level]
										})
									]
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4",
									children: resource.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-slate-500 leading-relaxed mb-6",
									children: resource.description
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsxs("span", {
												className: "font-medium",
												children: [resource.download_count, " downloads"]
											})]
										}),
										resource.fileSize && /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", {
												className: "font-medium",
												children: formatFileSize(resource.fileSize)
											})]
										}),
										resource.fileType && /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", {
												className: "font-medium uppercase",
												children: resource.fileType
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3",
									children: [resource.fileUrl && /* @__PURE__ */ jsxs("button", {
										onClick: handleDownload,
										disabled: isDownloading,
										className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white bg-primary hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20",
										children: [/* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }), isDownloading ? "Preparing Download..." : "Download Resource"]
									}), /* @__PURE__ */ jsx("button", {
										onClick: handleSave,
										className: `inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${isSaved ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-white border-slate-200 text-slate-700 hover:border-primary/30"}`,
										children: isSaved ? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(BookmarkCheck, { className: "w-4 h-4" }), " Saved"] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Bookmark, { className: "w-4 h-4" }), " Save Resource"] })
									})]
								})
							]
						}),
						!resource.fileUrl && /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-slate-200/70 rounded-3xl p-8 shadow-sm mb-6 text-center",
							children: [
								/* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-bold text-slate-400",
									children: "No file attached to this resource"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-400 mt-1",
									children: "Contact the team for more information"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-lg font-bold text-slate-900 tracking-tight mb-4",
								children: "Related Resources"
							}), loadingRelated ? /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ jsxs("div", {
									className: "bg-white border border-slate-200/70 rounded-2xl p-4 animate-pulse",
									children: [/* @__PURE__ */ jsx("div", { className: "h-4 bg-slate-100 rounded w-3/4 mb-2" }), /* @__PURE__ */ jsx("div", { className: "h-3 bg-slate-100 rounded w-1/2" })]
								}, i))
							}) : relatedResources.length > 0 ? /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: relatedResources.map((rel) => /* @__PURE__ */ jsx("a", {
									href: `/resources/${rel.slug}`,
									className: "bg-white border border-slate-200/70 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [
												/* @__PURE__ */ jsx("h3", {
													className: "text-sm font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-1",
													children: rel.title
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[10px] text-slate-400 font-medium mt-1 line-clamp-2",
													children: rel.description
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center gap-2 mt-2",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[9px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full",
														children: rel.category
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[9px] text-slate-400 flex items-center gap-1",
														children: [/* @__PURE__ */ jsx(Download, { className: "w-2.5 h-2.5" }), rel.download_count]
													})]
												})
											]
										}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-slate-300 group-hover:text-primary transition-colors shrink-0 mt-1" })]
									})
								}, rel.id))
							}) : /* @__PURE__ */ jsx("p", {
								className: "text-sm text-slate-400",
								children: "No related resources found."
							})]
						})
					]
				})
			]
		})
	});
};
function formatFileSize(bytes) {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
//#endregion
//#region src/pages/resources/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return [];
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const { data: resource, error } = await supabase.from("resources").select("*").eq("slug", slug).single();
	if (error || !resource) return Astro.redirect("/404");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${resource.title} | AtlasPath Resources`,
		"description": resource.description
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ResourceDetail", ResourceDetail, {
		"client:load": true,
		"resource": resource,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/ResourceDetail",
		"client:component-export": "default"
	})}` })}`;
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/resources/[slug].astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/resources/[slug].astro";
var $$url = "/resources/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/resources/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
