const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.thothaigh.com";

// TODO: verify the exact signup/onboarding entry route in the app repo
export const SIGNUP_URL = `${APP_URL}/onboarding`;
export const LOGIN_URL = `${APP_URL}/login`;

// Base URL of the marketing site — used in sitemap and structured data
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://thothfood.com";

// Base URL of the Railway API backend — used for contact form POST
export const API_URL = import.meta.env.VITE_API_URL ?? APP_URL;

// TODO: replace after Meta central-number verification
export const WHATSAPP_ORDER_URL = "https://wa.me/233000000000";

export const CONTACT_EMAIL = "aithoth6@gmail.com";

export const SOCIAL_URLS = {
  instagram: "#",
  twitter: "#",
  facebook: "#",
};
