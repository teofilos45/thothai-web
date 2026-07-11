import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { CheckCircle2, ArrowRight, Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { R as Route, S as SIGNUP_URL, W as WHATSAPP_BUSINESS_URL, C as CONTACT_EMAIL, t as trackContactSubmit } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function Contact() {
  const {
    role
  } = Route.useSearch();
  const [intent, setIntent] = useState(role ?? "");
  const [sent, setSent] = useState(false);
  const honeypotRef = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    const form = e.currentTarget;
    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const message = form.elements.namedItem("message").value.trim();
    const intentLabel = {
      customer: "Customer",
      restaurant: "Restaurant owner",
      investor: "Investor",
      developer: "Developer",
      other: "Other"
    };
    const subject = encodeURIComponent(`ThothFood contact — ${intentLabel[intent] ?? "General inquiry"}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}
I am a: ${intentLabel[intent] ?? intent}

Message:
${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    trackContactSubmit();
    setSent(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-20 text-dark-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", children: "Contact" }),
      /* @__PURE__ */ jsxs("h1", { className: "mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl", children: [
        "Let's ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "chat." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl body-text text-white/65", children: "Hungry customer with a question? Restaurant ready to go live? Drop us a line." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-10", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-16 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-3xl font-extrabold", children: "Message sent!" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-foreground/65", children: "Your email client should have opened with your message pre-filled — just hit Send. We'll get back to you at the email address you provided." })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        intent === "restaurant" && /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: "Want to list your restaurant?" }),
            /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-foreground/60", children: "Sign up free and be live instantly — no call needed." })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: SIGNUP_URL, className: "inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground", children: [
            "Start free ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
          /* @__PURE__ */ jsx("input", { ref: honeypotRef, name: "website", type: "text", tabIndex: -1, "aria-hidden": "true", style: {
            position: "absolute",
            opacity: 0,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold", children: "I am a…" }),
            /* @__PURE__ */ jsxs("select", { required: true, name: "intent", value: intent, onChange: (e) => setIntent(e.target.value), className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20", children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select one" }),
              /* @__PURE__ */ jsx("option", { value: "customer", children: "Customer" }),
              /* @__PURE__ */ jsx("option", { value: "restaurant", children: "Restaurant owner" }),
              /* @__PURE__ */ jsx("option", { value: "other", children: "Something else" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold", children: "Name" }),
              /* @__PURE__ */ jsx("input", { required: true, name: "name", type: "text", placeholder: "Ama Boateng", className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold", children: "Email" }),
              /* @__PURE__ */ jsx("input", { required: true, name: "email", type: "email", placeholder: "you@example.com", className: "mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-semibold", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 6, placeholder: "Tell us what's on your mind…", className: "mt-2 w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.745_0.165_60/0.6)] sm:w-auto sm:justify-start", children: [
            /* @__PURE__ */ jsx("span", { children: "Send message" }),
            " ",
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-dark p-6 text-dark-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-success text-success-foreground", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: "Fastest: WhatsApp us" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-white/65", children: "Message the team directly — we reply faster here than anywhere else." }),
          /* @__PURE__ */ jsxs("a", { href: WHATSAPP_BUSINESS_URL, className: "mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
            " Open WhatsApp"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-secondary p-6", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: "Email" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-foreground/65", children: /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "hover:text-primary", children: CONTACT_EMAIL }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-secondary p-6", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-bold", children: "Based in" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-foreground/65", children: [
            "Accra, Ghana 🇬🇭",
            /* @__PURE__ */ jsx("br", {}),
            "Serving customers and restaurants across the country."
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
