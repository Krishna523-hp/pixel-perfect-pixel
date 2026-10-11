import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/heritage", label: "Heritage" },
  { to: "/hotel-booking", label: "Hotel Booking" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Explore Bardhaman home">
      <svg viewBox="0 0 40 40" className={cn("h-10 w-10", light ? "text-ink-foreground" : "text-primary")} aria-hidden>
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 30V18a10 10 0 0 1 20 0v12" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 30v-9a5 5 0 0 1 10 0v9" fill="none" className="stroke-gold" strokeWidth="1.6" />
        <path d="M8 30h24" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="9" r="1.6" className="fill-gold" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-serif text-xl font-semibold", light ? "text-ink-foreground" : "text-foreground")}>
          Explore Bardhaman
        </span>
        <span className={cn("block text-[10px] uppercase tracking-[0.25em]", light ? "text-ink-foreground/70" : "text-muted-foreground")}>
          West Bengal · India
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/";
  const [open, setOpen] = useState(false);
  return (
    <header
      className={cn(
        "z-40 w-full",
        overlay ? "absolute inset-x-0 top-0" : "sticky top-0 border-b bg-background/95 backdrop-blur",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Logo light={overlay} />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className={cn(
                    "border-b-2 border-transparent py-1 text-sm font-medium tracking-wide transition-colors",
                    overlay ? "text-ink-foreground/85 hover:text-ink-foreground" : "text-foreground/75 hover:text-foreground",
                  )}
                  activeProps={{ className: "border-gold! " + (overlay ? "text-ink-foreground!" : "text-foreground!") }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={cn("md:hidden", overlay ? "text-ink-foreground" : "text-foreground")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t bg-background md:hidden">
          <ul className="container-site flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  className="block py-3 text-base text-foreground"
                  activeProps={{ className: "text-primary! font-semibold" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-md text-sm text-ink-foreground/70">
            Discover the royal heritage, culture and attractions of Bardhaman, West Bengal.
          </p>
        </div>
        <div>
          <p className="eyebrow">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink-foreground/80 hover:text-ink-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col justify-between gap-2 py-5 text-xs text-ink-foreground/60 md:flex-row">
          <span>© 2026 Explore Bardhaman</span>
          <span>Photographs courtesy of Wikimedia Commons contributors, used under their stated licences.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="container-site pb-12 pt-16 text-center md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl text-5xl md:text-7xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
      <div className="mx-auto mt-8 h-px w-16 bg-gold" />
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
