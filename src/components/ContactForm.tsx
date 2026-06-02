"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const fieldClassName =
  "w-full rounded-xl border border-[var(--border-warm)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition placeholder:text-[#9aa8a0] focus:border-[var(--accent-green)] focus:ring-2 focus:ring-[var(--accent-green)]/25 disabled:opacity-60";

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    setSending(true);

    if (!accessKey) {
      setError(true);
      setSending(false);
      return;
    }

    const form = event.currentTarget;
    const body = new FormData(form);
    body.append("access_key", accessKey);
    body.append("subject", "Ny förfrågan – Trygg Vardag Skåne");
    body.append("from_name", "Trygg Vardag Skåne – kontaktformulär");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const data = (await response.json()) as { success: boolean };

      if (data.success) {
        router.push("/tack");
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="hidden" aria-hidden="true">
        <label>
          Fyll inte i detta fält:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--foreground)]" htmlFor="name">
          Namn
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          disabled={sending}
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--foreground)]" htmlFor="email">
          E-post
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={sending}
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--foreground)]" htmlFor="phone">
          Telefonnummer
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          disabled={sending}
          className={fieldClassName}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[var(--foreground)]" htmlFor="message">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={sending}
          className={fieldClassName}
        />
      </div>

      {error ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Något gick fel. Kontrollera att NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY finns i
          Netlify och att du deployat om efter det.
        </p>
      ) : null}

      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
        {sending ? "Skickar…" : "Skicka förfrågan"}
      </button>
    </form>
  );
}
