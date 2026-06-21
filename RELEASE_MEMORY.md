# Release Memory: AgentGrid
_Last updated: 2026-06-04_

## Current Status

AgentGrid is a static Next.js prototype for monitoring AI agents. It uses local/mock agent data and is set up to deploy to your own domain via the existing portfolio hosting flow.

Known verification: `pnpm build` and `pnpm exec tsc --noEmit` passed on 2026-06-04.

## Release Target

Public demo release, not a full production product yet.

## Success Criteria

- Production build passes.
- Demo landing screen loads without console errors.
- Mock-agent status cards, filters, search, and inspector work.
- README clearly labels this as a prototype/demo.
- Live URL is added after deployment.

## Ordered Plan

1. Run `pnpm build`.
2. Review UI copy and make prototype language honest.
3. Verify cards, search, filter, status cycling, and inspector behavior.
4. Deploy as a demo on your own domain.
5. Add live URL to README.
6. Plan v2 live transport and topology work separately.

## Risks

- README mentions mock/local agents, so do not market as real monitoring yet.
- Full product requires live transport, topology, alerting, and persistence.

## First Task

Deploy demo after a quick browser smoke check.

## Latest Prep Notes

- Added README release-scope note clarifying mock/local agent demo status.
- Added `out` to `.gitignore`.
- Standalone `next lint` is not configured and prompts interactively; use build/typecheck as current release gate until ESLint is migrated.
