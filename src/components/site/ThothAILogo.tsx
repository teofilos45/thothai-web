export function ThothAILogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { badge: "h-7 w-7", icon: "text-sm",  name: "text-base", sub: "text-[0.6em]"  },
    md: { badge: "h-9 w-9", icon: "text-base", name: "text-xl",   sub: "text-[0.55em]" },
    lg: { badge: "h-12 w-12", icon: "text-lg", name: "text-2xl",  sub: "text-[0.5em]"  },
  };
  const s = sizes[size];
  return (
    <span className="flex items-center gap-2.5 font-display font-extrabold tracking-tight">
      <span
        className={`grid ${s.badge} place-items-center rounded-xl bg-primary font-display font-black text-primary-foreground ${s.icon}`}
      >
        T
      </span>
      <span className="flex flex-col leading-none">
        <span className={`${s.name} uppercase`} style={{ fontFamily: "var(--font-wordmark)" }}>
          Thoth<span className="text-primary">AI</span>
        </span>
        <span className={`mt-[0.3em] font-sans ${s.sub} font-semibold uppercase tracking-[0.15em] text-foreground/50`}>
          Technologies
        </span>
      </span>
    </span>
  );
}
