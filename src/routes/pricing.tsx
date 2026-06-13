import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SIGNUP_URL } from "@/lib/site";
import { trackStartFree } from "@/lib/pixel";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ThothFood" },
      { name: "description", content: "Start free. Upgrade when you're ready. ThothFood's Free plan costs nothing — get on WhatsApp and start taking orders today." },
      { property: "og:title", content: "Pricing — ThothFood" },
      { property: "og:description", content: "Start free. Upgrade when you're ready. No upfront cost to get your restaurant on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: Pricing,
});

const freeFeatures = [
  "Dedicated WhatsApp ordering line",
  "Real-time kitchen dashboard",
  "Menu management & in-chat catalogue",
  "MoMo & card payments via Paystack",
  "Cash on delivery support",
  "Delivery zones & rider management",
  "Staff roles & permissions",
  "Promotions engine",
  "Merchant wallet & withdrawals",
  "Dispute resolution",
  "Onboarding & ongoing support",
];

const proExtras = [
  "Your customers pay nothing extra at checkout",
  "Use your existing WhatsApp number",
  "Point-of-sale (POS) integration",
  "Customer CRM & order history",
  "Priority support",
];

const comparisonRows = [
  { feature: "WhatsApp ordering line", free: true, pro: true },
  { feature: "Kitchen dashboard", free: true, pro: true },
  { feature: "Menu management", free: true, pro: true },
  { feature: "MoMo & card payments", free: true, pro: true },
  { feature: "Cash on delivery", free: true, pro: true },
  { feature: "Delivery zones", free: true, pro: true },
  { feature: "Promotions & analytics", free: true, pro: true },
  { feature: "Merchant wallet & withdrawals", free: true, pro: true },
  { feature: "Dispute resolution", free: true, pro: true },
  { feature: "Zero checkout surcharge for customers", free: false, pro: true },
  { feature: "Keep your existing WhatsApp number", free: false, pro: true },
  { feature: "POS integration", free: false, pro: true },
  { feature: "Customer CRM", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
];

const faqs = [
  {
    q: "What's included in the Free plan?",
    a: "Everything you need to run a full WhatsApp ordering operation: a dedicated ordering line, kitchen dashboard, menu management, MoMo & card payments, delivery zones, staff roles, promotions, merchant wallet, and onboarding support. There's no time limit — it's free as long as you're on the platform.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most restaurants are live and taking real orders within a week. Our team walks you through all 8 steps — from setting up your profile and uploading your menu to connecting payments and going live.",
  },
  {
    q: "How and when do I get paid?",
    a: "Your earnings land in your ThothFood merchant wallet after each order. You can request a withdrawal to your MoMo account at any time, on demand — no waiting for weekly settlements.",
  },
  {
    q: "Can I use my existing WhatsApp number?",
    a: "Yes — that's a Pro feature. On the Free plan, we provision you a dedicated ordering line so you can be live immediately. Pro lets you port your existing WhatsApp Business number, so your current customer conversations stay right where they are.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Start on Free and upgrade to Pro whenever it makes sense for your business. Talk to us and we'll get it sorted with zero downtime.",
  },
];

function Tick() {
  return (
    <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-success text-success-foreground">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Pricing
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Pricing that starts at <span className="text-primary">zero.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
            Get your restaurant on WhatsApp for free. Upgrade to Pro when your kitchen is ready to grow.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">

            {/* Free card */}
            <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
              <div className="p-8 md:p-10">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground/50">Free</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold tracking-tight">₵0</span>
                  <span className="mb-1 text-sm text-foreground/50">, forever</span>
                </div>
                <p className="mt-3 text-foreground/65">
                  Everything you need to take orders on WhatsApp.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-background font-semibold text-foreground transition-colors hover:bg-muted"
                  onClick={trackStartFree}
                >
                  Start free <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="border-t border-border px-8 py-6 md:px-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40">What's included</p>
                <ul className="mt-4 space-y-3">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Tick />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro card */}
            <div className="flex flex-col overflow-hidden rounded-3xl bg-dark text-dark-foreground shadow-[0_30px_80px_-30px_oklch(0.18_0.005_50/0.35)]">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-primary">Pro</p>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    For growing kitchens
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-display text-4xl font-extrabold tracking-tight">Talk to us</span>
                </div>
                <p className="mt-3 text-white/65">
                  Everything in Free, plus the tools to take your kitchen further.
                </p>
                <Link
                  to="/contact"
                  search={{ role: "restaurant" }}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5"
                >
                  Talk to us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="border-t border-white/10 px-8 py-6 md:px-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Everything in Free, plus:</p>
                <ul className="mt-4 space-y-3">
                  {proExtras.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Tick />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">Free vs Pro</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-4 text-left font-display font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-display font-bold">Free</th>
                  <th className="px-6 py-4 text-center font-display font-bold text-primary">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-secondary/40"}>
                    <td className="px-6 py-3.5 text-foreground/80">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      {row.free ? (
                        <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-success text-success-foreground mx-auto">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      ) : (
                        <Minus className="h-4 w-4 mx-auto text-foreground/25" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.pro ? (
                        <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-success text-success-foreground mx-auto">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      ) : (
                        <Minus className="h-4 w-4 mx-auto text-foreground/25" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Common questions</h2>
            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-background px-6"
                >
                  <AccordionTrigger className="py-5 font-display text-base font-bold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-foreground/65">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to take your first WhatsApp order?
            </h2>
            <p className="mx-auto mt-3 max-w-lg opacity-80">
              Start free today. No upfront cost. Live in days.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-dark px-8 font-semibold text-dark-foreground hover:bg-dark-card"
                onClick={trackStartFree}
              >
                Start free <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                search={{ role: "restaurant" }}
                className="inline-flex h-14 items-center rounded-full border border-primary-foreground/30 px-6 font-semibold opacity-80 hover:opacity-100"
              >
                compare plans with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
