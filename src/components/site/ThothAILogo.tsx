export function ThothAILogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { circle: "h-9 w-9",   tt: "text-sm",   name: "text-base", sub: "text-[0.6em]"  },
    md: { circle: "h-11 w-11", tt: "text-base",  name: "text-xl",   sub: "text-[0.55em]" },
    lg: { circle: "h-14 w-14", tt: "text-lg",    name: "text-2xl",  sub: "text-[0.5em]"  },
  };
  const s = sizes[size];
  return (
    <span className="flex items-center gap-2.5 font-display font-extrabold tracking-tight">
      <span
        className={`grid ${s.circle} flex-shrink-0 place-items-center rounded-full border-2 border-primary font-display font-black text-primary ${s.tt}`}
        style={{ letterSpacing: "-0.04em" }}
      >
        TT
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`${s.name} font-bold uppercase`}
          style={{ fontFamily: "var(--font-wordmark)" }}
        >
          Thoth
        </span>
        <span className={`mt-[0.3em] font-sans ${s.sub} font-semibold uppercase tracking-[0.15em] text-foreground/50`}>
          Technologies
        </span>
      </span>
    </span>
  );
}
