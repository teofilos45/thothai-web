import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { WhatsAppCatalogue } from "@/components/site/WhatsAppCatalogue";
import { MessageCircle, ShoppingBag, ShoppingCart, MapPin, Smartphone, Wallet, CheckCircle2, Bell } from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export const Route = createFileRoute("/thothfood/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Thoth" },
      { name: "description", content: "From tap to table: the full Thoth ordering journey on WhatsApp, step by step." },
      { property: "og:title", content: "How Thoth works" },
      { property: "og:description", content: "From tap to table: the full Thoth ordering journey on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: HowItWorks,
});

// Steps map 1:1 to the WhatsApp state machine:
// NEW → ORDERING → WAITING_ADDRESS → WAITING_NOTES → CONFIRMING_ORDER
//     → WAITING_PAYMENT → WAITING_COD_CONFIRMATION (COD path) → COMPLETED
//
// Message text copied verbatim from the animated demo (public/demo/thothfood-demo.html).
// ⚠ DISCREPANCY: The demo only animates the Pay Online path. The exact bot message sent
//   in the WAITING_COD_CONFIRMATION state (step 7) is not shown in the demo and must be
//   verified against backend/src/whatsapp/states/waiting-cod-confirmation.js once available.
const steps = [
  {
    icon: MessageCircle,
    title: "Chat opens. Bot greets you.",
    state: "NEW",
    desc: "Tap a restaurant's WhatsApp link — from Instagram, a flyer, or a menu QR code. The Thoth bot sends a welcome and waits. No account, no download, no email required.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "👋 Welcome to Severin Plus!\n\nTap the shop icon above ↗ to browse our menu and place an order.", time: "9:41" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Tap the shop icon. Browse the menu.",
    state: "ORDERING",
    desc: "Tap the catalogue icon in the WhatsApp chat header. The restaurant's full menu opens natively — real food photos, live prices, add-to-cart. No app, no browser, no account.",
    catalogue: {
      restaurant: "Severin Plus",
      subtitle: "Menu · 24 items",
      cartCount: 2,
      cartTotal: "GHS 130.00",
      sections: [
        {
          title: "Main Dishes",
          items: [
            { name: "Jollof Rice + Chicken", desc: "Party-style with fried plantain", price: "GHS 55.00", image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=180&h=180&fit=crop&q=80", added: true },
            { name: "Banku with Tilapia", desc: "Fermented corn dough with grilled tilapia", price: "GHS 75.00", image: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=180&h=180&fit=crop&q=80", added: true },
            { name: "Waakye Special", desc: "Rice & beans with gari & stew", price: "GHS 35.00", image: "https://images.unsplash.com/photo-1743630458593-286a8ae99625?w=180&h=180&fit=crop&q=80" },
            { name: "Fried Rice & Chicken", desc: "Seasoned fried rice with grilled chicken", price: "GHS 60.00", image: "https://images.unsplash.com/photo-1579112965143-9139ed2a522a?w=180&h=180&fit=crop&q=80" },
          ],
        },
      ],
    },
  },
  {
    icon: ShoppingCart,
    title: "Add to cart & place your order.",
    state: "ORDERING",
    desc: "Tap + on items you want. Your cart total updates live. When ready, tap 'Place Your Order' — your cart is sent back into the chat automatically. Pick Delivery or Pickup.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "you" as const, text: "🧾 Order (2 items)\n  • Jollof Rice + Chicken × 1\n  • Banku with Tilapia × 1\nGHS 130.00", time: "12:31" },
        { from: "them" as const, text: "Your Cart 🧾\n\n• Jollof Rice + Chicken x1 — GHS 55.00\n• Banku with Tilapia x1 — GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?\n\n[ 🚚 Delivery ]  [ 🏃 Pickup ]  [ ✏️ Update ]", time: "12:31" },
        { from: "you" as const, text: "🚚 Delivery", time: "12:31" },
      ],
    },
  },
  {
    icon: MapPin,
    title: "Drop your delivery address.",
    state: "WAITING_ADDRESS",
    desc: "The bot asks for your address. Type it — a landmark, hostel name, anything your rider can find. No map pin required. The address is attached to the order automatically.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Please share your delivery address 📍", time: "12:31" },
        { from: "you" as const, text: "Tf Hostel, UG", time: "12:32" },
      ],
    },
  },
  {
    icon: Smartphone,
    title: "Add kitchen notes or skip.",
    state: "WAITING_NOTES",
    desc: "Got allergies? Want extra sauce? No shito? Type it here. Or tap Skip — the order moves forward immediately. The note goes straight to the kitchen screen.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Any notes for the kitchen? (allergies, extra sauce, etc.)\n\n[ ⏭️ Skip ]", time: "12:32" },
        { from: "you" as const, text: "⏭️ Skip", time: "12:32" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Review your order and confirm.",
    state: "CONFIRMING_ORDER",
    desc: "The bot sends a full breakdown — every item, delivery fee, total, address, and notes. If anything is wrong, tap Update or Restart. When it's right, tap Confirm & Pay.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Summary 🧾\n\n• Jollof Rice + Chicken x1 — GHS 55.00\n• Banku with Tilapia x1 — GHS 75.00\n\nSubtotal: GHS 130.00\nDelivery: GHS 20.00\n──────────────\nTOTAL: GHS 150.00\n\nDeliver to: Tf Hostel, UG\nNotes: None\n\nIs everything correct?\n\n[ ✅ Confirm & Pay ]  [ ✏️ Update ]  [ 🔄 Restart ]", time: "12:33" },
        { from: "you" as const, text: "✅ Confirm & Pay", time: "12:33" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Choose how to pay and pay.",
    state: "WAITING_PAYMENT",
    desc: "Tap Pay Online for a Paystack checkout — MTN MoMo, Telecel Cash, AirtelTigo, or card. Tap the link, approve the MoMo prompt, done. Or choose Cash on Delivery if the restaurant offers it.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "How would you like to pay? 💳\n\n[ 💳 Pay Online ]  [ 💵 Cash on Delivery ]  [ 🔄 Restart ]", time: "12:33" },
        { from: "you" as const, text: "💳 Pay Online", time: "12:33" },
        { from: "them" as const, text: "Complete your payment here 💳\n\n[ 💳 Pay Now ]", time: "12:33" },
        { from: "you" as const, text: "💳 Pay Now", time: "12:33" },
      ],
    },
  },
  {
    icon: Bell,
    title: "Cash on delivery? Confirm and you're done.",
    state: "WAITING_COD_CONFIRMATION",
    desc: "If you chose Cash on Delivery, the bot confirms your order and tells you the exact amount due on arrival. No payment upfront — just have cash ready for the rider.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "How would you like to pay? 💳\n\n[ 💳 Pay Online ]  [ 💵 Cash on Delivery ]  [ 🔄 Restart ]", time: "12:33" },
        { from: "you" as const, text: "💵 Cash on Delivery", time: "12:33" },
        { from: "them" as const, text: "Order placed! 💵 Pay GHS 150.00 on delivery.\n\nOrder #0043\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\n\nWe'll notify you when your order is on the way 🛵", time: "12:34" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Confirmed. Track it live. Eat.",
    state: "COMPLETED",
    desc: "Payment clears and the order is live. You get a confirmation with your order number and a live tracking link. The moment the kitchen accepts, WhatsApp notifies you again.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Confirmed! 🎉\n\nOrder #0042\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nWe'll notify you when your order is ready 👨‍🍳", time: "12:34" },
        { from: "them" as const, text: "Track your order live 📦\n\n[ 📦 Track My Order ]", time: "12:34" },
        { from: "you" as const, text: "📦 Track My Order", time: "12:34" },
        { from: "them" as const, text: "✅ Severin Plus has accepted your order!\nYour food is being prepared 👨‍🍳", time: "12:35" },
      ],
    },
  },
];

function HowItWorks() {
  return (
    <>
      <section className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
            How it works
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            From tap to <span className="text-primary">table.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl body-text text-white/65">
            The full Thoth journey, step by step. Every step happens right inside WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-page space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-md body-text text-foreground/65">{s.desc}</p>
              </div>
              <div>
                {"catalogue" in s ? (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <WhatsAppCatalogue {...(s as any).catalogue} />
                ) : (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <WhatsAppMock restaurant={(s as any).mock.restaurant} messages={(s as any).mock.messages} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            That's it. Seriously.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/65">
            No accounts. No app store. No "we sent you an email." Just food, fast.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppLink className="inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </WhatsAppLink>
            <Link
              to="/thothfood/for-restaurants"
              className="inline-flex h-14 items-center rounded-full border border-border bg-background px-7 font-semibold text-foreground hover:bg-muted"
            >
              I run a restaurant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
