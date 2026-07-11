import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, Check, Minus } from "lucide-react";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { d as cn, c as trackStartFree, S as SIGNUP_URL } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const freeFeatures = ["Sell on the shared Thoth WhatsApp number", "Kitchen display & order management", "Menu management", "MoMo & card payments via Paystack", "Cash-on-delivery wallet & payouts", "Delivery zones & rider management", "Dispute resolution"];
const proExtras = ["Your own WhatsApp number", "Customer CRM", "WhatsApp broadcasts", "Promotions", "Staff management", "Metrics dashboard"];
const maxFeatures = ["Everything in Pro", "Higher limits", "Advanced analytics", "Priority support"];
const comparisonRows = [{
  feature: "Kitchen display & order management",
  free: true,
  pro: true
}, {
  feature: "Menu management",
  free: true,
  pro: true
}, {
  feature: "MoMo & card payments via Paystack",
  free: true,
  pro: true
}, {
  feature: "Cash-on-delivery wallet & payouts",
  free: true,
  pro: true
}, {
  feature: "Delivery zones & rider management",
  free: true,
  pro: true
}, {
  feature: "Dispute resolution",
  free: true,
  pro: true
}, {
  feature: "Your own WhatsApp number",
  free: false,
  pro: true
}, {
  feature: "Customer CRM",
  free: false,
  pro: true
}, {
  feature: "WhatsApp broadcasts",
  free: false,
  pro: true
}, {
  feature: "Promotions",
  free: false,
  pro: true
}, {
  feature: "Staff management",
  free: false,
  pro: true
}, {
  feature: "Metrics dashboard",
  free: false,
  pro: true
}];
const faqs = [{
  q: "What's included in the Free plan?",
  a: "Everything you need to start taking orders: kitchen display & order management, menu management, MoMo & card payments via Paystack, cash-on-delivery wallet & payouts, delivery zones & rider management, and dispute resolution. There's no time limit — it's free as long as you're on the platform."
}, {
  q: "How long does onboarding take?",
  a: "Most restaurants are live and taking real orders the same day. The setup is fast — create your account, upload your menu, connect payments, and you're open for business. Our team is with you every step of the way."
}, {
  q: "How and when do I get paid?",
  a: "Your earnings are tracked per order and you can request a withdrawal to your MoMo account at any time, on demand — no waiting for weekly settlements."
}, {
  q: "Can I use my existing WhatsApp number?",
  a: "Yes — that's a Pro feature. On the Free plan, you sell on the shared Thoth WhatsApp number and get discovered immediately. Pro gives you your own dedicated WhatsApp Business number, so all ordering conversations flow through your brand."
}, {
  q: "Can I switch plans later?",
  a: "Absolutely. Start on Free and upgrade to Pro whenever it makes sense for your business. Talk to us and we'll get it sorted with zero downtime."
}];
function Tick() {
  return /* @__PURE__ */ jsx("span", { className: "grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-success text-success-foreground", children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3", strokeWidth: 3 }) });
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
};
function Pricing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(faqSchema)
    } }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-20 text-dark-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", children: "Pricing" }),
      /* @__PURE__ */ jsxs("h1", { className: "mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl", children: [
        "Pricing that starts at ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "zero." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl body-text text-white/65", children: "Get your restaurant on WhatsApp for free. Upgrade to Pro when your kitchen is ready to grow." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2 md:items-start lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-sm font-bold uppercase tracking-wider text-foreground/50", children: "Free" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-end gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-5xl font-extrabold tracking-tight", children: "₵0" }),
            /* @__PURE__ */ jsx("span", { className: "mb-1 text-sm text-foreground/50", children: ", forever" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 body-text text-foreground/65", children: "Get discovered on the central Thoth number." }),
          /* @__PURE__ */ jsxs("a", { href: `${SIGNUP_URL}?plan=FREE`, className: "mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-background font-semibold text-foreground transition-colors hover:bg-muted", onClick: trackStartFree, children: [
            "Start free ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-border px-6 py-6 md:px-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-foreground/40", children: "What's included" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: freeFeatures.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Tick, {}),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: f })
          ] }, f)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-[0_30px_80px_-30px_oklch(0.18_0.005_50/0.35)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-sm font-bold uppercase tracking-wider text-primary", children: "Pro" }),
            /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: "For growing kitchens" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-end gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-extrabold tracking-tight", children: "GHS 199" }),
            /* @__PURE__ */ jsx("span", { className: "mb-1 text-sm text-white/50", children: "/month" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-white/50", children: "14-day free trial" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 body-text text-white/65", children: "Everything in Free, plus the tools to take your kitchen further." }),
          /* @__PURE__ */ jsxs("a", { href: `${SIGNUP_URL}?plan=PRO`, className: "mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5", children: [
            "Start 14-day free trial ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 px-6 py-6 md:px-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-white/40", children: "Everything in Free, plus:" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: proExtras.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Tick, {}),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: f })
          ] }, f)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-dark text-dark-foreground sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-sm font-bold uppercase tracking-wider text-white/40", children: "Max" }),
            /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/50", children: "Coming soon" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-extrabold tracking-tight text-white/60", children: "Custom" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 body-text text-white/40", children: "Everything in Pro, plus advanced tools for high-volume kitchens." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", search: {
            role: "restaurant"
          }, className: "mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 font-semibold text-white/60 transition-colors hover:bg-white/5", children: [
            "Talk to us ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 px-6 py-6 md:px-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-white/30", children: "Everything in Pro, plus:" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3 opacity-50", children: maxFeatures.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Tick, {}),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: f })
          ] }, f)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-extrabold tracking-tight md:text-3xl", children: "Free vs Pro" }),
      /* @__PURE__ */ jsx("div", { className: "-mx-4 mt-8 overflow-x-auto px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[520px] text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-secondary", children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-display font-bold", children: "Feature" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-center font-display font-bold", children: "Free" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-center font-display font-bold text-primary", children: "Pro" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: comparisonRows.map((row, i) => /* @__PURE__ */ jsxs("tr", { className: i % 2 === 0 ? "bg-background" : "bg-secondary/40", children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-3.5 text-foreground/80", children: row.feature }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-3.5 text-center", children: row.free ? /* @__PURE__ */ jsx("span", { className: "inline-grid h-5 w-5 place-items-center rounded-full bg-success text-success-foreground mx-auto", children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3", strokeWidth: 3 }) }) : /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 mx-auto text-foreground/25" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-3.5 text-center", children: row.pro ? /* @__PURE__ */ jsx("span", { className: "inline-grid h-5 w-5 place-items-center rounded-full bg-success text-success-foreground mx-auto", children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3", strokeWidth: 3 }) }) : /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 mx-auto text-foreground/25" }) })
        ] }, row.feature)) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-extrabold tracking-tight md:text-4xl", children: "Common questions" }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mt-8 space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${i}`, className: "rounded-2xl border border-border bg-background px-6", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "py-5 font-display text-base font-bold hover:no-underline", children: faq.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "pb-5 body-text text-foreground/65", children: faq.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14", children: [
      /* @__PURE__ */ jsx("h2", { className: "mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Ready to take your first WhatsApp order?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-lg opacity-80", children: "Start free today. No upfront cost. Live in days." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, className: "inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card", onClick: trackStartFree, children: [
          "Start free ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", search: {
          role: "restaurant"
        }, className: "inline-flex h-14 items-center rounded-full border border-primary-foreground/30 px-6 font-semibold opacity-80 hover:opacity-100", children: "compare plans with us" })
      ] })
    ] }) }) })
  ] });
}
export {
  Pricing as component
};
