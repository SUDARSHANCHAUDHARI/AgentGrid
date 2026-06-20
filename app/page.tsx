"use client";

import { useMemo, useState } from "react";
import { AddAgentForm } from "../components/AddAgentForm";
import { AgentCard } from "../components/AgentCard";
import { AgentInspector } from "../components/AgentInspector";
import { starterAgents, type AgentRecord, type AgentStatus } from "../lib/starter-data";
import { filterAgents } from "../lib/filterAgents";

const statusFilters: Array<{ label: string; value: AgentStatus | "all" }> = [
  { label: "All", value: "all" },
  { label: "Idle", value: "idle" },
  { label: "Running", value: "running" },
  { label: "Error", value: "error" }
];

export default function HomePage() {
  const [agents, setAgents] = useState<AgentRecord[]>(starterAgents);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<AgentStatus | "all">("all");
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(starterAgents[0]?.id ?? null);

  const counts = useMemo(() => {
    return agents.reduce(
      (acc, agent) => {
        acc[agent.status] += 1;
        return acc;
      },
      { idle: 0, running: 0, error: 0 }
    );
  }, [agents]);

  const filteredAgents = useMemo(
    () => filterAgents(agents, filter, search),
    [agents, filter, search]
  );

  const selectedAgent =
    agents.find((agent) => agent.id === selectedAgentId) ?? filteredAgents[0] ?? null;

  function addAgent(name: string) {
    const nextAgent: AgentRecord = {
      id: `agent-${Date.now()}`,
      name,
      status: "idle",
      activity: "Freshly added and waiting for work.",
      owner: "Local",
      queueDepth: 0,
      latencyMs: 52,
      lastHeartbeat: "just now",
      region: "Bangkok",
      tags: ["new", "local"],
      logs: [
        {
          id: `log-${Date.now()}`,
          level: "info",
          time: "now",
          message: "Agent created locally and added to the board."
        }
      ]
    };

    setAgents((current) => [nextAgent, ...current]);
    setSelectedAgentId(nextAgent.id);
  }

  function cycleAgent(id: string) {
    setAgents((current) =>
      current.map((agent) => {
        if (agent.id !== id) {
          return agent;
        }

        if (agent.status === "idle") {
          return {
            ...agent,
            status: "running",
            activity: "Processing a queued workflow.",
            queueDepth: Math.max(agent.queueDepth, 6),
            latencyMs: 148,
            lastHeartbeat: "3s ago",
            logs: [
              {
                id: `log-${Date.now()}`,
                level: "info",
                time: "now",
                message: "Execution started from the control room simulation."
              },
              ...agent.logs
            ]
          };
        }

        if (agent.status === "running") {
          return {
            ...agent,
            status: "error",
            activity: "Encountered a retry loop and needs attention.",
            queueDepth: agent.queueDepth + 2,
            latencyMs: 920,
            lastHeartbeat: "48s ago",
            logs: [
              {
                id: `log-${Date.now()}`,
                level: "error",
                time: "now",
                message: "Control-room simulation marked this agent as degraded."
              },
              ...agent.logs
            ]
          };
        }

        return {
          ...agent,
          status: "idle",
          activity: "Recovered and ready for the next task.",
          queueDepth: 1,
          latencyMs: 76,
          lastHeartbeat: "5s ago",
          logs: [
            {
              id: `log-${Date.now()}`,
              level: "info",
              time: "now",
              message: "Recovery complete and traffic returned to nominal state."
            },
            ...agent.logs
          ]
        };
      })
    );
  }

  return (
    <main className="shell">
      <section className="heroBlock">
        <div className="hero">
          <p className="eyebrow">Living Interfaces</p>
          <h1>AgentGrid</h1>
          <p className="lede">
            A control-room prototype for AI operations. Track health, inspect
            logs, and see which agents are active before building the heavy live
            transport layer.
          </p>
        </div>

        <div className="heroSide">
          <div className="pulseMap">
            <span className="pulseNode nodeA" />
            <span className="pulseNode nodeB" />
            <span className="pulseNode nodeC" />
            <span className="pulseLine lineA" />
            <span className="pulseLine lineB" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="statCard">
          <span>Idle</span>
          <strong>{counts.idle}</strong>
        </div>
        <div className="statCard">
          <span>Running</span>
          <strong>{counts.running}</strong>
        </div>
        <div className="statCard">
          <span>Error</span>
          <strong>{counts.error}</strong>
        </div>
      </section>

      <section className="controlBar">
        <AddAgentForm onAdd={addAgent} />

        <div className="toolbar">
          <input
            className="searchInput"
            placeholder="Search agents, teams, tags, regions"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="filterRow">
            {statusFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={filter === item.value ? "filterChip active" : "filterChip"}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="board">
        <section className="grid">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              selected={agent.id === selectedAgent?.id}
              onCycle={cycleAgent}
              onSelect={setSelectedAgentId}
            />
          ))}
        </section>

        <AgentInspector agent={selectedAgent} />
      </section>
    </main>
  );
}
