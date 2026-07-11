import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronRight, Check, Circle, ChevronDown, X, Menu, Sparkles, Instagram, Twitter, Facebook } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const appCss = "/assets/styles-D27LP1gl.css";
const APP_URL = "https://app.thothaigh.com";
const SIGNUP_URL = `${APP_URL}/onboarding`;
const LOGIN_URL = `${APP_URL}/login`;
const SITE_URL = "https://thothfood.com";
const WHATSAPP_ORDER_URL = "https://wa.me/233XXXXXXXXXX";
const WHATSAPP_BUSINESS_URL = "https://wa.me/233533769658";
const CONTACT_EMAIL = "aithoth6@gmail.com";
const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/_.t.h.othai",
  twitter: "#",
  facebook: "https://www.facebook.com/thoth1234"
};
function trackWaClick() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "wa_click");
}
function trackStartFree() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "start_free_click");
}
function trackContactSubmit() {
  if (typeof window !== "undefined") window.fbq?.("trackCustom", "contact_submit");
}
function WhatsAppLink({ href = WHATSAPP_ORDER_URL, className, children }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      onClick: trackWaClick,
      className,
      target: "_blank",
      rel: "noopener noreferrer",
      children
    }
  );
}
function ThothAILogo({ size = "md" }) {
  const sizes = {
    sm: {
      badge: "h-5 w-5 sm:h-7 sm:w-7",
      icon: "text-[10px] sm:text-sm",
      name: "text-xs sm:text-base",
      sub: "text-[0.5em] sm:text-[0.6em]"
    },
    md: {
      badge: "h-6 w-6 sm:h-9 sm:w-9",
      icon: "text-xs sm:text-base",
      name: "text-sm sm:text-xl",
      sub: "text-[0.5em] sm:text-[0.55em]"
    },
    lg: {
      badge: "h-8 w-8 sm:h-12 sm:w-12",
      icon: "text-sm sm:text-lg",
      name: "text-base sm:text-2xl",
      sub: "text-[0.45em] sm:text-[0.5em]"
    }
  };
  const s = sizes[size];
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 sm:gap-2.5 font-display font-extrabold tracking-tight", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `grid ${s.badge} flex-shrink-0 place-items-center rounded-full border-2 border-primary font-display font-black text-primary ${s.icon}`,
        style: { letterSpacing: "-0.04em" },
        children: "TT"
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-none", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `${s.name} font-bold uppercase`,
          style: { fontFamily: "var(--font-wordmark)" },
          children: "Thoth"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: `mt-[0.3em] font-sans ${s.sub} font-semibold uppercase tracking-[0.08em] sm:tracking-[0.15em] text-white/70`, children: "Technologies" })
    ] })
  ] });
}
function IOIIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("line", { x1: "3.5", y1: "2", x2: "3.5", y2: "7", strokeWidth: "1.4" }),
        /* @__PURE__ */ jsx("line", { x1: "5.5", y1: "2", x2: "5.5", y2: "7", strokeWidth: "1.4" }),
        /* @__PURE__ */ jsx("path", { d: "M3.5 7 Q4.5 9 5.5 7", fill: "none", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("line", { x1: "4.5", y1: "8.5", x2: "4.5", y2: "18", strokeWidth: "1.4" }),
        /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10.5", r: "3.5", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M15 2 L17 6 L15 8 V18", strokeWidth: "1.4" })
      ]
    }
  );
}
function ThothFoodLogo({ size = "md" }) {
  const sizes = {
    sm: { icon: "h-4 w-4", name: "text-lg" },
    md: { icon: "h-5 w-5", name: "text-xl" },
    lg: { icon: "h-6 w-6", name: "text-2xl" }
  };
  const s = sizes[size];
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 font-display font-extrabold tracking-tight", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `${s.name} font-bold uppercase leading-none`,
        style: { fontFamily: "var(--font-wordmark)" },
        children: "Thoth"
      }
    ),
    /* @__PURE__ */ jsx(IOIIcon, { className: `${s.icon} flex-shrink-0 text-primary` })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const thothFoodLinks = [
  { to: "/thothfood/how-it-works", label: "How it works" },
  { to: "/thothfood/for-restaurants", label: "For Restaurants" },
  { to: "/thothfood/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" }
];
const parentLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/contact", label: "Contact Us" }
];
function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isThothFood = location.pathname.startsWith("/thothfood");
  const links = isThothFood ? thothFoodLinks : parentLinks;
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
      isThothFood ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-[10px] font-semibold leading-none text-foreground/40 transition-colors hover:text-foreground/70", children: "Thoth Technologies ↗" }),
        /* @__PURE__ */ jsx(Link, { to: "/thothfood", className: "mt-0.5", children: /* @__PURE__ */ jsx(ThothFoodLogo, { size: "sm" }) })
      ] }) : /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(ThothAILogo, { size: "md" }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => {
        if (!isThothFood && l.to === "/products") {
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/products",
                className: "relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                activeProps: { className: "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary" },
                children: "Our Products"
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "ml-0.5 text-foreground/50 transition-colors hover:text-foreground", "aria-label": "Products menu", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" }) }) }),
              /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56 rounded-2xl border border-border bg-card p-2", align: "start", children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/thothfood", className: "flex cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Thoth" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Order food on WhatsApp" })
                ] }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/thothshop", className: "flex cursor-pointer flex-col gap-0.5 rounded-xl px-3 py-2.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "ThothShop" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Sell anything on WhatsApp" })
                ] }) })
              ] })
            ] })
          ] }, l.to);
        }
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            className: "relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
            activeProps: { className: "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary" },
            children: l.label
          },
          l.to
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-2 md:flex", children: isThothFood ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: LOGIN_URL,
            className: "inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted",
            children: "Restaurant Login"
          }
        ),
        /* @__PURE__ */ jsx(WhatsAppLink, { className: "inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5", children: "Order Now" })
      ] }) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          search: { role: void 0 },
          className: "inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.745_0.165_60/0.6)] transition-transform hover:-translate-y-0.5",
          children: "Get in touch"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen((s) => !s),
          className: "grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden",
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border bg-background md:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "container-page flex flex-col gap-1 py-4", children: [
      links.map(
        (l) => !isThothFood && l.to === "/products" ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/products",
              onClick: () => setOpen(false),
              className: "block rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted",
              children: "Our Products"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "ml-4 flex flex-col gap-0.5 border-l border-border pl-3", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/thothfood",
                onClick: () => setOpen(false),
                className: "block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted",
                children: [
                  "Thoth ",
                  /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs text-muted-foreground", children: "Order food on WhatsApp" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/thothshop",
                onClick: () => setOpen(false),
                className: "block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted",
                children: [
                  "ThothShop ",
                  /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs text-muted-foreground", children: "Sell anything on WhatsApp" })
                ]
              }
            )
          ] })
        ] }, l.to) : /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted",
            children: l.label
          },
          l.to
        )
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-col gap-2", children: isThothFood ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: LOGIN_URL,
            onClick: () => setOpen(false),
            className: "inline-flex h-12 items-center justify-center rounded-full border border-border font-semibold text-foreground/80",
            children: "Restaurant Login"
          }
        ),
        /* @__PURE__ */ jsx(WhatsAppLink, { onClick: () => setOpen(false), className: "inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground", children: "Order Now" })
      ] }) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          search: { role: void 0 },
          onClick: () => setOpen(false),
          className: "inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground",
          children: "Get in touch"
        }
      ) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-dark text-dark-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-16", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-16 rounded-3xl border border-white/10 bg-dark-card p-8 md:p-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Coming Soon"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-3xl font-extrabold md:text-4xl", children: "Food was just the beginning." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-base text-white/65", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: "ThothShop" }),
          " — WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts. If you sell it, you can sell it on WhatsApp."
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/thothshop",
          className: "inline-flex h-12 w-full items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15 md:w-auto",
          children: "Get early access"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(ThothAILogo, { size: "md" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-white/55", children: "Building the commerce layer for Africa on WhatsApp. Food, fashion, everything — one chat away." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-white/40", children: "Accra, Ghana" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-sm font-bold uppercase tracking-wider text-white/50", children: "Products" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/thothfood", className: "text-white/70 hover:text-primary", children: "Thoth" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/thothshop", className: "text-white/70 hover:text-primary", children: "ThothShop" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/thothfood/how-it-works", className: "text-white/70 hover:text-primary", children: "How it works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/thothfood/for-restaurants", className: "text-white/70 hover:text-primary", children: "For Restaurants" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/thothfood/pricing", className: "text-white/70 hover:text-primary", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: SIGNUP_URL, onClick: trackStartFree, className: "text-white/70 hover:text-primary", children: "Start free" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: LOGIN_URL, className: "text-white/70 hover:text-primary", children: "Restaurant Login" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", search: { role: void 0 }, className: "text-white/70 hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-sm font-bold uppercase tracking-wider text-white/50", children: "Follow" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-3", children: [
          { Icon: Instagram, href: SOCIAL_URLS.instagram, label: "Instagram" },
          { Icon: Twitter, href: SOCIAL_URLS.twitter, label: "Twitter" },
          { Icon: Facebook, href: SOCIAL_URLS.facebook, label: "Facebook" }
        ].map(({ Icon, href, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary",
            "aria-label": label,
            children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
          },
          label
        )) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-white/40", children: CONTACT_EMAIL })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Thoth Technologies. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-white/70", children: "Terms" }),
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-white/70", children: "Privacy" }),
        /* @__PURE__ */ jsx("p", { children: "Made with ❤️ in Accra" })
      ] })
    ] })
  ] }) });
}
const PLAUSIBLE_DOMAIN = void 0;
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thoth Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/og/thothfood.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL
  }
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Thoth",
  url: SITE_URL
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Thoth — Hungry? Just WhatsApp it." },
      { name: "description", content: "Order food on WhatsApp from your favourite restaurants in Ghana. No app to download. Pay with MoMo. Delivery or pickup." },
      { name: "author", content: "Thoth Technologies" },
      { property: "og:title", content: "Thoth — Hungry? Just WhatsApp it." },
      { property: "og:description", content: "Order food on WhatsApp from your favourite restaurants in Ghana. No app to download." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og/thothfood.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og/thothfood.png" },
      { name: "theme-color", content: "#F69B12" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@700&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  const pixelInit = null;
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify([orgSchema, websiteSchema]) }
        }
      ),
      pixelInit,
      PLAUSIBLE_DOMAIN
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$b = () => import("./thothshop-Bo-Bg3oC.js");
const Route$c = createFileRoute("/thothshop")({
  head: () => ({
    meta: [{
      title: "ThothShop — Sell anything on WhatsApp"
    }, {
      name: "description",
      content: "WhatsApp commerce for every small business in Ghana. Clothing, electronics, beauty, crafts — sell anything without an app or website."
    }, {
      property: "og:title",
      content: "ThothShop — Sell anything on WhatsApp"
    }, {
      property: "og:description",
      content: "WhatsApp commerce for every small business in Ghana. Coming soon from Thoth Technologies."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./terms-C7gPV7mp.js");
const Route$b = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service — Thoth Technologies"
    }, {
      name: "description",
      content: "Terms of Service for Thoth, a product of Thoth Technologies. Governs use of the platform by restaurants and customers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const lastmod = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/products", priority: "0.8", changefreq: "monthly" },
  { path: "/thothfood", priority: "1.0", changefreq: "weekly" },
  { path: "/thothfood/how-it-works", priority: "0.9", changefreq: "monthly" },
  { path: "/thothfood/for-restaurants", priority: "0.9", changefreq: "monthly" },
  { path: "/thothfood/pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/thothshop", priority: "0.5", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" }
];
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map(
          (e) => `  <url>
    <loc>${SITE_URL}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./restaurants-BTU5dmpx.js");
const Route$9 = createFileRoute("/restaurants")({
  beforeLoad: () => {
    throw redirect({
      to: "/thothfood/for-restaurants"
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./products-B27KASEe.js");
const Route$8 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Our Products — Thoth Technologies"
    }, {
      name: "description",
      content: "Thoth and ThothShop — one WhatsApp commerce platform, every category. Order food or sell anything, all inside the chat your customers already use."
    }, {
      property: "og:title",
      content: "Our Products — Thoth Technologies"
    }, {
      property: "og:description",
      content: "One platform. Every category. Thoth is live in Accra. ThothShop is coming soon."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./privacy-jSbP7y7j.js");
const Route$7 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Thoth Technologies"
    }, {
      name: "description",
      content: "Privacy Policy for Thoth, a product of Thoth Technologies. Explains what data we collect, how we use it, and your rights under Ghana's Data Protection Act 2012."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-CU96mONG.js");
const Route$6 = createFileRoute("/contact")({
  validateSearch: (search) => ({
    role: search.role === "restaurant" ? "restaurant" : void 0
  }),
  head: () => ({
    meta: [{
      title: "Contact — Thoth"
    }, {
      name: "description",
      content: "Get in touch with the Thoth team. Customer or restaurant owner — we'd love to hear from you."
    }, {
      property: "og:title",
      content: "Contact Thoth"
    }, {
      property: "og:description",
      content: "Reach the Thoth team in Accra. Fastest reply via WhatsApp."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-CBerKOhr.js");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Thoth Technologies"
    }, {
      name: "description",
      content: "Our mission is to make commerce as easy as texting a friend. We build WhatsApp-native commerce infrastructure for Africa, starting with Ghana."
    }, {
      property: "og:title",
      content: "About Thoth Technologies"
    }, {
      property: "og:description",
      content: "Building the commerce layer for Africa on WhatsApp. Our mission, values, and the team behind Thoth and ThothShop."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CazoF-ZP.js");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Thoth Technologies — Building the commerce layer for Africa on WhatsApp"
    }, {
      name: "description",
      content: "Thoth Technologies builds WhatsApp-native commerce infrastructure for Africa. Thoth lets restaurants take orders on WhatsApp. ThothShop brings the same to every merchant."
    }, {
      property: "og:title",
      content: "Thoth Technologies"
    }, {
      property: "og:description",
      content: "Building the commerce layer for Africa on WhatsApp."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-BS_PYkt3.js");
const Route$3 = createFileRoute("/thothfood/")({
  head: () => ({
    meta: [{
      title: "Thoth — Hungry? Just WhatsApp it."
    }, {
      name: "description",
      content: "Order food on WhatsApp from your favourite restaurants in Ghana. No app, no stress. Pay with MoMo or card."
    }, {
      property: "og:title",
      content: "Thoth — Hungry? Just WhatsApp it."
    }, {
      property: "og:description",
      content: "Order food on WhatsApp from your favourite restaurants in Ghana. No app, no account, no stress."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./pricing-BKk9axz9.js");
const Route$2 = createFileRoute("/thothfood/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — Thoth"
    }, {
      name: "description",
      content: "Start free. Upgrade when you're ready. Thoth's Free plan costs nothing — get on WhatsApp and start taking orders today."
    }, {
      property: "og:title",
      content: "Pricing — Thoth"
    }, {
      property: "og:description",
      content: "Start free. Upgrade when you're ready. No upfront cost to get your restaurant on WhatsApp."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./how-it-works-DcGqFj61.js");
const Route$1 = createFileRoute("/thothfood/how-it-works")({
  head: () => ({
    meta: [{
      title: "How it works — Thoth"
    }, {
      name: "description",
      content: "From tap to table: the full Thoth ordering journey on WhatsApp, step by step."
    }, {
      property: "og:title",
      content: "How Thoth works"
    }, {
      property: "og:description",
      content: "From tap to table: the full Thoth ordering journey on WhatsApp."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./for-restaurants-tIQcA3KB.js");
const Route = createFileRoute("/thothfood/for-restaurants")({
  head: () => ({
    meta: [{
      title: "For Restaurants — Thoth"
    }, {
      name: "description",
      content: "Put your restaurant on WhatsApp. Free. Real-time kitchen dashboard, MoMo payments, menu management — and your customers are already there."
    }, {
      property: "og:title",
      content: "Put your restaurant on WhatsApp. Free. — Thoth"
    }, {
      property: "og:description",
      content: "List your menu at your prices. Pay nothing to get started. Real-time dashboard, MoMo payments, delivery zones."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og/thothfood-restaurants.png"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ThothshopRoute = Route$c.update({
  id: "/thothshop",
  path: "/thothshop",
  getParentRoute: () => Route$d
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$d
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$d
});
const RestaurantsRoute = Route$9.update({
  id: "/restaurants",
  path: "/restaurants",
  getParentRoute: () => Route$d
});
const ProductsRoute = Route$8.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$7.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const ThothfoodIndexRoute = Route$3.update({
  id: "/thothfood/",
  path: "/thothfood/",
  getParentRoute: () => Route$d
});
const ThothfoodPricingRoute = Route$2.update({
  id: "/thothfood/pricing",
  path: "/thothfood/pricing",
  getParentRoute: () => Route$d
});
const ThothfoodHowItWorksRoute = Route$1.update({
  id: "/thothfood/how-it-works",
  path: "/thothfood/how-it-works",
  getParentRoute: () => Route$d
});
const ThothfoodForRestaurantsRoute = Route.update({
  id: "/thothfood/for-restaurants",
  path: "/thothfood/for-restaurants",
  getParentRoute: () => Route$d
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PrivacyRoute,
  ProductsRoute,
  RestaurantsRoute,
  SitemapDotxmlRoute,
  TermsRoute,
  ThothshopRoute,
  ThothfoodForRestaurantsRoute,
  ThothfoodHowItWorksRoute,
  ThothfoodPricingRoute,
  ThothfoodIndexRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CONTACT_EMAIL as C,
  IOIIcon as I,
  Route$6 as R,
  SIGNUP_URL as S,
  WHATSAPP_BUSINESS_URL as W,
  WhatsAppLink as a,
  WHATSAPP_ORDER_URL as b,
  trackStartFree as c,
  cn as d,
  router as r,
  trackContactSubmit as t
};
