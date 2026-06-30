import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createComponent, i as renderComponent, u as renderTemplate } from "./server_C_GE6gR_.mjs";
import "./compiler_zDhyxpuK.mjs";
import { t as $$Layout } from "./Layout_CdV_TxGV.mjs";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, BookOpen, Check, Edit, ExternalLink, FileText, Mail, Plus, RefreshCw, Save, Trash2, X } from "lucide-react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/AdminPanel.tsx
var CATEGORIES = [
	"Visa Guides",
	"Scholarships",
	"Country Guides",
	"Applications",
	"IELTS",
	"TOEFL",
	"GRE",
	"SOP Guides",
	"LOR Guides",
	"University Selection",
	"Budget Planning"
];
var LEVELS = [
	"Beginner",
	"Intermediate",
	"Advanced"
];
var AdminPanel = () => {
	const [apiKey, setApiKey] = useState("");
	const [authenticated, setAuthenticated] = useState(false);
	const [tab, setTab] = useState("resources");
	const [resources, setResources] = useState([]);
	const [subscribers, setSubscribers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [editResource, setEditResource] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const headers = useCallback(() => ({
		"Content-Type": "application/json",
		"Authorization": `Bearer ${apiKey}`
	}), [apiKey]);
	const fetchResources = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/admin/resources", { headers: headers() });
			if (res.status === 401) {
				setError("Invalid API key");
				setAuthenticated(false);
				return;
			}
			setResources((await res.json()).data || []);
			setError("");
		} catch {
			setError("Failed to fetch resources");
		} finally {
			setLoading(false);
		}
	}, [headers]);
	const fetchSubscribers = useCallback(async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/admin/subscribers", { headers: headers() });
			if (res.status === 401) {
				setError("Invalid API key");
				setAuthenticated(false);
				return;
			}
			setSubscribers((await res.json()).data || []);
			setError("");
		} catch {
			setError("Failed to fetch subscribers");
		} finally {
			setLoading(false);
		}
	}, [headers]);
	const handleLogin = () => {
		if (apiKey.trim()) {
			setAuthenticated(true);
			fetchResources();
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this resource permanently?")) return;
		try {
			const res = await fetch("/api/admin/resources", {
				method: "DELETE",
				headers: headers(),
				body: JSON.stringify({ id })
			});
			if (res.ok) {
				setResources((prev) => prev.filter((r) => r.id !== id));
				showSuccess("Resource deleted");
			} else setError((await res.json()).error || "Delete failed");
		} catch {
			setError("Delete failed");
		}
	};
	const handleSave = async (resource) => {
		try {
			const method = resource.id ? "PUT" : "POST";
			const res = await fetch("/api/admin/resources", {
				method,
				headers: headers(),
				body: JSON.stringify(resource)
			});
			if (res.ok) {
				const data = await res.json();
				if (method === "POST") setResources((prev) => [data.data, ...prev]);
				else setResources((prev) => prev.map((r) => r.id === data.data.id ? data.data : r));
				setShowForm(false);
				setEditResource(null);
				showSuccess(method === "POST" ? "Resource created" : "Resource updated");
			} else setError((await res.json()).error || "Save failed");
		} catch {
			setError("Save failed");
		}
	};
	const handleFileUpload = async (file) => {
		setUploading(true);
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await fetch("/api/admin/upload", {
				method: "POST",
				headers: { "Authorization": `Bearer ${apiKey}` },
				body: formData
			});
			const data = await res.json();
			if (res.ok) {
				setEditResource((prev) => ({
					...prev,
					fileUrl: data.filePath,
					fileSize: data.fileSize,
					fileType: data.fileType
				}));
				showSuccess("File uploaded");
			} else setError(data.error || "Upload failed");
		} catch {
			setError("Upload failed");
		} finally {
			setUploading(false);
		}
	};
	const handleThumbnailUpload = async (file) => {
		setUploading(true);
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await fetch("/api/admin/upload", {
				method: "POST",
				headers: { "Authorization": `Bearer ${apiKey}` },
				body: formData
			});
			const data = await res.json();
			if (res.ok) {
				setEditResource((prev) => ({
					...prev,
					thumbnail: data.publicUrl || data.filePath
				}));
				showSuccess("Thumbnail uploaded");
			} else setError(data.error || "Upload failed");
		} catch {
			setError("Upload failed");
		} finally {
			setUploading(false);
		}
	};
	const showSuccess = (msg) => {
		setSuccessMessage(msg);
		setTimeout(() => setSuccessMessage(""), 3e3);
	};
	if (!authenticated) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center",
		style: { paddingTop: "80px" },
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-sm w-full mx-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "bg-white border border-slate-200/70 rounded-3xl p-8 shadow-sm text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
						children: /* @__PURE__ */ jsx(BookOpen, { className: "w-7 h-7 text-primary" })
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-xl font-bold text-slate-900 mb-2",
						children: "Admin Panel"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-slate-400 mb-6",
						children: "Enter your admin API key to continue"
					}),
					/* @__PURE__ */ jsx("input", {
						type: "password",
						value: apiKey,
						onChange: (e) => setApiKey(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleLogin(),
						placeholder: "API Key",
						className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-primary"
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: handleLogin,
						className: "w-full py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary transition-colors",
						children: "Authenticate"
					})
				]
			})
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#FAFAFA] text-[#0F172A]",
		style: { paddingTop: "80px" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-xs text-slate-400 mb-2",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "/",
								className: "hover:text-primary",
								children: "Home"
							}),
							/* @__PURE__ */ jsx("span", { children: "/" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-slate-700 font-semibold",
								children: "Admin"
							})
						]
					}), /* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-slate-900 tracking-tight",
						children: "Resource Management"
					})] }), /* @__PURE__ */ jsx("button", {
						onClick: () => setAuthenticated(false),
						className: "text-xs text-slate-400 hover:text-slate-600 font-medium",
						children: "Logout"
					})]
				}),
				successMessage && /* @__PURE__ */ jsxs("div", {
					className: "mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-700",
					children: [
						/* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }),
						" ",
						successMessage
					]
				}),
				error && /* @__PURE__ */ jsxs("div", {
					className: "mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs font-bold text-rose-700",
					children: [
						/* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4" }),
						" ",
						error,
						/* @__PURE__ */ jsx("button", {
							onClick: () => setError(""),
							className: "ml-auto",
							children: /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5" })
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-1 bg-slate-100 rounded-2xl p-1 mb-6 max-w-xs",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							setTab("resources");
							fetchResources();
						},
						className: `flex-1 px-4 py-2 rounded-xl text-xs font-bold transition-all ${tab === "resources" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-700"}`,
						children: "Resources"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => {
							setTab("subscribers");
							fetchSubscribers();
						},
						className: `flex-1 px-4 py-2 rounded-xl text-xs font-bold transition-all ${tab === "subscribers" ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-700"}`,
						children: "Subscribers"
					})]
				}),
				tab === "resources" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-sm font-bold text-slate-800",
							children: [
								"All Resources (",
								resources.length,
								")"
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: fetchResources,
								className: "p-2 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors",
								children: /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4" })
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => {
									setEditResource({});
									setShowForm(true);
								},
								className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
								children: [/* @__PURE__ */ jsx(Plus, { className: "w-3.5 h-3.5" }), " Add Resource"]
							})]
						})]
					}), loading ? /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ jsx("div", { className: "h-12 bg-slate-50 rounded-xl animate-pulse" }, i))
					}) : resources.length === 0 ? /* @__PURE__ */ jsxs("div", {
						className: "text-center py-12",
						children: [
							/* @__PURE__ */ jsx(FileText, { className: "w-10 h-10 text-slate-300 mx-auto mb-3" }),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-bold text-slate-400",
								children: "No resources yet"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Click \"Add Resource\" to create one"
							})
						]
					}) : /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Title"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Category"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Country"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Downloads"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Featured"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-50",
								children: resources.map((r) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 font-bold text-slate-800 max-w-[200px] truncate",
											children: r.title
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 text-primary",
											children: r.category
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 text-slate-500",
											children: r.country
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 text-slate-500",
											children: r.download_count
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3",
											children: r.featured ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5 text-slate-300" })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 text-right",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-end gap-1",
												children: [
													/* @__PURE__ */ jsx("a", {
														href: `/resources/${r.slug}`,
														target: "_blank",
														className: "p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors",
														children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => {
															setEditResource(r);
															setShowForm(true);
														},
														className: "p-1.5 rounded-lg text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors",
														children: /* @__PURE__ */ jsx(Edit, { className: "w-3.5 h-3.5" })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => handleDelete(r.id),
														className: "p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors",
														children: /* @__PURE__ */ jsx(Trash2, { className: "w-3.5 h-3.5" })
													})
												]
											})
										})
									]
								}, r.id))
							})]
						})
					})]
				}), showForm && /* @__PURE__ */ jsx(ResourceForm, {
					resource: editResource || {},
					onSave: handleSave,
					onCancel: () => {
						setShowForm(false);
						setEditResource(null);
					},
					onUpload: handleFileUpload,
					onThumbnailUpload: handleThumbnailUpload,
					uploading
				})] }),
				tab === "subscribers" && /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-sm font-bold text-slate-800 mb-4",
						children: [
							"Newsletter Subscribers (",
							subscribers.length,
							")"
						]
					}), loading ? /* @__PURE__ */ jsx("div", {
						className: "space-y-3",
						children: [
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ jsx("div", { className: "h-10 bg-slate-50 rounded-xl animate-pulse" }, i))
					}) : subscribers.length === 0 ? /* @__PURE__ */ jsxs("div", {
						className: "text-center py-12",
						children: [/* @__PURE__ */ jsx(Mail, { className: "w-10 h-10 text-slate-300 mx-auto mb-3" }), /* @__PURE__ */ jsx("p", {
							className: "text-sm font-bold text-slate-400",
							children: "No subscribers yet"
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left text-xs",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Email"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3 pr-3",
										children: "Country"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "pb-3",
										children: "Subscribed At"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-50",
								children: subscribers.map((s) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 font-bold text-slate-800",
											children: s.email
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 pr-3 text-slate-500",
											children: s.country || "-"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-3 text-slate-400",
											children: new Date(s.created_at).toLocaleDateString()
										})
									]
								}, s.id))
							})]
						})
					})]
				})
			]
		})
	});
};
var ResourceForm = ({ resource, onSave, onCancel, onUpload, onThumbnailUpload, uploading }) => {
	const [form, setForm] = useState({
		id: resource.id || "",
		title: resource.title || "",
		slug: resource.slug || "",
		description: resource.description || "",
		category: resource.category || "Visa Guides",
		country: resource.country || "All",
		level: resource.level || "Beginner",
		thumbnail: resource.thumbnail || "",
		readTime: resource.readTime || "",
		featured: resource.featured || false
	});
	const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.title || !form.slug) return;
		onSave({
			...form,
			id: form.id || void 0,
			fileUrl: resource.fileUrl,
			fileSize: resource.fileSize,
			fileType: resource.fileType
		});
	};
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "mt-6 bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-sm font-bold text-slate-800",
				children: resource.id ? "Edit Resource" : "Add Resource"
			}), /* @__PURE__ */ jsx("button", {
				onClick: onCancel,
				className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors",
				children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Title *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: form.title,
							onChange: (e) => {
								const title = e.target.value;
								setForm((f) => ({
									...f,
									title,
									slug: resource.id ? f.slug : generateSlug(title)
								}));
							},
							required: true,
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Slug *"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: form.slug,
							onChange: (e) => setForm((f) => ({
								...f,
								slug: e.target.value
							})),
							required: true,
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Category *"
						}), /* @__PURE__ */ jsx("select", {
							value: form.category,
							onChange: (e) => setForm((f) => ({
								...f,
								category: e.target.value
							})),
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none",
							children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", {
								value: c,
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Country"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: form.country,
							onChange: (e) => setForm((f) => ({
								...f,
								country: e.target.value
							})),
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Level"
						}), /* @__PURE__ */ jsx("select", {
							value: form.level,
							onChange: (e) => setForm((f) => ({
								...f,
								level: e.target.value
							})),
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none",
							children: LEVELS.map((l) => /* @__PURE__ */ jsx("option", {
								value: l,
								children: l
							}, l))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
							children: "Read Time"
						}), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: form.readTime,
							onChange: (e) => setForm((f) => ({
								...f,
								readTime: e.target.value
							})),
							placeholder: "e.g. 15 min",
							className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
						})] })
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
					children: "Description"
				}), /* @__PURE__ */ jsx("textarea", {
					value: form.description,
					onChange: (e) => setForm((f) => ({
						...f,
						description: e.target.value
					})),
					rows: 3,
					className: "w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary resize-none"
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
					children: "File"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("input", {
							type: "file",
							accept: ".pdf,.docx,.xlsx,.zip",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (file) onUpload(file);
							},
							className: "text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
						}),
						uploading && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-slate-400 animate-pulse",
							children: "Uploading..."
						}),
						resource.fileUrl && /* @__PURE__ */ jsx("span", {
							className: "text-[10px] text-emerald-600 font-medium",
							children: "File attached"
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("label", {
						className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
						children: "Thumbnail Image"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "text",
								value: form.thumbnail,
								onChange: (e) => setForm((f) => ({
									...f,
									thumbnail: e.target.value
								})),
								placeholder: "Paste image URL or upload below",
								className: "flex-1 min-w-[200px] text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-primary"
							}),
							/* @__PURE__ */ jsx("input", {
								type: "file",
								accept: "image/jpeg,image/png,image/webp,image/gif",
								onChange: (e) => {
									const file = e.target.files?.[0];
									if (file) onThumbnailUpload(file);
								},
								className: "text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[10px] file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
							}),
							uploading && /* @__PURE__ */ jsx("span", {
								className: "text-xs text-slate-400 animate-pulse",
								children: "Uploading..."
							})
						]
					}),
					form.thumbnail && /* @__PURE__ */ jsx("div", {
						className: "mt-2 relative inline-block",
						children: /* @__PURE__ */ jsx("img", {
							src: form.thumbnail,
							alt: "Thumbnail preview",
							className: "h-20 w-32 object-cover rounded-xl border border-slate-200",
							onError: (e) => {
								e.target.style.display = "none";
							}
						})
					})
				] }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("input", {
						type: "checkbox",
						id: "featured",
						checked: form.featured,
						onChange: (e) => setForm((f) => ({
							...f,
							featured: e.target.checked
						})),
						className: "rounded border-slate-300"
					}), /* @__PURE__ */ jsx("label", {
						htmlFor: "featured",
						className: "text-xs font-medium text-slate-600",
						children: "Featured resource"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-3 pt-2",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary transition-colors",
						children: [/* @__PURE__ */ jsx(Save, { className: "w-3.5 h-3.5" }), resource.id ? "Update Resource" : "Create Resource"]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onCancel,
						className: "px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors",
						children: "Cancel"
					})]
				})
			]
		})]
	});
};
//#endregion
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Admin Panel | AtlasPath",
		"description": "Resource management dashboard"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AdminPanel", AdminPanel, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/enosh/OneDrive/Documents/atlaspath/src/components/AdminPanel",
		"client:component-export": "default"
	})}` })}`;
}, "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/admin/index.astro", void 0);
var $$file = "C:/Users/enosh/OneDrive/Documents/atlaspath/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
