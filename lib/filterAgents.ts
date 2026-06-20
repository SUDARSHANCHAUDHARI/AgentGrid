import type { AgentRecord, AgentStatus } from "./starter-data";

export type AgentFilter = AgentStatus | "all";

/**
 * Pure filter for the AgentGrid board: combines a status filter with a
 * free-text search over name, owner, region, and tags. Returned in the same
 * order as the input (no sort).
 */
export function filterAgents(
  agents: AgentRecord[],
  filter: AgentFilter,
  search: string
): AgentRecord[] {
  const query = search.trim().toLowerCase();
  return agents.filter((agent) => {
    const matchesFilter = filter === "all" ? true : agent.status === filter;
    if (!matchesFilter) return false;
    if (query.length === 0) return true;
    const haystack = [agent.name, agent.owner, agent.region, ...agent.tags]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}
