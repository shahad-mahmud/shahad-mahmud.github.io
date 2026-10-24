import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import rehypeExternalLinks from "rehype-external-links";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx()],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [
        rehypeCallouts,
        [
          rehypeExternalLinks,
          {
            // Only matches absolute http(s) URLs (external links); relative
            // internal links are left untouched.
            target: "_blank",
            rel: ["nofollow", "noopener", "noreferrer"],
          },
        ],
      ],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    // "Ink & Signal" type system: display (headings, big numbers), sans
    // (body/UI), mono (labels, eyebrows, code). See src/styles/theme.css.
    {
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage-grotesque",
      provider: fontProviders.google(),
      fallbacks: ["system-ui", "sans-serif"],
      weights: [500, 700, 800],
      styles: ["normal"],
      formats: ["woff2"],
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.google(),
      fallbacks: ["system-ui", "sans-serif"],
      weights: [400, 500, 600],
      styles: ["normal"],
      formats: ["woff2"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.google(),
      fallbacks: ["ui-monospace", "monospace"],
      weights: [400, 500],
      styles: ["normal"],
      formats: ["woff2"],
    },
    // OG image font only (src/utils/ogTemplate.ts) — not loaded on pages.
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff", "ttf"],
    },
    // Serif reading face — scoped to post body prose only (see typography.css).
    // Self-hosted via Astro's font API (downloaded at build time, served from
    // our own origin), so no external request / preconnect is needed.
    {
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      provider: fontProviders.google(),
      fallbacks: ["Georgia", "serif"],
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
      formats: ["woff2"],
    },
    // Signature Bangla hero line only — one weight, minimal payload.
    {
      name: "Noto Serif Bengali",
      cssVariable: "--font-noto-serif-bengali",
      provider: fontProviders.google(),
      fallbacks: ["serif"],
      weights: [600],
      styles: ["normal"],
      subsets: ["bengali"],
      formats: ["woff2"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
