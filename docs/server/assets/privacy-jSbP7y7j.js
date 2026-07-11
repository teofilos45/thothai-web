import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as CONTACT_EMAIL } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { className: "border-t border-border pt-10 first:border-none first:pt-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold tracking-tight text-foreground md:text-2xl", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/70", children })
  ] });
}
function Sub({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-semibold text-foreground md:text-lg", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/70", children })
  ] });
}
function Ul({
  children
}) {
  return /* @__PURE__ */ jsx("ul", { className: "list-disc space-y-2 pl-5", children });
}
function Privacy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-16 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Legal" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-white/50", children: "Last updated: 4 July 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-page mx-auto max-w-3xl space-y-10", children: [
      /* @__PURE__ */ jsxs(Section, { title: "1. Who We Are", children: [
        /* @__PURE__ */ jsx("p", { children: `This Privacy Policy explains how Thoth Technologies ("we", "us", "our") collects, uses, and protects personal information in connection with Thoth, our WhatsApp-native food ordering platform. We are committed to protecting your privacy in accordance with Ghana's Data Protection Act, 2012 (Act 843).` }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For privacy-related questions, contact us at",
          " ",
          /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "text-primary hover:underline", children: CONTACT_EMAIL }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "2. Information We Collect", children: [
        /* @__PURE__ */ jsx(Sub, { title: "2.1 From Restaurants (Dashboard Users)", children: /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Account information" }),
            " — name, business name, email address, phone number, and WhatsApp number"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Business information" }),
            " — restaurant profile, address, delivery zones, menu items and prices, operating hours"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Payment information" }),
            " — Paystack merchant account details, MoMo wallet number for payouts. We do not store card or MoMo PIN details — these are handled directly by Paystack."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Operational data" }),
            " — order history, revenue figures, staff accounts created, promotions run"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Communications" }),
            " — messages sent to our support team"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Sub, { title: "2.2 From Customers (WhatsApp Ordering)", children: /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "WhatsApp number" }),
            " — used to identify your session and communicate order updates"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Order information" }),
            " — items ordered, delivery address, order notes, order history"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Payment information" }),
            " — payment method selected (MoMo or card), transaction reference. Actual payment details are processed by Paystack and not stored by us."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Location data" }),
            " — delivery address as provided by you during ordering"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Sub, { title: "2.3 Automatically Collected Data", children: /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Usage data" }),
            " — pages visited on this website, time spent, browser type, device type, IP address"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Analytics" }),
            " — aggregate usage patterns collected via privacy-respecting analytics tools"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "3. How We Use Your Information", children: [
        /* @__PURE__ */ jsx("p", { children: "We use the information we collect to:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsx("li", { children: "Operate and improve the Thoth platform" }),
          /* @__PURE__ */ jsx("li", { children: "Process and fulfil food orders" }),
          /* @__PURE__ */ jsx("li", { children: "Process payments and manage merchant payouts via Paystack" }),
          /* @__PURE__ */ jsx("li", { children: "Send order status updates via WhatsApp" }),
          /* @__PURE__ */ jsx("li", { children: "Manage restaurant accounts, menus, and staff access" }),
          /* @__PURE__ */ jsx("li", { children: "Resolve disputes between restaurants and customers" }),
          /* @__PURE__ */ jsx("li", { children: "Send service communications (billing, policy updates, platform announcements)" }),
          /* @__PURE__ */ jsx("li", { children: "Comply with legal obligations under Ghanaian law" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We do not sell your personal information to third parties. We do not use your data for targeted advertising." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "4. WhatsApp and Meta", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Thoth uses the WhatsApp Business API (provided by Meta Platforms, Inc.) to send and receive messages. When you interact with Thoth via WhatsApp, your messages pass through Meta's infrastructure. Meta's own privacy policy applies to data processed by WhatsApp. We encourage you to review",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.whatsapp.com/legal/privacy-policy", className: "text-primary hover:underline", target: "_blank", rel: "noopener noreferrer", children: "WhatsApp's Privacy Policy" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "We use WhatsApp only to fulfil your orders and communicate about them. We do not use your WhatsApp number for marketing without your explicit consent." })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "5. Paystack", children: /* @__PURE__ */ jsxs("p", { children: [
        "Payments on Thoth are processed by Paystack (a Stripe company), a licensed payment service provider operating in Ghana. When you pay for an order, your payment details are entered on Paystack's secure payment page and are governed by",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://paystack.com/gh/privacy", className: "text-primary hover:underline", target: "_blank", rel: "noopener noreferrer", children: "Paystack's Privacy Policy" }),
        ". We receive only a transaction reference and confirmation — not your card or MoMo details."
      ] }) }),
      /* @__PURE__ */ jsxs(Section, { title: "6. Data Sharing", children: [
        /* @__PURE__ */ jsx("p", { children: "We share personal information only in the following circumstances:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "With the restaurant you order from" }),
            " — your WhatsApp number, delivery address, order details, and order notes are shared with the restaurant to fulfil your order."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "With Paystack" }),
            " — for payment processing and merchant payouts."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "With service providers" }),
            " — we use third-party services to operate the platform (cloud hosting, database, image storage, error monitoring). These providers process data only on our instructions and under confidentiality obligations."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "For legal compliance" }),
            " — if required by law, court order, or regulatory authority in Ghana."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "7. Data Retention", children: [
        /* @__PURE__ */ jsx("p", { children: "We retain personal information for as long as necessary to provide the service and comply with legal obligations:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsx("li", { children: "Restaurant account data — retained while the account is active and for 2 years after closure" }),
          /* @__PURE__ */ jsx("li", { children: "Order records — retained for 5 years for accounting and dispute resolution purposes" }),
          /* @__PURE__ */ jsx("li", { children: "Customer WhatsApp sessions — session data is deleted 30 days after the last interaction" }),
          /* @__PURE__ */ jsx("li", { children: "Payment records — retained for 7 years as required by Ghanaian financial regulations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "8. Your Rights", children: [
        /* @__PURE__ */ jsx("p", { children: "Under Ghana's Data Protection Act 2012, you have the right to:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Access" }),
            " — request a copy of the personal information we hold about you"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Correction" }),
            " — request that inaccurate information be corrected"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Deletion" }),
            " — request deletion of your personal data, subject to legal retention requirements"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Objection" }),
            " — object to certain uses of your data"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To exercise any of these rights, contact us at",
          " ",
          /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "text-primary hover:underline", children: CONTACT_EMAIL }),
          ". We will respond within 21 days."
        ] })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "9. Security", children: /* @__PURE__ */ jsx("p", { children: "We implement technical and organisational measures to protect your personal information, including encrypted data transmission (HTTPS/TLS), access controls, and secure cloud infrastructure. No system is completely secure — if you believe your account has been compromised, contact us immediately." }) }),
      /* @__PURE__ */ jsx(Section, { title: "10. Children's Privacy", children: /* @__PURE__ */ jsx("p", { children: "Thoth is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, contact us and we will delete it promptly." }) }),
      /* @__PURE__ */ jsx(Section, { title: "11. Changes to This Policy", children: /* @__PURE__ */ jsx("p", { children: 'We may update this Privacy Policy from time to time. We will notify users of material changes via email (for restaurants) or via a notice on this page. The "Last updated" date at the top of this page reflects the most recent revision.' }) }),
      /* @__PURE__ */ jsx(Section, { title: "12. Contact", children: /* @__PURE__ */ jsxs("p", { children: [
        "For any privacy questions or to exercise your rights under the Data Protection Act 2012, contact us at",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "text-primary hover:underline", children: CONTACT_EMAIL }),
        "."
      ] }) })
    ] }) })
  ] });
}
export {
  Privacy as component
};
