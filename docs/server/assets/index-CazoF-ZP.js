import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MessageCircle, Mail, MapPin } from "lucide-react";
import { I as IOIIcon, C as CONTACT_EMAIL, S as SIGNUP_URL } from "./router-a2y7TcFD.js";
import { motion } from "motion/react";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const products = [{
  name: "Thoth",
  status: "live",
  tagline: "Order food on WhatsApp.",
  desc: "WhatsApp-native food ordering for restaurants in Ghana. Customers browse the menu, pay with MoMo or card, and track their order — all inside the WhatsApp chat they already use. Restaurants manage it all from a real-time kitchen dashboard.",
  href: "/thothfood",
  cta: "Order now",
  image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=720&h=360&fit=crop&q=80"
}, {
  name: "ThothShop",
  status: "coming",
  tagline: "Sell anything on WhatsApp.",
  desc: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as Thoth, extended to every merchant category.",
  href: "/thothshop",
  cta: "Join waitlist",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=720&h=360&fit=crop&q=80"
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-40", style: {
        background: "radial-gradient(60% 50% at 70% 0%, oklch(0.745 0.165 60 / 0.4) 0%, transparent 70%), radial-gradient(40% 40% at 20% 100%, oklch(0.72 0.18 145 / 0.15) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay", style: {
        backgroundImage: "url('/images/hero-bg-graphic.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-25", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page relative text-center", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", children: "🇬🇭 Live in Accra, Ghana" }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.07
        }, className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl", children: [
          "Building the commerce layer for Africa",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "on WhatsApp." })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.12
        }, className: "mx-auto mt-6 max-w-2xl body-text text-white/65", children: "We build WhatsApp-native commerce infrastructure for Africa — starting with food, expanding to everything you can sell." }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.17
        }, className: "mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/thothfood", className: "inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)]", children: [
            "See Thoth ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "inline-flex h-12 items-center rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5", children: "Learn More" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-24 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Product family" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "One platform. Every category." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/60", children: "We started with food because the ordering flow is universal and the pain is daily. ThothShop extends the same rails to every merchant type in Ghana." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2", children: products.map((p) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, className: "h-full w-full object-cover" }),
          p.status !== "live" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-dark/55" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4", children: p.status === "live" ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
            " Live"
          ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-dark/60 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
            " Coming soon"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-6 md:p-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 font-display text-2xl font-extrabold", children: [
            p.name,
            p.name === "Thoth" && /* @__PURE__ */ jsx(IOIIcon, { className: "h-5 w-5 flex-shrink-0 text-primary" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-lg font-semibold text-primary", children: p.tagline }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 body-text text-white/60", children: p.desc }),
          /* @__PURE__ */ jsxs(Link, { to: p.href, className: "mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground", children: [
            p.cta,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark pb-24 text-dark-foreground", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl rounded-3xl border border-white/10 bg-dark-card p-10 text-center md:p-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Get in touch" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Partner, invest, or just say hi." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-lg text-white/60", children: "Whether you're a restaurant ready to go live, an investor curious about WhatsApp commerce in Africa, or a developer who wants to build with us — we're easy to reach." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", search: {
          role: void 0
        }, className: "inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
          " Contact us"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: `mailto:${CONTACT_EMAIL}`, className: "inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
          " ",
          CONTACT_EMAIL
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-sm text-white/40", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
        " Accra, Ghana"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-16 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-extrabold tracking-tight md:text-4xl", children: "Ready to take orders on WhatsApp?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 opacity-80", children: "Thoth is live now. Free to start." })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, className: "inline-flex h-12 items-center gap-2 rounded-full bg-dark px-7 font-semibold text-dark-foreground hover:bg-dark-card", children: [
        "Start free ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
