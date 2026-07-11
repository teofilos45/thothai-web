import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Target, Zap, Users, Mail, MessageCircle, MapPin } from "lucide-react";
import { C as CONTACT_EMAIL } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const values = [{
  icon: Target,
  title: "Africa-first",
  desc: "We build for the infrastructure reality of Ghana and West Africa — mobile money, low-bandwidth, high WhatsApp penetration. Not an afterthought, the starting point."
}, {
  icon: Zap,
  title: "Lowest friction possible",
  desc: "Every flow we ship must work with zero downloads, zero account creation, and zero new habits. If your customers can text, they can buy."
}, {
  icon: Users,
  title: "Merchants win first",
  desc: "We take orders on WhatsApp because that's where merchants' customers already are. We grow when merchants grow — not before."
}];
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-40", style: {
        background: "radial-gradient(70% 60% at 50% 110%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-20", style: {
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page relative text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "About us" }),
        /* @__PURE__ */ jsx("h1", { className: "mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Building the commerce layer for Africa, on WhatsApp." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Our mission" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Make commerce as easy as texting a friend." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 body-text text-foreground/65", children: 'The gap between "I want that" and "I bought that" is still enormous for most people in Africa. Existing e-commerce platforms assume high bandwidth, credit cards, and smartphones powerful enough to run native apps.' }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 body-text text-foreground/65", children: "WhatsApp has none of those assumptions. 90%+ of smartphone users in Ghana already have it. We build the rails that make WhatsApp a real commerce channel — payments, fulfilment, tracking, operations — not just a chat." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        label: "WhatsApp users in Ghana",
        value: "20M+"
      }, {
        label: "Average order time",
        value: "< 3 min"
      }, {
        label: "Payment methods",
        value: "MoMo + Card"
      }, {
        label: "App downloads required",
        value: "Zero"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-extrabold text-primary sm:text-3xl", children: s.value }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-foreground/60", children: s.label })
      ] }, s.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-24 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Our vision" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-6xl", children: [
          "Every African merchant.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "One conversation away." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl body-text text-white/65", children: "Africa is adding tens of millions of new internet users every year — nearly all arriving mobile-first, on WhatsApp before they're on any other platform. The commerce infrastructure they deserve shouldn't require an app store, a bank card, or a broadband connection." }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl body-text text-white/65", children: "We're building the commerce operating system for Africa — the layer that connects merchants to customers, payments to orders, and conversations to revenue across every category, every language, and every market on the continent. We started in Ghana because the problem is sharpest here. We're not stopping here." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: [{
        heading: "Mobile-first by default",
        body: "Most Africans experience the internet on a phone, on WhatsApp, before any other platform. We don't adapt for that — we build for it from day one."
      }, {
        heading: "Every category",
        body: "Food was our proof of concept. The same rails — payments, catalogue, fulfilment — extend to fashion, groceries, electronics, and anything else people sell."
      }, {
        heading: "Starting in Ghana",
        body: "We go deep before we go wide. Accra first, then the rest of Ghana, then West Africa, then the continent."
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-dark-card p-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold", children: c.heading }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 body-text text-white/60 leading-relaxed", children: c.body })
      ] }, c.heading)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "How we build" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Three things we don't compromise on." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: values.map((v) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background p-7 ring-1 ring-border", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(v.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl font-bold", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 body-text text-foreground/65 leading-relaxed", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Careers" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Build the future of commerce in Ghana." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 body-text text-foreground/65", children: "We're not actively hiring right now, but we're always happy to hear from people who want to build this with us." }),
      /* @__PURE__ */ jsxs("a", { href: `mailto:${CONTACT_EMAIL}?subject=Careers at Thoth Technologies`, className: "mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold hover:bg-muted", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
        " Send us your CV"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-24 text-dark-foreground", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl rounded-3xl border border-white/10 bg-dark-card p-6 text-center sm:p-10 md:p-16", children: [
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
    ] }) }) })
  ] });
}
export {
  About as component
};
