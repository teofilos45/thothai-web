import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, LayoutDashboard, MenuSquare, Wallet, MapPin, Users, Megaphone, BarChart3, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { c as trackStartFree, S as SIGNUP_URL } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const features = [{
  icon: LayoutDashboard,
  title: "Real-time kitchen dashboard",
  desc: "Every incoming order. Live. One screen. No printer chaos."
}, {
  icon: MenuSquare,
  title: "Menu management",
  desc: "Update items, prices, photos, availability — pushed to WhatsApp instantly."
}, {
  icon: Wallet,
  title: "MoMo + card payments",
  desc: "Customers pay via Paystack. Payouts land in your merchant wallet."
}, {
  icon: MapPin,
  title: "Delivery zone control",
  desc: "Draw your zones. Set per-zone fees and minimums. Stop losing money on far deliveries."
}, {
  icon: Users,
  title: "Staff management",
  desc: "Roles for managers, kitchen, riders. Everyone sees what they need."
}, {
  icon: Megaphone,
  title: "Promotions engine",
  desc: "Launch discounts, combos, and limited-time offers — straight to WhatsApp."
}, {
  icon: BarChart3,
  title: "Analytics that matter",
  desc: "Top items, peak hours, repeat customers. Make decisions with data."
}, {
  icon: Wallet,
  title: "Merchant wallet & withdrawals",
  desc: "Track your balance. Request withdrawals to your MoMo account on demand."
}];
const onboarding = ["Create your account", "Set up your restaurant profile", "Connect your WhatsApp number", "Upload your menu", "Configure delivery zones", "Connect payments (Paystack/MoMo)", "Invite your team", "Go live"];
function ForRestaurants() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-12 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: "For Restaurants" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl", children: [
          "Put your restaurant on WhatsApp. ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Free." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-lg body-text text-foreground/65", children: "List your menu at your prices — pay nothing to get started. Your customers already live on WhatsApp. Meet them there." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, className: "inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.55)]", onClick: trackStartFree, children: [
            "Start free ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/thothfood/pricing", className: "inline-flex h-14 items-center rounded-full border border-border px-6 font-semibold hover:bg-muted", children: "See pricing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-full overflow-x-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 to-success/15 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-dark text-dark-foreground shadow-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-white/10 px-5 py-3", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive" }),
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3 text-xs text-white/50", children: "Kitchen Dashboard" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 p-5 text-xs", children: [{
            label: "Live orders",
            v: "12",
            c: "text-primary"
          }, {
            label: "Today's revenue",
            v: "₵4,820",
            c: "text-success"
          }, {
            label: "Avg prep",
            v: "14m",
            c: "text-info"
          }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-dark-card p-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-white/50", children: s.label }),
            /* @__PURE__ */ jsx("p", { className: `mt-1 font-display text-2xl font-extrabold ${s.c}`, children: s.v })
          ] }, s.label)) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 px-5 pb-5", children: [{
            id: "#1042",
            item: "2× Jollof + Chicken",
            status: "Cooking",
            c: "bg-primary/20 text-primary"
          }, {
            id: "#1041",
            item: "Waakye Special",
            status: "Out for delivery",
            c: "bg-info/20 text-info"
          }, {
            id: "#1040",
            item: "Banku + Tilapia",
            status: "New",
            c: "bg-success/20 text-success"
          }].map((o) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-xl bg-dark-card p-3 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-mono text-white/50", children: o.id }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 font-medium", children: o.item })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `rounded-full px-2.5 py-1 text-[10px] font-semibold ${o.c}`, children: o.status })
          ] }, o.id)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Everything you need" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "A full restaurant OS, hiding in a WhatsApp chat." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background p-6 ring-1 ring-border transition-transform hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-base font-bold", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 body-text text-foreground/65", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "8-step onboarding" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Live in days, not months." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-foreground/65", children: "Our team walks you through every step. Most restaurants are taking real orders within a week." })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "grid gap-3 sm:grid-cols-2", children: onboarding.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary font-display text-base font-extrabold text-primary-foreground", children: i + 1 }),
        /* @__PURE__ */ jsx("span", { className: "pt-2 font-medium", children: step })
      ] }, step)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-24 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Built on trust" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Protection on both sides of the chat." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: [{
        icon: ShieldCheck,
        title: "Merchant trust scoring",
        desc: "Earn a verified trust score as you fulfil orders reliably."
      }, {
        icon: Sparkles,
        title: "Dispute resolution",
        desc: "Built-in system to resolve customer issues quickly and fairly."
      }, {
        icon: Truck,
        title: "Cash on Delivery support",
        desc: "Accept COD where it makes sense — fully tracked through the platform."
      }].map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-dark-card p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsx(t.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: t.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 body-text text-white/60", children: t.desc })
      ] }, t.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-extrabold tracking-tight md:text-5xl", children: "Ready to take orders on WhatsApp?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-base opacity-80", children: "Get listed free. No upfront cost. Live in days." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, className: "inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card", children: [
          "Start free ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", search: {
          role: "restaurant"
        }, className: "inline-flex h-14 items-center rounded-full border border-primary-foreground/30 px-6 font-semibold opacity-80 hover:opacity-100", children: "or talk to us" })
      ] })
    ] }) })
  ] });
}
export {
  ForRestaurants as component
};
