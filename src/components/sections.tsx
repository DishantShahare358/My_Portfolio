"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  certifications,
  drives,
  education,
  experience,
  hobbies,
  profile,
  projects,
  skillGroups,
  softSkills,
  thinkingSteps,
  timeline,
  whyHire,
  achievements,
} from "@/data/profile";
import { answerQuestion } from "@/lib/copilot";
import { StackShot } from "@/components/StackShot";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-16">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted)]">
        <span className="font-mono tracking-[0.2em] text-[var(--accent)]">
          {profile.os} | {profile.status}
        </span>
        <span>Nagpur · Open to hire</span>
      </div>
      <p className="hud-label">Applied AI · Flutter · Product</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-2xl text-[var(--accent)] md:text-3xl">{profile.subtitle}</p>
      <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">{profile.tagline}</p>
      <p className="mt-4 max-w-3xl text-[var(--fg)]/90">{profile.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black">
          Explore case studies
        </a>
        <a href={profile.resume} className="rounded-full border border-[var(--line)] px-5 py-2 text-sm">
          View resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-5 py-2 text-sm">
          View LinkedIn
        </a>
        <button
          type="button"
          onClick={() => document.getElementById("dossier")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-full border border-[var(--gold)] px-5 py-2 text-sm text-[var(--gold)]"
        >
          Recruiter dossier
        </button>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["AI Identity", "Dishant Lab"],
          ["Verified Proof", "2 Play Store systems + RAG"],
          ["Primary Core", profile.core.join(", ")],
        ].map(([k, v]) => (
          <div key={k} className="hud-panel rounded-xl p-4">
            <p className="hud-label">{k}</p>
            <p className="mt-2 text-lg">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {profile.heroTags.map((t) => (
          <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
            #{t}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Identity() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Dishant AI Lab</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Digital identity system</h2>
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative mx-auto aspect-square w-full max-w-xl">
          <div className="absolute inset-8 rounded-full border border-[var(--line)]" />
          <div className="orbit absolute inset-0">
            {profile.identityChips.map((chip, i) => {
              const angle = (i / profile.identityChips.length) * 360;
              return (
                <span
                  key={chip}
                  className="absolute left-1/2 top-1/2 text-[11px] tracking-widest text-[var(--accent)]"
                  style={{ transform: `rotate(${angle}deg) translate(210px) rotate(-${angle}deg)` }}
                >
                  {chip}
                </span>
              );
            })}
          </div>
          <div className="absolute inset-24 grid place-items-center rounded-full hud-panel">
            <div className="text-center">
              <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border border-[var(--accent)] bg-[radial-gradient(circle_at_30%_20%,#3ee0c0,transparent_40%),linear-gradient(#102018,#05070b)]" />
              <p className="hud-label">Active module</p>
              <p className="mt-2 text-2xl">Flutter + AI/ML</p>
              <p className="mt-1 text-xs text-[var(--gold)]">ONLINE</p>
            </div>
          </div>
        </div>
        <div className="hud-panel rounded-2xl p-6">
          <p className="hud-label">DISHANT.AI // ONLINE</p>
          <p className="mt-4 text-[var(--muted)]">
            AI-focused B.Tech builder from Nagpur working across Flutter products, retrieval systems, computer vision
            and full-stack backends.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-black"
          >
            Enter Dishant&apos;s AI space
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhyHire() {
  return (
    <section id="dossier" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">HR & engineering lead dossier</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold md:text-4xl">Why hire {profile.shortName}?</h2>
        <div className="flex gap-3">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sm text-[var(--accent)]">
            View LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-sm text-[var(--gold)]">
            Schedule interview
          </a>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {whyHire.map((item) => (
          <article key={item.title} className="hud-panel rounded-2xl p-6">
            <h3 className="text-xl text-[var(--accent)]">{item.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 hud-panel rounded-2xl p-5 text-sm">
        <p className="hud-label">Target roles & availability</p>
        <p className="mt-2">{profile.roles.join(" • ")}</p>
        <p className="mt-2 text-[var(--muted)]">
          {profile.location} • {profile.status}
        </p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">About & mission</p>
      <h2 className="mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">
        An applied engineering laboratory, not a static resume.
      </h2>
      <p className="mt-4 max-w-3xl text-[var(--muted)]">
        Hello, I&apos;m {profile.name}. {profile.quote} I enjoy turning ideas into products, exploring new technologies,
        and continuously learning as a developer.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {drives.map((d) => (
          <div key={d} className="hud-panel rounded-xl p-4 text-sm">
            {d}
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="hud-panel rounded-2xl p-6">
          <p className="hud-label">Education</p>
          <h3 className="mt-2 text-xl">{education.degree}</h3>
          <p className="text-[var(--muted)]">{education.school}</p>
          <p className="mt-2 text-sm">
            {education.period} · CGPA {education.cgpa}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">{education.affiliation}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.subjects.map((s) => (
              <span key={s} className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px] text-[var(--muted)]">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="hud-panel rounded-2xl p-6">
          <p className="hud-label">Beyond code</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Thinking() {
  const [active, setActive] = useState(0);
  const step = thinkingSteps[active];
  return (
    <section id="think" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Engineering judgment</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Problem to data, intelligence to system, system to result.</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-2">
          {thinkingSteps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={`w-full rounded-xl border px-4 py-3 text-left ${
                i === active ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--line)]"
              }`}
            >
              <span className="font-mono text-xs text-[var(--accent)]">{s.id}</span>
              <span className="ml-3">{s.title}</span>
              <span className="ml-2 text-sm text-[var(--muted)]">{s.label}</span>
            </button>
          ))}
        </div>
        <article className="hud-panel rounded-2xl p-6">
          <p className="hud-label">Verified example · {step.example}</p>
          <h3 className="mt-3 text-2xl">{step.title}</h3>
          <p className="mt-4 text-[var(--muted)]">{step.detail}</p>
        </article>
      </div>
    </section>
  );
}

export function Skills() {
  const all = skillGroups.flatMap((g) => g.items);
  const [selected, setSelected] = useState("Flutter");
  const related = useMemo(
    () => projects.filter((p) => p.stack.some((s) => s.toLowerCase().includes(selected.toLowerCase()))),
    [selected],
  );

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Applied stack</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">From models and mobile to APIs and release.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article key={g.title} className="hud-panel rounded-2xl p-5">
            <h3 className="text-[var(--accent)]">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`rounded-full border px-2 py-1 text-xs ${
                    selected === item ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--line)] text-[var(--muted)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-full border border-[var(--line)] py-3">
        <div className="marquee flex w-max gap-6 px-4 text-sm text-[var(--muted)]">
          {[...all, ...all].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mt-6 hud-panel rounded-2xl p-6">
        <p className="hud-label">Skill node · {selected}</p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Select any technology to see where it appears in the portfolio.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.length ? (
            related.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="text-sm text-[var(--accent)]">
                {p.name}
              </Link>
            ))
          ) : (
            <span className="text-sm text-[var(--muted)]">Listed as a verified skill; not always a named case-study tag.</span>
          )}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span key={s} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Universe() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Interactive system map</p>
      <h2 className="mt-2 text-3xl font-semibold">Projects as connected AI, mobile and product systems.</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="absolute inset-0 rounded-full border border-[var(--line)]" />
          {projects.map((item, i) => {
            const angle = (i / projects.length) * 360;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 text-left text-xs"
                style={{ transform: `rotate(${angle}deg) translate(190px) rotate(-${angle}deg)` }}
              >
                <span className={i === active ? "text-[var(--accent)]" : "text-[var(--muted)]"}>
                  {item.code} {item.name}
                </span>
              </button>
            );
          })}
          <div className="absolute inset-32 grid place-items-center rounded-full hud-panel">
            <div className="text-center">
              <p className="text-2xl font-semibold">{profile.initials}</p>
              <p className="text-xs text-[var(--muted)]">Dishant</p>
            </div>
          </div>
        </div>
        <article className="hud-panel rounded-2xl p-6">
          <p className="hud-label">{p.category}</p>
          <h3 className="mt-2 text-2xl">{p.name}</h3>
          <p className="mt-1 text-xs text-[var(--gold)]">{p.status}</p>
          <p className="mt-4 text-sm text-[var(--muted)]">{p.summary}</p>
          {p.screenshots?.length ? (
            <div className="mt-6 pb-8">
              <StackShot images={p.screenshots} alt={p.name} />
            </div>
          ) : null}
          <p className="mt-4 font-mono text-xs text-[var(--accent)]">{p.architecture}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-[var(--line)] px-2 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
          <Link href={`/projects/${p.slug}`} className="mt-6 inline-block text-sm text-[var(--accent)]">
            Open case study
          </Link>
        </article>
      </div>
    </section>
  );
}

export function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = list.filter((p) => p.screenshots?.length);
  const rest = list.filter((p) => !p.screenshots?.length);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Case studies & proof links</p>
      <h2 className="mt-2 text-3xl font-semibold">Verified products, agents and vision systems.</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3 py-1 text-xs ${
              filter === c ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-8">
        {featured.map((p, i) => (
          <article key={p.slug} className="project-feature hud-panel rounded-3xl p-6 md:p-8">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="font-mono text-xs text-[var(--accent)]">
                  {p.code}// {p.category}
                </p>
                <h3 className="mt-2 text-3xl md:text-4xl">{p.name}</h3>
                <p className="mt-2 inline-flex rounded-full border border-[var(--gold)] px-3 py-1 text-xs text-[var(--gold)]">
                  {p.status}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((s) => (
                    <span key={s} className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                  <p>
                    <span className="text-[var(--accent)]">Problem. </span>
                    {p.problem}
                  </p>
                  <p>
                    <span className="text-[var(--accent)]">Solution. </span>
                    {p.solution}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="rounded-full bg-[var(--accent)] px-4 py-2 text-black"
                  >
                    Full case study
                  </Link>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--gold)] px-4 py-2 text-[var(--gold)]">
                      Live demo
                    </a>
                  ) : null}
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2">
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="relative min-h-[470px]">
                <StackShot images={p.screenshots!} alt={p.name} />
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.slug} className="hud-panel rounded-2xl p-6">
            <p className="font-mono text-xs text-[var(--accent)]">
              {p.code}// {p.category}
            </p>
            <h3 className="mt-2 text-2xl">{p.name}</h3>
            <p className="text-xs text-[var(--gold)]">{p.status}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((s) => (
                <span key={s} className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
              <p>
                <span className="text-[var(--accent)]">Problem. </span>
                {p.problem}
              </p>
              <p>
                <span className="text-[var(--accent)]">Solution. </span>
                {p.solution}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link href={`/projects/${p.slug}`} className="text-[var(--accent)]">
                Full case study
              </Link>
              {p.live ? (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-[var(--gold)]">
                  Live demo
                </a>
              ) : null}
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="text-[var(--muted)]">
                  Source
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const commands: Record<string, string> = {
  help: "Commands: why-hire, projects, skills, stats, certifications, contact, clear",
  "why-hire": `${profile.shortName} ships Play Store Flutter apps and applied AI (RAG, NLP, CV). ${profile.summary}`,
  projects: projects.map((p) => `${p.code} ${p.name} — ${p.status}`).join("\n"),
  skills: profile.core.join(" · ") + " · " + skillGroups.map((g) => g.title).join(", "),
  stats: `Education CGPA ${education.cgpa} · ${experience.length} professional chapters · ${projects.length} case studies · 2 Play Store apps`,
  certifications: certifications.flatMap((g) => g.items.map((i) => `${i.name} (${i.org})`)).join("\n"),
  contact: `${profile.email} · ${profile.phone} · ${profile.linkedin}`,
};

export function Terminal() {
  const [lines, setLines] = useState<string[]>([
    `${profile.os} (Interactive recruiter & engineer terminal)`,
    "Type a command or click a chip. Try `why-hire`.",
  ]);
  const [value, setValue] = useState("");

  function run(cmd: string) {
    const key = cmd.trim().toLowerCase();
    if (key === "clear") {
      setLines([]);
      return;
    }
    const out = commands[key] ?? `Command not found: ${cmd}. Type help.`;
    setLines((prev) => [...prev, `$ ${cmd}`, out]);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Developer CLI</p>
      <h2 className="mt-2 text-3xl font-semibold">Test Dishant&apos;s profile via terminal CLI</h2>
      <div className="mt-6 hud-panel overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-xs text-[var(--muted)]">
          <span>dishant@portfolio: ~/recruiter-terminal</span>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(lines.join("\n"))}
            className="text-[var(--accent)]"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-2 px-4 py-3 text-xs">
          {Object.keys(commands).map((c) => (
            <button key={c} type="button" onClick={() => run(c)} className="rounded-full border border-[var(--line)] px-3 py-1">
              {c}
            </button>
          ))}
        </div>
        <pre className="max-h-72 overflow-auto px-4 pb-4 font-mono text-xs leading-6 text-[var(--accent-2)]">
          {lines.join("\n")}
        </pre>
        <form
          className="flex border-t border-[var(--line)]"
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue("");
          }}
        >
          <span className="px-4 py-3 font-mono text-xs text-[var(--accent)]">$</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent py-3 font-mono text-sm outline-none"
            placeholder="why-hire"
          />
        </form>
      </div>
    </section>
  );
}

export function Copilot() {
  const [q, setQ] = useState("");
  const [a, setA] = useState(answerQuestion("why hire"));
  const chips = [
    "What AI projects has Dishant built?",
    "Explain the RAG project.",
    "What technologies does Dishant use?",
    "Why should I hire Dishant?",
  ];

  return (
    <section id="ask" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Ask Dishant copilot</p>
      <h2 className="mt-2 text-3xl font-semibold">A grounded portfolio assistant for recruiters.</h2>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Answers come from approved profile, project, skills, education and experience data — not unrestricted claims.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="hud-panel rounded-2xl p-6">
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setQ(c);
                  setA(answerQuestion(c));
                }}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-xs"
              >
                {c}
              </button>
            ))}
          </div>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setA(answerQuestion(q));
            }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask about Hyreso, CampusGPT, Flutter..."
              className="flex-1 rounded-full border border-[var(--line)] bg-transparent px-4 py-2 text-sm outline-none"
            />
            <button className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-black">Ask</button>
          </form>
          <p className="mt-5 whitespace-pre-wrap text-sm leading-7">{a.text}</p>
          <p className="mt-3 text-xs text-[var(--gold)]">Sources: {a.sources.join(" · ")}</p>
        </div>
        <div className="space-y-3">
          {["Strict portfolio grounding", "Zero hallucination retrieval", "Source-linked responses", "Direct recruiter answering"].map(
            (item) => (
              <div key={item} className="hud-panel rounded-xl px-4 py-3 text-sm">
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Timeline</p>
      <h2 className="mt-2 text-3xl font-semibold">Project-led experience with shipped proof.</h2>
      <div className="mt-8 space-y-4">
        {experience.map((job) => (
          <article key={job.company} className="hud-panel rounded-2xl p-6">
            <p className="hud-label">{job.type}</p>
            <h3 className="mt-2 text-2xl">{job.role}</h3>
            <p className="text-[var(--muted)]">
              {job.company} · {job.period}
            </p>
            <p className="text-sm text-[var(--muted)]">{job.location}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span key={s} className="rounded-full border border-[var(--line)] px-2 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {timeline.map((t) => (
          <article key={t.title} className="hud-panel rounded-2xl p-5">
            <p className="font-mono text-xs text-[var(--accent)]">
              {t.year} · {t.tag}
            </p>
            <h3 className="mt-2 text-lg">{t.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{t.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 hud-panel rounded-2xl p-6">
        <p className="hud-label">Achievements</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Achievements & credentials</p>
      <h2 className="mt-2 text-3xl font-semibold">Certifications and structured learning.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {certifications.map((g) => (
          <article key={g.group} className="hud-panel rounded-2xl p-5">
            <h3 className="text-[var(--accent)]">{g.group}</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {g.items.map((i) => (
                <li key={i.name}>
                  <p>{i.name}</p>
                  <p className="text-xs text-[var(--muted)]">{i.org}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const company = String(data.get("company") || "");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name} (${email})\nCompany: ${company}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${body}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24">
      <p className="hud-label">Direct contact</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-5xl">Let&apos;s build something intelligent.</h2>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Open to {profile.roles.join(", ")}. {profile.availability}
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="hud-panel grid gap-3 rounded-2xl p-6">
          <input name="company" placeholder="Company" className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2" />
          <input name="name" required placeholder="Name" className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2" />
          <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2" />
          <textarea name="message" required rows={5} placeholder="Message" className="rounded-lg border border-[var(--line)] bg-transparent px-3 py-2" />
          <button className="rounded-full bg-[var(--accent)] py-2 text-sm font-medium text-black">Send message</button>
        </form>
        <div className="space-y-4">
          <div className="hud-panel rounded-2xl p-6 text-sm">
            <p>Email · {profile.email}</p>
            <p className="mt-2">Phone · {profile.phone}</p>
            <p className="mt-2">Location · {profile.location}</p>
            <p className="mt-2">Languages · {profile.languages.join(", ")}</p>
            <p className="mt-2">Preferred · {profile.preferredLocation}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">
              Email
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-16 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
        <p>
          {profile.name} · {profile.title}
        </p>
        <p className="mt-2">Copyright 2026. Built with Next.js, TypeScript and Tailwind CSS.</p>
        <p className="mt-2 italic">The best is yet to come.</p>
      </footer>
    </section>
  );
}
