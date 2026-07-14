import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { buildPostUrl } from "@/utils/postUrl";
import config from "@/config";

export const GET: APIRoute = async () => {
  const base = config.site.url.replace(/\/$/, "");
  const posts = await getCollection(
    "posts",
    ({ data }) => !data.draft && (data.language ?? "en") === "en"
  );
  const sortedPosts = getSortedPosts(posts);

  const lines = sortedPosts.map(({ id, data }) => {
    const url = `${base}${buildPostUrl({ ...data, slug: id })}`;
    return `- [${data.title}](${url}): ${data.description}`;
  });

  const body = `# ${config.site.title}

${config.site.description}

${lines.join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
