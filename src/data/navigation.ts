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
  { label: "Servicios", href: "/#servicios" },
  { label: "Marcas", href: "/#marcas" },
  { label: "Equipos", href: "/#equipos" },
  { label: "Contacto", href: "/#cotizador" },
];

export const footerNav: Record<string, NavItem[]> = {
  servicios: [
    { label: "Mantenimiento preventivo", href: "/servicios/mantenimiento-preventivo" },
    { label: "Mantenimiento correctivo", href: "/servicios/mantenimiento-correctivo" },
    { label: "Emergencias 24/7", href: "/servicios/emergencias" },
    { label: "Modernización", href: "/servicios/modernizacion" },
    { label: "Instalación", href: "/servicios/instalacion" },
    { label: "Auditoría NOM-207", href: "/servicios/auditoria" },
  ],
  equipos: [
    { label: "Elevadores de pasajeros", href: "/equipos/elevadores-pasajeros" },
    { label: "Escaleras eléctricas", href: "/equipos/escaleras-electricas" },
    { label: "Elevadores residenciales", href: "/equipos/elevadores-residenciales" },
    { label: "Montacargas", href: "/equipos/montacargas" },
    { label: "Plataformas de accesibilidad", href: "/equipos/plataformas-accesibilidad" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Clientes", href: "/#resenas" },
    { label: "Cobertura", href: "/#sectores" },
    { label: "Cotizar en línea", href: "/#cotizador" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
};
