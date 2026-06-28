import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGIN_URL } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { ThothAILogo } from "@/components/site/ThothAILogo";

const thothFoodLinks = [
  { to: "/thothfood/how-it-works", label: "How it works" },
  { to: "/thothfood/for-restaurants", label: "For Restaurants" },
  { to: "/thothfood/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const parentLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isThothFood = location.pathname.startsWith("/thothfood");
  const links = isThothFood ? thothFoodLinks : parentLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">

        {isThothFood ? (
          <div className="flex flex-col justify-center">
            <Link to="/" className="text-[10px] font-semibold leading-none text-foreground/40 transition-colors hover:text-foreground/70">
              ThothAI Technologies ↗
            </Link>
            <Link to="/thothfood" className="mt-0.5 flex items-center gap-1.5 font-display text-xl font-extrabold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span>Thoth<span className="text-primary">Food</span></span>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <ThothAILogo size="md" />
          </Link>
        )}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isThothFood ? (
            <>
              <a
                href={LOGIN_URL}
                className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
              >
                Restaurant Login
              </a>
              <WhatsAppLink className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5">
                Order Now
              </WhatsAppLink>
            </>
          ) : (
            <Link
              to="/contact"
              search={{ role: undefined }}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              {isThothFood ? (
                <>
                  <a
                    href={LOGIN_URL}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-border font-semibold text-foreground/80"
                  >
                    Restaurant Login
                  </a>
                  <WhatsAppLink className="inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    Order Now
                  </WhatsAppLink>
                </>
              ) : (
                <Link
                  to="/contact"
                  search={{ role: undefined }}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
                >
                  Get in touch
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
