import type { FontData } from "astro:assets";
import { experimental_getFontFileURL } from "astro:assets";
import satori from "satori";
import sharp from "sharp";
import { getFontPathByWeight } from "@/utils/getFontPathByWeight";
import { AUTHOR_ROLE_TAGLINE } from "@/utils/structuredData";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const FONT_FAMILY = "Google Sans Code";

/**
 * Brand palette for OG images, mirrored from the dark theme in
 * `src/styles/theme.css` (`[data-theme="dark"]`) so social-card previews
 * match the site's own dark mode rather than an arbitrary third palette.
 */
export const ogColors = {
  background: "#212737",
  foreground: "#eaedf3",
  accent: "#ff6b01",
  accentForeground: "#ffffff",
  muted: "#343f60",
  mutedForeground: "#afb9ca",
};

/**
 * Loads the regular + bold weights of the site font as Satori font
 * descriptors. Shared by every `*.png.ts` OG endpoint so they stay in sync.
 */
export async function loadOgFonts(fonts: FontData[], url: URL) {
  const regularFontPath = getFontPathByWeight(fonts, 400);
  const boldFontPath = getFontPathByWeight(fonts, 700);

  if (regularFontPath === undefined || boldFontPath === undefined) {
    throw new Error("Cannot find the font path.");
  }

  const [regularData, boldData] = await Promise.all([
    fetch(experimental_getFontFileURL(regularFontPath, url)).then((res) =>
      res.arrayBuffer(),
    ),
    fetch(experimental_getFontFileURL(boldFontPath, url)).then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  return [
    {
      name: FONT_FAMILY,
      data: regularData,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: FONT_FAMILY,
      data: boldData,
      weight: 700 as const,
      style: "normal" as const,
    },
  ];
}

/** Renders a Satori node tree to a PNG buffer at the standard OG size. */
export async function renderOgPng(
  node: Parameters<typeof satori>[0],
  fonts: Awaited<ReturnType<typeof loadOgFonts>>,
): Promise<Buffer> {
  const svg = await satori(node, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    embedFont: true,
    fonts,
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
}

type OgFrameOptions = {
  /** Small top-left kicker, e.g. the site's short name. */
  eyebrow: string;
  /** Top-right corner label, e.g. the site hostname. */
  cornerLabel: string;
  /** Large headline — post title or site title. */
  heading: string;
  /** Optional line under the headline (site description). Omit on post OGs. */
  subheading?: string;
  /** Author's display name, shown bold in the footer as brand identity. */
  authorName: string;
};

/**
 * Shared branded chrome for every dynamically-generated OG image: dark
 * background, accent top bar, and an author + role tagline footer so every
 * social card is recognizably "Shahad Mahmud" regardless of which page it
 * came from. Callers only supply the page-specific heading/subheading.
 */
export function ogFrame({
  eyebrow,
  cornerLabel,
  heading,
  subheading,
  authorName,
}: OgFrameOptions) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: ogColors.background,
        color: ogColors.foreground,
        fontFamily: FONT_FAMILY,
        padding: "56px 72px",
        position: "relative",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "14px",
              background: ogColors.accent,
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 28,
              fontWeight: 700,
              color: ogColors.accent,
            },
            children: [
              { type: "span", props: { children: eyebrow } },
              {
                type: "span",
                props: {
                  style: { color: ogColors.mutedForeground, fontWeight: 400 },
                  children: cornerLabel,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            },
            children: [
              {
                type: "p",
                props: {
                  style: {
                    fontSize: 68,
                    fontWeight: 700,
                    lineHeight: 1.15,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  children: heading,
                },
              },
              ...(subheading
                ? [
                    {
                      type: "p",
                      props: {
                        style: {
                          fontSize: 30,
                          color: ogColors.mutedForeground,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                        children: subheading,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              paddingTop: "24px",
              borderTop: `2px solid ${ogColors.muted}`,
              fontSize: 28,
            },
            children: [
              {
                type: "span",
                props: { style: { fontWeight: 700 }, children: authorName },
              },
              {
                type: "span",
                props: {
                  style: { color: ogColors.mutedForeground, fontSize: 24 },
                  children: AUTHOR_ROLE_TAGLINE,
                },
              },
            ],
          },
        },
      ],
    },
  };
}
