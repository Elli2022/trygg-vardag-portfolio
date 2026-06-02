import Image from "next/image";
import { ActivityCard } from "@/components/ActivityCard";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { siteConfig } from "@/lib/site-config";
import {
  indoorActivities,
  outdoorActivities,
  serviceAreaCities,
  serviceCards,
  steps,
} from "@/lib/site-data";
import sallyImage from "../../public/sally.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-[var(--foreground)]">
      <JsonLd />
      <SiteHeader />

      <main id="innehall">
        <section className="hero-gradient relative overflow-hidden border-b border-[var(--border-warm)]">
          <div
            className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[var(--accent-pink)]/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[var(--accent-green)]/10 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-20">
            <div className="space-y-6 animate-fade-up">
              <BrandLogo size="md" />
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-[var(--background-sage)] px-4 py-1.5 text-sm font-semibold text-[var(--accent-green-dark)] ring-1 ring-[var(--accent-pink)]/25">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-pink)]" aria-hidden />
                  Sällskap och ledsagning i Skåne
                </p>
                <h1 className="section-title text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.35rem]">
                  Tryggt sällskap och ledsagning för äldre i Skåne
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                  {siteConfig.name} erbjuder personligt sällskap, ledsagning och
                  vardagsaktiviteter med utgångspunkt i Malmö – för dig som vill ha
                  mer glädje, gemenskap och trygghet i vardagen.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#kontakt" className="btn-primary">
                  Skicka förfrågan
                </a>
                <a href="#tjanster" className="btn-secondary">
                  Se tjänster
                </a>
              </div>
            </div>

            <div className="card-surface animate-fade-up p-4 [animation-delay:120ms]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={sallyImage}
                  alt="Hund som följeslagare – värme och närhet i vardagen"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={82}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-[var(--muted)]">
                En trogen följeslagare påminner om värme, närhet och glädje i varje
                möte.
              </p>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section id="for-vem" className="section-warm py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="För vem?"
              title="När hemtjänsten inte räcker till – eller när du bara vill ha mer liv i vardagen"
              description="Vi hjälper äldre som vill ha mer fokuserat sällskap en stund – hemma, ute eller vid enklare ärenden. Tjänsten passar dig som bor hemma och önskar socialt utbyte, samt anhöriga som söker trygg avlastning utöver hemtjänst."
            />
          </div>
        </section>

        <section className="section-sage py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
            <SectionHeading
              eyebrow="Verksamhetsområde"
              title="Utgångsort Malmö – vi arbetar i hela Skåne"
              description="Med utgångspunkt i Malmö erbjuder vi ledsagning och sällskap i hela Skåne. Tillgänglighet beror på dag och uppdrag."
              centered
            />
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {serviceAreaCities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] ring-1 ring-[var(--border-warm)]"
                >
                  {city}
                </li>
              ))}
              <li className="rounded-full bg-[var(--accent-green)]/15 px-4 py-2 text-sm font-semibold text-[var(--accent-green-dark)] ring-1 ring-[var(--accent-green)]/25">
                + övriga orter i Skåne
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Så kommer du igång"
              title="Tre enkla steg till trygg vardagsglädje"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className={`card-surface p-6 ${index === 1 ? "ring-2 ring-[var(--accent-pink)]/25" : ""}`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      index === 1
                        ? "bg-[var(--accent-pink)]/25 text-[#8a5a68]"
                        : "bg-[var(--background-sage)] text-[var(--accent-green-dark)]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <h3 className="section-title mt-4 text-2xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tjanster" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Tjänster vi erbjuder"
              title="Sällskap, ledsagning och vardagsstöd"
              description="Vi är inte hemtjänst – vi är ett komplement med fokus på sällskap för äldre, ledsagning och vardagsglädje. Du väljer tempo och innehåll, vi följer med som tryggt stöd."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {serviceCards.map((service, index) => (
                <article
                  key={service.title}
                  className={`card-surface p-6 ${index === 1 ? "md:-translate-y-1 md:shadow-[var(--shadow-elevated)]" : ""}`}
                >
                  <h3 className="section-title text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="aktiviteter" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Aktiviteter"
              title="Exempel på vad vi kan göra tillsammans"
              description="Här är exempel på aktiviteter – vi anpassar alltid efter dina önskemål och dagsform."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <ActivityCard
                title="Utomhus – vi kan vara följeslagare"
                items={outdoorActivities}
                variant="outdoor"
              />
              <ActivityCard
                title="Inomhus – vi kan göra tillsammans"
                items={indoorActivities}
                variant="indoor"
              />
            </div>
          </div>
        </section>

        <FaqSection />

        <section id="om-oss" className="bg-[var(--accent-cream)] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:px-10">
            <div>
              <SectionHeading eyebrow="Om oss" title="Varför vi finns" />
              <p className="mt-6 leading-relaxed text-[var(--muted)]">
                {siteConfig.name} finns för att skapa mer glädje, gemenskap och
                meningsfulla stunder i vardagen – med utgångspunkt i Malmö och
                uppdrag i hela Skåne. Vi tror på ett respektfullt och lugnt sätt
                att mötas – där du känner dig sedd, trygg och delaktig.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Vi arbetar med omtanke, tydlighet och en varm ton. Fakturering
                sker månadsvis och RUT-avdrag hanteras i samband med det.
              </p>
            </div>
            <div className="card-surface p-3 ring-2 ring-[var(--accent-pink)]/20">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={sallyImage}
                  alt="Varm följeslagare – trygghet och glädje i vardagen"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={85}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[var(--muted)]">
                Närhet och värme i varje möte – stora som små stunder.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-start md:px-10">
            <div>
              <SectionHeading
                eyebrow="Kontakt"
                title="Hör av dig – vi återkommer snart"
                description="Fyll i formuläret så hör vi av oss för ett första samtal. Vi återkommer så snart vi kan."
              />
            </div>
            <div className="card-surface p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
