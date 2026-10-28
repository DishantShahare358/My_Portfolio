"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { profile, projects } from "@/data/profile";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#think", label: "How I Think" },
  { href: "/#skills", label: "Skills Universe" },
  { href: "/#projects", label: "Projects" },
  { href: "/#ask", label: "Ask Dishant" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [recruiter, setRecruiter] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects.slice(0, 5);
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q),
    );
  }, [query]);

  function go(href: string) {
    setOpen(false);
    setSearchOpen(false);
    setRecruiter(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname !== "/") {
        router.push(href);
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(href);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--accent)] text-xs font-bold text-[var(--accent)]">
              {profile.initials}
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">{profile.shortName}</span>
              <span className="block text-[11px] text-[var(--muted)]">{profile.title}</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    go(l.href);
                  }
                }}
                className="text-[var(--muted)] hover:text-[var(--accent)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setRecruiter(true)}
              className="rounded-full border border-[var(--gold)] px-3 py-1 text-xs tracking-wide text-[var(--gold)]"
            >
              Recruiter Mode
            </button>
            <button
              type="button"
              className="rounded border border-[var(--line)] px-2 py-1 text-xs lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
        {open ? (
          <div className="grid gap-2 border-t border-[var(--line)] px-4 py-3 lg:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className="text-sm text-[var(--muted)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 grid place-items-start bg-black/70 p-4 pt-24">
          <div className="hud-panel mx-auto w-full max-w-xl rounded-2xl p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="hud-label">Search systems</p>
              <button type="button" onClick={() => setSearchOpen(false)} className="text-sm text-[var(--muted)]">
                Close
              </button>
            </div>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Hyreso, Flutter, RAG..."
              className="w-full rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-sm outline-none"
            />
            <div className="mt-4 grid gap-2">
              {results.length ? (
                results.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="rounded-lg border border-[var(--line)] px-3 py-2 text-sm hover:border-[var(--accent)]"
                  >
                    <span className="text-[var(--accent)]">{p.name}</span>
                    <span className="ml-2 text-[var(--muted)]">{p.category}</span>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-[var(--muted)]">No matching case studies.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {recruiter ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="hud-panel max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="hud-label">HR & engineering dossier</p>
                <h2 className="mt-2 text-2xl font-semibold">Why hire {profile.shortName}?</h2>
              </div>
              <button type="button" onClick={() => setRecruiter(false)} className="text-sm text-[var(--muted)]">
                Close
              </button>
            </div>
            <p className="text-sm text-[var(--muted)]">{profile.summary}</p>
            <dl className="mt-5 grid gap-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-2">
                <dt className="text-[var(--muted)]">Target roles</dt>
                <dd className="text-right">{profile.roles.join(" · ")}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-2">
                <dt className="text-[var(--muted)]">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-2">
                <dt className="text-[var(--muted)]">Availability</dt>
                <dd className="text-right">{profile.status}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-2">
                <dt className="text-[var(--muted)]">Proof</dt>
                <dd>2 Play Store apps · RAG · CV · internships</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--muted)]">Contact</dt>
                <dd className="text-right">
                  {profile.email}
                  <br />
                  {profile.phone}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.resume} className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-black">
                View full resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
              >
                GitHub
              </a>
              <a
                href="/#contact"
                onClick={() => setRecruiter(false)}
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
              >
                Contact form
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
