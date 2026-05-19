# Griffin LeBlanc Portfolio Site Design

## Purpose

Create a simple, beautiful portfolio site for `griffinleblanc.ca` that supports Griffin's full-stack/product engineering job search. The site should position Griffin as a product-minded full-stack engineer who ships production web applications, regulatory logic, internal tooling, QA automation, and rollout workflows for operationally complex teams.

The site should feel credible, calm, and specific. It should not feel like a flashy creative portfolio, a generic developer template, or a startup landing page.

## Primary Audience

The primary audience is hiring managers, founders, engineering managers, and product-minded technical leads evaluating Griffin for full-stack/product engineer roles.

The site should help them quickly understand:

- Griffin builds complete product systems, not isolated UI pieces.
- Griffin has real fintech and regulated-environment experience.
- Griffin can operate across engineering, operations, QA, compliance, support, sales, and product context.
- Griffin has enough visual/product taste to ship polished user-facing work.

## Positioning

Primary positioning:

> Griffin LeBlanc builds full-stack product systems for regulated, operationally complex teams.

Supporting themes:

- Product-minded full-stack software engineer.
- Finance and operations background.
- Production web apps, regulatory logic, internal tooling, QA automation, and rollout workflows.
- High-throughput delivery and production troubleshooting.
- AI-assisted development workflows used pragmatically to ship and debug faster.

## Visual Direction

The approved direction is **Quiet Product Operator + Technical Field Notes**.

The visual system should be:

- Clean, editorial, and high-trust.
- Mostly light background with charcoal text.
- Restrained use of one accent color.
- Sharp typography with clear hierarchy.
- Subtle dividers and tight layout rhythm.
- Text-forward, with project sections written like product briefs.
- Polished enough to show taste, but restrained enough to feel senior.

Avoid:

- Flashy animation as the main personality.
- Decorative clutter, gradient-heavy sections, or gimmicky developer motifs.
- Oversized marketing-page hero treatment.
- Generic card-heavy portfolio templates.
- A one-note color palette dominated by a single hue family.

## Content Architecture

### Home

The homepage is the primary experience. It should be strong enough that a visitor does not need to browse deeply to understand Griffin's value.

Sections:

1. **Hero**
   - Griffin's name.
   - Full-stack/product engineer role framing.
   - Primary positioning statement.
   - Short supporting copy based on the resume.
   - Direct links to resume, email, LinkedIn, and GitHub.

2. **Proof Strip**
   - Concise skills and domains:
     - React
     - Next.js
     - TypeScript
     - Node.js
     - MongoDB
     - AWS
     - Docker
     - Playwright
     - fintech
     - regulatory logic
     - internal tools
     - automation

3. **Featured Work**
   - Faceout
   - PermiPro
   - Bitcoin Depot / Bitaccess

4. **Operating Style**
   - Product-minded.
   - Operations-aware.
   - Strong in ambiguity.
   - Comfortable bridging engineering and business context.
   - Useful in production incidents, rollouts, and cross-functional troubleshooting.

5. **Footer**
   - Resume link.
   - Email.
   - LinkedIn.
   - GitHub.

### Featured Work Details

#### Faceout

Frame Faceout as a practical product and delivery signal:

- Ottawa-based web studio.
- Modern local-business websites.
- SEO and Google Business Profile support.
- Reusable components and monorepo delivery patterns.
- Production client delivery, including James Melia Financial Services.

#### PermiPro

Frame PermiPro as product discovery and SaaS thinking:

- Municipal permit SaaS concept.
- Workflow automation.
- MVP shaping.
- Product discovery.
- Full-stack implementation planning.

#### Bitcoin Depot / Bitaccess

Frame this as real-world production ownership:

- Full-stack product work across React, Next.js, TypeScript, Node.js, MongoDB, AWS, Docker, and internal systems.
- Custom state-based regulatory rules epic using `json-rules-engine` and production scripts.
- Key contributor to Cash On-Ramp.
- Production deployments and troubleshooting across repositories.
- QA throughput improvements via remote BTM simulator testing and improved analytics log inspection.
- Bitaccess rollout and technical account background, including 8,000+ Bitcoin ATM acquisition onboarding.

## Technical Direction

Create a new repository for the site rather than building it under Faceout.

Preferred repo/project name:

- `griffinleblanc.ca`

Preferred stack:

- Next.js
- TypeScript
- Tailwind CSS

Deployment should work cleanly with Cloudflare-managed DNS for `griffinleblanc.ca`. Cloudflare Pages or Vercel are both acceptable deployment targets. The first implementation should keep hosting assumptions light enough to support either.

## Functional Requirements

- The site must be responsive across mobile, tablet, and desktop.
- The homepage must contain the complete core narrative.
- Resume, email, LinkedIn, and GitHub links must be easy to find.
- Featured work must include Faceout and PermiPro.
- Bitcoin Depot / Bitaccess experience must be represented as proof of production engineering credibility.
- Content should be editable in a simple local data structure or small content module rather than hard-coded across many components.
- The initial version should be fast, accessible, and easy to deploy.

## Non-Goals

- No blog for the first version.
- No CMS for the first version.
- No elaborate animation system.
- No separate case-study pages in the first version; featured work should live on the homepage.
- No custom email setup as part of the initial site build.

## Acceptance Criteria

- A visitor can understand Griffin's role, strengths, and best proof points within the first viewport and first scroll.
- The visual style feels simple, beautiful, and professional.
- The site clearly supports full-stack/product engineer roles.
- Faceout, PermiPro, and Bitcoin Depot / Bitaccess are all represented.
- The site can be deployed under `griffinleblanc.ca` without coupling to Faceout.
- The implementation remains small enough to ship quickly and iterate.
