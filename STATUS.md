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

## File-by-file checklist

### App shell
- [x] `app/layout.tsx` — root layout
- [x] `app/page.tsx` — control-room UI (uses extracted `filterAgents` helper)
- [x] `app/globals.css` — base styles

### Components
- [x] `components/AddAgentForm.tsx` — local-only agent creation
- [x] `components/AgentCard.tsx` — status-aware card with cycle action
- [x] `components/AgentInspector.tsx` — heartbeat / region / tags / logs panel

### Lib
- [x] `lib/starter-data.ts` — mock agent + log shapes and seed data
- [x] `lib/filterAgents.ts` — pure filter+search helper (extracted)

### Tests
- [x] `lib/filterAgents.test.ts` — 7 tests (filter, search, AND, order)

### Quality + scaffolding
- [x] ESLint flat-compatible config (`.eslintrc.json`, next/core-web-vitals)
- [x] `typecheck` + `test` scripts
- [x] Build + lint + typecheck green

### Not done (product gaps — need spec)
- [ ] Real agent integration (currently mock data only)
- [ ] Persistence (refresh wipes state)
- [ ] Real-time updates (no websocket / SSE / polling)
- [ ] Auth + multi-user
- [ ] Real status-cycle (currently rotates through canned activity strings)
- [ ] Product spec answering: which agent platforms does it integrate with? Which user actions matter (kill / restart / reroute)?

## Categorized work remaining

| Item | Effort | Bucket | Blocker | Priority |
|------|--------|--------|---------|----------|
| Deploy as a prototype demo | ~30m | 🔑 Needs hosting | hosting access; no env vars | P2 |
| Real agent integration | weeks | 🎯 Needs spec | which agent runtime? | P1 |
| Persistence layer | 1d | 🎯 Needs spec then 🟦 Pure code | which DB? Postgres / SQLite / KV? | P2 |
| Real-time updates | 1–2d | 🎯 Needs spec then 🟦 Pure code | which transport? WebSocket / SSE / polling? | P2 |
| Auth + multi-user | 2–3d | 🎯 Needs spec then 🟦 Pure code | which provider? Clerk / NextAuth / custom? | P2 |
| Real status-cycle backed by data | half day | 🎯 Needs spec then 🟦 Pure code | depends on real agent integration first | P3 |

## Product spec questions (answer one sentence each)

1. **What agent runtime does AgentGrid monitor?** e.g. LangChain agents, OpenAI Assistants, custom in-house agents, BullMQ jobs, n8n flows.
2. **What user actions matter?** e.g. read-only dashboard, or also kill / restart / re-route a stuck agent.
3. **Single user or team?** Personal dashboard vs multi-user with auth.
4. **What scale?** 10 agents on a laptop, or 1000 agents across regions.
5. **Persistence requirement:** must runs survive a refresh? Must they survive a server restart? Forever?

## Release plan

**Current state = prototype demo.** Release plan once spec'd:

1. Tag the current state as `v0.1.0 — UI prototype, mock data` so people know what they're looking at.
2. Implement Phase 1 features (per spec answers above) → `v0.2.0`.
3. Add real-time + persistence → `v0.3.0`.
4. Add auth → `v1.0.0`.

### Deploy prerequisites (for the prototype demo)
**None.** Zero env vars, no backend. Just your hosting.
