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

## Analytics

Vercel Analytics is enabled via `@vercel/analytics` when deployed on Vercel. Turn on Analytics for the project in the [Vercel dashboard](https://vercel.com/docs/analytics).

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
