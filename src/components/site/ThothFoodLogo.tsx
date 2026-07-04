export function IOIIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Fork: two tines + curved join + handle */}
      <line x1="3.5" y1="2" x2="3.5" y2="7" strokeWidth="1.4" />
      <line x1="5.5" y1="2" x2="5.5" y2="7" strokeWidth="1.4" />
      <path d="M3.5 7 Q4.5 9 5.5 7" fill="none" strokeWidth="1.2" />
      <line x1="4.5" y1="8.5" x2="4.5" y2="18" strokeWidth="1.4" />
      {/* Plate */}
      <circle cx="10" cy="10.5" r="3.5" strokeWidth="1.5" />
      {/* Knife: blade to tip + handle */}
      <path d="M15 2 L17 6 L15 8 V18" strokeWidth="1.4" />
    </svg>
  );
}

export function ThothFoodLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { icon: "h-4 w-4",   name: "text-lg"  },
    md: { icon: "h-5 w-5",   name: "text-xl"  },
    lg: { icon: "h-6 w-6",   name: "text-2xl" },
  };
  const s = sizes[size];
  return (
    <span className="flex items-center gap-1.5 font-display font-extrabold tracking-tight">
      <span
        className={`${s.name} font-bold uppercase leading-none`}
        style={{ fontFamily: "var(--font-wordmark)" }}
      >
        Thoth
      </span>
      <IOIIcon className={`${s.icon} flex-shrink-0 text-primary`} />
    </span>
  );
}
