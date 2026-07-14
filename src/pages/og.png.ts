import type { APIRoute } from "astro";
import { fontData } from "astro:assets";
import { loadOgFonts, ogFrame, renderOgPng } from "@/utils/ogTemplate";
import config from "@/config";

export const GET: APIRoute = async (context) => {
  const fonts = await loadOgFonts(
    fontData["--font-google-sans-code"],
    context.url,
  );

  const node = ogFrame({
    eyebrow: config.site.title,
    cornerLabel: new URL(config.site.url).hostname,
    heading: config.site.title,
    subheading: config.site.description,
    authorName: config.site.author,
  });

  const pngBuffer = await renderOgPng(node, fonts);

  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};
