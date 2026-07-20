import type { ResolvedAstroPaperConfig } from "@/types/config";

/**
 * Author's job title and employer. Single source of truth shared by the
 * `Person` JSON-LD (below) and the branded OG image templates
 * (`src/utils/ogTemplate.ts`), so the role tagline isn't duplicated.
 */
export const AUTHOR_JOB_TITLE = "Sr. AI Engineer & Team Lead";
export const AUTHOR_EMPLOYER = "Delineate";

/** "Sr. AI Engineer & Team Lead @ Delineate" — used on OG images. */
export const AUTHOR_ROLE_TAGLINE = `${AUTHOR_JOB_TITLE} @ ${AUTHOR_EMPLOYER}`;

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
    jobTitle: AUTHOR_JOB_TITLE,
    worksFor: {
      "@type": "Organization",
      name: AUTHOR_EMPLOYER,
    },
    sameAs: config.socials
      .filter((social) => !social.url.startsWith("mailto:"))
      .map((social) => social.url),
  };
}
