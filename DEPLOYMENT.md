# AgentGrid Deployment Checklist

## Target

- Host: your own domain (the same hosting flow you use for the rest of the portfolio — VPS, container host, or any Next-capable platform)
- Repo: standalone deployment
- Branch: `main`

## Pre-Deploy

- `pnpm install`
- `pnpm build`
- confirm `.env` is not committed
- review `README.md` and `ROADMAP.md`

## Environment Variables

- copy `.env.example` to `.env` locally if needed
- add production variables to your host's environment / secret store

## First Deployment

1. Point your host at the GitHub repo (or push the build output to your server)
2. Configure as a Next.js (App Router) app
3. Install command: `pnpm install`
4. Build command: `pnpm build`
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
