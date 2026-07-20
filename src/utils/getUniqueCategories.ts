import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";
import { slugifyCategory } from "./slugify";

type Category = {
  category: string;
  categoryName: string;
  count: number;
};

/**
 * Builds a de-duplicated, sorted category list from posts.
 *
 * - Drafts and scheduled posts are excluded via `postFilter()`
 * - `category` is the slug used in URLs; `categoryName` is the original label for display
 * - Categories are multi-value per post, so `count` is the number of posts carrying
 *   that category slug, flattened across all posts
 * - Uniqueness is based on the slug (so differently-cased labels collapse)
 */
export function getUniqueCategories(posts: CollectionEntry<"posts">[]) {
  const byCategory = new Map<string, Category>();

  posts
    .filter(postFilter)
    .flatMap(post => post.data.categories)
    .forEach(categoryName => {
      const category = slugifyCategory(categoryName);
      const existing = byCategory.get(category);
      if (existing) {
        existing.count += 1;
      } else {
        byCategory.set(category, { category, categoryName, count: 1 });
      }
    });

  return [...byCategory.values()].sort((catA, catB) =>
    catA.category.localeCompare(catB.category)
  );
}
