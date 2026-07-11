# ThothFood Marketing Site — Infrastructure Plan v2
### Planning document · execution by Claude Code · June 2026

---

## Locked decisions

Customer-first site. Connects directly to the live app at **https://app.thothaigh.com**. Pricing is **plan-based**: Free (₵0, restaurant pays nothing) and Pro (monthly SaaS — price not yet agreed, shown as **"Talk to us"**). **No fee or commission language anywhere in marketing copy** — the service charge is disclosed only at WhatsApp checkout (already built) and in the Terms of Service. **No restaurant directory yet** (too few restaurants onboarded) — a hand-curated "Now serving in Accra" strip on the homepage instead; the directory becomes a later phase gated on roughly 15–20 live restaurants. WhatsApp ordering number stays a **placeholder constant** until Meta verifies the central number. A **ThothAI Technologies corporate one-pager** is a separate, later mini-project — it must not block this work.

These mirror how the incumbents do it: Chowdeck's marketing site is audience-segmented (Customers / Vendors / Company) with no public directory, pushing straight into the ordering channel; Toast pairs a free entry tier with a quote-based top tier ("get a demo"). ThothFood is a hybrid of both models, and the site reflects that.

## Positioning

Lead story (customers): *order food on WhatsApp — no app, no account, no stress.* Supporting story (restaurants): *get on ThothFood free; go Pro for zero customer fees, POS, CRM, and your own WhatsApp number.* Keep the existing brand voice ("Hungry? Just WhatsApp it.") — it already fits.

## Information architecture

| Route | Audience | Purpose |
|---|---|---|
| `/` | Customers | Hero + WhatsApp mock, how-it-works, curated "Now serving" strip, why-ThothFood, ThothShop teaser, merchant banner, final CTA |
| `/how-it-works` | Customers | 7-step ordering walkthrough (exists, minor updates) |
| `/for-restaurants` | Merchants | Merchant pitch (moved from `/restaurants`), CTA → app onboarding |
| `/restaurants` | — | 301-style redirect to `/for-restaurants` for now; reserved for the future customer directory |
| `/pricing` | Merchants | Free vs Pro cards + value FAQ (full rewrite) |
| `/contact` | Both | Form (backend wiring in Phase 4) + WhatsApp line |
| `/terms`, `/privacy` | Both | Phase 4 — includes service-charge disclosure (legal, not marketing) |
| `/faq` | Both | Phase 4 — value-focused, FAQPage schema |

Header nav: **How it works · For Restaurants · Pricing · Contact**, with two right-side CTAs: **Order Now** (WhatsApp placeholder) and **Restaurant Login** (→ app). Footer "Product" column gains **Start free** and **Restaurant Login**.

## Key copy rules (apply everywhere)

Never use the words *commission*, *markup*, *service fee/charge*, or any fee amount in marketing copy. Never deny fees either (no "0% commission" claims — denying introduces the topic). Pricing communicates value received, not money flows. The Free plan card simply says ₵0 and lists what's included. The Pro card sells outcomes: *your customers pay nothing extra*, *keep your existing WhatsApp number*, *POS*, *CRM*. FAQ questions are value questions: what's included, how long onboarding takes, how payouts work, can I upgrade, can I use my own number. The one mandatory disclosure of the customer service charge lives in `/terms` (Phase 4) and in the merchant onboarding agreement inside the app — never on marketing pages.

---

# Execution brief for Claude Code

Repo: `build-thrive-main` (TanStack Start + Vite + Tailwind + shadcn). Routes are file-based under `src/routes/`; **`src/routeTree.gen.ts` is auto-generated — never hand-edit it**, it regenerates on `vite dev`/`build`. Site components live in `src/components/site/` (Header, Footer, WhatsAppMock). Keep the existing design system exactly: `font-display`, oklch token shadows, rounded-full pill CTAs, `container-page`, dark/secondary section rhythm, motion/react animations. New sections must be visually indistinguishable in style from existing ones.

## Phase 0 — Shared constants (do first, tiny)

