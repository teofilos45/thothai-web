import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check, MessageCircle, ShoppingBag, ShoppingCart, MapPin, Smartphone, CheckCircle2, Wallet, Bell } from "lucide-react";
import { a as WhatsAppLink } from "./router-a2y7TcFD.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
const defaultMessages = [
  { from: "them", text: "Hey! Welcome to Auntie Muni's 👋 What are you craving today?", time: "12:31" },
  { from: "you", text: "Jollof + chicken please 😋", time: "12:31" },
  {
    from: "them",
    card: { title: "Jollof + Grilled Chicken", price: "GHS 65", emoji: "🍗" },
    time: "12:32"
  },
  { from: "you", text: "Add to cart. Deliver to East Legon 🏠", time: "12:32" },
  { from: "them", text: "Got it. MoMo or card?", time: "12:32" },
  { from: "you", text: "MoMo 📱", time: "12:33" },
  { from: "them", text: "✅ Paid. Kitchen is on it — arrives in ~25 min. We'll keep you posted.", time: "12:33" }
];
function WhatsAppMock({
  messages = defaultMessages,
  restaurant = "Auntie Muni's Kitchen",
  status = "online"
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[300px] overflow-hidden rounded-[2.25rem] border-[10px] border-dark bg-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground", children: restaurant.charAt(0) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: restaurant }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] opacity-80", children: status })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "space-y-2 px-3 py-4",
        style: {
          background: "linear-gradient(180deg, #ECE5DD 0%, #E4DDD2 100%)",
          minHeight: "280px"
        },
        children: messages.map((m, i) => {
          if (m.card) {
            return /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "ml-1 max-w-[82%] overflow-hidden rounded-2xl rounded-tl-md bg-white shadow-sm", children: [
              m.card.image ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: m.card.image,
                  alt: m.card.title,
                  className: "h-16 w-full object-cover",
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              ) : /* @__PURE__ */ jsx("div", { className: "grid h-16 w-full place-items-center bg-accent text-4xl", children: m.card.emoji }),
              /* @__PURE__ */ jsxs("div", { className: "p-2.5", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-foreground", children: m.card.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm font-bold text-primary", children: m.card.price }),
                /* @__PURE__ */ jsx("button", { className: "mt-1.5 w-full rounded-lg bg-primary py-1.5 text-[11px] font-semibold text-primary-foreground", children: "Add to cart" })
              ] })
            ] }) }, i);
          }
          const mine = m.from === "you";
          return /* @__PURE__ */ jsx("div", { className: `flex ${mine ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: `max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-snug shadow-sm ${mine ? "rounded-tr-md bg-[#DCF8C6] text-foreground" : "rounded-tl-md bg-white text-foreground"}`,
              children: [
                /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap break-words", children: m.text }),
                /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex items-center justify-end gap-1 text-[10px] text-foreground/50", children: [
                  /* @__PURE__ */ jsx("span", { children: m.time }),
                  mine && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-info" })
                ] })
              ]
            }
          ) }, i);
        })
      }
    )
  ] });
}
function WhatsAppCatalogue({
  restaurant,
  subtitle = "Menu",
  sections,
  cartCount = 0,
  cartTotal = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[300px] overflow-hidden rounded-[2.25rem] border-[10px] border-dark bg-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-between px-4 py-1 text-[10px] font-semibold",
        style: { background: "#054740", color: "rgba(255,255,255,0.85)" },
        children: [
          /* @__PURE__ */ jsx("span", { children: "9:41" }),
          /* @__PURE__ */ jsx("span", { children: "●●●● 5G ■" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-2.5 px-3 py-2",
        style: { background: "#075E54", color: "white" },
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl font-light opacity-70", children: "‹" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[13px] font-semibold leading-tight truncate", children: restaurant }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] opacity-65", children: subtitle })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative text-base leading-none", children: [
            "🛒",
            cartCount > 0 && /* @__PURE__ */ jsx(
              "span",
              {
                className: "absolute -top-1 -right-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full text-[8px] font-black text-white",
                style: { background: "#25D366", border: "1.5px solid #075E54" },
                children: cartCount
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-white", style: { maxHeight: "340px", overflowY: "hidden" }, children: sections.map((section) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "px-3 pt-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-widest",
          style: { color: "#888" },
          children: section.title
        }
      ),
      section.items.map((item, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-2.5 px-3 py-2",
          style: { borderBottom: "1px solid #f2f2f2" },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-[54px] w-[54px] flex-shrink-0 rounded-lg bg-gray-100",
                style: {
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-[12.5px] font-semibold leading-tight",
                  style: { color: "#111" },
                  children: item.name
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "mt-0.5 truncate text-[10.5px] leading-tight",
                  style: { color: "#888" },
                  children: item.desc
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[12px] font-bold", style: { color: "#075E54" }, children: item.price })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full text-[15px] font-black text-white",
                style: {
                  background: item.added ? "#075E54" : "#25D366",
                  boxShadow: item.added ? "0 2px 4px rgba(7,94,84,.25)" : "0 2px 6px rgba(37,211,102,.3)"
                },
                children: item.added ? "✓" : "+"
              }
            )
          ]
        },
        i
      ))
    ] }, section.title)) }),
    cartCount > 0 && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-between px-4 py-3 text-[13px] font-bold text-white",
        style: { background: "#25D366" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-md px-1.5 py-0.5 text-[11px] font-black",
                style: { background: "rgba(255,255,255,0.25)" },
                children: cartCount
              }
            ),
            "Place Your Order"
          ] }),
          /* @__PURE__ */ jsx("span", { children: cartTotal })
        ]
      }
    )
  ] });
}
const steps = [{
  icon: MessageCircle,
  title: "Chat opens. Bot greets you.",
  state: "NEW",
  desc: "Tap a restaurant's WhatsApp link — from Instagram, a flyer, or a menu QR code. The Thoth bot sends a welcome and waits. No account, no download, no email required.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "👋 Welcome to Severin Plus!\n\nTap the shop icon above ↗ to browse our menu and place an order.",
      time: "9:41"
    }]
  }
}, {
  icon: ShoppingBag,
  title: "Tap the shop icon. Browse the menu.",
  state: "ORDERING",
  desc: "Tap the catalogue icon in the WhatsApp chat header. The restaurant's full menu opens natively — real food photos, live prices, add-to-cart. No app, no browser, no account.",
  catalogue: {
    restaurant: "Severin Plus",
    subtitle: "Menu · 24 items",
    cartCount: 2,
    cartTotal: "GHS 130.00",
    sections: [{
      title: "Main Dishes",
      items: [{
        name: "Jollof Rice + Chicken",
        desc: "Party-style with fried plantain",
        price: "GHS 55.00",
        image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=180&h=180&fit=crop&q=80",
        added: true
      }, {
        name: "Banku with Tilapia",
        desc: "Fermented corn dough with grilled tilapia",
        price: "GHS 75.00",
        image: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=180&h=180&fit=crop&q=80",
        added: true
      }, {
        name: "Waakye Special",
        desc: "Rice & beans with gari & stew",
        price: "GHS 35.00",
        image: "https://images.unsplash.com/photo-1743630458593-286a8ae99625?w=180&h=180&fit=crop&q=80"
      }, {
        name: "Fried Rice & Chicken",
        desc: "Seasoned fried rice with grilled chicken",
        price: "GHS 60.00",
        image: "https://images.unsplash.com/photo-1579112965143-9139ed2a522a?w=180&h=180&fit=crop&q=80"
      }]
    }]
  }
}, {
  icon: ShoppingCart,
  title: "Add to cart & place your order.",
  state: "ORDERING",
  desc: "Tap + on items you want. Your cart total updates live. When ready, tap 'Place Your Order' — your cart is sent back into the chat automatically. Pick Delivery or Pickup.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "you",
      text: "🧾 Order (2 items)\n  • Jollof Rice + Chicken × 1\n  • Banku with Tilapia × 1\nGHS 130.00",
      time: "12:31"
    }, {
      from: "them",
      text: "Your Cart 🧾\n\n• Jollof Rice + Chicken x1 — GHS 55.00\n• Banku with Tilapia x1 — GHS 75.00\n\nSubtotal: GHS 130.00\n\nHow would you like to receive your order?\n\n[ 🚚 Delivery ]  [ 🏃 Pickup ]  [ ✏️ Update ]",
      time: "12:31"
    }, {
      from: "you",
      text: "🚚 Delivery",
      time: "12:31"
    }]
  }
}, {
  icon: MapPin,
  title: "Drop your delivery address.",
  state: "WAITING_ADDRESS",
  desc: "The bot asks for your address. Type it — a landmark, hostel name, anything your rider can find. No map pin required. The address is attached to the order automatically.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "Please share your delivery address 📍",
      time: "12:31"
    }, {
      from: "you",
      text: "Tf Hostel, UG",
      time: "12:32"
    }]
  }
}, {
  icon: Smartphone,
  title: "Add kitchen notes or skip.",
  state: "WAITING_NOTES",
  desc: "Got allergies? Want extra sauce? No shito? Type it here. Or tap Skip — the order moves forward immediately. The note goes straight to the kitchen screen.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "Any notes for the kitchen? (allergies, extra sauce, etc.)\n\n[ ⏭️ Skip ]",
      time: "12:32"
    }, {
      from: "you",
      text: "⏭️ Skip",
      time: "12:32"
    }]
  }
}, {
  icon: CheckCircle2,
  title: "Review your order and confirm.",
  state: "CONFIRMING_ORDER",
  desc: "The bot sends a full breakdown — every item, delivery fee, total, address, and notes. If anything is wrong, tap Update or Restart. When it's right, tap Confirm & Pay.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "Order Summary 🧾\n\n• Jollof Rice + Chicken x1 — GHS 55.00\n• Banku with Tilapia x1 — GHS 75.00\n\nSubtotal: GHS 130.00\nDelivery: GHS 20.00\n──────────────\nTOTAL: GHS 150.00\n\nDeliver to: Tf Hostel, UG\nNotes: None\n\nIs everything correct?\n\n[ ✅ Confirm & Pay ]  [ ✏️ Update ]  [ 🔄 Restart ]",
      time: "12:33"
    }, {
      from: "you",
      text: "✅ Confirm & Pay",
      time: "12:33"
    }]
  }
}, {
  icon: Wallet,
  title: "Choose how to pay and pay.",
  state: "WAITING_PAYMENT",
  desc: "Tap Pay Online for a Paystack checkout — MTN MoMo, Telecel Cash, AirtelTigo, or card. Tap the link, approve the MoMo prompt, done. Or choose Cash on Delivery if the restaurant offers it.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "How would you like to pay? 💳\n\n[ 💳 Pay Online ]  [ 💵 Cash on Delivery ]  [ 🔄 Restart ]",
      time: "12:33"
    }, {
      from: "you",
      text: "💳 Pay Online",
      time: "12:33"
    }, {
      from: "them",
      text: "Complete your payment here 💳\n\n[ 💳 Pay Now ]",
      time: "12:33"
    }, {
      from: "you",
      text: "💳 Pay Now",
      time: "12:33"
    }]
  }
}, {
  icon: Bell,
  title: "Cash on delivery? Confirm and you're done.",
  state: "WAITING_COD_CONFIRMATION",
  desc: "If you chose Cash on Delivery, the bot confirms your order and tells you the exact amount due on arrival. No payment upfront — just have cash ready for the rider.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "How would you like to pay? 💳\n\n[ 💳 Pay Online ]  [ 💵 Cash on Delivery ]  [ 🔄 Restart ]",
      time: "12:33"
    }, {
      from: "you",
      text: "💵 Cash on Delivery",
      time: "12:33"
    }, {
      from: "them",
      text: "Order placed! 💵 Pay GHS 150.00 on delivery.\n\nOrder #0043\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\n\nWe'll notify you when your order is on the way 🛵",
      time: "12:34"
    }]
  }
}, {
  icon: CheckCircle2,
  title: "Confirmed. Track it live. Eat.",
  state: "COMPLETED",
  desc: "Payment clears and the order is live. You get a confirmation with your order number and a live tracking link. The moment the kitchen accepts, WhatsApp notifies you again.",
  mock: {
    restaurant: "Severin Plus",
    messages: [{
      from: "them",
      text: "Order Confirmed! 🎉\n\nOrder #0042\nJollof Rice + Chicken x1\nBanku with Tilapia x1\nDelivery to: Tf Hostel, UG\nTotal paid: GHS 150.00\n\nWe'll notify you when your order is ready 👨‍🍳",
      time: "12:34"
    }, {
      from: "them",
      text: "Track your order live 📦\n\n[ 📦 Track My Order ]",
      time: "12:34"
    }, {
      from: "you",
      text: "📦 Track My Order",
      time: "12:34"
    }, {
      from: "them",
      text: "✅ Severin Plus has accepted your order!\nYour food is being prepared 👨‍🍳",
      time: "12:35"
    }]
  }
}];
function HowItWorks() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-dark py-20 text-dark-foreground md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", children: "How it works" }),
      /* @__PURE__ */ jsxs("h1", { className: "mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl", children: [
        "From tap to ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "table." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl body-text text-white/65", children: "The full Thoth journey, step by step. Every step happens right inside WhatsApp." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "container-page space-y-24", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: `grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("span", { className: "font-display text-sm font-bold uppercase tracking-wider text-primary", children: [
            "Step ",
            String(i + 1).padStart(2, "0")
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md body-text text-foreground/65", children: s.desc })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-h-[480px] overflow-hidden md:max-h-none", children: "catalogue" in s ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        /* @__PURE__ */ jsx(WhatsAppCatalogue, { ...s.catalogue })
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        /* @__PURE__ */ jsx(WhatsAppMock, { restaurant: s.mock.restaurant, messages: s.mock.messages })
      ) })
    ] }, s.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl", children: "That's it. Seriously." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-foreground/65", children: 'No accounts. No app store. No "we sent you an email." Just food, fast.' }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(WhatsAppLink, { className: "inline-flex h-14 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }),
          " Order on WhatsApp"
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/thothfood/for-restaurants", className: "inline-flex h-14 items-center rounded-full border border-border bg-background px-7 font-semibold text-foreground hover:bg-muted", children: "I run a restaurant" })
      ] })
    ] }) })
  ] });
}
export {
  HowItWorks as component
};
