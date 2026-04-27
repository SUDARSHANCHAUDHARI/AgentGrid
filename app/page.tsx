"use client";

import { useMemo, useState } from "react";
import { AddAgentForm } from "../components/AddAgentForm";
import { AgentCard } from "../components/AgentCard";
import { starterAgents, type AgentRecord } from "../lib/starter-data";

export default function HomePage() {
  const [agents, setAgents] = useState<AgentRecord[]>(starterAgents);

  const counts = useMemo(() => {
    return agents.reduce(
      (acc, agent) => {
        acc[agent.status] += 1;
        return acc;
      },
      { idle: 0, running: 0, error: 0 }
    );
  }, [agents]);

  function addAgent(name: string) {
    setAgents((current) => [
      {
        id: `agent-${Date.now()}`,
        name,
        status: "idle",
        activity: "Freshly added and waiting for work.",
        owner: "Local"
      },
      ...current
    ]);
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
            activity: "Processing a queued workflow."
          };
        }

        if (agent.status === "running") {
          return {
            ...agent,
            status: "error",
            activity: "Encountered a retry loop and needs attention."
          };
        }

        return {
          ...agent,
          status: "idle",
          activity: "Recovered and ready for the next task."
        };
      })
    );
  }

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Living Interfaces</p>
        <h1>AgentGrid</h1>
        <p className="lede">
          A visual-first control room for AI agents. This starter keeps the
          scope tight so we can validate interaction before building heavy
          infrastructure.
        </p>
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

      <AddAgentForm onAdd={addAgent} />

      <section className="grid">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onCycle={cycleAgent} />
        ))}
      </section>
    </main>
  );
}
