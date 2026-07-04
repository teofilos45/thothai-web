import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Thoth" },
      { name: "description", content: "Thoth Terms of Service." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="bg-background py-20">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-foreground/50">Last updated: coming soon</p>

        <div className="prose prose-slate mt-10 max-w-none text-foreground/80">
          <p className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm font-medium text-foreground">
            Legal copy for Thoth's Terms of Service is being prepared and will be published here shortly.
            For any urgent legal queries, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Service Charge Disclosure</h2>
          <p>
            When you place an order through Thoth, a service charge may be applied at checkout.
            This charge is disclosed clearly before you confirm payment and covers platform operations,
            payment processing, and order support.
          </p>

          <h2 className="mt-8 font-display text-2xl font-bold">Full terms</h2>
          <p>Full terms of service will be published here. Check back soon.</p>
        </div>
      </div>
    </section>
  );
}
