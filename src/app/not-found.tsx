import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="hud-label">404</p>
      <h1 className="mt-3 text-4xl font-semibold">This route is offline.</h1>
      <p className="mt-4 text-[var(--muted)]">Return to the Dishant OS home module.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-[var(--accent)] px-5 py-2 text-sm text-black">
        Back home
      </Link>
    </main>
  );
}
