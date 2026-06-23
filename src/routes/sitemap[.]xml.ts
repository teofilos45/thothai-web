import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/site";

const lastmod = new Date().toISOString().split("T")[0];

const entries = [
  { path: "/",                          priority: "1.0", changefreq: "weekly" },
  { path: "/about",                     priority: "0.7", changefreq: "monthly" },
  { path: "/products",                  priority: "0.8", changefreq: "monthly" },
  { path: "/thothfood",                 priority: "1.0", changefreq: "weekly" },
  { path: "/thothfood/how-it-works",    priority: "0.9", changefreq: "monthly" },
  { path: "/thothfood/for-restaurants", priority: "0.9", changefreq: "monthly" },
  { path: "/thothfood/pricing",         priority: "0.8", changefreq: "monthly" },
  { path: "/thothshop",                 priority: "0.5", changefreq: "monthly" },
  { path: "/contact",                   priority: "0.6", changefreq: "yearly" },
  { path: "/terms",                     priority: "0.3", changefreq: "yearly" },
  { path: "/privacy",                   priority: "0.3", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
