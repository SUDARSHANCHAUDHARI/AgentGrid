import type { AgentRecord } from "../lib/starter-data";

type AgentInspectorProps = {
  agent: AgentRecord | null;
};

export function AgentInspector({ agent }: AgentInspectorProps) {
  if (!agent) {
    return (
      <aside className="inspector empty">
        <p className="eyebrow">Agent Inspector</p>
        <h2>Select an agent</h2>
        <p className="lede">
          Pick a card from the grid to inspect logs, queue depth, latency, and
          recent activity.
        </p>
      </aside>
    );
  }

  return (
    <aside className="inspector">
      <p className="eyebrow">Agent Inspector</p>
      <div className="inspectorHeader">
        <div>
          <h2>{agent.name}</h2>
          <p>{agent.owner}</p>
        </div>
        <span className={`statusBadge ${agent.status}`}>{agent.status}</span>
      </div>

      <p className="inspectorActivity">{agent.activity}</p>

      <section className="inspectorSection">
        <div className="inspectorMetric">
          <span>Queue depth</span>
          <strong>{agent.queueDepth}</strong>
        </div>
        <div className="inspectorMetric">
          <span>Latency</span>
          <strong>{agent.latencyMs}ms</strong>
        </div>
        <div className="inspectorMetric">
          <span>Heartbeat</span>
          <strong>{agent.lastHeartbeat}</strong>
        </div>
        <div className="inspectorMetric">
          <span>Region</span>
          <strong>{agent.region}</strong>
        </div>
      </section>

      <section className="inspectorSection logs">
        <div className="sectionTitleRow">
          <h3>Recent Logs</h3>
          <span>{agent.logs.length} events</span>
        </div>

        <div className="logList">
          {agent.logs.map((log) => (
            <article key={log.id} className={`logItem ${log.level}`}>
              <div className="logMeta">
                <span className="logLevel">{log.level}</span>
                <time>{log.time}</time>
              </div>
              <p>{log.message}</p>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}
