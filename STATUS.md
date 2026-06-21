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
