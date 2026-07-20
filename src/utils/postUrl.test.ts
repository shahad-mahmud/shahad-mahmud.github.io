import { describe, it, expect } from "vitest";
import { buildPostUrl, postRouteSlug } from "./postUrl";

describe("buildPostUrl", () => {
  it("single category", () =>
    expect(buildPostUrl({ categories: ["Algorithms"], slug: "checking-parentheses-balance-using-stack" }))
      .toBe("/en/algorithms/checking-parentheses-balance-using-stack"));
  it("nested categories", () =>
    expect(buildPostUrl({ categories: ["problem-solving", "leetcode", "database"], slug: "combine-two-tables" }))
      .toBe("/en/problem-solving/leetcode/database/combine-two-tables"));
  it("respects permalink override", () =>
    expect(buildPostUrl({ categories: ["x"], slug: "y", permalink: "/en/custom/path" }))
      .toBe("/en/custom/path"));
  it("postRouteSlug strips /en/", () =>
    expect(postRouteSlug({ categories: ["ml", "llm"], slug: "rag" })).toBe("ml/llm/rag"));
});
