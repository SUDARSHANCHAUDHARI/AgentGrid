# AgentGrid Deployment Checklist

## Target

- Recommended first host: Vercel
- Repo: standalone deployment
- Branch: `main`

## Pre-Deploy

- `pnpm install`
- `pnpm build`
- confirm `.env` is not committed
- review `README.md` and `ROADMAP.md`

## Environment Variables

- copy `.env.example` to `.env` locally if needed
- add production variables in the hosting dashboard

## First Deployment

1. Import the GitHub repo into Vercel
2. Keep framework detection as Next.js
3. Keep install command as `pnpm install`
4. Keep build command as `pnpm build`
5. Deploy from `main`

## Post-Deploy

- confirm landing page loads
- confirm no console errors
- confirm metadata/title is correct
- check mobile layout

## Later

- add custom domain
- add analytics/monitoring
- add auth and protected views when needed
