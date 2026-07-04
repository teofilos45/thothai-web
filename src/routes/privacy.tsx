import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Thoth" },
      { name: "description", content: "Thoth Privacy Policy." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="bg-background py-20">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-foreground/50">Last updated: coming soon</p>

        <div className="prose prose-slate mt-10 max-w-none text-foreground/80">
          <p className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm font-medium text-foreground">
            Thoth's Privacy Policy is being prepared and will be published here shortly.
            For any privacy-related queries, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
          </p>

          <h2 className="mt-10 font-display text-2xl font-bold">Data we collect</h2>
          <p>Full privacy policy will be published here. Check back soon.</p>
        </div>
      </div>
    </section>
  );
}
