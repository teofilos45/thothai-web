import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
function ThothShop() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-40", style: {
        background: "radial-gradient(60% 50% at 30% 0%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%), radial-gradient(40% 40% at 80% 100%, oklch(0.72 0.18 145 / 0.15) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page relative text-center", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Coming Soon"
        ] }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.07
        }, className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl", children: [
          "Sell anything on",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "WhatsApp." })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.12
        }, className: "mx-auto mt-6 max-w-2xl body-text text-white/65", children: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as Thoth, extended to every merchant category." }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.17
        }, className: "mt-8 flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", search: {
            role: void 0
          }, className: "inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5", children: [
            "Join the waitlist ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-white/40", children: "Mention ThothShop in your message and we'll reach out first." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-20 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "What you can sell" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "If you sell it, you can sell it on WhatsApp." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4", children: [{
        emoji: "👗",
        label: "Fashion & Clothing"
      }, {
        emoji: "💄",
        label: "Beauty & Cosmetics"
      }, {
        emoji: "📱",
        label: "Electronics"
      }, {
        emoji: "🎨",
        label: "Art & Crafts"
      }, {
        emoji: "🏠",
        label: "Home & Living"
      }, {
        emoji: "🥗",
        label: "Groceries & Food"
      }, {
        emoji: "📚",
        label: "Books & Stationery"
      }, {
        emoji: "🛠️",
        label: "Tools & Hardware"
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-dark-card p-6 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-4xl", children: c.emoji }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-white/80", children: c.label })
      ] }, c.label)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Same rails. New categories." }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Built on everything Thoth proved." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/65", children: "Payments, catalogue, order management, live tracking — the same infrastructure powering restaurants in Accra, extended to every merchant type." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: [{
        title: "WhatsApp-native catalogue",
        desc: "Your entire product range in a WhatsApp catalogue. No website, no app, no friction."
      }, {
        title: "MoMo & card checkout",
        desc: "Customers pay with MTN, Telecel, AirtelTigo, or card — right inside the chat."
      }, {
        title: "Order management dashboard",
        desc: "Manage orders, inventory, and deliveries from a real-time web dashboard."
      }].map((f) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-secondary p-7 ring-1 ring-border", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 body-text text-foreground/65 leading-relaxed", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-20 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-extrabold tracking-tight md:text-4xl", children: "Be first to know when ThothShop launches." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 opacity-80", children: "Leave your details — we'll reach out before public launch." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", search: {
        role: void 0
      }, className: "mt-7 inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card", children: [
        "Get early access ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  ThothShop as component
};
