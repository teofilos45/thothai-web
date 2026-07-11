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
function Terms() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-16 text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Legal" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-white/50", children: "Last updated: 4 July 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-page mx-auto max-w-3xl space-y-10", children: [
      /* @__PURE__ */ jsxs(Section, { title: "1. About These Terms", children: [
        /* @__PURE__ */ jsx("p", { children: 'These Terms of Service ("Terms") govern your use of Thoth, a WhatsApp-native food ordering platform operated by Thoth Technologies ("we", "us", "our"). Thoth connects restaurants in Ghana with customers who order food via WhatsApp.' }),
        /* @__PURE__ */ jsx("p", { children: "By creating a restaurant account, placing an order, or otherwise using any part of the Thoth platform, you agree to these Terms. If you do not agree, do not use the platform." }),
        /* @__PURE__ */ jsx("p", { children: "These Terms are governed by the laws of the Republic of Ghana, including the Electronic Transactions Act, 2008 (Act 772) and the Data Protection Act, 2012 (Act 843)." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "2. Who These Terms Apply To", children: [
        /* @__PURE__ */ jsx("p", { children: "These Terms apply to two types of users:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Restaurants" }),
            " — businesses that sign up to list their menu and receive orders through Thoth. Restaurants access the platform via the web dashboard at app.thothaigh.com."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Customers" }),
            " — individuals who browse menus and place orders via WhatsApp. Customers do not need to create an account."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Additional terms specific to each user type are set out in sections 5 and 6 below." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "3. The Thoth Platform", children: [
        /* @__PURE__ */ jsx("p", { children: "Thoth is a WhatsApp-native commerce platform. We enable restaurants to list their menus and receive orders via WhatsApp, and we enable customers to discover and order food from a variety of restaurants — all without leaving their WhatsApp chat." }),
        /* @__PURE__ */ jsx("p", { children: "Where delivery is offered, Thoth Technologies facilitates the logistics process, coordinating delivery of orders from the restaurant to the customer. However, delivery is subject to availability in the customer's area, and we reserve the right to determine delivery zones and timelines." }),
        /* @__PURE__ */ jsx("p", { children: "The restaurant is solely responsible for the preparation, quality, and accuracy of the food. Thoth Technologies is not liable for any issues arising from food quality or preparation." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "4. Platform Fees", children: [
        /* @__PURE__ */ jsx("p", { children: "Thoth operates on two pricing tiers:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Free plan" }),
            " — restaurants pay no monthly fee. A small platform service fee is added to each customer order at checkout. This fee is clearly disclosed to the customer before payment is confirmed."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Pro plan" }),
            " — restaurants pay a flat monthly subscription fee (GHS 199/month at the time of writing, subject to change with 30 days' notice). No per-order platform fee is charged to customers on this plan."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Thoth Technologies reserves the right to change pricing with 30 days' written notice to affected restaurants via email or in-app notification." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "5. Restaurant Terms", children: [
        /* @__PURE__ */ jsxs(Sub, { title: "5.1 Account Registration", children: [
          /* @__PURE__ */ jsx("p", { children: "To list your restaurant on Thoth you must create an account and complete the onboarding process, including connecting a WhatsApp number (your own number on the Pro plan, or the shared Thoth number on the Free plan), uploading your menu, and connecting a Paystack merchant account for payment processing." }),
          /* @__PURE__ */ jsx("p", { children: "You must provide accurate, current, and complete information. You are responsible for maintaining the security of your account credentials." })
        ] }),
        /* @__PURE__ */ jsx(Sub, { title: "5.2 Menu and Pricing", children: /* @__PURE__ */ jsx("p", { children: "You are responsible for ensuring your menu items, descriptions, photos, and prices are accurate and up to date. Prices listed on the platform must match the prices you charge for the same items in person. You may not use the platform to charge customers more than your in-person prices." }) }),
        /* @__PURE__ */ jsx(Sub, { title: "5.3 Order Fulfilment", children: /* @__PURE__ */ jsx("p", { children: "Once a customer places and pays for an order, you are obligated to fulfil that order promptly and accurately. If you are unable to fulfil an order (for example, due to item unavailability), you must notify the customer promptly via WhatsApp and issue a refund where applicable. Repeated failures to fulfil confirmed, paid orders may result in deprecation or reduction of trust score and ultimately suspension or termination of account." }) }),
        /* @__PURE__ */ jsxs(Sub, { title: "5.4 Payments and Payouts", children: [
          /* @__PURE__ */ jsx("p", { children: "Payments from customers are processed by Paystack, a licensed payment service provider. Paystack processing fees are borne by the customer and are not deducted from your earnings. Your earnings are calculated as follows:" }),
          /* @__PURE__ */ jsxs(Ul, { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Pro plan" }),
              " — your earnings equal the full order value. No platform fee or commission is deducted."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "font-semibold text-foreground", children: "Free plan" }),
              " — your earnings equal the order value minus the Thoth platform commission, which is added to the customer's checkout total and retained by Thoth Technologies."
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Earnings from paid online orders are credited to your Thoth merchant wallet on a T+1 basis — the next business day following order completion." }),
          /* @__PURE__ */ jsx("p", { children: "Withdrawals to your registered MoMo account are instant and require no approval or request — your balance is available to you immediately at any time." })
        ] }),
        /* @__PURE__ */ jsx(Sub, { title: "5.5 Cash on Delivery (COD)", children: /* @__PURE__ */ jsx("p", { children: "If you enable Cash on Delivery, customers may select this option at checkout. COD orders are not pre-paid. You accept the risk of non-payment on COD orders. Thoth Technologies is not liable for unpaid COD orders." }) }),
        /* @__PURE__ */ jsxs(Sub, { title: "5.6 Conduct and Prohibited Use", children: [
          /* @__PURE__ */ jsx("p", { children: "You agree not to:" }),
          /* @__PURE__ */ jsxs(Ul, { children: [
            /* @__PURE__ */ jsx("li", { children: "List items that are illegal to sell in Ghana" }),
            /* @__PURE__ */ jsx("li", { children: "Provide false or misleading information about your food, prices, or business" }),
            /* @__PURE__ */ jsx("li", { children: "Use the platform to harass, threaten, or defraud customers" }),
            /* @__PURE__ */ jsx("li", { children: "Attempt to circumvent the platform by directing customers to pay you directly outside of the Thoth payment flow" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "6. Customer Terms", children: [
        /* @__PURE__ */ jsxs(Sub, { title: "6.1 Ordering", children: [
          /* @__PURE__ */ jsx("p", { children: "When you place an order via WhatsApp, you are entering into a contract with the restaurant, not with Thoth Technologies. We facilitate the order and payment but are not a party to the food purchase itself." }),
          /* @__PURE__ */ jsx("p", { children: "By confirming an order and completing payment, you agree to pay the total amount shown, including any applicable platform service fee (on Free-plan restaurants) and Paystack processing fee." })
        ] }),
        /* @__PURE__ */ jsx(Sub, { title: "6.2 Refunds and Cancellations", children: /* @__PURE__ */ jsx("p", { children: "Once an order is confirmed and payment is processed, cancellations are at the restaurant's discretion. If a restaurant is unable to fulfil your order, you are entitled to a full refund of the amount paid. Refunds are processed via Paystack and may take 3–5 business days to reflect in your account or MoMo wallet." }) }),
        /* @__PURE__ */ jsx(Sub, { title: "6.3 Disputes", children: /* @__PURE__ */ jsx("p", { children: "If you have an issue with an order (wrong items, missing items, food quality), please raise a dispute through the Thoth platform within 24 hours of receiving your order. We will mediate between you and the restaurant in good faith. Our dispute resolution decisions are final within the platform but do not affect your statutory rights under Ghanaian consumer protection law." }) })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "7. Intellectual Property", children: /* @__PURE__ */ jsx("p", { children: "Thoth, the Thoth logo, and all platform software and content are the property of Thoth Technologies. Restaurants retain ownership of their own menu content (photos, descriptions, prices) but grant Thoth Technologies a licence to display that content on the platform for the purpose of operating the service." }) }),
      /* @__PURE__ */ jsxs(Section, { title: "8. Limitation of Liability", children: [
        /* @__PURE__ */ jsx("p", { children: "To the fullest extent permitted by Ghanaian law, Thoth Technologies is not liable for:" }),
        /* @__PURE__ */ jsxs(Ul, { children: [
          /* @__PURE__ */ jsx("li", { children: "The quality, safety, or fitness of any food ordered through the platform" }),
          /* @__PURE__ */ jsx("li", { children: "Delays, errors, or failures in food preparation or delivery" }),
          /* @__PURE__ */ jsx("li", { children: "Loss of revenue or profits arising from platform downtime" }),
          /* @__PURE__ */ jsx("li", { children: "Any indirect or consequential loss arising from use of the platform" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Our total liability to any user for any claim arising from use of the platform shall not exceed the total fees paid by that user to Thoth Technologies in the 3 months preceding the claim." })
      ] }),
      /* @__PURE__ */ jsxs(Section, { title: "9. Termination", children: [
        /* @__PURE__ */ jsx("p", { children: "We may suspend or terminate any restaurant account at any time if we reasonably believe the account is being used in breach of these Terms, or if the restaurant repeatedly fails to fulfil paid orders. We will provide notice where possible." }),
        /* @__PURE__ */ jsx("p", { children: "Restaurants may close their account at any time. Any outstanding wallet balance is available for instant withdrawal before or at the time of account closure, minus any amounts owed to Thoth Technologies." })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "10. Changes to These Terms", children: /* @__PURE__ */ jsx("p", { children: "We may update these Terms from time to time. We will notify restaurants of material changes via email or in-app notification at least 14 days before they take effect. Continued use of the platform after that date constitutes acceptance of the updated Terms." }) }),
      /* @__PURE__ */ jsx(Section, { title: "11. Contact", children: /* @__PURE__ */ jsxs("p", { children: [
        "For any questions about these Terms, contact us at",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT_EMAIL}`, className: "text-primary hover:underline", children: CONTACT_EMAIL }),
        "."
      ] }) })
    ] }) })
  ] });
}
export {
  Terms as component
};
