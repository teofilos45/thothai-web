import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — ThothAI Technologies" },
      { name: "description", content: "ThothFood and ThothShop — one WhatsApp commerce platform, every category. Order food or sell anything, all inside the chat your customers already use." },
      { property: "og:title", content: "Our Products — ThothAI Technologies" },
      { property: "og:description", content: "One platform. Every category. ThothFood is live in Accra. ThothShop is coming soon." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Products,
});

const products = [
  {
    name: "ThothFood",
    status: "live" as const,
    tagline: "Order food on WhatsApp.",
    desc: "WhatsApp-native food ordering for restaurants in Ghana. Real-time kitchen dashboard, MoMo & card payments, delivery zones, live order tracking — all inside the chat your customers already use.",
    href: "/thothfood",
    cta: "Order now",
    icon: "🍲",
  },
  {
    name: "ThothShop",
    status: "coming" as const,
    tagline: "Sell anything on WhatsApp.",
    desc: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as ThothFood, extended to every merchant category.",
    href: "/thothshop",
    cta: "Join waitlist",
    icon: "🛍️",
  },
];

function Products() {
  return (
    <>
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            One platform. <span className="text-primary">Every category.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
            We started with food because the ordering flow is universal and the pain is daily. ThothShop extends the same rails to every merchant type in Ghana.
          </p>
        </div>
      </section>

      <section className="bg-dark pb-24 text-dark-foreground">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
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
                <h2 className="mt-5 font-display text-2xl font-extrabold">{p.name}</h2>
                <p className="mt-1 font-display text-lg font-semibold text-primary">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                <Link
                  to={p.href as any}
                  className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
