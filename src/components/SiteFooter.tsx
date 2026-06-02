import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-warm)] bg-[var(--accent-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <p className="section-title text-2xl font-semibold text-[var(--foreground)]">
              Trygg närvaro, mänsklig värme och tid för det som betyder mest.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {siteConfig.name} – sällskap och ledsagning för äldre med utgångspunkt i
              Malmö och uppdrag i Skåne.
            </p>
          </div>
          <nav aria-label="Sidfotsmeny">
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-[var(--muted)]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-lg px-2 py-1 transition hover:bg-white/70 hover:text-[var(--accent-green-dark)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border-warm)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <a
              href="#kontakt"
              className="font-medium text-[var(--foreground)] underline decoration-[var(--accent-pink)] underline-offset-4"
            >
              Kontakta oss via formuläret
            </a>
          </p>
          <p className="text-xs text-[#7a8a82]">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-[#8a9690]">
          <Link href="/" className="hover:text-[var(--accent-green-dark)]">
            Startsida
          </Link>
        </p>
      </div>
    </footer>
  );
}
