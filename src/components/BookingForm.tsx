"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const inquiryTypes = ["Booking", "Promoter / Talent Buyer", "Press / Interview", "Label / Demo", "Other"];

export function BookingForm() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "ok" : "err");
      if (res.ok) form.reset();
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-xl border border-acid/40 bg-acid/5 p-8 text-center">
        <div className="display text-3xl text-acid">Inquiry sent</div>
        <p className="mt-3 text-sm text-bone-muted">
          Thanks — your message is in. For anything urgent, email{" "}
          <a href={`mailto:${SITE.bookingEmail}`} className="text-acid link-underline">
            {SITE.bookingEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-acid focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Name *</span>
          <input name="name" required placeholder="Your name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Email *</span>
          <input name="email" type="email" required placeholder="you@company.com" className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Company / Promoter</span>
          <input name="company" placeholder="Organization" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Inquiry type</span>
          <select name="type" className={field} defaultValue="Booking">
            {inquiryTypes.map((t) => (
              <option key={t} value={t} className="bg-ink">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Event date</span>
          <input name="date" type="date" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">City</span>
          <input name="city" placeholder="City" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="label-mono text-bone-faint">Venue / Capacity</span>
          <input name="venue" placeholder="Venue" className={field} />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="label-mono text-bone-faint">Message *</span>
        <textarea name="message" required rows={5} placeholder="Tell us about the event, budget range, and set time." className={field} />
      </label>

      {state === "err" && (
        <p className="text-sm text-magenta">
          Something went wrong. Please email{" "}
          <a href={`mailto:${SITE.bookingEmail}`} className="underline">
            {SITE.bookingEmail}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={state === "loading"} className="btn-acid disabled:opacity-60">
          {state === "loading" ? "Sending…" : "Send inquiry"}
        </button>
        <span className="text-xs text-bone-faint">
          Or email directly:{" "}
          <a href={`mailto:${SITE.bookingEmail}`} className="text-acid link-underline">
            {SITE.bookingEmail}
          </a>
        </span>
      </div>
    </form>
  );
}
