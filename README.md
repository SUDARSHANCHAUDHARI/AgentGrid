# AgentGrid

AgentGrid is a standalone control-room prototype for AI agents.

## What It Is

AgentGrid explores a visual-first way to monitor agent systems:

- status-aware agent cards
- queue depth and latency signals
- log-focused inspection workflow
- search and filter controls for quick triage

## Current Features

- add local mock agents
- cycle agents between `idle`, `running`, and `error`
- inspect heartbeat, region, tags, and recent logs
- filter by status and search by team, tags, or region

## Stack

- Next.js
- React
- TypeScript
- pnpm

## Run Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Deployment

Recommended first deployment target:

- Vercel

Suggested environment:

- standalone project
- one deployment per repo
- production branch: `main`

## Next Steps

- add live transport with websockets
- add topology lines between agents
- add richer alerting and incident views
