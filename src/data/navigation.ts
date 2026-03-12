/**
 * ─── Navigation Configuration ───
 * Centralizes all nav links for Header, Footer, and mobile menu.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Elevadores",
    href: "/elevadores/",
    children: [
      { label: "Catálogo de elevadores", href: "/elevadores/" },
      { label: "Elevadores de pasajeros", href: "/elevadores/elevador-pasajeros" },
      { label: "Elevadores de carga", href: "/elevadores/elevador-carga" },
      { label: "Elevador hidráulico", href: "/elevadores/elevador-hidraulico" },
      { label: "Sistema MRL", href: "/elevadores/elevador-electrico-mrl" },
      { label: "Elevador panorámico", href: "/elevadores/elevador-panoramico" },
      { label: "Elevador residencial", href: "/elevadores/elevador-residencial" },
      { label: "Accesibilidad", href: "/elevadores/elevador-discapacitados" },
    ],
  },
  {
    label: "Escaleras",
    href: "/escaleras-electricas/",
    children: [
      { label: "Catálogo escaleras", href: "/escaleras-electricas/" },
      { label: "Escalera comercial", href: "/escaleras-electricas/escalera-comercial" },
      { label: "Escalera industrial", href: "/escaleras-electricas/escalera-industrial" },
      { label: "Escalera exterior", href: "/escaleras-electricas/escalera-exterior" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios/",
    children: [
      { label: "Todos los servicios", href: "/servicios/" },
      { label: "Instalación", href: "/servicios/instalacion" },
      { label: "Mantenimiento", href: "/servicios/mantenimiento" },
      { label: "Modernización", href: "/servicios/modernizacion" },
      { label: "Certificación NOM-147", href: "/servicios/certificacion" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Cotizar", href: "/cotizar" },
];

export const footerNav: Record<string, NavItem[]> = {
  elevadores: [
    { label: "Elevadores de pasajeros", href: "/elevadores/elevador-pasajeros" },
    { label: "Elevadores de carga", href: "/elevadores/elevador-carga" },
    { label: "Elevador hidráulico", href: "/elevadores/elevador-hidraulico" },
    { label: "Sistema MRL", href: "/elevadores/elevador-electrico-mrl" },
    { label: "Elevador residencial", href: "/elevadores/elevador-residencial" },
    { label: "Accesibilidad", href: "/elevadores/elevador-discapacitados" },
  ],
  escaleras: [
    { label: "Escaleras eléctricas", href: "/escaleras-electricas/" },
    { label: "Escalera comercial", href: "/escaleras-electricas/escalera-comercial" },
    { label: "Plataformas elevadoras", href: "/plataformas/" },
    { label: "Plataforma discapacitados", href: "/plataformas/plataforma-discapacitados" },
  ],
  servicios: [
    { label: "Instalación", href: "/servicios/instalacion" },
    { label: "Mantenimiento", href: "/servicios/mantenimiento" },
    { label: "Modernización", href: "/servicios/modernizacion" },
    { label: "Certificación NOM-147", href: "/servicios/certificacion" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Cobertura CDMX", href: "/zonas/cdmx" },
    { label: "Blog", href: "/blog/" },
    { label: "Cotizar", href: "/cotizar" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
};
