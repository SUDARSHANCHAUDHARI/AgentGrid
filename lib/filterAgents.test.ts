import { describe, it, expect } from "vitest";
import { filterAgents } from "./filterAgents";
import type { AgentRecord } from "./starter-data";

function agent(over: Partial<AgentRecord>): AgentRecord {
  return {
    id: "a",
    name: "Agent A",
    owner: "Team Alpha",
    status: "idle",
    activity: "",
    queueDepth: 0,
    latencyMs: 0,
    lastHeartbeat: "",
    region: "Singapore",
    tags: [],
    logs: [],
    ...over,
  };
}

const sample: AgentRecord[] = [
  agent({ id: "1", name: "Intake Router", status: "running", region: "Singapore", tags: ["router"] }),
  agent({ id: "2", name: "Cost Analyzer", status: "idle", region: "Bangkok", tags: ["finance"] }),
  agent({ id: "3", name: "Retry Worker", status: "error", owner: "Ops Team", tags: ["retry", "ops"] }),
];

describe("filterAgents", () => {
  it("returns everything when filter=all and search is empty", () => {
    expect(filterAgents(sample, "all", "")).toHaveLength(3);
  });

  it("filters by status", () => {
    expect(filterAgents(sample, "error", "")).toEqual([sample[2]]);
  });

  it("returns empty when status filter matches nothing", () => {
    expect(filterAgents([sample[0]], "error", "")).toEqual([]);
  });

  it("searches across name, owner, region, and tags (case-insensitive)", () => {
    expect(filterAgents(sample, "all", "BANGKOK")).toEqual([sample[1]]);
    expect(filterAgents(sample, "all", "router")).toEqual([sample[0]]);
    expect(filterAgents(sample, "all", "ops team")).toEqual([sample[2]]);
    expect(filterAgents(sample, "all", "retry")).toEqual([sample[2]]);
  });

  it("ignores leading and trailing whitespace in the query", () => {
    expect(filterAgents(sample, "all", "  finance  ")).toEqual([sample[1]]);
  });

  it("combines status filter and search (AND)", () => {
    expect(filterAgents(sample, "running", "router")).toEqual([sample[0]]);
    expect(filterAgents(sample, "idle", "router")).toEqual([]);
  });

  it("preserves input order", () => {
    const result = filterAgents(sample, "all", "");
    expect(result.map((a) => a.id)).toEqual(["1", "2", "3"]);
  });
});
