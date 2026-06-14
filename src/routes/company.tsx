import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, Users, Target, Zap, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, SIGNUP_URL } from "@/lib/site";
import { motion } from "motion/react";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "ThothAI Technologies — Building the commerce layer for Africa on WhatsApp" },
      { name: "description", content: "ThothAI Technologies builds WhatsApp-native commerce infrastructure for Africa. Our first product, ThothFood, lets restaurants in Ghana take orders and payments directly on WhatsApp." },
      { property: "og:title", content: "ThothAI Technologies" },
      { property: "og:description", content: "Building the commerce layer for Africa on WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Company,
});

const products = [
  {
    name: "ThothFood",
    status: "live" as const,
    tagline: "Order food on WhatsApp.",
    desc: "WhatsApp-native food ordering for restaurants in Ghana. Real-time kitchen dashboard, MoMo & card payments, delivery zones, live order tracking — all inside the chat your customers already use.",
    href: "/",
    cta: "Order now",
    icon: "🍲",
  },
  {
    name: "ThothShop",
    status: "coming" as const,
    tagline: "Sell anything on WhatsApp.",
    desc: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as ThothFood, extended to every merchant category.",
    href: "/contact",
    cta: "Join waitlist",
    icon: "🛍️",
  },
];

const values = [
  {
    icon: Target,
    title: "Africa-first",
    desc: "We build for the infrastructure reality of Ghana and West Africa — mobile money, low-bandwidth, high WhatsApp penetration. Not an afterthought, the starting point.",
  },
  {
    icon: Zap,
    title: "Lowest friction possible",
    desc: "Every flow we ship must work with zero downloads, zero account creation, and zero new habits. If your customers can text, they can buy.",
  },
  {
    icon: Users,
    title: "Merchants win first",
    desc: "We take orders on WhatsApp because that's where merchants' customers already are. We grow when merchants grow — not before.",
  },
];

const openRoles = [
  { title: "Full-stack Engineer (Node.js / React)", type: "Full-time · Remote (Ghana)" },
  { title: "WhatsApp Flow Developer", type: "Contract · Remote" },
  { title: "Restaurant Partnerships Lead", type: "Full-time · Accra" },
];

function Company() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark py-24 text-dark-foreground md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 0%, oklch(0.745 0.165 60 / 0.4) 0%, transparent 70%), radial-gradient(40% 40% at 20% 100%, oklch(0.72 0.18 145 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container-page relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-[11px] font-extrabold text-primary-foreground">T</span>
            ThothAI Technologies
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            className="mx-auto mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
          >
            Building the commerce layer for Africa{" "}
            <span className="text-primary">on WhatsApp.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/65"
          >
            Two billion people use WhatsApp. In West Africa, it's already the operating system for daily life. We build the infrastructure that lets businesses sell — and people buy — without leaving it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.17 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              to="/contact"
              search={{ role: undefined }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.745_0.165_60/0.6)]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5"
            >
              See ThothFood
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our mission</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Make commerce as easy as texting a friend.
              </h2>
              <p className="mt-5 text-lg text-foreground/65">
                The gap between "I want that" and "I bought that" is still enormous for most people in Africa. Existing e-commerce platforms assume high bandwidth, credit cards, and smartphones powerful enough to run native apps.
              </p>
              <p className="mt-4 text-lg text-foreground/65">
                WhatsApp has none of those assumptions. 90%+ of smartphone users in Ghana already have it. We build the rails that make WhatsApp a real commerce channel — payments, fulfilment, tracking, operations — not just a chat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "WhatsApp users in Ghana", value: "20M+" },
                { label: "Average order time", value: "< 3 min" },
                { label: "Payment methods", value: "MoMo + Card" },
                { label: "App downloads required", value: "Zero" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                  <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1.5 text-sm text-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Product family</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              One platform. Every category.
            </h2>
            <p className="mt-4 text-white/60">
              We started with food because the ordering flow is universal and the pain is daily. ThothShop extends the same rails to every merchant type in Ghana.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-3xl border border-white/10 bg-dark-card p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{p.icon}</span>
                  {p.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
                      <Sparkles className="h-3 w-3" /> Coming soon
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-1 font-display text-lg font-semibold text-primary">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                <Link
                  to={p.href as "/"}
                  className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">How we build</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Three things we don't compromise on.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-background p-7 ring-1 ring-border">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-background py-24">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Careers</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Build the future of commerce in Ghana.
              </h2>
              <p className="mt-4 text-foreground/65">
                We're a small team moving fast. If you want to ship products that millions of people in West Africa use daily, we want to talk.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Careers at ThothAI`}
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold hover:bg-muted"
              >
                <Mail className="h-4 w-4" /> Send us your CV
              </a>
            </div>
            <div className="space-y-3">
              {openRoles.map((r) => (
                <a
                  key={r.title}
                  href={`mailto:${CONTACT_EMAIL}?subject=Application: ${r.title}`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.2)]"
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary">{r.title}</p>
                    <p className="mt-0.5 text-sm text-foreground/50">{r.type}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-dark py-24 text-dark-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-dark-card p-10 text-center md:p-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Partner, invest, or just say hi.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Whether you're a restaurant ready to go live, an investor curious about WhatsApp commerce in Africa, or a developer who wants to build with us — we're easy to reach.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                search={{ role: undefined }}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Contact us
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white/80 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
              <MapPin className="h-3.5 w-3.5" /> Accra, Ghana
            </div>
          </div>
        </div>
      </section>

      {/* THOTHFOOD CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-4xl">
              Ready to take orders on WhatsApp?
            </h2>
            <p className="mt-1 opacity-80">ThothFood is live now. Free to start.</p>
          </div>
          <a
            href={SIGNUP_URL}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-dark px-7 font-semibold text-dark-foreground hover:bg-dark-card"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
