"use client";

import { useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "ok" : "err");
      if (res.ok) setEmail("");
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <p className="label-mono text-acid">
        ✦ You're on the list. Watch your inbox for drops & dates.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`flex w-full gap-2 ${compact ? "" : "max-w-md"}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="min-w-0 flex-1 rounded-full border border-ink-line bg-ink px-5 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-acid focus:outline-none"
      />
      <button type="submit" disabled={state === "loading"} className="btn-acid shrink-0 disabled:opacity-60">
        {state === "loading" ? "…" : "Join"}
      </button>
    </form>
  );
}
