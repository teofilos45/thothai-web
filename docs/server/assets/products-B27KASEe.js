import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { I as IOIIcon } from "./router-a2y7TcFD.js";
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
function Products() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-20 text-dark-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", children: "Our Products" }),
      /* @__PURE__ */ jsxs("h1", { className: "mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl", children: [
        "One platform. ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Every category." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl body-text text-white/65", children: "We started with food because the ordering flow is universal and the pain is daily. ThothShop extends the same rails to every merchant type in Ghana." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark pb-24 text-dark-foreground", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: products.map((p) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-card", children: [
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
        /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 font-display text-2xl font-extrabold", children: [
          p.name,
          p.name === "Thoth" && /* @__PURE__ */ jsx(IOIIcon, { className: "h-5 w-5 flex-shrink-0 text-primary" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-lg font-semibold text-primary", children: p.tagline }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 body-text text-white/60 leading-relaxed", children: p.desc }),
        /* @__PURE__ */ jsxs(Link, { to: p.href, className: "mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground", children: [
          p.cta,
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] }, p.name)) }) }) })
  ] });
}
export {
  Products as component
};
