export const profile = {
  name: "Griffin LeBlanc",
  role: "Full-stack product engineer",
  location: "Ottawa, ON",
  email: "griffin.leblanc@gmail.com",
  tagline:
    "I build full-stack products for messy operational problems.",
  summary:
    "I’m a full-stack engineer with a finance and operations background. Most of my work sits where product, compliance, QA, and support all have opinions.",
  links: {
    email: "mailto:griffin.leblanc@gmail.com",
    github: "https://github.com/g-88",
    linkedin: "https://www.linkedin.com/in/griffinleblanc",
    resume: "/resume/griffin-leblanc-resume.pdf",
  },
  proofPoints: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "Playwright",
    "Fintech",
    "Regulatory logic",
    "Internal tools",
    "Automation",
  ],
  featuredWork: [
    {
      name: "Bitcoin Depot / Bitaccess",
      label: "Production fintech engineering",
      summary:
        "Fintech product work that had to survive real kiosks, real regulations, and real rollout pressure.",
      details: [
        "Built state-based regulatory rules with json-rules-engine and production scripts.",
        "Led pricing and fees work that touched customer-facing flows, rules, and production rollout details.",
        "Became a go-to engineer for production rollouts, escalations, and cross-repo troubleshooting.",
      ],
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AWS",
        "Docker",
      ],
    },
    {
      name: "Faceout",
      label: "Founder / Developer",
      siteUrl: "https://faceout.ca",
      summary:
        "My small Ottawa web studio for local businesses that need a useful site, not a brand manifesto.",
      details: [
        "Focuses on local search, clean pages, and obvious ways for customers to get in touch.",
        "Uses reusable pieces so projects move quickly without all looking the same.",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "Resend",
        "Vitest",
      ],
    },
    {
      name: "PermiPro",
      label: "Founding Engineer",
      siteUrl: "https://permipro.io",
      summary:
        "Early SaaS work around municipal permits: forms, follow-ups, missing context, and admin drag.",
      details: [
        "Mapped where applicants, contractors, and municipalities lose the most time.",
        "Kept the MVP pointed at one useful workflow instead of a giant platform.",
      ],
      stack: [
        "SaaS",
        "Workflow automation",
        "Product discovery",
        "MVP planning",
      ],
    },
  ],
  operatingStyle: [
    {
      title: "I like messy workflows.",
      body: "The useful problems are usually half product, half operations, and only then code.",
    },
    {
      title: "I care about rollout.",
      body: "A feature is not done just because it works locally. Someone has to test it, ship it, support it, and explain it.",
    },
    {
      title: "I stay close to production.",
      body: "Logs, edge cases, customer impact, support noise, and weird constraints all belong in the engineering conversation.",
    },
  ],
} as const;
