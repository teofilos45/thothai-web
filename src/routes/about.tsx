import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Users, Target, Zap, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ThothAI Technologies" },
      { name: "description", content: "Our mission is to make commerce as easy as texting a friend. We build WhatsApp-native commerce infrastructure for Africa, starting with Ghana." },
      { property: "og:title", content: "About ThothAI Technologies" },
      { property: "og:description", content: "Building the commerce layer for Africa on WhatsApp. Our mission, values, and the team behind ThothFood and ThothShop." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

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

function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-background pt-32 pb-12 md:pt-40">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Building the commerce layer for Africa, on WhatsApp.
          </h1>
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
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Careers</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Build the future of commerce in Ghana.
            </h2>
            <p className="mt-4 text-foreground/65">
              We're not actively hiring right now, but we're always happy to hear from people who want to build this with us.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Careers at ThothAI`}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Send us your CV
            </a>
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
    </>
  );
}
