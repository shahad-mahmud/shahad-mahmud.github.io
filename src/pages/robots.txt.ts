import type { APIRoute } from "astro";
import config from "@/config";

// GEO-open: no Disallow for AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
const getRobotsTxt = (base: string) => `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml

# LLM/GEO
llms.txt: ${base}/llms.txt
`;

export const GET: APIRoute = () => {
  const base = config.site.url.replace(/\/$/, "");
  return new Response(getRobotsTxt(base), {
    headers: { "Content-Type": "text/plain" },
  });
};
