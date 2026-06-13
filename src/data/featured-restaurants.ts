export type FeaturedRestaurant = {
  name: string;
  cuisine: string;
  area: string;
  emoji: string;
  waUrl?: string; // per-restaurant WhatsApp link — optional until verified
};

// TODO: replace placeholder entries with real onboarded restaurants before launch
export const featuredRestaurants: FeaturedRestaurant[] = [
  { name: "Auntie Muni's Kitchen", cuisine: "Local Ghanaian", area: "East Legon", emoji: "🍲" },
  { name: "The Jollof Spot", cuisine: "West African", area: "Osu", emoji: "🍛" },
  { name: "Burger Republic", cuisine: "Burgers & Grills", area: "Airport Hills", emoji: "🍔" },
];
