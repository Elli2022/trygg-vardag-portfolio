import { SectionHeading } from "@/components/SectionHeading";
import { faqItems } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="section-sage py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Vanliga frågor"
          title="Svar på det vi oftast får frågor om"
          centered
        />
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[var(--border-warm)] bg-white p-5 shadow-[var(--shadow-soft)] open:ring-2 open:ring-[var(--accent-pink)]/20"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--foreground)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="text-xl text-[var(--accent-green)] transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
