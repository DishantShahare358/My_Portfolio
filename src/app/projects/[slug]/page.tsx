import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/profile";
import type { Metadata } from "next";
import { StackShot } from "@/components/StackShot";
import { MotionSection } from "@/components/MotionSection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.name} | Dishant Shahare` : "Project | Dishant Shahare",
    description: project?.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <MotionSection immediate>
      <Link href="/#projects" className="text-sm text-[var(--accent)]">
        ← Back to systems
      </Link>
      <p className="mt-8 hud-label">
        {project.code}// {project.category}
      </p>
      <h1 className="mt-3 text-4xl font-semibold md:text-6xl">{project.name}</h1>
      <p className="mt-2 text-[var(--gold)]">{project.status}</p>
      <p className="mt-6 text-lg text-[var(--muted)]">{project.summary}</p>
      {project.screenshots?.length ? (
        <div className="mt-10 pb-8">
          <StackShot images={project.screenshots} alt={project.name} />
        </div>
      ) : null}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs">
            {s}
          </span>
        ))}
      </div>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="hud-panel rounded-2xl p-5">
          <h2 className="text-[var(--accent)]">Problem</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{project.problem}</p>
        </article>
        <article className="hud-panel rounded-2xl p-5">
          <h2 className="text-[var(--accent)]">Solution</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{project.solution}</p>
        </article>
      </section>
      <article className="hud-panel mt-4 rounded-2xl p-5">
        <h2 className="text-[var(--accent)]">Architecture</h2>
        <p className="mt-2 font-mono text-sm">{project.architecture}</p>
      </article>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {project.role ? (
        <section className="mt-8">
          <h2 className="text-xl">Role</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {project.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {project.results ? (
        <section className="mt-8">
          <h2 className="text-xl">Impact</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {project.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {project.challenges ? (
        <section className="mt-8">
          <h2 className="text-xl">Challenges</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {project.challenges.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {project.learned ? (
        <section className="mt-8">
          <h2 className="text-xl">What I learned</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
            {project.learned.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      ) : null}
      <div className="mt-10 flex gap-4">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-black">
            Live demo
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">
            GitHub
          </a>
        ) : null}
      </div>
      </MotionSection>
    </main>
  );
}
