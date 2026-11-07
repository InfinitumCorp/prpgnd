import { r as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgIEBYFY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		href: "#work",
		id: "work",
		label: "Work"
	},
	{
		href: "#practice",
		id: "practice",
		label: "Practice"
	},
	{
		href: "#signal",
		id: "signal",
		label: "Signal"
	},
	{
		href: "#studio",
		id: "studio",
		label: "Studio"
	}
];
var cycles = [
	"Campaigns for a city that already has the volume up.",
	"One line, then the media, the page, and the follow-through.",
	"Built in Washington. Heard wherever the audience actually is."
];
var marquee = [
	"MAKE YOURSELF HEARD",
	"WASHINGTON, DC",
	"DIGITAL MARKETING",
	"PAID",
	"EARNED",
	"OWNED"
];
var practice = [
	{
		n: "01",
		title: "Strategy",
		body: "The argument before the assets. Positioning, the audience, and the one line the work is not allowed to wander from."
	},
	{
		n: "02",
		title: "Media",
		body: "Search, social, and the budget math. Spend follows the sentence — not a platform the room happens to like this quarter."
	},
	{
		n: "03",
		title: "Creative",
		body: "Film, stills, type, and pages that sound like the same mouth. If it could belong to anyone, it does not ship."
	},
	{
		n: "04",
		title: "Social",
		body: "Not a content calendar. A system: what you say, what you never say, and how fast you answer when the city answers back."
	},
	{
		n: "05",
		title: "Sites",
		body: "Launch pages and brand sites built to convert a warm stranger in one sitting. Fast, legible, and on the line."
	},
	{
		n: "06",
		title: "Narrative",
		body: "Reputation and the moment a story starts moving without you. We write the correction before the correction writes itself."
	}
];
var work = [
	{
		id: "harbor",
		sector: "Commerce",
		place: "Navy Yard",
		client: "Harbor & Rye",
		title: "A waterfront room that filled on a Tuesday.",
		story: "A new dining room on the river needed a crowd before the critics arrived. We named the night, seeded the neighborhood, and treated reservations like a launch, not a listing.",
		channels: [
			"Paid social",
			"Local search",
			"Creator seeding"
		],
		heard: "The first six weekends booked before a single review landed."
	},
	{
		id: "northline",
		sector: "B2B",
		place: "Downtown",
		client: "Northline",
		title: "A contractor that stopped sounding like a capability statement.",
		story: "Federal buyers skim. We threw out the adjective stack, rebuilt the argument around one proof, and aimed every page and placement at the people who actually award the work.",
		channels: [
			"Thought leadership",
			"LinkedIn",
			"Site"
		],
		heard: "The pipeline started with a sentence a buyer could repeat in a meeting."
	},
	{
		id: "ward",
		sector: "Civic",
		place: "Citywide",
		client: "Ward Light",
		title: "A civic effort that needed neighbors, not a slogan.",
		story: "Nonpartisan, local, and easy to ignore. We traded broad awareness for a message a resident could say out loud to the person next door — then put it on the channels they already open.",
		channels: [
			"Community",
			"Paid social",
			"Explainers"
		],
		heard: "The ask got simpler. The response got specific."
	},
	{
		id: "vale",
		sector: "Culture",
		place: "Georgetown",
		client: "Atelier Vale",
		title: "A beautiful room with a quiet website.",
		story: "The store already had taste. The site did not. We rebuilt the digital visit so it felt like stepping off M Street — then pointed media at the one collection worth a trip.",
		channels: [
			"Brand site",
			"Paid social",
			"Editorial"
		],
		heard: "Online started behaving like the shop floor: fewer browsers, more buyers."
	}
];
var sectors = [
	"All",
	"Commerce",
	"B2B",
	"Civic",
	"Culture"
];
var aims = [
	{
		id: "launch",
		label: "Launch",
		line: "Something new needs a first audience."
	},
	{
		id: "shift",
		label: "Reposition",
		line: "The story people tell about you is the wrong one."
	},
	{
		id: "mobilize",
		label: "Mobilize",
		line: "You need a specific public to move."
	},
	{
		id: "defend",
		label: "Hold the line",
		line: "A narrative is getting away from you."
	}
];
var rooms = [
	{
		id: "hill",
		label: "The Hill"
	},
	{
		id: "city",
		label: "The city"
	},
	{
		id: "buyers",
		label: "Buyers"
	},
	{
		id: "donors",
		label: "Donors"
	}
];
var volumes = [
	{
		id: "whisper",
		label: "Whisper",
		detail: "Precise. Senior. Earned."
	},
	{
		id: "speak",
		label: "Speak",
		detail: "Always on. Visible. Steady."
	},
	{
		id: "shout",
		label: "Shout",
		detail: "A moment. Then hold."
	}
];
var codenames = {
	launch: {
		hill: "First Reading",
		city: "Opening Night",
		buyers: "Market Entry",
		donors: "Founding Ask"
	},
	shift: {
		hill: "Revised Markup",
		city: "New Address",
		buyers: "Category Reset",
		donors: "Second Act"
	},
	mobilize: {
		hill: "Whip Count",
		city: "Street Level",
		buyers: "Full Room",
		donors: "The Ask"
	},
	defend: {
		hill: "Hold the Record",
		city: "Local Truth",
		buyers: "Steady Signal",
		donors: "Quiet Majority"
	}
};
var score = {
	whisper: [
		"A private briefing and a one-page argument, circulated before anything is public.",
		"Earned placements in the few rooms your audience already trusts.",
		"A quiet site update so the sentence is there the moment someone searches."
	],
	speak: [
		"A campaign line, a landing page, and a four-week system built from that same line.",
		"Always-on media against search and the two social rooms that actually convert.",
		"A monthly read: what was heard, what was ignored, and what changes."
	],
	shout: [
		"Two weeks of saturation — one film, one line, every channel saying it at once.",
		"Paid pointed at a single action, not a vague awareness goal.",
		"Then the volume drops, so the line survives the spike."
	]
};
function transmission(aim, room, volume) {
	const aimMeta = aims.find((item) => item.id === aim);
	const roomMeta = rooms.find((item) => item.id === room);
	const volumeMeta = volumes.find((item) => item.id === volume);
	return {
		name: codenames[aim][room],
		aim: aimMeta,
		room: roomMeta,
		volume: volumeMeta,
		moves: score[volume]
	};
}
function briefText(aim, room, volume) {
	const card = transmission(aim, room, volume);
	return [
		`Transmission: ${card.name}`,
		`${card.aim.label} · ${card.room.label} · ${card.volume.label}`,
		"",
		card.aim.line,
		"",
		...card.moves.map((move, index) => `0${index + 1}  ${move}`)
	].join("\n");
}
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
function useDcClock() {
	const [label, setLabel] = (0, import_react.useState)("——:——:——");
	(0, import_react.useEffect)(() => {
		const format = () => new Intl.DateTimeFormat("en-GB", {
			timeZone: "America/New_York",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false
		}).format(/* @__PURE__ */ new Date());
		setLabel(format());
		const id = window.setInterval(() => setLabel(format()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return label;
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const nodes = nav.map((item) => document.getElementById(item.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.2,
				.6
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return active;
}
function SoundField({ shiftX, shiftY }) {
	const styleLeft = {
		"--shift-x": `${shiftX}px`,
		"--shift-y": `${shiftY}px`
	};
	const styleRight = {
		"--shift-x": `${-shiftX}px`,
		"--shift-y": `${shiftY}px`
	};
	const rings = [
		0,
		1,
		2,
		3,
		4
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ring-set ring-set-left",
				style: styleLeft,
				children: rings.map((ring) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ring" }, ring))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ring-set ring-set-right",
				style: styleRight,
				children: rings.map((ring) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ring" }, ring))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tick-col tick-col-left",
				children: [
					18,
					28,
					22,
					34,
					16
				].map((width, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tick",
					style: {
						width,
						animationDelay: `${index * .2}s`
					}
				}, width))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tick-col tick-col-right",
				children: [
					18,
					28,
					22,
					34,
					16
				].map((width, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tick",
					style: {
						width,
						animationDelay: `${index * .2}s`
					}
				}, width))
			})
		]
	});
}
function SitePage() {
	const clock = useDcClock();
	const active = useActiveSection();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [cycle, setCycle] = (0, import_react.useState)(0);
	const [sector, setSector] = (0, import_react.useState)("All");
	const [openWork, setOpenWork] = (0, import_react.useState)("harbor");
	const [openPractice, setOpenPractice] = (0, import_react.useState)("01");
	const [aim, setAim] = (0, import_react.useState)("launch");
	const [room, setRoom] = (0, import_react.useState)("city");
	const [volume, setVolume] = (0, import_react.useState)("speak");
	const [name, setName] = (0, import_react.useState)("");
	const [org, setOrg] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const card = (0, import_react.useMemo)(() => transmission(aim, room, volume), [
		aim,
		room,
		volume
	]);
	const visibleWork = work.filter((item) => sector === "All" || item.sector === sector);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => {
			setCycle((index) => (index + 1) % cycles.length);
		}, 3800);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	function onHeroMove(event) {
		if (event.pointerType !== "mouse") return;
		const rect = event.currentTarget.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width - .5;
		const y = (event.clientY - rect.top) / rect.height - .5;
		setShift({
			x: Math.round(x * 18),
			y: Math.round(y * 12)
		});
	}
	function carryBrief() {
		setNote(briefText(aim, room, volume));
		setSent(false);
		document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
	}
	function submitBrief(event) {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = "Add your name.";
		if (org.trim().length < 2) next.org = "Add an organization.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Use a real email.";
		if (note.trim().length < 8) next.note = "Tell us what needs to be heard.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setSent(true);
		setCopied(false);
	}
	async function copyBrief() {
		const payload = [
			`${name} · ${org}`,
			email,
			"",
			note.trim() || briefText(aim, room, volume)
		].join("\n");
		try {
			await navigator.clipboard.writeText(payload);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-3",
							"aria-label": "PRPGND, back to top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/mark.png",
								alt: "",
								className: "h-9 w-auto"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-bold tracking-wide",
								children: "PRPGND"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							"aria-label": "Primary",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: cx("text-sm tracking-wide transition-opacity duration-200", active === item.id ? "opacity-100" : "opacity-55 hover:opacity-100"),
								"aria-current": active === item.id ? "true" : void 0,
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#brief",
								className: "hidden min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96] sm:inline-flex",
								children: "Open a channel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center border border-line md:hidden",
								"aria-expanded": menuOpen,
								"aria-controls": "mobile-nav",
								onClick: () => setMenuOpen((open) => !open),
								children: [menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: menuOpen ? "Close menu" : "Open menu"
								})]
							})]
						})
					]
				}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "mobile-nav",
					className: "fixed inset-x-0 top-16 bottom-0 z-30 overflow-auto bg-bg px-5 py-6 md:hidden",
					"aria-label": "Mobile",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "flex min-h-11 items-center font-display text-3xl font-semibold tracking-wide uppercase",
						onClick: () => setMenuOpen(false),
						children: item.label
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#brief",
						className: "mt-3 flex min-h-11 items-center justify-center bg-fg font-medium text-bg",
						onClick: () => setMenuOpen(false),
						children: "Open a channel"
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "top",
						className: "relative flex min-h-dvh items-center overflow-hidden pt-16",
						onPointerMove: onHeroMove,
						onPointerLeave: () => setShift({
							x: 0,
							y: 0
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoundField, {
							shiftX: shift.x,
							shiftY: shift.y
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto w-full max-w-6xl px-5 py-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise text-xs tracking-widest text-muted uppercase",
									children: "Digital marketing · Washington, DC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/brand/mark.png",
									alt: "PRPGND",
									className: "rise rise-2 mt-8 w-full max-w-xl"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "rise rise-3 mt-8 max-w-3xl font-display text-6xl leading-none font-extrabold tracking-tight uppercase sm:text-8xl",
									children: "Make yourself heard."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise rise-4 relative mt-6 max-w-xl min-h-16 text-lg text-muted",
									children: cycles.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cx("transition-opacity duration-500", index === cycle ? "relative opacity-100" : "absolute inset-x-0 top-0 opacity-0"),
										children: line
									}, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise rise-5 mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#signal",
										className: "inline-flex min-h-11 items-center justify-center gap-2 bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
										children: ["Build a signal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "size-4",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#work",
										className: "inline-flex min-h-11 items-center justify-center border border-line px-5 font-medium transition-transform duration-150 ease-out active:scale-[0.96]",
										children: "View the work"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden border-y border-line py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track",
							children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "flex shrink-0 items-center",
								"aria-hidden": copy === 1,
								children: marquee.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-6 font-display text-2xl tracking-widest",
									children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-6 text-faint",
										children: "●"
									})]
								}, `${copy}-${item}`))
							}, copy))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-6xl px-5 py-24 sm:py-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-muted uppercase",
								children: "The point"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-4xl font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-7xl",
								children: "In a city that talks all day, the advantage is a sentence people repeat."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-xl text-lg text-muted",
								children: "PRPGND plans the message, makes the work, and spends like the sentence matters. Brands, causes, and companies that cannot afford to be background noise."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "practice",
						className: "scroll-mt-16 bg-inverse text-inverse-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-inverse-muted uppercase",
									children: "Practice"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl",
									children: "What we put on the air."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-sm text-inverse-muted",
									children: "Six disciplines. One voice. Hire the set, or the piece the moment actually needs."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-inverse-line",
								children: practice.map((item) => {
									const open = openPractice === item.n;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-b border-inverse-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "flex min-h-16 w-full items-center gap-4 py-4 text-left",
											"aria-expanded": open,
											onClick: () => setOpenPractice(open ? "" : item.n),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-10 font-display text-xl text-inverse-muted",
													children: item.n
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl",
													"aria-hidden": "true",
													children: open ? "–" : "+"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cx("expand", open && "is-open"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "max-w-lg pb-6 pl-14 text-inverse-muted",
												children: item.body
											}) })
										})]
									}, item.n);
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "work",
						className: "scroll-mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20 sm:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-6 sm:flex-row sm:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Selected work"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl",
									children: "Signals from the city."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									role: "group",
									"aria-label": "Filter work by sector",
									children: sectors.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": sector === item,
										onClick: () => setSector(item),
										className: cx("min-h-11 px-3 text-sm tracking-wide transition-colors duration-200", sector === item ? "bg-fg text-bg" : "text-muted hover:text-fg"),
										children: item
									}, item))
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 border-t border-line",
								children: visibleWork.map((item, index) => {
									const open = openWork === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: `work-${item.id}`,
										className: "border-b border-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "grid w-full grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-6 text-left sm:grid-cols-[4rem_1fr_1.1fr] sm:items-center",
											"aria-expanded": open,
											onClick: () => setOpenWork(open ? "" : item.id),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-2xl text-faint tabular-nums",
													children: ["0", index + 1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block text-xs tracking-widest text-muted uppercase",
													children: [
														item.sector,
														" · ",
														item.place
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block font-display text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl",
													children: item.client
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "col-start-2 text-muted sm:col-start-auto",
													children: item.title
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cx("expand", open && "is-open"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-6 pb-8 sm:grid-cols-[4rem_1fr] sm:pl-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-6 md:grid-cols-[1.3fr_0.7fr]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-lg",
														children: item.story
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs tracking-widest text-muted uppercase",
															children: "Channels"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-3 space-y-1",
															children: item.channels.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: channel }, channel))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-5 text-xs tracking-widest text-muted uppercase",
															children: "What landed"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3",
															children: item.heard
														})
													] })]
												})]
											}) })
										})]
									}, item.id);
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "signal",
						className: "scroll-mt-16 border-t border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs tracking-widest text-muted uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "live-dot",
										"aria-hidden": "true"
									}), "Signal desk · live"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl",
									children: "Compose the volume."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-muted",
									children: "Three calls. The transmission on the right rewrites itself. When it sounds like the job, carry it into a brief."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "mt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "What needs hearing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid grid-cols-2 gap-2",
										children: aims.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": aim === item.id,
											onClick: () => setAim(item.id),
											className: cx("min-h-14 px-3 text-left text-sm transition-colors duration-200", aim === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-medium",
												children: item.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cx("mt-1 block text-xs", aim === item.id ? "text-bg/70" : "text-faint"),
												children: item.line
											})]
										}, item.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "Who has to hear it"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: rooms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": room === item.id,
											onClick: () => setRoom(item.id),
											className: cx("min-h-11 px-4 text-sm transition-colors duration-200", room === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg"),
											children: item.label
										}, item.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "How loud"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 grid gap-2 sm:grid-cols-3",
										children: volumes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": volume === item.id,
											onClick: () => setVolume(item.id),
											className: cx("min-h-16 px-3 text-left transition-colors duration-200", volume === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-display text-2xl font-bold tracking-wide uppercase",
												children: item.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cx("text-xs", volume === item.id ? "text-bg/70" : "text-faint"),
												children: item.detail
											})]
										}, item.id))
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col border border-line bg-bg p-6 sm:p-8",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "Transmission"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl",
										children: card.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm tracking-wide text-muted uppercase",
										children: [
											card.aim.label,
											" · ",
											card.room.label,
											" · ",
											card.volume.label
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-lg",
										children: card.aim.line
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-8 space-y-5",
										children: card.moves.map((move, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "grid grid-cols-[2.5rem_1fr] gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-display text-xl text-faint tabular-nums",
												children: ["0", index + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: move })]
										}, move))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: carryBrief,
										className: "mt-10 inline-flex min-h-11 items-center justify-center gap-2 bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
										children: ["Carry this into a brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "size-4",
											"aria-hidden": "true"
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "studio",
						className: "scroll-mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Studio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-7xl",
									children: "Washington, on purpose."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-lg text-muted",
									children: "We work from the District. Navy Yard launches, Georgetown retail, downtown buyers, citywide civic work — the room changes, the standard does not. The work travels. The studio stays."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "Local time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-6xl leading-none font-bold tabular-nums",
										children: clock
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: "America / New York · by appointment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-faint",
												children: "Base"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1",
												children: "Washington, DC"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-faint",
												children: "Reach"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1",
												children: "City, capital, national"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-faint",
												children: "Discipline"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1",
												children: "Digital marketing"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-faint",
												children: "Reply"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-1",
												children: "A person, not a queue"
											})] })
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/lockup.jpg",
							alt: "PRPGND. Make yourself heard.",
							className: "w-full"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "brief",
						className: "scroll-mt-16 border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Brief"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl",
									children: "Tell us what the room should hear."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-md text-muted",
									children: "Send a name, an organization, and the job. If you built a transmission upstairs, it will already be waiting in the note."
								})
							] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-line bg-surface p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted uppercase",
										children: "Held"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-4xl font-bold tracking-tight uppercase",
										children: "Brief is ready."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-muted",
										children: [name, ", this stays in the session until you copy it. Hand it to the studio from here — nothing was emailed."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-6 max-h-64 overflow-auto border border-line p-4 text-sm whitespace-pre-wrap text-muted",
										children: note
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-col gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: copyBrief,
											className: "inline-flex min-h-11 items-center justify-center bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
											children: copied ? "Copied" : "Copy the brief"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSent(false),
											className: "inline-flex min-h-11 items-center justify-center border border-line px-5",
											children: "Edit"
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "grid gap-5",
								onSubmit: submitBrief,
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										error: errors.name,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: name,
											onChange: (event) => setName(event.target.value),
											autoComplete: "name",
											className: "min-h-12 w-full border border-line bg-bg px-3 outline-none"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Organization",
										error: errors.org,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: org,
											onChange: (event) => setOrg(event.target.value),
											autoComplete: "organization",
											className: "min-h-12 w-full border border-line bg-bg px-3 outline-none"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										error: errors.email,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: email,
											onChange: (event) => setEmail(event.target.value),
											autoComplete: "email",
											inputMode: "email",
											className: "min-h-12 w-full border border-line bg-bg px-3 outline-none"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "What should be heard",
										error: errors.note,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: note,
											onChange: (event) => setNote(event.target.value),
											rows: 7,
											placeholder: "The launch, the audience, the constraint.",
											className: "w-full border border-line bg-bg px-3 py-3 outline-none placeholder:text-faint"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "inline-flex min-h-12 items-center justify-center bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]",
										children: "Hold this brief"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-bold tracking-wide",
						children: "PRPGND"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Make yourself heard. Washington, DC."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-wrap gap-x-5 gap-y-2 text-sm",
						"aria-label": "Footer",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "min-h-11 inline-flex items-center text-muted hover:text-fg",
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#brief",
							className: "inline-flex min-h-11 items-center text-muted hover:text-fg",
							children: "Brief"
						})]
					})]
				})
			})
		]
	});
}
function Field({ label, error, children }) {
	const fieldId = (0, import_react.useId)();
	const errorId = `${fieldId}-error`;
	const control = (0, import_react.isValidElement)(children) ? (0, import_react.cloneElement)(children, {
		id: children.props.id ?? fieldId,
		"aria-invalid": Boolean(error) || void 0,
		"aria-describedby": error ? errorId : void 0
	}) : children;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-sm",
		htmlFor: fieldId,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tracking-wide text-muted",
				children: label
			}),
			control,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: errorId,
				className: "text-sm text-fg",
				role: "alert",
				children: error
			}) : null
		]
	});
}
var SplitComponent = SitePage;
//#endregion
export { SplitComponent as component };
