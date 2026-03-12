/**
 * ─── Site-wide Configuration ───
 * Sanyo Elevadores y Escaleras Eléctricas
 * Single source of truth for SEO defaults, branding, and contact info.
 */

export const SITE = {
  name: "Sanyo",
  fullName: "Sanyo Elevadores y Escaleras Eléctricas",
  tagline: "Elevamos tu confianza en cada piso",
  url: "https://sanyo-elevadoresyescaleras.com",
  locale: "es-MX",
  language: "es",

  // ─── SEO Defaults ───
  seo: {
    title: "Sanyo — Venta, instalación y mantenimiento de elevadores y escaleras eléctricas en México",
    titleTemplate: "%s | Sanyo Elevadores",
    description:
      "Empresa líder en elevadores y escaleras eléctricas en CDMX y toda la República. Instalación, mantenimiento, modernización y certificación NOM-147-SCFI. Cotiza gratis.",
    image: "/images/og-default.jpg",
    type: "website" as const,
  },

  // ─── Social & Contact ───
  social: {
    twitter: "@sanyoelevadores",
    facebook: "https://facebook.com/sanyoelevadores",
    instagram: "https://instagram.com/sanyoelevadores",
  },

  contact: {
    email: "contacto@sanyo-elevadoresyescaleras.com",
    phone: "+52 55 2078 0102",
    phoneRaw: "+525520780102",
    address: "Ciudad de México, CDMX",
    whatsapp: "525520780102",
  },

  // ─── Organization (JSON-LD) ───
  organization: {
    name: "Sanyo Elevadores y Escaleras Eléctricas",
    logo: "/images/logo.png",
    foundingDate: "2005",
    sameAs: [
      "https://facebook.com/sanyoelevadores",
      "https://instagram.com/sanyoelevadores",
    ],
  },

  // ─── Coverage Areas ───
  areaServed: [
    "Ciudad de México",
    "Estado de México",
    "Querétaro",
    "Monterrey",
    "Guadalajara",
    "Puebla",
    "Cancún",
    "Tijuana",
  ],
} as const;

/** Type helper for SEO props */
export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  canonical?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};
