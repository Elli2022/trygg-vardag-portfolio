"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site-config";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-warm)]/90 bg-[var(--background)]/90 backdrop-blur-md">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Hoppa till innehåll
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10 md:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandLogo size="sm" />
          <span className="hidden truncate text-sm font-semibold text-[var(--foreground)] sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 text-sm font-medium text-[var(--muted)] md:flex"
          aria-label="Huvudmeny"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-[var(--background-sage)] hover:text-[var(--accent-green-dark)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="hidden rounded-full bg-[var(--accent-green)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-green-dark)] sm:inline-flex"
          >
            Kontakta oss
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-warm)] bg-white text-[var(--foreground)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Stäng meny" : "Öppna meny"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-[var(--foreground)]/30 md:hidden" aria-hidden>
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Stäng meny"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      ) : null}

      <nav
        id="mobile-menu"
        className={`border-t border-[var(--border-warm)] bg-[var(--background)] md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-label="Mobilmeny"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--background-sage)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#kontakt"
              className="flex w-full justify-center rounded-full bg-[var(--accent-green)] px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Kontakta oss
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
