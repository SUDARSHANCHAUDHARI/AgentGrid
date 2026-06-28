# AgentGrid

[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

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

Release scope: public demo. The current version uses local mock agents and is intended to show the control-room workflow before live agent transport is added.

Recommended first deployment target:

- Your own domain (existing portfolio hosting — any Next-capable host)

Suggested environment:

- standalone project
- one deployment per repo
- production branch: `main`

## Next Steps

- add live transport with websockets
- add topology lines between agents
- add richer alerting and incident views

## Author

Built by **Sudarshan Chaudhari** — SudarshanTechLabs.

## License

MIT — see [LICENSE](LICENSE).
