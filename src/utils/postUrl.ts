import { slugifyCategory } from "./slugify";

type PostUrlInput = {
  language?: string;
  categories: string[];
  slug: string;
  permalink?: string;
};

/**
 * Reproduces Jekyll's permalink template so post routes land on the exact
 * same URLs as the legacy site: /:language/:categories/:slug.
 * If `permalink` is set (legacy front-matter override), it is returned verbatim.
 */
export function buildPostUrl(input: PostUrlInput): string {
  if (input.permalink) return input.permalink;
  const lang = input.language ?? "en";
  const cats = input.categories.map(slugifyCategory).filter(Boolean).join("/");
  return `/${lang}/${cats}/${input.slug}`;
}

/**
 * The `[...slug]` route param under `/en/` — i.e. buildPostUrl's path
 * minus the leading `/en/` (or `/bn/`) prefix.
 */
export function postRouteSlug(input: PostUrlInput): string {
  if (input.permalink) return input.permalink.replace(/^\/(en|bn)\//, "");
  const cats = input.categories.map(slugifyCategory).filter(Boolean).join("/");
  return `${cats}/${input.slug}`;
}
