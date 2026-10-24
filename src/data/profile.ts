/**
 * Career and testimonial content shared by the home page (Journey,
 * testimonial tile) and /about, so titles and dates stay in one place.
 */

export type Role = {
  org: string;
  /** Current or final title. */
  role: string;
  /** Earlier title at the same company, if any. */
  previously?: string;
  /** Short range for the home Journey tile. */
  when: string;
  /** Full range for /about. */
  dates: string;
  highlights: string[];
};

export const journey: Role[] = [
  {
    org: "Delineate (YC W25)",
    role: "Sr. AI Engineer & Team Lead",
    previously: "Senior AI Engineer, part-time from Feb 2024",
    when: "2024 →",
    dates: "Oct 2024 – present",
    highlights: [
      "Lead a 10+ person AI team inside a 20+ person tech org: set technical direction, mentor engineers and still ship production code.",
      "Rebuilt the document-parsing pipeline on vLLM and Kubernetes: 45% lower end-to-end latency, production memory leaks and pod-scaling instability fixed.",
      "Architected the multi-agent research chat on LangGraph across Claude, Gemini and OpenAI, with Qdrant RAG, sandboxed code execution and streaming.",
      "Led R&D for a top-5 global pharma client on quantitative systems pharmacology: SBML models, kinetic parameter extraction, paper-vs-simulation checks.",
      "Built the extraction eval harness (human ground truth vs model output, LLM-as-judge) and the service template the AI org now starts every service from.",
    ],
  },
  {
    org: "Giga Tech Limited",
    role: "Senior ML Engineer",
    previously: "ML Engineer, Oct 2022 – Dec 2023",
    when: "2022–24",
    dates: "Oct 2022 – Sep 2024",
    highlights: [
      "Built pre-training, data and fine-tuning pipelines for Bangla language models (BERT, XLNet, GPT-2, T5).",
      "Led the research behind BanLemma (EMNLP 2023, 96.36% accuracy) and BanNERD (NAACL 2025).",
      "Shipped a Bangla text-processing toolkit whose normalisation cut data ambiguity by about 32%, and an internal PyPI server to share it.",
    ],
  },
  {
    org: "REVE Systems",
    role: "Software Engineer",
    previously: "Junior Software Engineer, Apr 2021 – Mar 2022",
    when: "2021–22",
    dates: "Apr 2021 – Aug 2022",
    highlights: [
      "Built streaming and non-streaming Bangla speech recognition; integrating an external language model improved it about 2.2×.",
      "Helped build a 10,000-hour Bangla speech corpus with parallel transcriptions for public research use.",
      "Added knowledge-distillation continual learning to ASR, keeping 73% coverage on previous test cases while training on new data.",
    ],
  },
];

export const papers = [
  {
    short: "BanNERD",
    venue: "NAACL 2025",
    title:
      "BanNERD: A Benchmark Dataset and Context-Driven Approach for Bangla Named Entity Recognition",
    blurb: "Benchmark dataset and context-driven approach for Bangla NER.",
    result: "85k-sentence human-annotated dataset; 81.85 macro F1 across 10 entity classes.",
    url: "https://aclanthology.org/2025.findings-naacl.388/",
  },
  {
    short: "BanLemma",
    venue: "EMNLP 2023",
    title:
      "BanLemma: A Word Formation Dependent Rule and Dictionary Based Bangla Lemmatizer",
    blurb: "Rule + dictionary lemmatizer. 96.36% on human-annotated data.",
    result: "96.36% accuracy against a linguist-annotated test set.",
    url: "https://aclanthology.org/2023.findings-emnlp.241/",
  },
];

export const testimonial = {
  name: "Nafeo Alam",
  title: "Lead Software Engineer, Delineate",
  url: "https://www.linkedin.com/in/shahad-mahmud/details/recommendations/",
  /** One line for the home page. */
  pull: "One of the calmest, most level headed technical leaders I have worked with.",
  /** The full recommendation for /about, one entry per paragraph. */
  full: [
    "I have worked alongside Shahad at Delineate, where he leads our AI team, and he is one of the calmest, most level headed technical leaders I have worked with. He is young, but remarkably mature in how he approaches problems, people, and leadership.",
    "Two things stand out about Shahad. First, his judgment. He consistently makes the right call, and he does it without drama, even when the problem is ambiguous or the pressure is on. Second, his depth in AI. He understands these systems end to end, from model behavior to production architecture, and that depth shows in the quality of what our team ships.",
    "He is also a strong bridge between product and engineering. He translates in both directions, turning product intent into clear technical direction that engineers can act on, while also surfacing engineering realities in terms that the product side can actually understand. That is a rare skill, and it is a big part of why the team moves as well as it does.",
    "Shahad is easy to talk to, generous with his time, and someone people genuinely want to work with and learn from. Any team would be lucky to have him.",
  ],
};
