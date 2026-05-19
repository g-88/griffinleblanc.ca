# Griffin LeBlanc Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new `griffinleblanc.ca` portfolio site that presents Griffin as a full-stack/product engineer and features Faceout, PermiPro, and Bitcoin Depot / Bitaccess.

**Architecture:** Create a small Next.js app with TypeScript, Tailwind CSS, and content stored in focused local modules. The homepage is the primary experience and is composed from reusable section components, with deploy metadata and responsive styling included from the start.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, ESLint, npm, Vercel or Cloudflare Pages deployment.

---

## File Structure

Create and own these files:

- `package.json`: project scripts and dependencies.
- `next.config.ts`: Next.js config.
- `tsconfig.json`: TypeScript config.
- `postcss.config.mjs`: Tailwind/PostCSS config.
- `eslint.config.mjs`: ESLint config for Next.js.
- `src/app/layout.tsx`: root metadata, font setup, document shell.
- `src/app/page.tsx`: homepage composition only.
- `src/app/globals.css`: Tailwind imports, CSS variables, base styles, utility classes.
- `src/data/profile.ts`: all portfolio content and links.
- `src/components/site-header.tsx`: top navigation and primary links.
- `src/components/hero-section.tsx`: hero positioning and calls to action.
- `src/components/proof-strip.tsx`: skills/domain proof list.
- `src/components/featured-work.tsx`: project and experience summaries.
- `src/components/operating-style.tsx`: working style proof section.
- `src/components/site-footer.tsx`: footer links and contact.
- `public/resume/griffin-leblanc-resume.pdf`: resume asset copied from the provided job-search folder.
- `README.md`: local setup and deployment notes.

Do not add a CMS, blog, case-study routes, or animation framework in the first version.

## Task 1: Scaffold The Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `public/.gitkeep`

- [ ] **Step 1: Scaffold with create-next-app**

Run:

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --use-npm --no-turbopack --import-alias "@/*"
```

Expected: Next.js project files are created in the repo root. If the command refuses because the directory is not empty, scaffold into `/private/tmp/griffinleblanc-ca-scaffold`, then copy the generated app files into this repo without overwriting `docs/`.

- [ ] **Step 2: Confirm scripts exist**

Open `package.json` and confirm these scripts exist:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

If `lint` is different because of the generated Next.js version, keep the generated valid lint command.

- [ ] **Step 3: Run the initial build**

Run:

```bash
npm run build
```

Expected: build completes successfully and creates `.next/`.

- [ ] **Step 4: Commit scaffold**

Run:

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs src public
git commit -m "chore: scaffold portfolio site"
```

Expected: commit succeeds.

## Task 2: Add Portfolio Content Model

**Files:**
- Create: `src/data/profile.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/data/profile.ts`**

Create:

```ts
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
      stack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Resend", "Vitest"],
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
      stack: ["SaaS", "Workflow automation", "Product discovery", "MVP planning"],
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
      stack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
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
```

- [ ] **Step 2: Temporarily render content keys**

Replace `src/app/page.tsx` with:

```tsx
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.tagline}</p>
      <ul>
        {profile.featuredWork.map((work) => (
          <li key={work.name}>{work.name}</li>
        ))}
      </ul>
    </main>
  );
}
```

- [ ] **Step 3: Run type and build check**

Run:

```bash
npm run build
```

Expected: build passes and TypeScript accepts the content model.

- [ ] **Step 4: Commit content model**

Run:

```bash
git add src/data/profile.ts src/app/page.tsx
git commit -m "feat: add portfolio content model"
```

Expected: commit succeeds.

## Task 3: Build Homepage Components

