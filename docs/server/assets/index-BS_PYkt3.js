import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShoppingBag, Wallet, Smartphone, MapPin, Bot, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { a as WhatsAppLink, b as WHATSAPP_ORDER_URL, c as trackStartFree, S as SIGNUP_URL } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const featuredRestaurants = [
  {
    name: "Severin Plus Restaurant, TF Hostel",
    cuisine: "Local Ghanaian",
    area: "Legon",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=120&h=120&fit=crop&q=80"
  },
  {
    name: "The Jollof Spot",
    cuisine: "West African",
    area: "Osu",
    image: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=120&h=120&fit=crop&q=80"
  },
  {
    name: "Burger Republic",
    cuisine: "Burgers & Grills",
    area: "Airport Hills",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=120&h=120&fit=crop&q=80"
  }
];
function Home() {
  const iframeRef = useRef(null);
  const [demoSlide, setDemoSlide] = useState(0);
  const [demoTotal, setDemoTotal] = useState(8);
  useEffect(() => {
    function onMessage(e) {
      if (e.data?.type === "thothai-demo-slide") {
        setDemoSlide(e.data.cur);
        setDemoTotal(e.data.total);
      } else if (e.data?.type === "thothai-demo-end") {
        setDemoSlide(-1);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
  function jumpToSlide(n) {
    iframeRef.current?.contentWindow?.postMessage({
      type: "thothai-demo-jump",
      n
    }, "*");
    setDemoSlide(n);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-dark text-dark-foreground", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-50", style: {
        background: "radial-gradient(60% 50% at 80% 0%, oklch(0.745 0.165 60 / 0.35) 0%, transparent 70%), radial-gradient(40% 40% at 10% 100%, oklch(0.72 0.18 145 / 0.18) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(motion.span, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
            "Live in Accra"
          ] }),
          /* @__PURE__ */ jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.05
          }, className: "mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl", children: [
            "Order food on",
            " ",
            /* @__PURE__ */ jsx("span", { className: "relative inline-block", children: /* @__PURE__ */ jsx("span", { className: "relative z-10 text-primary", children: "WhatsApp." }) }),
            /* @__PURE__ */ jsx("br", {}),
            "No app. No stress."
          ] }),
          /* @__PURE__ */ jsx(motion.p, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.1
          }, className: "mt-6 max-w-lg body-text text-white/70", children: "If you can text, you can eat. Browse menus, pay with MoMo, and track your delivery — all without leaving your favourite chat app." }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.15
          }, className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxs(WhatsAppLink, { className: "group inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.7)] transition-transform hover:-translate-y-0.5", children: [
              "Order Now",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/thothfood/how-it-works", className: "inline-flex h-14 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white/90 hover:bg-white/5", children: "See how it works" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-6 text-xs text-white/50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-success" }),
              " MoMo & Card"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
              " No download"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-info" }),
              " Live tracking"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95,
          y: 20
        }, animate: {
          opacity: 1,
          scale: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { style: {
            borderRadius: "36px",
            padding: "8px",
            background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
            boxShadow: "0 0 0 1px #333, 0 30px 60px rgba(0,0,0,0.55), inset 0 0 0 1px #444"
          }, children: /* @__PURE__ */ jsx("iframe", { ref: iframeRef, src: "/demo/thothfood-demo.html", title: "Thoth live demo", style: {
            width: "280px",
            height: "580px",
            border: "none",
            display: "block",
            borderRadius: "28px"
          }, loading: "lazy" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center justify-center gap-1.5", children: Array.from({
            length: demoTotal
          }, (_, i) => /* @__PURE__ */ jsx("button", { onClick: () => jumpToSlide(i), className: "rounded-full transition-all duration-300", style: {
            height: "5px",
            width: demoSlide === i ? "22px" : "5px",
            background: demoSlide === i ? "oklch(0.745 0.165 60)" : "rgba(255,255,255,0.2)"
          }, "aria-label": `Go to slide ${i + 1}` }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "How it works" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Three taps. One hot meal." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-foreground/60", children: 'No accounts. No downloads. No "please verify your email." Just open WhatsApp and start eating.' })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: [{
        step: "01",
        icon: MessageCircle,
        title: "Message a restaurant",
        desc: "Tap the WhatsApp link on your favourite spot. Say hi — that's it."
      }, {
        step: "02",
        icon: ShoppingBag,
        title: "Browse & add to cart",
        desc: "Scroll the full menu right in chat. Tap to add. Change your mind. Repeat."
      }, {
        step: "03",
        icon: Wallet,
        title: "Pay with MoMo",
        desc: "Checkout in seconds. Mobile Money or card. Order arrives at your door."
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_oklch(0.745_0.165_60/0.3)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-extrabold text-foreground/10", children: s.step })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl font-bold", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 body-text text-foreground/65", children: s.desc })
      ] }, s.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-background py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-semibold uppercase tracking-widest text-foreground/40", children: "Now serving in Accra" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3 overflow-x-auto pb-2", children: featuredRestaurants.map((r) => /* @__PURE__ */ jsxs(WhatsAppLink, { href: r.waUrl ?? WHATSAPP_ORDER_URL, className: "group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.2)]", children: [
        /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, className: "h-10 w-10 flex-shrink-0 rounded-xl object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold group-hover:text-primary", children: r.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-foreground/50", children: [
            r.cuisine,
            " · ",
            r.area
          ] })
        ] })
      ] }, r.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Why Thoth" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "Built for how you actually order." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/65", children: "You don't need another app cluttering your home screen. You need food. Fast. From the spots you already love." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: [{
        icon: Smartphone,
        title: "Zero downloads",
        desc: "If you have WhatsApp, you're already set up. That's the whole tech stack."
      }, {
        icon: Wallet,
        title: "MoMo + card checkout",
        desc: "Paystack-powered. MTN, Telecel, AirtelTigo — all covered."
      }, {
        icon: MapPin,
        title: "Delivery or pickup",
        desc: "Get it brought to you, or swing by. Your call, every order."
      }, {
        icon: MessageCircle,
        title: "Live order tracking",
        desc: "Status updates land right in your chat. No refresh-the-app dance."
      }, {
        icon: Bot,
        title: "AI support that gets it",
        desc: "Ask 'where's my food?' and get a real answer, not a canned reply."
      }, {
        icon: Shield,
        title: "Dispute protection",
        desc: "Something off? Our resolution system has your back. Always."
      }].map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-background p-6 ring-1 ring-border", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 body-text text-foreground/65", children: b.desc })
      ] }, b.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-24 text-dark-foreground", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark-card p-10 md:p-16", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Coming Soon"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl", children: [
            "Food was just",
            /* @__PURE__ */ jsx("br", {}),
            "the beginning."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 max-w-lg body-text text-white/65", children: [
            "Meet ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: "ThothShop" }),
            " — WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts. One chat. Anything you sell."
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/thothshop", className: "mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-dark hover:bg-primary hover:text-primary-foreground sm:w-auto", children: [
            "Join the waitlist ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 text-center", children: ["👗 Fashion", "💄 Beauty", "📱 Electronics", "🎨 Crafts"].map((t) => /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-white/10 bg-white/5 py-6 font-display text-base font-bold", children: t }, t)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-8", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4 rounded-3xl border border-border bg-dark px-8 py-6 text-dark-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-bold", children: "Own a restaurant? Get on Thoth free." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, onClick: trackStartFree, className: "inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground", children: [
          "Start free ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/thothfood/pricing", className: "text-sm font-medium text-white/60 hover:text-white", children: "compare plans" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mx-auto max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl", children: [
        "Start ordering today.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Just open WhatsApp." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-foreground/65", children: "Your favourite kitchens are one tap away. Lunch sorted in under a minute." }),
      /* @__PURE__ */ jsxs(WhatsAppLink, { className: "mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
        " Order on WhatsApp"
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
