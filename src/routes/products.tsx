import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { IOIIcon } from "@/components/site/ThothFoodLogo";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — Thoth Technologies" },
      { name: "description", content: "Thoth and ThothShop — one WhatsApp commerce platform, every category. Order food or sell anything, all inside the chat your customers already use." },
      { property: "og:title", content: "Our Products — Thoth Technologies" },
      { property: "og:description", content: "One platform. Every category. Thoth is live in Accra. ThothShop is coming soon." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Products,
});

const products = [
  {
    name: "Thoth",
    status: "live" as const,
    tagline: "Order food on WhatsApp.",
    desc: "WhatsApp-native food ordering for restaurants in Ghana. Customers browse the menu, pay with MoMo or card, and track their order — all inside the WhatsApp chat they already use. Restaurants manage it all from a real-time kitchen dashboard.",
    href: "/thothfood",
    cta: "Order now",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=720&h=360&fit=crop&q=80",
  },
  {
    name: "ThothShop",
    status: "coming" as const,
    tagline: "Sell anything on WhatsApp.",
    desc: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — same infrastructure as Thoth, extended to every merchant category.",
    href: "/thothshop",
    cta: "Join waitlist",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=720&h=360&fit=crop&q=80",
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
          <p className="mx-auto mt-5 max-w-xl body-text text-white/65">
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
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-card"
              >
                {/* Image banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                  {p.status !== "live" && <div className="absolute inset-0 bg-dark/55" />}
                  <div className="absolute right-4 top-4">
                    {p.status === "live" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" /> Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-dark/60 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-sm">
                        <Sparkles className="h-3 w-3" /> Coming soon
                      </span>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold">
                    {p.name}
                    {p.name === "Thoth" && <IOIIcon className="h-5 w-5 flex-shrink-0 text-primary" />}
                  </h2>
                  <p className="mt-1 font-display text-lg font-semibold text-primary">{p.tagline}</p>
                  <p className="mt-3 flex-1 body-text text-white/60 leading-relaxed">{p.desc}</p>
                  <Link
                    to={p.href as any}
                    className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
