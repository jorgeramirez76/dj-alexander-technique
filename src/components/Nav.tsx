"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="display text-xl tracking-tightest text-bone hover:text-acid transition-colors">
          Alexander<span className="text-acid">.</span>Technique
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const isBook = item.href === "/contact";
            if (isBook) {
              return (
                <Link key={item.href} href={item.href} className="btn-acid px-5 py-2 text-xs">
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`label-mono transition-colors hover:text-acid ${active ? "text-acid" : "text-bone-muted"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-bone transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ink-line bg-ink/95 backdrop-blur-md md:hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-site flex flex-col py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`display py-3 text-3xl tracking-tightest transition-colors ${
                pathname === item.href ? "text-acid" : "text-bone hover:text-acid"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${SITE.bookingEmail}`} className="label-mono mt-4 text-bone-faint">
            {SITE.bookingEmail}
          </a>
        </div>
      </div>
    </header>
  );
}
