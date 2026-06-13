import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { MessageCircle, Search, ShoppingBag, List, ShoppingCart, Truck, MapPin, FileText, ClipboardList, CreditCard, Wallet, Bell } from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — ThothFood" },
      { name: "description", content: "From craving to chow: the full ThothFood ordering journey on WhatsApp, step by step." },
      { property: "og:title", content: "How ThothFood works" },
      { property: "og:description", content: "From craving to chow: the full ThothFood ordering journey on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: Search,
    title: "Find a restaurant",
    desc: "Spot a ThothFood restaurant on Instagram, a flyer, or a friend's recommendation. Tap their WhatsApp link to open the chat.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Hey! Welcome to Severin Plus 🍲 Tap the menu icon above to browse our dishes.", time: "9:41" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Tap the catalogue icon",
    desc: "Tap the shop icon in the WhatsApp chat header. The full menu opens instantly — no link, no browser redirect, no app required.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "👆 Tap the shop icon in the top bar to open our menu. You'll get our full catalogue — photos, prices, everything.", time: "9:41" },
      ],
    },
  },
  {
    icon: List,
    title: "Browse the menu",
    desc: "Scroll a native WhatsApp product catalogue — real food photos, item descriptions, and live prices. Just like browsing a shop in chat.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, card: { title: "Jollof Rice + Chicken", price: "GHS 55", emoji: "🍗" }, time: "9:41" },
        { from: "them" as const, card: { title: "Banku with Tilapia", price: "GHS 75", emoji: "🐟" }, time: "9:41" },
      ],
    },
  },
  {
    icon: ShoppingCart,
    title: "Add items to your cart",
    desc: "Tap + on anything you want. Change quantities. Your cart total updates live as you shop. When you're ready, tap 'Place Your Order'.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🛒 Your Cart\n• Jollof Rice + Chicken × 1  GHS 55\n• Banku with Tilapia × 1  GHS 75\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?", time: "9:41" },
      ],
    },
  },
  {
    icon: Truck,
    title: "Delivery or pickup",
    desc: "Reply with one tap — 🚚 Delivery or 🏃 Pickup. Delivery fees are calculated by zone, shown upfront. No surprise charges.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "How would you like to receive your order?\n\n🚚 Delivery   🏃 Pickup   ✏️ Update", time: "9:41" },
        { from: "you" as const, text: "🚚 Delivery", time: "9:41" },
      ],
    },
  },
  {
    icon: MapPin,
    title: "Share your delivery address",
    desc: "Type your address or drop a pin. The restaurant confirms your delivery zone and fee immediately.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Please share your delivery address 📍", time: "9:41" },
        { from: "you" as const, text: "Tf Hostel, UG 📍", time: "9:42" },
        { from: "them" as const, text: "Got it! Delivery fee: GHS 20.00", time: "9:42" },
      ],
    },
  },
  {
    icon: FileText,
    title: "Add notes or skip",
    desc: "Tell the kitchen anything — allergies, extra sauce, 'no shito please'. Or just tap Skip and we'll handle it as-is.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Any notes for the kitchen? (allergies, special requests…)\n\n⏭️ Skip", time: "9:42" },
        { from: "you" as const, text: "⏭️ Skip", time: "9:42" },
      ],
    },
  },
  {
    icon: ClipboardList,
    title: "Review the order summary",
    desc: "See the full breakdown: items, delivery fee, and total. Everything correct? Tap Confirm & Pay. Need to change something? Tap Update.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Summary 🧾\n\nJollof Rice + Chicken ×1  GHS 55\nBanku with Tilapia ×1  GHS 75\nDelivery fee:  GHS 20\n──────────────\nTOTAL:  GHS 150.00\n\nDelivery to: Tf Hostel, UG", time: "9:42" },
        { from: "you" as const, text: "✅ Confirm & Pay", time: "9:43" },
      ],
    },
  },
  {
    icon: CreditCard,
    title: "Choose your payment method",
    desc: "Pay online via Paystack (MoMo or card) or choose Cash on Delivery. One reply tap — you're done.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "How would you like to pay? 💳\n\n💳 Pay Online   💵 Cash on Delivery", time: "9:43" },
        { from: "you" as const, text: "💳 Pay Online", time: "9:43" },
        { from: "them" as const, text: "Complete your payment here 💳\n→ checkout.paystack.com/...", time: "9:43" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Complete Paystack checkout",
    desc: "A secure Paystack page opens. Pay with MTN MoMo, Telecel, AirtelTigo, or any card. Confirmed in seconds — you're back in chat.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "you" as const, text: "💳 Pay Now", time: "9:43" },
        { from: "them" as const, text: "✅ Payment confirmed! GHS 150.00 received. Sending to the kitchen 🍳", time: "9:43" },
      ],
    },
  },
  {
    icon: Bell,
    title: "Order confirmed — track live",
    desc: "You get an order confirmation with a live tracking link. A separate update arrives the moment the kitchen accepts and starts cooking.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Confirmed! 🎉\n\nOrder #0042\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\n📦 Track My Order →", time: "9:44" },
        { from: "them" as const, text: "✅ Severin Plus has accepted your order! Your food is being prepared 👨‍🍳", time: "9:45" },
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
            From craving to <span className="text-primary">chow.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
            The full ThothFood journey, step by step. Every step happens right inside WhatsApp.
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
                <p className="mt-4 max-w-md text-lg text-foreground/65">{s.desc}</p>
              </div>
              <div>
                <WhatsAppMock restaurant={s.mock.restaurant} messages={s.mock.messages} />
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
              to="/for-restaurants"
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