Create `src/lib/site.ts` exporting a single config object: `APP_URL` (from `import.meta.env.VITE_APP_URL`, fallback `https://app.thothaigh.com`), `LOGIN_URL` (`${APP_URL}/login`), `SIGNUP_URL` (`${APP_URL}/onboarding` — verify the app's actual signup/onboarding entry route in the app repo and use that), `WHATSAPP_ORDER_URL` (placeholder `https://wa.me/233000000000` with a `// TODO: replace after Meta central-number verification` comment), `CONTACT_EMAIL`, and social URLs. Add `.env.example` with `VITE_APP_URL`. Then replace every hardcoded `wa.me/233000000000` (Header ×2, index ×2, how-it-works ×1) and all app-bound links with these constants. This makes the eventual real number a one-line change.

## Phase 1 — Truth & rerouting

**1a. Move the merchant page.** Rename `src/routes/restaurants.tsx` → `src/routes/for-restaurants.tsx`; update its `createFileRoute("/restaurants")` to `"/for-restaurants"`. Content changes within it: hero headline reframed around zero-cost start (e.g. "Put your restaurant on WhatsApp. **Free.**"); sub-copy adds "List your menu at your prices — pay nothing to get started." Primary CTA becomes **Start free** → `SIGNUP_URL` (replacing the `/contact` link); secondary stays "See pricing." The features grid, dashboard mock, 8-step onboarding strip, and trust section are accurate to the product — keep them. Bottom CTA: "Start free" → `SIGNUP_URL`, with "or talk to us" → `/contact` as the quiet secondary.

**1b. Reserve `/restaurants`.** Create a new minimal `src/routes/restaurants.tsx` whose route options use `beforeLoad` to `throw redirect({ to: "/for-restaurants" })` (TanStack Router's `redirect` from `@tanstack/react-router`). One file, no component markup needed beyond a null component.

**1c. Rewrite `/pricing` entirely.** Replace the "tailored commission" page. Structure: dark hero ("Pricing that starts at zero." or similar — keep brand voice); then a two-card plan section on `bg-secondary`:
- **Free — ₵0, forever.** "Everything you need to take orders on WhatsApp." Included list (reuse the existing `included` array, updated): dedicated WhatsApp ordering line, real-time kitchen dashboard, menu management + in-chat catalogue, MoMo & card payments, cash on delivery, delivery zones, staff roles, promotions, merchant wallet & withdrawals, dispute resolution, onboarding & support. CTA: **Start free** → `SIGNUP_URL`.
- **Pro — Talk to us** (visually the featured card — dark panel like the current "Tailored plan" block). "Everything in Free, plus:" your customers pay nothing extra at checkout · use your existing WhatsApp number · POS · CRM · priority support. CTA: **Talk to us** → `/contact`. Badge: "For growing kitchens" or similar.
Below: a compact Free-vs-Pro comparison table (rows = the differentiators above), then a 4–5 item value FAQ (accordion using the existing shadcn `accordion.tsx`): What's included in Free? · How long does onboarding take? · How and when do I get paid? · Can I use my existing WhatsApp number? (answer: that's a Pro feature; Free includes a dedicated line we provision) · Can I switch plans later? **Constraint: zero fee/commission language anywhere on this page** (see copy rules).

**1d. Navigation & footer.** In `Header.tsx`: `links` array becomes How it works / For Restaurants (`/for-restaurants`) / Pricing / Contact. Right side becomes two CTAs: ghost/outline **Restaurant Login** → `LOGIN_URL` and primary pill **Order Now** → `WHATSAPP_ORDER_URL`; replicate both in the mobile menu. In `Footer.tsx`: update the For Restaurants link to `/for-restaurants`; add "Start free" (→ `SIGNUP_URL`) and "Restaurant Login" (→ `LOGIN_URL`) to the Product column (or a new "For Restaurants" column); keep the ThothShop teaser block as is.

**1e. Homepage adjustments (`src/routes/index.tsx`).** Keep hero, steps, why-grid, ThothShop teaser, final CTA. Add two sections: (1) **"Now serving in Accra"** — a slim curated strip between how-it-works and why-ThothFood: section eyebrow + a responsive row of restaurant name cards driven by a hardcoded array in `src/data/featured-restaurants.ts` (name, cuisine, area, optional emoji/logo path, optional per-restaurant wa.me link). Ship with the real onboarded restaurants (placeholder entries clearly marked TODO); design must look intentional with as few as 3 entries — avoid an empty-grid look (horizontal scroll row or compact pill cards, not a sparse 3×3 grid). (2) **Merchant banner** before the final CTA: one-line "Own a restaurant? Get on ThothFood free." with **Start free** → `SIGNUP_URL` and a quiet "compare plans" link — styled like the existing dark rounded-banner pattern in the footer's ThothShop block.

**1f. How-it-works touch-ups.** In the payment step, reflect both options: copy mentions MoMo/card *and* cash on delivery ("Pay with MoMo, card, or cash when it arrives"). Update the bottom section's "I run a restaurant" link target from `/restaurants` to `/for-restaurants`. No other changes — the 7-step walkthrough is accurate.

**1g. Cleanup.** Remove Lovable artifacts: `.lovable/`, `src/lib/lovable-error-reporting` import/usage in `__root.tsx` (replace the error boundary's reporter call with a no-op or plain `console.error`), and any lovable deps in `package.json` if present. Grep-verify zero remaining instances of: `commission`, `tailored`, `wa.me/233000000000` (outside `site.ts`), and `/restaurants"` links pointing at the old merchant page.

**Phase 1 acceptance:** `npm run build` passes; routeTree regenerated cleanly; every CTA resolves to site.ts constants; pricing page contains no fee language; `/restaurants` redirects.

## Phase 2 — Funnel polish (after Phase 1 ships)

Contact page: split the form intent (`I am a…` select already exists) so the restaurant path nudges to **Start free** above the form; add the WhatsApp business line as the preferred contact channel. Add a `/pricing` link check: Pro "Talk to us" CTA pre-selects "Restaurant owner" on the contact form via search param. OG/meta sweep: ensure every route's `head()` reflects the new positioning; add a real OG image asset slot (`public/og/`).

## Phase 3 — Restaurant directory (deferred — trigger: ~15–20 live restaurants)

Backend (app repo): public, unauthenticated, cached (Redis, ~60s) `GET /api/public/restaurants` returning only `name, slug, cuisine_type, location, logo_url, whatsapp_number, is_kitchen_open` for active + onboarded restaurants. Site: `/restaurants` redirect is replaced by an SSR-fetched directory page (card grid, cuisine/area filters, "Order on WhatsApp" deep links, open/closed badges, graceful empty state); homepage curated strip switches from the hardcoded array to the top of this feed. Later: `/r/{slug}` per-restaurant pages with Restaurant structured data.

## Phase 4 — Growth infrastructure

`sitemap.xml` is already scaffolded as a route — populate it properly; add `robots.txt` rules; Organization/WebSite JSON-LD in `__root.tsx`; FAQPage schema on pricing FAQ; `/terms` + `/privacy` pages (terms carry the service-charge disclosure — legal copy, supplied by owner); analytics (Plausible or GA4) + **Meta Pixel** with three conversion events: `wa_click` (fire from a single shared `WhatsAppLink` component wrapping every wa.me anchor), `start_free_click`, `contact_submit`; contact form backend — `POST /api/public/contact` on the existing Railway backend, forwarding submissions to the ops WhatsApp number via the platform's own WhatsApp send service, with rate limiting + honeypot.

## Phase 5 — Later

ThothAI Technologies corporate one-pager at `thothaigh.com` root (mission, product family: ThothFood live / ThothShop coming, contact, careers) reusing this design system; testimonials/case studies once real merchants consent; blog for local SEO; ThothShop waitlist capture (currently the teaser links to /contact — fine for now).

## Open items (owner)

Confirm the app's exact signup/onboarding entry route for `SIGNUP_URL`; supply the real featured-restaurant list for the homepage strip; real social handles; decide Plausible vs GA4; later — the verified central WhatsApp number, the Pro price (when agreed), terms/privacy legal copy, and whether ThothFood eventually gets its own domain (`thothfood.com`) vs `food.thothaigh.com`.

---

## Phase 5a — How It Works rewrite + Hero demo swap

### Context
The current `how-it-works.tsx` shows a simplified 7-step flow with inaccurate WhatsApp mock messages. The actual flow has 11 steps and uses WhatsApp's native Product Catalogue — not text-based menu browsing. The hero in `index.tsx` currently renders `<WhatsAppMock />` in the right column. Both must be updated.

An HTML demo file exists at the project root (to be committed): `public/demo/thothfood-demo.html`. This is a fully self-contained animated demo of the real WhatsApp ordering flow. It replaces the `<WhatsAppMock />` in the hero.

---

### Task 1 — Copy the demo HTML into the public directory

Copy the uploaded demo HTML file into `public/demo/thothfood-demo.html`. This makes it statically servable by Vite at `/demo/thothfood-demo.html`.

---

### Task 2 — Hero: replace `<WhatsAppMock />` with the demo iframe

In `src/routes/index.tsx`, find the `<motion.div>` on the right column of the hero that currently renders `<WhatsAppMock />`. Replace `<WhatsAppMock />` with an `<iframe>` embedding the demo:

```tsx
<iframe
  src="/demo/thothfood-demo.html"
  title="ThothFood ordering demo"
  className="h-[700px] w-full max-w-[390px] rounded-[2.5rem] border-0 shadow-2xl mx-auto block"
  style={{ aspectRatio: '9/16', maxHeight: '700px' }}
  loading="lazy"
  scrolling="no"
/>
```

- The iframe must be wrapped in the existing `<motion.div>` (keep the fade-in animation and the glow backdrop div — don't remove those).
- Remove the `import { WhatsAppMock }` line from the top of `index.tsx` if it's no longer used elsewhere in that file.
- Keep the absolute glow div (`-inset-8 -z-10 rounded-[3rem] bg-gradient-to-br ...`) that sits behind the mock — it works just as well behind the iframe.
- On mobile (below `md:`), the iframe should stack below the headline copy, full width, capped at 390px, centered.

---

### Task 3 — Rewrite `src/routes/how-it-works.tsx` with the accurate 11-step flow

The `steps` array and all mock message content must be replaced to match the real WhatsApp flow exactly as it works in the product. Keep the existing page structure, layout, animations, and `WhatsAppMock` component API — only the data changes.

The real flow has 11 steps. The `WhatsAppMock` component accepts `{ restaurant, messages }` where each message is `{ from: "them" | "you", text?, card?, time }`. For steps that involve UI elements the mock can't render (catalogue screen, Paystack, tracking page), use a descriptive `text` from "them" that conveys what the user sees, e.g. a system-style message.

**New steps array — use this exactly:**

```ts
const steps = [
  {
    icon: MessageCircle,
    title: "Open the chat",
    desc: "Tap a restaurant's WhatsApp link — from Instagram, a flyer, or a friend's recommendation. The chat opens. No greeting needed.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "👋 Welcome to Severin Plus! Tap the shop icon above to browse our menu and place an order.", time: "12:30" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Browse the catalogue",
    desc: "Tap the shop icon in the chat header. WhatsApp opens the restaurant's full menu — real photos, descriptions, and live prices. Powered by Meta's native Product Catalogue.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🛍️ Menu · 24 items\n\nMain Dishes\n• Jollof Rice + Chicken — GHS 55.00\n• Banku with Tilapia — GHS 75.00\n• Waakye Special — GHS 35.00\n• Fried Rice & Chicken — GHS 60.00\n\nDrinks\n• Sobolo (Hibiscus) — GHS 15.00", time: "12:30" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Add to cart & place order",
    desc: "Tap + to add items. Your cart total updates in real time. When you're ready, tap 'Place Your Order' — your cart is sent back into the chat automatically.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "you" as const, text: "🧾 Order (2 items)\n  • Jollof Rice + Chicken × 1\n  • Banku with Tilapia × 1\nGHS 130.00", time: "12:31" },
      ],
    },
  },
  {
    icon: Truck,
    title: "Delivery or pickup",
    desc: "The bot reads your cart and asks how you want to receive it. Tap Delivery or Pickup — no typing needed.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Your Cart 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?\n\n[ 🚚 Delivery ]  [ 🏃 Pickup ]  [ ✏️ Update ]", time: "12:31" },
        { from: "you" as const, text: "🚚 Delivery", time: "12:31" },
      ],
    },
  },
  {
    icon: MapPin,
    title: "Drop your address",
    desc: "Type your delivery address. Add a note for the kitchen if you want — extra sauce, no shito, whatever you need. Or skip.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Please share your delivery address 📍", time: "12:31" },
        { from: "you" as const, text: "Tf Hostel, UG", time: "12:32" },
        { from: "them" as const, text: "Any notes for the kitchen?\n\n[ ⏭️ Skip ]", time: "12:32" },
        { from: "you" as const, text: "⏭️ Skip", time: "12:32" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Confirm your order",
    desc: "You get a full order summary — items, subtotal, delivery fee, and total. Review it, then confirm.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Summary 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal:      GHS 130.00\nDelivery fee:  GHS  20.00\n─────────────────\nTOTAL:         GHS 150.00\n\nDelivery to: Tf Hostel, UG\n\nIs everything correct?\n\n[ ✅ Confirm & Pay ]  [ ✏️ Update ]", time: "12:33" },
        { from: "you" as const, text: "✅ Confirm & Pay", time: "12:33" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Choose how to pay",
    desc: "Pick Pay Online (MoMo or card via Paystack) or Cash on Delivery. Your call, every order.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "How would you like to pay? 💳\n\n[ 💳 Pay Online ]  [ 💵 Cash on Delivery ]", time: "12:33" },
        { from: "you" as const, text: "💳 Pay Online", time: "12:33" },
        { from: "them" as const, text: "Complete your payment here 💳\n\n[ ↗ Pay Now ]", time: "12:33" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Pay with MoMo or card",
    desc: "Tap Pay Now — a secure Paystack checkout opens in your browser. MTN, Telecel, AirtelTigo, or card. Approve the MoMo prompt or enter your card. Done in seconds.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🔒 checkout.paystack.com\n\nPaying: GHS 150.00 to Severin Plus\nMethod: MTN Mobile Money\n\n[ Pay GHS 150.00 ] ← tap to approve MoMo prompt", time: "12:33" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Order confirmed",
    desc: "Payment clears and you're back in the chat. Your order number, items, delivery address, and total — all confirmed in one message.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Confirmed! 🎉\n\nOrder #0042\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nWe'll notify you when your order is ready 👨‍🍳", time: "12:34" },
        { from: "them" as const, text: "Track your order live 📦\n\n[ ↗ Track My Order ]", time: "12:34" },
      ],
    },
  },
  {
    icon: Bell,
    title: "Track your order live",
    desc: "Tap 'Track My Order' — a live tracking page opens at track.thothaigh.com showing exactly where your food is: placed, accepted, preparing, out for delivery, delivered.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🔒 track.thothaigh.com\n\nOrder #0042 · ~25 min\n\n✓ Order Placed  12:31 PM\n✓ Accepted by Kitchen  12:34 PM\n● Preparing Your Food  (in progress…)\n○ Out for Delivery\n○ Delivered\n\n1× Jollof Rice + Chicken\n1× Banku with Tilapia\nTotal Paid: GHS 150.00", time: "12:34" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Eat. Repeat.",
    desc: "Food arrives. You eat. Next time you're hungry, the chat's already there — just tap the shop icon and go again.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "👨‍🍳 Kitchen has accepted your order!", time: "12:34" },
        { from: "them" as const, text: "🛵 Your order is out for delivery!", time: "12:52" },
        { from: "them" as const, text: "🎉 Delivered! Enjoy your meal.", time: "13:01" },
        { from: "you" as const, text: "🔥🔥🔥", time: "13:15" },
      ],
    },
  },
];
```

**Import additions needed at the top of `how-it-works.tsx`:**
Add `Truck, MapPin, CheckCircle2, Bell` to the lucide-react import if not already present (check what's already imported). Remove any icons that are no longer used after the rewrite.

**Page headline update:**
Change "From craving to chow." to something that reflects the full end-to-end flow, e.g. "From tap to table." or keep "From craving to chow." — your call, both are fine.

**Bottom CTA section:**
The "I run a restaurant" link currently points at `/restaurants` — update it to `/for-restaurants` (this may already be done from Phase 1, but verify).

**Do not change:**
- The page layout, section structure, or CSS classes
- The alternating left/right grid layout (`i % 2 === 1` order flip)
- The motion/animation wrappers
- The `WhatsAppMock` component itself

---

### Acceptance checks for Phase 5a

| Check | Expected |
|---|---|
| `npm run build` passes | ✅ Exit 0 |
| `/demo/thothfood-demo.html` exists in `public/demo/` | ✅ |
| Hero right column renders iframe, not WhatsAppMock | ✅ |
| `<WhatsAppMock />` import removed from index.tsx if unused | ✅ |
| how-it-works has 11 steps | ✅ |
| No step references "say hi" or "Show me the menu" text message | ✅ |
| Step 4 shows Delivery/Pickup reply buttons | ✅ |
| Step 7 shows both Pay Online and Cash on Delivery | ✅ |
| Step 10 shows tracking timeline in mock | ✅ |
| Bottom CTA links to `/for-restaurants` | ✅ |