**Files:**
- Create: `src/components/site-header.tsx`
- Create: `src/components/hero-section.tsx`
- Create: `src/components/proof-strip.tsx`
- Create: `src/components/featured-work.tsx`
- Create: `src/components/operating-style.tsx`
- Create: `src/components/site-footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/components/site-header.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <a className="text-sm font-semibold tracking-[0.2em] text-stone-950 uppercase" href="#top">
        GL
      </a>
      <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm text-stone-600">
        <a className="transition hover:text-stone-950" href="#work">
          Work
        </a>
        <a className="transition hover:text-stone-950" href={profile.links.resume}>
          Resume
        </a>
        <a className="transition hover:text-stone-950" href={profile.links.email}>
          Contact
        </a>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create `src/components/hero-section.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:pb-24 lg:pt-16">
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-emerald-700">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">
          {profile.tagline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
          {profile.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="inline-flex min-h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-white transition hover:bg-stone-800" href={profile.links.email}>
            Start a conversation
          </a>
          <a className="inline-flex min-h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-medium text-stone-900 transition hover:border-stone-950" href={profile.links.resume}>
            View resume
          </a>
        </div>
      </div>
      <aside className="border-l border-stone-200 pl-6 text-sm leading-7 text-stone-600 lg:self-end">
        <p className="font-medium text-stone-950">Recent focus</p>
        <p className="mt-3">
          Regulated fintech workflows, product delivery, QA automation, rollout readiness, and full-stack systems that survive contact with production.
        </p>
      </aside>
    </section>
  );
}
```

- [ ] **Step 3: Create `src/components/proof-strip.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function ProofStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-5 sm:px-8">
        {profile.proofPoints.map((point) => (
          <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-700" key={point}>
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `src/components/featured-work.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-700">Featured work</p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-950 sm:text-4xl">
          Product briefs from shipped work, early product bets, and production fintech systems.
        </h2>
      </div>
      <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
        {profile.featuredWork.map((work) => (
          <article className="grid gap-6 py-9 lg:grid-cols-[0.45fr_1fr]" key={work.name}>
            <div>
              <h3 className="text-2xl font-semibold text-stone-950">{work.name}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{work.label}</p>
            </div>
            <div>
              <p className="text-lg leading-8 text-stone-700">{work.summary}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-stone-600 sm:grid-cols-2">
                {work.details.map((detail) => (
                  <li className="border-l border-emerald-700/35 pl-3" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {work.stack.map((item) => (
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `src/components/operating-style.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function OperatingStyle() {
  return (
    <section className="bg-stone-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Operating style</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Strong where product, systems, and rollout reality meet.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {profile.operatingStyle.map((item) => (
            <article className="border-t border-white/20 pt-5" key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `src/components/site-footer.tsx`**

Create:

```tsx
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© 2026 {profile.name}</p>
      <div className="flex flex-wrap gap-4">
        <a className="transition hover:text-stone-950" href={profile.links.email}>Email</a>
        <a className="transition hover:text-stone-950" href={profile.links.linkedin}>LinkedIn</a>
        <a className="transition hover:text-stone-950" href={profile.links.github}>GitHub</a>
        <a className="transition hover:text-stone-950" href={profile.links.resume}>Resume</a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 7: Compose `src/app/page.tsx`**

Replace with:

```tsx
import { FeaturedWork } from "@/components/featured-work";
import { HeroSection } from "@/components/hero-section";
import { OperatingStyle } from "@/components/operating-style";
import { ProofStrip } from "@/components/proof-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofStrip />
        <FeaturedWork />
        <OperatingStyle />
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 8: Run build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 9: Commit homepage components**

Run:

```bash
git add src/app/page.tsx src/components
git commit -m "feat: build portfolio homepage sections"
```

Expected: commit succeeds.

## Task 4: Apply Visual System And Metadata

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update `src/app/layout.tsx`**

Replace with:

```tsx
import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://griffinleblanc.ca"),
  title: {
    default: "Griffin LeBlanc | Full-stack Product Engineer",
    template: "%s | Griffin LeBlanc",
  },
  description:
    "Full-stack product engineer building production web applications, regulatory logic, internal tooling, QA automation, and rollout workflows for operationally complex teams.",
  openGraph: {
    title: "Griffin LeBlanc | Full-stack Product Engineer",
    description:
      "Product-minded full-stack engineering across fintech, regulatory logic, internal tools, QA automation, and product delivery.",
    url: "https://griffinleblanc.ca",
    siteName: "Griffin LeBlanc",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update `src/app/globals.css`**

Replace with:

```css
@import "tailwindcss";

:root {
  --background: #f7f4ee;
  --foreground: #1c1917;
}

html {
  scroll-behavior: smooth;
}

body {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(247, 244, 238, 0.92)),
    var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), Arial, Helvetica, sans-serif;
}

h1,
h2,
h3 {
  font-family: var(--font-newsreader), Georgia, serif;
  letter-spacing: 0;
}

::selection {
  background: #047857;
  color: #ffffff;
}
```

- [ ] **Step 3: Check generated Tailwind compatibility**

Run:

```bash
npm run build
```

Expected: build passes. If Tailwind errors because the generated version expects `@tailwind base; @tailwind components; @tailwind utilities;`, replace the import line in `globals.css` with those three directives and rerun.

- [ ] **Step 4: Commit visual system**

Run:

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "style: apply portfolio visual system"
```

Expected: commit succeeds.

## Task 5: Add Resume Asset And README

**Files:**
- Create: `public/resume/griffin-leblanc-resume.pdf`
- Create: `README.md`
- Modify: `src/data/profile.ts`

- [ ] **Step 1: Copy the provided resume PDF**

Run:

```bash
mkdir -p public/resume
cp "/Users/g-cash/Documents/Job Search 2026/griffin-leblanc-resume.pdf" public/resume/griffin-leblanc-resume.pdf
```

Expected: `public/resume/griffin-leblanc-resume.pdf` exists.

- [ ] **Step 2: Confirm resume link uses PDF asset**

Confirm `src/data/profile.ts` contains:

```ts
resume: "/resume/griffin-leblanc-resume.pdf",
```

- [ ] **Step 3: Create `README.md`**

Create:

````md
# griffinleblanc.ca

Portfolio site for Griffin LeBlanc, full-stack product engineer.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

The site is intended for `griffinleblanc.ca`, with DNS managed in Cloudflare.

Recommended deployment targets:

- Vercel
- Cloudflare Pages

If deploying with Cloudflare Pages, use:

- Build command: `npm run build`
- Output directory: `.next`

## Resume

The resume link points to `/resume/griffin-leblanc-resume.pdf`.
````

- [ ] **Step 4: Run build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 5: Commit docs and resume asset**

Run:

```bash
git add README.md public/resume/griffin-leblanc-resume.pdf src/data/profile.ts docs/superpowers/plans/2026-05-19-portfolio-site-implementation.md
git commit -m "docs: add portfolio setup notes and resume asset"
```

Expected: commit succeeds.

## Task 6: Verify Responsive Layout

**Files:**
- Modify only files needed to fix layout issues discovered during verification.

- [ ] **Step 1: Run development server**

Run:

```bash
npm run dev
```

Expected: dev server starts, usually at `http://localhost:3000`.

- [ ] **Step 2: Inspect desktop**

Open `http://localhost:3000` in the in-app browser or a local browser. Check 1440px width.

Expected:

- Hero is visible immediately.
- Header links do not overlap.
- Hero text wraps naturally.
- Featured work rows are readable.
- Operating style section has three balanced columns.

- [ ] **Step 3: Inspect mobile**

Check around 390px width.

Expected:

- Header remains usable.
- Hero headline fits without clipping.
- Buttons wrap cleanly.
- Proof strip chips wrap cleanly.
- Featured work rows collapse into a single column.
- Footer links wrap cleanly.

- [ ] **Step 4: Fix any layout issues**

If text is too large on mobile, reduce `text-5xl` in `HeroSection` to `text-4xl` while keeping `sm:text-6xl lg:text-7xl`.

If header links crowd, change header `gap-4` to `gap-3` and text from `text-sm` to `text-xs sm:text-sm`.

If project stack labels feel cramped, change their class from `tracking-[0.16em]` to `tracking-[0.08em]`.

- [ ] **Step 5: Run final build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 6: Commit responsive fixes**

Run:

```bash
git add src
git commit -m "fix: polish responsive portfolio layout"
```

Expected: commit succeeds if fixes were made. If no fixes were needed, skip this commit.

## Task 7: Final Verification And Repo Readiness

**Files:**
- Modify: `.gitignore` only if generated project missed standard Next.js ignores.

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: lint passes. If the generated Next.js version does not include a lint command, run `npm run build` as the primary verification and update `README.md` to remove lint references.

- [ ] **Step 2: Run build**

Run:

```bash
npm run build
```

Expected: build passes.

- [ ] **Step 3: Check git state**

Run:

```bash
git status --short
```

Expected: no uncommitted files except intentionally ignored build output.

- [ ] **Step 4: Final commit if needed**

If verification caused file changes, run:

```bash
git add README.md .gitignore src package.json package-lock.json
git commit -m "chore: prepare portfolio site for deployment"
```

Expected: commit succeeds.

## Self-Review

- Spec coverage: homepage narrative, full-stack/product positioning, Faceout, PermiPro, Bitcoin Depot / Bitaccess, responsive design, simple local content model, deploy-readiness, and no-CMS/no-blog constraints are covered.
- Scope: this plan keeps version one to a single homepage and repo setup.
- Risk: the first version links the provided PDF resume asset. A later polish pass can add a DOCX download only if recruiters specifically ask for one.
