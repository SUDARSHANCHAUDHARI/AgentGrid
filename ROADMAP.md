# AgentGrid Roadmap

## Current Direction

AgentGrid should evolve into a visual control room for AI agents, with clear health signals, faster triage, and more believable live-system behavior.

## Near-Term Improvements

- tighten spacing and responsiveness for dense dashboards
- improve selected-agent inspector hierarchy
- add empty states for zero search results
- add clearer visual contrast for `idle`, `running`, and `error`
- refine button sizing and mobile stacking

## Next Features

- live status simulation with timed state changes
- connection lines between agents
- incident banner for system-wide failures
- sortable views by latency, queue depth, and error count
- recent activity stream across the entire grid

## Add-Ons

- agent groups or clusters
- workspace switcher
- environment badges like `prod`, `staging`, `dev`
- quick actions like pause, retry, reroute
- filter chips for owner/team

## Good To Have

- keyboard navigation between agents
- compact and expanded board modes
- screenshot-friendly presentation mode
- exportable incident summary card
- animated topology map

## Production Readiness Later

- real websocket transport
- auth and workspace permissions
- telemetry persistence
- error boundaries and monitoring
- deployment config and environment docs
