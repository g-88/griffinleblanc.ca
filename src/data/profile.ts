export const profile = {
	name: 'Griffin LeBlanc',
	role: 'Full-stack product engineer',
	location: 'Ottawa, ON',
	email: 'griffin.leblanc@gmail.com',
	tagline: 'I craft solutions for complex workflows.',
	summary:
		'What sets me apart is my mix of communication skills, technical judgment, and operational understanding.',
	links: {
		email: 'mailto:griffin.leblanc@gmail.com',
		github: 'https://github.com/g-88',
		linkedin: 'https://www.linkedin.com/in/griffinleblanc',
		resume: '/resume/griffin-leblanc-resume.pdf',
	},
	proofPoints: [
		'React',
		'Next.js',
		'TypeScript',
		'Node.js',
		'MongoDB',
		'AWS',
		'Docker',
		'Playwright',
		'Fintech',
		'Regulatory logic',
		'Internal tools',
		'Automation',
	],
	featuredWork: [
		{
			name: 'Bitcoin Depot / Bitaccess',
			label: 'Production fintech engineering',
			summary:
				'Fintech product work built for real kiosks, regulatory complexity, and high-stakes rollouts.',
			details: [
				'Built state-based regulatory rules with json-rules-engine and production scripts.',
				'Led pricing and fees work that touched customer-facing flows, rules, and production rollout details.',
				'Became a go-to engineer for production rollouts, escalations, and cross-repo troubleshooting.',
			],
			stack: [
				'React',
				'Next.js',
				'TypeScript',
				'Node.js',
				'MongoDB',
				'AWS',
				'Docker',
			],
		},
		{
			name: 'Faceout',
			label: 'Founder / Developer',
			siteUrl: 'https://faceout.ca',
			summary:
				'Small Ottawa web studio helping local businesses get found and look credible.',
			details: [
				'Focuses on local search, clean pages, and obvious ways for customers to get in touch.',
				'Uses reusable pieces so projects move quickly without all looking the same.',
			],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Tailwind',
				'Vercel',
				'Resend',
				'Vitest',
			],
		},
		{
			name: 'PermiPro',
			label: 'Founding Engineer',
			siteUrl: 'https://permipro.io',
			summary: 'Automating permit application workflows for municipalities.',
			details: [
				'Built an enterprise-grade application from the ground up to solve a real-world problem.',
				'Our goal is to simplify a slow, multi-party permit process for applicants, contractors, and municipalities.',
			],
			stack: [
				'SaaS',
				'Workflow automation',
				'Product discovery',
				'MVP planning',
			],
		},
	],
	operatingStyle: [
		{
			title: 'I like messy workflows.',
			body: 'The interesting work usually spans product, operations, and engineering—not just the code.',
		},
		{
			title: 'I care about rollout.',
			body: 'A feature is not done just because it works locally. Someone has to test it, ship it, support it, and explain it.',
		},
		{
			title: 'I stay close to production.',
			body: 'Logs, edge cases, customer impact, support noise, and weird constraints all belong in the engineering conversation.',
		},
	],
} as const;
