import { describe, it, expect } from "vitest";
import { slugifyCategory } from "./slugify";

describe("slugifyCategory (Jekyll parity)", () => {
  it("lowercases", () => expect(slugifyCategory("Algorithms")).toBe("algorithms"));
  it("keeps hyphens, lowercases", () => expect(slugifyCategory("How-To")).toBe("how-to"));
  it("spaces to hyphens", () => expect(slugifyCategory("problem solving")).toBe("problem-solving"));
  it("collapses and trims", () => expect(slugifyCategory("  ML  LLM ")).toBe("ml-llm"));
});
