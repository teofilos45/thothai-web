type CatalogueItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  added?: boolean;
};

type CatalogueSection = {
  title: string;
  items: CatalogueItem[];
};

export function WhatsAppCatalogue({
  restaurant,
  subtitle = "Menu",
  sections,
  cartCount = 0,
  cartTotal = "",
}: {
  restaurant: string;
  subtitle?: string;
  sections: CatalogueSection[];
  cartCount?: number;
  cartTotal?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[2.25rem] border-[10px] border-dark bg-dark shadow-[0_30px_80px_-20px_oklch(0.18_0.005_50/0.45)]">
      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-1 text-[10px] font-semibold"
        style={{ background: "#054740", color: "rgba(255,255,255,0.85)" }}
      >
        <span>9:41</span>
        <span>●●●● 5G ■</span>
      </div>

      {/* Catalogue header bar */}
      <div
        className="flex items-center gap-2.5 px-3 py-2"
        style={{ background: "#075E54", color: "white" }}
      >
        <span className="text-xl font-light opacity-70">‹</span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold leading-tight truncate">{restaurant}</p>
          <p className="text-[11px] opacity-65">{subtitle}</p>
        </div>
        <div className="relative text-base leading-none">
          🛒
          {cartCount > 0 && (
            <span
              className="absolute -top-1 -right-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full text-[8px] font-black text-white"
              style={{ background: "#25D366", border: "1.5px solid #075E54" }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Catalogue body */}
      <div className="bg-white" style={{ maxHeight: "340px", overflowY: "hidden" }}>
        {sections.map((section) => (
          <div key={section.title}>
            <p
              className="px-3 pt-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "#888" }}
            >
              {section.title}
            </p>
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-3 py-2"
                style={{ borderBottom: "1px solid #f2f2f2" }}
              >
                {/* Thumbnail */}
                <div
                  className="h-[54px] w-[54px] flex-shrink-0 rounded-lg bg-gray-100"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[12.5px] font-semibold leading-tight"
                    style={{ color: "#111" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="mt-0.5 truncate text-[10.5px] leading-tight"
                    style={{ color: "#888" }}
                  >
                    {item.desc}
                  </p>
                  <p className="mt-0.5 text-[12px] font-bold" style={{ color: "#075E54" }}>
                    {item.price}
                  </p>
                </div>
                {/* Add / Added button */}
                <div
                  className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full text-[15px] font-black text-white"
                  style={{
                    background: item.added ? "#075E54" : "#25D366",
                    boxShadow: item.added
                      ? "0 2px 4px rgba(7,94,84,.25)"
                      : "0 2px 6px rgba(37,211,102,.3)",
                  }}
                >
                  {item.added ? "✓" : "+"}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Place Your Order bar */}
      {cartCount > 0 && (
        <div
          className="flex items-center justify-between px-4 py-3 text-[13px] font-bold text-white"
          style={{ background: "#25D366" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="rounded-md px-1.5 py-0.5 text-[11px] font-black"
              style={{ background: "rgba(255,255,255,0.25)" }}
            >
              {cartCount}
            </span>
            Place Your Order
          </div>
          <span>{cartTotal}</span>
        </div>
      )}
    </div>
  );
}
