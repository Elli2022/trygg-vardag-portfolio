type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-green)]">
        <span className="h-px w-6 bg-[var(--accent-pink)]/70" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="section-title mt-3 text-balance text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}
