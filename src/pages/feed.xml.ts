import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { buildPostUrl } from "@/utils/postUrl";
import config from "@/config";

export async function GET() {
  const posts = await getCollection(
    "posts",
    ({ data }) => !data.draft && (data.language ?? "en") === "en"
  );
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    trailingSlash: false,
    items: sortedPosts.map(({ id, data }) => ({
      link: buildPostUrl({ ...data, slug: id }),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
