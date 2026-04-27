import type { AgentRecord } from "../lib/starter-data";

type AgentCardProps = {
  agent: AgentRecord;
  selected: boolean;
  onCycle: (id: string) => void;
  onSelect: (id: string) => void;
};

export function AgentCard({ agent, selected, onCycle, onSelect }: AgentCardProps) {
  return (
    <article
      className={`agentCard ${agent.status} ${selected ? "selected" : ""}`}
      onClick={() => onSelect(agent.id)}
    >
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

      <div className="metricRow">
        <div className="metricPill">
          <span>Queue</span>
          <strong>{agent.queueDepth}</strong>
        </div>
        <div className="metricPill">
          <span>Latency</span>
          <strong>{agent.latencyMs}ms</strong>
        </div>
        <div className="metricPill">
          <span>Region</span>
          <strong>{agent.region}</strong>
        </div>
      </div>

      <div className="tagRow">
        {agent.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="agentFooter">
        <p className="agentMeta">Heartbeat {agent.lastHeartbeat}</p>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onCycle(agent.id);
          }}
        >
          Cycle State
        </button>
      </div>
    </article>
  );
}
