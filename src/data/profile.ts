export const profile = {
  name: "Griffin LeBlanc",
  role: "Full-stack product engineer",
  location: "Ottawa, ON",
  email: "griffin.leblanc@gmail.com",
  tagline:
    "I build full-stack product systems for regulated, operationally complex teams.",
  summary:
    "Product-minded full-stack software engineer with a finance and operations background, building production web applications, regulatory logic, internal tooling, QA automation, and rollout workflows across fintech environments.",
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
      name: "Faceout",
      label: "Founder / Developer",
      summary:
        "Ottawa-based web studio focused on modern local-business websites, SEO, Google Business Profile support, reusable components, and production client delivery.",
      details: [
        "Ships polished local-business sites with a practical focus on discoverability and conversion.",
        "Uses reusable monorepo patterns and component systems to keep client delivery fast and consistent.",
        "Includes production delivery work for James Melia Financial Services.",
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
      summary:
        "Municipal permit SaaS concept combining product discovery, workflow automation, and full-stack implementation planning.",
      details: [
        "Shaped MVP direction around permit workflows and municipal process friction.",
        "Mapped automation opportunities where applicants, contractors, and municipalities lose time.",
        "Balanced product discovery with implementation planning for a focused first release.",
      ],
      stack: [
        "SaaS",
        "Workflow automation",
        "Product discovery",
        "MVP planning",
      ],
    },
    {
      name: "Bitcoin Depot / Bitaccess",
      label: "Production fintech engineering",
      summary:
        "Full-stack engineering and rollout ownership across regulated fintech products, internal systems, QA workflows, and production troubleshooting.",
      details: [
        "Owned a custom state-based regulatory rules epic using json-rules-engine and production scripts.",
        "Contributed to Cash On-Ramp, transforming kiosk workflows so customers can deposit cash and buy BTC asynchronously.",
        "Improved QA throughput with remote BTM simulator testing and clearer analytics log inspection.",
        "Supported acquisition rollout work involving 8,000+ Bitcoin ATMs while bridging engineering, operations, compliance, support, and sales.",
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
  ],
  operatingStyle: [
    {
      title: "Product-minded",
      body: "I care about the workflow, the user, and the operational consequence of the feature, not just the ticket boundary.",
    },
    {
      title: "Operations-aware",
      body: "I bring implementation, rollout, QA, support, and compliance context into engineering decisions.",
    },
    {
      title: "Useful in ambiguity",
      body: "I can turn unclear production issues, rollout needs, and business constraints into concrete technical next steps.",
    },
  ],
} as const;
