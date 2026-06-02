import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-10 text-[var(--foreground)] md:px-10 md:py-14">
      <main className="card-surface mx-auto max-w-3xl p-8 text-center md:p-12">
        <BrandLogo size="xl" className="mx-auto" />
        <span className="mt-6 inline-flex rounded-full bg-[var(--background-sage)] px-4 py-1 text-sm font-medium text-[var(--accent-green-dark)]">
          Tack för din förfrågan
        </span>
        <h1 className="section-title mt-4 text-3xl font-semibold md:text-4xl">
          Vi har tagit emot ditt meddelande
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          Tack för att du kontaktade {siteConfig.name}. Vi hör av oss så snart vi
          kan.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Tillbaka till startsidan
        </Link>
      </main>
    </div>
  );
}
