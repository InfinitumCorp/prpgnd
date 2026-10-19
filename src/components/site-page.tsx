import { cloneElement, isValidElement, useEffect, useId, useMemo, useState, type CSSProperties, type FormEvent, type PointerEvent, type ReactElement } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  aims,
  briefText,
  cycles,
  marquee,
  nav,
  practice,
  rooms,
  sectors,
  transmission,
  volumes,
  work,
  type AimId,
  type RoomId,
  type VolumeId,
} from "@/lib/content";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function useDcClock() {
  const [label, setLabel] = useState("——:——:——");
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setLabel(format());
    const id = window.setInterval(() => setLabel(format()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return label;
}

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return active;
}

function SoundField({ shiftX, shiftY }: { shiftX: number; shiftY: number }) {
  const styleLeft = {
    "--shift-x": `${shiftX}px`,
    "--shift-y": `${shiftY}px`,
  } as CSSProperties;
  const styleRight = {
    "--shift-x": `${-shiftX}px`,
    "--shift-y": `${shiftY}px`,
  } as CSSProperties;
  const rings = [0, 1, 2, 3, 4];
  return (
    <div aria-hidden="true">
      <div className="ring-set ring-set-left" style={styleLeft}>
        {rings.map((ring) => (
          <span key={ring} className="ring" />
        ))}
      </div>
      <div className="ring-set ring-set-right" style={styleRight}>
        {rings.map((ring) => (
          <span key={ring} className="ring" />
        ))}
      </div>
      <div className="tick-col tick-col-left">
        {[18, 28, 22, 34, 16].map((width, index) => (
          <span key={width} className="tick" style={{ width, animationDelay: `${index * 0.2}s` }} />
        ))}
      </div>
      <div className="tick-col tick-col-right">
        {[18, 28, 22, 34, 16].map((width, index) => (
          <span key={width} className="tick" style={{ width, animationDelay: `${index * 0.2}s` }} />
        ))}
      </div>
    </div>
  );
}

export function SitePage() {
  const clock = useDcClock();
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const [cycle, setCycle] = useState(0);
  const [sector, setSector] = useState<(typeof sectors)[number]>("All");
  const [openWork, setOpenWork] = useState<string>("harbor");
  const [openPractice, setOpenPractice] = useState<string>("01");
  const [aim, setAim] = useState<AimId>("launch");
  const [room, setRoom] = useState<RoomId>("city");
  const [volume, setVolume] = useState<VolumeId>("speak");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const card = useMemo(() => transmission(aim, room, volume), [aim, room, volume]);
  const visibleWork = work.filter((item) => sector === "All" || item.sector === sector);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setCycle((index) => (index + 1) % cycles.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function onHeroMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setShift({ x: Math.round(x * 18), y: Math.round(y * 12) });
  }

  function carryBrief() {
    setNote(briefText(aim, room, volume));
    setSent(false);
    document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitBrief(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
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
    const payload = [`${name} · ${org}`, email, "", note.trim() || briefText(aim, room, volume)].join("\n");
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-3" aria-label="PRPGND, back to top">
            <img src="/brand/mark.png" alt="" className="h-9 w-auto" />
            <span className="font-display text-xl font-bold tracking-wide">PRPGND</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cx(
                  "text-sm tracking-wide transition-opacity duration-200",
                  active === item.id ? "opacity-100" : "opacity-55 hover:opacity-100",
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#brief"
              className="hidden min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96] sm:inline-flex"
            >
              Open a channel
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-auto bg-bg px-5 py-6 md:hidden"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex min-h-11 items-center font-display text-3xl font-semibold tracking-wide uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#brief"
              className="mt-3 flex min-h-11 items-center justify-center bg-fg font-medium text-bg"
              onClick={() => setMenuOpen(false)}
            >
              Open a channel
            </a>
          </nav>
        ) : null}
      </header>

      <main id="main">
        <section
          id="top"
          className="relative flex min-h-dvh items-center overflow-hidden pt-16"
          onPointerMove={onHeroMove}
          onPointerLeave={() => setShift({ x: 0, y: 0 })}
        >
          <SoundField shiftX={shift.x} shiftY={shift.y} />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16">
            <p className="rise text-xs tracking-widest text-muted uppercase">
              Digital marketing · Washington, DC
            </p>
            <img
              src="/brand/mark.png"
              alt="PRPGND"
              className="rise rise-2 mt-8 w-full max-w-xl"
            />
            <h1 className="rise rise-3 mt-8 max-w-3xl font-display text-6xl leading-none font-extrabold tracking-tight uppercase sm:text-8xl">
              Make yourself heard.
            </h1>
            <p className="rise rise-4 relative mt-6 max-w-xl min-h-16 text-lg text-muted">
              {cycles.map((line, index) => (
                <span
                  key={line}
                  className={cx(
                    "transition-opacity duration-500",
                    index === cycle ? "relative opacity-100" : "absolute inset-x-0 top-0 opacity-0",
                  )}
                >
                  {line}
                </span>
              ))}
            </p>
            <div className="rise rise-5 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#signal"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Build a signal
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#work"
                className="inline-flex min-h-11 items-center justify-center border border-line px-5 font-medium transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                View the work
              </a>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-line py-4">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <p key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {marquee.map((item) => (
                  <span key={`${copy}-${item}`} className="px-6 font-display text-2xl tracking-widest">
                    {item}
                    <span className="px-6 text-faint">●</span>
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="text-xs tracking-widest text-muted uppercase">The point</p>
          <p className="mt-6 max-w-4xl font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-7xl">
            In a city that talks all day, the advantage is a sentence people repeat.
          </p>
          <p className="mt-8 max-w-xl text-lg text-muted">
            PRPGND plans the message, makes the work, and spends like the sentence matters.
            Brands, causes, and companies that cannot afford to be background noise.
          </p>
        </section>

        <section id="practice" className="scroll-mt-16 bg-inverse text-inverse-fg">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <div>
              <p className="text-xs tracking-widest text-inverse-muted uppercase">Practice</p>
              <h2 className="mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
                What we put on the air.
              </h2>
              <p className="mt-6 max-w-sm text-inverse-muted">
                Six disciplines. One voice. Hire the set, or the piece the moment actually needs.
              </p>
            </div>
            <div className="border-t border-inverse-line">
              {practice.map((item) => {
                const open = openPractice === item.n;
                return (
                  <div key={item.n} className="border-b border-inverse-line">
                    <button
                      type="button"
                      className="flex min-h-16 w-full items-center gap-4 py-4 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenPractice(open ? "" : item.n)}
                    >
                      <span className="w-10 font-display text-xl text-inverse-muted">{item.n}</span>
                      <span className="flex-1 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
                        {item.title}
                      </span>
                      <span className="text-xl" aria-hidden="true">
                        {open ? "–" : "+"}
                      </span>
                    </button>
                    <div className={cx("expand", open && "is-open")}>
                      <div>
                        <p className="max-w-lg pb-6 pl-14 text-inverse-muted">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs tracking-widest text-muted uppercase">Selected work</p>
                <h2 className="mt-3 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
                  Signals from the city.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by sector">
                {sectors.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={sector === item}
                    onClick={() => setSector(item)}
                    className={cx(
                      "min-h-11 px-3 text-sm tracking-wide transition-colors duration-200",
                      sector === item ? "bg-fg text-bg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-line">
              {visibleWork.map((item, index) => {
                const open = openWork === item.id;
                return (
                  <article key={item.id} id={`work-${item.id}`} className="border-b border-line">
                    <button
                      type="button"
                      className="grid w-full grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 py-6 text-left sm:grid-cols-[4rem_1fr_1.1fr] sm:items-center"
                      aria-expanded={open}
                      onClick={() => setOpenWork(open ? "" : item.id)}
                    >
                      <span className="font-display text-2xl text-faint tabular-nums">
                        0{index + 1}
                      </span>
                      <span>
                        <span className="block text-xs tracking-widest text-muted uppercase">
                          {item.sector} · {item.place}
                        </span>
                        <span className="mt-1 block font-display text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl">
                          {item.client}
                        </span>
                      </span>
                      <span className="col-start-2 text-muted sm:col-start-auto">{item.title}</span>
                    </button>
                    <div className={cx("expand", open && "is-open")}>
                      <div>
                        <div className="grid gap-6 pb-8 sm:grid-cols-[4rem_1fr] sm:pl-0">
                          <span className="hidden sm:block" />
                          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
                            <p className="text-lg">{item.story}</p>
                            <div>
                              <p className="text-xs tracking-widest text-muted uppercase">Channels</p>
                              <ul className="mt-3 space-y-1">
                                {item.channels.map((channel) => (
                                  <li key={channel}>{channel}</li>
                                ))}
                              </ul>
                              <p className="mt-5 text-xs tracking-widest text-muted uppercase">What landed</p>
                              <p className="mt-3">{item.heard}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="signal" className="scroll-mt-16 border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="flex items-center gap-2 text-xs tracking-widest text-muted uppercase">
                <span className="live-dot" aria-hidden="true" />
                Signal desk · live
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
                Compose the volume.
              </h2>
              <p className="mt-5 max-w-md text-muted">
                Three calls. The transmission on the right rewrites itself. When it sounds like
                the job, carry it into a brief.
              </p>

              <fieldset className="mt-10">
                <legend className="text-xs tracking-widest text-muted uppercase">What needs hearing</legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {aims.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={aim === item.id}
                      onClick={() => setAim(item.id)}
                      className={cx(
                        "min-h-14 px-3 text-left text-sm transition-colors duration-200",
                        aim === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg",
                      )}
                    >
                      <span className="block font-medium">{item.label}</span>
                      <span className={cx("mt-1 block text-xs", aim === item.id ? "text-bg/70" : "text-faint")}>
                        {item.line}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-xs tracking-widest text-muted uppercase">Who has to hear it</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rooms.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={room === item.id}
                      onClick={() => setRoom(item.id)}
                      className={cx(
                        "min-h-11 px-4 text-sm transition-colors duration-200",
                        room === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-xs tracking-widest text-muted uppercase">How loud</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {volumes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={volume === item.id}
                      onClick={() => setVolume(item.id)}
                      className={cx(
                        "min-h-16 px-3 text-left transition-colors duration-200",
                        volume === item.id ? "bg-fg text-bg" : "border border-line hover:border-fg",
                      )}
                    >
                      <span className="block font-display text-2xl font-bold tracking-wide uppercase">
                        {item.label}
                      </span>
                      <span className={cx("text-xs", volume === item.id ? "text-bg/70" : "text-faint")}>
                        {item.detail}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <article
              className="flex flex-col border border-line bg-bg p-6 sm:p-8"
              aria-live="polite"
            >
              <p className="text-xs tracking-widest text-muted uppercase">Transmission</p>
              <h3 className="mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
                {card.name}
              </h3>
              <p className="mt-4 text-sm tracking-wide text-muted uppercase">
                {card.aim.label} · {card.room.label} · {card.volume.label}
              </p>
              <p className="mt-6 text-lg">{card.aim.line}</p>
              <ol className="mt-8 space-y-5">
                {card.moves.map((move, index) => (
                  <li key={move} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="font-display text-xl text-faint tabular-nums">0{index + 1}</span>
                    <span>{move}</span>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                onClick={carryBrief}
                className="mt-10 inline-flex min-h-11 items-center justify-center gap-2 bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Carry this into a brief
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </button>
            </article>
          </div>
        </section>

        <section id="studio" className="scroll-mt-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28">
            <div>
              <p className="text-xs tracking-widest text-muted uppercase">Studio</p>
              <h2 className="mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-7xl">
                Washington, on purpose.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted">
                We work from the District. Navy Yard launches, Georgetown retail, downtown
                buyers, citywide civic work — the room changes, the standard does not.
                The work travels. The studio stays.
              </p>
            </div>
            <div className="border border-line p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Local time</p>
              <p className="mt-3 font-display text-6xl leading-none font-bold tabular-nums">{clock}</p>
              <p className="mt-3 text-sm text-muted">America / New York · by appointment</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-faint">Base</dt>
                  <dd className="mt-1">Washington, DC</dd>
                </div>
                <div>
                  <dt className="text-faint">Reach</dt>
                  <dd className="mt-1">City, capital, national</dd>
                </div>
                <div>
                  <dt className="text-faint">Discipline</dt>
                  <dd className="mt-1">Digital marketing</dd>
                </div>
                <div>
                  <dt className="text-faint">Reply</dt>
                  <dd className="mt-1">A person, not a queue</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/brand/lockup.jpg"
            alt="PRPGND. Make yourself heard."
            className="w-full"
          />
        </section>

        <section id="brief" className="scroll-mt-16 border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="text-xs tracking-widest text-muted uppercase">Brief</p>
              <h2 className="mt-4 font-display text-5xl leading-none font-extrabold tracking-tight uppercase sm:text-6xl">
                Tell us what the room should hear.
              </h2>
              <p className="mt-6 max-w-md text-muted">
                Send a name, an organization, and the job. If you built a transmission upstairs,
                it will already be waiting in the note.
              </p>
            </div>

            {sent ? (
              <div className="border border-line bg-surface p-6 sm:p-8">
                <p className="text-xs tracking-widest text-muted uppercase">Held</p>
                <h3 className="mt-3 font-display text-4xl font-bold tracking-tight uppercase">
                  Brief is ready.
                </h3>
                <p className="mt-4 text-muted">
                  {name}, this stays in the session until you copy it. Hand it to the studio from
                  here — nothing was emailed.
                </p>
                <pre className="mt-6 max-h-64 overflow-auto border border-line p-4 text-sm whitespace-pre-wrap text-muted">
                  {note}
                </pre>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={copyBrief}
                    className="inline-flex min-h-11 items-center justify-center bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
                  >
                    {copied ? "Copied" : "Copy the brief"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="inline-flex min-h-11 items-center justify-center border border-line px-5"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <form className="grid gap-5" onSubmit={submitBrief} noValidate>
                <Field label="Name" error={errors.name}>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className="min-h-12 w-full border border-line bg-bg px-3 outline-none"
                  />
                </Field>
                <Field label="Organization" error={errors.org}>
                  <input
                    value={org}
                    onChange={(event) => setOrg(event.target.value)}
                    autoComplete="organization"
                    className="min-h-12 w-full border border-line bg-bg px-3 outline-none"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    inputMode="email"
                    className="min-h-12 w-full border border-line bg-bg px-3 outline-none"
                  />
                </Field>
                <Field label="What should be heard" error={errors.note}>
                  <textarea
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    rows={7}
                    placeholder="The launch, the audience, the constraint."
                    className="w-full border border-line bg-bg px-3 py-3 outline-none placeholder:text-faint"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center bg-fg px-5 font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.96]"
                >
                  Hold this brief
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-wide">PRPGND</p>
            <p className="mt-2 text-sm text-muted">Make yourself heard. Washington, DC.</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
            {nav.map((item) => (
              <a key={item.id} href={item.href} className="min-h-11 inline-flex items-center text-muted hover:text-fg">
                {item.label}
              </a>
            ))}
            <a href="#brief" className="inline-flex min-h-11 items-center text-muted hover:text-fg">
              Brief
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const fieldId = useId();
  const errorId = `${fieldId}-error`;
  const control = isValidElement(children)
    ? cloneElement(children, {
        id: children.props.id ?? fieldId,
        "aria-invalid": Boolean(error) || undefined,
        "aria-describedby": error ? errorId : undefined,
      })
    : children;
  return (
    <label className="grid gap-2 text-sm" htmlFor={fieldId}>
      <span className="tracking-wide text-muted">{label}</span>
      {control}
      {error ? (
        <span id={errorId} className="text-sm text-fg" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
