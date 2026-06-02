type ActivityCardProps = {
  title: string;
  items: string[];
  variant: "outdoor" | "indoor";
};

const variantStyles = {
  outdoor: {
    card: "border-[var(--accent-green)]/35 bg-gradient-to-br from-white to-[var(--background-sage)]/40",
    dot: "bg-[var(--accent-green)]",
  },
  indoor: {
    card: "border-[var(--accent-pink)]/40 bg-gradient-to-br from-white to-[var(--accent-cream)]/80",
    dot: "bg-[var(--accent-pink)]",
  },
} as const;

export function ActivityCard({ title, items, variant }: ActivityCardProps) {
  const styles = variantStyles[variant];

  return (
    <article
      className={`rounded-3xl border p-6 shadow-[var(--shadow-soft)] md:p-8 ${styles.card}`}
    >
      <h3 className="section-title text-2xl font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl bg-white/70 px-3 py-2 text-[var(--muted)] ring-1 ring-[var(--border-warm)]/80"
          >
            <span
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${styles.dot}`}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
