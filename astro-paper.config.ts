import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://shahadmahmud.com",
    title: "Shahad Mahmud",
    description:
      "Personal website of Shahad Mahmud - Sr. AI Engineer & Team Lead at Delineate (YC W25), building LLM and agentic systems for pharmaceutical research. EMNLP 2023 & NAACL 2025 author.",
    author: "Md. Shahad Mahmud Chowdhury",
    profile: "https://shahadmahmud.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Dhaka",
    dir: "ltr",
  },
  posts: {
    perPage: 20,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/shahad-mahmud" },
    { name: "linkedin", url: "https://www.linkedin.com/in/shahad-mahmud/" },
    { name: "x",        url: "https://x.com/ShahadMahmud001" },
    { name: "facebook", url: "https://www.facebook.com/shahad001/" },
    { name: "mail",     url: "mailto:shahad9381@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});