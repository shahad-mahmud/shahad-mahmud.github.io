const ACRONYMS = new Set(["ai", "llm", "ml", "nlp"]);

/** Display label for a category slug: "system-design" → "System design", "ml" → "ML". */
export function categoryLabel(category: string): string {
  if (ACRONYMS.has(category.toLowerCase())) return category.toUpperCase();
  return (category.charAt(0).toUpperCase() + category.slice(1)).replace(
    /-/g,
    " "
  );
}
