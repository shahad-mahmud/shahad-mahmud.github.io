import type { ResolvedAstroPaperConfig } from "@/types/config";

/**
 * Bare `Person` schema.org object (no `@context`) describing the site author.
 * Shared between the site-wide `Person` JSON-LD (Layout.astro) and the
 * `author` field of per-post `BlogPosting` JSON-LD (PostLayout.astro), so the
 * job title / employer / social links stay in one place.
 */
export function buildPersonSchema(config: ResolvedAstroPaperConfig) {
  return {
    "@type": "Person",
    name: config.site.author,
    url: config.site.url,
    jobTitle: "Sr. AI Engineer & Team Lead",
    worksFor: {
      "@type": "Organization",
      name: "Delineate",
    },
    sameAs: config.socials
      .filter(social => !social.url.startsWith("mailto:"))
      .map(social => social.url),
  };
}
