export type FeaturedRestaurant = {
  name: string;
  cuisine: string;
  area: string;
  image: string;
  waUrl?: string; // per-restaurant WhatsApp link — optional until verified
};

export const featuredRestaurants: FeaturedRestaurant[] = [
  {
    name: "Severin Plus Restaurant, TF Hostel",
    cuisine: "Local Ghanaian",
    area: "Legon",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=120&h=120&fit=crop&q=80",
  },
  {
    name: "The Jollof Spot",
    cuisine: "West African",
    area: "Osu",
    image: "https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?w=120&h=120&fit=crop&q=80",
  },
  {
    name: "Burger Republic",
    cuisine: "Burgers & Grills",
    area: "Airport Hills",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=120&h=120&fit=crop&q=80",
  },
];
