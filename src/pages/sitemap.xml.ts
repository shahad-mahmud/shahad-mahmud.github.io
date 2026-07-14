import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildPostUrl } from "@/utils/postUrl";
import config from "@/config";

export const GET: APIRoute = async () => {
  const base = config.site.url.replace(/\/$/, "");
  const posts = (await getCollection("posts")).filter(
    p => !p.data.draft && (p.data.language ?? "en") === "en"
  );
  const urls = [
    "/", // no trailing slash
    "/blogs", // no trailing slash
    "/categories/", // trailing slash
    "/tags/", // trailing slash
    ...posts.map(p => buildPostUrl({ ...p.data, slug: p.id })), // no trailing slash
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
