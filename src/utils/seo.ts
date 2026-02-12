/**
 * ─── SEO Utilities ───
 * Helpers for building canonical URLs, formatting titles, and generating
 * structured data (JSON-LD).
 */

import { SITE, type SEOProps } from "@data/site";

/** Build a full canonical URL from a relative path */
export function canonicalURL(path: string): string {
  const base = SITE.url.endsWith("/") ? SITE.url.slice(0, -1) : SITE.url;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Apply the title template from site config */
export function formatTitle(title?: string): string {
  if (!title) return SITE.seo.title;
  return SITE.seo.titleTemplate.replace("%s", title);
}

/** Merge page-level SEO props with site defaults */
export function resolveSEO(props: SEOProps) {
  return {
    title: formatTitle(props.title),
    description: props.description ?? SITE.seo.description,
    image: props.image ?? SITE.seo.image,
    type: props.type ?? SITE.seo.type,
    noindex: props.noindex ?? false,
    canonical: props.canonical,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author,
  };
}

/** Generate Organization JSON-LD */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.organization.name,
    url: SITE.url,
    logo: canonicalURL(SITE.organization.logo),
    foundingDate: SITE.organization.foundingDate,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.contact.phone,
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    sameAs: SITE.organization.sameAs,
  };
}

/** Generate WebSite JSON-LD with SearchAction */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.locale,
  };
}

/** Generate Article JSON-LD for blog posts */
export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image ? canonicalURL(article.image) : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.author ?? SITE.organization.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.organization.name,
      logo: {
        "@type": "ImageObject",
        url: canonicalURL(SITE.organization.logo),
      },
    },
  };
}

/** Generate BreadcrumbList JSON-LD */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalURL(item.url),
    })),
  };
}
