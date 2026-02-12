/**
 * ─── Site-wide Configuration ───
 * SAELES - Elevadores y Escaleras Eléctricas
 * Single source of truth for SEO defaults, branding, and contact info.
 */

export const SITE = {
  name: "SAELES",
  fullName: "SAELES Elevadores y Escaleras Eléctricas",
  tagline: "Tecnología que eleva tu confianza",
  url: "https://saeles.com.mx",
  locale: "es-MX",
  language: "es",

  // ─── SEO Defaults ───
  seo: {
    title: "SAELES — Venta, instalación, reparación y mantenimiento de elevadores en México",
    titleTemplate: "%s | SAELES",
    description:
      "Servicio profesional de elevadores y escaleras eléctricas en todo México. Reparación multimarca, mantenimiento NOM-207, modernización y venta. Cotiza en línea.",
    image: "/images/og-default.jpg",
    type: "website" as const,
  },

  // ─── Social & Contact ─── <!-- PLACEHOLDER: Actualizar con datos reales -->
  social: {
    twitter: "@saaboradores",
    facebook: "https://facebook.com/saaboradores",
    instagram: "https://instagram.com/saaboradores",
  },

  contact: {
    email: "contacto@saeles.com.mx", // PLACEHOLDER
    phone: "+52 55 XXXX XXXX", // PLACEHOLDER
    phoneRaw: "+5255XXXXXXXX", // PLACEHOLDER
    address: "Av. Insurgentes Sur 1863-302 B, Guadalupe Inn, Álvaro Obregón, 01020 Ciudad de México, CDMX",
    whatsapp: "5255XXXXXXXX", // PLACEHOLDER
  },

  // ─── Organization (JSON-LD) ───
  organization: {
    name: "SAELES Elevadores y Escaleras Eléctricas",
    logo: "/images/logo.png",
    foundingDate: "2010", // PLACEHOLDER
    sameAs: [
      "https://facebook.com/saaboradores",
      "https://instagram.com/saaboradores",
    ],
  },

  // ─── Coverage Areas ───
  areaServed: [
    "Ciudad de México",
    "Monterrey",
    "Guadalajara",
    "Puebla",
    "Cancún",
    "Querétaro",
    "Tijuana",
    "León",
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
