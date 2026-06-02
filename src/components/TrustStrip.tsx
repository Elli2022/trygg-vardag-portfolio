import { trustHighlights } from "@/lib/site-data";

export function TrustStrip() {
  return (
    <section
      aria-label="Trygghet och kvalitet"
      className="border-y border-[var(--border-warm)] bg-white/80"
    >
      <ul className="mx-auto grid max-w-6xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 md:px-10">
        {trustHighlights.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl bg-[var(--background)] px-4 py-5 ring-1 ring-[var(--border-warm)]"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-green)]">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
