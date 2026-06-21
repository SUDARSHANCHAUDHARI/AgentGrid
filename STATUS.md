# Status — AgentGrid

**Last updated:** 2026-06-21
**Maturity:** 🟠 `status-prototype` (single-page demo)

## What's done

- Single-page Next.js 15 + React 19 control-room UI
- Status-aware agent cards (idle / running / error) with colored badges
- Live counts panel (idle / running / error)
- Add-agent form
- Free-text search across name, owner, region, tags
- Status filter chips (All / Idle / Running / Error)
- Cycle-status interaction (click an agent to advance state and append a log line)
- Agent inspector panel: heartbeat, region, tags, recent logs
- Extracted pure helper `lib/filterAgents.ts` with combined status + search filter (behavior-preserving refactor from inline code)
- ESLint configured (`next/core-web-vitals`), 0 errors / 0 warnings
- 7 Vitest tests for the filter: all/empty, status filter, empty result, cross-field case-insensitive search, whitespace trim, AND combination, order preservation
- Build, lint, typecheck, tests all green

## What's left

This is a **prototype, not a product.** Real product would need:

- **Real agent integration** — currently the page is seeded with mock `starterAgents` and `addAgent()` creates a local-only record. No backend.
- **Persistence** — refreshing the page wipes everything
- **Real-time updates** — no websocket / SSE / polling; the "queue depth" and "latency" numbers are static
- **Auth** — no login, no multi-user
- **Status cycle is fake** — clicking just rotates through states with canned activity strings
- **Product spec** — what does "control room" really mean? Which agent platforms does it integrate with (LangChain, custom, OpenAI assistants)? What user actions matter (kill, restart, reroute)?

## Quality gates

| Gate | Status |
|---|---|
| Build | ✅ |
| Lint | ✅ 0 errors |
| Typecheck | ✅ |
| Tests | ✅ 7 / 1 suite |

## Deployment

Not yet deployed. Self-hosted on your own domain when ready — but deploying a prototype doesn't change that it's a prototype.
