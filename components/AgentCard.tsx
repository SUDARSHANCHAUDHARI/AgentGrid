import type { AgentRecord } from "../lib/starter-data";

type AgentCardProps = {
  agent: AgentRecord;
  onCycle: (id: string) => void;
};

export function AgentCard({ agent, onCycle }: AgentCardProps) {
  return (
    <article className={`agentCard ${agent.status}`}>
      <div className="agentTop">
        <div>
          <h2>{agent.name}</h2>
          <p>{agent.owner}</p>
        </div>
        <span className="badge">
          <span className="badgeDot" />
          {agent.status}
        </span>
      </div>

      <p className="activity">{agent.activity}</p>

      <div className="agentFooter">
        <p className="agentMeta">Tap the state button to simulate activity.</p>
        <button type="button" onClick={() => onCycle(agent.id)}>
          Cycle State
        </button>
      </div>
    </article>
  );
}
