import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { fontData } from "astro:assets";
import { postRouteSlug } from "@/utils/postUrl";
import { loadOgFonts, ogFrame, renderOgPng } from "@/utils/ogTemplate";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then((p) =>
    p.filter(
      // Posts with an explicit `ogImage` in frontmatter use that image
      // directly (see src/pages/en/[...slug]/index.astro) and short-circuit
      // this generator entirely — no index.png is built for them.
      ({ data }) =>
        (data.language ?? "en") === "en" && !data.draft && !data.ogImage,
    ),
  );

  return posts.map((post) => ({
    params: { slug: postRouteSlug({ ...post.data, slug: post.id }) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props, url }) => {
  if (!config.features.dynamicOgImage) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }

  const fonts = await loadOgFonts(fontData["--font-google-sans-code"], url);

  const node = ogFrame({
    eyebrow: config.site.title,
    cornerLabel: new URL(config.site.url).hostname,
    heading: props.data.title,
    authorName: props.data.author,
  });

  const pngBuffer = await renderOgPng(node, fonts);

  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};
