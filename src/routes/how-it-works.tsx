import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppMock } from "@/components/site/WhatsAppMock";
import { MessageCircle, Smartphone, ShoppingBag, MapPin, Wallet, CheckCircle2, Bell } from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — ThothFood" },
      { name: "description", content: "From tap to table: the full ThothFood ordering journey on WhatsApp, step by step." },
      { property: "og:title", content: "How ThothFood works" },
      { property: "og:description", content: "From tap to table: the full ThothFood ordering journey on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: Smartphone,
    title: "ThothFood opens in WhatsApp",
    desc: "Tap a restaurant's WhatsApp link — from Instagram, a flyer, or a friend. The ThothFood-powered chat opens instantly. No greeting needed, no account required.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "👋 Welcome to Severin Plus!\n\nTap the shop icon above ↗ to browse our menu and place an order.", time: "9:41" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Tap the catalogue icon",
    desc: "Tap the shop icon in the WhatsApp chat header. The restaurant's full menu opens natively — real food photos, descriptions, live prices. No app, no browser redirect.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🛍️ Menu · 24 items\n\nMain Dishes\n• Jollof Rice + Chicken — GHS 55.00\n• Banku with Tilapia — GHS 75.00\n• Waakye Special — GHS 35.00\n• Fried Rice & Chicken — GHS 60.00\n• Omo Tuo & Groundnut Soup — GHS 55.00\n\nDrinks\n• Sobolo (Hibiscus) — GHS 15.00\n• Malt Drink — GHS 12.00", time: "9:41" },
      ],
    },
  },
  {
    icon: ShoppingBag,
    title: "Add to cart & place order",
    desc: "Tap + on items you want. Your cart total updates live. When ready, tap 'Place Your Order' — your cart is sent back into the chat automatically.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "you" as const, text: "🧾 Order (2 items)\n  • Jollof Rice + Chicken × 1\n  • Banku with Tilapia × 1\nGHS 130.00", time: "12:31" },
        { from: "them" as const, text: "Your Cart 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?\n\n[ 🚚 Delivery ]  [ 🏃 Pickup ]  [ ✏️ Update ]", time: "12:31" },
        { from: "you" as const, text: "🚚 Delivery", time: "12:31" },
      ],
    },
  },
  {
    icon: MapPin,
    title: "Share your address & notes",
    desc: "Type your delivery address. Add a note for the kitchen — extra sauce, no shito, allergies — or skip. Then get a full order summary to review before paying.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Please share your delivery address 📍", time: "12:31" },
        { from: "you" as const, text: "Tf Hostel, UG", time: "12:32" },
        { from: "them" as const, text: "Any notes for the kitchen? (allergies, extra sauce, etc.)\n\n[ ⏭️ Skip ]", time: "12:32" },
        { from: "you" as const, text: "⏭️ Skip", time: "12:32" },
        { from: "them" as const, text: "Order Summary 🧾\n\nJollof Rice + Chicken x1  GHS 55.00\nBanku with Tilapia x1  GHS 75.00\n\nSubtotal:     GHS 130.00\nDelivery fee: GHS  20.00\n─────────────────\nTOTAL:        GHS 150.00\n\nDelivery to: Tf Hostel, UG\nNotes: None\n\nIs everything correct?\n\n[ ✅ Confirm & Pay ]  [ ✏️ Update ]  [ 🔄 Restart ]", time: "12:33" },
        { from: "you" as const, text: "✅ Confirm & Pay", time: "12:33" },
      ],
    },
  },
  {
    icon: Wallet,
    title: "Pay with MoMo or cash",
    desc: "Choose Pay Online or Cash on Delivery. Pay Online opens a secure Paystack checkout — MTN, Telecel, AirtelTigo, or card. Approve the MoMo prompt in seconds.",
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
    icon: CheckCircle2,
    title: "Order confirmed",
    desc: "Payment clears and you're back in the chat. Your order number, items, delivery address, and total — confirmed in one message. Tap 'Track My Order' to follow your food live.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "Order Confirmed! 🎉\n\nOrder #0042\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nWe'll notify you when your order is ready 👨‍🍳", time: "12:34" },
        { from: "them" as const, text: "Track your order live 📦\n\n[ 📦 Track My Order ]", time: "12:34" },
        { from: "you" as const, text: "📦 Track My Order", time: "12:34" },
      ],
    },
  },
  {
    icon: Bell,
    title: "Track your delivery live",
    desc: "A live tracking page opens at track.thothaigh.com — Order Placed, Accepted by Kitchen, Preparing, Out for Delivery, Delivered. No guessing where your food is.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "🔒 track.thothaigh.com\n\nOrder #0042 · ~25 min\n\n✓ Order Placed  12:31 PM\n✓ Accepted by Kitchen  12:34 PM\n● Preparing Your Food  (in progress…)\n○ Out for Delivery\n○ Delivered\n\n1× Jollof Rice + Chicken\n1× Banku with Tilapia\nTotal Paid: GHS 150.00", time: "12:34" },
      ],
    },
  },
  {
    icon: CheckCircle2,
    title: "Kitchen accepted. Food on the way.",
    desc: "You get a WhatsApp notification the moment the kitchen accepts. Then another when it's out for delivery. Eat. Come back tomorrow.",
    mock: {
      restaurant: "Severin Plus",
      messages: [
        { from: "them" as const, text: "✅ Severin Plus has accepted your order!\nYour food is being prepared 👨‍🍳", time: "12:35" },
        { from: "them" as const, text: "🛵 Your order is out for delivery!", time: "12:52" },
        { from: "them" as const, text: "🎉 Delivered! Enjoy your meal.", time: "13:01" },
        { from: "you" as const, text: "🔥🔥🔥", time: "13:15" },
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
